import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const API_URL = import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";
  
export default function InquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear success message when user starts typing again
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSubmitted(false);

    const payload = {
      full_name: formData.fullName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      // const response = await fetch(
      //   `${API_URL}/api/create-inquiry`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(payload),
      //   }
      // );

      const {error} = supabase
                    .from('inquiries')
                    .insert([
                      {
                        full_name,
                        email,
                        subject,
                        message
                      }
                    ])

      // const data = await response.json();

      // if (!response.ok || !data.success) {
      //   throw new Error(
      //     data.message || "Inquiry not submitted"
      //   );
      // }

      if (error) {
        throw new Error(
          data.message || "Inquiry not submitted"
        );
      }

      setSubmitted(true);

      // Clear form after successful submission
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setError(
        error?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full
        flex
        flex-col
        gap-6
        py-5
        rounded-r-sm
        font-semibold
        text-[18px]
      "
    >
      {/* Success Message */}
      {submitted && (
        <div
          className="
            bg-green-50
            border
            border-green-200
            text-green-700
            px-5
            py-4
            rounded-xl
            text-base
            font-medium
          "
        >
          ✅ Your inquiry has been sent successfully.
          We'll get back to you shortly.
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div
          className="
            bg-red-50
            border
            border-red-200
            text-red-700
            px-5
            py-4
            rounded-xl
            text-base
            font-medium
          "
        >
          ❌ {error}
        </div>
      )}

      {/* Name + Email */}
      <div className="flex flex-col md:flex-row gap-4">
        <label className="flex flex-col text-gray-500 gap-3 flex-1">
          Your Name

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Full name"
            className="
              w-full
              p-3
              text-gray-900
              bg-gray-300
              border-2
              border-gray-400/40
              rounded-xl
              focus:outline-none
            "
            required
          />
        </label>

        <label className="flex flex-col text-gray-500 gap-3 flex-1">
          Email

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="
              w-full
              p-3
              text-gray-900
              bg-gray-300
              border-2
              border-gray-400/40
              rounded-xl
              focus:outline-none
            "
            required
          />
        </label>
      </div>

      {/* Subject */}
      <label className="flex flex-col text-gray-500 gap-3">
        Subject

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="What is this about?"
          className="
            w-full
            p-3
            text-gray-900
            bg-gray-300
            border-2
            border-gray-400/40
            rounded-xl
            focus:outline-none
          "
          required
        />
      </label>

      {/* Message */}
      <label className="flex flex-col text-gray-500 gap-3">
        Message

        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your message..."
          rows={6}
          className="
            w-full
            p-3
            text-gray-900
            bg-gray-300
            shadow-sm
            border-2
            border-gray-400/40
            rounded-xl
            focus:outline-none
          "
          required
        />
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="
          cursor-pointer
          w-full
          md:w-fit
          px-6
          py-4
          text-white
          bg-ascent
          font-bold
          rounded-md
          whitespace-nowrap
          transition-all
          duration-300
          hover:opacity-80
          disabled:opacity-60
          disabled:cursor-not-allowed
          flex
          items-center
          justify-center
          gap-3
        "
      >
        {loading && (
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
        )}

        {loading
          ? "Sending Inquiry..."
          : "Send Your Message"}
      </button>
    </form>
  );
}