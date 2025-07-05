"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, DollarSign, Clock, ShieldCheck, ChevronRight, ChevronLeft } from "lucide-react"
import { FileUpload, type FileWithPreview } from "@/components/ui/file-upload"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  laptopDetailsSchema,
  laptopConditionSchema,
  contactInfoSchema,
  type LaptopDetailsFormValues,
  type LaptopConditionFormValues,
  type ContactInfoFormValues,
  type SellLaptopFormValues,
} from "@/lib/validators/sell-laptop-schema"

const steps = [
  { id: "laptop-details", name: "Laptop Details" },
  { id: "condition", name: "Condition" },
  { id: "contact-info", name: "Contact Info" },
  { id: "review", name: "Review" },
]

export default function SellMyLaptopPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Partial<SellLaptopFormValues>>({
    laptopDetails: {} as LaptopDetailsFormValues,
    laptopCondition: {} as LaptopConditionFormValues,
    contactInfo: {} as ContactInfoFormValues,
  })
  const [photos, setPhotos] = useState<FileWithPreview[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Create form for each step
  const laptopDetailsForm = useForm<LaptopDetailsFormValues>({
    resolver: zodResolver(laptopDetailsSchema),
    defaultValues: formData.laptopDetails,
  })

  const laptopConditionForm = useForm<LaptopConditionFormValues>({
    resolver: zodResolver(laptopConditionSchema),
    defaultValues: formData.laptopCondition,
  })

  const contactInfoForm = useForm<ContactInfoFormValues>({
    resolver: zodResolver(contactInfoSchema),
    defaultValues: formData.contactInfo,
  })

  // Handle next step
  const handleNext = async () => {
    try {
      if (currentStep === 0) {
        const values = await laptopDetailsForm.handleSubmit((data) => data)()
        setFormData((prev) => ({ ...prev, laptopDetails: values }))
      } else if (currentStep === 1) {
        const values = await laptopConditionForm.handleSubmit((data) => data)()
        setFormData((prev) => ({ ...prev, laptopCondition: { ...values, photos } }))
      } else if (currentStep === 2) {
        const values = await contactInfoForm.handleSubmit((data) => data)()
        setFormData((prev) => ({ ...prev, contactInfo: values }))
      }
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    } catch (error) {
      // Form validation failed
      console.error("Form validation failed", error)
    }
  }

  // Handle back step
  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  // Handle form submission
  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      // In a real app, you would send this data to your API
      console.log("Submitting form data:", formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSuccess(true)
      // Redirect to success page or show success message
      setTimeout(() => {
        router.push("/sell-my-laptop/success")
      }, 2000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Sell Your Used Laptop</h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Get the best price for your used laptop with our hassle-free selling process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-semibold" onClick={() => setCurrentStep(0)}>
                  Get an Instant Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Sell Your Laptop"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selling your laptop with us is quick and easy. Follow these simple steps to get the best price for your
            device.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-primary/10 bg-card">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 rounded-full p-3 mb-4">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold">
                    1
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fill the Form</h3>
                <p className="text-muted-foreground">
                  Provide details about your laptop including brand, model, specifications, and condition.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/10 bg-card">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 rounded-full p-3 mb-4">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold">
                    2
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get a Quote</h3>
                <p className="text-muted-foreground">
                  Receive an instant quote based on the details you provided and current market value.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/10 bg-card">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 rounded-full p-3 mb-4">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold">
                    3
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Schedule Pickup</h3>
                <p className="text-muted-foreground">
                  If you accept the quote, schedule a convenient time for pickup or drop-off.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/10 bg-card">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 rounded-full p-3 mb-4">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold">
                    4
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
                <p className="text-muted-foreground">
                  After verification, receive payment through your preferred method - cash, bank transfer, or store
                  credit.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sell Form */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Sell Your Laptop</CardTitle>
                <CardDescription>Fill in the details below to get an instant quote for your laptop.</CardDescription>
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    {steps.map((step, index) => (
                      <div
                        key={step.id}
                        className={`text-xs font-medium ${
                          currentStep >= index ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {step.name}
                      </div>
                    ))}
                  </div>
                  <Progress value={(currentStep + 1) * 25} max={100} />
                </div>
              </CardHeader>
              <CardContent>
                {currentStep === 0 && (
                  <Form {...laptopDetailsForm}>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={laptopDetailsForm.control}
                          name="brand"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Brand *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select brand" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="hp">HP</SelectItem>
                                  <SelectItem value="dell">Dell</SelectItem>
                                  <SelectItem value="lenovo">Lenovo</SelectItem>
                                  <SelectItem value="asus">Asus</SelectItem>
                                  <SelectItem value="acer">Acer</SelectItem>
                                  <SelectItem value="apple">Apple</SelectItem>
                                  <SelectItem value="msi">MSI</SelectItem>
                                  <SelectItem value="samsung">Samsung</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={laptopDetailsForm.control}
                          name="model"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Model *</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Pavilion 15, XPS 13, etc." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={laptopDetailsForm.control}
                          name="processor"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Processor *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select processor" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="intel-i3">Intel Core i3</SelectItem>
                                  <SelectItem value="intel-i5">Intel Core i5</SelectItem>
                                  <SelectItem value="intel-i7">Intel Core i7</SelectItem>
                                  <SelectItem value="intel-i9">Intel Core i9</SelectItem>
                                  <SelectItem value="amd-ryzen3">AMD Ryzen 3</SelectItem>
                                  <SelectItem value="amd-ryzen5">AMD Ryzen 5</SelectItem>
                                  <SelectItem value="amd-ryzen7">AMD Ryzen 7</SelectItem>
                                  <SelectItem value="amd-ryzen9">AMD Ryzen 9</SelectItem>
                                  <SelectItem value="apple-m1">Apple M1</SelectItem>
                                  <SelectItem value="apple-m2">Apple M2</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={laptopDetailsForm.control}
                          name="ram"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>RAM *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select RAM" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="4gb">4GB</SelectItem>
                                  <SelectItem value="8gb">8GB</SelectItem>
                                  <SelectItem value="16gb">16GB</SelectItem>
                                  <SelectItem value="32gb">32GB</SelectItem>
                                  <SelectItem value="64gb">64GB</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={laptopDetailsForm.control}
                          name="storageType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Storage Type *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select storage type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="ssd">SSD</SelectItem>
                                  <SelectItem value="hdd">HDD</SelectItem>
                                  <SelectItem value="hybrid">Hybrid</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={laptopDetailsForm.control}
                          name="storageCapacity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Storage Capacity *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select capacity" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="128gb">128GB</SelectItem>
                                  <SelectItem value="256gb">256GB</SelectItem>
                                  <SelectItem value="512gb">512GB</SelectItem>
                                  <SelectItem value="1tb">1TB</SelectItem>
                                  <SelectItem value="2tb">2TB</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={laptopDetailsForm.control}
                          name="graphics"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Graphics Card</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. NVIDIA GeForce GTX 1650" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex justify-end">
                        <Button type="button" onClick={handleNext}>
                          Next <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </Form>
                )}

                {currentStep === 1 && (
                  <Form {...laptopConditionForm}>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={laptopConditionForm.control}
                          name="age"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Age of Laptop *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select age" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                                  <SelectItem value="1-2">1-2 years</SelectItem>
                                  <SelectItem value="2-3">2-3 years</SelectItem>
                                  <SelectItem value="3-4">3-4 years</SelectItem>
                                  <SelectItem value="4-5">4-5 years</SelectItem>
                                  <SelectItem value="more-than-5">More than 5 years</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={laptopConditionForm.control}
                          name="physicalCondition"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Physical Condition *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select condition" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="like-new">Like New (No scratches or dents)</SelectItem>
                                  <SelectItem value="excellent">
                                    Excellent (Minor scratches, not visible from distance)
                                  </SelectItem>
                                  <SelectItem value="good">Good (Visible scratches, no dents)</SelectItem>
                                  <SelectItem value="fair">Fair (Visible scratches and minor dents)</SelectItem>
                                  <SelectItem value="poor">Poor (Heavy scratches and dents)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={laptopConditionForm.control}
                          name="functionalCondition"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Functional Condition *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select functional condition" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="perfect">Perfect (Everything works like new)</SelectItem>
                                  <SelectItem value="good">
                                    Good (Minor issues that don't affect performance)
                                  </SelectItem>
                                  <SelectItem value="fair">Fair (Some issues that affect performance)</SelectItem>
                                  <SelectItem value="poor">Poor (Major issues, needs repair)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={laptopConditionForm.control}
                          name="batteryHealth"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Battery Health *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select battery health" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="excellent">Excellent (Lasts 4+ hours)</SelectItem>
                                  <SelectItem value="good">Good (Lasts 2-4 hours)</SelectItem>
                                  <SelectItem value="fair">Fair (Lasts 1-2 hours)</SelectItem>
                                  <SelectItem value="poor">Poor (Lasts less than 1 hour)</SelectItem>
                                  <SelectItem value="needs-replacement">Needs Replacement</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={laptopConditionForm.control}
                        name="additionalInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any other details about your laptop that might affect its value"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div>
                        <FormLabel>Upload Photos (Optional)</FormLabel>
                        <FileUpload
                          value={photos}
                          onChange={setPhotos}
                          maxFiles={5}
                          maxSize={5 * 1024 * 1024} // 5MB
                        />
                      </div>

                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={handleBack}>
                          <ChevronLeft className="mr-2 h-4 w-4" /> Back
                        </Button>
                        <Button type="button" onClick={handleNext}>
                          Next <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </Form>
                )}

                {currentStep === 2 && (
                  <Form {...contactInfoForm}>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={contactInfoForm.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactInfoForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your email address" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactInfoForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactInfoForm.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Location *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select location" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="kathmandu">Kathmandu</SelectItem>
                                  <SelectItem value="lalitpur">Lalitpur</SelectItem>
                                  <SelectItem value="bhaktapur">Bhaktapur</SelectItem>
                                  <SelectItem value="pokhara">Pokhara</SelectItem>
                                  <SelectItem value="biratnagar">Biratnagar</SelectItem>
                                  <SelectItem value="birgunj">Birgunj</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactInfoForm.control}
                          name="preferredContact"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Contact Method *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select contact method" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="phone">Phone</SelectItem>
                                  <SelectItem value="email">Email</SelectItem>
                                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                  <SelectItem value="viber">Viber</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactInfoForm.control}
                          name="preferredPayment"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Payment Method *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select payment method" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="cash">Cash</SelectItem>
                                  <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                                  <SelectItem value="esewa">eSewa</SelectItem>
                                  <SelectItem value="khalti">Khalti</SelectItem>
                                  <SelectItem value="store-credit">Store Credit</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={contactInfoForm.control}
                        name="terms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>I agree to the terms and conditions</FormLabel>
                              <FormDescription>
                                By submitting this form, I agree to the{" "}
                                <Link href="/terms" className="text-primary hover:underline">
                                  Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy" className="text-primary hover:underline">
                                  Privacy Policy
                                </Link>
                                .
                              </FormDescription>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={handleBack}>
                          <ChevronLeft className="mr-2 h-4 w-4" /> Back
                        </Button>
                        <Button type="button" onClick={handleNext}>
                          Review <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </Form>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Review Your Information</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium mb-2">Laptop Details</h4>
                          <div className="bg-muted p-4 rounded-md space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="text-sm text-muted-foreground">Brand:</div>
                              <div className="text-sm font-medium capitalize">
                                {formData.laptopDetails?.brand || "Not provided"}
                              </div>
                              <div className="text-sm text-muted-foreground">Model:</div>
                              <div className="text-sm font-medium">
                                {formData.laptopDetails?.model || "Not provided"}
                              </div>
                              <div className="text-sm text-muted-foreground">Processor:</div>
                              <div className="text-sm font-medium">
                                {formData.laptopDetails?.processor || "Not provided"}
                              </div>
                              <div className="text-sm text-muted-foreground">RAM:</div>
                              <div className="text-sm font-medium">{formData.laptopDetails?.ram || "Not provided"}</div>
                              <div className="text-sm text-muted-foreground">Storage:</div>
                              <div className="text-sm font-medium">
                                {formData.laptopDetails?.storageType}{" "}
                                {formData.laptopDetails?.storageCapacity || "Not provided"}
                              </div>
                              <div className="text-sm text-muted-foreground">Graphics:</div>
                              <div className="text-sm font-medium">
                                {formData.laptopDetails?.graphics || "Not provided"}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Condition</h4>
                          <div className="bg-muted p-4 rounded-md space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="text-sm text-muted-foreground">Age:</div>
                              <div className="text-sm font-medium">
                                {formData.laptopCondition?.age || "Not provided"}
                              </div>
                              <div className="text-sm text-muted-foreground">Physical Condition:</div>
                              <div className="text-sm font-medium">
                                {formData.laptopCondition?.physicalCondition || "Not provided"}
                              </div>
                              <div className="text-sm text-muted-foreground">Functional Condition:</div>
                              <div className="text-sm font-medium">
                                {formData.laptopCondition?.functionalCondition || "Not provided"}
                              </div>
                              <div className="text-sm text-muted-foreground">Battery Health:</div>
                              <div className="text-sm font-medium">
                                {formData.laptopCondition?.batteryHealth || "Not provided"}
                              </div>
                            </div>
                            {formData.laptopCondition?.additionalInfo && (
                              <div className="mt-2">
                                <div className="text-sm text-muted-foreground">Additional Information:</div>
                                <div className="text-sm mt-1">{formData.laptopCondition.additionalInfo}</div>
                              </div>
                            )}
                            {photos.length > 0 && (
                              <div className="mt-2">
                                <div className="text-sm text-muted-foreground mb-2">Photos:</div>
                                <div className="grid grid-cols-5 gap-2">
                                  {photos.map((photo, index) => (
                                    <div key={index} className="relative rounded-md overflow-hidden border">
                                      <img
                                        src={photo.preview || "/placeholder.svg"}
                                        alt={`Laptop photo ${index + 1}`}
                                        className="h-16 w-full object-cover"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Contact Information</h4>
                          <div className="bg-muted p-4 rounded-md space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="text-sm text-muted-foreground">Full Name:</div>
                              <div className="text-sm font-medium">
                                {formData.contactInfo?.fullName || "Not provided"}
                              </div>
                              <div className="text-sm text-muted-foreground">Email:</div>
                              <div className="text-sm font-medium">{formData.contactInfo?.email || "Not provided"}</div>
                              <div className="text-sm text-muted-foreground">Phone:</div>
                              <div className="text-sm font-medium">{formData.contactInfo?.phone || "Not provided"}</div>
                              <div className="text-sm text-muted-foreground">Location:</div>
                              <div className="text-sm font-medium capitalize">
                                {formData.contactInfo?.location || "Not provided"}
                              </div>
                              <div className="text-sm text-muted-foreground">Preferred Contact:</div>
                              <div className="text-sm font-medium capitalize">
                                {formData.contactInfo?.preferredContact || "Not provided"}
                              </div>
                              <div className="text-sm text-muted-foreground">Preferred Payment:</div>
                              <div className="text-sm font-medium capitalize">
                                {formData.contactInfo?.preferredPayment || "Not provided"}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-primary/10 p-4 rounded-md">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Estimated Quote</h4>
                              <p className="text-sm text-muted-foreground">
                                Based on the information provided, here's our estimated quote:
                              </p>
                            </div>
                            <div className="text-2xl font-bold text-primary">Rs. 45,000 - 55,000</div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            * This is an estimated range. The final quote will be provided after physical inspection.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={handleBack}>
                        <ChevronLeft className="mr-2 h-4 w-4" /> Back
                      </Button>
                      <Button type="button" onClick={handleSubmit} disabled={isSubmitting} className="min-w-[120px]">
                        {isSubmitting ? "Submitting..." : isSuccess ? "Submitted!" : "Submit Request"}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Why Sell to Us?</CardTitle>
                <CardDescription>We offer the best value for your used laptop.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Best Price Guarantee</h3>
                      <p className="text-sm text-muted-foreground">
                        We offer competitive prices based on current market value.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Instant Payment</h3>
                      <p className="text-sm text-muted-foreground">
                        Get paid immediately after verification through your preferred method.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Quick Process</h3>
                      <p className="text-sm text-muted-foreground">
                        Our hassle-free process takes minimal time and effort.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Data Security</h3>
                      <p className="text-sm text-muted-foreground">
                        We ensure complete data wiping for your privacy and security.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Customer Testimonials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm italic mb-2">
                      "I was surprised by how easy it was to sell my old laptop. The quote was fair and I received
                      payment the same day!"
                    </p>
                    <p className="text-sm font-medium">- Rajesh Sharma</p>
                  </div>

                  <div>
                    <p className="text-sm italic mb-2">
                      "Great service! I got more for my laptop than I expected. The process was quick and hassle-free."
                    </p>
                    <p className="text-sm font-medium">- Sita Thapa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about selling your laptop? Find answers to common questions below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">How is the price of my laptop determined?</h3>
              <p className="text-sm text-muted-foreground">
                We consider factors like brand, model, age, specifications, condition, and current market value to
                determine a fair price for your laptop.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">What should I do before selling my laptop?</h3>
              <p className="text-sm text-muted-foreground">
                Back up your important data, sign out of all accounts, and perform a factory reset to remove personal
                information. We'll handle the complete data wiping process.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Do I need to provide accessories?</h3>
              <p className="text-sm text-muted-foreground">
                Including the original charger will increase the value. Other accessories like the original box, mouse,
                or laptop bag are optional but may add to the value.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">How long does the process take?</h3>
              <p className="text-sm text-muted-foreground">
                The entire process typically takes 1-2 days from submission to payment, depending on verification and
                your location.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Can I sell a non-functional laptop?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, we buy laptops in any condition, including non-functional ones. The price will be adjusted based on
                the condition and potential repair costs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">What payment methods are available?</h3>
              <p className="text-sm text-muted-foreground">
                We offer multiple payment options including cash, bank transfer, digital wallets (eSewa, Khalti), or
                store credit for your next purchase.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
