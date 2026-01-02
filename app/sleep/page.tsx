import Link from "next/link"
import { ChevronLeft, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BottomNav } from "@/components/BottomNav"

export default function SleepPage() {
  return (
    <div className="pb-24 min-h-screen bg-health-bg-start">
      {/* Header */}
      <header className="px-6 pt-8 pb-4 flex items-center gap-4 relative z-10">
        <Link href="/">
          <Button variant="ghost" size="icon" className="rounded-full bg-white/50 hover:bg-white">
            <ChevronLeft className="h-5 w-5 text-health-text" />
          </Button>
        </Link>
        <h1 className="text-xl font-semibold text-health-text">Sleep tracker</h1>
      </header>

      <div className="px-6 space-y-6">
        {/* Big Stat */}
        <div className="text-center py-6">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm mb-4">
            <Moon className="h-4 w-4 text-health-purple" />
            <span className="text-xs font-medium text-health-muted">30 Aug – 1 Sep</span>
          </div>
          <div className="text-6xl font-bold text-health-deep-purple tabular-nums tracking-tight">
            7<span className="text-3xl font-medium text-health-muted">h</span> 54<span className="text-3xl font-medium text-health-muted">m</span>
          </div>
        </div>

        {/* Chart Area */}
        <Card className="bg-white border-none shadow-sm overflow-hidden">
          <CardContent className="p-6">
            <h3 className="font-semibold text-health-text mb-6">Sleep Stages</h3>
            
            <div className="relative h-64 w-full">
              {/* Y Axis Labels */}
              <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-[10px] text-health-muted font-medium py-2">
                <span>Awake</span>
                <span>REM</span>
                <span>Light</span>
                <span>Deep</span>
              </div>

              {/* Chart Content */}
              <div className="ml-12 h-full relative border-l border-dashed border-border">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  <div className="h-px w-full bg-border/50" />
                  <div className="h-px w-full bg-border/50" />
                  <div className="h-px w-full bg-border/50" />
                  <div className="h-px w-full bg-border/50" />
                </div>

                {/* Bars (Simulated) */}
                <div className="absolute inset-0 flex items-end">
                  {/* This is a simplified representation using absolute positioning for segments */}
                  
                  {/* Deep Sleep Segment */}
                  <div className="absolute bottom-0 left-[10%] w-[15%] h-[25%] bg-health-deep-purple rounded-sm" />
                  <div className="absolute bottom-0 left-[40%] w-[20%] h-[25%] bg-health-deep-purple rounded-sm" />
                  
                  {/* Light Sleep Segment */}
                  <div className="absolute bottom-[25%] left-[0%] w-[10%] h-[25%] bg-health-purple rounded-sm" />
                  <div className="absolute bottom-[25%] left-[25%] w-[15%] h-[25%] bg-health-purple rounded-sm" />
                  <div className="absolute bottom-[25%] left-[60%] w-[20%] h-[25%] bg-health-purple rounded-sm" />

                  {/* REM Sleep Segment */}
                  <div className="absolute bottom-[50%] left-[80%] w-[15%] h-[25%] bg-health-pink rounded-sm" />
                  <div className="absolute bottom-[50%] left-[30%] w-[5%] h-[25%] bg-health-pink rounded-sm" />

                  {/* Awake Segment */}
                  <div className="absolute bottom-[75%] left-[5%] w-[2%] h-[25%] bg-health-cream rounded-sm" />
                  <div className="absolute bottom-[75%] left-[95%] w-[5%] h-[25%] bg-health-cream rounded-sm" />
                </div>
              </div>
            </div>

            {/* X Axis Time */}
            <div className="ml-12 flex justify-between text-[10px] text-health-muted mt-2">
              <span>10 PM</span>
              <span>12 AM</span>
              <span>2 AM</span>
              <span>4 AM</span>
              <span>6 AM</span>
              <span>8 AM</span>
            </div>
          </CardContent>
        </Card>

        {/* Summary Chips */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-health-deep-purple" />
            <div>
              <p className="text-xs text-health-muted">Deep Sleep</p>
              <p className="text-lg font-semibold text-health-text tabular-nums">2h 10m</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-health-purple" />
            <div>
              <p className="text-xs text-health-muted">Light Sleep</p>
              <p className="text-lg font-semibold text-health-text tabular-nums">3h 45m</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-health-pink" />
            <div>
              <p className="text-xs text-health-muted">REM Sleep</p>
              <p className="text-lg font-semibold text-health-text tabular-nums">1h 35m</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-health-cream border border-border" />
            <div>
              <p className="text-xs text-health-muted">Awake</p>
              <p className="text-lg font-semibold text-health-text tabular-nums">24m</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
