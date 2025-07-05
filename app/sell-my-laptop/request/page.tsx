"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Check, Upload } from "lucide-react"
import Link from "next/link"
import { Label } from "@/components/ui/label"

export default function SellRequestPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm mb-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/sell-my-laptop" className="text-muted-foreground hover:text-foreground">
            Sell My Laptop
          </Link>
          <span className="mx-2">/</span>
          <span>Request</span>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Sell Your Laptop</CardTitle>
            <CardDescription>
              {isSubmitted
                ? "Your request has been submitted successfully"
                : "Fill in the details below to get an instant quote for your laptop"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center space-y-6 py-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 text-primary p-4 rounded-full">
                    <Check className="h-10 w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Thank You for Your Request!</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We've received your laptop selling request. Our team will review your details and get back to you
                  within 24 hours with a quote.
                </p>
                <div className="bg-muted p-4 rounded-md max-w-md mx-auto">
                  <p className="font-medium">Request Reference: #LP23789</p>
                  <p className="text-sm text-muted-foreground">
                    Please keep this reference number for future communication.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild>
                    <Link href="/">Return to Home</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/sell-my-laptop">Sell Another Laptop</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Laptop Details */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Laptop Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="brand" className="block text-sm font-medium mb-1">
                        Brand *
                      </Label>
                      <Select required>
                        <SelectTrigger id="brand">
                          <SelectValue placeholder="Select brand" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hp">HP</SelectItem>
                          <SelectItem value="dell">Dell</SelectItem>
                          <SelectItem value="lenovo">Lenovo</SelectItem>
                          <SelectItem value="asus">Asus</SelectItem>
                          <SelectItem value="acer">Acer</SelectItem>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="msi">MSI</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="model" className="block text-sm font-medium mb-1">
                        Model *
                      </Label>
                      <Input id="model" placeholder="e.g. Pavilion 15, XPS 13" required />
                    </div>
                    <div>
                      <Label htmlFor="processor" className="block text-sm font-medium mb-1">
                        Processor *
                      </Label>
                      <Select required>
                        <SelectTrigger id="processor">
                          <SelectValue placeholder="Select processor" />
                        </SelectTrigger>
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
                    </div>
                    <div>
                      <Label htmlFor="ram" className="block text-sm font-medium mb-1">
                        RAM *
                      </Label>
                      <Select required>
                        <SelectTrigger id="ram">
                          <SelectValue placeholder="Select RAM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="4gb">4GB</SelectItem>
                          <SelectItem value="8gb">8GB</SelectItem>
                          <SelectItem value="16gb">16GB</SelectItem>
                          <SelectItem value="32gb">32GB</SelectItem>
                          <SelectItem value="64gb">64GB</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="storage-type" className="block text-sm font-medium mb-1">
                        Storage Type *
                      </Label>
                      <Select required>
                        <SelectTrigger id="storage-type">
                          <SelectValue placeholder="Select storage type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ssd">SSD</SelectItem>
                          <SelectItem value="hdd">HDD</SelectItem>
                          <SelectItem value="hybrid">Hybrid (SSD + HDD)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="storage-capacity" className="block text-sm font-medium mb-1">
                        Storage Capacity *
                      </Label>
                      <Select required>
                        <SelectTrigger id="storage-capacity">
                          <SelectValue placeholder="Select capacity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="128gb">128GB</SelectItem>
                          <SelectItem value="256gb">256GB</SelectItem>
                          <SelectItem value="512gb">512GB</SelectItem>
                          <SelectItem value="1tb">1TB</SelectItem>
                          <SelectItem value="2tb">2TB</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="graphics" className="block text-sm font-medium mb-1">
                        Graphics Card
                      </Label>
                      <Input id="graphics" placeholder="e.g. NVIDIA GeForce GTX 1650" />
                    </div>
                    <div>
                      <Label htmlFor="display-size" className="block text-sm font-medium mb-1">
                        Display Size
                      </Label>
                      <Select>
                        <SelectTrigger id="display-size">
                          <SelectValue placeholder="Select display size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="13">13 inches</SelectItem>
                          <SelectItem value="14">14 inches</SelectItem>
                          <SelectItem value="15">15.6 inches</SelectItem>
                          <SelectItem value="16">16 inches</SelectItem>
                          <SelectItem value="17">17 inches</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Condition */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Condition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age" className="block text-sm font-medium mb-1">
                        Age of Laptop *
                      </Label>
                      <Select required>
                        <SelectTrigger id="age">
                          <SelectValue placeholder="Select age" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                          <SelectItem value="1-2">1-2 years</SelectItem>
                          <SelectItem value="2-3">2-3 years</SelectItem>
                          <SelectItem value="3-4">3-4 years</SelectItem>
                          <SelectItem value="4-5">4-5 years</SelectItem>
                          <SelectItem value="more-than-5">More than 5 years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="physical-condition" className="block text-sm font-medium mb-1">
                        Physical Condition *
                      </Label>
                      <Select required>
                        <SelectTrigger id="physical-condition">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
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
                    </div>
                    <div>
                      <Label htmlFor="battery-health" className="block text-sm font-medium mb-1">
                        Battery Health *
                      </Label>
                      <Select required>
                        <SelectTrigger id="battery-health">
                          <SelectValue placeholder="Select battery health" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent (Lasts 4+ hours)</SelectItem>
                          <SelectItem value="good">Good (Lasts 2-4 hours)</SelectItem>
                          <SelectItem value="fair">Fair (Lasts 1-2 hours)</SelectItem>
                          <SelectItem value="poor">Poor (Lasts less than 1 hour)</SelectItem>
                          <SelectItem value="needs-replacement">Needs Replacement</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="functional-issues" className="block text-sm font-medium mb-1">
                        Functional Issues
                      </Label>
                      <Select>
                        <SelectTrigger id="functional-issues">
                          <SelectValue placeholder="Select if any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None - Everything works perfectly</SelectItem>
                          <SelectItem value="minor">Minor issues (e.g., worn keyboard)</SelectItem>
                          <SelectItem value="moderate">Moderate issues (e.g., damaged ports)</SelectItem>
                          <SelectItem value="major">Major issues (e.g., screen problems)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="additional-info" className="block text-sm font-medium mb-1">
                      Additional Information
                    </Label>
                    <Textarea
                      id="additional-info"
                      placeholder="Please provide any other details about your laptop that might affect its value"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Upload Photos */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Upload Photos (Optional)</h3>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Drag and drop photos here, or click to browse</p>
                    <Button variant="outline" size="sm" type="button">
                      Upload Photos
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      Max 5 photos. JPG, PNG or HEIC format. Max 5MB each.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="full-name" className="block text-sm font-medium mb-1">
                        Full Name *
                      </Label>
                      <Input id="full-name" required />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address *
                      </Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number *
                      </Label>
                      <Input id="phone" type="tel" required />
                    </div>
                    <div>
                      <Label htmlFor="location" className="block text-sm font-medium mb-1">
                        Location *
                      </Label>
                      <Select required>
                        <SelectTrigger id="location">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
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
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="preferred-contact" className="block text-sm font-medium mb-1">
                      Preferred Contact Method *
                    </Label>
                    <Select required>
                      <SelectTrigger id="preferred-contact">
                        <SelectValue placeholder="Select contact method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        <SelectItem value="viber">Viber</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" required />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions
                    </label>
                    <p className="text-sm text-muted-foreground">
                      By submitting this form, I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit Request"}
                  </Button>
                  <Button variant="outline" type="button" className="w-full sm:w-auto" asChild>
                    <Link href="/sell-my-laptop">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Link>
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
