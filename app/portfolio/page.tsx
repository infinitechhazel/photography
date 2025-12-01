"use client"
import { GalleryLightbox } from "@/components/gallery-lightbox"
import { Button } from "@/components/ui/button"
import { useLockBodyScroll } from "@/hooks/use-scroll"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useState, useMemo } from "react"

type Category = "all" | "weddings" | "portraits" | "events" | "products" | "studio"

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: Category
  title: string
}

const galleryImages: GalleryImage[] = [
  { id: "1", src: "/wedding-reception-details.webp", alt: "Wedding ceremony", category: "weddings", title: "Elegant Ceremony" },
  { id: "2", src: "/bride-and-groom.webp", alt: "Bride and groom", category: "weddings", title: "Bride & Groom" },
  { id: "3", src: "/event-2.webp", alt: "Reception details", category: "weddings", title: "Reception Details" },
  { id: "4", src: "/bride.jpg", alt: "Bride", category: "weddings", title: "Bride Gown" },
  { id: "5", src: "/portrait-3.webp", alt: "Professional headshot", category: "portraits", title: "Professional Portrait" },
  { id: "6", src: "/portrait-lifestyle.webp", alt: "Lifestyle portrait", category: "portraits", title: "Lifestyle Session" },
  { id: "7", src: "/family-portrait-outdoors.webp", alt: "Family portrait", category: "portraits", title: "Family Portrait" },
  { id: "8", src: "/street-photography.jpg", alt: "Street Photography", category: "portraits", title: "Street Photography" },
  { id: "9", src: "/corporate-event-networking.webp", alt: "Corporate event", category: "events", title: "Corporate Event" },
  { id: "10", src: "/gala-event-photography.webp", alt: "Gala event", category: "events", title: "Gala Evening" },
  { id: "11", src: "/party-event-celebration.webp", alt: "Party event", category: "events", title: "Celebration Party" },
  { id: "12", src: "/event-party.jpg", alt: "Vibrant party scene with guests celebrating", category: "events", title: "Evening Event" },
  { id: "13", src: "/luxury-product-photography-watch.webp", alt: "Product photography", category: "products", title: "Luxury Watch" },
  { id: "14", src: "/jewelry-photography.webp", alt: "Jewelry product", category: "products", title: "Jewelry Collection" },
  { id: "15", src: "/product-photography-cosmetics.webp", alt: "Beauty products", category: "products", title: "Beauty Products" },
  { id: "16", src: "/product-drinks.jpg", alt: "Drinks", category: "products", title: "Drinks" },
  { id: "17", src: "/studio-setup-professional-lighting.webp", alt: "Studio shoot", category: "studio", title: "Studio Lighting" },
  { id: "18", src: "/studio-backdrop-photography.webp", alt: "Studio backdrop", category: "studio", title: "Studio Backdrop" },
  { id: "19", src: "/studio-model-photography-professional.webp", alt: "Studio model", category: "studio", title: "Model Session" },
  { id: "20", src: "/studio-shoot.jpg", alt: "Studio model", category: "studio", title: "Model Session" },
]

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Work" },
  { value: "weddings", label: "Weddings" },
  { value: "portraits", label: "Portraits" },
  { value: "events", label: "Events" },
  { value: "products", label: "Products" },
  { value: "studio", label: "Studio" },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  useLockBodyScroll(lightboxOpen)

  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") return galleryImages
    return galleryImages.filter((img) => img.category === selectedCategory)
  }, [selectedCategory])

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image)
    setLightboxOpen(true)
  }

  const handleClose = () => {
    setLightboxOpen(false)
    setTimeout(() => setSelectedImage(null), 300)
  }

  const handlePrevious = () => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    const previousIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    setSelectedImage(filteredImages[previousIndex])
  }

  const handleNext = () => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    const nextIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    setSelectedImage(filteredImages[nextIndex])
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto ">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our curated collection of work across weddings, portraits, events, products, and studio shoots.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Button
                aria-label={cat.label}
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? "gold-glow text-primary"
                    : "border border-gold text-foreground font-semibold rounded-4xl hover:bg-gold/10 hover:shadow-lg hover:shadow-gold/20 transition-all duration-200 text-center"
                }`}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredImages.length > 0 &&
              filteredImages.map((image) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.5 }}
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg bg-muted cursor-pointer aspect-square border-gold"
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    sizes="w-full h-full"
                    className="object-cover w-full h-full transition-transform duration-500 shimmer-effect group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                    <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-gold font-serif text-lg font-semibold">{image.title}</p>
                      <p className="text-white text-sm">Click to view</p>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 h-1 w-0 bg-gold group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-slate-900 overflow-hidden text-white">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="gradient-text">Ready to Create</span> Something Beautiful?
          </h2>

          <p className="text-lg text-background mb-8 max-w-2xl mx-auto">
            Transform your vision into stunning imagery. Whether it’s a wedding, portrait session, event coverage, product showcase, or studio rental,
            our team is ready to bring your story to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="gold-glow px-6 py-2 text-primary font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-center"
            >
              Book Your Session
            </Link>
            <Link
              href="/services"
              className="px-6 py-2 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all duration-300 text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {lightboxOpen && selectedImage && (
        <GalleryLightbox
          image={selectedImage}
          onClose={handleClose}
          onPrevious={handlePrevious}
          onNext={handleNext}
          totalImages={filteredImages.length}
          currentIndex={filteredImages.findIndex((img) => img.id === selectedImage.id) + 1}
        />
      )}
    </div>
  )
}
