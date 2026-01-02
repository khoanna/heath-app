import Link from "next/link"
import { Calendar, ChevronRight, MapPin } from "lucide-react"
import { StatCard } from "@/components/ui-custom/StatCard"
import { SectionHeader } from "@/components/ui-custom/SectionHeader"

export function AppointmentsPreviewCard() {
  return (
    <div className="space-y-2">
      <SectionHeader title="Next Appointment" />
      <Link href="/appointments">
        <StatCard className="group hover:bg-health-bg-start transition-colors">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center justify-center h-14 w-14 bg-health-blue/20 text-health-deep-purple rounded-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider">Sep</span>
              <span className="text-xl font-bold leading-none">05</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-health-text group-hover:text-health-deep-purple transition-colors">Dr. J. Simpson</h4>
              <p className="text-xs text-health-muted mb-1">Cardiologist</p>
              <div className="flex items-center gap-1 text-[10px] text-health-muted">
                <MapPin className="h-3 w-3" />
                <span>Central Clinic, Room 302</span>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-health-muted group-hover:text-health-purple group-hover:translate-x-1 transition-all" />
          </div>
        </StatCard>
      </Link>
    </div>
  )
}
