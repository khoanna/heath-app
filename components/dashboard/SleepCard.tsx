import { Moon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SleepCard() {
  return (
    <Card className="border-none shadow-lg shadow-health-purple/20 bg-gradient-to-br from-[#9B7BFF] to-[#2D1B4E] text-white rounded-[28px] overflow-hidden relative">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
      
      <CardContent className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <Moon className="h-3.5 w-3.5 text-white" />
            <span className="text-xs font-medium text-white">Sleep Score</span>
          </div>
          <span className="text-2xl font-bold">85</span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <div className="text-4xl font-semibold tracking-tight mb-1">7<span className="text-2xl opacity-80">h</span> 30<span className="text-2xl opacity-80">m</span></div>
            <p className="text-sm text-white/70">Deep sleep: 1h 45m</p>
          </div>
          
          {/* Tiny Chart */}
          <div className="flex items-end gap-1 h-12 pb-1">
            {[40, 60, 30, 80, 50, 70, 40].map((h, i) => (
              <div 
                key={i} 
                className="w-1.5 bg-white/30 rounded-full" 
                style={{ height: `${h}%` }} 
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
