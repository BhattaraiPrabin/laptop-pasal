import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Filter, SlidersHorizontal, Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// Mock data for accessories categories
const categories = [
  { id: "all", name: "All Accessories" },
  { id: "keyboard", name: "Keyboards" },
  { id: "mouse", name: "Mice" },
  { id: "headset", name: "Headsets" },
  { id: "cables", name: "Cables & Adapters" },
  { id: "chargers", name: "Chargers" },
  { id: "bags", name: "Laptop Bags" },
  { id: "cooling", name: "Cooling Pads" },
]

// Mock data for accessories products
const products = [
  {
    id: 1,
    name: "Logitech MX Keys Wireless Keyboard",
    category: "keyboard",
    brand: "Logitech",
    image: "/placeholder.svg?height=300&width=300",
    price: 12000,
    originalPrice: 15000,
    isNew: true,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Logitech MX Master 3 Wireless Mouse",
    category: "mouse",
    brand: "Logitech",
    image: "/placeholder.svg?height=300&width=300",
    price: 9000,
    originalPrice: 11000,
    isNew: false,
    badge: null,
  },
  {
    id: 3,
    name: "HyperX Cloud II Gaming Headset",
    category: "headset",
    brand: "HyperX",
    image: "/placeholder.svg?height=300&width=300",
    price: 8500,
    originalPrice: null,
    isNew: false,
    badge: null,
  },
  {
    id: 4,
    name: "USB-C to HDMI Adapter",
    category: "cables",
    brand: "Anker",
    image: "/placeholder.svg?height=300&width=300",
    price: 1500,
    originalPrice: 2000,
    isNew: false,
    badge: null,
  },
  {
    id: 5,
    name: "65W USB-C Laptop Charger",
    category: "chargers",
    brand: "Anker",
    image: "/placeholder.svg?height=300&width=300",
    price: 3500,
    originalPrice: null,
    isNew: true,
    badge: null,
  },
  {
    id: 6,
    name: '15.6" Laptop Backpack',
    category: "bags",
    brand: "Samsonite",
    image: "/placeholder.svg?height=300&width=300",
    price: 4500,
    originalPrice: 5500,
    isNew: false,
    badge: "Value",
  },
  {
    id: 7,
    name: "Laptop Cooling Pad with 5 Fans",
    category: "cooling",
    brand: "Havit",
    image: "/placeholder.svg?height=300&width=300",
    price: 2500,
    originalPrice: 3000,
    isNew: false,
    badge: null,
  },
  {
    id: 8,
    name: "Mechanical Gaming Keyboard RGB",
    category: "keyboard",
    brand: "Redragon",
    image: "/placeholder.svg?height=300&width=300",
    price: 5500,
    originalPrice: null,
    isNew: true,
    badge: null,
  },
  {
    id: 9,
    name: "Wireless Gaming Mouse",
    category: "mouse",
    brand: "Razer",
    image: "/placeholder.svg?height=300&width=300",
    price: 7500,
    originalPrice: 8500,
    isNew: false,
    badge: null,
  },
  {
    id: 10,
    name: "Bluetooth Noise Cancelling Headphones",
    category: "headset",
    brand: "Sony",
    image: "/placeholder.svg?height=300&width=300",
    price: 15000,
    originalPrice: 18000,
    isNew: false,
    badge: "Premium",
  },
  {
    id: 11,
    name: "USB Hub 4-Port",
    category: "cables",
    brand: "Anker",
    image: "/placeholder.svg?height=300&width=300",
    price: 1800,
    originalPrice: null,
    isNew: false,
    badge: null,
  },
  {
    id: 12,
    name: 'Laptop Sleeve 13-14"',
    category: "bags",
    brand: "Case Logic",
    image: "/placeholder.svg?height=300&width=300",
    price: 2000,
    originalPrice: 2500,
    isNew: false,
    badge: null,
  },
]

export default function AccessoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Laptop Accessories</h1>
        <p className="text-muted-foreground">
          Enhance your laptop experience with our wide range of accessories. From keyboards and mice to bags and
          chargers.
        </p>
      </div>

      {/* Categories Tabs */}
      <Tabs defaultValue="all" className="mb-8">
        <div className="overflow-x-auto pb-2">
          <TabsList className="h-10 w-max">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="px-4">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* All Accessories Tab */}
        <TabsContent value="all" className="mt-6">
          {/* Mobile Filters */}
          <div className="lg:hidden mb-6">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex items-center gap-2 w-full">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2 w-full">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Sort</span>
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden">
                <CardContent className="p-0 relative">
                  {product.badge && <Badge className="absolute top-3 left-3 z-10">{product.badge}</Badge>}
                  {product.isNew && (
                    <Badge variant="outline" className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground">
                      New
                    </Badge>
                  )}
                  <Link href={`/accessories/${product.id}`} className="block overflow-hidden">
                    <div className="product-image-container w-full flex items-center justify-center p-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="max-h-full object-contain transition-transform group-hover:scale-105"
                      />
                    </div>
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
                  <div className="text-sm text-muted-foreground mb-1">{product.brand}</div>
                  <Link href={`/accessories/${product.id}`} className="font-medium hover:underline">
                    {product.name}
                  </Link>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-bold">Rs. {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        Rs. {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <ChevronLeft className="h-4 w-4" />
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
        </TabsContent>

        {/* Category-specific Tabs */}
        {categories.slice(1).map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter((product) => product.category === category.id)
                .map((product) => (
                  <Card key={product.id} className="group overflow-hidden">
                    <CardContent className="p-0 relative">
                      {product.badge && <Badge className="absolute top-3 left-3 z-10">{product.badge}</Badge>}
                      {product.isNew && (
                        <Badge
                          variant="outline"
                          className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground"
                        >
                          New
                        </Badge>
                      )}
                      <Link href={`/accessories/${product.id}`} className="block overflow-hidden">
                        <div className="product-image-container w-full flex items-center justify-center p-4">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="max-h-full object-contain transition-transform group-hover:scale-105"
                          />
                        </div>
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
                      <div className="text-sm text-muted-foreground mb-1">{product.brand}</div>
                      <Link href={`/accessories/${product.id}`} className="font-medium hover:underline">
                        {product.name}
                      </Link>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="font-bold">Rs. {product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            Rs. {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>

            {/* Category-specific SEO Content */}
            <div className="mt-12 bg-muted/50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">{category.name} for Your Laptop in Nepal</h2>
              <div className="prose prose-sm dark:prose-invert">
                <p>
                  Find the best {category.name.toLowerCase()} for your laptop at Laptop Pasal. We offer a wide range of
                  {category.name.toLowerCase()} from top brands at competitive prices in Nepal.
                </p>
                <p>
                  Whether you're looking for gaming {category.name.toLowerCase()}, professional
                  {category.name.toLowerCase()}, or budget-friendly options, we have something for everyone. All our
                  products come with warranty and after-sales support.
                </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* SEO Content */}
      <div className="mt-12 bg-muted/50 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Laptop Accessories in Nepal</h2>
        <div className="prose prose-sm dark:prose-invert">
          <p>
            Enhance your laptop experience with our wide range of accessories at Laptop Pasal. We offer everything you
            need to maximize your productivity, comfort, and entertainment. From keyboards and mice to headsets, bags,
            chargers, and more, we have all the essential accessories for your laptop.
          </p>
          <p>
            Our collection includes products from top brands like Logitech, Razer, HyperX, Anker, Samsonite, and more at
            competitive prices. Whether you're a gamer, professional, student, or casual user, we have accessories to
            suit your needs and budget.
          </p>
          <p>
            All our accessories come with warranty and after-sales support. We offer free delivery within Kathmandu
            Valley and secure payment options for your convenience.
          </p>

          <h3 className="text-lg font-semibold mt-4">Popular Laptop Accessories</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Keyboards:</strong> Enhance your typing experience with our range of mechanical, wireless, and
              ergonomic keyboards.
            </li>
            <li>
              <strong>Mice:</strong> Choose from our selection of gaming, wireless, and ergonomic mice for precise
              control.
            </li>
            <li>
              <strong>Headsets:</strong> Immerse yourself in audio with our gaming headsets, noise-cancelling
              headphones, and wireless earbuds.
            </li>
            <li>
              <strong>Laptop Bags:</strong> Protect your laptop with our stylish and durable backpacks, sleeves, and
              messenger bags.
            </li>
            <li>
              <strong>Chargers & Adapters:</strong> Keep your laptop powered with our range of chargers, power banks,
              and adapters.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
