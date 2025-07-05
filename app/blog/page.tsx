import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, ChevronRight, Search } from "lucide-react"
import Link from "next/link"

// Mock data for blog categories
const categories = [
  { id: "all", name: "All Posts" },
  { id: "buying-guide", name: "Buying Guides" },
  { id: "tech-tips", name: "Tech Tips" },
  { id: "reviews", name: "Reviews" },
  { id: "news", name: "News" },
  { id: "how-to", name: "How To" },
]

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Best Laptops Under Rs. 50,000 in Nepal",
    excerpt:
      "Looking for a budget-friendly laptop? Check out our top picks for laptops under Rs. 50,000 that offer great value for money.",
    image: "/placeholder.svg?height=300&width=500",
    date: "May 15, 2023",
    category: "buying-guide",
    author: "Rajesh Sharma",
    featured: true,
  },
  {
    id: 2,
    title: "How to Sell Your Laptop Online in Nepal",
    excerpt: "Learn the step-by-step process to sell your used laptop online and get the best price for it in Nepal.",
    image: "/placeholder.svg?height=300&width=500",
    date: "April 28, 2023",
    category: "how-to",
    author: "Sita Thapa",
    featured: false,
  },
  {
    id: 3,
    title: "Used vs New Laptop: Which One Should You Buy?",
    excerpt:
      "Confused between buying a new or used laptop? We break down the pros and cons to help you make the right decision.",
    image: "/placeholder.svg?height=300&width=500",
    date: "April 10, 2023",
    category: "buying-guide",
    author: "Anish Gurung",
    featured: false,
  },
  {
    id: 4,
    title: "10 Essential Accessories for Your Laptop",
    excerpt:
      "Enhance your laptop experience with these must-have accessories that improve productivity, comfort, and functionality.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 22, 2023",
    category: "buying-guide",
    author: "Priya Rai",
    featured: false,
  },
  {
    id: 5,
    title: "How to Extend Your Laptop's Battery Life",
    excerpt:
      "Simple tips and tricks to maximize your laptop's battery life and keep it running longer between charges.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 15, 2023",
    category: "tech-tips",
    author: "Sunil Poudel",
    featured: false,
  },
  {
    id: 6,
    title: "Review: Dell XPS 13 - The Ultimate Ultrabook?",
    excerpt:
      "We put the latest Dell XPS 13 through its paces to see if it lives up to the hype as the best ultrabook on the market.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 5, 2023",
    category: "reviews",
    author: "Rajesh Sharma",
    featured: false,
  },
  {
    id: 7,
    title: "Windows 11 vs Windows 10: Should You Upgrade?",
    excerpt:
      "A comprehensive comparison of Windows 11 and Windows 10 to help you decide if upgrading is right for you.",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 20, 2023",
    category: "tech-tips",
    author: "Anish Gurung",
    featured: false,
  },
  {
    id: 8,
    title: "The Rise of Gaming Laptops in Nepal",
    excerpt:
      "Gaming laptops are becoming increasingly popular in Nepal. We explore the reasons behind this trend and what it means for gamers.",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 10, 2023",
    category: "news",
    author: "Sita Thapa",
    featured: false,
  },
  {
    id: 9,
    title: "How to Clean and Maintain Your Laptop",
    excerpt:
      "Regular maintenance can extend the life of your laptop. Learn how to properly clean and maintain your device.",
    image: "/placeholder.svg?height=300&width=500",
    date: "January 25, 2023",
    category: "how-to",
    author: "Priya Rai",
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-muted-foreground">Latest news, guides, and tips about laptops and technology.</p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="overflow-hidden">
                <Link href={`/blog/${featuredPost.id}`}>
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </Link>
              </div>
              <div className="p-6 flex flex-col justify-center">
                <Badge className="w-fit mb-3">{featuredPost.category.replace("-", " ")}</Badge>
                <Link href={`/blog/${featuredPost.id}`}>
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">{featuredPost.title}</h2>
                </Link>
                <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <CalendarDays className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {featuredPost.author}</span>
                </div>
                <Button asChild className="w-fit">
                  <Link href={`/blog/${featuredPost.id}`}>Read More</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Search and Categories */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search articles..." className="pl-10" />
        </div>
        <div className="flex-shrink-0">
          <Tabs defaultValue="all">
            <TabsList className="h-10">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="capitalize">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {regularPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col h-full">
            <div className="overflow-hidden">
              <Link href={`/blog/${post.id}`}>
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
              </Link>
            </div>
            <CardContent className="flex-1 p-6">
              <div className="flex items-center justify-between mb-3">
                <Badge className="capitalize">{post.category.replace("-", " ")}</Badge>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CalendarDays className="h-3 w-3" />
                  <span>{post.date}</span>
                </div>
              </div>
              <Link href={`/blog/${post.id}`}>
                <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{post.title}</h3>
              </Link>
              <p className="text-muted-foreground text-sm mb-3">{post.excerpt}</p>
              <div className="text-sm text-muted-foreground">By {post.author}</div>
            </CardContent>
            <CardFooter className="pt-0 pb-6 px-6">
              <Button variant="link" asChild className="p-0 h-auto font-medium">
                <Link href={`/blog/${post.id}`} className="flex items-center">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" disabled>
            <ChevronRight className="h-4 w-4 rotate-180" />
            <span className="sr-only">Previous page</span>
          </Button>
          <Button variant="outline" size="sm" className="h-9 w-9 font-medium">
            1
          </Button>
          <Button variant="ghost" size="sm" className="h-9 w-9 font-medium">
            2
          </Button>
          <Button variant="ghost" size="sm" className="h-9 w-9 font-medium">
            3
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-muted/50 rounded-lg p-8 mb-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Stay updated with the latest tech news, laptop reviews, and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Your email address" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
