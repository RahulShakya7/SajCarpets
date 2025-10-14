"use client";

import { useState } from "react";
import Button from "../components/button";
import Helmet from "../components/helmet/helmet";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const InputField = ({ label, name, type = "text", placeholder = "" }) => (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-contact-text font-open-sans text-lg font-medium mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleInputChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-contact-text font-open-sans text-base outline-none focus:border-contact-orange transition-colors"
      />
    </div>
  );

  return (
    // ADDED: Vertical padding for consistent spacing top and bottom
    <div className="w-full flex flex-col bg-gray-50">
      <Helmet title="Contact Us" breadcrumb="Home / Contact Us" />

      <div className="w-full max-w-7xl mt-16 mb-16 py-12 mx-auto sm:px-8 lg:px-12 bg-white rounded-xl shadow-md">
        {/* Title */}
        <h1 className="text-left text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight text-contact-text mb-8">
          Write Us
        </h1>

        {/* Feedback Messages */}
        {/* CHANGED: text-left to align with the rest of the form */}
        {success && <p className="text-green-600 text-left mb-4">{success}</p>}
        {error && <p className="text-red-600 text-left mb-4">{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left Column */}
            <div className="flex flex-col gap-6 w-full lg:w-1/2">
              <InputField label="Name" name="name" placeholder="John Doe" />
              <InputField label="Email" name="email" type="email" placeholder="you@example.com" />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-2 w-full lg:w-1/2">
              {/* FIXED: The label had a `mb-2`, but the container had a `gap-2`, creating double spacing. Simplified here. */}
              <label htmlFor="message" className="text-contact-text font-open-sans text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your message here..."
                className="w-full lg:min-h-full p-4 border border-gray-300 rounded-lg text-contact-text font-open-sans text-base placeholder:text-gray-400 outline-none focus:border-contact-orange transition-colors resize-none"
              />
            </div>
          </div>

          {/* --- DYNAMIC BUTTON --- */}
          {/* ADDED: A wrapper to control button alignment */}
          <div className="flex justify-start lg:justify-end mt-4">
            {/* REMOVED: The old button and raw <button> */}
            {/* ADDED: Props to make the Button component dynamic */}
            <Button
              type="submit"
              size="large"
              disabled={loading}
              // Assuming your Button component accepts a className prop for custom styles if needed
              className="w-full lg:w-auto" 
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}