"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

import Image from "next/image"
import { useState } from "react"
// import weddingImage from "@/assets/wedding-portfolio.jpg"
// import portraitImage from "@/assets/portrait-portfolio.jpg"
// import eventImage from "@/assets/event-portfolio.jpg"

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  // const posts = [
  //   {
  //     title: "10 Tips for Perfect Wedding Photography",
  //     excerpt:
  //       "Discover the secrets to capturing stunning wedding moments that will be treasured for a lifetime. From lighting to composition, we share our expert tips.",
  //     image: weddingImage,
  //     date: "March 15, 2024",
  //     author: "Studio Team",
  //     category: "Wedding Tips",
  //   },
  //   {
  //     title: "The Art of Portrait Photography",
  //     excerpt:
  //       "Learn how to bring out the best in every portrait session. We explore lighting techniques, posing, and creating a comfortable atmosphere for clients.",
  //     image: portraitImage,
  //     date: "March 10, 2024",
  //     author: "Studio Team",
  //     category: "Portrait Tips",
  //   },
  //   {
  //     title: "Event Photography Best Practices",
  //     excerpt:
  //       "Master the art of event photography with our comprehensive guide. From preparation to execution, ensure you never miss a crucial moment.",
  //     image: eventImage,
  //     date: "March 5, 2024",
  //     author: "Studio Team",
  //     category: "Event Tips",
  //   },
  // ]

  const posts = [
    {
      title: "10 Tips for Perfect Wedding Photography",
      excerpt:
        "Discover the secrets to capturing stunning wedding moments that will be treasured for a lifetime. Discover the secrets to capturing stunning wedding moments that will be treasured for a lifetime. Discover the secrets to capturing stunning wedding moments that will be treasured for a lifetime. Discover the secrets to capturing stunning wedding moments that will be treasured for a lifetime. Discover the secrets to capturing stunning wedding moments that will be treasured for a lifetime. From lighting to composition, we share our expert tips. Discover the secrets to capturing stunning wedding moments that will be treasured for a lifetime. From lighting to composition, we share our expert tips. Discover the secrets to capturing stunning wedding moments that will be treasured for a lifetime. From lighting to composition, we share our expert tips. Discover the secrets to capturing stunning wedding moments that will be treasured for a lifetime. From lighting to composition, we share our expert tips.",
      date: "March 15, 2024",
      author: "Studio Team",
      category: "Wedding Tips",
    },
    {
      title: "The Art of Portrait Photography",
      excerpt:
        "Learn how to bring out the best in every portrait session. We explore lighting techniques, posing, and creating a comfortable atmosphere for clients.",
      date: "March 10, 2024",
      author: "Studio Team",
      category: "Portrait Tips",
    },
    {
      title: "Event Photography Best Practices",
      excerpt:
        "Master the art of event photography with our comprehensive guide. From preparation to execution, ensure you never miss a crucial moment.",
      date: "March 5, 2024",
      author: "Studio Team",
      category: "Event Tips",
    },
    {
      title: "10 Tips for Perfect Wedding Photography",
      excerpt:
        "Discover the secrets to capturing stunning wedding moments that will be treasured for a lifetime. From lighting to composition, we share our expert tips.",
      date: "March 15, 2024",
      author: "Studio Team",
      category: "Wedding Tips",
    },
    {
      title: "The Art of Portrait Photography",
      excerpt:
        "Learn how to bring out the best in every portrait session. We explore lighting techniques, posing, and creating a comfortable atmosphere for clients.",
      date: "March 10, 2024",
      author: "Studio Team",
      category: "Portrait Tips",
    },
    {
      title: "Event Photography Best Practices",
      excerpt:
        "Master the art of event photography with our comprehensive guide. From preparation to execution, ensure you never miss a crucial moment.",
      date: "March 5, 2024",
      author: "Studio Team",
      category: "Event Tips",
    },
    {
      title: "10 Tips for Perfect Wedding Photography",
      excerpt:
        "Discover the secrets to capturing stunning wedding moments that will be treasured for a lifetime. From lighting to composition, we share our expert tips.",
      date: "March 15, 2024",
      author: "Studio Team",
      category: "Wedding Tips",
    },
    {
      title: "The Art of Portrait Photography",
      excerpt:
        "Learn how to bring out the best in every portrait session. We explore lighting techniques, posing, and creating a comfortable atmosphere for clients.",
      date: "March 10, 2024",
      author: "Studio Team",
      category: "Portrait Tips",
    },
    {
      title: "Event Photography Best Practices",
      excerpt:
        "Master the art of event photography with our comprehensive guide. From preparation to execution, ensure you never miss a crucial moment.",
      date: "March 5, 2024",
      author: "Studio Team",
      category: "Event Tips",
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-sm uppercase tracking-widest text-gold font-semibold">Our Blog</p>
          <h1 className="text-5xl md:text-6xl font-bold font-serif text-balance">The Power of Visual Storytelling</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how visual narratives can transform your photography and engage your audience.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="group overflow-hidden border-2 border-border hover:border-gold transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  {/* <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  /> */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full">{post.category}</span>
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

                  <p className=" text-muted-foreground mb-4 leading-relaxed line-clamp-3 lg:line-clamp-5">{post.excerpt}</p>

                  <Button variant="outline" className="h-auto border-2 bg-gold  group" onClick={() => setSelectedPost(index)}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            ))}
            {/* Blog Post Dialog */}
            <Dialog open={selectedPost !== null} onOpenChange={() => setSelectedPost(null)}>
              {selectedPost !== null && (
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <>
                    <DialogHeader>
                      <div className="relative aspect-video w-full mb-4 rounded-lg overflow-hidden">
                        {/* <Image
                    src={posts[selectedPost].image || "/placeholder.svg"}
                    alt={posts[selectedPost].title}
                    className="w-full h-full object-cover"
                  /> */}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{posts[selectedPost].date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{posts[selectedPost].author}</span>
                        </div>
                        <span className="px-3 py-1 bg-gold text-black text-xs font-semibold rounded-full">{posts[selectedPost].category}</span>
                      </div>
                      <DialogTitle className="text-3xl font-bold mb-4">{posts[selectedPost].title}</DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="text-base leading-relaxed space-y-4">{posts[selectedPost].excerpt}</DialogDescription>
                  </>
                </DialogContent>
              )}
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
