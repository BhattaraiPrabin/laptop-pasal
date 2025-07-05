"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Check, Upload, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Form schema
const formSchema = z.object({
  // Basic Info
  brand: z.string().min(1, "Brand is required"),
  model: z.string().min(1, "Model is required"),
  serialNumber: z.string().min(1, "Serial number is required"),

  // Specifications
  processor: z.string().min(1, "Processor is required"),
  ram: z.string().min(1, "RAM is required"),
  storage: z.string().min(1, "Storage is required"),
  graphics: z.string().optional(),
  screenSize: z.string().min(1, "Screen size is required"),

  // Condition
  condition: z.enum(["Like New", "Excellent", "Good", "Fair", "Poor"]),
  age: z.string().min(1, "Age is required"),
  issues: z.string().optional(),

  // Contact Info
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(1, "Address is required"),

  // Additional Info
  askingPrice: z.string().min(1, "Asking price is required"),
  additionalInfo: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function SellLaptopFormWizard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("basic-info")
  const [progress, setProgress] = useState(25)
  const [images, setImages] = useState<File[]>([])
  const [imageUrls, setImageUrls] = useState<string[]>([])

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brand: "",
      model: "",
      serialNumber: "",
      processor: "",
      ram: "",
      storage: "",
      graphics: "",
      screenSize: "",
      condition: "Good",
      age: "",
      issues: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      askingPrice: "",
      additionalInfo: "",
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = form

  const handleTabChange = (value: string) => {
    setActiveTab(value)

    // Update progress based on tab
    switch (value) {
      case "basic-info":
        setProgress(25)
        break
      case "specifications":
        setProgress(50)
        break
      case "condition":
        setProgress(75)
        break
      case "contact-info":
        setProgress(100)
        break
      default:
        setProgress(25)
    }
  }

  const handleNext = () => {
    switch (activeTab) {
      case "basic-info":
        setActiveTab("specifications")
        setProgress(50)
        break
      case "specifications":
        setActiveTab("condition")
        setProgress(75)
        break
      case "condition":
        setActiveTab("contact-info")
        setProgress(100)
        break
      default:
        break
    }
  }

  const handleBack = () => {
    switch (activeTab) {
      case "specifications":
        setActiveTab("basic-info")
        setProgress(25)
        break
      case "condition":
        setActiveTab("specifications")
        setProgress(50)
        break
      case "contact-info":
        setActiveTab("condition")
        setProgress(75)
        break
      default:
        break
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)
      setImages((prev) => [...prev, ...fileArray])

      // Create URLs for preview
      const newImageUrls = fileArray.map((file) => URL.createObjectURL(file))
      setImageUrls((prev) => [...prev, ...newImageUrls])
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))

    // Revoke object URL to avoid memory leaks
    URL.revokeObjectURL(imageUrls[index])
    setImageUrls((prev) => prev.filter((_, i) => i !== index))
  }

  const onSubmit = async (data: FormValues) => {
    // In a real app, you would upload the images and form data to your server
    console.log("Form data:", data)
    console.log("Images:", images)

    // Mock form submission
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to success page
      router.push("/sell-my-laptop/success")
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Sell Your Laptop</h2>
        <p className="text-muted-foreground">Complete the form below to get an offer for your laptop</p>
      </div>

      <div className="mb-6">
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>Basic Info</span>
          <span>Specifications</span>
          <span>Condition</span>
          <span>Contact Info</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="basic-info">Basic Info</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="condition">Condition</TabsTrigger>
            <TabsTrigger value="contact-info">Contact Info</TabsTrigger>
          </TabsList>

          <TabsContent value="basic-info" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brand">
                  Brand <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={(value) => setValue("brand", value)} defaultValue={watch("brand")}>
                  <SelectTrigger id="brand">
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Apple">Apple</SelectItem>
                    <SelectItem value="Dell">Dell</SelectItem>
                    <SelectItem value="HP">HP</SelectItem>
                    <SelectItem value="Lenovo">Lenovo</SelectItem>
                    <SelectItem value="Asus">Asus</SelectItem>
                    <SelectItem value="Acer">Acer</SelectItem>
                    <SelectItem value="MSI">MSI</SelectItem>
                    <SelectItem value="Samsung">Samsung</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.brand && <p className="text-red-500 text-sm">{errors.brand.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="model">
                  Model <span className="text-red-500">*</span>
                </Label>
                <Input id="model" {...register("model")} />
                {errors.model && <p className="text-red-500 text-sm">{errors.model.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="serialNumber">
                  Serial Number <span className="text-red-500">*</span>
                </Label>
                <Input id="serialNumber" {...register("serialNumber")} />
                {errors.serialNumber && <p className="text-red-500 text-sm">{errors.serialNumber.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Upload Images (Max 5)</Label>
              <div className="border border-dashed border-gray-300 rounded-lg p-4">
                <div className="flex items-center justify-center flex-col">
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">Drag and drop images or click to browse</p>
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="max-w-xs"
                    disabled={images.length >= 5}
                  />
                </div>

                {imageUrls.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-4">
                    {imageUrls.map((url, index) => (
                      <div key={index} className="relative">
                        <img
                          src={url || "/placeholder.svg"}
                          alt={`Laptop image ${index + 1}`}
                          className="h-24 w-full object-cover rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="processor">
                  Processor <span className="text-red-500">*</span>
                </Label>
                <Input id="processor" {...register("processor")} />
                {errors.processor && <p className="text-red-500 text-sm">{errors.processor.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="ram">
                  RAM <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={(value) => setValue("ram", value)} defaultValue={watch("ram")}>
                  <SelectTrigger id="ram">
                    <SelectValue placeholder="Select RAM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4GB">4GB</SelectItem>
                    <SelectItem value="8GB">8GB</SelectItem>
                    <SelectItem value="16GB">16GB</SelectItem>
                    <SelectItem value="32GB">32GB</SelectItem>
                    <SelectItem value="64GB">64GB</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.ram && <p className="text-red-500 text-sm">{errors.ram.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="storage">
                  Storage <span className="text-red-500">*</span>
                </Label>
                <Input id="storage" {...register("storage")} placeholder="e.g., 512GB SSD" />
                {errors.storage && <p className="text-red-500 text-sm">{errors.storage.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="graphics">Graphics Card</Label>
                <Input id="graphics" {...register("graphics")} placeholder="e.g., NVIDIA GeForce RTX 3060" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="screenSize">
                  Screen Size <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={(value) => setValue("screenSize", value)} defaultValue={watch("screenSize")}>
                  <SelectTrigger id="screenSize">
                    <SelectValue placeholder="Select screen size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="13 inch">13 inch</SelectItem>
                    <SelectItem value="14 inch">14 inch</SelectItem>
                    <SelectItem value="15.6 inch">15.6 inch</SelectItem>
                    <SelectItem value="16 inch">16 inch</SelectItem>
                    <SelectItem value="17 inch">17 inch</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.screenSize && <p className="text-red-500 text-sm">{errors.screenSize.message}</p>}
              </div>
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="condition" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="condition">
                  Condition <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={(value: any) => setValue("condition", value)} defaultValue={watch("condition")}>
                  <SelectTrigger id="condition">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Like New">Like New</SelectItem>
                    <SelectItem value="Excellent">Excellent</SelectItem>
                    <SelectItem value="Good">Good</SelectItem>
                    <SelectItem value="Fair">Fair</SelectItem>
                    <SelectItem value="Poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">
                  Age <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={(value) => setValue("age", value)} defaultValue={watch("age")}>
                  <SelectTrigger id="age">
                    <SelectValue placeholder="Select age" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Less than 1 year">Less than 1 year</SelectItem>
                    <SelectItem value="1-2 years">1-2 years</SelectItem>
                    <SelectItem value="2-3 years">2-3 years</SelectItem>
                    <SelectItem value="3-5 years">3-5 years</SelectItem>
                    <SelectItem value="More than 5 years">More than 5 years</SelectItem>
                  </SelectContent>
                </Select>
                {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="issues">Known Issues or Defects</Label>
              <Textarea
                id="issues"
                {...register("issues")}
                placeholder="Describe any known issues, defects, or repairs"
                rows={4}
              />
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="contact-info" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input id="name" {...register("name")} />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input id="email" type="email" {...register("email")} />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone <span className="text-red-500">*</span>
                </Label>
                <Input id="phone" {...register("phone")} />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">
                  Address <span className="text-red-500">*</span>
                </Label>
                <Input id="address" {...register("address")} />
                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="askingPrice">
                Asking Price (NPR) <span className="text-red-500">*</span>
              </Label>
              <Input id="askingPrice" {...register("askingPrice")} />
              {errors.askingPrice && <p className="text-red-500 text-sm">{errors.askingPrice.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                {...register("additionalInfo")}
                placeholder="Any additional information you'd like to share"
                rows={4}
              />
            </div>

            <Card className="bg-muted">
              <CardContent className="p-4">
                <div className="flex items-start space-x-2">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm">
                      By submitting this form, you agree to our{" "}
                      <a href="#" className="text-primary underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-primary underline">
                        Privacy Policy
                      </a>
                      . We'll review your information and contact you with an offer within 24-48 hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button type="submit">Submit Request</Button>
            </div>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  )
}
