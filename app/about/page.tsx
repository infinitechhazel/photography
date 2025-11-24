import { Card } from "@/components/ui/card"
import { Award, AwardIcon, Camera, CameraIcon, Heart, Palette, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const About = () => {
  const values = [
    {
      icon: Camera,
      title: "Artistic Excellence",
      description: "We bring a unique artistic vision to every shoot, creating images that are both beautiful and meaningful.",
    },
    {
      icon: Award,
      title: "Professional Quality",
      description: "Our commitment to quality ensures that every photo meets the highest standards of professional photography.",
    },
    {
      icon: Heart,
      title: "Personal Connection",
      description: "We take time to understand your story and vision, creating a comfortable and collaborative experience.",
    },
    {
      icon: Users,
      title: "Client Committment",
      description: "Your satisfaction is our priority. We work closely with you to ensure your expectations are exceeded.",
    },
  ]

  const teamMembers = [
    {
      name: "Alexandra Sterling",
      role: "Founder & Creative Director",
      specialty: "Weddings & Portraits",
      bio: "With 20+ years of experience, Alexandra established Luminous Studio with a vision to redefine luxury photography.",
      image: "/founder-portrait.jpg",
    },
    {
      name: "Marcus Davidson",
      role: "Lead Photographer",
      specialty: "Events & Commercial",
      bio: "An award-winning photojournalist, Marcus brings dynamic energy and technical excellence to every project.",
      image: "/photographer-marcus.jpg",
    },
    {
      name: "Elena Vasquez",
      role: "Portrait Specialist",
      specialty: "Studio Portraits & Fashion",
      bio: "Elena's artistic vision and meticulous attention to detail create timeless, elegant portrait photography.",
      image: "/photographer-elena.jpg",
    },
    {
      name: "James Liu",
      role: "Product & Commercial",
      specialty: "Product & E-commerce",
      bio: "James specializes in transforming products into visual storytelling, combining technical precision with creative flair.",
      image: "/photographer-james.jpg",
    },
  ]

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-sm uppercase tracking-widest text-gold font-semibold">About Us</p>
          <h1 className="text-5xl md:text-6xl font-bold font-serif text-balance">Luminous Studio: A Legacy of Excellence</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Since our founding, we've been dedicated to creating exceptional photography that tells your unique story with elegance, artistry, and
            professionalism.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-10 px-4 bg-slate-900 text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="h-1 w-24 bg-linear-to-r from-yellow-600 to-yellow-500 mx-auto mb-8" />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-primary-foreground/80">
            <p>
              Founded with a passion for capturing life's most precious moments, our studio has grown into a premier destination for professional
              photography. With over a decade of experience, we've had the privilege of documenting countless weddings, portraits, and special events.
            </p>

            <p>
              Our journey began with a simple belief: every moment deserves to be preserved beautifully. This philosophy drives everything we do, from
              the initial consultation to the final delivery of your images. We've invested in state-of-the-art equipment and continually refine our
              craft to ensure we deliver nothing but the best.
            </p>

            <p>
              What sets us apart is our unique blend of technical expertise and artistic vision. We don't just take photos - we create visual stories
              that you'll treasure for generations. Our team brings diverse backgrounds and specialties, allowing us to approach each project with
              fresh perspectives and innovative techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <div className="h-1 w-24 bg-linear-to-r from-yellow-600 to-yellow-500 mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The principles that guide our work and relationships with clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center border border-gold/30 hover:border-gold transition-all duration-300">
                <value.icon className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-5 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Experience</h2>
            <div className="h-1 w-24 bg-linear-to-r from-yellow-600 to-yellow-500 mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold text-gold mb-2">10+</div>
              <div className="text-xl font-semibold mb-2">Years</div>
              <p className="text-muted-foreground">Over a decade of capturing moments</p>
            </div>

            <div className="p-8">
              <div className="text-5xl font-bold text-gold mb-2">500+</div>
              <div className="text-xl font-semibold mb-2">Happy Clients</div>
              <p className="text-muted-foreground">Satisfied customers across all services</p>
            </div>

            <div className="p-8">
              <div className="text-5xl font-bold text-gold mb-2">50K+</div>
              <div className="text-xl font-semibold mb-2">Photos Taken</div>
              <p className="text-muted-foreground">Thousands of memories preserved</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <p className="text-sm uppercase tracking-widest text-gold font-semibold">Our Creative Space</p>
            <h2 className="text-4xl font-serif font-bold">The Luminous Studio</h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Nestled in the heart of the city, our state-of-the-art studio spans 5,000 square feet of pure creative potential. Every corner has been
              thoughtfully designed to inspire, accommodate, and bring artistic visions to life.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 bg-card rounded-xl border border-gold/30 hover:border-gold transition-colors">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <CameraIcon className="h-8 w-8 text-gold mx-auto" />
                </div>
                <h3 className="font-serif font-bold text-xl my-2">Professional Equipment</h3>
                <p className="text-muted-foreground text-sm">
                  Industry-leading cameras, lenses, and lighting systems from the world's top manufacturers.
                </p>
              </div>

              <div className="p-8 bg-card rounded-xl border border-gold/30 hover:border-gold transition-colors">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <AwardIcon className="h-8 w-8 text-gold mx-auto" />
                </div>
                <h3 className="font-serif font-bold text-xl my-2">Production Capabilities</h3>
                <p className="text-muted-foreground text-sm">
                  Full video production, drone photography, editing suites, and post-production facilities.
                </p>
              </div>

              <div className="p-8 bg-card rounded-xl border border-gold/30 hover:border-gold transition-colors">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <Palette className="h-8 w-8 text-gold mx-auto" />
                </div>
                <h3 className="font-serif font-bold text-xl my-2">Creative Environment</h3>
                <p className="text-muted-foreground text-sm">
                  Multiple backdrops, infinity coves, natural light studios, and comfort lounges for clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm uppercase tracking-widest text-gold font-semibold">Meet Our Team</p>
            <h2 className="text-3xl font-serif font-bold">Exceptional Photographers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our talented team of specialists brings diverse expertise and perspectives to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group rounded-xl overflow-hidden border border-gold/30 hover:border-gold transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-foreground">{member.name}</h3>
                    <p className="text-sm uppercase tracking-widest text-gold font-semibold">{member.role}</p>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{member.specialty}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center px-6">
        <div className="h-1 w-24 bg-gold rounded-full"></div>
      </div>

      {/* Values Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <p className="text-sm uppercase tracking-widest text-gold font-semibold">Our Philosophy</p>
            <h2 className="text-4xl font-serif font-bold">What We Stand For</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl font-serif font-bold text-gold">Excellence</div>
              <p className="text-muted-foreground leading-relaxed">
                We refuse to compromise on quality. Every photograph reflects our commitment to artistic excellence and technical perfection.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-serif font-bold text-gold">Integrity</div>
              <p className="text-muted-foreground leading-relaxed">
                Honesty and transparency guide our relationships with clients. We deliver on promises and exceed expectations consistently.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-serif font-bold text-gold">Creativity</div>
              <p className="text-muted-foreground leading-relaxed">
                We push boundaries and explore new artistic directions, bringing fresh perspectives to every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-balance">
            Let's Create Something <span className="gradient-text">Beautiful</span>
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Ready to work with our team? Let's discuss your vision and bring it to life.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 gold-glow text-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/30 transition-all duration-200"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
