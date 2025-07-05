import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Briefcase, GraduationCap, PenTool, Laptop, Headphones } from "lucide-react"

// Mock data for categories
const categories = [
  {
    id: 1,
    name: "Gaming Laptops",
    description: "High-performance laptops for gaming enthusiasts",
    icon: Gamepad2,
    url: "/gaming-laptops",
  },
  {
    id: 2,
    name: "Business Laptops",
    description: "Reliable laptops for professionals and businesses",
    icon: Briefcase,
    url: "/business-laptops",
  },
  {
    id: 3,
    name: "Student Laptops",
    description: "Affordable laptops perfect for students",
    icon: GraduationCap,
    url: "/student-laptops",
  },
  {
    id: 4,
    name: "Content Creation",
    description: "Powerful laptops for designers and creators",
    icon: PenTool,
    url: "/content-creation-laptops",
  },
  {
    id: 5,
    name: "Second Hand",
    description: "Quality used laptops at affordable prices",
    icon: Laptop,
    url: "/second-hand-laptop",
  },
  {
    id: 6,
    name: "Accessories",
    description: "Essential accessories for your laptop",
    icon: Headphones,
    url: "/accessories",
  },
]

export default function CategorySection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Explore Our Laptop Categories</h2>
        <p className="text-muted-foreground mt-2">Find the perfect laptop for your specific needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={category.url}>
            <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
