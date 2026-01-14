"use client"

import { ChevronLeft, Plus, Check, Clock, Link as LinkIcon, Paperclip } from "lucide-react"
import Link from "next/link"
import { ProgressRing } from "@/components/ProgressRing"
import { cn } from "@/lib/utils"

const days = [
    { day: "Mon", active: false },
    { day: "Tue", active: false },
    { day: "Wed", active: true },
    { day: "Thu", active: false },
    { day: "Fri", active: false },
    { day: "Sat", active: false },
    { day: "Sun", active: false },
]

export default function MedicationsPage() {
  return (
    <div className="min-h-screen bg-transparent p-6 pb-24 font-sans max-w-[420px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
            <Link href="/" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <ChevronLeft className="h-5 w-5 text-gray-700" />
            </Link>
            <h1 className="text-lg font-bold text-health-deep-purple flex items-center gap-2">
                Medications 💊
            </h1>
            <Link href="/medications/add" className="h-10 w-10 bg-pink-500 rounded-full flex items-center justify-center shadow-md text-white transition-transform active:scale-95">
                <Plus className="h-6 w-6" />
            </Link>
        </div>

        {/* Calendar Strip */}
        <div className="bg-white rounded-[24px] p-2 flex justify-between items-center mb-6 shadow-sm overflow-x-auto no-scrollbar">
            {days.map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1 min-w-[40px]">
                     <div className={cn(
                        "h-2 w-2 rounded-full mb-1",
                        d.active ? "bg-white" : "bg-[#FF87AB]"
                     )} />
                     <button className={cn(
                        "h-14 w-11 rounded-[18px] flex flex-col items-center justify-center text-xs font-medium transition-all",
                        d.active 
                            ? "bg-pink-500 text-white shadow-md shadow-pink-200" 
                            : "bg-transparent text-gray-400 hover:bg-gray-50"
                     )}>
                        <span className={cn("block w-1.5 h-1.5 rounded-full mb-1", d.active ? "bg-white" : "bg-[#FF87AB]")}></span>
                        {d.day}
                     </button>
                </div>
            ))}
        </div>

        {/* Today's Progress */}
        <div className="bg-white rounded-[32px] p-6 mb-8 shadow-sm flex items-center justify-between">
            <div>
                <p className="text-gray-500 text-sm mb-1">Today's Progress</p>
                <h2 className="text-4xl font-bold text-health-deep-purple mb-1">1 / 4</h2>
                <p className="text-gray-400 text-sm">medications taken</p>
            </div>
            <div className="h-24 w-24">
                <ProgressRing progress={25} size={96} strokeWidth={8} className="text-[#FEC0D2]">
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-health-deep-purple">25</span>
                        <span className="text-[10px] text-gray-500">%</span>
                    </div>
                </ProgressRing>
            </div>
        </div>

        {/* Today's Medications */}
        <div className="space-y-4">
            <h3 className="text-health-deep-purple font-bold mb-4">Today's Medications</h3>

            {/* Card 1 - Aspirin */}
            <div className="bg-blue-100 rounded-[24px] p-5 relative overflow-hidden">
                <div className="flex gap-4 mb-4">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shrink-0">
                        <Paperclip className="h-6 w-6 text-blue-500 rotate-45" />
                    </div>
                    <div>
                        <h4 className="font-bold text-health-deep-purple text-lg">Aspirin</h4>
                        <p className="text-xs text-gray-500 mb-2">Anti-Inflammatory, Antithrombic</p>
                        <span className="bg-white/60 px-3 py-1 rounded-[10px] text-xs font-medium text-gray-600">400mg</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/80 rounded-[18px] py-3 flex flex-col items-center justify-center gap-1 shadow-sm">
                        <div className="flex items-center gap-1 text-xs font-semibold text-gray-700">
                            <Clock className="h-3 w-3 text-green-500" /> 8:00 AM
                        </div>
                        <div className="h-5 w-5 bg-teal-500 rounded-full flex items-center justify-center">
                            <Check className="h-3 w-3 text-white" />
                        </div>
                    </div>
                    <div className="bg-white/40 rounded-[18px] py-3 flex flex-col items-center justify-center gap-1">
                        <div className="flex items-center gap-1 text-xs font-semibold text-gray-500">
                             <Clock className="h-3 w-3" /> 10:00 PM
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 2 - Vitamins */}
            <div className="bg-green-100 rounded-[24px] p-5">
                <div className="flex gap-4 mb-4">
                     <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shrink-0">
                        <LinkIcon className="h-6 w-6 text-teal-500 rotate-45" />
                    </div>
                    <div>
                        <h4 className="font-bold text-health-deep-purple text-lg">Vitamins</h4>
                        <p className="text-xs text-gray-500 mb-2">Multivitamin Complex</p>
                        <span className="bg-white/60 px-3 py-1 rounded-[10px] text-xs font-medium text-gray-600">1 capsule</span>
                    </div>
                </div>
                 <div className="w-full">
                    <div className="bg-white/40 rounded-[18px] py-3 flex items-center justify-center gap-2 w-1/2">
                         <Clock className="h-4 w-4 text-gray-500" />
                         <span className="text-sm font-semibold text-gray-600">8:00 AM</span>
                    </div>
                </div>
            </div>

             {/* Card 3 - Vitamin C */}
             <div className="bg-yellow-100 rounded-[24px] p-5">
                <div className="flex gap-4 mb-4">
                     <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shrink-0">
                        <LinkIcon className="h-6 w-6 text-orange-400 rotate-45" />
                    </div>
                    <div>
                        <h4 className="font-bold text-health-deep-purple text-lg">Vitamin C</h4>
                        <p className="text-xs text-gray-500 mb-2">Immune System Support</p>
                        <span className="bg-white/60 px-3 py-1 rounded-[10px] text-xs font-medium text-gray-600">500mg</span>
                    </div>
                </div>
                 <div className="w-full">
                    <div className="bg-white/40 rounded-[18px] py-3 flex items-center justify-center gap-2 w-1/2">
                         <Clock className="h-4 w-4 text-gray-500" />
                         <span className="text-sm font-semibold text-gray-600">9:00 AM</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
