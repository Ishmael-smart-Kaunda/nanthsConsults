import { useState } from "react"

const API_URL = 'http://localhost:3000'

export default function ConsultForm() {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organizationName: '',
    serviceRequired: '',
    message: ''
  })

  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
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

    setError('')
    setLoading(true)

    const payload = {
      full_name: formData.fullName,
      email: formData.email,
      organization_name: formData.organizationName,
      service_required: formData.serviceRequired,
      message: formData.message
    }

    console.log(payload)

    try {
      const response = await fetch(`${API_URL}/api/consultation-booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const data = await response.json()
      console.log(data)

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Consultation booking failed')
      }

      setSubmitted(true)
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again!"
      )
    }

  }

  return(
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 py-5 rounded-r-sm font-semibold text-[18px]">
                    <fieldset className="flex flex-col gap-1">
                      <label htmlFor="" className="text-gray-950">Your name</label>
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
                      <label htmlFor="" className="text-gray-950">Email</label>
                      <input 
                      type="email"
                      name="email" 
                      onChange={handleInputChange}
                      value={formData.email}
                      placeholder="eg. nanthConsults@gmail.com" 
                      className="w-full p-3 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                      />
                      </fieldset>

                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="" className="text-gray-950">Your Organisation</label>
                        <input 
                        type="text"
                        name="organizationName" 
                        onChange={handleInputChange}
                        value={formData.organizationName}
                        placeholder="Company name" 
                        className="w-full p-3 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                        />
                      </fieldset>
                    <fieldset className="flex flex-col gap-1">
                        <label className="text-gray-950">Service needed</label>
                        <select 
                          name="serviceRequired" 
                          onChange={handleInputChange}
                          value={formData.serviceRequired} 
                          id="" 
                          className="w-full p-3 text-gray-500 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                        >
                            <option value="">
                              Select a service
                            </option>

                            <option value="Recruitment, Selection and Employee Retention">
                              Recruitment, Selection and Employee Retention
                            </option>

                            <option value="Creation of HR Systems">
                              Creation of HR Systems
                            </option>

                            <option value="Job Evaluation and Salary Survey">
                              Job Evaluation and Salary Survey
                            </option>

                            <option value="Performance Management">
                              Performance Management
                            </option>

                            <option value="Organizational Design and Business Development">
                              Organizational Design and Business Development
                            </option>

                            <option value="Policies and Contract Formulation">
                              Policies and Contract Formulation
                            </option>

                            <option value="Training and Development">
                              Training and Development
                            </option>

                            <option value="HR Outsourcing Service">
                              HR Outsourcing Service
                            </option>

                            <option value="Integrated Management Systems (IMS)">
                              Integrated Management Systems (IMS)
                            </option>    
                        </select>
                    </fieldset>
                    <fieldset className="flex flex-col gap-1">
                        <label className="text-gray-950">Brief</label>
                        <textarea 
                        name="message" 
                        onChange={handleInputChange}
                        value={formData.message}
                        placeholder="Describe your needs..." 
                        className="w-full p-4 text-gray-400 bg-gray-800 shadow-sm border-2 border-gray-900 rounded-xl  focus:outline-none "
                        >
                        </textarea>
                    </fieldset>
                                        
                    <button 
                    className="cursor-pointer w-full md:w-1/2 px-4 py-3 bg-gray-800  gray-800 text- amber-700 950 white font-bold rounded-md hover:opacity-80"
                    >
                      Book Consultation
                    </button>
                                        
    </form>
  )
}