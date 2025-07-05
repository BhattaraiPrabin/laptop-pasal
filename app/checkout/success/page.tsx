import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Download, Printer } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  // Generate a random order number
  const orderNumber = `LP-${Math.floor(10000 + Math.random() * 90000)}`

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 text-primary p-4 rounded-full">
                <Check className="h-12 w-12" />
              </div>
            </div>
            <CardTitle className="text-2xl md:text-3xl">Order Placed Successfully!</CardTitle>
            <CardDescription className="text-lg mt-2">Thank you for your purchase.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="font-semibold">Order Number</h3>
                  <p className="font-mono text-lg">{orderNumber}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <h3 className="font-semibold">Order Date</h3>
                  <p>{new Date().toLocaleDateString()}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Order Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>HP Pavilion 15 x1</span>
                      <span>Rs. 85,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Logitech MX Master 3 Wireless Mouse x1</span>
                      <span>Rs. 12,000</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span>Rs. 500</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>Total</span>
                      <span>Rs. 97,500</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Shipping Information</h3>
                  <p>John Doe</p>
                  <p>123 Main Street, Kathmandu</p>
                  <p>Phone: +977 9812345678</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Payment Method</h3>
                  <p>Cash on Delivery</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-4 rounded-md">
              <h3 className="font-semibold mb-2">What happens next?</h3>
              <ol className="space-y-2 ml-5 list-decimal">
                <li>
                  <p className="text-sm">You will receive an order confirmation email with details of your order.</p>
                </li>
                <li>
                  <p className="text-sm">Our team will process your order and prepare it for shipping.</p>
                </li>
                <li>
                  <p className="text-sm">
                    You will receive a shipping confirmation email once your order is on the way.
                  </p>
                </li>
                <li>
                  <p className="text-sm">For Cash on Delivery orders, please keep the exact amount ready.</p>
                </li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/">Continue Shopping</Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Printer className="h-4 w-4" /> Print Receipt
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="h-4 w-4" /> Download Invoice
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
