import type { ReactNode } from "react"
import { redirect } from "next/navigation"
import Link from "next/link"
import { BarChart3, Package, ShoppingCart, Users, Laptop, LogOut, Settings } from "lucide-react"

// This is a mock authentication check
// In a real application, you would use a proper auth solution
const isAuthenticated = () => {
  // Mock implementation - always returns true for demo
  return true
}

const isAdmin = () => {
  // Mock implementation - always returns true for demo
  return true
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  // Check if user is authenticated and is an admin
  // In a real application, this would be handled by your auth provider
  if (!isAuthenticated() || !isAdmin()) {
    redirect("/auth/login")
  }

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
        <div className="p-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Laptop Pasal</span>
          </Link>
        </div>
        <nav className="mt-6">
          <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Main</div>
          <Link
            href="/admin"
            className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <BarChart3 className="h-5 w-5 mr-3" />
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Package className="h-5 w-5 mr-3" />
            Products
          </Link>
          <Link
            href="/admin/orders"
            className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ShoppingCart className="h-5 w-5 mr-3" />
            Orders
          </Link>
          <Link
            href="/admin/users"
            className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Users className="h-5 w-5 mr-3" />
            Users
          </Link>
          <Link
            href="/admin/sell-requests"
            className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Laptop className="h-5 w-5 mr-3" />
            Sell Requests
          </Link>

          <div className="px-4 py-2 mt-4 text-xs font-semibold text-gray-400 uppercase">Settings</div>
          <Link
            href="/admin/settings"
            className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </Link>
          <Link
            href="/auth/logout"
            className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-6 py-8">{children}</div>
      </main>
    </div>
  )
}
