"use client"
import { useState } from "react"

const CommonQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const faqs = [
    {
      q: "What is your booking process?",
      a: "Simply fill out the form above with your details and preferred date. We'll review your request and confirm within 24 hours. A deposit secures your booking.",
    },
    {
      q: "How far in advance should I book?",
      a: "We recommend booking at least 4-6 weeks in advance for most services. Peak seasons (spring/summer) may require longer lead times.",
    },
    {
      q: "What is your cancellation policy?",
      a: "Cancellations made 30+ days before the session receive a full refund. Cancellations within 30 days forfeit the deposit.",
    },
    {
      q: "Do you offer rush bookings?",
      a: "Yes, rush bookings are available subject to schedule availability with an additional 25% rush fee.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-muted/30 border-y border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gold font-semibold mb-3">Help & Support</p>
          <h2 className="text-4xl font-serif font-bold text-balance">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              open={openIndex === index}
              onClick={(e) => {
                e.preventDefault()
                setOpenIndex(openIndex === index ? null : index)
              }}
              className="group border border-border shadow-md rounded-lg p-6 hover:border-gold transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-foreground">
                {faq.q}
                <span className="text-gold text-xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommonQuestions
