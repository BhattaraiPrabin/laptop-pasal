import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Filter, SlidersHorizontal, Heart, ShoppingCart, Check } from "lucide-react"
import Link from "next/link"

// This is a mock function to get brand data
function getBrandData(brand: string) {
  const brandName = brand.charAt(0).toUpperCase() + brand.slice(1)

  const brandInfo = {
    asus: {
      name: "ASUS",
      logo: "/placeholder.svg?height=100&width=200",
      description:
        "ASUS is a multinational computer and phone hardware and electronics company headquartered in Taiwan. Known for their innovative designs, reliable performance, and cutting-edge technology, ASUS offers a wide range of laptops from budget-friendly options to high-end gaming machines.",
      founded: "1989",
      headquarters: "Taiwan",
      website: "https://www.asus.com",
      strengths: [
        "Innovative designs",
        "Gaming laptops (ROG series)",
        "Good price-to-performance ratio",
        "Wide range of products",
      ],
      popularSeries: ["ROG (Republic of Gamers)", "ZenBook", "VivoBook", "TUF Gaming"],
      serviceLocations: ["Kathmandu", "Pokhara", "Biratnagar"],
      warrantyInfo: "1-2 years official warranty on all new laptops",
    },
    dell: {
      name: "Dell",
      logo: "/placeholder.svg?height=100&width=200",
      description:
        "Dell is an American multinational computer technology company that develops, sells, repairs, and supports computers and related products and services. Dell is known for their business laptops, excellent customer service, and build quality.",
      founded: "1984",
      headquarters: "USA",
      website: "https://www.dell.com",
      strengths: ["Business laptops", "Excellent customer service", "Build quality", "Alienware gaming series"],
      popularSeries: ["XPS", "Inspiron", "Latitude", "Alienware"],
      serviceLocations: ["Kathmandu", "Pokhara"],
      warrantyInfo: "1-3 years warranty with options for extended coverage",
    },
    hp: {
      name: "HP",
      logo: "/placeholder.svg?height=100&width=200",
      description:
        "HP (Hewlett-Packard) is an American multinational information technology company that offers a wide range of computing products. HP laptops are known for their reliability, performance, and innovative features suitable for both personal and professional use.",
      founded: "1939",
      headquarters: "USA",
      website: "https://www.hp.com",
      strengths: ["Reliable performance", "Business laptops", "Convertible designs", "Good after-sales service"],
      popularSeries: ["Spectre", "Envy", "Pavilion", "EliteBook", "Omen"],
      serviceLocations: ["Kathmandu", "Pokhara", "Biratnagar", "Chitwan"],
      warrantyInfo: "1-3 years warranty depending on model",
    },
    lenovo: {
      name: "Lenovo",
      logo: "/placeholder.svg?height=100&width=200",
      description:
        "Lenovo is a Chinese multinational technology company that designs, develops, manufactures, and sells personal computers, tablets, smartphones, workstations, servers, and more. Lenovo is known for their ThinkPad business laptops and innovative features.",
      founded: "1984",
      headquarters: "China",
      website: "https://www.lenovo.com",
      strengths: ["Business laptops (ThinkPad)", "Durability", "Keyboard quality", "Good battery life"],
      popularSeries: ["ThinkPad", "IdeaPad", "Legion", "Yoga"],
      serviceLocations: ["Kathmandu", "Pokhara", "Biratnagar"],
      warrantyInfo: "1-3 years warranty with on-site service for business models",
    },
    acer: {
      name: "Acer",
      logo: "/placeholder.svg?height=100&width=200",
      description:
        "Acer is a Taiwanese multinational hardware and electronics corporation specializing in advanced electronics technology. Acer offers a wide range of laptops at competitive prices, making them popular among budget-conscious consumers.",
      founded: "1976",
      headquarters: "Taiwan",
      website: "https://www.acer.com",
      strengths: [
        "Affordable options",
        "Gaming laptops (Predator series)",
        "Good specifications for the price",
        "Wide availability",
      ],
      popularSeries: ["Aspire", "Swift", "Predator", "Nitro"],
      serviceLocations: ["Kathmandu", "Pokhara"],
      warrantyInfo: "1-2 years standard warranty",
    },
    msi: {
      name: "MSI",
      logo: "/placeholder.svg?height=100&width=200",
      description:
        "MSI (Micro-Star International) is a Taiwanese multinational information technology corporation specializing in gaming laptops and components. MSI is known for their high-performance gaming laptops with advanced cooling solutions.",
      founded: "1986",
      headquarters: "Taiwan",
      website: "https://www.msi.com",
      strengths: ["Gaming performance", "Cooling technology", "Display quality", "Audio features"],
      popularSeries: ["GS Stealth", "GE Raider", "GL Leopard", "Creator series"],
      serviceLocations: ["Kathmandu"],
      warrantyInfo: "2 years warranty on gaming laptops",
    },
    apple: {
      name: "Apple",
      logo: "/placeholder.svg?height=100&width=200",
      description:
        "Apple Inc. is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services. Apple's MacBook series is known for premium build quality, performance, and seamless integration with other Apple devices.",
      founded: "1976",
      headquarters: "USA",
      website: "https://www.apple.com",
      strengths: ["Build quality", "macOS ecosystem", "Performance", "Battery life", "Retina displays"],
      popularSeries: ["MacBook Air", "MacBook Pro", "Mac mini", "iMac"],
      serviceLocations: ["Kathmandu (authorized resellers)"],
      warrantyInfo: "1 year limited warranty with options for AppleCare+ extension",
    },
  }

  return (
    brandInfo[brand.toLowerCase() as keyof typeof brandInfo] || {
      name: brandName,
      logo: "/placeholder.svg?height=100&width=200",
      description: `${brandName} is a leading manufacturer of laptops and computer accessories known for their innovative designs, reliable performance, and cutting-edge technology. With a wide range of products catering to different needs and budgets, ${brandName} has established itself as a trusted brand in the computer industry.`,
      founded: ["1939", "1984", "1976", "1989", "1985", "1976"][Math.floor(Math.random() * 6)],
      headquarters: ["USA", "Taiwan", "China", "Japan", "South Korea"][Math.floor(Math.random() * 5)],
      website: `https://www.${brand.toLowerCase()}.com`,
      strengths: ["Quality products", "Innovative technology", "Good customer support", "Competitive pricing"],
      popularSeries: ["Premium series", "Budget series", "Gaming series", "Business series"],
      serviceLocations: ["Kathmandu"],
      warrantyInfo: "1 year standard warranty",
    }
  )
}

// Mock data for products
function getBrandProducts(brand: string) {
  const brandName = brand.charAt(0).toUpperCase() + brand.slice(1)

  // New laptops
  const newLaptops = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `${brandName} ${["Pavilion", "Inspiron", "ThinkPad", "VivoBook", "Aspire", "MacBook"][i % 6]} ${i + 1}`,
    image: "/placeholder.svg?height=300&width=300",
    price: 50000 + i * 10000,
    originalPrice: i % 3 === 0 ? 50000 + i * 10000 + 5000 : null,
    specs: `Intel Core i${(i % 5) + 3}, ${((i % 2) + 1) * 8}GB RAM, ${((i % 2) + 1) * 256}GB SSD`,
    badge: i % 5 === 0 ? "Best Seller" : i % 7 === 0 ? "New Arrival" : null,
    isNew: i % 4 === 0,
    rating: 4 + (i % 10) / 10,
    reviewCount: 10 + i * 5,
    inStock: i % 7 !== 0,
  }))

  // Used laptops
  const usedLaptops = Array.from({ length: 6 }).map((_, i) => ({
    id: 100 + i,
    name: `Used ${brandName} ${["Pavilion", "Inspiron", "ThinkPad", "VivoBook", "Aspire", "MacBook"][i % 6]} ${i + 1}`,
    image: "/placeholder.svg?height=300&width=300",
    price: 30000 + i * 5000,
    originalPrice: 50000 + i * 5000,
    specs: `Intel Core i${(i % 5) + 3}, ${((i % 2) + 1) * 8}GB RAM, ${((i % 2) + 1) * 256}GB SSD`,
    condition: ["Excellent", "Good", "Very Good"][i % 3],
    age: [`${(i % 3) + 1} year${i % 3 === 0 ? "" : "s"} old`],
    warranty: i % 2 === 0 ? "3 months warranty" : null,
    rating: 3.5 + (i % 10) / 10,
    reviewCount: 5 + i * 3,
    inStock: i % 5 !== 0,
  }))

  // Accessories
  const accessories = Array.from({ length: 4 }).map((_, i) => ({
    id: 200 + i,
    name: `${brandName} ${["Wireless Keyboard", "Wireless Mouse", "Laptop Bag", "USB-C Adapter"][i % 4]}`,
    image: "/placeholder.svg?height=300&width=300",
    price: 1500 + i * 1000,
    originalPrice: i % 2 === 0 ? 2000 + i * 1000 : null,
    isNew: i % 3 === 0,
    badge: i % 4 === 0 ? "Best Seller" : null,
    rating: 4 + (i % 10) / 10,
    reviewCount: 15 + i * 8,
    inStock: true,
  }))

  return {
    newLaptops,
    usedLaptops,
    accessories,
  }
}

export default function BrandPage({ params }: { params: { brand: string } }) {
  const brand = getBrandData(params.brand)
  const products = getBrandProducts(params.brand)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Brand Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 p-6 bg-muted/50 rounded-lg">
        <div className="w-40 h-40 flex items-center justify-center bg-white dark:bg-black rounded-lg p-4">
          <img src={brand.logo || "/placeholder.svg"} alt={`${brand.name} Logo`} className="max-w-full max-h-full" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">{brand.name}</h1>
          <p className="text-muted-foreground mb-4">{brand.description}</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-4">
            <div>
              <span className="text-sm font-medium">Founded:</span> {brand.founded}
            </div>
            <div>
              <span className="text-sm font-medium">Headquarters:</span> {brand.headquarters}
            </div>
            <div>
              <span className="text-sm font-medium">Website:</span>{" "}
              <a
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {brand.website}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="text-sm font-semibold mb-2">Key Strengths</h3>
              <ul className="space-y-1">
                {brand.strengths.map((strength, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2">Popular Series</h3>
              <ul className="space-y-1">
                {brand.popularSeries.map((series, index) => (
                  <li key={index} className="text-sm flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                    {series}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-2">Service Centers in Nepal</h3>
            <div className="flex flex-wrap gap-2">
              {brand.serviceLocations.map((location, index) => (
                <Badge key={index} variant="outline">
                  {location}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-semibold">Warranty Information</h3>
            <p className="text-sm">{brand.warrantyInfo}</p>
          </div>
        </div>
      </div>

      {/* Products Tabs */}
      <Tabs defaultValue="new-laptops" className="mb-8">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent overflow-x-auto">
          <TabsTrigger
            value="new-laptops"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-4"
          >
            New Laptops
          </TabsTrigger>
          <TabsTrigger
            value="used-laptops"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-4"
          >
            Used Laptops
          </TabsTrigger>
          <TabsTrigger
            value="accessories"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-4"
          >
            Accessories
          </TabsTrigger>
          <TabsTrigger
            value="comparison"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-4"
          >
            Model Comparison
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 px-4"
          >
            Customer Reviews
          </TabsTrigger>
        </TabsList>

        {/* New Laptops Tab */}
        <TabsContent value="new-laptops" className="mt-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{brand.name} Laptops</h2>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="hidden md:flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <Button variant="outline" className="hidden md:flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Sort</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.newLaptops.map((product) => (
              <Card key={product.id} className="group overflow-hidden">
                <CardContent className="p-0 relative">
                  {product.badge && <Badge className="absolute top-3 left-3 z-10">{product.badge}</Badge>}
                  {product.isNew && (
                    <Badge variant="outline" className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground">
                      New
                    </Badge>
                  )}
                  <Link href={`/product/${product.id}`} className="block overflow-hidden">
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
                  <Link href={`/product/${product.id}`} className="font-medium hover:underline">
                    {product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">{product.specs}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-yellow-500">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>{i < Math.floor(product.rating) ? "★" : "☆"}</span>
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-bold">Rs. {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        Rs. {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <Button className="w-full mt-3" disabled={!product.inStock}>
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline">View All {brand.name} Laptops</Button>
          </div>
        </TabsContent>

        {/* Used Laptops Tab */}
        <TabsContent value="used-laptops" className="mt-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Used {brand.name} Laptops</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.usedLaptops.map((product) => (
              <Card key={product.id} className="group overflow-hidden">
                <CardContent className="p-0 relative">
                  <Badge className="absolute top-3 left-3 z-10">{product.condition}</Badge>
                  {product.warranty && (
                    <Badge variant="outline" className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground">
                      {product.warranty}
                    </Badge>
                  )}
                  <Link href={`/product/used-${product.id}`} className="block overflow-hidden">
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
                  <div className="text-sm text-muted-foreground mb-1">{product.age}</div>
                  <Link href={`/product/used-${product.id}`} className="font-medium hover:underline">
                    {product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">{product.specs}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-yellow-500">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>{i < Math.floor(product.rating) ? "★" : "☆"}</span>
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-bold">Rs. {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        Rs. {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <Button className="w-full mt-3" disabled={!product.inStock}>
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline">View All Used {brand.name} Laptops</Button>
          </div>
        </TabsContent>

        {/* Accessories Tab */}
        <TabsContent value="accessories" className="mt-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{brand.name} Accessories</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.accessories.map((product) => (
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
                  <Link href={`/accessories/${product.id}`} className="font-medium hover:underline">
                    {product.name}
                  </Link>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-yellow-500">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>{i < Math.floor(product.rating) ? "★" : "☆"}</span>
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-bold">Rs. {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        Rs. {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <Button className="w-full mt-3">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline">View All {brand.name} Accessories</Button>
          </div>
        </TabsContent>

        {/* Model Comparison Tab */}
        <TabsContent value="comparison" className="mt-6">
          <h2 className="text-2xl font-bold mb-6">{brand.name} Model Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Model</th>
                  <th className="border p-3 text-left">Processor</th>
                  <th className="border p-3 text-left">RAM</th>
                  <th className="border p-3 text-left">Storage</th>
                  <th className="border p-3 text-left">Display</th>
                  <th className="border p-3 text-left">Graphics</th>
                  <th className="border p-3 text-left">Price</th>
                  <th className="border p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                {products.newLaptops.slice(0, 5).map((laptop, index) => (
                  <tr key={laptop.id} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                    <td className="border p-3 font-medium">{laptop.name}</td>
                    <td className="border p-3">Intel Core i{(index % 5) + 3}</td>
                    <td className="border p-3">{((index % 2) + 1) * 8}GB</td>
                    <td className="border p-3">{((index % 2) + 1) * 256}GB SSD</td>
                    <td className="border p-3">
                      {['14" FHD', '15.6" FHD', '13.3" FHD', '17.3" FHD', '15.6" 4K'][index % 5]}
                    </td>
                    <td className="border p-3">
                      {["Integrated", "NVIDIA GTX 1650", "NVIDIA RTX 3050", "NVIDIA RTX 3060", "AMD Radeon"][index % 5]}
                    </td>
                    <td className="border p-3">Rs. {laptop.price.toLocaleString()}</td>
                    <td className="border p-3">
                      {["Students", "Professionals", "Gamers", "Content Creators", "General Use"][index % 5]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">How to Choose the Right {brand.name} Laptop</h3>
            <div className="space-y-4">
              <p>When selecting a {brand.name} laptop, consider your primary use case:</p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>For Students</AccordionTrigger>
                  <AccordionContent>
                    Look for lightweight models with good battery life and sufficient performance for everyday tasks.
                    The {brand.popularSeries[1]} series offers excellent value for students with models starting around
                    Rs. 70,000.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>For Business Professionals</AccordionTrigger>
                  <AccordionContent>
                    Prioritize reliability, security features, and performance. The {brand.popularSeries[0]} series
                    provides excellent build quality and professional features suitable for business environments.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>For Gamers</AccordionTrigger>
                  <AccordionContent>
                    Focus on models with dedicated graphics cards, high refresh rate displays, and effective cooling
                    systems. The {brand.popularSeries[2]} series is designed specifically for gaming with powerful
                    components.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>For Content Creators</AccordionTrigger>
                  <AccordionContent>
                    Look for laptops with color-accurate displays, powerful processors, and sufficient RAM. Higher-end
                    models in the {brand.popularSeries[0]} series often include features specifically for creative
                    professionals.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <p className="mt-4">
                Visit our store for personalized recommendations and to see these models in person. Our experts can help
                you find the perfect {brand.name} laptop for your specific needs and budget.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* Customer Reviews Tab */}
        <TabsContent value="reviews" className="mt-6">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews for {brand.name}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                    AB
                  </div>
                  <div>
                    <h4 className="font-semibold">Anil Bhattarai</h4>
                    <div className="flex text-yellow-500">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
                <h5 className="font-medium mb-2">Excellent performance and value</h5>
                <p className="text-muted-foreground">
                  I purchased a {brand.name} laptop last month and I'm extremely satisfied with its performance. The
                  build quality is excellent, and it handles all my tasks smoothly. The customer service at Laptop Pasal
                  was also very helpful in helping me choose the right model.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                    SP
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarita Poudel</h4>
                    <div className="flex text-yellow-500">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>☆</span>
                    </div>
                  </div>
                </div>
                <h5 className="font-medium mb-2">Great laptop for students</h5>
                <p className="text-muted-foreground">
                  I bought the {brand.name} {brand.popularSeries[1]} for my college work and it's been perfect. Battery
                  life is impressive and it's lightweight enough to carry around campus all day. The only minor issue is
                  that it gets a bit warm during extended use.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                    RK
                  </div>
                  <div>
                    <h4 className="font-semibold">Rajesh Kumar</h4>
                    <div className="flex text-yellow-500">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
                <h5 className="font-medium mb-2">Perfect for gaming</h5>
                <p className="text-muted-foreground">
                  The {brand.name} {brand.popularSeries[2]} is a beast for gaming! I can play all the latest titles at
                  high settings without any lag. The cooling system is impressive and keeps temperatures in check even
                  during marathon gaming sessions. Highly recommended for serious gamers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                    MT
                  </div>
                  <div>
                    <h4 className="font-semibold">Manish Tamang</h4>
                    <div className="flex text-yellow-500">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                  </div>
                </div>
                <h5 className="font-medium mb-2">Good but with some issues</h5>
                <p className="text-muted-foreground">
                  My {brand.name} laptop has good performance for the price, but I've had some issues with the keyboard
                  and trackpad. Customer service was helpful in resolving these problems, but it was a bit of a hassle.
                  Overall, it's decent value but quality control could be better.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <Button>View All Reviews</Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* SEO Content */}
      <div className="bg-muted/50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">{brand.name} Laptops in Nepal</h2>
        <div className="prose prose-sm dark:prose-invert">
          <p>
            Looking for {brand.name} laptops in Nepal? Laptop Pasal offers a wide range of new and used {brand.name}{" "}
            laptops at competitive prices. Whether you're a student, professional, gamer, or content creator, we have{" "}
            {brand.name} laptops to suit your needs and budget.
          </p>
          <p>
            {brand.name} is known for{" "}
            {brand.name === "HP"
              ? "their reliable and versatile laptops suitable for both work and play"
              : brand.name === "Dell"
                ? "their durable build quality and excellent customer service"
                : brand.name === "Lenovo"
                  ? "their innovative designs and business-focused ThinkPad series"
                  : brand.name === "Asus"
                    ? "their gaming laptops and affordable yet powerful options"
                    : brand.name === "Acer"
                      ? "their budget-friendly laptops with good performance"
                      : brand.name === "Apple"
                        ? "their premium build quality, performance, and ecosystem integration"
                        : "their quality laptops and innovative technology"}
            . Our collection includes the latest models with various specifications including different processors, RAM
            options, storage types, and more.
          </p>
          <p>
            All {brand.name} laptops come with genuine warranty and after-sales service. We also offer free delivery
            within Kathmandu Valley and secure payment options for your convenience.
          </p>

          <h3 className="text-lg font-semibold mt-4">Why Choose {brand.name}?</h3>
          <ul className="list-disc pl-5 space-y-1">
            {brand.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
            <li>Wide range of models for different needs and budgets</li>
            <li>Good after-sales service and warranty support</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Popular {brand.name} Series</h3>
          <ul className="list-disc pl-5 space-y-1">
            {brand.popularSeries.map((series, index) => (
              <li key={index}>{series}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mt-4">Warranty and Support</h3>
          <p>
            At Laptop Pasal, we provide genuine {brand.name} products with official warranty. {brand.warrantyInfo}
            We also offer additional support and services to ensure your {brand.name} laptop continues to perform
            optimally.
          </p>

          <p>
            Visit our store in Kathmandu or browse our online collection to find the perfect {brand.name} laptop for
            your needs. Our knowledgeable staff is always ready to help you make the right choice.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions about {brand.name} Laptops</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the price range of {brand.name} laptops in Nepal?</AccordionTrigger>
            <AccordionContent>
              {brand.name} laptops in Nepal range from approximately Rs. 50,000 for entry-level models to Rs. 350,000
              for high-end configurations. Budget-friendly options like the {brand.popularSeries[1]} series start around
              Rs. 70,000-90,000, while premium models like the {brand.popularSeries[0]} series can cost Rs.
              150,000-300,000 depending on specifications.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How long is the warranty for {brand.name} laptops?</AccordionTrigger>
            <AccordionContent>
              {brand.warrantyInfo} This covers manufacturing defects and hardware failures under normal use. Extended
              warranty options are available for purchase. All warranties are honored through authorized service centers
              in Nepal.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Which {brand.name} series is best for gaming?</AccordionTrigger>
            <AccordionContent>
              The {brand.popularSeries[2]} series is {brand.name}'s dedicated gaming line, offering powerful processors,
              dedicated graphics cards, and advanced cooling systems. These laptops are designed specifically for gaming
              performance with features like high refresh rate displays and RGB lighting.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Where can I get my {brand.name} laptop serviced in Nepal?</AccordionTrigger>
            <AccordionContent>
              {brand.name} laptops can be serviced at authorized service centers located in{" "}
              {brand.serviceLocations.join(", ")}. Laptop Pasal can also facilitate service requests and coordinate with
              official service centers for warranty claims and repairs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Are {brand.name} laptops good for students?</AccordionTrigger>
            <AccordionContent>
              Yes, {brand.name} offers several laptop models that are excellent for students. The{" "}
              {brand.popularSeries[1]} series provides a good balance of performance, portability, and affordability,
              making it ideal for academic work. These laptops offer sufficient power for everyday tasks like writing
              papers, research, and online classes while remaining budget-friendly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
