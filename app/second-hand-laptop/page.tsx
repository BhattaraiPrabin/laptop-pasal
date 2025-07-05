"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Filter,
  SlidersHorizontal,
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Star,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Grid,
  List,
} from "lucide-react";
import CountdownPopup from "@/components/countdown-popup";

// Mock data for second-hand products
const products = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Used ${
    [
      "HP Pavilion",
      "Dell Inspiron",
      "Lenovo ThinkPad",
      "Asus VivoBook",
      "Acer Aspire",
      "MacBook Pro",
    ][i % 6]
  } ${i + 1}`,
  brand: ["HP", "Dell", "Lenovo", "Asus", "Acer", "Apple"][i % 6],
  image: "/placeholder.svg?height=300&width=300",
  price: 30000 + i * 5000,
  originalPrice: 50000 + i * 5000,
  specs: `Intel Core i${(i % 5) + 3}, ${((i % 2) + 1) * 8}GB RAM, ${
    ((i % 2) + 1) * 256
  }GB SSD`,
  condition: ["Excellent", "Good", "Very Good"][i % 3],
  age: [`${(i % 3) + 1} year${i % 3 === 0 ? "" : "s"} old`],
  warranty: i % 2 === 0 ? "3 months warranty" : null,
  rating: (3.5 + (i % 5) * 0.3).toFixed(1),
  reviews: 5 + i * 3,
  batteryHealth: ["85%", "90%", "95%", "80%"][i % 4],
  cosmetic: [
    "Minor scratches on lid",
    "Like new",
    "Few scratches on bottom",
    "Excellent condition",
  ][i % 4],
}));

// Condition guide data
const conditionGuide = [
  {
    condition: "Excellent",
    description:
      "Like new with minimal to no signs of use. Perfect or near-perfect cosmetic condition.",
    batteryHealth: "90-100%",
    performance: "Like new performance, no issues whatsoever.",
    warranty: "6 months warranty included",
  },
  {
    condition: "Very Good",
    description:
      "Minor signs of use but in great working condition. May have very slight cosmetic marks.",
    batteryHealth: "80-90%",
    performance: "Performs like new with no noticeable issues.",
    warranty: "3-6 months warranty included",
  },
  {
    condition: "Good",
    description:
      "Shows normal signs of use. May have visible scratches or wear marks but nothing major.",
    batteryHealth: "70-80%",
    performance: "Works well for all normal tasks with no significant issues.",
    warranty: "3 months warranty included",
  },
  {
    condition: "Fair",
    description:
      "Noticeable signs of use. Has cosmetic imperfections and may show significant wear.",
    batteryHealth: "60-70%",
    performance:
      "Functions properly but may show some slowdown compared to new.",
    warranty: "1 month warranty included",
  },
];

// Customer testimonials
const testimonials = [
  {
    name: "Ramesh Sharma",
    profession: "College Student",
    quote:
      "I bought a used ThinkPad for my studies and it's been perfect. Saved me almost 50% compared to a new one, and it works flawlessly.",
    rating: 5,
    laptop: "Lenovo ThinkPad X1 Carbon (Used)",
  },
  {
    name: "Sita Gurung",
    profession: "Graphic Designer",
    quote:
      "Was skeptical about buying used, but the MacBook Pro I got was in excellent condition. Battery health was even better than advertised!",
    rating: 4.5,
    laptop: "MacBook Pro 2019 (Used)",
  },
  {
    name: "Bijay Thapa",
    profession: "Small Business Owner",
    quote:
      "Great value for money. The 3-month warranty gave me peace of mind, and I've had no issues with my laptop for over a year now.",
    rating: 5,
    laptop: "Dell XPS 13 (Used)",
  },
];

export default function SecondHandLaptopPage() {
  const [priceRange, setPriceRange] = useState([10000, 80000]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Set expiry date for countdown (7 days from now)
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Countdown Popup */}
      <CountdownPopup
        expiryDate={expiryDate}
        title="Flash Sale on Used Laptops!"
        description="Get an extra 10% off on all second-hand laptops. Limited time offer!"
        buttonText="Shop Now"
        buttonLink="#products"
      />

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Second Hand Laptops in Nepal
        </h1>
        <p className="text-muted-foreground">
          Find quality used laptops at affordable prices. All laptops are
          thoroughly tested and certified.
        </p>
      </div>

      {/* Certification Banner */}
      <div className="bg-primary/10 rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-primary/20 p-3 rounded-full">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-bold mb-1">Laptop Pasal Certified</h2>
            <p className="text-muted-foreground">
              All our second-hand laptops undergo rigorous testing and quality
              checks. We offer warranty on all used laptops for your peace of
              mind.
            </p>
          </div>
          <Button className="shrink-0">Learn More</Button>
        </div>
      </div>

      {/* Flash Sale Banner */}
      <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-1">Flash Sale - Ends Soon!</h2>
            <p className="opacity-90">
              Get an extra 10% off on all second-hand laptops. Use code: USED10
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">Offer ends in: 7 days</span>
          </div>
        </div>
      </div>

      {/* Tabs for different content sections */}
      <Tabs defaultValue="products" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="products" id="products">
            Browse Laptops
          </TabsTrigger>
          <TabsTrigger value="condition-guide">Condition Guide</TabsTrigger>
          <TabsTrigger value="buying-tips">Buying Tips</TabsTrigger>
          <TabsTrigger value="testimonials">Customer Reviews</TabsTrigger>
        </TabsList>

        {/* Products Tab */}
        <TabsContent value="products">
          <div className="mt-6">
            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters - Desktop */}
              <div className="hidden lg:block w-64 shrink-0">
                <div className="sticky top-24 space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Price Range</h3>
                      <span className="text-sm text-muted-foreground">
                        NPR {priceRange[0].toLocaleString()} -{" "}
                        {priceRange[1].toLocaleString()}
                      </span>
                    </div>
                    <div className="space-y-4">
                      <Slider
                        value={priceRange}
                        min={10000}
                        max={150000}
                        step={1000}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex items-center gap-4">
                        <Input
                          type="number"
                          placeholder="Min"
                          className="h-9"
                          value={priceRange[0]}
                          onChange={(e) =>
                            setPriceRange([
                              Number.parseInt(e.target.value) || 10000,
                              priceRange[1],
                            ])
                          }
                        />
                        <span>-</span>
                        <Input
                          type="number"
                          placeholder="Max"
                          className="h-9"
                          value={priceRange[1]}
                          onChange={(e) =>
                            setPriceRange([
                              priceRange[0],
                              Number.parseInt(e.target.value) || 150000,
                            ])
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Brand</h3>
                    <div className="space-y-2">
                      {[
                        "HP",
                        "Dell",
                        "Lenovo",
                        "Asus",
                        "Acer",
                        "Apple",
                        "MSI",
                        "Samsung",
                      ].map((brand) => (
                        <div key={brand} className="flex items-center gap-2">
                          <Checkbox id={`brand-${brand.toLowerCase()}`} />
                          <label
                            htmlFor={`brand-${brand.toLowerCase()}`}
                            className="text-sm cursor-pointer"
                          >
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Condition</h3>
                    <div className="space-y-2">
                      {["Excellent", "Very Good", "Good", "Fair"].map(
                        (condition) => (
                          <div
                            key={condition}
                            className="flex items-center gap-2"
                          >
                            <Checkbox
                              id={`condition-${condition
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            />
                            <label
                              htmlFor={`condition-${condition
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="text-sm cursor-pointer"
                            >
                              {condition}
                            </label>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Age</h3>
                    <div className="space-y-2">
                      {[
                        "Less than 1 year",
                        "1-2 years",
                        "2-3 years",
                        "3-4 years",
                        "4+ years",
                      ].map((age) => (
                        <div key={age} className="flex items-center gap-2">
                          <Checkbox
                            id={`age-${age.toLowerCase().replace(/\s+/g, "-")}`}
                          />
                          <label
                            htmlFor={`age-${age
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="text-sm cursor-pointer"
                          >
                            {age}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Processor</h3>
                    <div className="space-y-2">
                      {[
                        "Intel Core i3",
                        "Intel Core i5",
                        "Intel Core i7",
                        "Intel Core i9",
                        "AMD Ryzen 3",
                        "AMD Ryzen 5",
                        "AMD Ryzen 7",
                      ].map((processor) => (
                        <div
                          key={processor}
                          className="flex items-center gap-2"
                        >
                          <Checkbox
                            id={`processor-${processor
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          />
                          <label
                            htmlFor={`processor-${processor
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="text-sm cursor-pointer"
                          >
                            {processor}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">RAM</h3>
                    <div className="space-y-2">
                      {["4GB", "8GB", "16GB", "32GB"].map((ram) => (
                        <div key={ram} className="flex items-center gap-2">
                          <Checkbox id={`ram-${ram.toLowerCase()}`} />
                          <label
                            htmlFor={`ram-${ram.toLowerCase()}`}
                            className="text-sm cursor-pointer"
                          >
                            {ram}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Storage Type</h3>
                    <div className="space-y-2">
                      {["SSD", "HDD", "Hybrid"].map((storage) => (
                        <div key={storage} className="flex items-center gap-2">
                          <Checkbox id={`storage-${storage.toLowerCase()}`} />
                          <label
                            htmlFor={`storage-${storage.toLowerCase()}`}
                            className="text-sm cursor-pointer"
                          >
                            {storage}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Warranty</h3>
                    <div className="space-y-2">
                      {["With Warranty", "No Warranty"].map((warranty) => (
                        <div key={warranty} className="flex items-center gap-2">
                          <Checkbox
                            id={`warranty-${warranty
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          />
                          <label
                            htmlFor={`warranty-${warranty
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="text-sm cursor-pointer"
                          >
                            {warranty}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                  <Button variant="outline" className="w-full">
                    Reset Filters
                  </Button>
                </div>
              </div>

              {/* Products */}
              <div className="flex-1">
                {/* Filters - Mobile */}
                <div className="lg:hidden mb-6">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 w-full"
                      onClick={() => setShowMobileFilters(!showMobileFilters)}
                    >
                      <Filter className="h-4 w-4" />
                      <span>Filter</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 w-full"
                    >
                      <SlidersHorizontal className="h-4 w-4" />
                      <span>Sort</span>
                    </Button>
                  </div>

                  {showMobileFilters && (
                    <div className="mt-4 p-4 border rounded-lg">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Price Range</h3>
                          <Slider
                            value={priceRange}
                            min={10000}
                            max={150000}
                            step={1000}
                            onValueChange={setPriceRange}
                          />
                          <div className="flex justify-between mt-2">
                            <span className="text-sm">
                              Rs. {priceRange[0].toLocaleString()}
                            </span>
                            <span className="text-sm">
                              Rs. {priceRange[1].toLocaleString()}
                            </span>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2">Condition</h3>
                          <div className="flex flex-wrap gap-2">
                            {["Excellent", "Very Good", "Good", "Fair"].map(
                              (condition) => (
                                <div
                                  key={condition}
                                  className="flex items-center gap-1"
                                >
                                  <Checkbox
                                    id={`mobile-condition-${condition
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                  />
                                  <label
                                    htmlFor={`mobile-condition-${condition
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                    className="text-sm cursor-pointer"
                                  >
                                    {condition}
                                  </label>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowMobileFilters(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => setShowMobileFilters(false)}
                          >
                            Apply Filters
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sort and View Options - Desktop */}
                <div className="hidden lg:flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      {products.length} products
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
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
                    <span className="text-sm">Sort by:</span>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[180px] h-9">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low-high">
                          Price: Low to High
                        </SelectItem>
                        <SelectItem value="price-high-low">
                          Price: High to Low
                        </SelectItem>
                        <SelectItem value="condition-best">
                          Condition: Best First
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Products Grid */}
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      : "space-y-6"
                  }
                >
                  {products.map((product) =>
                    viewMode === "grid" ? (
                      <Card key={product.id} className="group overflow-hidden">
                        <CardContent className="p-0 relative">
                          <Badge className="absolute top-3 left-3 z-10">
                            {product.condition}
                          </Badge>
                          {product.warranty && (
                            <Badge
                              variant="outline"
                              className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground"
                            >
                              {product.warranty}
                            </Badge>
                          )}
                          <Link
                            href={`/product/used-${product.id}`}
                            className="block overflow-hidden"
                          >
                            <div className="product-image-container w-full flex items-center justify-center p-4">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="max-h-full object-contain transition-transform group-hover:scale-105"
                              />
                            </div>
                          </Link>
                          <div className="absolute right-3 bottom-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              variant="secondary"
                              size="icon"
                              className="rounded-full h-9 w-9 shadow-md"
                            >
                              <Heart className="h-5 w-5" />
                              <span className="sr-only">Add to wishlist</span>
                            </Button>
                            <Button
                              variant="secondary"
                              size="icon"
                              className="rounded-full h-9 w-9 shadow-md"
                            >
                              <ShoppingCart className="h-5 w-5" />
                              <span className="sr-only">Add to cart</span>
                            </Button>
                          </div>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start p-4">
                          <div className="text-sm text-muted-foreground mb-1">
                            {product.brand} • {product.age}
                          </div>
                          <Link
                            href={`/product/used-${product.id}`}
                            className="font-medium hover:underline"
                          >
                            {product.name}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">
                            {product.specs}
                          </p>
                          <div className="flex items-center gap-1 mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i <
                                    Math.floor(
                                      Number.parseFloat(
                                        product.rating.toString()
                                      )
                                    )
                                      ? "fill-yellow-400 text-yellow-400"
                                      : i <
                                        Math.ceil(
                                          Number.parseFloat(
                                            product.rating.toString()
                                          )
                                        )
                                      ? "fill-yellow-400/50 text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              ({product.reviews})
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="font-bold">
                              Rs. {product.price.toLocaleString()}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                Rs. {product.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <Button className="w-full mt-3">Add to Cart</Button>
                        </CardFooter>
                      </Card>
                    ) : (
                      <Card key={product.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 relative">
                            <Badge className="absolute top-3 left-3 z-10">
                              {product.condition}
                            </Badge>
                            {product.warranty && (
                              <Badge
                                variant="outline"
                                className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground"
                              >
                                {product.warranty}
                              </Badge>
                            )}
                            <Link
                              href={`/product/used-${product.id}`}
                              className="block"
                            >
                              <div className="aspect-square w-full flex items-center justify-center p-4">
                                <img
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.name}
                                  className="max-h-full object-contain"
                                />
                              </div>
                            </Link>
                          </div>
                          <div className="p-4 md:w-2/3">
                            <div className="text-sm text-muted-foreground mb-1">
                              {product.brand} • {product.age}
                            </div>
                            <Link
                              href={`/product/used-${product.id}`}
                              className="font-medium text-lg hover:underline"
                            >
                              {product.name}
                            </Link>
                            <div className="flex items-center gap-1 mt-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i <
                                      Math.floor(
                                        Number.parseFloat(
                                          product.rating.toString()
                                        )
                                      )
                                        ? "fill-yellow-400 text-yellow-400"
                                        : i <
                                          Math.ceil(
                                            Number.parseFloat(
                                              product.rating.toString()
                                            )
                                          )
                                        ? "fill-yellow-400/50 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-muted-foreground">
                                ({product.reviews})
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">
                              {product.specs}
                            </p>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              <div className="text-sm">
                                <span className="text-muted-foreground">
                                  Battery Health:{" "}
                                </span>
                                <span className="font-medium">
                                  {product.batteryHealth}
                                </span>
                              </div>
                              <div className="text-sm">
                                <span className="text-muted-foreground">
                                  Cosmetic:{" "}
                                </span>
                                <span className="font-medium">
                                  {product.cosmetic}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-lg">
                                  Rs. {product.price.toLocaleString()}
                                </span>
                                {product.originalPrice && (
                                  <span className="text-sm text-muted-foreground line-through">
                                    Rs. {product.originalPrice.toLocaleString()}
                                  </span>
                                )}
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="icon">
                                  <Heart className="h-4 w-4" />
                                </Button>
                                <Button>Add to Cart</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    )
                  )}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center mt-8">
                  <div className="flex items-center gap-1">
                    <Button variant="outline" size="icon" disabled>
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous page</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 w-9 font-medium"
                    >
                      1
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 w-9 font-medium"
                    >
                      2
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 w-9 font-medium"
                    >
                      3
                    </Button>
                    <span className="mx-1">...</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 w-9 font-medium"
                    >
                      8
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next page</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Condition Guide Tab */}
        <TabsContent value="condition-guide">
          <div className="mt-6">
            <div className="bg-card rounded-lg border shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">
                Understanding Our Condition Ratings
              </h2>
              <p className="text-muted-foreground mb-6">
                We carefully inspect and grade all our second-hand laptops to
                ensure transparency and help you make an informed decision.
                Here's what each condition rating means:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {conditionGuide.map((item) => (
                  <div key={item.condition} className="border rounded-lg p-5">
                    <h3 className="text-lg font-semibold mb-2">
                      {item.condition}
                    </h3>
                    <div className="space-y-3 text-sm">
                      <p>{item.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="font-medium">Battery Health:</span>
                          <p className="text-muted-foreground">
                            {item.batteryHealth}
                          </p>
                        </div>
                        <div>
                          <span className="font-medium">Performance:</span>
                          <p className="text-muted-foreground">
                            {item.performance}
                          </p>
                        </div>
                      </div>
                      <div className="pt-2 border-t">
                        <span className="font-medium text-primary">
                          {item.warranty}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                  Our Testing Process
                </h3>
                <p className="mb-4">
                  Every second-hand laptop goes through our comprehensive
                  30-point inspection process before being listed for sale:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-lg mb-2">
                      Hardware Diagnostics
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-4">
                      <li>Full system diagnostics</li>
                      <li>Memory testing</li>
                      <li>Storage device health check</li>
                      <li>Battery health assessment</li>
                      <li>Display and keyboard testing</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-lg mb-2">
                      Performance Testing
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-4">
                      <li>CPU and GPU stress tests</li>
                      <li>Thermal performance monitoring</li>
                      <li>Boot time and responsiveness</li>
                      <li>Software compatibility checks</li>
                      <li>Audio and video playback</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-lg mb-2">
                      Cosmetic Inspection
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-4">
                      <li>Detailed exterior examination</li>
                      <li>Screen inspection for dead pixels</li>
                      <li>Keyboard and trackpad assessment</li>
                      <li>Port functionality verification</li>
                      <li>Hinge and chassis integrity check</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Buying Tips Tab */}
        <TabsContent value="buying-tips">
          <div className="mt-6">
            <div className="bg-card rounded-lg border shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">
                Tips for Buying Second-Hand Laptops
              </h2>
              <p className="text-muted-foreground mb-6">
                Purchasing a used laptop can be a great way to save money, but
                it's important to make an informed decision. Here are some tips
                to help you get the best value:
              </p>

              <div className="space-y-6">
                <div className="bg-muted/30 p-5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">
                    What to Consider
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                        Prioritize These Features
                      </h4>
                      <ul className="space-y-2 text-sm pl-6 list-disc">
                        <li>
                          <span className="font-medium">Battery Health:</span>{" "}
                          Look for laptops with at least 80% battery health for
                          reasonable battery life.
                        </li>
                        <li>
                          <span className="font-medium">SSD Storage:</span> SSDs
                          are much faster than HDDs and have no moving parts,
                          making them more reliable for used laptops.
                        </li>
                        <li>
                          <span className="font-medium">
                            Warranty Coverage:
                          </span>{" "}
                          Always choose a used laptop with some warranty period
                          for peace of mind.
                        </li>
                        <li>
                          <span className="font-medium">Recent Models:</span>{" "}
                          Newer models (1-3 years old) offer better performance
                          and longer useful life ahead.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                        Watch Out For
                      </h4>
                      <ul className="space-y-2 text-sm pl-6 list-disc">
                        <li>
                          <span className="font-medium">
                            Overheating Issues:
                          </span>{" "}
                          Excessive heat during operation could indicate cooling
                          problems.
                        </li>
                        <li>
                          <span className="font-medium">Screen Problems:</span>{" "}
                          Check for dead pixels, uneven brightness, or color
                          issues.
                        </li>
                        <li>
                          <span className="font-medium">Keyboard Wear:</span>{" "}
                          Heavily worn keys might indicate intensive use.
                        </li>
                        <li>
                          <span className="font-medium">Port Damage:</span>{" "}
                          Ensure all ports are functional and not physically
                          damaged.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Best Models for Long-Term Value
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border p-3 text-left">
                            Brand & Model
                          </th>
                          <th className="border p-3 text-left">Known For</th>
                          <th className="border p-3 text-left">
                            Ideal Age When Buying Used
                          </th>
                          <th className="border p-3 text-left">
                            Expected Additional Lifespan
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-background">
                          <td className="border p-3 font-medium">
                            Lenovo ThinkPad X1 Carbon
                          </td>
                          <td className="border p-3">
                            Durability, keyboard quality, business features
                          </td>
                          <td className="border p-3">1-3 years</td>
                          <td className="border p-3">3-5 years</td>
                        </tr>
                        <tr className="bg-muted/50">
                          <td className="border p-3 font-medium">
                            MacBook Pro
                          </td>
                          <td className="border p-3">
                            Build quality, display, performance longevity
                          </td>
                          <td className="border p-3">1-2 years</td>
                          <td className="border p-3">4-6 years</td>
                        </tr>
                        <tr className="bg-background">
                          <td className="border p-3 font-medium">
                            Dell XPS 13/15
                          </td>
                          <td className="border p-3">
                            Display quality, performance, design
                          </td>
                          <td className="border p-3">1-2 years</td>
                          <td className="border p-3">3-4 years</td>
                        </tr>
                        <tr className="bg-muted/50">
                          <td className="border p-3 font-medium">
                            HP EliteBook
                          </td>
                          <td className="border p-3">
                            Business features, security, reliability
                          </td>
                          <td className="border p-3">1-3 years</td>
                          <td className="border p-3">3-4 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-primary/10 p-5 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">
                    Why Buy From Laptop Pasal?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center text-center p-4">
                      <ShieldCheck className="h-10 w-10 text-primary mb-3" />
                      <h4 className="font-medium">Certified Quality</h4>
                      <p className="text-sm text-muted-foreground">
                        Every laptop undergoes rigorous testing and is certified
                        to meet our quality standards.
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                      <CheckCircle2 className="h-10 w-10 text-primary mb-3" />
                      <h4 className="font-medium">Warranty Included</h4>
                      <p className="text-sm text-muted-foreground">
                        All our second-hand laptops come with a warranty, giving
                        you peace of mind with your purchase.
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                      <Star className="h-10 w-10 text-primary mb-3" />
                      <h4 className="font-medium">After-Sales Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Our technical team is available to help with any issues
                        or questions after your purchase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Testimonials Tab */}
        <TabsContent value="testimonials">
          <div className="mt-6">
            <div className="bg-card rounded-lg border shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">Customer Experiences</h2>
              <p className="text-muted-foreground mb-6">
                Hear from customers who have purchased second-hand laptops from
                us and their experiences.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="border rounded-lg p-5">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.profession}
                        </p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(testimonial.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : i < Math.ceil(testimonial.rating)
                                ? "fill-yellow-400/50 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm italic">"{testimonial.quote}"</p>
                    </div>
                    <div className="text-sm pt-2 border-t">
                      <span className="text-muted-foreground">Purchased: </span>
                      <span className="font-medium">{testimonial.laptop}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-muted/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">
                  Customer Satisfaction
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <p className="mb-2">
                      Based on feedback from our customers who purchased
                      second-hand laptops:
                    </p>
                    <ul className="text-sm space-y-1 list-disc pl-5">
                      <li>
                        95% reported their laptop performed better than expected
                      </li>
                      <li>98% would recommend buying a used laptop from us</li>
                      <li>
                        Less than 2% needed to use their warranty for repairs
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-5xl font-bold text-primary">4.8</div>
                    <div className="flex mt-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h- 클릭 here to read more w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400/80 text-yellow-400" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Average rating from 342 reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* SEO Content */}
      <div className="mt-12 bg-muted/50 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Second Hand Laptops in Nepal</h2>
        <div className="prose prose-sm dark:prose-invert">
          <p>
            Looking for affordable laptops in Nepal? Laptop Pasal offers a wide
            range of certified second-hand laptops from top brands like HP,
            Dell, Lenovo, Asus, Acer, and Apple at competitive prices. Our used
            laptops are perfect for students, professionals, and anyone looking
            for quality laptops at budget-friendly prices.
          </p>
          <p>
            All our second-hand laptops undergo rigorous testing and quality
            checks to ensure they meet our high standards. We offer warranty on
            all used laptops for your peace of mind. Our collection includes
            various specifications including different processors, RAM options,
            storage types, and more.
          </p>
          <p>Why buy a second-hand laptop from Laptop Pasal?</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>All laptops are thoroughly tested and certified</li>
            <li>Warranty on all used laptops</li>
            <li>30-day money-back guarantee</li>
            <li>Free delivery within Kathmandu Valley</li>
            <li>After-sales service and support</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium">
                How do you ensure the quality of second-hand laptops?
              </h4>
              <p className="text-muted-foreground">
                All our used laptops go through a comprehensive 30-point quality
                check including hardware diagnostics, battery health assessment,
                and performance testing.
              </p>
            </div>
            <div>
              <h4 className="font-medium">
                What warranty do you offer on used laptops?
              </h4>
              <p className="text-muted-foreground">
                Depending on the condition and age, we offer 1-6 months warranty
                on all second-hand laptops.
              </p>
            </div>
            <div>
              <h4 className="font-medium">
                Can I return a second-hand laptop if I'm not satisfied?
              </h4>
              <p className="text-muted-foreground">
                Yes, we offer a 30-day money-back guarantee if you're not
                satisfied with your purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
