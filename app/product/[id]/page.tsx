import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

// This is a mock function to get product data
// In a real application, this would fetch data from an API or database
function getProductData(id: string) {
  // Check if it's a used laptop
  const isUsed = id.startsWith("used-")
  const cleanId = isUsed ? id.replace("used-", "") : id
  const productId = Number.parseInt(cleanId)

  if (isUsed) {
    return {
      id: productId,
      name: `Used ${["HP Pavilion", "Dell Inspiron", "Lenovo ThinkPad", "Asus VivoBook", "Acer Aspire", "MacBook Pro"][productId % 6]} ${productId}`,
      brand: ["HP", "Dell", "Lenovo", "Asus", "Acer", "Apple"][productId % 6],
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      price: 30000 + productId * 5000,
      originalPrice: 50000 + productId * 5000,
      specs: {
        processor: `Intel Core i${(productId % 5) + 3}`,
        ram: `${((productId % 2) + 1) * 8}GB DDR4`,
        storage: `${((productId % 2) + 1) * 256}GB SSD`,
        display: '15.6" Full HD (1920 x 1080)',
        graphics: productId % 2 === 0 ? "Integrated Intel UHD Graphics" : "NVIDIA GeForce GTX 1650",
        battery: "Up to 6 hours",
        os: "Windows 10 Home",
        ports: "USB 3.0, HDMI, SD Card Reader, Audio Jack",
        weight: "1.8 kg",
      },
      condition: ["Excellent", "Good", "Very Good"][productId % 3],
      age: `${(productId % 3) + 1} year${productId % 3 === 0 ? "" : "s"} old`,
      warranty: productId % 2 === 0 ? "3 months warranty" : null,
      description:
        "This is a pre-owned laptop in excellent condition. It has been thoroughly tested and certified by our technicians. The laptop shows minimal signs of use and functions perfectly. Battery health is good and holds charge well. Comes with charger and basic accessories.",
      isUsed: true,
      inStock: true,
      rating: 4.3,
      reviewCount: 12,
    }
  } else if (productId > 100) {
    // Accessory
    const accessoryId = productId - 100
    return {
      id: accessoryId,
      name: [
        "Logitech MX Keys Wireless Keyboard",
        "Logitech MX Master 3 Wireless Mouse",
        "HyperX Cloud II Gaming Headset",
        "USB-C to HDMI Adapter",
        "65W USB-C Laptop Charger",
        '15.6" Laptop Backpack',
      ][accessoryId % 6],
      brand: ["Logitech", "HyperX", "Anker", "Samsonite", "Havit", "Razer"][accessoryId % 6],
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      price: 1500 + accessoryId * 1000,
      originalPrice: accessoryId % 2 === 0 ? 2000 + accessoryId * 1000 : null,
      description:
        "High-quality accessory for your laptop. Designed for durability and performance. Compatible with most laptop brands and models.",
      features: [
        "Premium build quality",
        "Ergonomic design",
        "Long battery life",
        "Plug and play functionality",
        "1-year warranty",
      ],
      isAccessory: true,
      inStock: true,
      rating: 4.5,
      reviewCount: 28,
    }
  } else {
    // New laptop
    return {
      id: productId,
      name: `${["HP Pavilion", "Dell Inspiron", "Lenovo ThinkPad", "Asus VivoBook", "Acer Aspire", "MacBook Pro"][productId % 6]} ${productId}`,
      brand: ["HP", "Dell", "Lenovo", "Asus", "Acer", "Apple"][productId % 6],
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      price: 50000 + productId * 10000,
      originalPrice: productId % 3 === 0 ? 50000 + productId * 10000 + 5000 : null,
      specs: {
        processor: `Intel Core i${(productId % 5) + 3} 10th Gen`,
        ram: `${((productId % 2) + 1) * 8}GB DDR4`,
        storage: `${((productId % 2) + 1) * 256}GB SSD`,
        display: '15.6" Full HD (1920 x 1080)',
        graphics: productId % 2 === 0 ? "Integrated Intel UHD Graphics" : "NVIDIA GeForce GTX 1650",
        battery: "Up to 8 hours",
        os: "Windows 11 Home",
        ports: "USB 3.0, USB-C, HDMI, SD Card Reader, Audio Jack",
        weight: "1.6 kg",
      },
      description:
        "This powerful laptop is perfect for work, study, and entertainment. With its high-performance processor, ample RAM, and fast SSD storage  study, and entertainment. With its high-performance processor, ample RAM, and fast SSD storage, you'll enjoy smooth multitasking and fast boot times. The vibrant Full HD display delivers stunning visuals for movies, games, and creative work. Sleek design and long battery life make it perfect for on-the-go use.",
      isNew: true,
      inStock: true,
      rating: 4.7,
      reviewCount: 32,
    }
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductData(params.id)
  const isLaptop = !product.isAccessory
  const isUsed = product.isUsed

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link
          href={isLaptop ? (isUsed ? "/second-hand-laptop" : "/buy-laptop") : "/accessories"}
          className="text-muted-foreground hover:text-foreground"
        >
          {isLaptop ? (isUsed ? "Second Hand Laptops" : "Laptops") : "Accessories"}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href={`/brands/${product.brand.toLowerCase()}`} className="text-muted-foreground hover:text-foreground">
          {product.brand}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="truncate max-w-[200px]">{product.name}</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden bg-white dark:bg-black">
            <img
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-auto object-contain aspect-square"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="border rounded-md overflow-hidden cursor-pointer hover:border-primary transition-colors"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
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
              <Link href={`/brands/${product.brand.toLowerCase()}`} className="text-muted-foreground hover:underline">
                {product.brand}
              </Link>
              {isUsed && (
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  Used
                </Badge>
              )}
              {product.warranty && (
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {product.warranty}
                </Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold">Rs. {product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
              )}
              {product.originalPrice && (
                <Badge className="ml-2">
                  Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </Badge>
              )}
            </div>

            {/* Condition (for used laptops) */}
            {isUsed && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Condition</h3>
                <div className="flex items-center gap-4 mb-2">
                  <Badge variant="outline" className="text-sm px-3 py-1">
                    {product.condition}
                  </Badge>
                  <Badge variant="outline" className="text-sm px-3 py-1">
                    {product.age}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  This laptop has been thoroughly tested and certified by our technicians.
                </p>
              </div>
            )}

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
                  <h3 className="font-medium">
                    {isUsed ? product.warranty || "30-Day Warranty" : "1 Year Official Warranty"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isUsed
                      ? "All used laptops are tested and certified"
                      : "Authorized distributor warranty with service center support"}
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
              {product.inStock ? (
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
      <Tabs defaultValue="details" className="mb-12">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="details"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-4"
          >
            {isLaptop ? "Specifications" : "Details"}
          </TabsTrigger>
          <TabsTrigger
            value="description"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-4"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-4"
          >
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="pt-6">
          {isLaptop ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
                <div className="space-y-2">
                  {Object.entries(product.specs).map(([key, value]) => (
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
                  <li>1 x {product.name}</li>
                  <li>1 x Power Adapter</li>
                  <li>1 x User Manual</li>
                  {!isUsed && <li>1 x Warranty Card</li>}
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold mb-4">Product Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </TabsContent>
        <TabsContent value="description" className="pt-6">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p>{product.description}</p>
            {isLaptop && (
              <>
                <p>
                  This {isUsed ? "used" : "new"} laptop is perfect for{" "}
                  {product.specs.processor.includes("i7") || product.specs.processor.includes("i9")
                    ? "demanding tasks like content creation, programming, and gaming"
                    : "everyday tasks like browsing, office work, and entertainment"}
                  . With its {product.specs.processor} processor and {product.specs.ram} RAM, you'll enjoy smooth
                  multitasking and fast performance.
                </p>
                <p>
                  The {product.specs.display} display delivers crisp, clear visuals for all your content. Storage is
                  handled by a fast {product.specs.storage}, providing quick boot times and ample space for your files.
                </p>
                {isUsed ? (
                  <p>
                    This pre-owned laptop has been thoroughly tested and certified by our technicians. It shows{" "}
                    {product.condition === "Excellent"
                      ? "minimal signs of use"
                      : product.condition === "Very Good"
                        ? "light signs of use"
                        : "some signs of use"}
                    , but functions perfectly. Battery health is good and holds charge well.
                  </p>
                ) : (
                  <p>
                    This brand new laptop comes with a full manufacturer's warranty and all original accessories. It's
                    ready to use right out of the box with {product.specs.os} pre-installed.
                  </p>
                )}
              </>
            )}
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="pt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Customer Reviews</h3>
              <Button>Write a Review</Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold">{product.rating}</div>
              <div>
                <div className="flex items-center mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">Based on {product.reviewCount} reviews</div>
              </div>
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
                    Great product! I've been using it for two weeks now and I'm very satisfied with the performance.
                    Battery life is excellent and the display is crisp and clear. Highly recommended!
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
                    Good value for money. The performance is great for everyday tasks. The only downside is that it gets
                    a bit warm during heavy use. Overall, I'm happy with my purchase.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="group overflow-hidden">
              <CardContent className="p-0 relative">
                {i === 0 && <Badge className="absolute top-3 left-3 z-10">Best Seller</Badge>}
                <Link href={`/product/${i + 10}`} className="block overflow-hidden">
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
                <div className="text-sm text-muted-foreground mb-1">{product.brand}</div>
                <Link href={`/product/${i + 10}`} className="font-medium hover:underline">
                  Related Product {i + 1}
                </Link>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-bold">Rs. {(30000 + i * 10000).toLocaleString()}</span>
                  {i % 2 === 0 && (
                    <span className="text-sm text-muted-foreground line-through">
                      Rs. {(35000 + i * 10000).toLocaleString()}
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
