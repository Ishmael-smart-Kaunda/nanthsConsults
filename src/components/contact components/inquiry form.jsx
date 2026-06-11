import { useState } from "react"

const API_URL = import.meta.env.VITE_BACKEND_URL

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
                <div className="inline-flex gap-4">
                <label className="flex flex-col text-gray-500 gap-3">
                     Your name
                    <input 
                        type="text"
                        name="fullName"
                        onChange={handleInputChange}
                        value={formData.fullName}
                        placeholder="Full name" 
                        className="w-full p-3 text-gray-900 bg-gray-300 border-2 border-gray-400/40 rounded-xl  focus:outline-none "
                        required
                    />
                   
                </label>

                <label className="flex flex-col text-gray-500 gap-3">
                     Email
                    <input 
                        type="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email" 
                        className="w-full p-3 text-gray-900 bg-gray-300 border-2 border-gray-400/40 rounded-xl  focus:outline-none "
                    />
                </label>
                </div>
                <label className="flex flex-col text-gray-500 gap-3">
                    Subject
                    <input 
                        type="text"
                        name="subject" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this about?" 
                        className="w-full p-3 text-gray-900 bg-gray-300 border-2 border-gray-400/40 rounded-xl  focus:outline-none "
                    />
                </label>

                <label className="flex flex-col text-gray-500 gap-3">
                    Message
                    <textarea 
                        name="message" 
                        type="text"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message..." 
                        className="w-full p-3 text-gray-900 bg-gray-300 shadow-sm border-2 border-gray-400/40 rounded-xl  focus:outline-none "
                    >
                    </textarea>
                </label>
                                        
                    <button 
                    className="cursor-pointer w-full md:w-fit px-6 py-4 text-white bg-ascent  font-bold rounded-md hover:opacity-80 whitespace-nowrap">Send Your message</button>
                                        
        </form>
                            
    )
}