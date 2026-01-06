"use client"

import { ChevronLeft, MoreHorizontal, Moon, AlarmClock } from "lucide-react"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export default function SleepTrackerPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FE] p-6 pb-24 font-sans max-w-[420px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </Link>
        <h1 className="text-lg font-bold text-health-deep-purple">
          Sleep Tracker
        </h1>
        <button className="h-10 w-10 flex items-center justify-center">
            <MoreHorizontal className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      {/* Chart Card */}
      <div className="bg-white rounded-[24px] p-4 shadow-sm mb-6 relative overflow-hidden">
         {/* Simple visual mock of the chart */}
         <div className="h-[200px] w-full relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-300 pointer-events-none">
                 {[10, 8, 6, 4, 2, "0h"].map((v, i) => (
                    <div key={i} className="flex items-center w-full">
                         <span className="w-6 text-right mr-2">{typeof v === 'number' ? `${v}h` : v}</span>
                         <div className="h-[1px] bg-gray-100 flex-1"></div>
                    </div>
                 ))}
            </div>
            
            {/* Graph Line SVG */}
            <svg viewBox="0 0 300 150" className="absolute left-8 right-0 bottom-6 top-4 w-[calc(100%-32px)] h-[calc(100%-30px)] overflow-visible">
                <defs>
                    <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#9B7BFF" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#9B7BFF" stopOpacity="0"/>
                    </linearGradient>
                </defs>
                <path d="M0,120 C30,80 50,80 80,100 C110,120 130,80 160,60 C190,40 210,100 240,60 C270,20 300,30 300,30" 
                      fill="none" stroke="#9B7BFF" strokeWidth="3" />
                <path d="M0,120 C30,80 50,80 80,100 C110,120 130,80 160,60 C190,40 210,100 240,60 C270,20 300,30 300,30 V150 H0 Z" 
                      fill="url(#sleepGradient)" stroke="none" />
                
                {/* Active Point (Thursday) */}
                <circle cx="160" cy="60" r="4" fill="#9B7BFF" stroke="white" strokeWidth="2" />
                
                {/* Tooltip */}
                <g transform="translate(160, 30)">
                    <rect x="-40" y="-25" width="80" height="24" rx="8" fill="#58E6C7" />
                    <text x="0" y="-9" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">43% increase</text>
                    <path d="M-4,1 L0,5 L4,1 Z" fill="#58E6C7" />
                </g>
            </svg>
            
            {/* X-Axis Labels */}
            <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-400">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span className="text-[#5C59E8] font-bold">Thu</span>
                <span>Fri</span>
                <span>Sat</span>
            </div>
         </div>
      </div>

      {/* Last Night Sleep Card */}
      <div className="bg-gradient-to-r from-[#8EA7FF] to-[#9B8AFF] rounded-[24px] p-5 text-white mb-6 relative overflow-hidden">
          <div className="relative z-10">
              <h3 className="font-medium mb-1 opacity-90">Last Night Sleep</h3>
              <p className="text-2xl font-bold">8h 20m</p>
          </div>
          {/* Decorative Waves */}
          <div className="absolute bottom-0 left-0 right-0 h-16 opacity-40">
                <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0,10 Q25,20 50,10 T100,10 V20 H0 Z" fill="white" fillOpacity="0.3" />
                    <path d="M0,15 Q25,5 50,15 T100,15 V20 H0 Z" fill="white" fillOpacity="0.3" />
                </svg>
          </div>
      </div>

      {/* Daily Sleep Schedule Banner */}
      <div className="bg-[#E2E6FF]/50 rounded-[20px] p-4 flex items-center justify-between mb-6">
          <span className="font-bold text-health-deep-purple">Daily Sleep Schedule</span>
          <Link href="/sleep/schedule">
              <Button size="sm" className="bg-[#9B7BFF] hover:bg-[#8A6AE8] text-white rounded-full px-6 h-8 text-xs font-medium">
                Check
              </Button>
          </Link>
      </div>

      {/* Today Schedule List */}
      <div>
          <h3 className="text-health-deep-purple font-bold mb-4">Today Schedule</h3>
          
          <div className="space-y-4">
              {/* Bedtime */}
              <Link href="/sleep/bedtime" className="bg-white rounded-[24px] p-4 flex items-center gap-4 shadow-sm block hover:shadow-md transition-shadow">
                   <div className="h-10 w-10 bg-[#FFF5F5] rounded-xl flex items-center justify-center shrink-0">
                        <Moon className="h-5 w-5 text-gray-500" /> {/* Placeholder for Bed Icon */}
                   </div>
                   <div className="flex-1">
                       <div className="flex justify-between items-start mb-1">
                           <h4 className="font-bold text-health-deep-purple text-sm">Bedtime, <span className="text-gray-400 font-normal">09:00pm</span></h4>
                           <MoreHorizontal className="h-4 w-4 text-gray-300" />
                       </div>
                       <div className="flex justify-between items-center">
                           <p className="text-xs text-gray-400">in <span className="text-[#9B7BFF]">6 hours 22 minutes</span></p>
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
                           <p className="text-xs text-gray-400">in <span className="text-gray-400">14hours 30minutes</span></p>
                           <Switch defaultChecked className="data-[state=checked]:bg-[#9B7BFF]" />
                       </div>
                   </div>
              </div>
          </div>
      </div>

    </div>
  )
}
