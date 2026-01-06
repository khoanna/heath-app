"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Dumbbell, Sparkles, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/workout", label: "Exercise", icon: Dumbbell },
    { href: "/ai-assist", label: "AI Assist", icon: Sparkles },
    { href: "/profile", label: "Profile", icon: User },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="w-full max-w-[420px] bg-white border-t border-gray-100 pb-safe pt-2 px-6 flex justify-between items-center pointer-events-auto shadow-lg rounded-t-3xl">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1.5 p-2 transition-all duration-200",
                isActive ? "text-health-deep-purple" : "text-gray-400 hover:text-gray-600"
              )}
            >
                {isActive ? (
                   <div className="relative">
                       <Icon 
                        className="h-6 w-6" 
                        strokeWidth={2.5}
                        />
                   </div>
                ) : (
                    <Icon className="h-6 w-6" strokeWidth={2} />
                )}
              
              <span className={cn("text-[10px] font-medium transition-colors", isActive ? "text-health-deep-purple" : "text-gray-400")}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
