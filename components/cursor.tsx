"use client"

import { useEffect, useState } from "react"

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (isTouchDevice || prefersReducedMotion) {
      return
    }

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.getAttribute("role") === "button" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest('[role="button"]')

      setIsPointer(!!isInteractive)
    }

    const hideCursor = () => setIsVisible(false)

    document.addEventListener("mousemove", updateCursor)
    document.addEventListener("mouseleave", hideCursor)

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mouseleave", hideCursor)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={`transition-all duration-200 ${isPointer ? "scale-125" : "scale-100"}`}
      >
        <circle cx="12" cy="12" r="8" stroke="#ff6b35" strokeWidth="2" fill="none" opacity="0.9" />
        <circle cx="12" cy="12" r="2" fill="#ff6b35" opacity="1" />
        <line x1="12" y1="4" x2="12" y2="8" stroke="#ff6b35" strokeWidth="2" opacity="0.8" />
        <line x1="12" y1="16" x2="12" y2="20" stroke="#ff6b35" strokeWidth="2" opacity="0.8" />
        <line x1="4" y1="12" x2="8" y2="12" stroke="#ff6b35" strokeWidth="2" opacity="0.8" />
        <line x1="16" y1="12" x2="20" y2="12" stroke="#ff6b35" strokeWidth="2" opacity="0.8" />
        {/* Additional tactical elements with orange accent */}
        <circle
          cx="12"
          cy="12"
          r="11"
          stroke="#ffd700"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
          strokeDasharray="2 2"
        />
      </svg>
    </div>
  )
}
