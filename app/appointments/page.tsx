import Link from "next/link"
import { ChevronLeft, ChevronRight, Phone, MessageSquare, MapPin, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TimeSlotPills } from "@/components/TimeSlotPills"
import { BottomNav } from "@/components/BottomNav"
import { StatCard } from "@/components/ui-custom/StatCard"
import { SectionHeader } from "@/components/ui-custom/SectionHeader"

export default function AppointmentsPage() {
  return (
    <div className="pb-32 min-h-screen bg-health-bg-start relative">
      {/* Header */}
      <header className="px-6 pt-8 pb-4 flex items-center gap-4 relative z-10">
        <Link href="/">
          <Button variant="ghost" size="icon" className="rounded-full bg-white/50 hover:bg-white">
            <ChevronLeft className="h-5 w-5 text-health-text" />
          </Button>
        </Link>
        <h1 className="text-xl font-semibold text-health-text">Book Appointment</h1>
      </header>

      <div className="px-6 space-y-6">
        {/* Doctor Profile Card */}
        <StatCard contentClassName="p-5">
          <div className="flex items-start gap-4 mb-4">
            <div className="relative">
              <Avatar className="h-20 w-20 rounded-2xl border-2 border-white shadow-sm">
                <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80" alt="Dr. J. Simpson" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full shadow-sm">
                <div className="bg-green-100 p-1 rounded-full">
                  <Star className="h-3 w-3 text-green-600 fill-current" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-health-text">Dr. J. Simpson</h2>
              <p className="text-sm text-health-purple font-medium mb-1">Cardiologist</p>
              <div className="flex items-center gap-1 text-xs text-health-muted mb-3">
                <MapPin className="h-3 w-3" />
                <span>New York Medical Center</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="rounded-xl border-health-purple/20 text-health-purple hover:bg-health-purple/5 hover:text-health-deep-purple h-10">
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
            <Button variant="outline" className="rounded-xl border-health-purple/20 text-health-purple hover:bg-health-purple/5 hover:text-health-deep-purple h-10">
              <Phone className="h-4 w-4 mr-2" />
              Call Doctor
            </Button>
          </div>
        </StatCard>

        {/* Date Selection */}
        <div>
          <SectionHeader title="Select Date" />
          <div className="bg-white rounded-3xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4 px-2">
              <h4 className="text-sm font-semibold text-health-text">September 2025</h4>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full hover:bg-health-bg-start"><ChevronLeft className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full hover:bg-health-bg-start"><ChevronRight className="h-4 w-4" /></Button>
              </div>
            </div>
            <div className="flex justify-between gap-2 overflow-x-auto pb-2 no-scrollbar">
              {[
                { day: "Mon", date: "5", active: true },
                { day: "Tue", date: "6", active: false },
                { day: "Wed", date: "7", active: false },
                { day: "Thu", date: "8", active: false },
                { day: "Fri", date: "9", active: false },
              ].map((d, i) => (
                <button
                  key={i}
                  className={`flex flex-col items-center justify-center min-w-12.5 h-17.5 rounded-2xl border transition-all duration-200 ${
                    d.active 
                      ? "bg-linear-to-b from-health-purple to-health-deep-purple text-white border-health-deep-purple shadow-lg shadow-health-deep-purple/20 scale-105" 
                      : "bg-health-bg-start text-health-muted border-transparent hover:bg-health-lavender/50"
                  }`}
                >
                  <span className="text-[10px] font-medium opacity-80 mb-1">{d.day}</span>
                  <span className="text-lg font-bold">{d.date}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <SectionHeader title="Available Time" />
          <TimeSlotPills />
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-6 z-40 flex justify-center pointer-events-none">
        <div className="w-full max-w-105 pointer-events-auto">
          <Button className="w-full h-14 rounded-2xl bg-linear-to-r from-health-purple to-health-deep-purple hover:opacity-90 text-white shadow-xl shadow-health-deep-purple/20 text-lg font-semibold">
            Confirm Appointment
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
