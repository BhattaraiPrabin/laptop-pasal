"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductFilters, { type FilterState } from "@/components/filters/product-filters"
import { Grid, List } from "lucide-react"

// Mock data for laptops
const allLaptops = [
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
  },
  {
    id: 2,
    name: "Dell XPS 15",
    brand: "Dell",
    processor: "Intel i7",
    ram: "16GB",
    storage: "1TB SSD",
    price: 180000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "HP Spectre x360",
    brand: "HP",
    processor: "Intel i5",
    ram: "8GB",
    storage: "512GB SSD",
    price: 150000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Lenovo ThinkPad X1 Carbon",
    brand: "Lenovo",
    processor: "Intel i7",
    ram: "16GB",
    storage: "1TB SSD",
    price: 170000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Asus ROG Zephyrus G14",
    brand: "Asus",
    processor: "AMD Ryzen 9",
    ram: "32GB",
    storage: "1TB SSD",
    price: 220000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Acer Swift 5",
    brand: "Acer",
    processor: "Intel i5",
    ram: "8GB",
    storage: "512GB SSD",
    price: 120000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    name: "MSI GS66 Stealth",
    brand: "MSI",
    processor: "Intel i9",
    ram: "32GB",
    storage: "2TB SSD",
    price: 280000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    name: "Samsung Galaxy Book Pro",
    brand: "Samsung",
    processor: "Intel i7",
    ram: "16GB",
    storage: "512GB SSD",
    price: 160000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 9,
    name: "Acer Aspire 5",
    brand: "Acer",
    processor: "Intel i3",
    ram: "8GB",
    storage: "256GB SSD",
    price: 75000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 10,
    name: "Lenovo IdeaPad 3",
    brand: "Lenovo",
    processor: "AMD Ryzen 5",
    ram: "8GB",
    storage: "512GB SSD",
    price: 85000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 11,
    name: "HP Pavilion 15",
    brand: "HP",
    processor: "Intel i5",
    ram: "8GB",
    storage: "512GB SSD",
    price: 95000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 12,
    name: "Dell Inspiron 15",
    brand: "Dell",
    processor: "Intel i5",
    ram: "8GB",
    storage: "256GB SSD",
    price: 90000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
  },
]

// Price ranges
const priceRanges = {
  "under-100k": { min: 0, max: 100000, title: "Laptops Under NPR 100,000" },
  "100k-150k": { min: 100000, max: 150000, title: "Laptops NPR 100,000 - 150,000" },
  "150k-200k": { min: 150000, max: 200000, title: "Laptops NPR 150,000 - 200,000" },
  "above-200k": { min: 200000, max: 1000000, title: "Laptops Above NPR 200,000" },
}

export default function LaptopByPricePage({ params }: { params: { range: string } }) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [laptops, setLaptops] = useState<typeof allLaptops>([])
  const [filteredLaptops, setFilteredLaptops] = useState<typeof allLaptops>([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000, title: "Laptops" })

  useEffect(() => {
    // Get the price range from the URL parameter
    const range = params.range
    const selectedRange = priceRanges[range as keyof typeof priceRanges]

    if (selectedRange) {
      setPriceRange(selectedRange)

      // Filter laptops by price range
      const laptopsInRange = allLaptops.filter(
        (laptop) => laptop.price >= selectedRange.min && laptop.price <= selectedRange.max,
      )

      setLaptops(laptopsInRange)
      setFilteredLaptops(laptopsInRange)
    }
  }, [params.range])

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
      <h1 className="text-3xl font-bold mb-6">{priceRange.title}</h1>

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
                        <p>Condition: {laptop.condition}</p>
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
    </div>
  )
}
