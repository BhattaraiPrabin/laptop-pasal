"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductFilters, { type FilterState } from "@/components/filters/product-filters"
import { Grid, List } from "lucide-react"

// Mock data for content creation laptops
const contentCreationLaptops = [
  {
    id: 401,
    name: "MacBook Pro 16",
    brand: "Apple",
    processor: "Apple M2 Max",
    ram: "32GB",
    storage: "1TB SSD",
    price: 350000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "16-inch Liquid Retina XDR (3456 x 2234)",
    colorGamut: "P3 Wide Color",
    gpu: "32-core GPU",
  },
  {
    id: 402,
    name: "Dell XPS 17",
    brand: "Dell",
    processor: "Intel i9-12900HK",
    ram: "32GB",
    storage: "1TB SSD",
    price: 280000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "17-inch UHD+ (3840 x 2400)",
    colorGamut: "100% Adobe RGB",
    gpu: "NVIDIA RTX 3060",
  },
  {
    id: 403,
    name: "ASUS ProArt StudioBook 16",
    brand: "Asus",
    processor: "AMD Ryzen 9 5900HX",
    ram: "32GB",
    storage: "1TB SSD",
    price: 260000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "16-inch OLED 4K (3840 x 2400)",
    colorGamut: "100% DCI-P3",
    gpu: "NVIDIA RTX 3070",
  },
  {
    id: 404,
    name: "MSI Creator Z16",
    brand: "MSI",
    processor: "Intel i9-12900H",
    ram: "32GB",
    storage: "2TB SSD",
    price: 270000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "16-inch QHD+ (2560 x 1600)",
    colorGamut: "100% DCI-P3",
    gpu: "NVIDIA RTX 3060",
  },
  {
    id: 405,
    name: "Gigabyte AERO 16",
    brand: "Gigabyte",
    processor: "Intel i9-12900HK",
    ram: "32GB",
    storage: "1TB SSD",
    price: 250000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "16-inch AMOLED 4K (3840 x 2400)",
    colorGamut: "100% DCI-P3",
    gpu: "NVIDIA RTX 3080 Ti",
  },
  {
    id: 406,
    name: "HP ZBook Studio G9",
    brand: "HP",
    processor: "Intel i9-12900HK",
    ram: "32GB",
    storage: "1TB SSD",
    price: 290000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "16-inch 4K OLED (3840 x 2160)",
    colorGamut: "100% DCI-P3",
    gpu: "NVIDIA RTX A5500",
  },
  {
    id: 407,
    name: "Lenovo ThinkPad P1 Gen 5",
    brand: "Lenovo",
    processor: "Intel i9-12900H",
    ram: "32GB",
    storage: "1TB SSD",
    price: 260000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "16-inch WQUXGA (3840 x 2400)",
    colorGamut: "100% Adobe RGB",
    gpu: "NVIDIA RTX A5500",
  },
  {
    id: 408,
    name: "Razer Blade 17",
    brand: "Razer",
    processor: "Intel i9-12900H",
    ram: "32GB",
    storage: "1TB SSD",
    price: 300000,
    condition: "New",
    image: "/placeholder.svg?height=200&width=300",
    display: "17.3-inch 4K (3840 x 2160)",
    colorGamut: "100% DCI-P3",
    gpu: "NVIDIA RTX 3080 Ti",
  },
]

export default function ContentCreationLaptopsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [filteredLaptops, setFilteredLaptops] = useState(contentCreationLaptops)

  const handleFilterChange = (filters: FilterState) => {
    const filtered = contentCreationLaptops.filter((laptop) => {
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

  const sortProducts = (products: typeof contentCreationLaptops, sortType: string) => {
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
      <div className="bg-gradient-to-r from-orange-900 to-orange-700 text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4">Content Creation Laptops</h1>
        <p className="text-lg max-w-3xl">
          Powerful laptops designed for designers, photographers, video editors, and creative professionals. These
          laptops feature high-resolution displays with accurate color reproduction, powerful processors, dedicated
          graphics, and ample memory to handle demanding creative applications and workflows.
        </p>
      </div>

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
                        <p>{laptop.gpu}</p>
                        <p>
                          {laptop.ram} RAM, {laptop.storage}
                        </p>
                        <p>Display: {laptop.display}</p>
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
                        <p>{laptop.gpu}</p>
                        <p>
                          {laptop.ram} RAM, {laptop.storage}
                        </p>
                        <p>Display: {laptop.display}</p>
                        <p>Color Gamut: {laptop.colorGamut}</p>
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
