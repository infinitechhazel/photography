"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from "next/image"
import { useState } from "react"
import { motion } from "motion/react"

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")

const posts = [
  {
    id: "1",
    title: "10 Tips for Perfect Wedding Photography",
    excerpt:
      "Discover the secrets to capturing stunning wedding moments that will be treasured for a lifetime. From lighting to composition, we share our expert tips.",
    date: "March 15, 2024",
    author: "Studio Team",
    label: "Wedding Tips",
    category: "wedding",
    image: "/wedding-photography.jpg",
  },
  {
    id: "2",
    title: "The Art of Portrait Photography",
    excerpt:
      "Learn how to bring out the best in every portrait session. We explore lighting techniques, posing, and creating a comfortable atmosphere for clients.",
    date: "March 10, 2024",
    author: "Studio Team",
    label: "Portrait Tips",
    category: "portrait",
    image: "/portrait-photography.jpg",
  },
  {
    id: "3",
    title: "Event Photography Best Practices",
    excerpt:
      "Master the art of event photography with our comprehensive guide. From preparation to execution, ensure you never miss a crucial moment.",
    date: "March 5, 2024",
    author: "Studio Team",
    label: "Event Tips",
    category: "event",
    image: "/event-photography.jpg",
  },
  {
    id: "4",
    title: "Product Photography Essentials",
    excerpt:
      "Highlight your products with stunning visuals. Learn techniques for lighting, angles, and backgrounds that make items stand out.",
    date: "February 28, 2024",
    author: "Studio Team",
    label: "Product Tips",
    category: "product",
    image: "/product-photography.jpg",
  },
  {
    id: "5",
    title: "Commercial Photography Insights",
    excerpt:
      "Explore how to create compelling images for advertising and branding. We cover storytelling, composition, and working with clients.",
    date: "February 20, 2024",
    author: "Studio Team",
    label: "Commercial Tips",
    category: "commercial",
    image: "/commercial-photography.jpg",
  },
  {
    id: "6",
    title: "Studio Setup Guide",
    excerpt:
      "A complete guide to building a professional studio. From lighting rigs to backdrops, learn how to create the perfect environment.",
    date: "February 10, 2024",
    author: "Studio Team",
    label: "Studio Tips",
    category: "studio",
    image: "/studio-setup.jpg",
  },
  {
    id: "7",
    title: "Choosing the Right Gear",
    excerpt:
      "We break down the essential cameras, lenses, and accessories every photographer should consider for different types of shoots.",
    date: "February 1, 2024",
    author: "Studio Team",
    label: "Gear Tips",
    category: "equipment",
    image: "/photography-gear.jpg",
  },
];

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "wedding", label: "Weddings" },
    { id: "portrait", label: "Portraits" },
    { id: "event", label: "Events" },
    { id: "product", label: "Products" },
    { id: "studio", label: "Studio" },
    { id: "behind-the-scenes", label: "Behind the Scenes" },
  ]

  const featuredPost = posts[5]
  const filteredPosts = selectedCategory === "all" ? posts : posts.filter((post) => post.category === selectedCategory)

  const post = posts.find((p) => p.id === selectedPost)

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-sm uppercase tracking-widest text-gold font-semibold">Our Blog</p>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-balance">The Power of Visual Storytelling</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how visual narratives can transform your photography and engage your audience.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center 
                    bg-linear-to-r from-gold/20 via-gold/10 to-transparent 
                    rounded-2xl overflow-hidden border border-gold/30 
                    hover:border-gold/40 transition-all duration-300 p-6 sm:p-8"
          >
            <Image
              src={featuredPost.image || "/placeholder.svg"}
              alt={featuredPost.title}
              width={300}
              height={200}
              className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-lg shimmer-effect group-hover:scale-110"
            />

            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-gold font-semibold">Featured Post</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-balance">{featuredPost.title}</h2>
              <p className="text-sm sm:text-base text-muted-foreground line-clamp-5">{featuredPost.excerpt}</p>

              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                <span>{featuredPost.author}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
              </div>

              <Button
                onClick={() => setSelectedPost(featuredPost.id)}
                className="px-4 sm:px-6 py-2 border-2 border-gold text-foreground font-semibold rounded-lg 
                     hover:bg-gold/10 hover:shadow-lg hover:shadow-gold/20 transition-all duration-200 text-sm sm:text-base"
              >
                Read Full Post
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm ${
                  selectedCategory === cat.id ? "gold-glow text-primary" : "border border-gold/30 text-foreground hover:border-gold hover:text-gold"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <section className="pt-2 pb-10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.5 }}
                  key={index}
                >
                  <Card key={index} className="gap-0 p-0 group overflow-hidden border border-gold/30 hover:border-gold transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover transition-transform shimmer-effect duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gold text-black text-xs font-semibold rounded-full">{post.label}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-smooth">{post.title}</h3>

                      <p className=" text-muted-foreground mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                      <Button variant="outline" className="h-auto gold-glow  group" onClick={() => setSelectedPost(post.id)}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}

              {/* Blog Post Dialog */}
              <Dialog open={selectedPost !== null} onOpenChange={() => setSelectedPost(null)}>
                {post && (
                  <DialogContent className="lg:max-w-2xl max-w-[350px] max-h-[90vh] overflow-auto mx-auto">
                    <>
                      <DialogHeader>
                        <div className="relative aspect-video w-full my-6 rounded-lg overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={300}
                            height={200}
                            className="w-full h-full object-cover shimmer-effect"
                          />
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-muted-foreground mb-4 flex-wrap">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>

                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>

                          <div className="flex items-center gap-1">
                            <span className="px-3 py-1 bg-gold text-black text-xs font-semibold rounded-full">{post.category}</span>
                          </div>
                        </div>

                        <DialogTitle className="text-3xl font-bold mb-4">{post.title}</DialogTitle>
                      </DialogHeader>

                      <DialogDescription className="text-base leading-relaxed space-y-4">{post.excerpt}</DialogDescription>
                    </>
                  </DialogContent>
                )}
              </Dialog>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Blog
