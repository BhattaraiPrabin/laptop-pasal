import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Best Laptops Under Rs. 50,000 in Nepal",
    excerpt:
      "Looking for a budget-friendly laptop? Check out our top picks for laptops under Rs. 50,000 that offer great value for money.",
    image: "/placeholder.svg?height=300&width=500",
    date: "May 15, 2023",
    url: "/blog/best-laptops-under-50000-in-nepal",
  },
  {
    id: 2,
    title: "How to Sell Your Laptop Online in Nepal",
    excerpt: "Learn the step-by-step process to sell your used laptop online and get the best price for it in Nepal.",
    image: "/placeholder.svg?height=300&width=500",
    date: "April 28, 2023",
    url: "/blog/how-to-sell-your-laptop-online-in-nepal",
  },
  {
    id: 3,
    title: "Used vs New Laptop: Which One Should You Buy?",
    excerpt:
      "Confused between buying a new or used laptop? We break down the pros and cons to help you make the right decision.",
    image: "/placeholder.svg?height=300&width=500",
    date: "April 10, 2023",
    url: "/blog/used-vs-new-laptop-which-one-should-you-buy",
  },
]

export default function BlogPreview() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Latest from Our Blog</h2>
          <p className="text-muted-foreground mt-2">Tips, guides, and news about laptops</p>
        </div>
        <Link href="/blog">
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Posts
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="h-full overflow-hidden">
            <Link href={post.url} className="block overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-48 object-cover transition-transform hover:scale-105"
              />
            </Link>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <CalendarDays className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <Link href={post.url}>
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{post.title}</h3>
              </Link>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Link href={post.url}>
                <Button variant="link" className="p-0 h-auto font-medium">
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
