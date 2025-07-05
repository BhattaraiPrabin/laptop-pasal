import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Laptop, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted">
      {/* Newsletter */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Subscribe to our newsletter</h3>
              <p className="text-muted-foreground">Get the latest updates, deals and tech tips</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="Your email address" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
                <Laptop className="h-6 w-6" />
                <span>Laptop Pasal</span>
              </Link>
              <p className="text-muted-foreground text-sm mb-4">
                Your trusted destination for buying new laptops, selling used laptops, and finding the perfect
                accessories in Nepal.
              </p>
              <div className="flex items-center gap-3">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/buy-laptop" className="text-muted-foreground hover:text-primary transition-colors">
                    Buy Laptop
                  </Link>
                </li>
                <li>
                  <Link href="/sell-my-laptop" className="text-muted-foreground hover:text-primary transition-colors">
                    Sell My Laptop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/second-hand-laptop"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Second Hand Laptop
                  </Link>
                </li>
                <li>
                  <Link href="/accessories" className="text-muted-foreground hover:text-primary transition-colors">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="/brands" className="text-muted-foreground hover:text-primary transition-colors">
                    Brands
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="text-muted-foreground hover:text-primary transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/shipping-policy" className="text-muted-foreground hover:text-primary transition-colors">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link href="/return-policy" className="text-muted-foreground hover:text-primary transition-colors">
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link href="/warranty-policy" className="text-muted-foreground hover:text-primary transition-colors">
                    Warranty Policy
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">New Road, Kathmandu, Nepal</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <Link
                    href="tel:+9779876543210"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +977 9876543210
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <Link
                    href="mailto:info@laptoppasal.com.np"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@laptoppasal.com.np
                  </Link>
                </li>
              </ul>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Business Hours</h4>
                <p className="text-sm text-muted-foreground">
                  Sunday - Friday: 10:00 AM - 7:00 PM
                  <br />
                  Saturday: 11:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Laptop Pasal. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
