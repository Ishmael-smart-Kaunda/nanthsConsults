import { Router } from "express";
import { supabase } from "../utils/supabase.mjs";

const bookingRoute = Router()

bookingRoute.post('/consultation-booking', async (req, res) => {

    try {
        console.log("The consultation booking endpoint has been hit!")

        const {
            full_name,
            email,
            organization_name,
            service_required,
            message
            
        } = req.body

        console.log(`Parsed Data:`, {
            full_name,
            email,
            organization_name,
            service_required,
            message
        })

        const {error} = await supabase
                        .from('bookings')
                        .insert([
                            {
                                full_name,
                                email,
                                organization_name,
                                service_required,
                                message
                            }
                        ])
        
        if (error) {
            console.error("Supabase insert error: ", error.message)
            return res.status(400).json({
                success: false,
                message: error.message
            })
        }

        console.log(`Booking by ${full_name} successfully inserted`)

        return res.status(200).json({
            success: true,
            message: "Booking Successful"
        })
 
    } catch (error) {
        console.error(`Server error at /consultation-booking`, error)
        return res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
})

export default bookingRoute