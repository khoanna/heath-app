import { Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DatePills } from "@/components/DatePills"
import { BottomNav } from "@/components/BottomNav"
import { SleepCard } from "@/components/dashboard/SleepCard"
import { StepsCard, CaloriesCard } from "@/components/dashboard/StepsCard"
import { WaterWidget } from "@/components/water/WaterWidget"
import { MedicineCard } from "@/components/dashboard/MedicineCard"
import { FoodCard } from "@/components/dashboard/FoodCard"
import { WorkoutCard } from "@/components/dashboard/WorkoutCard"
import { AppointmentsPreviewCard } from "@/components/dashboard/AppointmentsPreviewCard"

export default function Dashboard() {
  return (
    <div className="pb-32 relative overflow-hidden min-h-screen">
      {/* Header */}
      <header className="px-6 pt-8 pb-2 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuI648iKBVt36kroATc6QAAepQJOa0nQ3Jxg&s" />
            <AvatarFallback>Anh Khoa</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-xs font-medium text-health-muted uppercase tracking-wide">Good Morning</p>
            <h1 className="text-xl font-bold text-health-text">Anh Khoa</h1>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full bg-white/50 hover:bg-white text-health-text">
          <Bell className="h-5 w-5" />
        </Button>
      </header>

      {/* Date Selector */}
      <div className="px-4 mb-6">
        <DatePills />
      </div>

      {/* Dashboard Content */}
      <div className="px-6 space-y-6">
        {/* Hero Section */}
        <SleepCard />

        {/* Stats Row */}
        <div className="flex gap-4">
          <StepsCard />
          <CaloriesCard />
        </div>

        {/* Water Section */}
        <WaterWidget />

        {/* Medicine Section */}
        <MedicineCard />

        {/* Food Section */}
        <FoodCard />

        {/* Workout Section */}
        <WorkoutCard />

        {/* Appointments Section */}
        <AppointmentsPreviewCard />
      </div>

      <BottomNav />
    </div>
  )
}
