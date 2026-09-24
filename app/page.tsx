import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { Footer } from "@/components/footer";
import { Suspense } from "react";
import { InlineLoader } from "@/components/loader";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <Suspense
          fallback={<InlineLoader text="Loading featured products..." />}
        >
          <FeaturedProducts />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
