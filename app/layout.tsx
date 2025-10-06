import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"  // Use Google Fonts as a fallback
import { Roboto_Mono } from "next/font/google"  // Adding Google Mono Font
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/components/cart-provider"
import { CustomCursor } from "@/components/cursor"
import { Suspense } from "react"

// Load Google Fonts using Next.js Font Optimization
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Variable for Inter font
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono", // Variable for Roboto Mono font
})

export const metadata: Metadata = {
  title: "Guns & Ammo Dealership - Professional Firearms & Ammunition",
  description: "Professional firearms and ammunition dealership. Pick-up only. Comply with local laws.",
  keywords: [
    "guns", "ammo", "firearms", "licensed FFL dealer", "handguns", "pistols", "revolvers",
    "rifles", "assault rifles", "shotguns", "hunting rifles", "tactical weapons", "firearm accessories",
    "gun store", "gun shop", "ammunition", "ammo supplies", "optics", "scopes", "gun sights", 
    "firearm safety", "gun holsters", "gun magazines", "gun cases", "tactical gear", "security equipment",
    "law enforcement firearms", "military surplus guns", "defense weapons", "home protection",
    "concealed carry", "open carry", "gun license", "gun permits", "shooting range supplies", 
    "gun cleaning kits", "hunting gear", "survival gear", "long-range rifles", "precision shooting",
    "self-defense weapons", "gun sales", "FFL firearms dealer", "professional gun dealer", "firearm training"
  ],
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Guns & Ammo Dealership - Professional Firearms & Ammunition" />
        <meta property="og:description" content="Professional firearms and ammunition dealership. Pick-up only. Comply with local laws." />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@your_twitter_handle" />
      </head>
      <body
        className={`font-sans ${inter.variable} ${robotoMono.variable} custom-cursor`}
      >
        <Suspense fallback={null}>
          <CartProvider>
            <CustomCursor />
            {children}
          </CartProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
