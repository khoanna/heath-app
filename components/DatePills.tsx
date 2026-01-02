"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const DAYS = [
  { day: "Mon", date: "28" },
  { day: "Tue", date: "29" },
  { day: "Wed", date: "30" },
  { day: "Thu", date: "31" },
  { day: "Fri", date: "1" },
  { day: "Sat", date: "2" },
  { day: "Sun", date: "3" },
]

export function DatePills() {
  const [selectedDate, setSelectedDate] = useState("30")

  return (
    <div className="flex justify-between items-center w-full overflow-x-auto no-scrollbar gap-2 py-2">
      {DAYS.map((item) => {
        const isSelected = item.date === selectedDate
        return (
          <button
            key={item.day + item.date}
            onClick={() => setSelectedDate(item.date)}
            className={cn(
              "flex flex-col items-center justify-center min-w-[48px] h-[72px] rounded-full transition-all duration-300",
              isSelected
                ? "bg-health-purple text-white shadow-lg shadow-health-purple/25 scale-105"
                : "bg-white text-health-muted hover:bg-health-lavender/50"
            )}
          >
            <span className="text-[10px] font-medium mb-1 opacity-80">{item.day}</span>
            <span className={cn("text-lg font-semibold", isSelected ? "text-white" : "text-health-text")}>
              {item.date}
            </span>
            {isSelected && <div className="w-1 h-1 bg-white rounded-full mt-1" />}
          </button>
        )
      })}
    </div>
  )
}
