"use client"

import { useState, useEffect } from "react"

export default function GunLoader() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => {
      clearTimeout(timer)
      clearInterval(progressTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-amber-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-amber-400 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="text-center">
        {/* Main loader animation */}
        <div className="relative mb-8">
          {/* Crosshair target */}
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 border-4 border-amber-400 rounded-full animate-spin"></div>
            <div
              className="absolute inset-2 border-2 border-amber-400/60 rounded-full animate-spin"
              style={{ animationDirection: "reverse", animationDuration: "3s" }}
            ></div>
            <div
              className="absolute inset-4 border border-amber-400/40 rounded-full animate-spin"
              style={{ animationDuration: "4s" }}
            ></div>

            {/* Center crosshair */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-0.5 bg-amber-400 absolute"></div>
              <div className="w-0.5 h-8 bg-amber-400 absolute"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Bullet shells animation */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-4 bg-gradient-to-t from-amber-600 to-amber-400 rounded-full animate-bounce"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: "1s",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-wider">GUNS & AMMO</h2>
          <p className="text-amber-400 text-sm font-medium tracking-widest">LOADING ARSENAL...</p>

          {/* Progress bar */}
          <div className="w-64 mx-auto">
            <div className="w-full bg-slate-700 rounded-full h-1">
              <div
                className="bg-gradient-to-r from-amber-400 to-amber-500 h-1 rounded-full transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-amber-400/80 text-xs mt-2">{progress}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
