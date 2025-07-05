import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock search results data
const searchResults = [
  {
    id: 1,
    name: "MacBook Pro 16-inch",
    category: "Laptop",
    brand: "Apple",
    price: 250000,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Dell XPS 15",
    category: "Laptop",
    brand: "Dell",
    price: 180000,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "HP Spectre x360",
    category: "Laptop",
    brand: "HP",
    price: 165000,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Lenovo ThinkPad X1",
    category: "Laptop",
    brand: "Lenovo",
    price: 145000,
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "ASUS ROG Zephyrus",
    category: "Gaming Laptop",
    brand: "ASUS",
    price: 220000,
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Acer Predator Helios",
    category: "Gaming Laptop",
    brand: "Acer",
    price: 195000,
    rating: 4.4,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    name: "Microsoft Surface Laptop",
    category: "Laptop",
    brand: "Microsoft",
    price: 175000,
    rating: 4.3,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    name: "Razer Blade 15",
    category: "Gaming Laptop",
    brand: "Razer",
    price: 240000,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 9,
    name: "MSI GS66 Stealth",
    category: "Gaming Laptop",
    brand: "MSI",
    price: 210000,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 10,
    name: "LG Gram 17",
    category: "Laptop",
    brand: "LG",
    price: 160000,
    rating: 4.2,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 11,
    name: "Apple Magic Mouse",
    category: "Accessories",
    brand: "Apple",
    price: 12000,
    rating: 4.0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 12,
    name: "Logitech MX Master 3",
    category: "Accessories",
    brand: "Logitech",
    price: 9500,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=300",
  },
]

// Filter options
const brands = ["Apple", "Dell", "HP", "Lenovo", "ASUS", "Acer", "Microsoft", "Razer", "MSI", "LG", "Logitech"]
const categories = ["Laptop", "Gaming Laptop", "Accessories"]
const priceRanges = [
  "Under Rs. 50,000",
  "Rs. 50,000 - Rs. 100,000",
  "Rs. 100,000 - Rs. 150,000",
  "Rs. 150,000 - Rs. 200,000",
  "Above Rs. 200,000",
]

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const query = searchParams.q || ""

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        <p className="text-muted-foreground">
          {searchResults.length} results found for &quot;{query}&quot;
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-1/4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  Reset All
                </Button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category}`} />
                      <label
                        htmlFor={`category-${category}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Brands</h3>
                <div className="space-y-2">
                  {brands.slice(0, 6).map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox id={`brand-${brand}`} />
                      <label
                        htmlFor={`brand-${brand}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                  <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                    Show more
                  </Button>
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <div key={range} className="flex items-center space-x-2">
                      <Checkbox id={`price-${range}`} />
                      <label
                        htmlFor={`price-${range}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {range}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Slider */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium">Custom Price Range</h3>
                  <span className="text-xs text-muted-foreground">Rs. 0 - Rs. 300,000</span>
                </div>
                <Slider defaultValue={[0, 300000]} max={300000} step={5000} className="mb-2" />
                <div className="flex items-center space-x-2">
                  <Input type="number" placeholder="Min" className="h-8 text-xs" />
                  <span className="text-muted-foreground">-</span>
                  <Input type="number" placeholder="Max" className="h-8 text-xs" />
                  <Button size="sm" className="h-8">
                    Go
                  </Button>
                </div>
              </div>

              {/* Rating */}
              <div>
                <h3 className="text-sm font-medium mb-3">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox id={`rating-${rating}`} />
                      <label
                        htmlFor={`rating-${rating}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {rating}+ Stars
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Results */}
        <div className="w-full lg:w-3/4">
          <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
            <div className="flex flex-1 items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search products..." className="pl-8" defaultValue={query} />
              </div>
              <Button>Search</Button>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="md:hidden">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] relative">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <div className="text-sm text-muted-foreground mb-1">
                      {product.brand} • {product.category}
                    </div>
                    <h3 className="font-medium mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="font-bold">Rs. {product.price.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">★ {product.rating}</div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                3
              </Button>
              <span className="mx-1">...</span>
              <Button variant="outline" size="sm" className="h-8 w-8">
                8
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
