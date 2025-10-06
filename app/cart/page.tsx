import { Navbar } from "@/components/navbar"
import { CartPage } from "@/components/cart-page"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Shopping Cart - Guns & Ammo Dealership",
  description: "Review your selected items before checkout.",
}

export default function Cart() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <CartPage />
      </main>
      <Footer />
    </div>
  )
}
