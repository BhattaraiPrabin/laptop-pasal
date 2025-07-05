"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Grid, List, Filter, ChevronRight } from "lucide-react"

// Mock data for gaming laptops
const gamingLaptops = [
  {
    id: 101,
    name: "MSI GE76 Raider",
    brand: "MSI",
    processor: "Intel i9-12900HK",
    ram: "32GB",
    storage: "2TB SSD",
    gpu: "NVIDIA RTX 3080 Ti",
    price: 350000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    refreshRate: "360Hz",
    features: ["RGB Keyboard", "Thunderbolt 4", "Advanced Cooling"],
    rating: 4.8,
    inStock: true,
    discount: 5,
    originalPrice: 368000,
    releaseYear: 2022,
  },
  {
    id: 102,
    name: "ASUS ROG Strix G15",
    brand: "Asus",
    processor: "AMD Ryzen 9 5900HX",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3070",
    price: 250000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    refreshRate: "300Hz",
    features: ["RGB Keyboard", "Wi-Fi 6", "Liquid Metal Cooling"],
    rating: 4.7,
    inStock: true,
    discount: 10,
    originalPrice: 275000,
    releaseYear: 2022,
  },
  {
    id: 103,
    name: "Alienware x17 R2",
    brand: "Dell",
    processor: "Intel i7-12700H",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3070 Ti",
    price: 320000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    refreshRate: "165Hz",
    features: ["AlienFX Lighting", "Advanced Cooling", "Cherry MX Keyboard"],
    rating: 4.6,
    inStock: true,
    discount: 0,
    originalPrice: 320000,
    releaseYear: 2022,
  },
  {
    id: 104,
    name: "Lenovo Legion 7i",
    brand: "Lenovo",
    processor: "Intel i9-12900HX",
    ram: "32GB",
    storage: "2TB SSD",
    gpu: "NVIDIA RTX 3080",
    price: 300000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    refreshRate: "240Hz",
    features: ["RGB Keyboard", "Vapor Chamber Cooling", "NVIDIA G-SYNC"],
    rating: 4.5,
    inStock: true,
    discount: 8,
    originalPrice: 325000,
    releaseYear: 2022,
  },
  {
    id: 105,
    name: "Acer Predator Helios 300",
    brand: "Acer",
    processor: "Intel i7-11800H",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3060",
    price: 180000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    refreshRate: "144Hz",
    features: ["RGB Keyboard", "AeroBlade 3D Fan", "DTS:X Ultra Audio"],
    rating: 4.4,
    inStock: true,
    discount: 0,
    originalPrice: 180000,
    releaseYear: 2021,
  },
  {
    id: 106,
    name: "HP Omen 17",
    brand: "HP",
    processor: "Intel i7-12700H",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3070",
    price: 230000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    refreshRate: "165Hz",
    features: ["RGB Keyboard", "OMEN Tempest Cooling", "Bang & Olufsen Audio"],
    rating: 4.3,
    inStock: false,
    discount: 0,
    originalPrice: 230000,
    releaseYear: 2022,
  },
  {
    id: 107,
    name: "Razer Blade 15",
    brand: "Razer",
    processor: "Intel i9-12900H",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3080 Ti",
    price: 340000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    refreshRate: "240Hz",
    features: ["Chroma RGB", "Vapor Chamber Cooling", "CNC Aluminum Chassis"],
    rating: 4.7,
    inStock: true,
    discount: 0,
    originalPrice: 340000,
    releaseYear: 2022,
  },
  {
    id: 108,
    name: "Gigabyte Aorus 17",
    brand: "Gigabyte",
    processor: "Intel i7-12700H",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3070",
    price: 240000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    refreshRate: "360Hz",
    features: ["RGB Fusion 2.0", "WINDFORCE Cooling", "ESS Sabre Audio"],
    rating: 4.5,
    inStock: true,
    discount: 12,
    originalPrice: 270000,
    releaseYear: 2022,
  },
  {
    id: 109,
    name: "MSI Stealth GS66",
    brand: "MSI",
    processor: "Intel i7-11800H",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3060",
    price: 200000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    refreshRate: "240Hz",
    features: ["Per-Key RGB", "Cooler Boost Trinity+", "Thunderbolt 4"],
    rating: 4.4,
    inStock: true,
    discount: 0,
    originalPrice: 200000,
    releaseYear: 2021,
  },
  {
    id: 110,
    name: "ASUS TUF Gaming A15",
    brand: "Asus",
    processor: "AMD Ryzen 7 6800H",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "NVIDIA RTX 3060",
    price: 160000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    refreshRate: "144Hz",
    features: ["MIL-STD-810H", "RGB Keyboard", "Self-Cleaning Cooling"],
    rating: 4.3,
    inStock: true,
    discount: 5,
    originalPrice: 168000,
    releaseYear: 2022,
  },
  {
    id: 111,
    name: "Lenovo Legion 5 Pro",
    brand: "Lenovo",
    processor: "AMD Ryzen 7 5800H",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3070",
    price: 190000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    refreshRate: "165Hz",
    features: ["NVIDIA G-SYNC", "Coldfront 3.0 Cooling", "TrueStrike Keyboard"],
    rating: 4.6,
    inStock: true,
    discount: 0,
    originalPrice: 190000,
    releaseYear: 2021,
  },
  {
    id: 112,
    name: "Acer Nitro 5",
    brand: "Acer",
    processor: "AMD Ryzen 5 5600H",
    ram: "8GB",
    storage: "512GB SSD",
    gpu: "NVIDIA RTX 3050",
    price: 120000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    refreshRate: "144Hz",
    features: ["NitroSense", "CoolBoost Technology", "RGB Keyboard"],
    rating: 4.2,
    inStock: true,
    discount: 8,
    originalPrice: 130000,
    releaseYear: 2021,
  },
]

// Featured gaming laptops
const featuredGamingLaptops = gamingLaptops.filter((laptop) => laptop.rating >= 4.5 && laptop.inStock).slice(0, 4)

// Budget gaming laptops
const budgetGamingLaptops = gamingLaptops
  .filter((laptop) => laptop.price < 200000 && laptop.inStock)
  .sort((a, b) => a.price - b.price)
  .slice(0, 4)

// High-end gaming laptops
const highEndGamingLaptops = gamingLaptops
  .filter((laptop) => laptop.price > 250000 && laptop.inStock)
  .sort((a, b) => b.price - a.price)
  .slice(0, 4)

// Gaming laptop brands
const gamingLaptopBrands = Array.from(new Set(gamingLaptops.map((laptop) => laptop.brand)))

// GPU options
const gpuOptions = Array.from(new Set(gamingLaptops.map((laptop) => laptop.gpu)))

// Refresh rate options
const refreshRateOptions = Array.from(new Set(gamingLaptops.map((laptop) => laptop.refreshRate)))

interface FilterState {
  priceRange: [number, number]
  brands: string[]
  processors: string[]
  gpus: string[]
  ram: string[]
  storage: string[]
  refreshRates: string[]
  condition: string[]
  availability: string[]
  rating: number | null
}

export default function GamingLaptopsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [activeTab, setActiveTab] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 400000],
    brands: [],
    processors: [],
    gpus: [],
    ram: [],
    storage: [],
    refreshRates: [],
    condition: [],
    availability: [],
    rating: null,
  })
  const [filteredLaptops, setFilteredLaptops] = useState(gamingLaptops)

  const applyFilters = () => {
    const filtered = gamingLaptops.filter((laptop) => {
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

      // GPU filter
      if (filters.gpus.length > 0 && !filters.gpus.includes(laptop.gpu)) {
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

      // Refresh rate filter
      if (filters.refreshRates.length > 0 && !filters.refreshRates.includes(laptop.refreshRate)) {
        return false
      }

      // Condition filter
      if (filters.condition.length > 0 && !filters.condition.includes(laptop.condition)) {
        return false
      }

      // Availability filter
      if (filters.availability.includes("In Stock") && !laptop.inStock) {
        return false
      }

      // Rating filter
      if (filters.rating && laptop.rating < filters.rating) {
        return false
      }

      return true
    })

    // Apply tab filtering
    let tabFiltered = filtered
    if (activeTab === "budget") {
      tabFiltered = filtered.filter((laptop) => laptop.price < 200000)
    } else if (activeTab === "mid-range") {
      tabFiltered = filtered.filter((laptop) => laptop.price >= 200000 && laptop.price <= 250000)
    } else if (activeTab === "high-end") {
      tabFiltered = filtered.filter((laptop) => laptop.price > 250000)
    }

    // Apply sorting
    const sorted = sortProducts(tabFiltered, sortBy)
    setFilteredLaptops(sorted)
  }

  // Apply filters when filters or tabs change
  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)

    // Apply the updated filters
    const filtered = gamingLaptops.filter((laptop) => {
      // Price filter
      if (laptop.price < updatedFilters.priceRange[0] || laptop.price > updatedFilters.priceRange[1]) {
        return false
      }

      // Brand filter
      if (updatedFilters.brands.length > 0 && !updatedFilters.brands.includes(laptop.brand)) {
        return false
      }

      // Processor filter
      if (
        updatedFilters.processors.length > 0 &&
        !updatedFilters.processors.some((p) => laptop.processor.includes(p))
      ) {
        return false
      }

      // GPU filter
      if (updatedFilters.gpus.length > 0 && !updatedFilters.gpus.includes(laptop.gpu)) {
        return false
      }

      // RAM filter
      if (updatedFilters.ram.length > 0 && !updatedFilters.ram.includes(laptop.ram)) {
        return false
      }

      // Storage filter
      if (updatedFilters.storage.length > 0 && !updatedFilters.storage.includes(laptop.storage)) {
        return false
      }

      // Refresh rate filter
      if (updatedFilters.refreshRates.length > 0 && !updatedFilters.refreshRates.includes(laptop.refreshRate)) {
        return false
      }

      // Condition filter
      if (updatedFilters.condition.length > 0 && !updatedFilters.condition.includes(laptop.condition)) {
        return false
      }

      // Availability filter
      if (updatedFilters.availability.includes("In Stock") && !laptop.inStock) {
        return false
      }

      // Rating filter
      if (updatedFilters.rating && laptop.rating < updatedFilters.rating) {
        return false
      }

      return true
    })

    // Apply tab filtering
    let tabFiltered = filtered
    if (activeTab === "budget") {
      tabFiltered = filtered.filter((laptop) => laptop.price < 200000)
    } else if (activeTab === "mid-range") {
      tabFiltered = filtered.filter((laptop) => laptop.price >= 200000 && laptop.price <= 250000)
    } else if (activeTab === "high-end") {
      tabFiltered = filtered.filter((laptop) => laptop.price > 250000)
    }

    // Apply sorting
    const sorted = sortProducts(tabFiltered, sortBy)
    setFilteredLaptops(sorted)
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)

    // Apply filtering based on the selected tab
    let tabFiltered = gamingLaptops

    // Apply existing filters first
    tabFiltered = tabFiltered.filter((laptop) => {
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

      // GPU filter
      if (filters.gpus.length > 0 && !filters.gpus.includes(laptop.gpu)) {
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

      // Refresh rate filter
      if (filters.refreshRates.length > 0 && !filters.refreshRates.includes(laptop.refreshRate)) {
        return false
      }

      // Condition filter
      if (filters.condition.length > 0 && !filters.condition.includes(laptop.condition)) {
        return false
      }

      // Availability filter
      if (filters.availability.includes("In Stock") && !laptop.inStock) {
        return false
      }

      // Rating filter
      if (filters.rating && laptop.rating < filters.rating) {
        return false
      }

      return true
    })

    // Then apply tab-specific filtering
    if (value === "budget") {
      tabFiltered = tabFiltered.filter((laptop) => laptop.price < 200000)
    } else if (value === "mid-range") {
      tabFiltered = tabFiltered.filter((laptop) => laptop.price >= 200000 && laptop.price <= 250000)
    } else if (value === "high-end") {
      tabFiltered = tabFiltered.filter((laptop) => laptop.price > 250000)
    }

    // Apply sorting
    const sorted = sortProducts(tabFiltered, sortBy)
    setFilteredLaptops(sorted)
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
    setFilteredLaptops(sortProducts(filteredLaptops, value))
  }

  const sortProducts = (products: typeof gamingLaptops, sortType: string) => {
    const sorted = [...products]

    switch (sortType) {
      case "price-low-high":
        return sorted.sort((a, b) => a.price - b.price)
      case "price-high-low":
        return sorted.sort((a, b) => b.price - a.price)
      case "newest":
        return sorted.sort((a, b) => b.releaseYear - a.releaseYear)
      case "rating":
        return sorted.sort((a, b) => b.rating - a.rating)
      case "discount":
        return sorted.sort((a, b) => b.discount - a.discount)
      default: // featured
        return sorted.sort((a, b) => b.rating - a.rating)
    }
  }

  const handleCheckboxChange = (category: keyof Omit<FilterState, "priceRange" | "rating">, value: string) => {
    const currentValues = filters[category]
    let newValues: string[]

    if (currentValues.includes(value)) {
      newValues = currentValues.filter((v) => v !== value)
    } else {
      newValues = [...currentValues, value]
    }

    handleFilterChange({ [category]: newValues })
  }

  const clearFilters = () => {
    const resetFilters: FilterState = {
      priceRange: [0, 400000],
      brands: [],
      processors: [],
      gpus: [],
      ram: [],
      storage: [],
      refreshRates: [],
      condition: [],
      availability: [],
      rating: null,
    }
    setFilters(resetFilters)
    setActiveTab("all")
    setFilteredLaptops(sortProducts(gamingLaptops, sortBy))
  }

  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white rounded-lg p-8 mb-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">Gaming Laptops</h1>
          <p className="text-lg mb-6">
            High-performance laptops designed for gaming enthusiasts. Experience immersive gameplay with powerful GPUs,
            high refresh rate displays, and advanced cooling systems. Our gaming laptops deliver the performance you
            need for the latest AAA titles and competitive gaming.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30">
              View Budget Options
            </Button>
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30">
              High-End Gaming
            </Button>
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30">
              Compare Models
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Gaming Laptops */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Gaming Laptops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGamingLaptops.map((laptop) => (
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
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="outline"
                      className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                    >
                      Featured
                    </Badge>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm ml-1">{laptop.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">{laptop.name}</h3>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <p>{laptop.processor}</p>
                    <p>{laptop.gpu}</p>
                    <p>
                      {laptop.ram} RAM, {laptop.storage}
                    </p>
                    <p>{laptop.refreshRate} Display</p>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="font-bold text-lg">NPR {laptop.price.toLocaleString()}</span>
                    {laptop.discount > 0 && (
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        NPR {laptop.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Link>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters sidebar */}
        <div className={`w-full md:w-1/4 ${showFilters ? "block" : "hidden md:block"}`}>
          <div className="sticky top-24">
            <div className="bg-background border rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>

              <Accordion type="multiple" defaultValue={["price", "brands", "gpus", "refreshRates"]}>
                <AccordionItem value="price">
                  <AccordionTrigger>Price Range</AccordionTrigger>
                  <AccordionContent>
                    <div className="px-2">
                      <Slider
                        value={[filters.priceRange[0], filters.priceRange[1]]}
                        min={0}
                        max={400000}
                        step={10000}
                        onValueChange={(value) =>
                          handleFilterChange({ priceRange: [value[0], value[1]] as [number, number] })
                        }
                        className="my-6"
                      />
                      <div className="flex items-center justify-between">
                        <span>NPR {filters.priceRange[0].toLocaleString()}</span>
                        <span>NPR {filters.priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="brands">
                  <AccordionTrigger>Brands</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {gamingLaptopBrands.map((brand) => (
                        <div key={brand} className="flex items-center space-x-2">
                          <Checkbox
                            id={`brand-${brand}`}
                            checked={filters.brands.includes(brand)}
                            onCheckedChange={() => handleCheckboxChange("brands", brand)}
                          />
                          <Label htmlFor={`brand-${brand}`} className="text-sm font-normal cursor-pointer">
                            {brand}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="gpus">
                  <AccordionTrigger>Graphics Card</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {gpuOptions.map((gpu) => (
                        <div key={gpu} className="flex items-center space-x-2">
                          <Checkbox
                            id={`gpu-${gpu}`}
                            checked={filters.gpus.includes(gpu)}
                            onCheckedChange={() => handleCheckboxChange("gpus", gpu)}
                          />
                          <Label htmlFor={`gpu-${gpu}`} className="text-sm font-normal cursor-pointer">
                            {gpu}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="refreshRates">
                  <AccordionTrigger>Refresh Rate</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {refreshRateOptions.map((rate) => (
                        <div key={rate} className="flex items-center space-x-2">
                          <Checkbox
                            id={`rate-${rate}`}
                            checked={filters.refreshRates.includes(rate)}
                            onCheckedChange={() => handleCheckboxChange("refreshRates", rate)}
                          />
                          <Label htmlFor={`rate-${rate}`} className="text-sm font-normal cursor-pointer">
                            {rate}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ram">
                  <AccordionTrigger>RAM</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["8GB", "16GB", "32GB", "64GB"].map((ram) => (
                        <div key={ram} className="flex items-center space-x-2">
                          <Checkbox
                            id={`ram-${ram}`}
                            checked={filters.ram.includes(ram)}
                            onCheckedChange={() => handleCheckboxChange("ram", ram)}
                          />
                          <Label htmlFor={`ram-${ram}`} className="text-sm font-normal cursor-pointer">
                            {ram}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="storage">
                  <AccordionTrigger>Storage</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["512GB SSD", "1TB SSD", "2TB SSD"].map((storage) => (
                        <div key={storage} className="flex items-center space-x-2">
                          <Checkbox
                            id={`storage-${storage}`}
                            checked={filters.storage.includes(storage)}
                            onCheckedChange={() => handleCheckboxChange("storage", storage)}
                          />
                          <Label htmlFor={`storage-${storage}`} className="text-sm font-normal cursor-pointer">
                            {storage}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="availability">
                  <AccordionTrigger>Availability</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="availability-instock"
                          checked={filters.availability.includes("In Stock")}
                          onCheckedChange={() => handleCheckboxChange("availability", "In Stock")}
                        />
                        <Label htmlFor="availability-instock" className="text-sm font-normal cursor-pointer">
                          In Stock
                        </Label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rating">
                  <AccordionTrigger>Rating</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {[4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <Checkbox
                            id={`rating-${rating}`}
                            checked={filters.rating === rating}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                handleFilterChange({ rating })
                              } else if (filters.rating === rating) {
                                handleFilterChange({ rating: null })
                              }
                            }}
                          />
                          <Label
                            htmlFor={`rating-${rating}`}
                            className="text-sm font-normal cursor-pointer flex items-center"
                          >
                            {Array(rating)
                              .fill(0)
                              .map((_, i) => (
                                <span key={i} className="text-yellow-500">
                                  ★
                                </span>
                              ))}
                            {Array(5 - rating)
                              .fill(0)
                              .map((_, i) => (
                                <span key={i} className="text-gray-300">
                                  ★
                                </span>
                              ))}
                            <span className="ml-1">& Up</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Gaming Guides */}
            <div className="bg-background border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Gaming Laptop Guides</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/blog/gaming-laptop-buying-guide"
                    className="text-sm text-blue-600 hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Gaming Laptop Buying Guide
                  </Link>
                </li>
                <li>
                  <Link href="/blog/gpu-comparison" className="text-sm text-blue-600 hover:underline flex items-center">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    GPU Performance Comparison
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/gaming-laptop-cooling"
                    className="text-sm text-blue-600 hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Cooling Solutions Explained
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/gaming-laptop-maintenance"
                    className="text-sm text-blue-600 hover:underline flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    Maintenance Tips for Gamers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product listing */}
        <div className="w-full md:w-3/4">
          <div className="bg-background border rounded-lg p-4 mb-6">
            <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange}>
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="all">All Gaming Laptops</TabsTrigger>
                  <TabsTrigger value="budget">Budget (Under 2L)</TabsTrigger>
                  <TabsTrigger value="mid-range">Mid-Range (2L-2.5L)</TabsTrigger>
                  <TabsTrigger value="high-end">High-End (Above 2.5L)</TabsTrigger>
                </TabsList>
                <Button variant="outline" size="sm" className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>

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
                  <span className="text-sm text-muted-foreground ml-2">{filteredLaptops.length} products</span>
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
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="discount">Biggest Discount</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <TabsContent value="all" className="mt-0">
                {filteredLaptops.length === 0 ? (
                  <div className="text-center py-10">
                    <h3 className="text-lg font-medium">No laptops found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters</p>
                    <Button variant="outline" className="mt-4" onClick={clearFilters}>
                      Clear All Filters
                    </Button>
                  </div>
                ) : viewMode === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLaptops.map((laptop) => (
                      <Card key={laptop.id} className="overflow-hidden">
                        <Link href={`/product/${laptop.id}`}>
                          <div className="aspect-video overflow-hidden relative">
                            <img
                              src={laptop.image || "/placeholder.svg"}
                              alt={laptop.name}
                              className="w-full h-full object-cover transition-transform hover:scale-105"
                            />
                            {laptop.discount > 0 && (
                              <Badge className="absolute top-2 right-2 bg-red-500">{laptop.discount}% OFF</Badge>
                            )}
                            {!laptop.inStock && (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="text-white font-semibold px-3 py-1 bg-red-500 rounded">
                                  Out of Stock
                                </span>
                              </div>
                            )}
                          </div>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <Badge
                                variant="outline"
                                className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                              >
                                {laptop.brand}
                              </Badge>
                              <div className="flex items-center">
                                <span className="text-yellow-500">★</span>
                                <span className="text-sm ml-1">{laptop.rating}</span>
                              </div>
                            </div>
                            <h3 className="font-semibold text-lg">{laptop.name}</h3>
                            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                              <p>{laptop.processor}</p>
                              <p>{laptop.gpu}</p>
                              <p>
                                {laptop.ram} RAM, {laptop.storage}
                              </p>
                              <p>{laptop.refreshRate} Display</p>
                            </div>
                            <div className="mt-4 flex items-center">
                              <span className="font-bold text-lg">NPR {laptop.price.toLocaleString()}</span>
                              {laptop.discount > 0 && (
                                <span className="text-sm text-muted-foreground line-through ml-2">
                                  NPR {laptop.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                          </CardContent>
                        </Link>
                        <CardFooter className="p-4 pt-0">
                          <Button className="w-full" disabled={!laptop.inStock}>
                            {laptop.inStock ? "Add to Cart" : "Out of Stock"}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredLaptops.map((laptop) => (
                      <Card key={laptop.id}>
                        <div className="flex flex-col md:flex-row">
                          <Link href={`/product/${laptop.id}`} className="md:w-1/4 relative">
                            <div className="aspect-video md:aspect-square overflow-hidden">
                              <img
                                src={laptop.image || "/placeholder.svg"}
                                alt={laptop.name}
                                className="w-full h-full object-cover transition-transform hover:scale-105"
                              />
                              {laptop.discount > 0 && (
                                <Badge className="absolute top-2 right-2 bg-red-500">{laptop.discount}% OFF</Badge>
                              )}
                              {!laptop.inStock && (
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                  <span className="text-white font-semibold px-3 py-1 bg-red-500 rounded">
                                    Out of Stock
                                  </span>
                                </div>
                              )}
                            </div>
                          </Link>
                          <div className="p-4 md:w-3/4">
                            <div className="flex items-center justify-between mb-2">
                              <Badge
                                variant="outline"
                                className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                              >
                                {laptop.brand}
                              </Badge>
                              <div className="flex items-center">
                                <span className="text-yellow-500">★</span>
                                <span className="text-sm ml-1">{laptop.rating}</span>
                              </div>
                            </div>
                            <Link href={`/product/${laptop.id}`}>
                              <h3 className="font-semibold text-lg">{laptop.name}</h3>
                            </Link>
                            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                              <p>{laptop.processor}</p>
                              <p>{laptop.gpu}</p>
                              <p>
                                {laptop.ram} RAM, {laptop.storage}
                              </p>
                              <p>{laptop.refreshRate} Display</p>
                              <p>Features: {laptop.features.join(", ")}</p>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                              <div>
                                <span className="font-bold text-lg">NPR {laptop.price.toLocaleString()}</span>
                                {laptop.discount > 0 && (
                                  <span className="text-sm text-muted-foreground line-through ml-2">
                                    NPR {laptop.originalPrice.toLocaleString()}
                                  </span>
                                )}
                              </div>
                              <Button disabled={!laptop.inStock}>
                                {laptop.inStock ? "Add to Cart" : "Out of Stock"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="budget" className="mt-0">
                {/* Budget laptops content - handled by the filter logic */}
                {filteredLaptops.length === 0 ? (
                  <div className="text-center py-10">
                    <h3 className="text-lg font-medium">No budget gaming laptops found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters</p>
                    <Button variant="outline" className="mt-4" onClick={clearFilters}>
                      Clear All Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLaptops.map((laptop) => (
                      <Card key={laptop.id} className="overflow-hidden">
                        {/* Same card content as above */}
                        <Link href={`/product/${laptop.id}`}>
                          <div className="aspect-video overflow-hidden relative">
                            <img
                              src={laptop.image || "/placeholder.svg"}
                              alt={laptop.name}
                              className="w-full h-full object-cover transition-transform hover:scale-105"
                            />
                            {laptop.discount > 0 && (
                              <Badge className="absolute top-2 right-2 bg-red-500">{laptop.discount}% OFF</Badge>
                            )}
                            {!laptop.inStock && (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="text-white font-semibold px-3 py-1 bg-red-500 rounded">
                                  Out of Stock
                                </span>
                              </div>
                            )}
                          </div>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <Badge
                                variant="outline"
                                className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                              >
                                {laptop.brand}
                              </Badge>
                              <div className="flex items-center">
                                <span className="text-yellow-500">★</span>
                                <span className="text-sm ml-1">{laptop.rating}</span>
                              </div>
                            </div>
                            <h3 className="font-semibold text-lg">{laptop.name}</h3>
                            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                              <p>{laptop.processor}</p>
                              <p>{laptop.gpu}</p>
                              <p>
                                {laptop.ram} RAM, {laptop.storage}
                              </p>
                              <p>{laptop.refreshRate} Display</p>
                            </div>
                            <div className="mt-4 flex items-center">
                              <span className="font-bold text-lg">NPR {laptop.price.toLocaleString()}</span>
                              {laptop.discount > 0 && (
                                <span className="text-sm text-muted-foreground line-through ml-2">
                                  NPR {laptop.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                          </CardContent>
                        </Link>
                        <CardFooter className="p-4 pt-0">
                          <Button className="w-full" disabled={!laptop.inStock}>
                            {laptop.inStock ? "Add to Cart" : "Out of Stock"}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="mid-range" className="mt-0">
                {/* Mid-range laptops content - handled by the filter logic */}
                {filteredLaptops.length === 0 ? (
                  <div className="text-center py-10">
                    <h3 className="text-lg font-medium">No mid-range gaming laptops found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters</p>
                    <Button variant="outline" className="mt-4" onClick={clearFilters}>
                      Clear All Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Same card grid as above */}
                    {filteredLaptops.map((laptop) => (
                      <Card key={laptop.id} className="overflow-hidden">
                        {/* Same card content as above */}
                        <Link href={`/product/${laptop.id}`}>
                          <div className="aspect-video overflow-hidden relative">
                            <img
                              src={laptop.image || "/placeholder.svg"}
                              alt={laptop.name}
                              className="w-full h-full object-cover transition-transform hover:scale-105"
                            />
                            {laptop.discount > 0 && (
                              <Badge className="absolute top-2 right-2 bg-red-500">{laptop.discount}% OFF</Badge>
                            )}
                            {!laptop.inStock && (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="text-white font-semibold px-3 py-1 bg-red-500 rounded">
                                  Out of Stock
                                </span>
                              </div>
                            )}
                          </div>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <Badge
                                variant="outline"
                                className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                              >
                                {laptop.brand}
                              </Badge>
                              <div className="flex items-center">
                                <span className="text-yellow-500">★</span>
                                <span className="text-sm ml-1">{laptop.rating}</span>
                              </div>
                            </div>
                            <h3 className="font-semibold text-lg">{laptop.name}</h3>
                            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                              <p>{laptop.processor}</p>
                              <p>{laptop.gpu}</p>
                              <p>
                                {laptop.ram} RAM, {laptop.storage}
                              </p>
                              <p>{laptop.refreshRate} Display</p>
                            </div>
                            <div className="mt-4 flex items-center">
                              <span className="font-bold text-lg">NPR {laptop.price.toLocaleString()}</span>
                              {laptop.discount > 0 && (
                                <span className="text-sm text-muted-foreground line-through ml-2">
                                  NPR {laptop.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                          </CardContent>
                        </Link>
                        <CardFooter className="p-4 pt-0">
                          <Button className="w-full" disabled={!laptop.inStock}>
                            {laptop.inStock ? "Add to Cart" : "Out of Stock"}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="high-end" className="mt-0">
                {/* High-end laptops content - handled by the filter logic */}
                {filteredLaptops.length === 0 ? (
                  <div className="text-center py-10">
                    <h3 className="text-lg font-medium">No high-end gaming laptops found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters</p>
                    <Button variant="outline" className="mt-4" onClick={clearFilters}>
                      Clear All Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Same card grid as above */}
                    {filteredLaptops.map((laptop) => (
                      <Card key={laptop.id} className="overflow-hidden">
                        {/* Same card content as above */}
                        <Link href={`/product/${laptop.id}`}>
                          <div className="aspect-video overflow-hidden relative">
                            <img
                              src={laptop.image || "/placeholder.svg"}
                              alt={laptop.name}
                              className="w-full h-full object-cover transition-transform hover:scale-105"
                            />
                            {laptop.discount > 0 && (
                              <Badge className="absolute top-2 right-2 bg-red-500">{laptop.discount}% OFF</Badge>
                            )}
                            {!laptop.inStock && (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <span className="text-white font-semibold px-3 py-1 bg-red-500 rounded">
                                  Out of Stock
                                </span>
                              </div>
                            )}
                          </div>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <Badge
                                variant="outline"
                                className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                              >
                                {laptop.brand}
                              </Badge>
                              <div className="flex items-center">
                                <span className="text-yellow-500">★</span>
                                <span className="text-sm ml-1">{laptop.rating}</span>
                              </div>
                            </div>
                            <h3 className="font-semibold text-lg">{laptop.name}</h3>
                            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                              <p>{laptop.processor}</p>
                              <p>{laptop.gpu}</p>
                              <p>
                                {laptop.ram} RAM, {laptop.storage}
                              </p>
                              <p>{laptop.refreshRate} Display</p>
                            </div>
                            <div className="mt-4 flex items-center">
                              <span className="font-bold text-lg">NPR {laptop.price.toLocaleString()}</span>
                              {laptop.discount > 0 && (
                                <span className="text-sm text-muted-foreground line-through ml-2">
                                  NPR {laptop.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                          </CardContent>
                        </Link>
                        <CardFooter className="p-4 pt-0">
                          <Button className="w-full" disabled={!laptop.inStock}>
                            {laptop.inStock ? "Add to Cart" : "Out of Stock"}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Gaming Laptop Comparison Table */}
      <div className="mt-12 mb-12">
        <h2 className="text-2xl font-bold mb-6">Gaming Laptop Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Model</th>
                <th className="border p-3 text-left">Processor</th>
                <th className="border p-3 text-left">GPU</th>
                <th className="border p-3 text-left">RAM</th>
                <th className="border p-3 text-left">Storage</th>
                <th className="border p-3 text-left">Display</th>
                <th className="border p-3 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {budgetGamingLaptops.map((laptop) => (
                <tr key={laptop.id} className="hover:bg-muted/50">
                  <td className="border p-3">
                    <Link href={`/product/${laptop.id}`} className="font-medium hover:underline">
                      {laptop.name}
                    </Link>
                  </td>
                  <td className="border p-3">{laptop.processor}</td>
                  <td className="border p-3">{laptop.gpu}</td>
                  <td className="border p-3">{laptop.ram}</td>
                  <td className="border p-3">{laptop.storage}</td>
                  <td className="border p-3">{laptop.refreshRate}</td>
                  <td className="border p-3">NPR {laptop.price.toLocaleString()}</td>
                </tr>
              ))}
              {highEndGamingLaptops.slice(0, 2).map((laptop) => (
                <tr key={laptop.id} className="hover:bg-muted/50">
                  <td className="border p-3">
                    <Link href={`/product/${laptop.id}`} className="font-medium hover:underline">
                      {laptop.name}
                    </Link>
                  </td>
                  <td className="border p-3">{laptop.processor}</td>
                  <td className="border p-3">{laptop.gpu}</td>
                  <td className="border p-3">{laptop.ram}</td>
                  <td className="border p-3">{laptop.storage}</td>
                  <td className="border p-3">{laptop.refreshRate}</td>
                  <td className="border p-3">NPR {laptop.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Gaming Laptop Buying Guide */}
      <div className="bg-muted/30 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Gaming Laptop Buying Guide</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            When shopping for a gaming laptop, there are several key factors to consider to ensure you get the best
            performance for your budget. Here's what to look for:
          </p>

          <h3>Graphics Card (GPU)</h3>
          <p>The GPU is the most important component for gaming performance. For modern gaming:</p>
          <ul>
            <li>
              <strong>Entry-level gaming:</strong> NVIDIA GTX 1650, RTX 3050
            </li>
            <li>
              <strong>Mid-range gaming:</strong> NVIDIA RTX 3060, RTX 3070
            </li>
            <li>
              <strong>High-end gaming:</strong> NVIDIA RTX 3070 Ti, RTX 3080, RTX 3080 Ti
            </li>
          </ul>

          <h3>Processor (CPU)</h3>
          <p>While the GPU is most important, you'll also need a capable CPU to avoid bottlenecks:</p>
          <ul>
            <li>
              <strong>Intel:</strong> Core i5-11th/12th gen or higher (i7 or i9 for high-end gaming)
            </li>
            <li>
              <strong>AMD:</strong> Ryzen 5 5000/6000 series or higher (Ryzen 7 or 9 for high-end gaming)
            </li>
          </ul>

          <h3>Display</h3>
          <p>For gaming, refresh rate is crucial:</p>
          <ul>
            <li>
              <strong>144Hz:</strong> Good for most gamers
            </li>
            <li>
              <strong>240Hz:</strong> Better for competitive gaming
            </li>
            <li>
              <strong>300Hz+:</strong> For professional esports players
            </li>
          </ul>
          <p>
            Also consider resolution (1080p is standard, 1440p for higher-end) and panel type (IPS for better colors, TN
            for faster response times).
          </p>

          <h3>RAM and Storage</h3>
          <p>
            <strong>RAM:</strong> 16GB is the sweet spot for most games. 8GB is the minimum, while 32GB is future-proof.
          </p>
          <p>
            <strong>Storage:</strong> SSD is essential for fast load times. 512GB is the minimum recommended, with 1TB
            being ideal.
          </p>

          <h3>Cooling</h3>
          <p>
            Gaming laptops generate a lot of heat. Look for models with advanced cooling solutions like vapor chambers,
            multiple heat pipes, and well-designed airflow systems.
          </p>

          <h3>Battery Life</h3>
          <p>
            Gaming laptops typically have poor battery life when gaming (1-2 hours). For better battery life during
            non-gaming tasks, look for laptops with NVIDIA Optimus or AMD equivalent technology that switches between
            integrated and dedicated graphics.
          </p>

          <p>
            Visit our store or contact our gaming experts for personalized recommendations based on your gaming needs
            and budget.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What's the difference between a gaming laptop and a regular laptop?</AccordionTrigger>
            <AccordionContent>
              Gaming laptops differ from regular laptops in several key ways: they have dedicated graphics cards (GPUs)
              instead of integrated graphics, more powerful processors, better cooling systems, higher refresh rate
              displays, and often more RAM. These components allow them to run demanding games smoothly, but they
              typically cost more, are heavier, and have shorter battery life than regular laptops.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How long do gaming laptops typically last?</AccordionTrigger>
            <AccordionContent>
              A good gaming laptop should last 3-5 years for gaming at high settings. The hardware will continue to
              function beyond that, but you may need to lower graphics settings for newer games. With proper maintenance
              and care, the physical laptop can last 5-7 years or more for general use.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Can I upgrade my gaming laptop?</AccordionTrigger>
            <AccordionContent>
              Gaming laptops have limited upgrade options compared to desktops. In most models, you can upgrade the RAM
              and storage (SSD/HDD). However, critical components like the CPU and GPU are typically soldered to the
              motherboard and cannot be upgraded. Some high-end models have more upgrade options, but they're exceptions
              rather than the rule.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Do I need a cooling pad for my gaming laptop?</AccordionTrigger>
            <AccordionContent>
              While not absolutely necessary, a cooling pad can help maintain lower temperatures during extended gaming
              sessions. This can potentially improve performance by reducing thermal throttling and extend the lifespan
              of your laptop's components. It's especially beneficial for intensive gaming in warm environments or if
              your laptop tends to run hot.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>What's the best gaming laptop brand?</AccordionTrigger>
            <AccordionContent>
              There's no single "best" brand as each has strengths and weaknesses. ASUS ROG and MSI are known for
              high-performance gaming laptops. Alienware (Dell) offers premium builds with excellent cooling. Lenovo
              Legion provides good value. Razer offers sleek designs with powerful components. The best choice depends
              on your specific needs, preferences, and budget.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Customer Reviews */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold mr-4">
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
              <p className="text-muted-foreground">
                "I bought the MSI GE76 Raider for my gaming needs and I couldn't be happier. The performance is
                outstanding, and I can play all the latest games at max settings. The cooling system is impressive and
                keeps temperatures in check even during long gaming sessions."
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold mr-4">
                  SP
                </div>
                <div>
                  <h4 className="font-semibold">Suman Pradhan</h4>
                  <div className="flex text-yellow-500">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The ASUS ROG Strix G15 I purchased from Laptop Pasal exceeded my expectations. The 300Hz display is
                amazing for competitive gaming, and the RGB lighting adds a nice touch. Customer service was excellent,
                and they helped me choose the perfect laptop for my needs."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
