'use client'
import CommonQuestions from "@/components/CommonQuestions"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
// import heroImage from "@/assets/hero-studio.jpg";
// import weddingImage from "@/assets/wedding-portfolio.jpg";
// import portraitImage from "@/assets/portrait-portfolio.jpg";
// import eventImage from "@/assets/event-portfolio.jpg";
// import productImage from "@/assets/product-portfolio.jpg";

export default function Home() {
  // const categories = [
  //   { name: "Weddings", image: weddingImage, path: "/portfolio/weddings" },
  //   { name: "Portraits", image: portraitImage, path: "/portfolio/portraits" },
  //   { name: "Events", image: eventImage, path: "/portfolio/events" },
  //   { name: "Products", image: productImage, path: "/portfolio/products" },
  // ];

  const categories = [
    { name: "Weddings", path: "/portfolio/weddings" },
    { name: "Portraits", path: "/portfolio/portraits" },
    { name: "Events", path: "/portfolio/events" },
    { name: "Products", path: "/portfolio/products" },
  ]

  const testimonials = [
    {
      name: "Sarah & Michael",
      role: "Couple",
      content: "Luminous Studio captured our wedding day with absolute perfection. The professionalism and artistic vision were outstanding.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "Entrepreneur",
      content: "Our product photography exceeded expectations. The attention to detail and lighting expertise really elevated our brand.",
      rating: 5,
    },
    {
      name: "James Chen",
      role: "Corporate Client",
      content: "From concept to delivery, the team was exceptional. Our event coverage captured the exact energy and essence we wanted.",
      rating: 5,
    },
    {
      name: "Sarah & Michael",
      role: "Couple",
      content: "Luminous Studio captured our wedding day with absolute perfection. The professionalism and artistic vision were outstanding.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "Entrepreneur",
      content: "Our product photography exceeded expectations. The attention to detail and lighting expertise really elevated our brand.",
      rating: 5,
    },
    {
      name: "James Chen",
      role: "Corporate Client",
      content: "From concept to delivery, the team was exceptional. Our event coverage captured the exact energy and essence we wanted.",
      rating: 5,
    },
    {
      name: "Sarah & Michael",
      role: "Couple",
      content: "Luminous Studio captured our wedding day with absolute perfection. The professionalism and artistic vision were outstanding.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "Entrepreneur",
      content: "Our product photography exceeded expectations. The attention to detail and lighting expertise really elevated our brand.",
      rating: 5,
    },
    {
      name: "James Chen",
      role: "Corporate Client",
      content: "From concept to delivery, the team was exceptional. Our event coverage captured the exact energy and essence we wanted.",
      rating: 5,
    },
    {
      name: "Sarah & Michael",
      role: "Couple",
      content: "Luminous Studio captured our wedding day with absolute perfection. The professionalism and artistic vision were outstanding.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "Entrepreneur",
      content: "Our product photography exceeded expectations. The attention to detail and lighting expertise really elevated our brand.",
      rating: 5,
    },
    {
      name: "James Chen",
      role: "Corporate Client",
      content: "From concept to delivery, the team was exceptional. Our event coverage captured the exact energy and essence we wanted.",
      rating: 5,
    },
  ]

  return (
    <main className="min-h-screen">
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gold/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-widest text-gold font-semibold drop-shadow-lg">Welcome to Luminous Studio</p>
                <h1 className="text-5xl md:text-6xl font-bold font-serif leading-tight text-balance">
                  Capturing Moments, <span className="gradient-text">Creating Memories</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Exceptional photography for weddings, portraits, events, and commercial work. Every frame tells a story worth remembering.
                </p>
                <div className="flex gap-4 pt-4">
                  <Link href="/contact" className="px-8 py-3 min-w-40 gold-glow text-primary font-semibold rounded-lg transition-all duration-200">
                    Schedule a Session
                  </Link>
                  <Link
                    href="/portfolio"
                    className="px-8 py-3 min-w-40 border-2 border-gold text-foreground font-semibold rounded-lg hover:bg-gold/10 hover:shadow-lg hover:shadow-gold/20 transition-all duration-200"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>

              {/* Hero Image Placeholder */} 
              <div className="relative h-96 md:h-full min-h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-transparent to-primary/30 rounded-2xl shadow-2xl shadow-gold/20"></div>
                <img
                  src="/photography-studio.png"
                  alt="Luxury photography studio"
                  className="w-full h-full object-cover rounded-2xl shimmer-effect"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Studio Teaser */}
        <section className="py-24 px-4 bg-slate-900 text-primary-foreground">
          <div className="container mx-auto text-center max-w-3xl">
            <div className="h-1 w-24 bg-linear-to-r from-yellow-600 to-yellow-500 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Where Art Meets Excellence</h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Our state-of-the-art studio combines cutting-edge technology with artistic vision, creating the perfect environment for capturing your
              most important moments. From intimate portraits to grand celebrations, we bring your vision to life.
            </p>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Specialties</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse portfolio showcasing expertise across multiple photography styles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link key={category.name} href={category.path} className="group">
                  <Card className="overflow-hidden border-2 border-transparent hover:border-border-linear-to-r hover:from-yellow-600 hover:to-yellow-500 transition-all duration-300">
                    <div className="relative aspect-3/4 overflow-hidden">
                      {/* <Image
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    /> */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                        <div className="h-0.5 w-12 bg-linear-to-r from-yellow-600 to-yellow-500 transition-all duration-300 group-hover:w-full" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-linear-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white"
              >
                <Link href="/portfolio">View Full Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-gold font-semibold mb-3 drop-shadow-lg">Client Love</p>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance">
                What Our Clients <span className="gradient-text">Say</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Hear from couples and clients who've experienced our service.
              </p>
            </div>

            <div className="flex overflow-x-auto gap-8 snap-x snap-mandatory scrollbar-hide scroll-smooth">
              
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="p-8 min-w-[300px] rounded-xl snap-center border border-border bg-card hover:border-gold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 space-y-4 hover:bg-white/50"
                  >
                    <div className="flex gap-1">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i} className="text-gold text-lg drop-shadow-lg">
                            ★
                          </span>
                        ))}
                    </div>

                    <p className="text-foreground leading-relaxed italic text-wrap">"{testimonial.content}"</p>

                    <div className="pt-4 border-t border-gold/30">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-gold font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
             
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-r from-slate-900 via-primary/95 to-slate-900 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/2 -right-20 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-balance">
              Ready to Create <span className="gradient-text">Magic?</span>
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Let's discuss your vision and bring it to life. Book a consultation with our team today.
            </p>
            <Link href="/contact" className="inline-block px-8 py-3 gold-glow text-primary font-semibold rounded-lg transition-all duration-200">
              Book Your Session
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <CommonQuestions />
      </div>
    </main>
  )
}
