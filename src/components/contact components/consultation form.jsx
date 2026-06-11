import { useState } from "react";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function ConsultForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organizationName: "",
    serviceRequired: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitted) setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSubmitted(false);
    setLoading(true);

    const payload = {
      full_name: formData.fullName,
      email: formData.email,
      organization_name: formData.organizationName,
      service_required: formData.serviceRequired,
      message: formData.message,
    };

    try {
      const response = await fetch(
        `${API_URL}/api/consultation-booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Consultation booking failed"
        );
      }

      setSubmitted(true);

      // Clear form after successful submission
      setFormData({
        fullName: "",
        email: "",
        organizationName: "",
        serviceRequired: "",
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
          ✅ Consultation request submitted successfully.
          We'll contact you shortly to schedule the consultation.
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

      {/* Full Name */}
      <fieldset className="flex flex-col gap-1">
        <label className="text-gray-950">
          Your Name
        </label>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Full name"
          required
          className="
            w-full
            p-3
            text-gray-400
            bg-gray-800
            shadow-sm
            border-2
            border-gray-900
            rounded-xl
            focus:outline-none
          "
        />
      </fieldset>

      {/* Email */}
      <fieldset className="flex flex-col gap-1">
        <label className="text-gray-950">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="eg. nanthconsults@gmail.com"
          required
          className="
            w-full
            p-3
            text-gray-400
            bg-gray-800
            shadow-sm
            border-2
            border-gray-900
            rounded-xl
            focus:outline-none
          "
        />
      </fieldset>

      {/* Organization */}
      <fieldset className="flex flex-col gap-1">
        <label className="text-gray-950">
          Your Organisation
        </label>

        <input
          type="text"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleInputChange}
          placeholder="Company name"
          required
          className="
            w-full
            p-3
            text-gray-400
            bg-gray-800
            shadow-sm
            border-2
            border-gray-900
            rounded-xl
            focus:outline-none
          "
        />
      </fieldset>

      {/* Service */}
      <fieldset className="flex flex-col gap-1">
        <label className="text-gray-950">
          Service Needed
        </label>

        <select
          name="serviceRequired"
          value={formData.serviceRequired}
          onChange={handleInputChange}
          required
          className="
            w-full
            p-3
            text-gray-500
            bg-gray-800
            shadow-sm
            border-2
            border-gray-900
            rounded-xl
            focus:outline-none
          "
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

      {/* Brief */}
      <fieldset className="flex flex-col gap-1">
        <label className="text-gray-950">
          Brief
        </label>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Describe your needs..."
          rows={6}
          required
          className="
            w-full
            p-4
            text-gray-400
            bg-gray-800
            shadow-sm
            border-2
            border-gray-900
            rounded-xl
            focus:outline-none
          "
        />
      </fieldset>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="
          cursor-pointer
          w-full
          md:w-1/2
          px-4
          py-3
          bg-gray-800
          text-white
          font-bold
          rounded-md
          hover:opacity-80
          transition-all
          duration-300
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
          ? "Booking Consultation..."
          : "Book Consultation"}
      </button>
    </form>
  );
}