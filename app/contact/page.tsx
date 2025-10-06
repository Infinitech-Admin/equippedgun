import { Navbar } from "@/components/navbar"
import { ContactContent } from "@/components/contact-content"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Us - Guns & Ammo Dealership",
  description: "Get in touch with our professional team for questions about firearms, ammunition, and services.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </div>
  )
}
