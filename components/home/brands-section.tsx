import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// Mock data for brands
const brands = [
  {
    id: 1,
    name: "HP",
    image: "/placeholder.svg?height=100&width=100",
    url: "/brands/hp",
  },
  {
    id: 2,
    name: "Dell",
    image: "/placeholder.svg?height=100&width=100",
    url: "/brands/dell",
  },
  {
    id: 3,
    name: "Lenovo",
    image: "/placeholder.svg?height=100&width=100",
    url: "/brands/lenovo",
  },
  {
    id: 4,
    name: "Asus",
    image: "/placeholder.svg?height=100&width=100",
    url: "/brands/asus",
  },
  {
    id: 5,
    name: "Acer",
    image: "/placeholder.svg?height=100&width=100",
    url: "/brands/acer",
  },
  {
    id: 6,
    name: "Apple",
    image: "/placeholder.svg?height=100&width=100",
    url: "/brands/apple",
  },
]

export default function BrandsSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Shop by Brand</h2>
        <p className="text-muted-foreground mt-2">Explore laptops from top brands</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {brands.map((brand) => (
          <Link key={brand.id} href={brand.url}>
            <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
              <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                <img
                  src={brand.image || "/placeholder.svg"}
                  alt={brand.name}
                  className="w-16 h-16 object-contain mb-3"
                />
                <h3 className="font-medium">{brand.name}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
