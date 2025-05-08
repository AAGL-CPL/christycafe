"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycby9h6WyPiHGJD7vnVOJengx3WSusw8uBkyTrWaFJZiZTEadOaaMwvLLwSQLxz0hL_Fwfg/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })
  
      const data = await response.json()
  
      if (data.status !== 'success') {
        throw new Error(data.error || 'Failed to send message')
      }
  
      setIsSubmitted(true)
      setFormState({
        name: "",
        phone: "",
        message: "",
      })
  
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto" id="contact">
      <div className="text-center mb-12 ">
        <h2 className="inline-flex items-center text-2xl font-serif text-[#5c3a21]">
          <Image
            src="/images/beansicon.svg?height=24&width=24"
            alt="Coffee bean icon"
            width={24}
            height={24}
            className="mr-2 font-bold"
          />
          Get in Touch
        </h2>
        <h3 className="text-3xl font-serif text-[#5c3a21] mt-2 font-bold">We'd love to hear from you</h3>
      </div>

      <div className="max-w-2xl mx-auto rounded-md bg-white p-6 shadow-[0_16px_32px_rgba(0,0,0,0.10),0_0_12px_rgba(0,0,0,0.08)]">
        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md text-center">
            Thank you for your message! We'll get back to you soon.
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md text-center">
                {error}
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#d3c7b9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#8b5a2b]"
              />
              <input
                type="phone"
                name="phone"
                placeholder="Phone Number"
                value={formState.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-[#d3c7b9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#8b5a2b]"
              />
            </div>
        
            <textarea
              name="message"
              placeholder="Message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 border border-[#d3c7b9] rounded-md focus:outline-none focus:ring-1 focus:ring-[#8b5a2b]"
            ></textarea>
            <Button 
              type="submit" 
              className="w-full bg-[#5c3a21] hover:bg-[#4a2e1a] text-white py-3"
              disabled={isLoading}
            >
              {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
            </Button>
          </form>
        )}

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=61575735282618#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5c3a21] hover:text-[#4a2e1a] transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/christys_cafe_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5c3a21] hover:text-[#4a2e1a] transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
