import { Navbar } from "@/components/navbar"
import { CheckoutForm } from "@/components/checkout-form"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Checkout - Guns & Ammo Dealership",
  description: "Complete your order for pickup at one of our locations.",
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <CheckoutForm />
      </main>
      <Footer />
    </div>
  )
}
