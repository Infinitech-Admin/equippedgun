"use client"

import { useEffect, useState } from "react"
import { ProductCard } from "@/components/product-card"
import { InlineLoader } from "@/components/loader"
import type { Product } from "@/types"

// Mock data for featured products
const mockFeaturedProducts: Product[] = [
  {
    id: "1",
    name: "AR-15 Tactical Rifle",
    price: 1299.99,
    image: "/tactical-rifle.jpg",
    category: "firearm",
    description: "Professional grade tactical rifle with premium components",
    featured: true,
    inStock: true,
    specifications: {
      Caliber: ".223/5.56",
      Barrel: "16 inch",
      Action: "Semi-automatic",
    },
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
    specifications: {
      Caliber: "9mm",
      Grain: "124gr",
      Quantity: "50 rounds",
    },
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
    specifications: {
      Type: "Red Dot",
      Battery: "CR2032",
      Magnification: "1x",
    },
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
    specifications: {
      Caliber: "9mm",
      Capacity: "15+1",
      Action: "Striker-fired",
    },
  },
]

export const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true)
        // In a real app, this would fetch from the Laravel API
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?featured=true`)
        // const data = await response.json()

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setProducts(mockFeaturedProducts)
      } catch (err) {
        setError("Failed to load featured products")
        console.error("Error fetching featured products:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <InlineLoader text="Loading featured products..." />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-300">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance text-white">Featured Products</h2>
          <p className="text-lg text-slate-300 text-pretty max-w-2xl mx-auto">
            Discover our carefully selected collection of premium firearms, ammunition, and accessories from trusted
            manufacturers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/shop"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-600 text-white hover:bg-orange-700 h-10 px-6 py-2"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
