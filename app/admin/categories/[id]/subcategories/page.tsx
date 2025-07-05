"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Mock data for categories
const mockCategories = [
  {
    id: 1,
    name: "Laptop",
    slug: "laptop",
    description: "All types of laptops including ultrabooks, business laptops, and student laptops",
  },
  {
    id: 2,
    name: "Gaming Laptop",
    slug: "gaming-laptop",
    description: "High-performance laptops designed specifically for gaming",
  },
  {
    id: 3,
    name: "Accessories",
    slug: "accessories",
    description: "Laptop accessories including mice, keyboards, headphones, and more",
  },
]

// Mock data for subcategories
const mockSubcategories = [
  {
    id: 1,
    categoryId: 1,
    name: "Ultrabook",
    slug: "ultrabook",
    description: "Thin and light laptops with premium build quality",
    active: true,
    products: 15,
  },
  {
    id: 2,
    categoryId: 1,
    name: "Business Laptop",
    slug: "business-laptop",
    description: "Laptops designed for professional use with enhanced security features",
    active: true,
    products: 18,
  },
  {
    id: 3,
    categoryId: 1,
    name: "Student Laptop",
    slug: "student-laptop",
    description: "Affordable laptops ideal for students and educational purposes",
    active: true,
    products: 12,
  },
  {
    id: 4,
    categoryId: 2,
    name: "High-End Gaming",
    slug: "high-end-gaming",
    description: "Premium gaming laptops with top-tier specifications",
    active: true,
    products: 10,
  },
  {
    id: 5,
    categoryId: 2,
    name: "Mid-Range Gaming",
    slug: "mid-range-gaming",
    description: "Gaming laptops with balanced performance and price",
    active: true,
    products: 14,
  },
  {
    id: 6,
    categoryId: 2,
    name: "Budget Gaming",
    slug: "budget-gaming",
    description: "Affordable gaming laptops for casual gamers",
    active: false,
    products: 4,
  },
  {
    id: 7,
    categoryId: 3,
    name: "Mouse",
    slug: "mouse",
    description: "Computer mice for laptops",
    active: true,
    products: 25,
  },
  {
    id: 8,
    categoryId: 3,
    name: "Keyboard",
    slug: "keyboard",
    description: "External keyboards for laptops",
    active: true,
    products: 18,
  },
  {
    id: 9,
    categoryId: 3,
    name: "Headphones",
    slug: "headphones",
    description: "Audio headphones and headsets",
    active: true,
    products: 24,
  },
]

export default function SubcategoriesPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const categoryId = Number.parseInt(params.id)
  const [category, setCategory] = useState<any>(null)
  const [subcategories, setSubcategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [editingSubcategory, setEditingSubcategory] = useState<any>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  // Fetch category and subcategories data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundCategory = mockCategories.find((cat) => cat.id === categoryId)
      if (!foundCategory) {
        router.push("/admin/categories")
        return
      }
      setCategory(foundCategory)
      setSubcategories(mockSubcategories.filter((subcat) => subcat.categoryId === categoryId))
      setLoading(false)
    }, 500)
  }, [categoryId, router])

  // Filter subcategories based on search query
  const filteredSubcategories = subcategories.filter((subcategory) =>
    subcategory.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Handle subcategory creation
  const handleAddSubcategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newSubcategory = {
      id: Math.max(...subcategories.map((s) => s.id)) + 1,
      categoryId,
      name: formData.get("name") as string,
      slug: formData.get("slug") as string,
      description: formData.get("description") as string,
      active: formData.get("active") === "on",
      products: 0,
    }
    setSubcategories([...subcategories, newSubcategory])
    setIsAddDialogOpen(false)
  }

  // Handle subcategory update
  const handleUpdateSubcategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const updatedSubcategory = {
      ...editingSubcategory,
      name: formData.get("name") as string,
      slug: formData.get("slug") as string,
      description: formData.get("description") as string,
      active: formData.get("active\") === "\
