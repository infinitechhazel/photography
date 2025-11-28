"use client"
import Image from "next/image"
import Link from "next/link"
import { CardBody, CardContainer, CardItem } from "@/components/ui/shadcn-io/3d-card"

const photographyServices = [
  {
    title: "Wedding Photography",
    description: "Celebrate your special day with timeless, artistic wedding photography. Full day coverage capturing every emotional moment.",
    features: ["8-10 hour coverage", "Two photographers", "Edited digital gallery", "Print releases included"],
    price: "Starting at $3,500",
  },
  {
    title: "Portrait Sessions",
    description: "Professional portraits for headshots, families, couples, and personal brands. Captured in our studio or on location.",
    features: ["60-120 min session", "Professional styling", "50+ edited images", "Digital gallery + prints"],
    price: "Starting at $500",
  },
  {
    title: "Event Photography",
    description: "Document your corporate events, galas, conferences, and celebrations with professional coverage and storytelling.",
    features: ["Flexible hours", "Multiple photographers", "Candid + posed shots", "Same-day highlight reel available"],
    price: "Starting at $1,200",
  },
  {
    title: "Product Photography",
    description: "Showcase your products with stunning, professional imagery designed to elevate your brand and boost sales.",
    features: ["Professional styling", "Unlimited shots", "Photo retouching", "Various angles & backgrounds"],
    price: "Starting at $800",
  },
  {
    title: "Commercial & Branding",
    description: "Build your brand identity with cohesive, professional photography for websites, marketing, and social media.",
    features: ["Custom shoot planning", "Brand consultation", "Multiple deliverables", "Lifestyle + product shots"],
    price: "Starting at $2,000",
  },
  {
    title: "Headshots & Actors",
    description: "Professional headshots for actors, professionals, and performers. Industry-standard quality for casting and portfolios.",
    features: ["30-min session", "Multiple looks", "Professional makeup", "Express turnaround"],
    price: "Starting at $300",
  },
]

const studioRentalServices = [
  {
    title: "Studio Space - Half Day",
    description: "Perfect for small productions, photoshoots, and creative projects. 4-hour rental with full access to our professional space.",
    features: ["4 hours access", "Multiple backdrops", "Lighting equipment included", "Climate controlled"],
    price: "$350 / session",
    amenities: true,
  },
  {
    title: "Studio Space - Full Day",
    description: "Complete day access for larger productions and all-day creative sessions. 8 hours of uninterrupted studio time.",
    features: ["8 hours access", "All backdrops available", "Full lighting kit", "Dedicated assistant optional"],
    price: "$650 / day",
    amenities: true,
  },
  {
    title: "Video Production Suite",
    description: "Specialized setup for video production, interviews, and streaming. Includes lighting, green screen, and audio equipment.",
    features: ["Video-focused setup", "Lighting + audio kit", "Green screen included", "Tech support available"],
    price: "$400 / 4 hours",
    amenities: true,
  },
  {
    title: "Makeup & Hair Station",
    description: "Premium makeup station with professional mirrors and lighting. Perfect addon for any studio rental or separate booking.",
    features: ["Professional vanity", "LED lighting", "Hair styling tools", "Makeup station storage"],
    price: "$150 / rental",
    amenities: false,
  },
  {
    title: "Equipment Rental",
    description: "Professional photography equipment available for independent use. Cameras, lenses, lighting, and more for rent.",
    features: ["Professional cameras", "Premium lenses", "Studio lighting", "Insurance included"],
    price: "Pricing varies",
    amenities: false,
  },
  {
    title: "Private Events & Parties",
    description: "Host your celebration in our elegant studio space. Perfect for intimate gatherings, product launches, and exclusive events.",
    features: ["Elegant ambiance", "Customizable layout", "Catering-friendly space", "Event coordination"],
    price: "Starting at $1,500",
    amenities: true,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 -left-20 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-gold font-semibold mb-4">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight text-balance mb-6">Premium Photography & Studio Solutions</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From professional photography sessions to studio rentals, we provide everything you need to bring your creative vision to life.
          </p>
        </div>
      </section>

      {/* Photography Services */}
      <section className="py-10 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance text-gold">Photography Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional photography tailored to your needs. All packages include edited images and full licensing rights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3">
            {photographyServices.map((service) => (
              <CardContainer key={service.title} className="inter-var" containerClassName="py-2">
                <CardBody className="bg-gray-50 relative w-full min-w-[260px] group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black h-auto md:h-[500px] rounded-xl md:p-4">
                  <CardItem translateZ="50">
                    <div className="group p-8 rounded-xl border border-gold/30 shadow-md bg-card hover:border-gold transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 space-y-6 flex flex-col">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{service.description}</p>
                      </div>

                      <div className="space-y-3 grow">
                        <p className="font-semibold text-sm uppercase tracking-wider text-foreground">What&apos;s Included:</p>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <span className="text-gold mt-1">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-border">
                        <p className="text-2xl font-serif font-bold text-gold">{service.price}</p>
                        <Link
                          href="/contact"
                          className="block w-full px-6 py-2 bg-gold text-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/30 transition-all duration-200 text-center"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Rental Services */}
      <section className="py-10 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-balance text-gold">Studio Rental Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access our fully equipped, professional studio for your creative projects. Flexible rental options for photographers, videographers, and
              creatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3">
            {studioRentalServices.map((service) => (
              <CardContainer key={service.title} className="inter-var" containerClassName="py-2">
                <CardBody className="bg-gray-50 relative group/card w-full min-w-[260px] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black h-auto md:h-[500px] rounded-xl md:p-4">
                  <CardItem translateZ="50">
                    <div className="group p-8 rounded-xl border border-gold/30 shadow-md bg-card hover:border-gold transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 space-y-6 flex flex-col">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{service.description}</p>
                      </div>

                      <div className="space-y-3 grow">
                        <p className="font-semibold text-sm uppercase tracking-wider text-foreground">
                          {service.amenities ? "Amenities" : "Includes"}:
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <span className="text-gold mt-1">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-border">
                        <p className="text-2xl font-serif font-bold text-gold">{service.price}</p>
                        <Link
                          href="/contact"
                          className="block w-full px-6 py-2 bg-gold text-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/30 transition-all duration-200 text-center"
                        >
                          Reserve Now
                        </Link>
                      </div>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Amenities Section */}
      <section className="py-10 px-4 sm:px-6 bg-slate-900 text-primary-foreground w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Text Content */}
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-gold font-semibold mb-3 sm:mb-4 text-center lg:text-left">
                Studio Facilities
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-5 sm:mb-6 text-balance text-center lg:text-left">
                Fully Equipped Professional Space
              </h2>

              <p className="text-base sm:text-lg text-primary-foreground/95 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                Our studio features equipment and professional amenities designed for photographers, videographers, and creative professionals.
              </p>

              <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
                {[
                  "Professional lighting kits (Profoto, Godox)",
                  "Multiple backdrops & seamless paper",
                  "Green screen setup for video",
                  "Studio-grade tripods & stands",
                  "Audio equipment & microphones",
                  "Climate controlled environment",
                  "Free WiFi & charging stations",
                  "Comfortable waiting & styling area",
                ].map((amenity) => (
                  <div key={amenity} className="flex items-start gap-3">
                    <span className="text-gold text-xl shrink-0">✓</span>
                    <span className="text-primary-foreground/90 text-sm sm:text-base">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-112 w-full">
              <div className="absolute inset-0 bg-linear-to-br from-gold/20 via-transparent to-primary-foreground/10 rounded-2xl"></div>
              <Image
                src="/professional-photography-studio.webp"
                alt="Luminous Studio professional space"
                fill
                sizes="w-full h-full"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
