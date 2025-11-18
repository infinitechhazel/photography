'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

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

export function GalleryLightbox({
  image,
  onClose,
  onPrevious,
  onNext,
  totalImages,
  currentIndex,
}: GalleryLightboxProps) {
  const [isLoading, setIsLoading] = useState(true)


  return (
    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-50 p-2"
        aria-label="Close lightbox"
      >
        <X size={28} />
      </button>

      <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center bg-black/50 rounded-lg overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <img
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            onLoad={() => setIsLoading(false)}
            className="w-full h-full object-contain"
          />
        </div>

        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-gold transition-colors p-3 hover:bg-white/5 rounded-full"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-gold transition-colors p-3 hover:bg-white/5 rounded-full"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <p className="text-gold font-serif text-2xl font-semibold">{image.title}</p>
          <p className="text-white/60 text-sm mt-2">
            Image {currentIndex} of {totalImages}
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 text-white/40 text-xs">
        <p>Use arrow keys or buttons to navigate</p>
      </div>
    </div>
  )
}
