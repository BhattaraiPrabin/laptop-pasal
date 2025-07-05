import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  DollarSign,
  Users,
  Package,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Laptop } from "lucide-react" // Import Laptop component

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button>
            <Package className="mr-2 h-4 w-4" /> Add New Product
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Rs. 45,231.89</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">+20.1%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">+18.2%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Products Sold</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingDown className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-red-500 font-medium">-4.5%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">+12.2%</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>Monthly revenue for the current year</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  <BarChart className="h-16 w-16" />
                  <span className="ml-2">Sales chart will be displayed here</span>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest 5 orders placed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-2">
                          <Package className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Order #{1000 + i}</p>
                          <p className="text-xs text-muted-foreground">{i % 2 === 0 ? "Delivered" : "Processing"}</p>
                        </div>
                      </div>
                      <div className="text-sm font-medium">Rs. {Math.floor(Math.random() * 50000) + 10000}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Link href="/admin/orders" className="text-sm text-primary hover:underline">
                    View all orders
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Sell Requests</CardTitle>
                <CardDescription>Latest laptop sell requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-2">
                          <Laptop className="h-4 w-4" /> {/* Use Laptop component here */}
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {["MacBook Pro", "Dell XPS", "HP Spectre", "Lenovo ThinkPad"][i - 1]}
                          </p>
                          <p className="text-xs text-muted-foreground">{i % 2 === 0 ? "Pending Review" : "Quoted"}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Review
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Link href="/admin/sell-requests" className="text-sm text-primary hover:underline">
                    View all requests
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Selling Products</CardTitle>
                <CardDescription>Best performing products this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-2">
                          <Package className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">
                            {["MacBook Air M2", "Dell XPS 13", "ASUS ROG Zephyrus", "Lenovo Legion"][i - 1]}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {Math.floor(Math.random() * 100) + 50} units sold
                          </p>
                        </div>
                      </div>
                      <div className="text-sm font-medium flex items-center">
                        {i === 1 ? (
                          <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                        ) : i === 4 ? (
                          <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                        ) : null}
                        {i === 1 ? "+32%" : i === 4 ? "-12%" : ""}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Link href="/admin/products" className="text-sm text-primary hover:underline">
                    View all products
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="h-[400px] flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <BarChart className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-lg font-medium">Analytics Dashboard</h3>
            <p>Detailed analytics will be displayed here</p>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="h-[400px] flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <BarChart className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-lg font-medium">Reports Dashboard</h3>
            <p>Detailed reports will be displayed here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
