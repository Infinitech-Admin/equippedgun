import { Navbar } from "@/components/navbar"
import { ShopCatalog } from "@/components/shop-catalog"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import { InlineLoader } from "@/components/loader"

export const metadata = {
  title: "Shop - Guns & Ammo Dealership",
  description: "Browse our complete catalog of firearms, ammunition, and accessories.",
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-balance text-white">Product Catalog</h1>
          <p className="text-lg text-slate-300 text-pretty max-w-2xl">
            Browse our complete selection of professional firearms, ammunition, and accessories from trusted
            manufacturers.
          </p>
        </div>

        <Suspense fallback={<InlineLoader text="Loading product catalog..." />}>
          <ShopCatalog />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
