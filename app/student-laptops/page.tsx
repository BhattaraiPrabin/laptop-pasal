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
import { Grid, List, BookOpen, Clock, Battery, Wifi, Award, Star, CheckCircle2 } from "lucide-react"

// Mock data for student laptops
const studentLaptops = [
  {
    id: 201,
    name: "Acer Swift 3",
    brand: "Acer",
    processor: "AMD Ryzen 5 5500U",
    ram: "8GB",
    storage: "512GB SSD",
    price: 85000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "14-inch FHD IPS",
    battery: "Up to 12 hours",
    weight: "1.2 kg",
    features: ["Fingerprint reader", "Backlit keyboard", "Fast charging"],
    bestFor: ["General studies", "Note-taking", "Research"],
  },
  {
    id: 202,
    name: "Lenovo IdeaPad Slim 3",
    brand: "Lenovo",
    processor: "Intel i5-1135G7",
    ram: "8GB",
    storage: "256GB SSD",
    price: 75000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "15.6-inch FHD",
    battery: "Up to 7 hours",
    weight: "1.6 kg",
    features: ["Dolby Audio", "Privacy shutter camera", "Rapid Charge"],
    bestFor: ["Online classes", "Assignments", "Multimedia"],
  },
  {
    id: 203,
    name: "HP Pavilion 14",
    brand: "HP",
    processor: "Intel i3-1115G4",
    ram: "8GB",
    storage: "256GB SSD",
    price: 65000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "14-inch HD",
    battery: "Up to 8 hours",
    weight: "1.4 kg",
    features: ["B&O speakers", "HP Fast Charge", "HP Wide Vision HD Camera"],
    bestFor: ["Budget option", "Basic computing", "Web browsing"],
  },
  {
    id: 204,
    name: "Dell Inspiron 15",
    brand: "Dell",
    processor: "Intel i5-1135G7",
    ram: "8GB",
    storage: "512GB SSD",
    price: 82000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "15.6-inch FHD",
    battery: "Up to 6 hours",
    weight: "1.7 kg",
    features: ["ExpressCharge", "ComfortView", "Spill-resistant keyboard"],
    bestFor: ["Engineering students", "Multitasking", "Light CAD work"],
  },
  {
    id: 205,
    name: "ASUS VivoBook 15",
    brand: "Asus",
    processor: "AMD Ryzen 5 5500U",
    ram: "8GB",
    storage: "512GB SSD",
    price: 78000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "15.6-inch FHD",
    battery: "Up to 6 hours",
    weight: "1.8 kg",
    features: ["ErgoLift hinge", "Fingerprint sensor", "ASUS SonicMaster audio"],
    bestFor: ["Multimedia students", "Content consumption", "Casual use"],
  },
  {
    id: 206,
    name: "Lenovo Chromebook Duet",
    brand: "Lenovo",
    processor: "MediaTek Helio P60T",
    ram: "4GB",
    storage: "64GB eMMC",
    price: 45000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "10.1-inch FHD IPS",
    battery: "Up to 10 hours",
    weight: "0.92 kg",
    features: ["Detachable keyboard", "USI Pen support", "Chrome OS"],
    bestFor: ["Liberal arts", "Note-taking", "Web-based applications"],
  },
  {
    id: 207,
    name: "Microsoft Surface Go 3",
    brand: "Microsoft",
    processor: "Intel Pentium Gold 6500Y",
    ram: "8GB",
    storage: "128GB SSD",
    price: 90000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "10.5-inch PixelSense",
    battery: "Up to 11 hours",
    weight: "0.54 kg (tablet only)",
    features: ["Touchscreen", "Surface Pen compatible", "Detachable keyboard"],
    bestFor: ["Art students", "Digital note-taking", "Portability"],
  },
  {
    id: 208,
    name: "Apple MacBook Air M1",
    brand: "Apple",
    processor: "Apple M1",
    ram: "8GB",
    storage: "256GB SSD",
    price: 135000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "13.3-inch Retina",
    battery: "Up to 18 hours",
    weight: "1.29 kg",
    features: ["Fanless design", "Touch ID", "Magic Keyboard"],
    bestFor: ["Design students", "Programming", "Long battery life"],
  },
]

// Comparison data for popular student laptops
const comparisonData = [
  {
    name: "Acer Swift 3",
    price: "Rs. 85,000",
    processor: "AMD Ryzen 5",
    ram: "8GB",
    storage: "512GB SSD",
    battery: "12 hours",
    weight: "1.2 kg",
    bestFor: "General studies",
  },
  {
    name: "Lenovo IdeaPad Slim 3",
    price: "Rs. 75,000",
    processor: "Intel i5",
    ram: "8GB",
    storage: "256GB SSD",
    battery: "7 hours",
    weight: "1.6 kg",
    bestFor: "Online classes",
  },
  {
    name: "HP Pavilion 14",
    price: "Rs. 65,000",
    processor: "Intel i3",
    ram: "8GB",
    storage: "256GB SSD",
    battery: "8 hours",
    weight: "1.4 kg",
    bestFor: "Budget option",
  },
  {
    name: "Apple MacBook Air M1",
    price: "Rs. 135,000",
    processor: "Apple M1",
    ram: "8GB",
    storage: "256GB SSD",
    battery: "18 hours",
    weight: "1.29 kg",
    bestFor: "Design/Programming",
  },
  {
    name: "Microsoft Surface Go 3",
    price: "Rs. 90,000",
    processor: "Intel Pentium",
    ram: "8GB",
    storage: "128GB SSD",
    battery: "11 hours",
    weight: "0.54 kg",
    bestFor: "Art students",
  },
]

// Student testimonials
const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    university: "Tribhuvan University",
    course: "Computer Science",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The Acer Swift 3 has been perfect for my programming assignments. The battery lasts all day, which is essential for long days at the university.",
    laptop: "Acer Swift 3",
  },
  {
    id: 2,
    name: "Priya Patel",
    university: "Kathmandu University",
    course: "Business Administration",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "As a business student, I needed something reliable but not too expensive. The Lenovo IdeaPad has been the perfect balance of performance and price.",
    laptop: "Lenovo IdeaPad Slim 3",
  },
  {
    id: 3,
    name: "Rohan Thapa",
    university: "Pokhara University",
    course: "Graphic Design",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The MacBook Air M1 was an investment, but it's been worth every rupee for my design work. The display is amazing and it handles all my design software with ease.",
    laptop: "Apple MacBook Air M1",
  },
]

export default function StudentLaptopsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [filteredLaptops, setFilteredLaptops] = useState(studentLaptops)

  const handleFilterChange = (filters: FilterState) => {
    const filtered = studentLaptops.filter((laptop) => {
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

  const sortProducts = (products: typeof studentLaptops, sortType: string) => {
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
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg p-8 mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Student Laptops in Nepal</h1>
          <p className="text-lg mb-6">
            Find the perfect laptop for your academic journey. We've curated a selection of laptops that balance
            performance, portability, and price - ideal for students across all disciplines.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 p-4 rounded-lg flex items-start space-x-3">
              <BookOpen className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Academic Performance</h3>
                <p className="text-sm opacity-90">Laptops that can handle your coursework and research needs</p>
              </div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg flex items-start space-x-3">
              <Battery className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">All-Day Battery</h3>
                <p className="text-sm opacity-90">Long battery life for full days of classes and studying</p>
              </div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg flex items-start space-x-3">
              <Clock className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Student Budgets</h3>
                <p className="text-sm opacity-90">Affordable options that don't compromise on quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs for different content sections */}
      <Tabs defaultValue="products" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="products">Browse Laptops</TabsTrigger>
          <TabsTrigger value="comparison">Comparison Table</TabsTrigger>
          <TabsTrigger value="guide">Student Buying Guide</TabsTrigger>
          <TabsTrigger value="testimonials">Student Reviews</TabsTrigger>
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
                          <h3 className="font-semibold text-lg">{laptop.name}</h3>
                          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                            <p>{laptop.processor}</p>
                            <p>
                              {laptop.ram} RAM, {laptop.storage}
                            </p>
                            <p>Battery: {laptop.battery}</p>
                            <p>Weight: {laptop.weight}</p>
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
                          <Link href={`/product/${laptop.id}`}>
                            <h3 className="font-semibold text-lg">{laptop.name}</h3>
                          </Link>
                          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                            <p>{laptop.processor}</p>
                            <p>
                              {laptop.ram} RAM, {laptop.storage}
                            </p>
                            <p>Display: {laptop.display}</p>
                            <p>Battery: {laptop.battery}</p>
                            <p>Weight: {laptop.weight}</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {laptop.features.map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
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
            <h2 className="text-2xl font-bold mb-4">Student Laptop Comparison</h2>
            <p className="text-muted-foreground mb-6">
              Compare the most popular student laptops to find the one that best fits your needs and budget.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Model</th>
                    <th className="border p-3 text-left">Price</th>
                    <th className="border p-3 text-left">Processor</th>
                    <th className="border p-3 text-left">RAM</th>
                    <th className="border p-3 text-left">Storage</th>
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
                      <td className="border p-3">{laptop.ram}</td>
                      <td className="border p-3">{laptop.storage}</td>
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
                <li>For the best battery life, the MacBook Air M1 is unmatched at 18 hours</li>
                <li>Budget-conscious students should consider the HP Pavilion 14 at Rs. 65,000</li>
                <li>For portability, the Microsoft Surface Go 3 is the lightest at just 0.54 kg</li>
                <li>
                  Students needing good performance for general studies will find the Acer Swift 3 offers the best
                  balance of features
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Student Buying Guide Tab */}
        <TabsContent value="guide">
          <div className="bg-card rounded-lg border shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Student Laptop Buying Guide</h2>
            <p className="text-muted-foreground mb-6">
              Finding the right laptop for your studies can be overwhelming. This guide will help you understand what to
              look for based on your specific needs as a student.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  By Field of Study
                </h3>
                <ul className="space-y-3">
                  <li>
                    <span className="font-medium">Engineering/Computer Science:</span> Prioritize performance with at
                    least an i5/Ryzen 5 processor, 16GB RAM, and dedicated graphics for CAD/programming.
                  </li>
                  <li>
                    <span className="font-medium">Business/Humanities:</span> Focus on portability and battery life with
                    an i3/Ryzen 3, 8GB RAM, and good build quality.
                  </li>
                  <li>
                    <span className="font-medium">Design/Media:</span> Look for color-accurate displays, powerful
                    processors, and dedicated graphics for creative software.
                  </li>
                  <li>
                    <span className="font-medium">Medicine/Sciences:</span> Balance performance and battery life with a
                    lightweight design for long study sessions.
                  </li>
                </ul>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Wifi className="h-5 w-5 mr-2" />
                  Key Features for Students
                </h3>
                <ul className="space-y-3">
                  <li>
                    <span className="font-medium">Battery Life:</span> Aim for at least 8 hours to last through a full
                    day of classes.
                  </li>
                  <li>
                    <span className="font-medium">Portability:</span> Consider weight and size if you'll be carrying it
                    around campus all day.
                  </li>
                  <li>
                    <span className="font-medium">Durability:</span> Look for solid build quality to withstand daily
                    transport in a backpack.
                  </li>
                  <li>
                    <span className="font-medium">Connectivity:</span> Ensure it has sufficient ports for your needs or
                    consider dongles/adapters.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Budget Considerations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Budget (Under Rs. 70,000)</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Intel i3/Ryzen 3 processors</li>
                    <li>• 4-8GB RAM</li>
                    <li>• 256GB SSD storage</li>
                    <li>• Basic HD displays</li>
                    <li>• Good for basic tasks and note-taking</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Mid-Range (Rs. 70,000-100,000)</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Intel i5/Ryzen 5 processors</li>
                    <li>• 8-16GB RAM</li>
                    <li>• 512GB SSD storage</li>
                    <li>• FHD displays</li>
                    <li>• Good for most student workloads</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Premium (Above Rs. 100,000)</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Intel i7/Ryzen 7/Apple M1+ processors</li>
                    <li>• 16GB+ RAM</li>
                    <li>• 512GB-1TB SSD storage</li>
                    <li>• High-quality displays</li>
                    <li>• For specialized programs and future-proofing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Operating System Considerations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Windows</h4>
                  <p className="text-sm text-muted-foreground">
                    Most versatile option with the widest software compatibility. Ideal for most students, especially
                    those in technical fields requiring specific software.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">macOS (Apple)</h4>
                  <p className="text-sm text-muted-foreground">
                    Great for design students and those in creative fields. Excellent build quality and battery life,
                    but at a premium price point.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Chrome OS</h4>
                  <p className="text-sm text-muted-foreground">
                    Affordable and simple. Good for students who primarily work with web applications and Google
                    services. Limited software compatibility.
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
                  <span className="font-medium">Best Overall for Students:</span> Acer Swift 3 - Balances performance,
                  battery life, and price
                </li>
                <li>
                  <span className="font-medium">Best Budget Option:</span> HP Pavilion 14 - Affordable without
                  compromising too much on performance
                </li>
                <li>
                  <span className="font-medium">Best Premium Option:</span> Apple MacBook Air M1 - Exceptional battery
                  life and performance for those with higher budgets
                </li>
                <li>
                  <span className="font-medium">Most Portable:</span> Microsoft Surface Go 3 - Ultra-lightweight for
                  maximum portability
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Student Testimonials Tab */}
        <TabsContent value="testimonials">
          <div className="bg-card rounded-lg border shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Student Reviews & Experiences</h2>
            <p className="text-muted-foreground mb-6">
              Hear from fellow students about their experiences with different laptops for academic use.
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
                      <p className="text-sm text-muted-foreground">
                        {testimonial.course}, {testimonial.university}
                      </p>
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
                    <span className="text-muted-foreground">Using: </span>
                    <span className="font-medium">{testimonial.laptop}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-muted/30 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Common Student Feedback</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    What Students Love
                  </h4>
                  <ul className="space-y-1 text-sm pl-6 list-disc text-muted-foreground">
                    <li>Long battery life that lasts through classes</li>
                    <li>Lightweight designs that don't strain backpacks</li>
                    <li>Fast boot times with SSD storage</li>
                    <li>Backlit keyboards for late-night study sessions</li>
                    <li>Good webcams and microphones for online classes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-red-500" />
                    Common Complaints
                  </h4>
                  <ul className="space-y-1 text-sm pl-6 list-disc text-muted-foreground">
                    <li>Limited port selection on thinner laptops</li>
                    <li>Glossy screens causing glare in bright classrooms</li>
                    <li>Inadequate cooling during intensive tasks</li>
                    <li>Short battery life on budget models</li>
                    <li>Poor build quality affecting longevity</li>
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
            <AccordionTrigger>How much should I spend on a student laptop?</AccordionTrigger>
            <AccordionContent>
              For most students, a budget of Rs. 70,000-90,000 will get you a laptop that balances performance and
              affordability. However, if you're in a specialized field like engineering, design, or computer science,
              you might need to invest more for specific requirements. Budget options starting around Rs. 50,000 can
              work for basic tasks, while premium options above Rs. 100,000 offer better performance and longevity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What specs do I need for online classes and assignments?</AccordionTrigger>
            <AccordionContent>
              For online classes and basic assignments, look for at least: an Intel Core i3/AMD Ryzen 3 processor, 8GB
              of RAM, 256GB SSD storage, a decent webcam and microphone, and reliable Wi-Fi connectivity. These
              specifications will handle video conferencing, web browsing, and document editing without issues.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is a MacBook worth it for students?</AccordionTrigger>
            <AccordionContent>
              MacBooks can be worth the investment for certain students, particularly those in design, media, or
              creative fields. They offer excellent build quality, battery life, and performance. The M1/M2 MacBooks
              provide outstanding performance and battery life. However, they come at a premium price and may not be
              necessary for all academic needs. Consider your specific course requirements and budget before investing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How important is battery life for a student laptop?</AccordionTrigger>
            <AccordionContent>
              Battery life is extremely important for students who spend long days on campus without reliable access to
              power outlets. Aim for at least 8 hours of real-world battery life to get through a full day of classes.
              Models with 10+ hours of battery life provide the best experience for students, eliminating the need to
              carry chargers and search for outlets between classes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Should I buy a laptop with a touchscreen?</AccordionTrigger>
            <AccordionContent>
              Touchscreens can be beneficial for certain students, particularly those who take handwritten notes or work
              with creative applications. Art and design students may find touchscreens with pen support valuable.
              However, touchscreen laptops typically cost more and can drain battery faster. For most general academic
              work, a standard display is sufficient and more cost-effective.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>What's the ideal weight for a student laptop?</AccordionTrigger>
            <AccordionContent>
              For students who carry their laptop around campus all day, aim for a weight under 1.6 kg (3.5 lbs). Ultra-
              portable options under 1.3 kg (2.8 lbs) are ideal for maximum portability. Remember that lighter laptops
              sometimes sacrifice performance, ports, or battery capacity, so balance weight with your other
              requirements.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* SEO Content */}
      <div className="bg-muted/50 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Student Laptops in Nepal: The Complete Guide</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            Finding the right laptop for your academic journey in Nepal can be challenging. At Laptop Pasal, we
            understand the unique needs of Nepali students across different fields of study and budget ranges. Our
            curated selection of student laptops focuses on the perfect balance of performance, portability, and price.
          </p>
          <p>
            Whether you're pursuing engineering at Pulchowk Campus, business studies at Kathmandu University, or arts at
            Tribhuvan University, we have options tailored to your specific requirements. Our student laptops come from
            trusted brands like Acer, HP, Lenovo, Dell, Asus, and Apple, ensuring reliability throughout your academic
            career.
          </p>
          <h3>Why Choose a Student Laptop from Laptop Pasal?</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Specially curated selection based on student requirements</li>
            <li>Options for every budget range</li>
            <li>Educational discounts available with valid student ID</li>
            <li>Technical support for software setup and troubleshooting</li>
            <li>Extended warranty options for peace of mind</li>
            <li>Financing options available for eligible students</li>
          </ul>
          <p>
            Visit our showroom in Kathmandu or browse our online collection to find the perfect laptop companion for
            your educational journey. Our knowledgeable staff can help you navigate the options and find the best laptop
            for your specific course requirements and budget constraints.
          </p>
        </div>
      </div>
    </div>
  )
}
