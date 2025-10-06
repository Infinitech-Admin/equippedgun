import { Navbar } from "@/components/navbar"
import { AboutContent } from "@/components/about-content"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Us - Guns & Ammo Dealership",
  description: "Learn about our professional firearms dealership, our commitment to safety, and our experienced team.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}
