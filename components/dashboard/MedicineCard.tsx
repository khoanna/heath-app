"use client"

import { useState } from "react"
import { Pill, Check } from "lucide-react"
import { StatCard } from "@/components/ui-custom/StatCard"
import { SectionHeader } from "@/components/ui-custom/SectionHeader"
import { cn } from "@/lib/utils"

export function MedicineCard() {
  const [meds, setMeds] = useState([
    { id: 1, name: "Vitamin D", time: "08:00 AM", taken: true },
    { id: 2, name: "Amoxicillin", time: "02:00 PM", taken: false },
    { id: 3, name: "Iron Supplement", time: "08:00 PM", taken: false },
  ])

  const toggleMed = (id: number) => {
    setMeds(meds.map(m => m.id === id ? { ...m, taken: !m.taken } : m))
  }

  return (
    <div className="space-y-2">
      <SectionHeader title="Medicine Schedule" />
      <StatCard contentClassName="p-0">
        <div className="divide-y divide-border">
          {meds.map((med) => (
            <div key={med.id} className="flex items-center justify-between p-4 hover:bg-health-bg-start/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className={cn("w-1 h-8 rounded-full transition-colors", med.taken ? "bg-health-purple" : "bg-gray-200")} />
                <div>
                  <p className={cn("text-sm font-medium transition-all", med.taken ? "text-health-muted line-through" : "text-health-text")}>
                    {med.name}
                  </p>
                  <p className="text-xs text-health-muted">{med.time}</p>
                </div>
              </div>
              <button 
                onClick={() => toggleMed(med.id)}
                className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center border transition-all duration-200",
                  med.taken 
                    ? "bg-health-purple border-health-purple text-white" 
                    : "border-gray-200 text-transparent hover:border-health-purple/50"
                )}
              >
                <Check className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </StatCard>
    </div>
  )
}
