"use client"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import { motion, useAnimation } from "motion/react"

interface GalleryLightboxProps {
  image: {
    id: string
    src: string
    alt: string
    title: string
  }
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
  totalImages: number
  currentIndex: number
}

export function GalleryLightbox({ image, onClose, onPrevious, onNext, totalImages, currentIndex }: GalleryLightboxProps) {
  const controls = useAnimation()
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onPrevious()
      }
      if (e.key === "ArrowRight") {
        onNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onPrevious, onNext])

  const swipeConfidenceThreshold = 80 

  const handleDragEnd = (_: any, info: any) => {
    const { offset } = info

    if (offset.x > swipeConfidenceThreshold) {
      onPrevious()
    } else if (offset.x < -swipeConfidenceThreshold) {
      onNext()
    } else {
      controls.start({ x: 0 })
    }

    setIsDragging(false)
  }

  return (
    <div className="fixed inset-0 z-50 my-auto bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl h-[60vh] flex items-center justify-center rounded-xl overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          animate={controls}
          onDragEnd={handleDragEnd}
          onDragStart={() => setIsDragging(true)}
          className="relative w-full h-full flex items-center justify-center bg-black/50 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <Button 
          aria-label="close gallery"
          onClick={onClose} className="absolute top-2 right-2 text-white/60 hover:text-white transition-colors z-50 p-2">
            <X size={28} />
          </Button>
          {image.src && <Image src={image.src} alt={image.alt} fill sizes="w-full h-full" className="object-contain" />}
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
          <p className="text-gold font-serif text-2xl font-semibold">{image.title}</p>
          <p className="text-white/60 text-sm mt-2">
            Image {currentIndex} of {totalImages}
          </p>
        </div>
      </div>

      <Button
        aria-label="Previous"
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-gold transition-colors p-3 hover:bg-white/5 rounded-full md:bg-gold md:hover:text-white md:p-4 md:shadow-lg md:hover:bg-yellow-400/50"
      >
        <ChevronLeft size={32} />
      </Button>
      <Button
       aria-label="Next"
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-gold transition-colors p-3 hover:bg-white/5 rounded-full md:bg-gold md:hover:text-white  md:p-4 md:shadow-lg md:hover:bg-yellow-400/50"
      >
        <ChevronRight size={32} />
      </Button>

      <div className="fixed inset-0 bg-black/20 -z-10" onClick={onClose} />
    </div>
  )
}
