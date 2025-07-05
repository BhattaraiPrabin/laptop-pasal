import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, ChevronRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

// Mock function to get blog post data
function getBlogPost(id: string) {
  const postId = Number.parseInt(id)

  const posts = [
    {
      id: 1,
      title: "Best Laptops Under Rs. 50,000 in Nepal",
      excerpt:
        "Looking for a budget-friendly laptop? Check out our top picks for laptops under Rs. 50,000 that offer great value for money.",
      image: "/placeholder.svg?height=600&width=1200",
      date: "May 15, 2023",
      category: "buying-guide",
      author: "Rajesh Sharma",
      authorImage: "/placeholder.svg?height=100&width=100",
      content: `
        <p>Finding a good laptop on a budget can be challenging, especially when you have a specific price point in mind. If you're looking for a laptop under Rs. 50,000 in Nepal, you've come to the right place. In this guide, we'll explore the best options available in this price range that offer a good balance of performance, features, and value.</p>
        
        <h2>What to Expect in This Price Range</h2>
        
        <p>Before we dive into the specific models, it's important to set realistic expectations for laptops in this price range. For under Rs. 50,000, you can expect:</p>
        
        <ul>
          <li>Intel Core i3 or AMD Ryzen 3 processors</li>
          <li>4GB to 8GB of RAM</li>
          <li>128GB to 512GB of storage (usually SSD)</li>
          <li>HD or Full HD displays</li>
          <li>Basic integrated graphics</li>
          <li>Decent build quality</li>
        </ul>
        
        <p>These specifications are suitable for everyday tasks like web browsing, document editing, video streaming, and light multitasking. However, they may not be ideal for demanding tasks like video editing, 3D rendering, or gaming.</p>
        
        <h2>Our Top Picks</h2>
        
        <h3>1. Acer Aspire 3</h3>
        
        <p>The Acer Aspire 3 is one of the best options in this price range, offering a good balance of performance and features.</p>
        
        <p><strong>Specifications:</strong></p>
        <ul>
          <li>Processor: Intel Core i3-10th Gen</li>
          <li>RAM: 4GB (Upgradable to 12GB)</li>
          <li>Storage: 256GB SSD</li>
          <li>Display: 15.6-inch HD</li>
          <li>Graphics: Intel UHD Graphics</li>
          <li>Battery: Up to 6 hours</li>
          <li>Price: Rs. 48,000</li>
        </ul>
        
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Good performance for everyday tasks</li>
          <li>Upgradable RAM</li>
          <li>Fast SSD storage</li>
          <li>Decent battery life</li>
        </ul>
        
        <p><strong>Cons:</strong></p>
        <ul>
          <li>HD display (not Full HD)</li>
          <li>Average build quality</li>
        </ul>
        
        <h3>2. Lenovo IdeaPad Slim 3</h3>
        
        <p>The Lenovo IdeaPad Slim 3 is another excellent option with a sleek design and good performance.</p>
        
        <p><strong>Specifications:</strong></p>
        <ul>
          <li>Processor: AMD Ryzen 3 3250U</li>
          <li>RAM: 8GB</li>
          <li>Storage: 256GB SSD</li>
          <li>Display: 15.6-inch Full HD</li>
          <li>Graphics: AMD Radeon Graphics</li>
          <li>Battery: Up to 7 hours</li>
          <li>Price: Rs. 49,500</li>
        </ul>
        
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Full HD display</li>
          <li>8GB RAM for better multitasking</li>
          <li>Good battery life</li>
          <li>Sleek design</li>
        </ul>
        
        <p><strong>Cons:</strong></p>
        <ul>
          <li>RAM is not upgradable</li>
          <li>Average speakers</li>
        </ul>
        
        <h3>3. HP 15s</h3>
        
        <p>The HP 15s offers reliable performance and a good display at an affordable price.</p>
        
        <p><strong>Specifications:</strong></p>
        <ul>
          <li>Processor: Intel Core i3-10th Gen</li>
          <li>RAM: 4GB (Upgradable to 16GB)</li>
          <li>Storage: 1TB HDD</li>
          <li>Display: 15.6-inch Full HD</li>
          <li>Graphics: Intel UHD Graphics</li>
          <li>Battery: Up to 5 hours</li>
          <li>Price: Rs. 47,000</li>
        </ul>
        
        <p><strong>Pros:</strong></p>
        <ul>
          <li>Full HD display</li>
          <li>Large storage capacity</li>
          <li>Good keyboard</li>
          <li>Upgradable RAM</li>
        </ul>
        
        <p><strong>Cons:</strong></p>
        <ul>
          <li>HDD instead of SSD (slower performance)</li>
          <li>Average battery life</li>
        </ul>
        
        <h2>Conclusion</h2>
        
        <p>When shopping for a laptop under Rs. 50,000 in Nepal, it's important to prioritize your needs. If you need more RAM for multitasking, the Lenovo IdeaPad Slim 3 is a great choice. If you prefer a laptop with upgradable components, the Acer Aspire 3 or HP 15s would be better options.</p>
        
        <p>All of these laptops offer good value for money and are suitable for everyday tasks. However, if you can stretch your budget a bit more, you might find laptops with better specifications that offer more value in the long run.</p>
        
        <p>Remember to check for warranty and after-sales service when purchasing a laptop, as these can be crucial factors in ensuring a good ownership experience.</p>
      `,
      relatedPosts: [2, 3, 4],
    },
    {
      id: 2,
      title: "How to Sell Your Laptop Online in Nepal",
      excerpt: "Learn the step-by-step process to sell your used laptop online and get the best price for it in Nepal.",
      image: "/placeholder.svg?height=600&width=1200",
      date: "April 28, 2023",
      category: "how-to",
      author: "Sita Thapa",
      authorImage: "/placeholder.svg?height=100&width=100",
      content: `
        <p>Selling your used laptop online can be a great way to make some extra cash and upgrade to a newer model. However, the process can be daunting if you're not familiar with it. In this guide, we'll walk you through the step-by-step process of selling your laptop online in Nepal.</p>
        
        <h2>Step 1: Prepare Your Laptop for Sale</h2>
        
        <p>Before listing your laptop for sale, it's important to prepare it properly. Here's what you should do:</p>
        
        <ul>
          <li><strong>Back up your data:</strong> Make sure to back up all your important files and documents to an external drive or cloud storage.</li>
          <li><strong>Factory reset:</strong> Perform a factory reset to remove all your personal data and restore the laptop to its original state.</li>
          <li><strong>Clean your laptop:</strong> Clean the screen, keyboard, and body of your laptop to make it look presentable.</li>
          <li><strong>Gather accessories:</strong> Collect all the original accessories like charger, manuals, and packaging if available.</li>
        </ul>
        
        <h2>Step 2: Determine the Value of Your Laptop</h2>
        
        <p>To set a realistic price for your laptop, you need to determine its current market value. Here's how:</p>
        
        <ul>
          <li>Research similar models online to see what they're selling for.</li>
          <li>Consider the age, condition, and specifications of your laptop.</li>
          <li>Factor in any upgrades or additional accessories you're including.</li>
          <li>Be honest about any defects or issues with your laptop.</li>
        </ul>
        
        <h2>Step 3: Choose Where to Sell</h2>
        
        <p>There are several platforms where you can sell your laptop in Nepal:</p>
        
        <ul>
          <li><strong>Online marketplaces:</strong> Websites like Hamrobazar, Daraz, and Facebook Marketplace are popular options.</li>
          <li><strong>Specialized tech stores:</strong> Some stores like Laptop Pasal offer buy-back programs where you can sell your used laptop.</li>
          <li><strong>Social media groups:</strong> There are many buy/sell groups on Facebook specifically for electronics.</li>
        </ul>
        
        <h2>Step 4: Create a Compelling Listing</h2>
        
        <p>To attract potential buyers, you need to create a detailed and honest listing. Include:</p>
        
        <ul>
          <li>Clear, high-quality photos of your laptop from different angles.</li>
          <li>Detailed specifications (processor, RAM, storage, display size, etc.).</li>
          <li>Information about the condition, age, and any defects.</li>
          <li>Reason for selling (be honest but positive).</li>
          <li>Your asking price and whether it's negotiable.</li>
          <li>Preferred payment and delivery methods.</li>
        </ul>
        
        <h2>Step 5: Communicate with Potential Buyers</h2>
        
        <p>Once your listing is live, you'll start receiving inquiries from potential buyers. Here are some tips for effective communication:</p>
        
        <ul>
          <li>Respond promptly to all inquiries.</li>
          <li>Be polite and professional in your communications.</li>
          <li>Answer all questions honestly.</li>
          <li>Be prepared to negotiate on the price.</li>
          <li>Arrange a safe meeting place for in-person transactions.</li>
        </ul>
        
        <h2>Step 6: Complete the Sale</h2>
        
        <p>When you've found a buyer and agreed on a price, it's time to complete the sale:</p>
        
        <ul>
          <li>Meet in a public place or at a reputable store if selling in person.</li>
          <li>Allow the buyer to inspect and test the laptop before finalizing the sale.</li>
          <li>Provide a receipt or simple sales agreement if possible.</li>
          <li>Accept payment through secure methods (cash for in-person sales, or secure online payment platforms).</li>
          <li>Transfer ownership by providing all accessories and removing any accounts or passwords.</li>
        </ul>
        
        <h2>Safety Tips</h2>
        
        <p>When selling your laptop online, safety should be your priority:</p>
        
        <ul>
          <li>Meet buyers in public places during daylight hours.</li>
          <li>Bring a friend or family member with you if possible.</li>
          <li>Be cautious of buyers who are unwilling to meet in person or want to pay through unsecure methods.</li>
          <li>Trust your instincts – if something feels off, it probably is.</li>
        </ul>
        
        <h2>Conclusion</h2>
        
        <p>Selling your laptop online in Nepal can be a straightforward process if you follow these steps. By preparing your laptop properly, setting a realistic price, creating a detailed listing, and communicating effectively with buyers, you can sell your laptop quickly and at a good price.</p>
        
        <p>Remember, the key to a successful sale is honesty and transparency. Be upfront about the condition of your laptop and any issues it may have. This will help you build trust with potential buyers and avoid problems after the sale.</p>
      `,
      relatedPosts: [1, 3, 9],
    },
  ]

  // Find the post with the matching ID
  const post = posts.find((p) => p.id === postId) || posts[0]

  // Get related posts
  const relatedPosts = post.relatedPosts
    .map((id) => {
      const relatedPost = posts.find((p) => p.id === id)
      if (relatedPost) {
        return {
          id: relatedPost.id,
          title: relatedPost.title,
          excerpt: relatedPost.excerpt,
          image: relatedPost.image,
          date: relatedPost.date,
          category: relatedPost.category,
        }
      }
      return null
    })
    .filter(Boolean)

  return { post, relatedPosts }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const { post, relatedPosts } = getBlogPost(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link href="/blog" className="text-muted-foreground hover:text-foreground">
          Blog
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="truncate max-w-[200px]">{post.title}</span>
      </div>

      {/* Blog Post Header */}
      <div className="mb-8">
        <Badge className="mb-4 capitalize">{post.category.replace("-", " ")}</Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <img
              src={post.authorImage || "/placeholder.svg"}
              alt={post.author}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-auto object-cover" />
      </div>

      {/* Blog Post Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="outline">Laptops</Badge>
            <Badge variant="outline">Budget</Badge>
            <Badge variant="outline">Nepal</Badge>
            <Badge variant="outline">Technology</Badge>
          </div>

          {/* Share */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-medium">Share this article:</span>
            <Button variant="outline" size="icon" className="rounded-full">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Share on Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Share on Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">Share on LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Copy link</span>
            </Button>
          </div>

          {/* Author Bio */}
          <div className="bg-muted/50 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <img
                src={post.authorImage || "/placeholder.svg"}
                alt={post.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold mb-2">About {post.author}</h3>
                <p className="text-muted-foreground mb-4">
                  {post.author} is a tech enthusiast and content writer at Laptop Pasal. With over 5 years of experience
                  in the tech industry, they specialize in laptop reviews, buying guides, and tech tips.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm">
                    All Posts
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Comments (3)</h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src="/placeholder.svg?height=50&width=50"
                      alt="Commenter"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium">Anish Gurung</h4>
                          <p className="text-xs text-muted-foreground">May 16, 2023</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Reply
                        </Button>
                      </div>
                      <p className="text-muted-foreground">
                        Great article! I was looking for budget laptops and this really helped me narrow down my
                        options. I ended up buying the Lenovo IdeaPad Slim 3 and I'm very happy with it.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src="/placeholder.svg?height=50&width=50"
                      alt="Commenter"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium">Priya Rai</h4>
                          <p className="text-xs text-muted-foreground">May 17, 2023</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Reply
                        </Button>
                      </div>
                      <p className="text-muted-foreground">
                        I would also recommend considering the Asus VivoBook 15 in this price range. It offers good
                        performance and build quality for around Rs. 49,000.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src="/placeholder.svg?height=50&width=50"
                      alt="Commenter"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium">Sunil Poudel</h4>
                          <p className="text-xs text-muted-foreground">May 18, 2023</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Reply
                        </Button>
                      </div>
                      <p className="text-muted-foreground">
                        Do any of these laptops have good battery life? I need something that can last at least 6-7
                        hours for my classes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-4">Leave a Comment</h4>
              <textarea
                className="w-full p-3 border rounded-md mb-4 bg-background"
                rows={4}
                placeholder="Write your comment here..."
              ></textarea>
              <Button>Post Comment</Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Related Posts */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Related Posts</h3>
            <div className="space-y-4">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="flex gap-3">
                  <Link href={`/blog/${relatedPost.id}`} className="shrink-0">
                    <img
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  </Link>
                  <div>
                    <Link href={`/blog/${relatedPost.id}`} className="font-medium hover:text-primary transition-colors">
                      {relatedPost.title}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1">{relatedPost.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <div className="space-y-2">
              <Link
                href="/blog/category/buying-guide"
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
              >
                <span>Buying Guides</span>
                <span className="text-xs bg-muted-foreground/20 px-2 py-1 rounded-full">12</span>
              </Link>
              <Link
                href="/blog/category/tech-tips"
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
              >
                <span>Tech Tips</span>
                <span className="text-xs bg-muted-foreground/20 px-2 py-1 rounded-full">8</span>
              </Link>
              <Link
                href="/blog/category/reviews"
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
              >
                <span>Reviews</span>
                <span className="text-xs bg-muted-foreground/20 px-2 py-1 rounded-full">15</span>
              </Link>
              <Link
                href="/blog/category/news"
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
              >
                <span>News</span>
                <span className="text-xs bg-muted-foreground/20 px-2 py-1 rounded-full">6</span>
              </Link>
              <Link
                href="/blog/category/how-to"
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
              >
                <span>How To</span>
                <span className="text-xs bg-muted-foreground/20 px-2 py-1 rounded-full">9</span>
              </Link>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                Laptops
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                Budget
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                Gaming
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                Student
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                Windows
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                MacBook
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                SSD
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                RAM
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                Processor
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                Battery
              </Badge>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-4">Get the latest tech news and updates delivered to your inbox.</p>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 rounded-md border mb-2 bg-background"
            />
            <Button className="w-full">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
