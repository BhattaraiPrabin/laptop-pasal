"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { Check, CreditCard, Landmark, Wallet } from "lucide-react"

// Mock cart data for order summary
const cartItems = [
  {
    id: 1,
    name: "HP Pavilion 15",
    price: 85000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Logitech MX Master 3 Wireless Mouse",
    price: 12000,
    quantity: 1,
  },
]

export default function CheckoutPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("cash")

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const discount = 0
  const shipping = subtotal > 100000 ? 0 : 500
  const total = subtotal - discount + shipping

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/checkout/success")
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                  <CardDescription>Enter your shipping details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name *</Label>
                      <Input id="first-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name *</Label>
                      <Input id="last-name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Input id="address" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">Province/State</Label>
                      <Input id="state" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">Postal/Zip Code</Label>
                      <Input id="zip" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Order Notes (Optional)</Label>
                    <Textarea id="notes" placeholder="Notes about your order, e.g. special notes for delivery" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Select your preferred payment method</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid grid-cols-4 mb-4">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="digital">Digital Wallet</TabsTrigger>
                      <TabsTrigger value="bank">Bank</TabsTrigger>
                      <TabsTrigger value="cash">Cash</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cash" id="cash" />
                          <Label htmlFor="cash" className="flex items-center gap-2 cursor-pointer">
                            <Wallet className="h-4 w-4" /> Cash on Delivery
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="esewa" id="esewa" />
                          <Label htmlFor="esewa" className="flex items-center gap-2 cursor-pointer">
                            <Wallet className="h-4 w-4" /> eSewa
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="khalti" id="khalti" />
                          <Label htmlFor="khalti" className="flex items-center gap-2 cursor-pointer">
                            <Wallet className="h-4 w-4" /> Khalti
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="bank" id="bank" />
                          <Label htmlFor="bank" className="flex items-center gap-2 cursor-pointer">
                            <Landmark className="h-4 w-4" /> Bank Transfer
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                            <CreditCard className="h-4 w-4" /> Credit/Debit Card
                          </Label>
                        </div>
                      </RadioGroup>
                    </TabsContent>
                    <TabsContent value="digital">
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="esewa" id="esewa-tab" />
                          <Label htmlFor="esewa-tab" className="flex items-center gap-2 cursor-pointer">
                            <Wallet className="h-4 w-4" /> eSewa
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="khalti" id="khalti-tab" />
                          <Label htmlFor="khalti-tab" className="flex items-center gap-2 cursor-pointer">
                            <Wallet className="h-4 w-4" /> Khalti
                          </Label>
                        </div>
                      </RadioGroup>
                    </TabsContent>
                    <TabsContent value="bank">
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="bank" id="bank-tab" />
                          <Label htmlFor="bank-tab" className="flex items-center gap-2 cursor-pointer">
                            <Landmark className="h-4 w-4" /> Bank Transfer
                          </Label>
                        </div>
                      </RadioGroup>
                    </TabsContent>
                    <TabsContent value="cash">
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cash" id="cash-tab" />
                          <Label htmlFor="cash-tab" className="flex items-center gap-2 cursor-pointer">
                            <Wallet className="h-4 w-4" /> Cash on Delivery
                          </Label>
                        </div>
                      </RadioGroup>
                    </TabsContent>
                  </Tabs>

                  {paymentMethod === "bank" && (
                    <div className="mt-4 p-4 bg-muted rounded-md">
                      <h4 className="font-medium mb-2">Bank Transfer Details</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Please transfer the total amount to the following bank account:
                      </p>
                      <div className="text-sm space-y-1">
                        <div className="grid grid-cols-3">
                          <span className="font-medium">Bank Name:</span>
                          <span className="col-span-2">Nepal Bank Ltd.</span>
                        </div>
                        <div className="grid grid-cols-3">
                          <span className="font-medium">Account Name:</span>
                          <span className="col-span-2">Laptop Pasal Pvt. Ltd.</span>
                        </div>
                        <div className="grid grid-cols-3">
                          <span className="font-medium">Account Number:</span>
                          <span className="col-span-2">0123456789012</span>
                        </div>
                        <div className="grid grid-cols-3">
                          <span className="font-medium">Branch:</span>
                          <span className="col-span-2">New Road, Kathmandu</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Please use your Order ID as the payment reference.
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : `Place Order - Rs. ${total.toLocaleString()}`}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </form>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} <span className="text-muted-foreground">x{item.quantity}</span>
                    </span>
                    <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `Rs. ${shipping.toLocaleString()}`}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600 dark:text-green-500">
                    <span>Discount</span>
                    <span>- Rs. {discount.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <Separator />

              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Secure Checkout</h3>
                  <p className="text-sm text-muted-foreground">Your payment information is processed securely.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Free Delivery Over Rs. 100,000</h3>
                  <p className="text-sm text-muted-foreground">
                    Free delivery for orders over Rs. 100,000 within Kathmandu Valley.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">7-Day Return Policy</h3>
                  <p className="text-sm text-muted-foreground">
                    Return or exchange within 7 days if you're not satisfied.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
