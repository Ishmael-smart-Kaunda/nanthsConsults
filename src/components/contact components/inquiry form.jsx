import { useState } from "react"

const API_URL = "http://localhost:3000"

export default function InquiryForm(){

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        setError('')

        const payload = {
            full_name: formData.fullName,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
        }

        try {
            const response = await fetch(`${API_URL}/api/create-inquiry`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })

            const data = await response.json()
            console.log(data)

            if (!response.ok || !data.success) {
                throw new Error(data.message || 'Inquery not submitted')
            }

            setSubmitted(true)
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again"
            )
        } finally {
            setLoading(false)
            setFormData({
                fullName: "",
                email: "",
                subject: "",
                message: ""
            })
        }
    }


    return(
                              
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 py-5 rounded-r-sm font-semibold text-[18px]">
                <fieldset className="flex flex-col gap-1">
                    <label className="text-gray-950">Your name</label>
                    <input 
                        type="text"
                        name="fullName"
                        onChange={handleInputChange}
                        value={formData.fullName}
                        placeholder="Full name" 
                        className="w-full p-3 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                        required
                    />
                </fieldset>

                <fieldset className="flex flex-col gap-1">
                    <label className="text-gray-950">Email</label>
                    <input 
                        type="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email" 
                        className="w-full p-3 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                    />
                </fieldset>

                <fieldset className="flex flex-col gap-1">
                    <label className="text-gray-950">Subject</label>
                    <input 
                        type="text"
                        name="subject" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this about?" 
                        className="w-full p-3 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                    />
                </fieldset>

                <fieldset className="flex flex-col gap-1">
                    <label className="text-gray-950">Message</label>
                    <textarea 
                        name="message" 
                        type="text"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message..." 
                        className="w-full p-3 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                    >
                    </textarea>
                </fieldset>
                                        
                    <button 
                    className="cursor-pointer w-full md:w-1/2 px-4 py-3 bg-gray-800 font-bold rounded-md hover:opacity-80">Send Your message</button>
                                        
        </form>
                            
    )
}