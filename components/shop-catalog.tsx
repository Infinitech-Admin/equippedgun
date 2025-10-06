"use client"

import { useEffect, useState } from "react"
import { ProductCard } from "@/components/product-card"
import { InlineLoader } from "@/components/loader"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X } from "lucide-react"
import type { Product } from "@/types"

// Extended mock data for the full catalog
const mockProducts: Product[] = [
  {
    id: "1",
    name: "AR-15 Tactical Rifle",
    price: 1299.99,
    image: "/tactical-rifle.jpg",
    category: "firearm",
    description: "Professional grade tactical rifle with premium components",
    featured: true,
    inStock: true,
    specifications: { Caliber: ".223/5.56", Barrel: "16 inch", Action: "Semi-automatic" },
  },
  {
    id: "2",
    name: "9mm Hollow Point Ammo",
    price: 24.99,
    image: "/ammunition-box.jpg",
    category: "ammunition",
    description: "Premium hollow point ammunition for personal defense",
    featured: true,
    inStock: true,
    specifications: { Caliber: "9mm", Grain: "124gr", Quantity: "50 rounds" },
  },
  {
    id: "3",
    name: "Tactical Red Dot Sight",
    price: 189.99,
    image: "/red-dot-sight.jpg",
    category: "accessory",
    description: "Precision red dot sight with multiple reticle options",
    featured: true,
    inStock: true,
    specifications: { Type: "Red Dot", Battery: "CR2032", Magnification: "1x" },
  },
  {
    id: "4",
    name: "Glock 19 Pistol",
    price: 549.99,
    image: "/pistol-handgun.jpg",
    category: "firearm",
    description: "Reliable and accurate compact pistol for professionals",
    featured: true,
    inStock: true,
    specifications: { Caliber: "9mm", Capacity: "15+1", Action: "Striker-fired" },
  },
  {
    id: "5",
    name: "AK-47 Rifle",
    price: 899.99,
    image: "/tactical-rifle.jpg",
    category: "firearm",
    description: "Classic reliable rifle with proven performance",
    featured: false,
    inStock: true,
    specifications: { Caliber: "7.62x39", Barrel: "16.3 inch", Action: "Semi-automatic" },
  },
  {
    id: "6",
    name: ".308 Match Ammo",
    price: 45.99,
    image: "/ammunition-box.jpg",
    category: "ammunition",
    description: "Precision match grade ammunition for long range shooting",
    featured: false,
    inStock: true,
    specifications: { Caliber: ".308", Grain: "168gr", Quantity: "20 rounds" },
  },
  {
    id: "7",
    name: "Tactical Bipod",
    price: 129.99,
    image: "/red-dot-sight.jpg",
    category: "accessory",
    description: "Adjustable tactical bipod for precision shooting",
    featured: false,
    inStock: true,
    specifications: { Material: "Aluminum", Height: "6-9 inches", Weight: "11 oz" },
  },
  {
    id: "8",
    name: "Smith & Wesson M&P",
    price: 479.99,
    image: "/pistol-handgun.jpg",
    category: "firearm",
    description: "Military and police grade pistol with excellent ergonomics",
    featured: false,
    inStock: false,
    specifications: { Caliber: "9mm", Capacity: "17+1", Action: "Striker-fired" },
  },
  {
    id: "9",
    name: "12 Gauge Buckshot",
    price: 18.99,
    image: "/ammunition-box.jpg",
    category: "ammunition",
    description: "Premium 12 gauge buckshot for home defense",
    featured: false,
    inStock: true,
    specifications: { Gauge: "12", Shot: "00 Buck", Quantity: "25 shells" },
  },
  {
    id: "10",
    name: "Tactical Flashlight",
    price: 79.99,
    image: "/red-dot-sight.jpg",
    category: "accessory",
    description: "High-output tactical flashlight with strobe function",
    featured: false,
    inStock: true,
    specifications: { Lumens: "1000", Battery: "18650", Runtime: "2 hours" },
  },
]

export const ShopCatalog = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("name")


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        // In a real app, this would fetch from the Laravel API
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
        // const data = await response.json()

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800))
        setProducts(mockProducts)
        setFilteredProducts(mockProducts)
      } catch (err) {
        console.error("Error fetching products:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    let filtered = products

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Sort products
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "name":
          return a.name.localeCompare(b.name)
        case "featured":
          return b.featured === a.featured ? 0 : b.featured ? 1 : -1
        default:
          return 0
      }
    })

    setFilteredProducts(filtered)
  }, [products, searchTerm, selectedCategory, sortBy])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSortBy("name")
  }

  const hasActiveFilters = searchTerm || selectedCategory !== "all" || sortBy !== "name"

  if (loading) {
    return <InlineLoader text="Loading product catalog..." />
  }

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background"
            />
          </div>

          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full lg:w-48 bg-background">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="firearm">Firearms</SelectItem>
              <SelectItem value="ammunition">Ammunition</SelectItem>
              <SelectItem value="accessory">Accessories</SelectItem>
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full lg:w-48 bg-background">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="featured">Featured First</SelectItem>
            </SelectContent>
          </Select>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button variant="outline" onClick={clearFilters} className="bg-transparent">
              <X className="h-4 w-4 mr-2" />
              Clear
            </Button>
          )}
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mt-4">
            {searchTerm && (
              <Badge variant="secondary" className="gap-1">
                Search: {searchTerm}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchTerm("")} />
              </Badge>
            )}
            {selectedCategory !== "all" && (
              <Badge variant="secondary" className="gap-1">
                Category: {selectedCategory}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("all")} />
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredProducts.length} of {products.length} products
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">In Stock:</span>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            {filteredProducts.filter((p) => p.inStock).length}
          </Badge>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No products found matching your criteria.</p>
          <Button variant="outline" onClick={clearFilters} className="bg-transparent">
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Legal Notice */}
      <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
        <h3 className="font-semibold mb-2">Important Legal Information</h3>
        <p className="text-sm text-muted-foreground">
          All firearm purchases require background checks and compliance with federal, state, and local laws. Valid
          identification required for pick-up. Ammunition sales restricted to 18+ (21+ for handgun ammunition).
        </p>
      </div>
    </div>
  )
}
