"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User, Menu, X, Search } from "lucide-react"
import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center font-bold text-xl mr-6">
            Laptop Pasal
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 flex-1">
          <Link
            href="/buy-laptop"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/buy-laptop" ? "text-primary font-semibold" : "text-muted-foreground",
            )}
          >
            Buy Laptop
          </Link>
          <Link
            href="/gaming-laptops"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/gaming-laptops" ? "text-primary font-semibold" : "text-muted-foreground",
            )}
          >
            Gaming
          </Link>
          <Link
            href="/business-laptops"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/business-laptops" ? "text-primary font-semibold" : "text-muted-foreground",
            )}
          >
            Business
          </Link>
          <Link
            href="/student-laptops"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/student-laptops" ? "text-primary font-semibold" : "text-muted-foreground",
            )}
          >
            Student
          </Link>
          <Link
            href="/content-creation-laptops"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/content-creation-laptops" ? "text-primary font-semibold" : "text-muted-foreground",
            )}
          >
            Content Creation
          </Link>
          <Link
            href="/second-hand-laptop"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/second-hand-laptop" ? "text-primary font-semibold" : "text-muted-foreground",
            )}
          >
            Second Hand
          </Link>
        </nav>

        {/* Right side icons */}
        <div className="flex items-center ml-auto space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <ModeToggle />

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <Link
              href="/buy-laptop"
              className={cn(
                "block py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === "/buy-laptop" ? "text-primary font-semibold" : "text-muted-foreground",
              )}
              onClick={toggleMenu}
            >
              Buy Laptop
            </Link>
            <Link
              href="/gaming-laptops"
              className={cn(
                "block py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === "/gaming-laptops" ? "text-primary font-semibold" : "text-muted-foreground",
              )}
              onClick={toggleMenu}
            >
              Gaming
            </Link>
            <Link
              href="/business-laptops"
              className={cn(
                "block py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === "/business-laptops" ? "text-primary font-semibold" : "text-muted-foreground",
              )}
              onClick={toggleMenu}
            >
              Business
            </Link>
            <Link
              href="/student-laptops"
              className={cn(
                "block py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === "/student-laptops" ? "text-primary font-semibold" : "text-muted-foreground",
              )}
              onClick={toggleMenu}
            >
              Student
            </Link>
            <Link
              href="/content-creation-laptops"
              className={cn(
                "block py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === "/content-creation-laptops" ? "text-primary font-semibold" : "text-muted-foreground",
              )}
              onClick={toggleMenu}
            >
              Content Creation
            </Link>
            <Link
              href="/second-hand-laptop"
              className={cn(
                "block py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === "/second-hand-laptop" ? "text-primary font-semibold" : "text-muted-foreground",
              )}
              onClick={toggleMenu}
            >
              Second Hand
            </Link>
            <Link
              href="/auth/login"
              className="block py-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              onClick={toggleMenu}
            >
              Account
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
