"use client"

import { ChevronLeft, MoreHorizontal, Moon, AlarmClock, Plus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

const days = [
    { day: "Tue", date: "11", active: false },
    { day: "Wed", date: "12", active: false },
    { day: "Thu", date: "13", active: false },
    { day: "Fri", date: "14", active: true },
    { day: "Sat", date: "15", active: false },
    { day: "Sun", date: "16", active: false },
]

export default function SleepSchedulePage() {
  return (
    <div className="min-h-screen bg-[#F8F9FE] p-6 pb-24 font-sans max-w-[420px] mx-auto relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/sleep" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </Link>
        <h1 className="text-lg font-bold text-health-deep-purple">
          Sleep Schedule
        </h1>
        <button className="h-10 w-10 flex items-center justify-center">
            <MoreHorizontal className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      {/* Ideal Hours Card */}
      <div className="bg-[#E2E6FF] rounded-[32px] p-6 mb-8 relative flex shadow-sm overflow-hidden">
          <div className="flex-1 space-y-1 relative z-10 w-3/5">
              <h3 className="text-health-deep-purple font-medium text-sm">Ideal Hours for Sleep</h3>
              <p className="text-[#9B7BFF] font-bold text-lg">8hours 30minutes</p>
              
              <button className="bg-[#9B7BFF] text-white text-xs font-bold px-5 py-2.5 rounded-[12px] mt-4 shadow-lg shadow-indigo-200">
                  Learn More
              </button>
          </div>
          {/* Illustration Mock */}
          <div className="absolute right-[-20px] bottom-[-20px] h-32 w-32">
              {/* Using a placeholder or emoji for now as per instructions */}
              <div className="text-6xl absolute right-8 top-4">😴</div>
              <div className="text-6xl absolute right-14 top-10 rotate-12 opacity-80">🌙</div>
          </div>
      </div>

      {/* Your Schedule Section */}
      <div className="mb-6">
          <h3 className="text-health-deep-purple font-bold mb-4">Your Schedule</h3>
          
          {/* Calendar Strip */}
          <div className="flex justify-between mb-6">
              {days.map((d, i) => (
                  <div key={i} className={cn(
                      "flex flex-col items-center justify-center h-[72px] w-[52px] rounded-[18px] transition-all",
                      d.active 
                        ? "bg-[#9B7BFF] text-white shadow-lg shadow-indigo-200" 
                        : "bg-transparent text-gray-400"
                  )}>
                      <span className="text-xs mb-1 opacity-80">{d.day}</span>
                      <span className="text-lg font-bold">{d.date}</span>
                  </div>
              ))}
          </div>

          {/* Schedule List */}
          <div className="space-y-4">
              {/* Bedtime */}
              <Link href="/sleep/bedtime" className="bg-white rounded-3xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                   <div className="h-10 w-10 bg-[#FFF5F5] rounded-xl flex items-center justify-center shrink-0">
                        <Moon className="h-5 w-5 text-gray-500" />
                   </div>
                   <div className="flex-1">
                       <div className="flex justify-between items-start mb-1">
                           <h4 className="font-bold text-health-deep-purple text-sm">Bedtime, <span className="text-gray-400 font-normal">09:00pm</span></h4>
                           <MoreHorizontal className="h-4 w-4 text-gray-300" />
                       </div>
                       <div className="flex justify-between items-center">
                           <p className="text-xs text-gray-400">in <span className="text-gray-400">6 hours 22 minutes</span></p>
                           <Switch defaultChecked className="data-[state=checked]:bg-[#9B7BFF] pointer-events-none" />
                       </div>
                   </div>
              </Link>

               {/* Alarm */}
               <div className="bg-white rounded-[24px] p-4 flex items-center gap-4 shadow-sm">
                   <div className="h-10 w-10 bg-[#FFF9ED] rounded-xl flex items-center justify-center shrink-0">
                        <AlarmClock className="h-5 w-5 text-[#FF876C]" />
                   </div>
                   <div className="flex-1">
                       <div className="flex justify-between items-start mb-1">
                           <h4 className="font-bold text-health-deep-purple text-sm">Alarm, <span className="text-gray-400 font-normal">05:10am</span></h4>
                           <MoreHorizontal className="h-4 w-4 text-gray-300" />
                       </div>
                       <div className="flex justify-between items-center">
                           <p className="text-xs text-gray-400">in <span className="text-gray-400">14 hours 30 minutes</span></p>
                           <Switch defaultChecked className="data-[state=checked]:bg-[#9B7BFF]" />
                       </div>
                   </div>
              </div>
          </div>
      </div>

       {/* Bottom Floating Card */}
       <div className="bg-[#F3E8FF] rounded-[24px] p-5 relative overflow-hidden">
           <div className="relative z-10 pr-12">
               <p className="text-[#2D1B4E] text-sm font-medium mb-1">
                   You will get <span className="font-bold">8hours 10minutes</span> for tonight
               </p>
               {/* Progress Bar */}
               <div className="h-4 bg-white/50 rounded-full w-full mt-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#9B7BFF] w-[96%] rounded-full opacity-80" />
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] text-white font-bold">96%</span>
               </div>
           </div>
           
           {/* Floating + Button */}
           <Link href="/sleep/add" className="absolute right-0 bottom-0 translate-x-[20%] translate-y-[20%] h-20 w-20 bg-[#9B8AFF] rounded-full flex items-center justify-center shadow-xl shadow-indigo-300 hover:scale-105 transition-transform">
                <Plus className="h-8 w-8 text-white -translate-x-2 -translate-y-2" />
           </Link>
       </div>

    </div>
  )
}
