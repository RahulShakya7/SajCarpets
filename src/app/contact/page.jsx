"use client";

import { useState } from "react";
import Button from "../components/button";
import Helmet from "../components/helmet/helmet";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
      <label
        htmlFor={name}
        className="text-contact-text font-open-sans text-base sm:text-lg font-medium mb-2"
      >
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
    <div className="w-full flex flex-col bg-gray-50">
      <Helmet title="Contact Us" breadcrumb="Home / Contact Us" />

      <div className="w-full max-w-7xl mt-10 sm:mt-14 lg:mt-16 mb-12 sm:mb-14 lg:mb-16 px-4 sm:px-6 lg:px-12 mx-auto">
        <div className="w-full bg-white rounded-xl shadow-md p-6 sm:p-8 lg:p-10">
          {/* Title */}
          <h1 className="text-left text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight text-contact-text mb-6 sm:mb-8">
            Write Us
          </h1>

          {/* Feedback Messages */}
          {success && <p className="text-green-600 text-left mb-4">{success}</p>}
          {error && <p className="text-red-600 text-left mb-4">{error}</p>}

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 sm:gap-8">
            {/* --- TWO-COLUMN AREA --- */}
            {/* Using grid so both columns share the same row height; items stretch by default */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {/* Left column: two inputs stacked */}
              <div className="flex flex-col gap-6">
                <InputField label="Name" name="name" placeholder="John Doe" />
                <InputField label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>

              {/* Right column: textarea fills full column height on lg+ */}
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-contact-text font-open-sans text-base sm:text-lg font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here..."
                  className="
                    w-full flex-1 h-48 sm:h-56
                    lg:h-full lg:min-h-0
                    p-4 border border-gray-300 rounded-lg
                    text-contact-text font-open-sans text-base placeholder:text-gray-400
                    outline-none focus:border-contact-orange transition-colors resize-none
                  "
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-start lg:justify-end">
              <Button
                type="submit"
                size="large"
                disabled={loading}
                className="w-full sm:w-auto"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
