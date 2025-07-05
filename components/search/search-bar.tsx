"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock search results data
const mockSearchResults = [
  {
    id: 1,
    name: "MacBook Pro 16-inch",
    category: "Laptop",
    price: 250000,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    name: "Dell XPS 15",
    category: "Laptop",
    price: 180000,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    name: "HP Spectre x360",
    category: "Laptop",
    price: 165000,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 4,
    name: "Lenovo ThinkPad X1",
    category: "Laptop",
    price: 145000,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 5,
    name: "ASUS ROG Zephyrus",
    category: "Gaming Laptop",
    price: 220000,
    image: "/placeholder.svg?height=50&width=50",
  },
]

type SearchResult = {
  id: number
  name: string
  category: string
  price: number
  image: string
}

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Search function
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)

    if (searchQuery.length < 2) {
      setResults([])
      setIsOpen(false)
      return
    }

    setIsLoading(true)

    // Simulate API call with setTimeout
    setTimeout(() => {
      // Filter mock results based on search query
      const filteredResults = mockSearchResults.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )

      setResults(filteredResults)
      setIsOpen(true)
      setIsLoading(false)
    }, 500)
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      setIsOpen(false)
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for laptops, accessories..."
            className="pl-8 pr-10"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => query.length >= 2 && setIsOpen(true)}
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("")
                setResults([])
                setIsOpen(false)
              }}
              className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <Button type="submit" className="sr-only">
          Search
        </Button>
      </form>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-md border bg-background shadow-lg">
          {isLoading ? (
            <div className="p-4 text-center text-sm text-muted-foreground">Loading...</div>
          ) : results.length > 0 ? (
            <div className="max-h-[70vh] overflow-auto p-2">
              <div className="text-xs font-medium text-muted-foreground mb-2 px-2">Search Results</div>
              <div className="space-y-1">
                {results.map((result) => (
                  <Link
                    key={result.id}
                    href={`/product/${result.id}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md p-2 hover:bg-accent"
                  >
                    <Image
                      src={result.image || "/placeholder.svg"}
                      alt={result.name}
                      width={40}
                      height={40}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{result.name}</p>
                      <p className="text-xs text-muted-foreground">{result.category}</p>
                    </div>
                    <div className="text-sm font-medium">Rs. {result.price.toLocaleString()}</div>
                  </Link>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t text-center">
                <Link
                  href={`/search?q=${encodeURIComponent(query)}`}
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-primary hover:underline"
                >
                  View all results
                </Link>
              </div>
            </div>
          ) : (
            <div className="p-4 text-center text-sm text-muted-foreground">
              No results found for &quot;{query}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  )
}
