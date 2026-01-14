"use client"

import { useState, useEffect } from "react"
import { RefreshCw, Droplets, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { StatCard } from "@/components/ui-custom/StatCard"
import { SectionHeader } from "@/components/ui-custom/SectionHeader"
import { cn } from "@/lib/utils"

export function WaterWidget() {
  const GOAL_ML = 2000
  const GLASS_ML = 200
  const TOTAL_GLASSES = 10

  const [glasses, setGlasses] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const saved = localStorage.getItem("water-glasses")
    if (saved) {
      setGlasses(parseInt(saved, 10))
    }
  }, [])

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("water-glasses", glasses.toString())
    }
  }, [glasses, isClient])

  const addGlass = () => {
    if (glasses < TOTAL_GLASSES) setGlasses(g => g + 1)
  }

  const removeGlass = () => {
    if (glasses > 0) setGlasses(g => g - 1)
  }

  const resetWater = () => {
    setGlasses(0)
    setIsOpen(false)
  }

  const progress = (glasses / TOTAL_GLASSES) * 100

  return (
    <div className="space-y-2">
      <SectionHeader title="Hydration" />
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <StatCard className="bg-health-blue/10 border-none cursor-pointer group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 flex items-center justify-center">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-health-blue"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeOpacity="0.3"
                    />
                    <path
                      className="text-health-purple transition-all duration-500 ease-out"
                      strokeDasharray={`${progress}, 100`}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <Droplets className="absolute h-5 w-5 text-health-purple" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-health-text tabular-nums">{glasses * GLASS_ML}</span>
                    <span className="text-xs text-health-muted font-medium">/ {GOAL_ML}ml</span>
                  </div>
                  <p className="text-xs text-health-muted">{glasses} of {TOTAL_GLASSES} glasses</p>
                </div>
              </div>
              
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-10 w-10 rounded-full bg-white text-health-purple shadow-sm hover:bg-health-purple hover:text-white transition-all"
                onClick={(e) => {
                  e.stopPropagation()
                  addGlass()
                }}
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </StatCard>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md rounded-4xl p-0 overflow-hidden border-none">
          <div className="bg-health-bg-start p-6 pb-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-center text-xl font-bold text-health-text">Daily Hydration</DialogTitle>
              <DialogDescription className="text-center text-health-muted">
                Keep track of your water intake. Goal: {GOAL_ML}ml
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col items-center mb-8">
              <div className="relative h-40 w-40 flex items-center justify-center mb-4">
                 {/* Large Progress Ring */}
                 <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#E2E8F0" strokeWidth="8" />
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" 
                      stroke="#2D1B4E" 
                      strokeWidth="8" 
                      strokeLinecap="round"
                      strokeDasharray={`${progress * 2.83}, 283`}
                      className="transition-all duration-700 ease-out"
                    />
                 </svg>
                 <div className="absolute flex flex-col items-center">
                    <span className="text-4xl font-bold text-health-text tabular-nums">{glasses * GLASS_ML}</span>
                    <span className="text-sm text-health-muted">ml</span>
                 </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-12 w-12 rounded-full border-2"
                  onClick={removeGlass}
                  disabled={glasses === 0}
                >
                  <Minus className="h-5 w-5" />
                </Button>
                <span className="text-lg font-medium w-24 text-center">{glasses} Glasses</span>
                <Button 
                  variant="default" 
                  size="icon" 
                  className="h-12 w-12 rounded-full bg-health-purple hover:bg-health-deep-purple shadow-lg shadow-health-purple/30"
                  onClick={addGlass}
                  disabled={glasses >= TOTAL_GLASSES}
                >
                  <Plus className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-3 px-4 mb-8">
              {Array.from({ length: TOTAL_GLASSES }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setGlasses(i + 1)}
                  className={cn(
                    "aspect-2/3 rounded-lg border-2 transition-all duration-300 relative overflow-hidden",
                    i < glasses 
                      ? "border-health-blue bg-health-blue/30" 
                      : "border-health-muted/20 bg-white"
                  )}
                >
                  <div 
                    className={cn(
                      "absolute bottom-0 left-0 right-0 bg-health-blue transition-all duration-500",
                      i < glasses ? "h-full opacity-100" : "h-0 opacity-0"
                    )} 
                  />
                </button>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="ghost" className="text-health-muted hover:text-red-500" onClick={resetWater}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset Today
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
