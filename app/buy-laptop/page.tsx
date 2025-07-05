"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import ProductFilters, { type FilterState } from "@/components/filters/product-filters"
import {
  Grid,
  List,
  Laptop,
  ShoppingBag,
  Zap,
  Award,
  Star,
  CheckCircle2,
  Clock,
  Shield,
  HeartHandshake,
  Truck,
  CreditCard,
} from "lucide-react"

// Mock data for laptops
const laptops = [
  {
    id: 1,
    name: "MacBook Pro 16-inch",
    brand: "Apple",
    processor: "Apple M2 Pro",
    ram: "16GB",
    storage: "512GB SSD",
    price: 250000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    category: "Premium",
    display: "16-inch Liquid Retina XDR",
    graphics: "16-core GPU",
    bestFor: ["Creative professionals", "Software development", "Power users"],
  },
  {
    id: 2,
    name: "Dell XPS 15",
    brand: "Dell",
    processor: "Intel i7-12700H",
    ram: "16GB",
    storage: "1TB SSD",
    price: 180000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    category: "Premium",
    display: "15.6-inch 4K OLED",
    graphics: "NVIDIA RTX 3050 Ti",
    bestFor: ["Content creation", "Professional work", "Entertainment"],
  },
  {
    id: 3,
    name: "HP Spectre x360",
    brand: "HP",
    processor: "Intel i5-1235U",
    ram: "8GB",
    storage: "512GB SSD",
    price: 150000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    category: "Premium",
    display: "13.5-inch 3K2K OLED Touch",
    graphics: "Intel Iris Xe",
    bestFor: ["Business professionals", "Students", "Versatile use"],
  },
  {
    id: 4,
    name: "Lenovo ThinkPad X1 Carbon",
    brand: "Lenovo",
    processor: "Intel i7-1260P",
    ram: "16GB",
    storage: "1TB SSD",
    price: 170000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    category: "Business",
    display: "14-inch WUXGA IPS",
    graphics: "Intel Iris Xe",
    bestFor: ["Business executives", "Frequent travelers", "Professional use"],
  },
  {
    id: 5,
    name: "Asus ROG Zephyrus G14",
    brand: "Asus",
    processor: "AMD Ryzen 9 6900HS",
    ram: "32GB",
    storage: "1TB SSD",
    price: 220000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    category: "Gaming",
    display: "14-inch QHD 120Hz",
    graphics: "NVIDIA RTX 3060",
    bestFor: ["Gamers", "Content creators", "Portable power users"],
  },
  {
    id: 6,
    name: "Acer Swift 5",
    brand: "Acer",
    processor: "Intel i5-1240P",
    ram: "8GB",
    storage: "512GB SSD",
    price: 120000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    category: "Ultrabook",
    display: "14-inch FHD IPS",
    graphics: "Intel Iris Xe",
    bestFor: ["Students", "Everyday use", "Portability"],
  },
  {
    id: 7,
    name: "MSI GS66 Stealth",
    brand: "MSI",
    processor: "Intel i9-12900H",
    ram: "32GB",
    storage: "2TB SSD",
    price: 280000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    category: "Gaming",
    display: "15.6-inch FHD 360Hz",
    graphics: "NVIDIA RTX 3080",
    bestFor: ["Hardcore gamers", "3D rendering", "High-performance computing"],
  },
  {
    id: 8,
    name: "Samsung Galaxy Book Pro",
    brand: "Samsung",
    processor: "Intel i7-1165G7",
    ram: "16GB",
    storage: "512GB SSD",
    price: 160000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    category: "Ultrabook",
    display: "15.6-inch AMOLED",
    graphics: "Intel Iris Xe",
    bestFor: ["Samsung ecosystem users", "Multimedia consumption", "Lightweight use"],
  },
]

// Comparison data for popular laptops
const comparisonData = [
  {
    name: "MacBook Pro 16",
    price: "Rs. 250,000",
    processor: "M2 Pro",
    display: '16" Liquid Retina XDR',
    battery: "Up to 22 hours",
    weight: "2.15 kg",
    bestFor: "Creative professionals",
  },
  {
    name: "Dell XPS 15",
    price: "Rs. 180,000",
    processor: "Intel i7",
    display: '15.6" 4K OLED',
    battery: "Up to 12 hours",
    weight: "1.96 kg",
    bestFor: "Content creation",
  },
  {
    name: "Asus ROG Zephyrus G14",
    price: "Rs. 220,000",
    processor: "AMD Ryzen 9",
    display: '14" QHD 120Hz',
    battery: "Up to 10 hours",
    weight: "1.7 kg",
    bestFor: "Gaming & content creation",
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    price: "Rs. 170,000",
    processor: "Intel i7",
    display: '14" WUXGA IPS',
    battery: "Up to 15 hours",
    weight: "1.12 kg",
    bestFor: "Business professionals",
  },
  {
    name: "Acer Swift 5",
    price: "Rs. 120,000",
    processor: "Intel i5",
    display: '14" FHD IPS',
    battery: "Up to 13 hours",
    weight: "1.2 kg",
    bestFor: "Students & everyday use",
  },
]

// Customer testimonials
const testimonials = [
  {
    id: 1,
    name: "Anish Thapa",
    profession: "Graphic Designer",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The MacBook Pro has transformed my workflow. The display is perfect for design work, and the performance handles all my Adobe applications with ease.",
    laptop: "MacBook Pro 16-inch",
  },
  {
    id: 2,
    name: "Priya Maharjan",
    profession: "Software Engineer",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "I've been using the Dell XPS 15 for development work, and it's been fantastic. Great keyboard, excellent performance, and the build quality is top-notch.",
    laptop: "Dell XPS 15",
  },
  {
    id: 3,
    name: "Rajesh Shrestha",
    profession: "Business Consultant",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The ThinkPad X1 Carbon is perfect for my business needs. It's lightweight for travel, has great battery life, and the security features give me peace of mind.",
    laptop: "Lenovo ThinkPad X1 Carbon",
  },
]

// Popular categories
const categories = [
  {
    name: "Gaming Laptops",
    description: "High-performance laptops with dedicated graphics for immersive gaming experiences",
    icon: <Zap className="h-10 w-10" />,
    link: "/gaming-laptops",
  },
  {
    name: "Business Laptops",
    description: "Reliable, secure laptops with professional features for business users",
    icon: <Shield className="h-10 w-10" />,
    link: "/business-laptops",
  },
  {
    name: "Student Laptops",
    description: "Affordable, portable laptops with good battery life for educational use",
    icon: <Laptop className="h-10 w-10" />,
    link: "/student-laptops",
  },
  {
    name: "Content Creation",
    description: "Powerful laptops with high-quality displays for creative professionals",
    icon: <Award className="h-10 w-10" />,
    link: "/content-creation-laptops",
  },
]

export default function BuyLaptopPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [filteredLaptops, setFilteredLaptops] = useState(laptops)

  const handleFilterChange = (filters: FilterState) => {
    const filtered = laptops.filter((laptop) => {
      // Price filter
      if (laptop.price < filters.priceRange[0] || laptop.price > filters.priceRange[1]) {
        return false
      }

      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(laptop.brand)) {
        return false
      }

      // Processor filter
      if (filters.processors.length > 0 && !filters.processors.some((p) => laptop.processor.includes(p))) {
        return false
      }

      // RAM filter
      if (filters.ram.length > 0 && !filters.ram.includes(laptop.ram)) {
        return false
      }

      // Storage filter
      if (filters.storage.length > 0 && !filters.storage.includes(laptop.storage)) {
        return false
      }

      // Condition filter
      if (filters.condition.length > 0 && !filters.condition.includes(laptop.condition)) {
        return false
      }

      return true
    })

    // Apply sorting
    const sorted = sortProducts(filtered, sortBy)
    setFilteredLaptops(sorted)
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
    setFilteredLaptops(sortProducts(filteredLaptops, value))
  }

  const sortProducts = (products: typeof laptops, sortType: string) => {
    const sorted = [...products]

    switch (sortType) {
      case "price-low-high":
        return sorted.sort((a, b) => a.price - b.price)
      case "price-high-low":
        return sorted.sort((a, b) => b.price - a.price)
      case "newest":
        // In a real app, you would sort by date
        return sorted
      default: // featured
        return sorted
    }
  }

  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white rounded-lg p-8 mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Buy New Laptops in Nepal</h1>
          <p className="text-lg mb-6">
            Discover our extensive collection of brand new laptops from leading manufacturers. Whether you need a
            powerful workstation, a gaming beast, or an ultraportable companion, we have the perfect laptop for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 p-4 rounded-lg flex items-start space-x-3">
              <Laptop className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Latest Models</h3>
                <p className="text-sm opacity-90">Access to the newest laptop releases with cutting-edge technology</p>
              </div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg flex items-start space-x-3">
              <ShoppingBag className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Authorized Retailer</h3>
                <p className="text-sm opacity-90">Official warranty and after-sales support from manufacturers</p>
              </div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg flex items-start space-x-3">
              <Zap className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Expert Guidance</h3>
                <p className="text-sm opacity-90">Personalized recommendations based on your specific needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Categories Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link href={category.link} key={index}>
              <div className="border rounded-lg p-6 h-full hover:shadow-md transition-shadow bg-card">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-primary">{category.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tabs for different content sections */}
      <Tabs defaultValue="products" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="products">Browse Laptops</TabsTrigger>
          <TabsTrigger value="comparison">Comparison Table</TabsTrigger>
          <TabsTrigger value="guide">Buying Guide</TabsTrigger>
          <TabsTrigger value="testimonials">Customer Reviews</TabsTrigger>
        </TabsList>

        {/* Products Tab */}
        <TabsContent value="products">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters sidebar */}
            <div className="w-full md:w-1/4">
              <ProductFilters onFilterChange={handleFilterChange} />
            </div>

            {/* Product listing */}
            <div className="w-full md:w-3/4">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <Select value={sortBy} onValueChange={handleSortChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                      <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {filteredLaptops.length === 0 ? (
                <div className="text-center py-10">
                  <h3 className="text-lg font-medium">No laptops found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters</p>
                </div>
              ) : viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredLaptops.map((laptop) => (
                    <Card key={laptop.id} className="overflow-hidden">
                      <Link href={`/product/${laptop.id}`}>
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={laptop.image || "/placeholder.svg"}
                            alt={laptop.name}
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="outline" className="mb-2">
                            {laptop.category}
                          </Badge>
                          <h3 className="font-semibold text-lg">{laptop.name}</h3>
                          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                            <p>{laptop.processor}</p>
                            <p>
                              {laptop.ram} RAM, {laptop.storage}
                            </p>
                            <p>{laptop.display}</p>
                            <p>{laptop.graphics}</p>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {laptop.bestFor.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-4">
                            <span className="font-bold text-lg">NPR {laptop.price.toLocaleString()}</span>
                          </div>
                        </CardContent>
                      </Link>
                      <CardFooter className="p-4 pt-0">
                        <Button className="w-full">Add to Cart</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredLaptops.map((laptop) => (
                    <Card key={laptop.id}>
                      <div className="flex flex-col md:flex-row">
                        <Link href={`/product/${laptop.id}`} className="md:w-1/4">
                          <div className="aspect-video md:aspect-square overflow-hidden">
                            <img
                              src={laptop.image || "/placeholder.svg"}
                              alt={laptop.name}
                              className="w-full h-full object-cover transition-transform hover:scale-105"
                            />
                          </div>
                        </Link>
                        <div className="p-4 md:w-3/4">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline">{laptop.category}</Badge>
                            <Badge variant="outline">{laptop.condition}</Badge>
                          </div>
                          <Link href={`/product/${laptop.id}`}>
                            <h3 className="font-semibold text-lg">{laptop.name}</h3>
                          </Link>
                          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                            <p>{laptop.processor}</p>
                            <p>
                              {laptop.ram} RAM, {laptop.storage}
                            </p>
                            <p>Display: {laptop.display}</p>
                            <p>Graphics: {laptop.graphics}</p>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {laptop.bestFor.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="font-bold text-lg">NPR {laptop.price.toLocaleString()}</span>
                            <Button>Add to Cart</Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </TabsContent>

        {/* Comparison Table Tab */}
        <TabsContent value="comparison">
          <div className="bg-card rounded-lg border shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Laptop Comparison</h2>
            <p className="text-muted-foreground mb-6">
              Compare the most popular laptops to find the one that best fits your needs and budget.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Model</th>
                    <th className="border p-3 text-left">Price</th>
                    <th className="border p-3 text-left">Processor</th>
                    <th className="border p-3 text-left">Display</th>
                    <th className="border p-3 text-left">Battery Life</th>
                    <th className="border p-3 text-left">Weight</th>
                    <th className="border p-3 text-left">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((laptop, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                      <td className="border p-3 font-medium">{laptop.name}</td>
                      <td className="border p-3">{laptop.price}</td>
                      <td className="border p-3">{laptop.processor}</td>
                      <td className="border p-3">{laptop.display}</td>
                      <td className="border p-3">{laptop.battery}</td>
                      <td className="border p-3">{laptop.weight}</td>
                      <td className="border p-3">{laptop.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Key Takeaways:</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>For creative professionals, the MacBook Pro offers the best display quality and performance</li>
                <li>Gamers will appreciate the Asus ROG Zephyrus G14's balance of power and portability</li>
                <li>
                  Business users should consider the ThinkPad X1 Carbon for its lightweight design and security features
                </li>
                <li>Students on a budget will find the Acer Swift 5 offers excellent value</li>
                <li>
                  For content creators, the Dell XPS 15 provides a great balance of performance and display quality
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Buying Guide Tab */}
        <TabsContent value="guide">
          <div className="bg-card rounded-lg border shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Laptop Buying Guide</h2>
            <p className="text-muted-foreground mb-6">
              Finding the right laptop can be overwhelming with so many options available. This guide will help you
              understand what to look for based on your specific needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Understanding Your Needs</h3>
                <p className="mb-4 text-muted-foreground">
                  Before looking at specifications, consider what you'll primarily use your laptop for:
                </p>
                <ul className="space-y-3">
                  <li>
                    <span className="font-medium">Everyday Use:</span> Web browsing, email, office applications, and
                    streaming require modest specifications.
                  </li>
                  <li>
                    <span className="font-medium">Students:</span> Consider portability, battery life, and durability
                    for campus life.
                  </li>
                  <li>
                    <span className="font-medium">Business:</span> Look for security features, reliability, and
                    professional design.
                  </li>
                  <li>
                    <span className="font-medium">Creative Work:</span> Prioritize display quality, color accuracy, and
                    performance for design, photo/video editing.
                  </li>
                  <li>
                    <span className="font-medium">Gaming:</span> Focus on graphics performance, cooling, display refresh
                    rate, and processing power.
                  </li>
                </ul>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Key Specifications Explained</h3>
                <ul className="space-y-3">
                  <li>
                    <span className="font-medium">Processor (CPU):</span> The brain of your laptop. Intel Core i5/i7 or
                    AMD Ryzen 5/7 are good for most users. Power users should consider i9, Ryzen 9, or Apple M1/M2
                    chips.
                  </li>
                  <li>
                    <span className="font-medium">RAM:</span> 8GB is the minimum for smooth performance. 16GB is ideal
                    for multitasking, and 32GB+ for professional workloads.
                  </li>
                  <li>
                    <span className="font-medium">Storage:</span> SSDs provide faster performance than HDDs. 256GB is
                    minimal, 512GB is comfortable, and 1TB+ for large files and applications.
                  </li>
                  <li>
                    <span className="font-medium">Display:</span> Consider resolution (FHD minimum, 4K for creative
                    work), panel type (IPS for better colors), and refresh rate (higher for gaming).
                  </li>
                  <li>
                    <span className="font-medium">Graphics:</span> Integrated graphics work for everyday tasks, while
                    dedicated GPUs (NVIDIA or AMD) are essential for gaming and creative work.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Budget Considerations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Budget (Under Rs. 100,000)</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Intel Core i3/i5 or AMD Ryzen 3/5</li>
                    <li>• 8GB RAM</li>
                    <li>• 256GB SSD</li>
                    <li>• Full HD display</li>
                    <li>• Integrated graphics</li>
                    <li>• Good for everyday tasks and students</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Mid-Range (Rs. 100,000-180,000)</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Intel Core i5/i7 or AMD Ryzen 5/7</li>
                    <li>• 16GB RAM</li>
                    <li>• 512GB SSD</li>
                    <li>• Full HD or QHD display</li>
                    <li>• Entry-level dedicated graphics</li>
                    <li>• Good for professionals and casual gaming</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Premium (Above Rs. 180,000)</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Intel Core i7/i9, AMD Ryzen 7/9, or Apple M1/M2</li>
                    <li>• 16-32GB RAM</li>
                    <li>• 1TB+ SSD</li>
                    <li>• QHD or 4K display</li>
                    <li>• High-performance dedicated graphics</li>
                    <li>• For demanding workloads and serious gaming</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Form Factor and Design</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Ultrabooks</h4>
                  <p className="text-sm text-muted-foreground">
                    Thin and light laptops (under 1.5kg) with excellent battery life. Perfect for frequent travelers and
                    students. May sacrifice performance and ports for portability.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Traditional Laptops</h4>
                  <p className="text-sm text-muted-foreground">
                    Balanced design with good performance and reasonable portability. Typically 14-15 inches and
                    1.5-2kg. Suitable for most users with a mix of performance and portability needs.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Performance Laptops</h4>
                  <p className="text-sm text-muted-foreground">
                    Larger, heavier machines (often 15-17 inches) with powerful components. Ideal for gaming, video
                    editing, and other demanding tasks. Sacrifice portability for performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Operating System Considerations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Windows</h4>
                  <p className="text-sm text-muted-foreground">
                    Most versatile with the widest software compatibility. Available on laptops at all price points.
                    Ideal for gaming, business use, and general computing.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">macOS (Apple)</h4>
                  <p className="text-sm text-muted-foreground">
                    Known for stability, security, and seamless integration with other Apple devices. Popular among
                    creative professionals. Limited to MacBooks, which tend to be premium-priced.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Chrome OS</h4>
                  <p className="text-sm text-muted-foreground">
                    Lightweight OS focused on web applications. Chromebooks are typically affordable and offer excellent
                    battery life. Limited for specialized software but great for basic tasks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Our Recommendations
              </h3>
              <ul className="space-y-3">
                <li>
                  <span className="font-medium">Best Overall:</span> Dell XPS 15 - Excellent balance of performance,
                  build quality, and display
                </li>
                <li>
                  <span className="font-medium">Best for Professionals:</span> MacBook Pro 16-inch - Unmatched
                  performance and display quality for creative work
                </li>
                <li>
                  <span className="font-medium">Best for Gaming:</span> Asus ROG Zephyrus G14 - Powerful gaming
                  performance in a relatively portable package
                </li>
                <li>
                  <span className="font-medium">Best for Business:</span> Lenovo ThinkPad X1 Carbon - Lightweight,
                  durable, with excellent keyboard and security features
                </li>
                <li>
                  <span className="font-medium">Best Budget Option:</span> Acer Swift 5 - Great performance and features
                  at a more accessible price point
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Customer Testimonials Tab */}
        <TabsContent value="testimonials">
          <div className="bg-card rounded-lg border shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews & Experiences</h2>
            <p className="text-muted-foreground mb-6">
              Hear from our customers about their experiences with laptops purchased from Laptop Pasal.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="border rounded-lg p-5">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.profession}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center mb-2">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    </div>
                    <p className="text-sm italic">"{testimonial.quote}"</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Purchased: </span>
                    <span className="font-medium">{testimonial.laptop}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-muted/30 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">What Our Customers Love</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Product Quality
                  </h4>
                  <ul className="space-y-1 text-sm pl-6 list-disc text-muted-foreground">
                    <li>Genuine products with full manufacturer warranty</li>
                    <li>Excellent build quality and performance</li>
                    <li>Latest models with up-to-date specifications</li>
                    <li>Carefully inspected before delivery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Customer Experience
                  </h4>
                  <ul className="space-y-1 text-sm pl-6 list-disc text-muted-foreground">
                    <li>Knowledgeable staff providing expert advice</li>
                    <li>Transparent pricing with no hidden costs</li>
                    <li>Excellent after-sales support and service</li>
                    <li>Quick resolution of any issues or concerns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* FAQ Section */}
      <div className="bg-muted/50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I choose the right laptop for my needs?</AccordionTrigger>
            <AccordionContent>
              Start by identifying your primary use case (everyday tasks, gaming, creative work, business, etc.). Then
              consider your budget and prioritize features accordingly. For everyday use, focus on a balanced system
              with good battery life. For gaming or creative work, prioritize performance components like the processor,
              graphics card, and display quality. For business use, look for security features and durability. Our sales
              team can provide personalized recommendations based on your specific requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What warranty do new laptops come with in Nepal?</AccordionTrigger>
            <AccordionContent>
              Most new laptops sold at Laptop Pasal come with a standard 1-year international or local warranty from the
              manufacturer, covering hardware defects and failures. Some premium models offer extended 2-3 year
              warranties. We also provide additional warranty options for purchase. All warranty services are handled
              through authorized service centers in Nepal, ensuring genuine parts and qualified technicians for repairs.
              We'll assist you with the warranty claim process if any issues arise.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Are gaming laptops good for other tasks like video editing?</AccordionTrigger>
            <AccordionContent>
              Yes, gaming laptops are excellent for video editing, 3D rendering, and other resource-intensive creative
              tasks. The powerful processors, dedicated graphics cards, and ample RAM that make them good for gaming
              also benefit creative applications. However, gaming laptops may have displays optimized for response time
              rather than color accuracy, so creative professionals should look for models with good color gamut
              coverage. Gaming laptops also tend to be heavier and have shorter battery life compared to
              productivity-focused laptops.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I upgrade components in my laptop later?</AccordionTrigger>
            <AccordionContent>
              The upgradeability of laptops varies significantly by model. In general, RAM and storage are the most
              commonly upgradeable components, though many modern ultrabooks have soldered RAM. Gaming and business
              laptops tend to be more upgradeable than ultrabooks. Before purchasing, we can provide information about
              which components can be upgraded in specific models. It's usually best to buy a laptop with the processor
              and graphics card you need from the start, as these components are rarely upgradeable in laptops.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Do you offer financing options for laptop purchases?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer several financing options to make your laptop purchase more affordable. We have partnerships
              with major banks in Nepal to provide EMI (Equated Monthly Installment) options ranging from 3 to 12
              months, often with zero interest for select periods. We also accept credit cards from all major banks. Our
              team can help you understand the available financing options and assist with the application process.
              Please bring your identification and any required financial documents when applying for financing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How do I maintain my laptop for optimal performance and longevity?</AccordionTrigger>
            <AccordionContent>
              To maintain your laptop: (1) Keep it clean - use compressed air for dust removal and appropriate cleaning
              solutions for the screen and keyboard. (2) Manage battery health by avoiding complete discharge and
              overcharging. (3) Use cooling pads for intensive tasks. (4) Keep software updated, including the operating
              system, drivers, and antivirus. (5) Avoid overloading your storage - keep at least 15% free space. (6)
              Regularly back up your data. (7) Be careful with food and drinks around your laptop. We offer professional
              cleaning and maintenance services if needed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-card rounded-lg border shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Why Choose Laptop Pasal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center p-4">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Authorized Retailer</h3>
            <p className="text-muted-foreground">
              We are an authorized retailer for all major laptop brands, ensuring you receive genuine products with full
              warranty coverage and after-sales support.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <HeartHandshake className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
            <p className="text-muted-foreground">
              Our team of tech experts will help you find the perfect laptop based on your specific needs, budget, and
              preferences, ensuring you make the right choice.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Truck className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Free Delivery</h3>
            <p className="text-muted-foreground">
              We offer free delivery within Kathmandu Valley and affordable shipping options throughout Nepal, with
              careful packaging to ensure your laptop arrives safely.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <CreditCard className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Flexible Payment</h3>
            <p className="text-muted-foreground">
              Choose from multiple payment options including cash, credit/debit cards, digital wallets, and EMI plans
              with leading banks to make your purchase more affordable.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white rounded-lg p-8 mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Finding Your Perfect Laptop?</h2>
          <p className="text-lg mb-6">
            Our laptop experts are ready to provide personalized recommendations based on your specific needs and
            budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-purple-900 hover:bg-gray-100">
              Contact Our Experts
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Visit Our Store
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <Clock className="h-5 w-5 mr-2" />
            <p className="text-sm">Store Hours: 10:00 AM - 7:00 PM (Sunday - Friday), 11:00 AM - 5:00 PM (Saturday)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
