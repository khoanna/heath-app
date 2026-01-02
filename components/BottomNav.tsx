"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FileText, Calendar, MessageCircle, Dumbbell } from "lucide-react"
import { cn } from "@/lib/utils"

export function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/workout", label: "Workout", icon: Dumbbell },
    { href: "/plans", label: "Plans", icon: FileText },
    { href: "/appointments", label: "Appts", icon: Calendar },
    { href: "/chat", label: "Chat", icon: MessageCircle },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="w-full max-w-[420px] bg-white/90 backdrop-blur-xl border-t border-black/5 pb-safe pt-3 px-6 flex justify-between items-center pointer-events-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 p-2 transition-all duration-200 active:scale-90",
                isActive ? "text-health-purple" : "text-health-muted hover:text-health-text"
              )}
            >
              <Icon 
                className={cn("h-6 w-6 transition-all", isActive && "scale-110")} 
                strokeWidth={isActive ? 2.5 : 2} 
                fill={isActive ? "currentColor" : "none"}
                fillOpacity={isActive ? 0.2 : 0}
              />
              <span className={cn("text-[10px] font-medium transition-colors", isActive ? "text-health-purple" : "text-health-muted")}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
