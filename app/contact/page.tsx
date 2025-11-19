"use client"
import CommonQuestions from "@/components/CommonQuestions"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { toast } from "sonner"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    date: "",
    time: "",
    guests: "1",
    message: "",
  })
  const [errors, setErrors] = useState({ email: "", phone: "", date: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: string, value: string) => {
    // Handle phone number validation - only allow numbers
    if (field === "phone") {
      const numbersOnly = value.replace(/\D/g, "")
      if (numbersOnly.length <= 11) {
        setFormData({
          ...formData,
          [field]: numbersOnly,
        })

        // Validate phone length
        if (numbersOnly.length > 0 && numbersOnly.length !== 11) {
          setErrors({
            ...errors,
            phone: "Phone number must be exactly 11 digits",
          })
        } else {
          setErrors({
            ...errors,
            phone: "",
          })
        }
      }
      return
    }

    // Handle email validation
    if (field === "email") {
      setFormData({
        ...formData,
        [field]: value,
      })

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (value && !emailRegex.test(value)) {
        setErrors({
          ...errors,
          email: "Please enter a valid email address",
        })
      } else {
        setErrors({
          ...errors,
          email: "",
        })
      }
      return
    }

    // Handle date validation (no past dates)
  if (field === "date") {
    const today = new Date()
    today.setHours(0, 0, 0, 0) 
    const selectedDate = new Date(value)

    if (selectedDate < today) {
      setErrors({
        ...errors,
        date: "You cannot select a past date",
      })
    } else {
      setErrors({
        ...errors,
        date: "",
      })
      setFormData({
        ...formData,
        [field]: value,
      })
    }
    return
  }


    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Missing Information", {
        description: "Please fill in all required fields.",
        position: "top-right",
      })
      return
    }

    toast.success("Message Sent!", {
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      position: "top-right",
    })

    setSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      date: "",
      time: "",
      guests: "1",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-sm uppercase tracking-widest text-gold font-semibold">Book Your Session</p>
          <h1 className="text-5xl md:text-6xl font-bold font-serif text-balance">Let's Create Something Beautiful</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto pt-4">
            Schedule your photography session or reach out with questions. We look forward to working with you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Booking Form */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-serif font-bold">Book a Session</h2>
              <div className="h-1 w-12 bg-gold rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="(555) 000-0000"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Service Type *</label>
                <div className="relative">
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={(e) => handleChange("serviceType", e.target.value)}
                    required
                    className="w-full px-4 py-3 appearance-none border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  >
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="event">Event Photography</option>
                    <option value="product">Product Photography</option>
                    <option value="studio">Studio Rental</option>
                    <option value="commercial">Commercial Photography</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Additional Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition resize-none h-32"
                  placeholder="Tell us more about your vision..."
                />
              </div>

              <Button
                type="submit"
                className="w-full px-8 py-3 gold-glow font-semibold text-lg rounded-lg hover:shadow-lg hover:shadow-gold/40 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Book Your Session
              </Button>

              {submitted && (
                <div className="p-4 bg-gold/10 border border-gold rounded-lg text-center">
                  <p className="text-gold font-semibold">Thank you! We'll be in touch shortly.</p>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-serif font-bold">Get In Touch</h2>
              <div className="h-1 w-12 bg-gold rounded-full"></div>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-sm uppercase tracking-widest font-semibold text-gold mb-3">Location</h3>
                <p className="text-lg font-serif font-semibold text-foreground">Luminous Studio</p>
                <p className="text-muted-foreground leading-relaxed">
                  123 Creative Street
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm uppercase tracking-widest font-semibold text-gold mb-3">Phone</h3>
                <a href="tel:+12125551234" className="text-lg font-semibold text-foreground hover:text-gold transition-colors">
                  +1 (212) 555-1234
                </a>
                <p className="text-sm text-muted-foreground">Monday - Friday, 8AM - 5PM</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm uppercase tracking-widest font-semibold text-gold mb-3">Email</h3>
                <a href="mailto:hello@luminousstudio.com" className="text-lg font-semibold text-foreground hover:text-gold transition-colors">
                  hello@luminousstudio.com
                </a>
                <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
              </div>

              {/* Social Links */}
              <div className="space-y-3 pt-4">
                <h3 className="text-sm uppercase tracking-widest font-semibold text-gold">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 border border-border rounded-lg text-foreground hover:border-gold hover:text-gold transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 border border-border rounded-lg text-foreground hover:border-gold hover:text-gold transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 border border-border rounded-lg text-foreground hover:border-gold hover:text-gold transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 002.856-3.51 10.02 10.02 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Studio Map */}
            <div className="space-y-3 pt-8 border-t border-border">
              <h3 className="text-sm uppercase tracking-widest font-semibold text-gold">Visit Our Studio</h3>
              <div className="w-full h-64 rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1271925565936!2d-74.00601!3d40.71282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb7ae0f%3A0x6b8e63f0c2a6e8a!2s123%20Creative%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Located in the heart of New York's creative district. Easy street parking and public transportation nearby.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CommonQuestions />
    </div>
  )
}
