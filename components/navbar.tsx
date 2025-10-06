"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"
import { useState } from "react"
import { usePathname } from "next/navigation"

export const Navbar = () => {
  const { state } = useCart() // ✅ we only need the state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // ✅ Count distinct products, not total quantity
  const cartCount = state.items.length

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact Us" },
  ]

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-orange-500/30 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/90">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/images/logo.jpg"
              alt="Guns & Ammo Dealership"
              width={40}
              height={40}
              className="rounded-md group-hover:scale-105 transition-transform"
            />
            <span className="font-bold text-lg text-white">
              EQUIPPED GUNS & <span className="text-orange-400">AMMO DEALERSHIP</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActiveLink(link.href) ? "text-orange-400" : "text-white hover:text-orange-300"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-orange-400 transition-all duration-300 ${
                    isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Link href="/cart">
              <Button
                variant="outline"
                size="sm"
                className="relative bg-transparent border-orange-500 hover:border-orange-400 hover:bg-orange-500/20 text-white"
              >
                <ShoppingCart className="h-4 w-4 text-orange-400" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 hover:bg-red-500 text-white">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-orange-500/20 hover:text-orange-400 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-orange-500/30 py-4 bg-slate-800/50">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors px-2 py-1 rounded ${
                    isActiveLink(link.href)
                      ? "text-orange-400 bg-orange-500/20"
                      : "text-white hover:text-orange-300 hover:bg-orange-500/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
