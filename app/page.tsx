import { Laptop, ShoppingBag, Repeat, Headphones } from "lucide-react"
import Link from "next/link"
import FeaturedProducts from "@/components/home/featured-products"
import HeroSection from "@/components/home/hero-section"
import CategorySection from "@/components/home/category-section"
import BrandsSection from "@/components/home/brands-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import BlogPreview from "@/components/home/blog-preview"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      <HeroSection />

      {/* Main Categories */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">What are you looking for?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/buy-laptop" className="group">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border transition-all hover:shadow-md hover:border-primary/50">
              <div className="p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Laptop className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Buy New Laptop</h3>
              <p className="text-center text-muted-foreground">Find the perfect new laptop at the best price</p>
            </div>
          </Link>

          <Link href="/second-hand-laptop" className="group">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border transition-all hover:shadow-md hover:border-primary/50">
              <div className="p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Repeat className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Second Hand Laptop</h3>
              <p className="text-center text-muted-foreground">Quality used laptops with warranty</p>
            </div>
          </Link>

          <Link href="/sell-my-laptop" className="group">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border transition-all hover:shadow-md hover:border-primary/50">
              <div className="p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sell Your Laptop</h3>
              <p className="text-center text-muted-foreground">Get the best price for your used laptop</p>
            </div>
          </Link>

          <Link href="/accessories" className="group">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border transition-all hover:shadow-md hover:border-primary/50">
              <div className="p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessories</h3>
              <p className="text-center text-muted-foreground">Essential accessories for your laptop</p>
            </div>
          </Link>
        </div>
      </section>

      <FeaturedProducts />
      <CategorySection />
      <BrandsSection />
      <TestimonialsSection />

      {/* SEO Content Section */}
      <section className="container mx-auto px-4 py-8 bg-muted/50 rounded-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Laptop Pasal - Your Trusted Laptop Shop in Nepal</h2>
          <div className="prose prose-sm dark:prose-invert">
            <p>
              Welcome to Laptop Pasal, Nepal's premier destination for buying new laptops, selling used laptops, and
              finding the perfect accessories. We offer a wide range of laptops from top brands like HP, Dell, Lenovo,
              Asus, and more at competitive prices.
            </p>
            <p>
              Whether you're a student looking for an affordable laptop, a professional needing a high-performance
              machine, or a gamer seeking the ultimate gaming experience, we have options for every need and budget. Our
              second-hand laptops undergo rigorous testing and come with a warranty for your peace of mind.
            </p>
            <p>
              Looking to sell your laptop? Our hassle-free process ensures you get the best value for your device.
              Simply fill out our form, get an instant quote, and receive payment quickly upon verification.
            </p>
            <p>
              Explore our extensive collection of laptop accessories, including keyboards, mice, headsets, bags, and
              more to enhance your computing experience.
            </p>
          </div>
        </div>
      </section>

      <BlogPreview />
    </div>
  )
}
