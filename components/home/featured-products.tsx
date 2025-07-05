import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart } from "lucide-react"

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "HP Pavilion 15",
    image: "/placeholder.svg?height=300&width=300",
    price: 85000,
    originalPrice: 95000,
    specs: "Intel Core i5, 8GB RAM, 512GB SSD",
    badge: "Best Seller",
    isNew: true,
  },
  {
    id: 2,
    name: "Dell Inspiron 14",
    image: "/placeholder.svg?height=300&width=300",
    price: 75000,
    originalPrice: 82000,
    specs: "Intel Core i5, 8GB RAM, 256GB SSD",
    badge: null,
    isNew: false,
  },
  {
    id: 3,
    name: "Lenovo ThinkPad E15",
    image: "/placeholder.svg?height=300&width=300",
    price: 110000,
    originalPrice: 120000,
    specs: "Intel Core i7, 16GB RAM, 512GB SSD",
    badge: "Premium",
    isNew: true,
  },
  {
    id: 4,
    name: "Asus VivoBook 15",
    image: "/placeholder.svg?height=300&width=300",
    price: 65000,
    originalPrice: 70000,
    specs: "Intel Core i3, 8GB RAM, 256GB SSD",
    badge: "Value",
    isNew: false,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Featured Laptops</h2>
          <p className="text-muted-foreground mt-2">Our most popular laptops that customers love</p>
        </div>
        <Link href="/buy-laptop">
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Laptops
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="group overflow-hidden">
            <CardContent className="p-0 relative">
              {product.badge && <Badge className="absolute top-3 left-3 z-10">{product.badge}</Badge>}
              {product.isNew && (
                <Badge variant="outline" className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground">
                  New
                </Badge>
              )}
              <Link href={`/product/${product.id}`} className="block overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-[200px] object-contain p-4 transition-transform group-hover:scale-105"
                />
              </Link>
              <div className="absolute right-3 bottom-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="secondary" size="icon" className="rounded-full h-9 w-9 shadow-md">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full h-9 w-9 shadow-md">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Add to cart</span>
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start p-4">
              <Link href={`/product/${product.id}`} className="font-medium hover:underline">
                {product.name}
              </Link>
              <p className="text-sm text-muted-foreground mt-1">{product.specs}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-bold">Rs. {product.price.toLocaleString()}</span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-muted-foreground line-through">
                    Rs. {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
