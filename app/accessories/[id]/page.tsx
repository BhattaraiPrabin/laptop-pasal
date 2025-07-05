import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  ShoppingCart,
  Share2,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Check,
  ChevronRight,
  Minus,
  Plus,
} from "lucide-react"
import Link from "next/link"

// Mock function to get accessory data
function getAccessoryData(id: string) {
  const accessoryId = Number.parseInt(id)

  const accessories = [
    {
      id: 1,
      name: "Logitech MX Keys Wireless Keyboard",
      brand: "Logitech",
      category: "Keyboards",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      price: 12000,
      originalPrice: 15000,
      description:
        "Premium wireless keyboard with backlit keys, perfect for productivity and multi-device use. The MX Keys combines comfort, stability, and precision with smart illumination, proximity sensors, and perfect stroke keys.",
      features: [
        "Perfect stroke keys with spherical dish design for comfort and precision",
        "Smart illumination with backlit keys that light up when your hands approach",
        "Connect up to 3 devices and switch between them seamlessly",
        "USB-C rechargeable with up to 10 days of battery life with backlighting (or up to 5 months with backlighting off)",
        "Compatible with Windows, macOS, Linux, iOS, and Android",
      ],
      specifications: {
        dimensions: "131.63 x 430.2 x 20.5 mm",
        weight: "810 g",
        connectivity: "Bluetooth Low Energy, USB Receiver (Unifying)",
        batteryLife: "10 days with backlighting, 5 months without backlighting",
        compatibility: "Windows, macOS, Linux, iOS, Android",
        warranty: "2 years",
      },
      inStock: true,
      rating: 4.8,
      reviewCount: 45,
      isNew: true,
    },
    {
      id: 2,
      name: "Logitech MX Master 3 Wireless Mouse",
      brand: "Logitech",
      category: "Mice",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      price: 9000,
      originalPrice: 11000,
      description:
        "Advanced wireless mouse designed for creators and programmers. The MX Master 3 features an electromagnetic scroll wheel, customizable buttons, and app-specific customizations for maximum productivity.",
      features: [
        "Magspeed electromagnetic scrolling - ultra-fast and precise",
        "Ergonomic design with thumb rest for comfort during long work sessions",
        "Track on virtually any surface, including glass, with Darkfield 4000 DPI sensor",
        "Connect up to 3 devices and switch between them with the push of a button",
        "USB-C rechargeable with up to 70 days of battery life on a full charge",
      ],
      specifications: {
        dimensions: "124.9 x 84.3 x 51 mm",
        weight: "141 g",
        connectivity: "Bluetooth Low Energy, USB Receiver (Unifying)",
        batteryLife: "Up to 70 days on a full charge",
        compatibility: "Windows, macOS, Linux, iPadOS",
        warranty: "2 years",
      },
      inStock: true,
      rating: 4.9,
      reviewCount: 62,
      isNew: false,
    },
    {
      id: 3,
      name: "HyperX Cloud II Gaming Headset",
      brand: "HyperX",
      category: "Headsets",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      price: 8500,
      originalPrice: null,
      description:
        "Premium gaming headset with 7.1 virtual surround sound and memory foam ear cushions for comfort during extended gaming sessions. The detachable noise-cancelling microphone ensures clear communication with your team.",
      features: [
        "7.1 virtual surround sound for immersive gaming experience",
        "Memory foam ear cushions with premium leatherette for comfort",
        "Durable aluminum frame for long-lasting durability",
        "Detachable noise-cancelling microphone for clear communication",
        "Multi-platform compatibility with PC, PS4, Xbox One, Nintendo Switch, and mobile devices",
      ],
      specifications: {
        dimensions: "9.5 x 9.5 x 4.4 inches",
        weight: "320 g",
        connectivity: "3.5mm audio jack, USB (for 7.1 surround sound)",
        drivers: "53mm neodymium drivers",
        frequency: "15Hz–25,000Hz",
        warranty: "2 years",
      },
      inStock: true,
      rating: 4.7,
      reviewCount: 38,
      isNew: false,
    },
  ]

  // Find the accessory with the matching ID or return the first one
  return accessories.find((a) => a.id === accessoryId) || accessories[0]
}

export default function AccessoryDetailPage({ params }: { params: { id: string } }) {
  const accessory = getAccessoryData(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href="/accessories" className="text-muted-foreground hover:text-foreground">
          Accessories
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link
          href={`/accessories?category=${accessory.category.toLowerCase()}`}
          className="text-muted-foreground hover:text-foreground"
        >
          {accessory.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="truncate max-w-[200px]">{accessory.name}</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden bg-white dark:bg-black">
            <img
              src={accessory.images[0] || "/placeholder.svg"}
              alt={accessory.name}
              className="w-full h-auto object-contain aspect-square"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {accessory.images.map((image, index) => (
              <div
                key={index}
                className="border rounded-md overflow-hidden cursor-pointer hover:border-primary transition-colors"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${accessory.name} - View ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Link href={`/brands/${accessory.brand.toLowerCase()}`} className="text-muted-foreground hover:underline">
                {accessory.brand}
              </Link>
              {accessory.isNew && (
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  New
                </Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold mb-2">{accessory.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(accessory.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {accessory.rating} ({accessory.reviewCount} reviews)
              </span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold">Rs. {accessory.price.toLocaleString()}</span>
              {accessory.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  Rs. {accessory.originalPrice.toLocaleString()}
                </span>
              )}
              {accessory.originalPrice && (
                <Badge className="ml-2">
                  Save {Math.round(((accessory.originalPrice - accessory.price) / accessory.originalPrice) * 100)}%
                </Badge>
              )}
            </div>

            <p className="text-muted-foreground mb-6">{accessory.description}</p>

            {/* Add to Cart */}
            <div className="flex flex-col space-y-4 mb-6">
              <div className="flex items-center">
                <div className="mr-4 font-medium">Quantity:</div>
                <div className="flex items-center border rounded-md">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-none">
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <div className="w-12 text-center">1</div>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-none">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="sm:flex-1 font-medium" size="lg">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {accessory.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery & Returns */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Free Delivery in Kathmandu Valley</h3>
                  <p className="text-sm text-muted-foreground">Delivery within 24-48 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">{accessory.specifications.warranty || "1 Year"} Warranty</h3>
                  <p className="text-sm text-muted-foreground">
                    Authorized distributor warranty with service center support
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">7-Day Easy Return</h3>
                  <p className="text-sm text-muted-foreground">
                    Return or exchange within 7 days if you're not satisfied
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 mb-6">
              <div className="font-medium">Availability:</div>
              {accessory.inStock ? (
                <div className="flex items-center text-green-600 dark:text-green-500">
                  <Check className="h-4 w-4 mr-1" /> In Stock
                </div>
              ) : (
                <div className="text-red-600 dark:text-red-500">Out of Stock</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-12">
        <div className="border-b mb-6">
          <h2 className="text-2xl font-bold pb-2">Specifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-2">
              {Object.entries(accessory.specifications).map(([key, value]) => (
                <div key={key} className="grid grid-cols-2 gap-4 py-2 border-b">
                  <div className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                  <div>{value}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Package Contents</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>1 x {accessory.name}</li>
              <li>1 x User Manual</li>
              <li>1 x Warranty Card</li>
              {accessory.category === "Keyboards" || accessory.category === "Mice" ? (
                <li>1 x USB Receiver</li>
              ) : accessory.category === "Headsets" ? (
                <li>1 x Detachable Microphone</li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mb-12">
        <div className="border-b mb-6">
          <h2 className="text-2xl font-bold pb-2">Customer Reviews</h2>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold">{accessory.rating}</div>
            <div>
              <div className="flex items-center mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(accessory.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Based on {accessory.reviewCount} reviews</div>
            </div>
          </div>
          <Button>Write a Review</Button>
        </div>
        <div className="space-y-4">
          {/* Sample reviews */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-medium">Rajesh Sharma</div>
                  <div className="text-sm text-muted-foreground">2 weeks ago</div>
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 5 ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm">
                Excellent product! The build quality is superb and it works perfectly with my laptop. The battery life
                is impressive and the connectivity is stable. Highly recommended!
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-medium">Sita Thapa</div>
                  <div className="text-sm text-muted-foreground">1 month ago</div>
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 4 ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm">
                Good value for money. The product is well-designed and functions as expected. The only minor issue is
                that the setup instructions could be clearer.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-6">
          <Button variant="outline">Load More Reviews</Button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-12">
        <div className="border-b mb-6">
          <h2 className="text-2xl font-bold pb-2">Related Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="group overflow-hidden">
              <CardContent className="p-0 relative">
                {i === 0 && <Badge className="absolute top-3 left-3 z-10">Best Seller</Badge>}
                <Link href={`/accessories/${i + 10}`} className="block overflow-hidden">
                  <div className="product-image-container w-full flex items-center justify-center p-4">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt={`Related Product ${i + 1}`}
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
              <div className="p-4">
                <div className="text-sm text-muted-foreground mb-1">{accessory.brand}</div>
                <Link href={`/accessories/${i + 10}`} className="font-medium hover:underline">
                  Related Product {i + 1}
                </Link>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-bold">Rs. {(3000 + i * 1000).toLocaleString()}</span>
                  {i % 2 === 0 && (
                    <span className="text-sm text-muted-foreground line-through">
                      Rs. {(3500 + i * 1000).toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
