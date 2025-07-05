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
import { Grid, List, Shield, Clock, Briefcase, Cpu, CheckCircle2, Star, Award } from "lucide-react"

// Mock data for business laptops
const businessLaptops = [
  {
    id: 101,
    name: "ThinkPad X1 Carbon Gen 10",
    brand: "Lenovo",
    processor: "Intel Core i7-1260P",
    ram: "16GB",
    storage: "512GB SSD",
    price: 195000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "14-inch WUXGA IPS",
    battery: "Up to 14 hours",
    weight: "1.12 kg",
    features: ["Fingerprint reader", "IR Camera", "Spill-resistant keyboard", "Military-grade durability"],
    bestFor: ["Business executives", "Frequent travelers", "Enterprise use"],
  },
  {
    id: 102,
    name: "Dell Latitude 7420",
    brand: "Dell",
    processor: "Intel Core i5-1145G7",
    ram: "16GB",
    storage: "256GB SSD",
    price: 165000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "14-inch FHD",
    battery: "Up to 12 hours",
    weight: "1.33 kg",
    features: ["ExpressConnect", "ExpressCharge", "Dell Optimizer", "SafeScreen"],
    bestFor: ["Corporate deployment", "Office productivity", "Video conferencing"],
  },
  {
    id: 103,
    name: "HP EliteBook 840 G9",
    brand: "HP",
    processor: "Intel Core i7-1255U",
    ram: "16GB",
    storage: "512GB SSD",
    price: 175000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "14-inch FHD IPS",
    battery: "Up to 13 hours",
    weight: "1.36 kg",
    features: ["HP Sure View", "HP Sure Start", "HP Wolf Security", "5G optional"],
    bestFor: ["Security-focused businesses", "Healthcare", "Finance"],
  },
  {
    id: 104,
    name: "MacBook Pro 14",
    brand: "Apple",
    processor: "Apple M2 Pro",
    ram: "16GB",
    storage: "512GB SSD",
    price: 250000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "14.2-inch Liquid Retina XDR",
    battery: "Up to 17 hours",
    weight: "1.6 kg",
    features: ["ProMotion technology", "Studio-quality mics", "Touch ID", "MagSafe charging"],
    bestFor: ["Creative professionals", "Software development", "Executive use"],
  },
  {
    id: 105,
    name: "ASUS ExpertBook B9",
    brand: "Asus",
    processor: "Intel Core i7-1255U",
    ram: "16GB",
    storage: "1TB SSD",
    price: 180000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "14-inch FHD IPS",
    battery: "Up to 16 hours",
    weight: "0.88 kg",
    features: ["NumberPad 2.0", "AI noise cancellation", "Military-grade durability", "ASUS Business Manager"],
    bestFor: ["Ultra-portable needs", "Long battery life", "Business travel"],
  },
  {
    id: 106,
    name: "Microsoft Surface Laptop 5",
    brand: "Microsoft",
    processor: "Intel Core i7-1255U",
    ram: "16GB",
    storage: "512GB SSD",
    price: 170000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "13.5-inch PixelSense Touch",
    battery: "Up to 18 hours",
    weight: "1.27 kg",
    features: ["Windows Hello", "Omnisonic speakers", "Alcantara keyboard", "Touchscreen"],
    bestFor: ["Microsoft ecosystem", "Presentations", "Touch-based workflows"],
  },
  {
    id: 107,
    name: "Dell Precision 5570",
    brand: "Dell",
    processor: "Intel Core i7-12700H",
    ram: "32GB",
    storage: "1TB SSD",
    price: 240000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "15.6-inch FHD+",
    battery: "Up to 10 hours",
    weight: "1.84 kg",
    features: ["NVIDIA RTX A1000", "Dell Optimizer for Precision", "ISV certifications", "PremierColor"],
    bestFor: ["Engineering", "Data analysis", "Financial modeling"],
  },
  {
    id: 108,
    name: "Lenovo ThinkBook 14 Gen 4",
    brand: "Lenovo",
    processor: "AMD Ryzen 7 5800U",
    ram: "16GB",
    storage: "512GB SSD",
    price: 120000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "14-inch FHD IPS",
    battery: "Up to 10 hours",
    weight: "1.4 kg",
    features: ["Smart Power On", "Harman speakers", "ThinkShield security", "Spill-resistant keyboard"],
    bestFor: ["Small business", "Budget-conscious", "General business use"],
  },
]

// Comparison data for popular business laptops
const comparisonData = [
  {
    name: "ThinkPad X1 Carbon",
    price: "Rs. 195,000",
    processor: "Intel i7",
    security: "Fingerprint, IR Camera",
    durability: "Military-grade",
    battery: "14 hours",
    weight: "1.12 kg",
    bestFor: "Executives, Travel",
  },
  {
    name: "Dell Latitude 7420",
    price: "Rs. 165,000",
    processor: "Intel i5",
    security: "Fingerprint, SafeScreen",
    durability: "Enterprise-grade",
    battery: "12 hours",
    weight: "1.33 kg",
    bestFor: "Corporate deployment",
  },
  {
    name: "HP EliteBook 840 G9",
    price: "Rs. 175,000",
    processor: "Intel i7",
    security: "Sure View, Wolf Security",
    durability: "Business-grade",
    battery: "13 hours",
    weight: "1.36 kg",
    bestFor: "Security-focused",
  },
  {
    name: "MacBook Pro 14",
    price: "Rs. 250,000",
    processor: "M2 Pro",
    security: "Touch ID, Secure Enclave",
    durability: "Premium build",
    battery: "17 hours",
    weight: "1.6 kg",
    bestFor: "Creative professionals",
  },
  {
    name: "ASUS ExpertBook B9",
    price: "Rs. 180,000",
    processor: "Intel i7",
    security: "TPM 2.0, Kensington lock",
    durability: "Military-grade",
    battery: "16 hours",
    weight: "0.88 kg",
    bestFor: "Ultra-portable needs",
  },
]

// Business testimonials
const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    company: "Himalayan Bank",
    position: "IT Director",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "We deployed 50 ThinkPad X1 Carbon laptops for our executive team. The security features and durability have been exceptional, with zero hardware failures in the first year.",
    laptop: "ThinkPad X1 Carbon",
  },
  {
    id: 2,
    name: "Sunita Patel",
    company: "Nepal Telecom",
    position: "Operations Manager",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The Dell Latitude laptops have been perfect for our field staff. The battery life and connectivity options allow our team to work from anywhere in the country.",
    laptop: "Dell Latitude 7420",
  },
  {
    id: 3,
    name: "Anish Gurung",
    company: "Mountain Design Studio",
    position: "Creative Director",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "As a design agency, the MacBook Pro has been essential for our creative work. The display quality and performance handling large design files has improved our productivity significantly.",
    laptop: "MacBook Pro 14",
  },
]

export default function BusinessLaptopsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [filteredLaptops, setFilteredLaptops] = useState(businessLaptops)

  const handleFilterChange = (filters: FilterState) => {
    const filtered = businessLaptops.filter((laptop) => {
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

  const sortProducts = (products: typeof businessLaptops, sortType: string) => {
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
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-lg p-8 mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Business Laptops in Nepal</h1>
          <p className="text-lg mb-6">
            Elevate your business with our premium selection of enterprise-grade laptops. Built for performance,
            security, and reliability to meet the demands of modern business environments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 p-4 rounded-lg flex items-start space-x-3">
              <Shield className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Enterprise Security</h3>
                <p className="text-sm opacity-90">Advanced security features to protect sensitive business data</p>
              </div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg flex items-start space-x-3">
              <Briefcase className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Professional Design</h3>
                <p className="text-sm opacity-90">
                  Durable construction with premium materials for business environments
                </p>
              </div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg flex items-start space-x-3">
              <Clock className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">All-Day Productivity</h3>
                <p className="text-sm opacity-90">Long battery life and performance for uninterrupted workflow</p>
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
          <TabsTrigger value="guide">Business Buying Guide</TabsTrigger>
          <TabsTrigger value="testimonials">Business Reviews</TabsTrigger>
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
            <h2 className="text-2xl font-bold mb-4">Business Laptop Comparison</h2>
            <p className="text-muted-foreground mb-6">
              Compare the most popular business laptops to find the one that best fits your organization's needs.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Model</th>
                    <th className="border p-3 text-left">Price</th>
                    <th className="border p-3 text-left">Processor</th>
                    <th className="border p-3 text-left">Security Features</th>
                    <th className="border p-3 text-left">Durability</th>
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
                      <td className="border p-3">{laptop.security}</td>
                      <td className="border p-3">{laptop.durability}</td>
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
                <li>For the best security features, the HP EliteBook with Sure View and Wolf Security stands out</li>
                <li>The ASUS ExpertBook B9 is the lightest option at just 0.88 kg, ideal for frequent travelers</li>
                <li>MacBook Pro offers the best battery life at 17 hours, perfect for long workdays</li>
                <li>ThinkPad X1 Carbon provides the best balance of durability, security, and performance</li>
                <li>
                  For budget-conscious businesses, the Dell Latitude offers excellent value with enterprise features
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Business Buying Guide Tab */}
        <TabsContent value="guide">
          <div className="bg-card rounded-lg border shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Business Laptop Buying Guide</h2>
            <p className="text-muted-foreground mb-6">
              Selecting the right business laptops for your organization requires careful consideration of several
              factors. This guide will help you make informed decisions for your business needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Security Considerations
                </h3>
                <ul className="space-y-3">
                  <li>
                    <span className="font-medium">Hardware Security:</span> Look for TPM 2.0, fingerprint readers, IR
                    cameras for facial recognition, and privacy screens.
                  </li>
                  <li>
                    <span className="font-medium">Software Security:</span> Consider laptops with pre-installed security
                    solutions like HP Wolf Security, Lenovo ThinkShield, or Dell SafeGuard.
                  </li>
                  <li>
                    <span className="font-medium">BIOS Protection:</span> Self-healing BIOS and secure boot features
                    protect against low-level attacks.
                  </li>
                  <li>
                    <span className="font-medium">Physical Security:</span> Kensington lock slots and tamper-detection
                    features for sensitive environments.
                  </li>
                </ul>
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Cpu className="h-5 w-5 mr-2" />
                  Performance Requirements
                </h3>
                <ul className="space-y-3">
                  <li>
                    <span className="font-medium">General Office Work:</span> Intel Core i5/AMD Ryzen 5, 8-16GB RAM,
                    256GB SSD is sufficient for most business tasks.
                  </li>
                  <li>
                    <span className="font-medium">Power Users:</span> Intel Core i7/AMD Ryzen 7, 16-32GB RAM, 512GB+ SSD
                    for multitasking and demanding applications.
                  </li>
                  <li>
                    <span className="font-medium">Specialized Workloads:</span> Consider dedicated graphics for design
                    work, or workstation-class machines for engineering/CAD.
                  </li>
                  <li>
                    <span className="font-medium">Future-Proofing:</span> Consider higher specs than currently needed to
                    extend the useful life of your investment.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Durability and Build Quality</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Business-Grade</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Standard business durability</li>
                    <li>• Good for office environments</li>
                    <li>• Typically 1-year warranty</li>
                    <li>• Examples: ThinkBook, ProBook</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Enterprise-Grade</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Enhanced durability testing</li>
                    <li>• Spill-resistant keyboards</li>
                    <li>• Extended warranty options</li>
                    <li>• Examples: Latitude, EliteBook</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Military-Grade</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• MIL-STD-810G/H certification</li>
                    <li>• Tested for drops, shocks, vibration</li>
                    <li>• Extreme temperature resistance</li>
                    <li>• Examples: ThinkPad, ToughBook</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Manageability and Deployment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Enterprise Management Features</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Intel vPro or AMD PRO for remote management</li>
                    <li>• BIOS-level control and configuration</li>
                    <li>• Remote diagnostics and troubleshooting</li>
                    <li>• Centralized update management</li>
                    <li>• Asset tracking and inventory management</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Deployment Considerations</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Consistent hardware configurations</li>
                    <li>• Long-term availability of models</li>
                    <li>• Image stability and driver consistency</li>
                    <li>• Bulk deployment tools and services</li>
                    <li>• Docking solutions for office setups</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Total Cost of Ownership</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Initial Investment</h4>
                  <p className="text-sm text-muted-foreground">
                    Consider not just the purchase price, but also deployment costs, software licensing, and accessories
                    like docks and monitors.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Ongoing Costs</h4>
                  <p className="text-sm text-muted-foreground">
                    Factor in maintenance, support, warranty extensions, replacement parts, and IT management time
                    required for different laptop models.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2">Lifecycle Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Consider the expected lifespan, residual value, disposal costs, and data security during
                    decommissioning of business laptops.
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
                  <span className="font-medium">Best Overall for Business:</span> Lenovo ThinkPad X1 Carbon -
                  Exceptional balance of security, durability, and performance
                </li>
                <li>
                  <span className="font-medium">Best for Enterprise Deployment:</span> Dell Latitude 7420 - Excellent
                  manageability features and consistent hardware platform
                </li>
                <li>
                  <span className="font-medium">Best for Security-Focused Organizations:</span> HP EliteBook 840 G9 -
                  Comprehensive security suite with HP Wolf Security
                </li>
                <li>
                  <span className="font-medium">Best for Executives:</span> MacBook Pro 14 - Premium build quality and
                  exceptional performance
                </li>
                <li>
                  <span className="font-medium">Best Ultra-Portable:</span> ASUS ExpertBook B9 - Incredibly lightweight
                  with excellent battery life
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Business Testimonials Tab */}
        <TabsContent value="testimonials">
          <div className="bg-card rounded-lg border shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Business Customer Reviews</h2>
            <p className="text-muted-foreground mb-6">
              Hear from Nepali businesses about their experiences with our business laptop solutions.
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
                        {testimonial.position}, {testimonial.company}
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
                    <span className="text-muted-foreground">Deployed: </span>
                    <span className="font-medium">{testimonial.laptop}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-muted/30 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Business Customer Feedback</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    What Businesses Love
                  </h4>
                  <ul className="space-y-1 text-sm pl-6 list-disc text-muted-foreground">
                    <li>Consistent hardware platforms for easier IT management</li>
                    <li>Enterprise-grade security features protecting sensitive data</li>
                    <li>Extended warranty and support options</li>
                    <li>Docking solutions for office and remote work</li>
                    <li>Durability and reliability reducing downtime</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-red-500" />
                    Common Business Concerns
                  </h4>
                  <ul className="space-y-1 text-sm pl-6 list-disc text-muted-foreground">
                    <li>Initial cost compared to consumer laptops</li>
                    <li>Availability of local support and service</li>
                    <li>Consistency of parts and accessories</li>
                    <li>Deployment time for large organizations</li>
                    <li>Balancing security with user experience</li>
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
            <AccordionTrigger>What's the difference between business and consumer laptops?</AccordionTrigger>
            <AccordionContent>
              Business laptops differ from consumer models in several key ways: they typically offer enhanced security
              features (like fingerprint readers, TPM chips, and privacy screens), better build quality and durability
              testing, longer product lifecycles with consistent components, better serviceability and repairability,
              enterprise management features, and more comprehensive warranty and support options. While they may cost
              more initially, business laptops often provide better total cost of ownership over their lifecycle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How long should business laptops last?</AccordionTrigger>
            <AccordionContent>
              Quality business laptops should last 3-5 years in a typical business environment. Enterprise-grade models
              from manufacturers like Lenovo ThinkPad, Dell Latitude, and HP EliteBook are designed for longer
              lifecycles than consumer laptops. To maximize lifespan, consider future-proofing with slightly higher
              specifications than currently needed, invest in quality carrying cases, implement proper maintenance
              procedures, and consider extended warranty options for critical deployments.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What security features should I look for in business laptops?</AccordionTrigger>
            <AccordionContent>
              Key security features to consider include: hardware-based security like TPM 2.0 for encryption, biometric
              authentication (fingerprint readers, IR cameras for facial recognition), privacy screens to prevent visual
              hacking, webcam privacy shutters, secure boot capabilities, self-healing BIOS, remote disable/wipe
              functionality, and pre-installed security software suites like HP Wolf Security, Lenovo ThinkShield, or
              Dell SafeGuard. The specific features needed will depend on your organization's security requirements and
              policies.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Are business laptops worth the extra cost for small businesses?</AccordionTrigger>
            <AccordionContent>
              For small businesses, the value of business-grade laptops depends on several factors. They're worth the
              investment if: you handle sensitive customer data, need reliable machines with minimal downtime, want
              longer-lasting devices (3-5 years vs 2-3 for consumer models), require consistent hardware for easier IT
              management, or need better after-sales support. For very small operations with basic needs, consumer
              laptops might suffice, but as your business grows, the benefits of business laptops typically outweigh the
              additional cost.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What warranty and support options should businesses consider?</AccordionTrigger>
            <AccordionContent>
              Businesses should consider several warranty and support options: extended warranty coverage beyond the
              standard 1-year, next business day on-site service for critical operations, accidental damage protection
              for mobile workforces, keep-your-drive options for data security compliance, and technical support
              packages with dedicated business channels. The right mix depends on how critical the laptops are to your
              operations, your internal IT capabilities, and your budget. Many manufacturers offer business-specific
              support packages that can be customized to your needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How do I manage a fleet of business laptops effectively?</AccordionTrigger>
            <AccordionContent>
              Effective management of business laptops includes: standardizing on specific models and configurations to
              simplify support, implementing mobile device management (MDM) solutions, utilizing remote management
              capabilities like Intel vPro or AMD PRO, creating a regular refresh cycle (typically 3-5 years),
              developing clear security policies and enforcement mechanisms, establishing efficient procurement and
              deployment processes, and implementing asset tracking and inventory management. For larger organizations,
              consider Device-as-a-Service (DaaS) options that bundle hardware, software, and lifecycle services.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* SEO Content */}
      <div className="bg-muted/50 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Business Laptops in Nepal: Enterprise Solutions</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            At Laptop Pasal, we understand the unique challenges faced by Nepali businesses when it comes to technology
            procurement. Our business laptop solutions are designed to meet the specific needs of organizations across
            Nepal, from startups in Kathmandu to established enterprises in Pokhara, Biratnagar, and beyond.
          </p>
          <p>
            We offer a comprehensive range of business laptops from trusted brands like Lenovo ThinkPad, Dell Latitude,
            HP EliteBook, Apple MacBook Pro, and ASUS ExpertBook. These enterprise-grade machines are built to withstand
            the demands of professional environments while providing the security, manageability, and reliability that
            businesses require.
          </p>
          <h3>Why Choose Business Laptops from Laptop Pasal?</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Specialized business laptop expertise and consultation</li>
            <li>Volume discounts for bulk purchases</li>
            <li>Extended warranty options and priority support</li>
            <li>Local service centers across major cities in Nepal</li>
            <li>Deployment and configuration services</li>
            <li>Trade-in and asset recovery programs</li>
          </ul>
          <p>
            Our business solutions team can help you select the right laptops for your organization's specific needs,
            whether you're equipping a small office or deploying hundreds of devices across multiple locations. We
            understand the importance of reliable technology in today's business environment and are committed to
            providing solutions that enhance productivity while minimizing downtime.
          </p>
        </div>
      </div>
    </div>
  )
}
