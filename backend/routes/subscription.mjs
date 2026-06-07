import { Router } from "express";
import { supabase } from "../utils/supabase.mjs";

const newsletterRouter = Router()

newsletterRouter.post('/create-newsletter-subscription', async (req, res) => {
    try {
        console.log("Incoming request to newsletter subscription endpoint")
        console.log("Request body:", req.body)

        const {
            email
        } = req.body

        console.log("Parsed field:", {
            email
        })

        const {error} = await supabase
            .from('newsletter_subscribers')
            .insert([
                {
                    email
                }
            ])
        
        if (error) {
            console.error("Supabase insert error:", error.message)
            return res.status(400).json({
                success: false,
                message: error.message
            })
        }

        console.log("Subscriber inserted successfully for:", email)

        return res.status(200).json({
            success: true,
            message: 'Subscription successful'
        })

    } catch (error) {
        console.error("Server error in /create-newsletter-subscription:", error)
        return res.status(500).json({
            success: false,
            message: 'Server error'
        })
    }
})

export default newsletterRouter