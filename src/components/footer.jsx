import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

import { supabase } from "../utils/supabaseClient";

import { useState } from "react";

import { NavLink, Link } from "react-router-dom";
import { VscArrowSmallRight } from "react-icons/vsc";

import logo from "../assets/images/logo/nanth-logo.jpeg";

const API_URL = import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export default function Footer() {
  const [formData, setFormData] = useState({
    email: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

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

    

    try {
      // const response = await fetch(`${API_URL}/api/create-newsletter-subscription`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(payload)
      // })

      // const data = await response.json()
      // console.log(data)

      // if (!response.ok || !data.success) {
      //   throw new Error(data.message || 'Newletter Subscription Failed')
      // } 

      const payload = {
        email: formData.email
      }

            const { data, error } = await supabase
  .from("newsletter_subscribers")
  .insert([
    {
      email: formData.email,
    },
  ])
  .select();

console.log("Inserted:", data);

if (error) {
  console.error(error);
  throw new Error(error.message);
}


      setSubmitted(true)
    } catch (error) {
      setError(
        error instanceof Error
        ? error.message
        : 'Something went wrong. Please try again'
      )
    } finally {
      setLoading(false)
      setFormData({
        email: ""
      })
    }
  }

  const resetForm = () => {
  setSubmitted(false)
  setError('')
  setFormData({
    email: ''
  })
}


  return (
    <footer className="w-full bg-[#111111] overflow-hidden">

      <div
        className="
          max-w-[1600px]
          mx-auto
          px-6
          py-16
          md:px-12
          lg:px-24
          lg:py-24
        "
      >

        {/* Main Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-[1.1fr_0.8fr_1fr]
            gap-12
            pb-16
            border-b
            border-white/10
          "
        >

          {/* Brand Column */}
          <div className="flex flex-col justify-between gap-8">

            <div>

              <img
                className="
                  w-24
                  h-24
                  object-cover
                  rounded-2xl
                  mb-8
                "
                src={logo}
                alt="NaNth Consults Logo"
              />

              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  leading-[120%]
                  text-white
                  max-w-md
                "
              >
                Strategic Support for Growing Organizations.
              </h2>

            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">

              <Link
                to="https://web.facebook.com/profile.php?id=61552117840314"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                <RiFacebookBoxFill size={24} color="white" />
              </Link>

              <Link
                to="https://www.linkedin.com/in/nanth-consults-58723741b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkcFjsVwdRAmBmgU8CFirEQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                <RiLinkedinBoxFill size={24} color="white" />
              </Link>

              <Link
                to="#"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                <RiInstagramFill size={24} color="white" />
              </Link>

            </div>

          </div>

          {/* Navigation */}
          <div>

            <p
              className="
                uppercase
                tracking-[0.2em]
                text-sm
                font-semibold
                text-gray-400
                mb-6
              "
            >
              Navigation
            </p>

            <div className="flex flex-col gap-4">

              <NavLink
                to="services"
                className="
                  text-white
                  text-lg
                  hover:text-amber-400
                  transition-colors
                  duration-300
                  w-fit
                "
              >
                Services
              </NavLink>

              <NavLink
                to="about"
                className="
                  text-white
                  text-lg
                  hover:text-amber-400
                  transition-colors
                  duration-300
                  w-fit
                "
              >
                About
              </NavLink>

              <NavLink
                to="blog"
                className="
                  text-white
                  text-lg
                  hover:text-amber-400
                  transition-colors
                  duration-300
                  w-fit
                "
              >
                Insights
              </NavLink>

              <NavLink
                to="contact"
                className="
                  text-white
                  text-lg
                  hover:text-amber-400
                  transition-colors
                  duration-300
                  w-fit
                "
              >
                Contact
              </NavLink>

            </div>

          </div>

{/* Newsletter */}
<div>

  <p
    className="
      uppercase
      tracking-[0.2em]
      text-sm
      font-semibold
      text-gray-400
      mb-6
    "
  >
    Stay Updated
  </p>

  <h3
    className="
      text-2xl
      font-semibold
      text-white
      leading-[140%]
      mb-6
    "
  >
    Receive the latest insights on workforce management,
    organizational growth, and HR best practices.
  </h3>

  {/* Success State */}
  {submitted ? (

    <div
      className="
        bg-green-500/10
        border
        border-green-500/20
        rounded-2xl
        p-5
        mb-4
      "
    >
      <h4
        className="
          text-green-400
          font-semibold
          mb-2
        "
      >
        Subscription Successful 🎉
      </h4>

      <p className="text-gray-300 text-sm leading-6">
        Thank you for subscribing to the NaNth Consults
        newsletter. You'll receive the latest HR,
        workforce, and organizational development insights.
      </p>

      <button
        onClick={resetForm}
        className="
          mt-4
          text-amber-400
          text-sm
          font-semibold
          hover:text-amber-300
          transition-colors
          cursor-pointer
        "
      >
        Subscribe another email
      </button>
    </div>

  ) : (

    <>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="
          flex
          items-center
          bg-white/5
          border
          border-white/10
          rounded-2xl
          overflow-hidden
          mb-4
        "
      >

        <input
          type="email"
          placeholder="Enter your email"
          className="
            flex-1
            bg-transparent
            px-5
            py-4
            text-white
            placeholder:text-gray-400
            outline-none
          "
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="
            bg-amber-700
            hover:bg-amber-600
            transition-all
            duration-300
            px-5
            py-4
            cursor-pointer
            disabled:opacity-60
            disabled:cursor-not-allowed
            flex
            items-center
            justify-center
            min-w-[72px]
          "
        >
          {loading ? (
            <div
              className="
                w-5
                h-5
                border-2
                border-white/30
                border-t-white
                rounded-full
                animate-spin
              "
            />
          ) : (
            <VscArrowSmallRight
              size={24}
              color="white"
            />
          )}
        </button>

      </form>

      {/* Error Message */}
      {error && (
        <div
          className="
            bg-red-500/10
            border
            border-red-500/20
            rounded-xl
            px-4
            py-3
            mb-4
          "
        >
          <p
            className="
              text-red-400
              text-sm
            "
          >
            {error}
          </p>
        </div>
      )}
    </>
  )}

  <small className="text-gray-400 leading-6">
    By subscribing, you agree to receive updates,
    insights, and organizational support resources
    from NaNth Consults.
  </small>

</div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row gap-4 items-center justify-between">

          <small className="text-gray-500">
            © 2026 NaNth Consults. All Rights Reserved.
          </small>

          <small className="text-gray-500">
            Designed & Developed by CoreStack.
          </small>

        </div>

      </div>

    </footer>
  );
}