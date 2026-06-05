import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import newsletterRouter from './routes/subscription.mjs'
import inqueryRouter from './routes/inquery.mjs'
import bookingRoute from './routes/booking.mjs'

dotenv.config()

const app = express()

const frontendOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    process.env.FRONTEND_URL
].filter(Boolean)

app.use(
    cors({
        origin: frontendOrigins,
    })
)

app.use(express.json())

app.use('/api', newsletterRouter)
app.use('/api', inqueryRouter)
app.use('/api', bookingRoute)

app.get('/health', (_, res) => {
    res.json({status: 'ok'})
})




const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})