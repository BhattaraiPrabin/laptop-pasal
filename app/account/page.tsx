"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { User, Package, Heart, Settings, LogOut, Trash, ShoppingCart, Clock, CheckCircle, XCircle } from "lucide-react"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-xl font-bold">Rajesh Sharma</h2>
                <p className="text-muted-foreground">rajesh.sharma@example.com</p>
              </div>

              <nav className="space-y-1">
                <Button
                  variant={activeTab === "profile" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button
                  variant={activeTab === "orders" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("orders")}
                >
                  <Package className="mr-2 h-4 w-4" />
                  Orders
                </Button>
                <Button
                  variant={activeTab === "wishlist" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("wishlist")}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </Button>
                <Button
                  variant={activeTab === "settings" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/10"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>View and update your personal information</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium mb-1">
                        First Name
                      </label>
                      <Input id="first-name" defaultValue="Rajesh" />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <Input id="last-name" defaultValue="Sharma" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <Input id="email" type="email" defaultValue="rajesh.sharma@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" defaultValue="9876543210" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium mb-1">
                      Address
                    </label>
                    <Textarea id="address" defaultValue="123 Main Street, Kathmandu" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium mb-1">
                        City
                      </label>
                      <Input id="city" defaultValue="Kathmandu" />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium mb-1">
                        State/Province
                      </label>
                      <Input id="state" defaultValue="Bagmati" />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium mb-1">
                        Postal Code
                      </label>
                      <Input id="zip" defaultValue="44600" />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <Card>
              <CardHeader>
                <CardTitle>My Orders</CardTitle>
                <CardDescription>View and track your orders</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="mb-4">
                    <TabsTrigger value="all">All Orders</TabsTrigger>
                    <TabsTrigger value="processing">Processing</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-4">
                    {/* Order 1 */}
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                          <div>
                            <p className="font-medium">Order #LP78945</p>
                            <p className="text-sm text-muted-foreground">Placed on May 15, 2023</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-500">
                              Processing
                            </Badge>
                          </div>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-20 h-20 bg-muted rounded-md shrink-0">
                              <img
                                src="/placeholder.svg?height=80&width=80"
                                alt="Product"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">HP Pavilion 15</h4>
                              <p className="text-sm text-muted-foreground">Intel Core i5, 8GB RAM, 512GB SSD</p>
                              <div className="flex justify-between items-center mt-2">
                                <p className="font-medium">Rs. 85,000</p>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">
                                    Track Order
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    View Details
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Order 2 */}
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                          <div>
                            <p className="font-medium">Order #LP78932</p>
                            <p className="text-sm text-muted-foreground">Placed on April 28, 2023</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-500">
                              Completed
                            </Badge>
                          </div>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-20 h-20 bg-muted rounded-md shrink-0">
                              <img
                                src="/placeholder.svg?height=80&width=80"
                                alt="Product"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">Logitech MX Master 3 Wireless Mouse</h4>
                              <p className="text-sm text-muted-foreground">Wireless Mouse</p>
                              <div className="flex justify-between items-center mt-2">
                                <p className="font-medium">Rs. 9,000</p>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">
                                    Buy Again
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    View Details
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Order 3 */}
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                          <div>
                            <p className="font-medium">Order #LP78901</p>
                            <p className="text-sm text-muted-foreground">Placed on April 10, 2023</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-500">
                              Cancelled
                            </Badge>
                          </div>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-20 h-20 bg-muted rounded-md shrink-0">
                              <img
                                src="/placeholder.svg?height=80&width=80"
                                alt="Product"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">Dell Inspiron 15</h4>
                              <p className="text-sm text-muted-foreground">Intel Core i7, 16GB RAM, 512GB SSD</p>
                              <div className="flex justify-between items-center mt-2">
                                <p className="font-medium">Rs. 95,000</p>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">
                                    Buy Again
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    View Details
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="processing">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                          <div>
                            <p className="font-medium">Order #LP78945</p>
                            <p className="text-sm text-muted-foreground">Placed on May 15, 2023</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-500">
                              Processing
                            </Badge>
                          </div>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-20 h-20 bg-muted rounded-md shrink-0">
                              <img
                                src="/placeholder.svg?height=80&width=80"
                                alt="Product"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">HP Pavilion 15</h4>
                              <p className="text-sm text-muted-foreground">Intel Core i5, 8GB RAM, 512GB SSD</p>
                              <div className="flex justify-between items-center mt-2">
                                <p className="font-medium">Rs. 85,000</p>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">
                                    Track Order
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    View Details
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="completed">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                          <div>
                            <p className="font-medium">Order #LP78932</p>
                            <p className="text-sm text-muted-foreground">Placed on April 28, 2023</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-500">
                              Completed
                            </Badge>
                          </div>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-20 h-20 bg-muted rounded-md shrink-0">
                              <img
                                src="/placeholder.svg?height=80&width=80"
                                alt="Product"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">Logitech MX Master 3 Wireless Mouse</h4>
                              <p className="text-sm text-muted-foreground">Wireless Mouse</p>
                              <div className="flex justify-between items-center mt-2">
                                <p className="font-medium">Rs. 9,000</p>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">
                                    Buy Again
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    View Details
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="cancelled">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                          <div>
                            <p className="font-medium">Order #LP78901</p>
                            <p className="text-sm text-muted-foreground">Placed on April 10, 2023</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-500">
                              Cancelled
                            </Badge>
                          </div>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-20 h-20 bg-muted rounded-md shrink-0">
                              <img
                                src="/placeholder.svg?height=80&width=80"
                                alt="Product"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">Dell Inspiron 15</h4>
                              <p className="text-sm text-muted-foreground">Intel Core i7, 16GB RAM, 512GB SSD</p>
                              <div className="flex justify-between items-center mt-2">
                                <p className="font-medium">Rs. 95,000</p>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">
                                    Buy Again
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    View Details
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}

          {/* Wishlist Tab */}
          {activeTab === "wishlist" && (
            <Card>
              <CardHeader>
                <CardTitle>My Wishlist</CardTitle>
                <CardDescription>Products you've saved for later</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Wishlist Item 1 */}
                  <div className="flex flex-col md:flex-row gap-4 border-b pb-4">
                    <div className="w-24 h-24 bg-muted rounded-md shrink-0">
                      <img
                        src="/placeholder.svg?height=96&width=96"
                        alt="Product"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h4 className="font-medium">Asus ROG Strix G15</h4>
                          <p className="text-sm text-muted-foreground">AMD Ryzen 7, 16GB RAM, 1TB SSD, RTX 3060</p>
                          <p className="font-medium mt-1">Rs. 150,000</p>
                        </div>
                        <div className="flex gap-2 mt-2 md:mt-0">
                          <Button size="sm">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          In Stock
                        </Badge>
                        <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                          <Clock className="mr-1 h-3 w-3" />
                          Price Drop Alert
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Wishlist Item 2 */}
                  <div className="flex flex-col md:flex-row gap-4 border-b pb-4">
                    <div className="w-24 h-24 bg-muted rounded-md shrink-0">
                      <img
                        src="/placeholder.svg?height=96&width=96"
                        alt="Product"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h4 className="font-medium">Apple MacBook Air M2</h4>
                          <p className="text-sm text-muted-foreground">M2 Chip, 8GB RAM, 256GB SSD</p>
                          <p className="font-medium mt-1">Rs. 175,000</p>
                        </div>
                        <div className="flex gap-2 mt-2 md:mt-0">
                          <Button size="sm">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-red-600 border-red-600">
                          <XCircle className="mr-1 h-3 w-3" />
                          Out of Stock
                        </Badge>
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          <Clock className="mr-1 h-3 w-3" />
                          Notify When Available
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Wishlist Item 3 */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-24 h-24 bg-muted rounded-md shrink-0">
                      <img
                        src="/placeholder.svg?height=96&width=96"
                        alt="Product"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h4 className="font-medium">HyperX Cloud II Gaming Headset</h4>
                          <p className="text-sm text-muted-foreground">7.1 Surround Sound, Memory Foam Ear Cushions</p>
                          <p className="font-medium mt-1">Rs. 8,500</p>
                        </div>
                        <div className="flex gap-2 mt-2 md:mt-0">
                          <Button size="sm">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          In Stock
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="password">
                  <TabsList className="mb-4">
                    <TabsTrigger value="password">Change Password</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="privacy">Privacy</TabsTrigger>
                  </TabsList>

                  <TabsContent value="password" className="space-y-4">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="current-password" className="block text-sm font-medium mb-1">
                          Current Password
                        </label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div>
                        <label htmlFor="new-password" className="block text-sm font-medium mb-1">
                          New Password
                        </label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium mb-1">
                          Confirm New Password
                        </label>
                        <Input id="confirm-password" type="password" />
                      </div>
                      <Button>Change Password</Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="notifications" className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Email Notifications</h4>
                          <p className="text-sm text-muted-foreground">Receive emails about your account activity</p>
                        </div>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All notifications</SelectItem>
                            <SelectItem value="important">Important only</SelectItem>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Order Updates</h4>
                          <p className="text-sm text-muted-foreground">Receive updates about your orders</p>
                        </div>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All updates</SelectItem>
                            <SelectItem value="important">Important only</SelectItem>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Marketing Emails</h4>
                          <p className="text-sm text-muted-foreground">Receive emails about promotions and offers</p>
                        </div>
                        <Select defaultValue="none">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All marketing</SelectItem>
                            <SelectItem value="weekly">Weekly digest</SelectItem>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button>Save Preferences</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="privacy" className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Profile Visibility</h4>
                          <p className="text-sm text-muted-foreground">Control who can see your profile information</p>
                        </div>
                        <Select defaultValue="private">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Data Usage</h4>
                          <p className="text-sm text-muted-foreground">
                            Allow us to use your data to improve our services
                          </p>
                        </div>
                        <Select defaultValue="minimal">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full">Full usage</SelectItem>
                            <SelectItem value="minimal">Minimal usage</SelectItem>
                            <SelectItem value="none">No usage</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="pt-4">
                        <Button variant="destructive">Delete Account</Button>
                        <p className="text-xs text-muted-foreground mt-2">
                          This action is irreversible and will permanently delete all your data.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
