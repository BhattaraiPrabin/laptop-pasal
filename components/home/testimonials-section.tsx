import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "I bought a Dell laptop from Laptop Pasal and I'm extremely satisfied with the quality and service. The team was very helpful in guiding me to choose the right laptop for my needs.",
    date: "2 months ago",
  },
  {
    id: 2,
    name: "Sita Thapa",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "Great experience selling my old laptop. The process was smooth and I got a fair price. Would definitely recommend their service to anyone looking to sell their used laptop.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Anish Gurung",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Purchased a second-hand gaming laptop that works perfectly. The condition was exactly as described and the price was very reasonable. Very happy with my purchase!",
    date: "3 weeks ago",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        <p className="text-muted-foreground mt-2">Read testimonials from our satisfied customers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="h-full">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-3">{testimonial.text}</p>
              <p className="text-xs text-muted-foreground">{testimonial.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
