import Link from "next/link"
import { Dumbbell, ChevronRight } from "lucide-react"
import { StatCard } from "@/components/ui-custom/StatCard"
import { SectionHeader } from "@/components/ui-custom/SectionHeader"

export function WorkoutCard() {
  return (
    <div className="space-y-2">
      <SectionHeader 
        title="Workout" 
        action={
          <Link href="/workout" className="text-xs font-medium text-health-purple hover:text-health-deep-purple">
            View Plan
          </Link>
        }
      />
      <StatCard className="bg-linear-to-br from-health-purple to-health-deep-purple text-white">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
            <Dumbbell className="h-5 w-5 text-white" />
          </div>
          <div className="text-right">
            <p className="text-xs text-white/70 mb-0.5">Today's Focus</p>
            <p className="font-semibold">Upper Body</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium opacity-90">
            <span>Progress</span>
            <span>2/5 Exercises</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-white w-[40%] rounded-full" />
          </div>
        </div>
      </StatCard>
    </div>
  )
}
