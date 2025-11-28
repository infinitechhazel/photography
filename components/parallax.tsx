import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface ParallaxImageProps {
  src: string
  alt: string
  text: string
  subtext: string
}

function ParallaxImage({ src, alt, text, subtext }: ParallaxImageProps) {
  const ref = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden snap-start snap-mandatory scrollbar-hide scroll-smooth"
    >
      <motion.img src={src} alt={alt} style={{ y }} className="absolute inset-0 w-full h-[140%] object-cover" fetchPriority="high" />

      <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-slate-700/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-16 left-8 md:left-16"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text drop-shadow-lg">{text}</h1>
        <div className="h-1 w-24 bg-linear-to-r from-yellow-600 to-yellow-500 my-5" />
        <p className="text-lg text-white max-w-2xl mr-30">{subtext}</p>
      </motion.div>
    </section>
  )
}

const PhotographyParallax = () => {
  const photos = [
    { src: "/party-group.webp", alt: "Group party outdoors", text: "Timeless Moments", subtext: "Capturing love stories that last a lifetime" },
    { src: "/portrait-lifestyle.webp", alt: "Portrait photography showcase", text: "True Essence", subtext: "Revealing the soul behind every smile" },
    {
      src: "/shelf.webp",
      alt: "Event photography showcase",
      text: "Captured Joy",
      subtext: "Freezing the excitement of unforgettable events",
    },
    {
      src: "/jewelry-product-details.webp",
      alt: "Product photography showcase",
      text: "Pure Detail",
      subtext: "Showcasing products in their finest light",
    },
    {
      src: "/studio-model-photography-professional.webp",
      alt: "Studio photography showcase",
      text: "Creative Vision",
      subtext: "Bringing imaginative concepts to life in the studio",
    },
  ]

  return (
    <section className="relative snap-y snap-mandatory overflow-y-scroll h-screen scrollbar-hide">
      {photos.map((photo, i) => (
        <ParallaxImage key={i} src={photo.src} alt={photo.alt} text={photo.text} subtext={photo.subtext} />
      ))}
    </section>
  )
}

export default PhotographyParallax
