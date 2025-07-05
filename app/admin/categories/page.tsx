"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Search, Plus, Edit, Trash2, ChevronRight } from "lucide-react"
import Link from "next/link"

// Mock data for categories
const mockCategories = [
  {
    id: 1,
    name: "Laptop",
    slug: "laptop",
    description: "All types of laptops including ultrabooks, business laptops, and student laptops",
    active: true,
    subcategories: 3,
    products: 45,
  },
  {
    id: 2,
    name: "Gaming Laptop",
    slug: "gaming-laptop",
    description: "High-performance laptops designed specifically for gaming",
    active: true,
    subcategories: 3,
    products: 28,
  },
  {
    id: 3,
    name: "Accessories",
    slug: "accessories",
    description: "Laptop accessories including mice, keyboards, headphones, and more",
    active: true,
    subcategories: 5,
    products: 67,
  },
  {
    id: 4,
    name: "Components",
    slug: "components",
    description: "Laptop components including RAM, SSDs, and other upgrades",
    active: true,
    subcategories: 4,
    products: 32,
  },
  {
    id: 5,
    name: "Software",
    slug: "software",
    description: "Operating systems, productivity software, and antivirus programs",
    active: false,
    subcategories: 3,
    products: 12,
  },
]

export default function CategoriesPage() {
  const [categories, setCategories] = useState(mockCategories)
  const [searchQuery, setSearchQuery] = useState("")
  const [editingCategory, setEditingCategory] = useState<any>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Handle category creation
  const handleAddCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newCategory = {
      id: categories.length + 1,
      name: formData.get("name") as string,
      slug: formData.get("slug") as string,
      description: formData.get("description") as string,
      active: formData.get("active") === "on",
      subcategories: 0,
      products: 0,
    }
    setCategories([...categories, newCategory])
    setIsAddDialogOpen(false)
  }

  // Handle category update
  const handleUpdateCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const updatedCategory = {
      ...editingCategory,
      name: formData.get("name") as string,
      slug: formData.get("slug") as string,
      description: formData.get("description") as string,
      active: formData.get("active") === "on",
    }
    setCategories(categories.map((category) => (category.id === updatedCategory.id ? updatedCategory : category)))
    setIsEditDialogOpen(false)
  }

  // Handle category deletion
  const handleDeleteCategory = () => {
    setCategories(categories.filter((category) => category.id !== editingCategory.id))
    setIsDeleteDialogOpen(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Category
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <form onSubmit={handleAddCategory}>
              <DialogHeader>
                <DialogTitle>Add New Category</DialogTitle>
                <DialogDescription>Create a new product category</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Category Name *</Label>
                  <Input id="name" name="name" placeholder="Enter category name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug">Slug *</Label>
                  <Input id="slug" name="slug" placeholder="category-slug" required />
                  <p className="text-xs text-muted-foreground">
                    The "slug" is the URL-friendly version of the name. It is usually all lowercase and contains only
                    letters, numbers, and hyphens.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" name="description" placeholder="Enter category description" />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="active" name="active" defaultChecked />
                  <Label htmlFor="active">Active</Label>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Category</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Manage Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search categories..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-center">Subcategories</TableHead>
                  <TableHead className="text-center">Products</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCategories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell className="font-medium">{category.name}</TableCell>
                    <TableCell className="max-w-[300px] truncate">{category.description}</TableCell>
                    <TableCell className="text-center">{category.subcategories}</TableCell>
                    <TableCell className="text-center">{category.products}</TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          category.active
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {category.active ? "Active" : "Inactive"}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/admin/categories/${category.id}/subcategories`}>
                          <Button variant="outline" size="icon" title="View Subcategories">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Dialog
                          open={isEditDialogOpen && editingCategory?.id === category.id}
                          onOpenChange={(open) => {
                            setIsEditDialogOpen(open)
                            if (!open) setEditingCategory(null)
                          }}
                        >
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                setEditingCategory(category)
                                setIsEditDialogOpen(true)
                              }}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[550px]">
                            <form onSubmit={handleUpdateCategory}>
                              <DialogHeader>
                                <DialogTitle>Edit Category</DialogTitle>
                                <DialogDescription>Update category information</DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="space-y-2">
                                  <Label htmlFor="edit-name">Category Name *</Label>
                                  <Input
                                    id="edit-name"
                                    name="name"
                                    placeholder="Enter category name"
                                    defaultValue={editingCategory?.name}
                                    required
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="edit-slug">Slug *</Label>
                                  <Input
                                    id="edit-slug"
                                    name="slug"
                                    placeholder="category-slug"
                                    defaultValue={editingCategory?.slug}
                                    required
                                  />
                                  <p className="text-xs text-muted-foreground">
                                    The "slug" is the URL-friendly version of the name. It is usually all lowercase and
                                    contains only letters, numbers, and hyphens.
                                  </p>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="edit-description">Description</Label>
                                  <Textarea
                                    id="edit-description"
                                    name="description"
                                    placeholder="Enter category description"
                                    defaultValue={editingCategory?.description}
                                  />
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Switch id="edit-active" name="active" defaultChecked={editingCategory?.active} />
                                  <Label htmlFor="edit-active">Active</Label>
                                </div>
                              </div>
                              <DialogFooter>
                                <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                                  Cancel
                                </Button>
                                <Button type="submit">Save Changes</Button>
                              </DialogFooter>
                            </form>
                          </DialogContent>
                        </Dialog>
                        <Dialog
                          open={isDeleteDialogOpen && editingCategory?.id === category.id}
                          onOpenChange={(open) => {
                            setIsDeleteDialogOpen(open)
                            if (!open) setEditingCategory(null)
                          }}
                        >
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                setEditingCategory(category)
                                setIsDeleteDialogOpen(true)
                              }}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Delete Category</DialogTitle>
                              <DialogDescription>
                                Are you sure you want to delete the category "{editingCategory?.name}"? This action
                                cannot be undone.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter className="mt-4">
                              <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                                Cancel
                              </Button>
                              <Button variant="destructive" onClick={handleDeleteCategory}>
                                Delete
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredCategories.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-6">
                      No categories found. Try a different search or add a new category.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
