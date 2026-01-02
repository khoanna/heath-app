import { Footprints, Flame } from "lucide-react"
import { StatCard } from "@/components/ui-custom/StatCard"

export function StepsCard() {
  return (
    <StatCard className="flex-1 bg-white">
      <div className="flex flex-col h-full justify-between">
        <div className="flex justify-between items-start mb-2">
          <div className="p-2 bg-health-bg-start rounded-full">
            <Footprints className="h-4 w-4 text-health-purple" />
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-health-text tabular-nums">6,540</div>
          <p className="text-[10px] text-health-muted uppercase tracking-wide font-medium mt-1">Steps</p>
        </div>
        <div className="mt-3 w-full bg-health-bg-start h-1.5 rounded-full overflow-hidden">
          <div className="bg-health-purple h-full w-[65%]" />
        </div>
      </div>
    </StatCard>
  )
}

export function CaloriesCard() {
  return (
    <StatCard className="flex-1 bg-white">
      <div className="flex flex-col h-full justify-between">
        <div className="flex justify-between items-start mb-2">
          <div className="p-2 bg-health-pink/20 rounded-full">
            <Flame className="h-4 w-4 text-health-pink" />
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-health-text tabular-nums">840</div>
          <p className="text-[10px] text-health-muted uppercase tracking-wide font-medium mt-1">Kcal</p>
        </div>
        <div className="mt-3 w-full bg-health-bg-start h-1.5 rounded-full overflow-hidden">
          <div className="bg-health-pink h-full w-[80%]" />
        </div>
      </div>
    </StatCard>
  )
}
