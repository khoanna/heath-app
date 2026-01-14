"use client"

import { Moon, Bell, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SleepModePage() {
  return (
    <div className="min-h-screen bg-health-deep-purple p-6 pb-12 font-sans max-w-[420px] mx-auto text-white flex flex-col items-center relative overflow-hidden">
        {/* Stars Decoration */}
        <div className="absolute top-10 left-10 text-yellow-300 text-xl animate-pulse">✨</div>
        <div className="absolute top-40 right-10 text-yellow-300 text-2xl animate-pulse delay-700">⭐</div>
        <div className="absolute bottom-60 right-6 text-yellow-300 text-sm animate-pulse delay-300">✨</div>

        {/* Big Moon */}
        <div className="mt-12 mb-8 relative">
            <div className="h-32 w-32 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                 <Moon className="h-16 w-16 text-white" fill="white" />
            </div>
            {/* Soft Glow */}
            <div className="absolute inset-0 bg-blue-500/30 blur-3xl -z-10 rounded-full"></div>
        </div>

        {/* Time */}
        <div className="text-center mb-2">
            <p className="text-gray-300 text-sm font-medium">Current Time</p>
            <h1 className="text-6xl font-normal tracking-tight mt-1">
                09:00 <span className="text-3xl align-top">PM</span>
            </h1>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-1">Time for Bed!</h2>
            <p className="text-blue-200 text-sm">Get your 8h 10m of quality sleep</p>
        </div>

        {/* Details Card */}
        <div className="w-full bg-indigo-800/50 border border-white/10 rounded-[24px] p-6 mb-8 backdrop-blur-md">
            {/* Bedtime */}
            <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Moon className="h-5 w-5 text-white" />
                </div>
                <div>
                    <p className="text-gray-300 text-xs">Bedtime</p>
                    <p className="text-lg font-medium">09:00 PM</p>
                </div>
            </div>
            
            <div className="h-[1px] w-full bg-white/10 mb-6"></div>

            {/* Wake up */}
            <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Bell className="h-5 w-5 text-white" />
                </div>
                <div>
                     <p className="text-gray-300 text-xs">Wake up</p>
                     <p className="text-lg font-medium">05:10 AM</p>
                </div>
            </div>

            <div className="h-[1px] w-full bg-white/10 mb-6"></div>

            {/* Duration */}
            <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                     <p className="text-gray-300 text-xs">Sleep Duration</p>
                     <p className="text-lg font-medium">8h 10m</p>
                </div>
            </div>
        </div>

        {/* Actions */}
        <div className="w-full space-y-6 mt-auto">
             <Link href="/">
                <Button className="w-full h-14 bg-white text-health-deep-purple hover:bg-gray-100 rounded-[20px] text-base font-medium">
                    <Moon className="h-4 w-4 mr-2" /> Got it, Going to Sleep
                </Button>
            </Link>

            <Button variant="ghost" className="w-full h-14 bg-indigo-800 hover:bg-[#4D55A8] text-white rounded-[20px] text-sm border border-white/10">
                Remind me in 15 minutes
            </Button>
        </div>

    </div>
  )
}
