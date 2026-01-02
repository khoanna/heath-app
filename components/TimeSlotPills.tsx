"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const SLOTS = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
]

export function TimeSlotPills() {
  const [selectedSlot, setSelectedSlot] = useState("10:00 AM")

  return (
    <div className="grid grid-cols-3 gap-3">
      {SLOTS.map((slot) => {
        const isSelected = slot === selectedSlot
        return (
          <button
            key={slot}
            onClick={() => setSelectedSlot(slot)}
            className={cn(
              "py-2 px-3 rounded-xl text-xs font-medium transition-all border",
              isSelected
                ? "bg-linear-to-r from-health-purple to-health-deep-purple text-white border-transparent shadow-md"
                : "bg-white text-health-text border-border hover:border-health-purple/50"
            )}
          >
            {slot}
          </button>
        )
      })}
    </div>
  )
}
