"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    name: "HP Pavilion 15",
    image: "/placeholder.svg?height=80&width=80",
    price: 85000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Logitech MX Master 3 Wireless Mouse",
    image: "/placeholder.svg?height=80&width=80",
    price: 12000,
    quantity: 1,
  },
]

export default function CartPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  // Calculate discount
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0

  // Calculate shipping
  const shipping = subtotal > 100000 ? 0 : 500

  // Calculate total
  const total = subtotal - discount + shipping

  // Update quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  // Remove item
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  // Apply coupon
  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "welcome10") {
      setCouponApplied(true)
    } else {
      alert("Invalid coupon code")
    }
  }

  // Proceed to checkout
  const proceedToCheckout = () => {
    router.push("/checkout")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="flex justify-center mb-4">
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Button asChild size="lg">
            <Link href="/buy-laptop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Cart Items ({cartItems.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-grow">
                        <Link href={`/product/${item.id}`} className="font-medium hover:underline">
                          {item.name}
                        </Link>
                        <div className="text-primary font-medium mt-1">Rs. {item.price.toLocaleString()}</div>
                        <div className="flex items-center mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-r-none"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <div className="h-8 px-3 flex items-center justify-center border-y">{item.quantity}</div>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-l-none"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-start justify-between sm:flex-col sm:items-end">
                        <div className="font-semibold">Rs. {(item.price * item.quantity).toLocaleString()}</div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/buy-laptop">Continue Shopping</Link>
                </Button>
                <Button variant="destructive" onClick={() => setCartItems([])}>
                  Clear Cart
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-green-600 dark:text-green-500">
                    <span>Discount (10%)</span>
                    <span>- Rs. {discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `Rs. ${shipping.toLocaleString()}`}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>Rs. {total.toLocaleString()}</span>
                </div>

                <div className="pt-4">
                  <div className="flex gap-2 mb-4">
                    <Input
                      placeholder="Coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={couponApplied}
                    />
                    <Button variant="outline" onClick={applyCoupon} disabled={couponApplied || !couponCode}>
                      Apply
                    </Button>
                  </div>
                  {couponApplied && (
                    <div className="text-sm text-green-600 dark:text-green-500 mb-4">
                      Coupon "WELCOME10" applied successfully!
                    </div>
                  )}
                  <Button className="w-full" size="lg" onClick={proceedToCheckout}>
                    Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">We Accept</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <div className="bg-muted p-2 rounded text-xs">Cash on Delivery</div>
                  <div className="bg-muted p-2 rounded text-xs">eSewa</div>
                  <div className="bg-muted p-2 rounded text-xs">Khalti</div>
                  <div className="bg-muted p-2 rounded text-xs">Bank Transfer</div>
                  <div className="bg-muted p-2 rounded text-xs">Credit Card</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
