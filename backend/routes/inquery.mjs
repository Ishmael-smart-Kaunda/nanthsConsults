import { Router } from "express";
import { supabase } from "../utils/supabase.mjs";

const inqueryRouter = Router()

inqueryRouter.post('/create-inquiry', async (req, res) => {
    try {
            console.log("The create inquery endpoint has been hit")

    const {
        full_name,
        email,
        subject,
        message
    } = req.body

    console.log(`Parsed load:`, {
        full_name,
        email,
        subject,
        message
    })

    const {error} = await supabase
        .from('inquiries')
        .insert([
            {
                full_name,
                email,
                subject,
                message
            }
        ])

    if (error) {
        console.error("Supabase insert error:", error.message)
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }

    console.log(`Inquery by ${full_name} successfully inserted into table`)

    return res.status(200).json({
        success: true,
        message: "Inquery successful"
    })

    } catch (error) {
        console.error(`Server error at /create-inquery: ${error}`)
        return res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
})

export default inqueryRouter