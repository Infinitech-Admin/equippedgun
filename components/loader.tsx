"use client"

import { useEffect, useState } from "react"

interface LoaderProps {
  size?: "sm" | "md" | "lg"
  text?: string
  className?: string
}

export const Loader = ({ size = "md", text, className = "" }: LoaderProps) => {
  const [animationEnabled, setAnimationEnabled] = useState(true)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setAnimationEnabled(!prefersReducedMotion)
  }, [])

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <svg
          viewBox="0 0 48 48"
          className={`w-full h-full ${animationEnabled ? "animate-spin" : ""}`}
          style={{ animationDuration: "2s" }}
        >
          {/* Tactical ammunition box design */}
          <g fill="none" stroke="currentColor" strokeWidth="2">
            {/* Main ammo box outline */}
            <rect
              x="8"
              y="16"
              width="32"
              height="20"
              rx="2"
              className="opacity-80"
              strokeDasharray={animationEnabled ? "4 2" : "none"}
            />
            {/* Box lid */}
            <rect
              x="10"
              y="12"
              width="28"
              height="8"
              rx="1"
              className="opacity-60"
              strokeDasharray={animationEnabled ? "3 1" : "none"}
            />
            {/* Ammunition rounds */}
            <circle cx="16" cy="26" r="2" className="opacity-90" fill="currentColor" />
            <circle cx="24" cy="26" r="2" className="opacity-70" fill="currentColor" />
            <circle cx="32" cy="26" r="2" className="opacity-50" fill="currentColor" />
            {/* Tactical markings */}
            <line x1="12" y1="20" x2="36" y2="20" className="opacity-40" />
            <line x1="12" y1="32" x2="36" y2="32" className="opacity-40" />
          </g>

          {/* Rotating sight ring */}
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 4"
            className={`opacity-30 ${animationEnabled ? "animate-spin" : ""}`}
            style={{ animationDuration: "3s", animationDirection: "reverse" }}
          />
        </svg>
      </div>

      {text && <p className="text-sm text-muted-foreground font-medium tracking-wide">{text}</p>}
    </div>
  )
}

// Full-screen loading overlay
export const LoadingOverlay = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <Loader size="lg" text={text} />
    </div>
  )
}

// Inline loading state
export const InlineLoader = ({ text }: { text?: string }) => {
  return (
    <div className="flex items-center justify-center py-8">
      <Loader size="md" text={text} />
    </div>
  )
}
