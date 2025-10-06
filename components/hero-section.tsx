"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Target, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const heroSlides = [
  {
    id: 1,
    image: "/tactical-rifle.jpg",
    title: "Professional Firearms",
    subtitle: "Quality rifles and tactical equipment",
    badge: "Professional Firearms Dealership",
  },
  {
    id: 2,
    image: "/ammunition-box.jpg",
    title: "Premium Ammunition",
    subtitle: "High-quality rounds for all calibers",
    badge: "Ammunition Specialists",
  },
  {
    id: 3,
    image: "/red-dot-sight.jpg",
    title: "Tactical Accessories",
    subtitle: "Precision optics and accessories",
    badge: "Tactical Equipment",
  },
  {
    id: 4,
    image: "/pistol-handgun.jpg",
    title: "Handgun Collection",
    subtitle: "Reliable sidearms for professionals",
    badge: "Handgun Specialists",
  },
]

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

 

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,140,0,0.1)_25%,rgba(255,140,0,0.1)_50%,transparent_50%,transparent_75%,rgba(255,140,0,0.1)_75%)] bg-[length:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="w-fit bg-orange-500 text-white border-orange-600 font-semibold px-4 py-2"
              >
                {currentSlideData.badge}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-white">{currentSlideData.title}</span>{" "}
                <span className="text-orange-400">& Ammunition</span>
              </h1>
              <p className="text-lg text-gray-300 text-pretty max-w-lg">
                {currentSlideData.subtitle}. Professional service with complete compliance to local regulations.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-800 border border-orange-500/50 hover:border-orange-400 transition-colors">
                <Shield className="h-5 w-5 text-orange-400" />
                <div>
                  <p className="font-medium text-sm text-white">Licensed</p>
                  <p className="text-xs text-gray-400">Fully Compliant</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-800 border border-yellow-500/50 hover:border-yellow-400 transition-colors">
                <Target className="h-5 w-5 text-yellow-400" />
                <div>
                  <p className="font-medium text-sm text-white">Expert Service</p>
                  <p className="text-xs text-gray-400">Professional Staff</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-800 border border-red-500/50 hover:border-red-400 transition-colors">
                <Award className="h-5 w-5 text-red-400" />
                <div>
                  <p className="font-medium text-sm text-white">Quality Products</p>
                  <p className="text-xs text-gray-400">Trusted Brands</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="w-full sm:w-auto group bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                >
                  Browse Catalog
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-slate-900 font-semibold"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Legal Notice */}
            <div className="p-4 bg-slate-800 rounded-lg border-l-4 border-orange-500">
              <p className="text-sm text-gray-300">
                <strong className="text-orange-400">Important:</strong> All firearms and ammunition are for pick-up
                only. Valid identification and compliance with local firearm laws required.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border-2 border-orange-500/30">
              <Image
                src={currentSlideData.image || "/placeholder.svg"}
                alt={currentSlideData.title}
                fill
                className="object-cover transition-all duration-500"
                priority
              />

           
              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-orange-500 w-6" : "bg-white/50 hover:bg-white/70 w-2"
                    }`}
                  />
                ))}
              </div>

              {/* Overlay with slide info */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-16 left-4 right-4">
                <div className="bg-slate-900/95 backdrop-blur-sm rounded-lg p-4 border border-orange-500/50">
                  <p className="text-sm font-medium text-orange-400">{currentSlideData.title}</p>
                  <p className="text-xs text-gray-300">Licensed • Insured • Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
