import { motion } from "framer-motion"
import Image from "next/image"

const imagesColumn1 = ["/wedding-feature.webp", "/party-portrait.webp", "/event.webp", "/product.webp"]
const imagesColumn2 = ["/bride-and-groom.webp", "/corporate-event-networking.webp", "/event-2.webp", "/event-party-celeb.webp"]
const imagesColumn3 = ["/family-portrait-outdoors.webp", "/gala-event-photography.webp", "/jewelry-photography.webp", "/luxury-product-photography-watch.webp"]
const imagesColumn4 = ["/product-photography-cosmetics.webp", "/studio-setup-professional-lighting.webp", "/studio-backdrop-photography.webp", "/product.webp"]
const imagesColumn5 = ["/studio-model-photography-professional.webp", "/portrait-3.webp", "/gala-event-photography.webp", "/product-2.webp"]

type ImageArray = typeof imagesColumn1

const FilmColumn = ({ columnImages, direction = "up", delay = 0 }: { columnImages: ImageArray; direction?: "up" | "down"; delay?: number }) => {
  const yAnimation = direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"]

  return (
    <div className="relative flex flex-col">
      <div className="relative bg-foreground/95 px-2 py-1">
        <div className="absolute left-0.5 top-0 bottom-0 w-2 flex flex-col justify-around py-2">
          {[...Array(40)].map((_, i) => (
            <div key={`left-${i}`} className="w-1.5 h-2 bg-background/90 rounded-sm" />
          ))}
        </div>

        <div className="absolute right-0.5 top-0 bottom-0 w-2 flex flex-col justify-around py-2">
          {[...Array(40)].map((_, i) => (
            <div key={`right-${i}`} className="w-1.5 h-2 bg-background/90 rounded-sm" />
          ))}
        </div>

        <motion.div
          className="flex flex-col gap-2 mx-3"
          animate={{ y: yAnimation }}
          transition={{
            repeat: Infinity,
            duration: columnImages.length * 5,
            ease: "linear",
            delay: delay,
          }}
        >
          {[...columnImages, ...columnImages].map((src, i) => (
            <div key={i} className="relative w-full aspect-3/4 overflow-hidden border-2 border-foreground/80">
              <Image src={src} alt={`filmstrip-${i}`} fill sizes="w-full h-full" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const FilmStrip = () => {
  return (
    <section className="py-16 px-4 bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A glimpse into our creative journey</p>
        </div>

        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 h-full">
            <FilmColumn columnImages={imagesColumn1} direction="up" delay={0} />
            <FilmColumn columnImages={[...imagesColumn2].reverse()} direction="down" delay={0.5} />
            <FilmColumn columnImages={imagesColumn3} direction="up" delay={1} />
            <div className="hidden md:block">
              <FilmColumn columnImages={[...imagesColumn4].reverse()} direction="down" delay={1.5} />
            </div>
            <div className="hidden lg:block">
              <FilmColumn columnImages={imagesColumn5} direction="up" delay={2} />
            </div>
          </div>

          <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-background to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default FilmStrip
