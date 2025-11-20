import { Facebook, Instagram, Twitter } from "lucide-react"

const Socials = () => {
  return (
    <div>
      <div className="flex gap-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-smooth">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-smooth">
          <Facebook className="h-5 w-5" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-smooth">
          <Twitter className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}

export default Socials
