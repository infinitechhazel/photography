"use client"
import CommonQuestions from "@/components/common-questions"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AwardIcon, Briefcase, Building2, Camera, CameraIcon, ChevronLeft, ChevronRight, Clock, Package, Palette, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const categories = [
  { name: "Weddings", path: "/portfolio", image: "/wedding-photography.jpg" },
  { name: "Portraits", path: "/portfolio", image: "/wedding-photography.jpg" },
  { name: "Events", path: "/portfolio", image: "/wedding-photography.jpg" },
  { name: "Products", path: "/portfolio", image: "/wedding-photography.jpg" },
]

const testimonials = [
  {
    name: "Sarah Michael",
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
    name: "Lara Mendoza",
    role: "Fashion Model",
    content: "Every shot felt intentional and beautifully executed. The artistic direction and lighting made the images look editorial and timeless.",
    rating: 5,
  },
  {
    name: "David Reyes",
    role: "CEO, Crestline Systems",
    content: "Professional, reliable, and incredibly easy to work with. Our executive portraits look polished and modern—exactly what we needed.",
    rating: 5,
  },
  {
    name: "Ramirez Family",
    role: "Family Portrait Clients",
    content:
      "We were blown away by how natural and joyful the photos felt. The photographer was amazing with the kids and made the experience effortless.",
    rating: 5,
  },
  {
    name: "Isabelle Carter",
    role: "Studio Rental Client",
    content:
      "The space was clean, well-equipped, and thoughtfully designed. The lighting setup saved us hours—highly recommended for professional shoots.",
    rating: 5,
  },
  {
    name: "Oliver Grant",
    role: "Creative Director",
    content: "The team understood our branding instantly. The resulting commercial visuals were cohesive, powerful, and agency-level quality.",
    rating: 5,
  },
  {
    name: "Alyssa Jonathan",
    role: "Wedding Clients",
    content:
      "We were moved to tears seeing our final gallery. Every candid smile, every emotional moment—it was captured so beautifully and authentically.",
    rating: 5,
  },
]

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description: "Comprehensive wedding day coverage with artistic storytelling, capturing every precious moment from preparation to celebration.",
    features: ["Full day coverage", "Pre-wedding consultation", "Edited digital gallery", "Print package options", "Online gallery sharing"],
  },
  {
    icon: Users,
    title: "Portrait Sessions",
    description: "Professional portrait photography for individuals, families, and groups in our studio or your preferred location.",
    features: ["Studio or outdoor settings", "Wardrobe consultation", "Professional retouching", "Multiple outfit changes", "High-resolution files"],
  },
  {
    icon: Briefcase,
    title: "Event Photography",
    description: "Corporate events, parties, and special occasions documented with professionalism and creative flair.",
    features: ["Event coverage", "Candid and posed shots", "Quick turnaround", "Social media ready images", "Group photography"],
  },
  {
    icon: Package,
    title: "Product Photography",
    description: "High-quality commercial photography that showcases your products with stunning detail and appeal.",
    features: ["Studio lighting setup", "Multiple angles", "White background options", "Lifestyle product shots", "E-commerce ready images"],
  },
]

const studioRental = [
  {
    icon: Building2,
    title: "Professional Studio Space",
    description: "State-of-the-art photography studio available for rent with all equipment included.",
  },
  {
    icon: Clock,
    title: "Flexible Booking",
    description: "Hourly or daily rental options to fit your project needs and budget.",
  },
]

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)

  const checkScrollPosition = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current

    setIsAtStart(scrollLeft === 0)
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth)
  }

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    checkScrollPosition()
    el.addEventListener("scroll", checkScrollPosition)

    return () => el.removeEventListener("scroll", checkScrollPosition)
  }, [])

  return (
    <main className="min-h-screen">
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 relative">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-10 right-1/4 w-40 h-40 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-1/3 w-32 h-32 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-gold/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10 mt-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="space-y-4 sm:space-y-6 text-center md:text-left">
                <p className="text-xs sm:text-sm uppercase tracking-widest text-gold font-semibold drop-shadow-lg">Welcome to Luminous Studio</p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif leading-tight text-balance">
                  Capturing Moments, <span className="gradient-text">Creating Memories</span>
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Exceptional photography for weddings, portraits, events, and commercial work. Every frame tells a story worth remembering.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2 sm:pt-4 justify-center md:justify-start">
                  <Link
                    href="/contact"
                    className="px-6 py-2 sm:px-8 min-w-32 sm:min-w-40 gold-glow text-primary font-semibold rounded-lg transition-all duration-200 text-center"
                  >
                    Schedule a Session
                  </Link>

                  <Link
                    href="/portfolio"
                    className="px-6 py-2 sm:px-8 min-w-32 sm:min-w-40 border-2 border-gold text-foreground font-semibold rounded-lg hover:bg-gold/10 hover:shadow-lg hover:shadow-gold/20 transition-all duration-200 text-center"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative overflow-hidden h-72 sm:h-80 lg:h-full min-h-72">
                <div className="absolute inset-0 bg-linear-to-br from-gold/30 via-transparent to-primary/30 rounded-2xl shadow-2xl shadow-gold/20"></div>
                <Image
                  src="/jewelry-product-photography.png"
                  alt="Luxury photography studio"
                  width={250}
                  height={250}
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-slate-900 text-primary-foreground">
          <div className="container mx-auto text-center max-w-3xl">
            <div className="h-1 w-24 bg-linear-to-r from-yellow-600 to-yellow-500 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Where Art Meets Excellence</h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Our studio combines cutting-edge technology with artistic vision, creating the perfect environment for capturing your most important
              moments. From intimate portraits to grand celebrations, we bring your vision to life.
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
                  <Card className="p-0 h-96 md:h-full overflow-hidden border border-gold/30 hover:border-border-linear-to-r hover:from-yellow-600 hover:to-yellow-500 transition-all duration-300">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true, amount: 0.5 }}
                      className="relative aspect-3/4 overflow-hidden"
                    >
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        width={250}
                        height={250}
                        className="w-full h-full object-cover transition-transform shimmer-effect duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                        <div className="h-0.5 w-12 bg-linear-to-r from-yellow-600 to-yellow-500 transition-all duration-300 group-hover:w-full" />
                      </div>
                    </motion.div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="px-8 py-2 min-w-40 border-2 border-gold gold-glow">
                <Link href="/portfolio">View Full Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Photography Services */}
        <section className="py-5 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16 space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-gold font-semibold">Services</p>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Photography Services</h2>

              <p className="text-muted-foreground max-w-xl mx-auto">
                Crafted experiences designed to capture moments, elevate brands, and tell unforgettable stories.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 border border-gold/20 bg-card/40 backdrop-blur-sm rounded-xl 
                     hover:border-gold hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 flex flex-col"
                >
                  <service.icon className="h-12 w-12 text-gold mb-6" />

                  <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">{service.title}</h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed grow">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Rental */}
        <section className="py-10 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16 space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-gold font-semibold">Services</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Studio Rental</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Rent our professional studio space equipped with premium lighting, backdrops, and equipment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {studioRental.map((item, index) => (
                <Card
                  key={index}
                  className="p-8 text-center border border-gold/20 bg-card/40 backdrop-blur-md rounded-xl hover:border-gold hover:shadow-lg hover:shadow-gold/20 hover:scale-[1.02] transition-all duration-300"
                >
                  <item.icon className="h-12 w-12 text-gold mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-24 px-8 bg-background">
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

            <div ref={scrollRef} className="flex overflow-y-hidden overflow-x-auto gap-8  snap-x snap-mandatory scrollbar-hide scroll-smooth">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  key={index}
                  tabIndex={1}
                  className="p-8 min-w-[300px] rounded-xl snap-center border mb-6 border-gold/30 bg-gray-50 shadow-md hover:border-gold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 space-y-4 hover:bg-white/50"
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
                  <p className="text-foreground leading-relaxed italic">"{testimonial.content}"</p>

                  <div className="pt-4 border-t border-gold/30 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 text-gold font-semibold flex items-center justify-center text-lg">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .substring(0, 2)
                        .toUpperCase()}
                    </div>

                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-gold font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="hidden lg:flex justify-center mt-4 gap-4">
              <button
                onClick={scrollLeft}
                disabled={isAtStart}
                className={`bg-gold text-white p-4 rounded-full shadow-lg transition ${
                  isAtStart ? "opacity-50 cursor-not-allowed" : "hover:bg-gold/80"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                disabled={isAtEnd}
                className={`bg-gold text-white p-4 rounded-full shadow-lg transition ${
                  isAtEnd ? "opacity-50 cursor-not-allowed" : "hover:bg-gold/80"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-linear-to-r from-slate-900 via-primary/95 to-slate-900 text-primary-foreground relative overflow-hidden">
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
