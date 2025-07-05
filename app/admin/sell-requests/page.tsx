import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Eye, Filter, ChevronLeft, ChevronRight, Download, Check, X } from "lucide-react"

// Mock sell request data
const sellRequests = [
  {
    id: "REQ-001",
    customer: "Rahul Sharma",
    date: "2023-05-15",
    laptop: "MacBook Pro 2021",
    condition: "Excellent",
    quoted: 150000,
    status: "Quoted",
  },
  {
    id: "REQ-002",
    customer: "Priya Patel",
    date: "2023-05-14",
    laptop: "Dell XPS 13",
    condition: "Good",
    quoted: 85000,
    status: "Pending",
  },
  {
    id: "REQ-003",
    customer: "Amit Kumar",
    date: "2023-05-13",
    laptop: "HP Spectre x360",
    condition: "Fair",
    quoted: 65000,
    status: "Accepted",
  },
  {
    id: "REQ-004",
    customer: "Neha Singh",
    date: "2023-05-12",
    laptop: "Lenovo ThinkPad X1",
    condition: "Good",
    quoted: 75000,
    status: "Rejected",
  },
  {
    id: "REQ-005",
    customer: "Vikram Joshi",
    date: "2023-05-11",
    laptop: "ASUS ROG Zephyrus",
    condition: "Excellent",
    quoted: 120000,
    status: "Completed",
  },
  {
    id: "REQ-006",
    customer: "Ananya Desai",
    date: "2023-05-10",
    laptop: "Acer Predator Helios",
    condition: "Good",
    quoted: 90000,
    status: "Quoted",
  },
  {
    id: "REQ-007",
    customer: "Rajesh Gupta",
    date: "2023-05-09",
    laptop: "Microsoft Surface Laptop",
    condition: "Fair",
    quoted: 70000,
    status: "Pending",
  },
  {
    id: "REQ-008",
    customer: "Meera Reddy",
    date: "2023-05-08",
    laptop: "Razer Blade 15",
    condition: "Excellent",
    quoted: 130000,
    status: "Accepted",
  },
  {
    id: "REQ-009",
    customer: "Sanjay Verma",
    date: "2023-05-07",
    laptop: "MSI GS66 Stealth",
    condition: "Good",
    quoted: 95000,
    status: "Completed",
  },
  {
    id: "REQ-010",
    customer: "Kavita Nair",
    date: "2023-05-06",
    laptop: "LG Gram 17",
    condition: "Fair",
    quoted: 60000,
    status: "Rejected",
  },
]

export default function SellRequestsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Sell Requests</h1>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" /> Export
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
            <div className="flex flex-1 items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search requests..." className="pl-8 w-full md:w-[300px]" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex items-center gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="quoted">Quoted</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Conditions</SelectItem>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Laptop</TableHead>
                  <TableHead>Condition</TableHead>
                  <TableHead className="text-right">Quoted Price</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sellRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.id}</TableCell>
                    <TableCell>{request.customer}</TableCell>
                    <TableCell>{request.date}</TableCell>
                    <TableCell>{request.laptop}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          request.condition === "Excellent"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : request.condition === "Good"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        }`}
                      >
                        {request.condition}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {request.status === "Pending" ? "-" : `Rs. ${request.quoted.toLocaleString()}`}
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          request.status === "Completed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : request.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                              : request.status === "Quoted"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                : request.status === "Accepted"
                                  ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {request.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {request.status === "Quoted" && (
                          <>
                            <Button variant="outline" size="icon" className="text-green-500 hover:text-green-600">
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="text-red-500 hover:text-red-600">
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>1</strong> to <strong>10</strong> of <strong>30</strong> results
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                3
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
