import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Laptop, ShoppingBag, Repeat, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black to-gray-900 text-white rounded-lg">
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px] opacity-20"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <Badge className="mb-4 bg-primary/90 text-primary-foreground hover:bg-primary/80 transition-colors">
            Nepal's Trusted Laptop Shop
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Find Your Perfect Laptop at Laptop Pasal</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking to buy a new laptop, sell your used one, or find quality second-hand options, we've
            got you covered with the best selection and prices in Nepal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="/buy-laptop">
                <Laptop className="mr-2 h-5 w-5" /> Browse New Laptops
              </Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="border-gray-600 text-white hover:bg-white/10">
              <Link href="/second-hand-laptop">
                <Repeat className="mr-2 h-5 w-5" /> Second Hand Laptops
              </Link>
            </Button>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="flex items-center bg-gray-800 rounded-full p-2 shadow-lg">
              <Search className="ml-2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for laptops by brand, model, or specs..."
                className="flex-1 bg-transparent border-none focus:outline-none text-white px-3 py-2"
              />
              <Button className="rounded-full">Search</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Link
            href="/buy-laptop"
            className="bg-gray-800/50 hover:bg-gray-800/80 transition-colors rounded-lg p-4 text-center"
          >
            <Laptop className="h-8 w-8 mx-auto mb-2" />
            <span className="text-sm font-medium">New Laptops</span>
          </Link>
          <Link
            href="/second-hand-laptop"
            className="bg-gray-800/50 hover:bg-gray-800/80 transition-colors rounded-lg p-4 text-center"
          >
            <Repeat className="h-8 w-8 mx-auto mb-2" />
            <span className="text-sm font-medium">Used Laptops</span>
          </Link>
          <Link
            href="/sell-my-laptop"
            className="bg-gray-800/50 hover:bg-gray-800/80 transition-colors rounded-lg p-4 text-center"
          >
            <ShoppingBag className="h-8 w-8 mx-auto mb-2" />
            <span className="text-sm font-medium">Sell Your Laptop</span>
          </Link>
          <Link
            href="/accessories"
            className="bg-gray-800/50 hover:bg-gray-800/80 transition-colors rounded-lg p-4 text-center"
          >
            <ArrowRight className="h-8 w-8 mx-auto mb-2" />
            <span className="text-sm font-medium">Accessories</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
