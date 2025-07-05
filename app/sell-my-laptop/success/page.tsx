import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
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
            <CardTitle className="text-2xl md:text-3xl">Request Submitted Successfully!</CardTitle>
            <CardDescription className="text-lg mt-2">
              Thank you for choosing to sell your laptop with us.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-2">What happens next?</h3>
              <ol className="space-y-4 mt-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-medium text-sm">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Review</p>
                    <p className="text-sm text-muted-foreground">
                      Our team will review your laptop details within 24 hours.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-medium text-sm">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Quote</p>
                    <p className="text-sm text-muted-foreground">
                      We'll send you a quote via your preferred contact method.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-medium text-sm">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Inspection</p>
                    <p className="text-sm text-muted-foreground">
                      If you accept the quote, we'll schedule a time for physical inspection of your laptop.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground font-medium text-sm">
                    4
                  </div>
                  <div>
                    <p className="font-medium">Payment</p>
                    <p className="text-sm text-muted-foreground">
                      Once verified, you'll receive payment through your preferred method.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-primary/5 p-4 rounded-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="font-medium">Request Reference:</div>
                <div className="font-mono bg-background px-2 py-1 rounded text-sm">#LP23789</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Please keep this reference number for future communication.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/">Return to Home</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/account/sell-requests">
                  View My Requests <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
