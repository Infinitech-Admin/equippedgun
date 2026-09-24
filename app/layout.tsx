import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { SocialShareBar } from "@/components/social-share-bar";
import { ChatWidgetButton } from "@/components/chat-widget";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "ArcenalCore - Professional Firearms & Ammunition",
  description:
    "Professional firearms and ammunition dealership. Pick-up only. Comply with local laws.",
  applicationName: "ArcenalCore",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ArcenalCore",
  },
  icons: {
    icon: [
      { url: "/icons/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
    ],
  },
  openGraph: {
    title: "ArcenalCore - Professional Firearms & Ammunition",
    description:
      "Professional firearms and ammunition dealership. Pick-up only. Comply with local laws.",
    images: ["/path-to-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@your_twitter_handle",
  },
  robots: { index: true, follow: true },
  generator: "v0.app",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${robotoMono.variable}`}>
        <Suspense fallback={null}>
          <CartProvider>
            {children}
            <SocialShareBar />
            <ChatWidgetButton />
          </CartProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
