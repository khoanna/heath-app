"use client"

import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface WaterGlassProps {
  filled: boolean
  onClick: () => void
  index: number
}

export function WaterGlass({ filled, onClick, index }: WaterGlassProps) {
  return (
    <button
      onClick={onClick}
      aria-label={filled ? "Remove 200ml water" : "Add 200ml water"}
      className={cn(
        "relative group flex items-center justify-center w-10 h-14 rounded-b-xl rounded-t-sm border-2 transition-all duration-300 ease-out overflow-hidden",
        filled
          ? "border-health-blue bg-health-blue/10 shadow-md shadow-health-blue/20 scale-100"
          : "border-health-muted/20 bg-transparent hover:border-health-blue/50 hover:bg-health-blue/5 scale-95"
      )}
    >
      {/* Liquid Fill Animation */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-health-blue to-health-blue/60 transition-all duration-500 ease-in-out",
          filled ? "h-full opacity-100" : "h-0 opacity-0"
        )}
      />

      {/* Bubbles/Sparkle effect (CSS only) */}
      {filled && (
        <>
          <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/60 rounded-full animate-pulse" />
          <div className="absolute bottom-4 right-3 w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-100" />
        </>
      )}

      {/* Icon overlay */}
      <Check
        className={cn(
          "relative z-10 w-5 h-5 text-health-deep-purple transition-all duration-300",
          filled ? "opacity-100 scale-100" : "opacity-0 scale-50"
        )}
      />
    </button>
  )
}
