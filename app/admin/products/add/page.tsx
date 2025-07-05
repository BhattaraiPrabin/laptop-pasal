"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Trash2, Upload } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data for categories, brands, etc.
const categories = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Gaming Laptop" },
  { id: 3, name: "Accessories" },
]

const subcategories = [
  { id: 1, categoryId: 1, name: "Ultrabook" },
  { id: 2, categoryId: 1, name: "Business Laptop" },
  { id: 3, categoryId: 1, name: "Student Laptop" },
  { id: 4, categoryId: 2, name: "High-End Gaming" },
  { id: 5, categoryId: 2, name: "Mid-Range Gaming" },
  { id: 6, categoryId: 2, name: "Budget Gaming" },
  { id: 7, categoryId: 3, name: "Mouse" },
  { id: 8, categoryId: 3, name: "Keyboard" },
  { id: 9, categoryId: 3, name: "Headphones" },
]

const brands = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Dell" },
  { id: 3, name: "HP" },
  { id: 4, name: "Lenovo" },
  { id: 5, name: "ASUS" },
  { id: 6, name: "Acer" },
  { id: 7, name: "Microsoft" },
  { id: 8, name: "Razer" },
  { id: 9, name: "MSI" },
  { id: 10, name: "LG" },
  { id: 11, name: "Logitech" },
]

const processors = [
  "Intel Core i3",
  "Intel Core i5",
  "Intel Core i7",
  "Intel Core i9",
  "AMD Ryzen 3",
  "AMD Ryzen 5",
  "AMD Ryzen 7",
  "AMD Ryzen 9",
  "Apple M1",
  "Apple M2",
  "Apple M3",
]

const ramOptions = ["4GB", "8GB", "16GB", "32GB", "64GB"]
const storageOptions = ["128GB SSD", "256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD"]
const graphicsOptions = [
  "Integrated",
  "NVIDIA GTX 1650",
  "NVIDIA GTX 1660 Ti",
  "NVIDIA RTX 3050",
  "NVIDIA RTX 3060",
  "NVIDIA RTX 3070",
  "NVIDIA RTX 3080",
  "NVIDIA RTX 4060",
  "NVIDIA RTX 4070",
  "NVIDIA RTX 4080",
  "NVIDIA RTX 4090",
  "AMD Radeon RX 6600",
  "AMD Radeon RX 6700 XT",
  "AMD Radeon RX 6800 XT",
  "Apple M1",
  "Apple M2",
  "Apple M3",
]

export default function AddProductPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [images, setImages] = useState<string[]>(["/placeholder.svg?height=200&width=300"])
  const [loading, setLoading] = useState(false)

  // Filter subcategories based on selected category
  const filteredSubcategories = subcategories.filter(
    (sub) => sub.categoryId === Number(selectedCategory) || selectedCategory === "",
  )

  // Handle image upload
  const handleImageUpload = () => {
    // In a real app, this would handle file upload
    // For now, we'll just add another placeholder
    setImages([...images, "/placeholder.svg?height=200&width=300"])
  }

  // Handle image removal
  const handleRemoveImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      // Navigate to products page after successful submission
      router.push("/admin/products")
    }, 1500)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/admin/products">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => router.push("/admin/products")}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Saving..." : "Save Product"}
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs defaultValue="general" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="pricing">Pricing & Inventory</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>

          {/* General Tab */}
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Information</CardTitle>
                <CardDescription>Basic product information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name *</Label>
                    <Input id="name" placeholder="Enter product name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU *</Label>
                    <Input id="sku" placeholder="Enter SKU" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value)} required>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id.toString()}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subcategory">Subcategory</Label>
                    <Select>
                      <SelectTrigger id="subcategory" disabled={selectedCategory === ""}>
                        <SelectValue placeholder="Select subcategory" />
                      </SelectTrigger>
                      <SelectContent>
                        {filteredSubcategories.map((subcategory) => (
                          <SelectItem key={subcategory.id} value={subcategory.id.toString()}>
                            {subcategory.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand *</Label>
                    <Select required>
                      <SelectTrigger id="brand">
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        {brands.map((brand) => (
                          <SelectItem key={brand.id} value={brand.id.toString()}>
                            {brand.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model">Model Number</Label>
                    <Input id="model" placeholder="Enter model number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="short-description">Short Description *</Label>
                  <Textarea
                    id="short-description"
                    placeholder="Enter a brief description"
                    className="min-h-[80px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Full Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter detailed product description"
                    className="min-h-[200px]"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="featured" />
                  <Label htmlFor="featured">Featured Product</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="active" defaultChecked />
                  <Label htmlFor="active">Active (Visible on site)</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Specifications Tab */}
          <TabsContent value="specifications">
            <Card>
              <CardHeader>
                <CardTitle>Product Specifications</CardTitle>
                <CardDescription>Technical details of the product</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Processor Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Processor</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="processor-type">Processor Type</Label>
                      <Select>
                        <SelectTrigger id="processor-type">
                          <SelectValue placeholder="Select processor" />
                        </SelectTrigger>
                        <SelectContent>
                          {processors.map((processor) => (
                            <SelectItem key={processor} value={processor}>
                              {processor}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="processor-speed">Processor Speed (GHz)</Label>
                      <Input id="processor-speed" type="text" placeholder="e.g., 3.2 GHz" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="processor-cores">Processor Cores</Label>
                      <Input id="processor-cores" type="number" placeholder="e.g., 8" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="processor-cache">Cache (MB)</Label>
                      <Input id="processor-cache" type="text" placeholder="e.g., 12 MB" />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Memory Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Memory (RAM)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ram-size">RAM Size</Label>
                      <Select>
                        <SelectTrigger id="ram-size">
                          <SelectValue placeholder="Select RAM size" />
                        </SelectTrigger>
                        <SelectContent>
                          {ramOptions.map((ram) => (
                            <SelectItem key={ram} value={ram}>
                              {ram}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ram-type">RAM Type</Label>
                      <Input id="ram-type" type="text" placeholder="e.g., DDR4" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ram-speed">RAM Speed</Label>
                    <Input id="ram-speed" type="text" placeholder="e.g., 3200 MHz" />
                  </div>
                </div>

                <Separator />

                {/* Storage Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Storage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="storage-type">Storage Type & Size</Label>
                      <Select>
                        <SelectTrigger id="storage-type">
                          <SelectValue placeholder="Select storage" />
                        </SelectTrigger>
                        <SelectContent>
                          {storageOptions.map((storage) => (
                            <SelectItem key={storage} value={storage}>
                              {storage}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="storage-interface">Storage Interface</Label>
                      <Input id="storage-interface" type="text" placeholder="e.g., PCIe NVMe" />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Graphics Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Graphics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="graphics-card">Graphics Card</Label>
                      <Select>
                        <SelectTrigger id="graphics-card">
                          <SelectValue placeholder="Select graphics" />
                        </SelectTrigger>
                        <SelectContent>
                          {graphicsOptions.map((graphics) => (
                            <SelectItem key={graphics} value={graphics}>
                              {graphics}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="graphics-memory">Graphics Memory</Label>
                      <Input id="graphics-memory" type="text" placeholder="e.g., 6GB GDDR6" />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Display Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Display</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="display-size">Display Size</Label>
                      <Input id="display-size" type="text" placeholder="e.g., 15.6 inches" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="display-resolution">Display Resolution</Label>
                      <Input id="display-resolution" type="text" placeholder="e.g., 1920 x 1080" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="display-type">Display Type</Label>
                      <Input id="display-type" type="text" placeholder="e.g., IPS, OLED" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="refresh-rate">Refresh Rate</Label>
                      <Input id="refresh-rate" type="text" placeholder="e.g., 144Hz" />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Other Specifications */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Other Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="operating-system">Operating System</Label>
                      <Input id="operating-system" type="text" placeholder="e.g., Windows 11 Home" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="battery">Battery</Label>
                      <Input id="battery" type="text" placeholder="e.g., 4-cell, 70Wh" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight</Label>
                      <Input id="weight" type="text" placeholder="e.g., 2.1 kg" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dimensions">Dimensions</Label>
                      <Input id="dimensions" type="text" placeholder="e.g., 35.7 x 23.5 x 1.9 cm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ports">Ports & Connectivity</Label>
                    <Textarea
                      id="ports"
                      placeholder="List all ports and connectivity options"
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                {/* Additional Features */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Additional Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="backlit-keyboard" />
                      <Label htmlFor="backlit-keyboard">Backlit Keyboard</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="fingerprint-reader" />
                      <Label htmlFor="fingerprint-reader">Fingerprint Reader</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="touchscreen" />
                      <Label htmlFor="touchscreen">Touchscreen</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="webcam" />
                      <Label htmlFor="webcam">HD Webcam</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Images Tab */}
          <TabsContent value="images">
            <Card>
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>Upload and manage product images</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative border rounded-md overflow-hidden">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Product image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute top-2 right-2">
                        <Button
                          variant="destructive"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => handleRemoveImage(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      {index === 0 && (
                        <div className="absolute top-2 left-2">
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                            Main Image
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                  <div
                    className="border border-dashed rounded-md flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-accent transition-colors"
                    onClick={handleImageUpload}
                  >
                    <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm font-medium">Upload Image</p>
                    <p className="text-xs text-muted-foreground mt-1">Click to add more images</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                <p>Recommended image size: 1200 x 900 pixels. Maximum file size: 5MB.</p>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing">
            <Card>
              <CardHeader>
                <CardTitle>Pricing & Inventory</CardTitle>
                <CardDescription>Manage product pricing and stock information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="regular-price">Regular Price (Rs.) *</Label>
                    <Input id="regular-price" type="number" placeholder="0.00" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sale-price">Sale Price (Rs.)</Label>
                    <Input id="sale-price" type="number" placeholder="0.00" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cost-price">Cost Price (Rs.)</Label>
                    <Input id="cost-price" type="number" placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tax-class">Tax Class</Label>
                    <Select>
                      <SelectTrigger id="tax-class">
                        <SelectValue placeholder="Select tax class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard Rate</SelectItem>
                        <SelectItem value="reduced">Reduced Rate</SelectItem>
                        <SelectItem value="zero">Zero Rate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU *</Label>
                    <Input id="sku-inventory" placeholder="Stock Keeping Unit" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stock-quantity">Stock Quantity *</Label>
                    <Input id="stock-quantity" type="number" placeholder="0" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="low-stock-threshold">Low Stock Threshold</Label>
                    <Input id="low-stock-threshold" type="number" placeholder="5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stock-status">Stock Status</Label>
                    <Select>
                      <SelectTrigger id="stock-status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-stock">In Stock</SelectItem>
                        <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                        <SelectItem value="on-backorder">On Backorder</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="manage-stock" defaultChecked />
                  <Label htmlFor="manage-stock">Manage Stock</Label>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Shipping</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input id="weight-shipping" type="number" step="0.01" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="length">Length (cm)</Label>
                      <Input id="length" type="number" step="0.01" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="width">Width (cm)</Label>
                      <Input id="width" type="number" step="0.01" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input id="height" type="number" step="0.01" placeholder="0.00" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shipping-class">Shipping Class</Label>
                      <Select>
                        <SelectTrigger id="shipping-class">
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="express">Express</SelectItem>
                          <SelectItem value="free">Free Shipping</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Tab */}
          <TabsContent value="seo">
            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
                <CardDescription>Optimize product for search engines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meta-title">Meta Title</Label>
                  <Input id="meta-title" placeholder="Enter meta title" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Recommended length: 50-60 characters. Leave blank to use product name.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meta-description">Meta Description</Label>
                  <Textarea id="meta-description" placeholder="Enter meta description" className="min-h-[100px]" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Recommended length: 150-160 characters. Leave blank to use product short description.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meta-keywords">Meta Keywords</Label>
                  <Input id="meta-keywords" placeholder="Enter keywords separated by commas" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Example: laptop, gaming, high performance, 16GB RAM
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">URL Slug</Label>
                  <Input id="slug" placeholder="product-url-slug" />
                  <p className="text-xs text-muted-foreground mt-1">
                    The last part of the URL. Leave blank to generate from product name.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="canonical-url">Canonical URL</Label>
                  <Input id="canonical-url" placeholder="https://laptoppasal.com/product/..." />
                  <p className="text-xs text-muted-foreground mt-1">Leave blank to use the default product URL.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Social Media</h3>
                  <div className="space-y-2">
                    <Label htmlFor="og-title">Open Graph Title</Label>
                    <Input id="og-title" placeholder="Enter Open Graph title" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Title that appears when shared on Facebook. Leave blank to use meta title.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="og-description">Open Graph Description</Label>
                    <Textarea
                      id="og-description"
                      placeholder="Enter Open Graph description"
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Description that appears when shared on Facebook. Leave blank to use meta description.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="twitter-title">Twitter Title</Label>
                    <Input id="twitter-title" placeholder="Enter Twitter title" />
                    <p className="text-xs text-muted-foreground mt-1">
                      Title that appears when shared on Twitter. Leave blank to use meta title.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="twitter-description">Twitter Description</Label>
                    <Textarea
                      id="twitter-description"
                      placeholder="Enter Twitter description"
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Description that appears when shared on Twitter. Leave blank to use meta description.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="indexable" defaultChecked />
                  <Label htmlFor="indexable">Allow search engines to index this product</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  )
}
