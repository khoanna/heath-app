"use client"

import { ChevronLeft, MoreHorizontal, Bed, Clock, Repeat, Vibrate } from "lucide-react"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export default function AddAlarmPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FE] p-6 pb-24 font-sans max-w-[420px] mx-auto flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link href="/sleep/schedule" className="h-10 w-10 bg-transparent flex items-center justify-center">
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </Link>
        <h1 className="text-lg font-bold text-health-deep-purple">
          Add Alarm
        </h1>
        <button className="h-10 w-10 flex items-center justify-center">
            <MoreHorizontal className="h-5 w-5 text-health-deep-purple" />
        </button>
      </div>

      <div className="space-y-6 flex-1">
          {/* Bedtime */}
          <div className="flex items-center gap-4 bg-transparent p-2">
              <div className="h-10 w-10 flex items-center justify-center">
                   <Bed className="h-6 w-6 text-gray-400" />
              </div>
              <div className="flex-1 flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-500 font-medium">Bedtime</span>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                      09:00 PM <ChevronLeft className="h-4 w-4 rotate-180" />
                  </div>
              </div>
          </div>

          {/* Hours of sleep */}
          <div className="flex items-center gap-4 bg-transparent p-2">
              <div className="h-10 w-10 flex items-center justify-center">
                   <Clock className="h-6 w-6 text-gray-400" />
              </div>
              <div className="flex-1 flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-500 font-medium">Hours of sleep</span>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                      8hours 30minutes <ChevronLeft className="h-4 w-4 rotate-180" />
                  </div>
              </div>
          </div>

          {/* Repeat */}
          <div className="flex items-center gap-4 bg-transparent p-2">
              <div className="h-10 w-10 flex items-center justify-center">
                   <Repeat className="h-6 w-6 text-gray-400" />
              </div>
              <div className="flex-1 flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-500 font-medium">Repeat</span>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                      Mon to Fri <ChevronLeft className="h-4 w-4 rotate-180" />
                  </div>
              </div>
          </div>

          {/* Vibrate */}
          <div className="flex items-center gap-4 bg-transparent p-2">
              <div className="h-10 w-10 flex items-center justify-center">
                   <Vibrate className="h-6 w-6 text-gray-400" />
              </div>
              <div className="flex-1 flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-500 font-medium">Vibrate When Alarm Sound</span>
                  <Switch defaultChecked className="data-[state=checked]:bg-[#9B7BFF]" />
              </div>
          </div>
      </div>

      {/* Add Button */}
      <Button className="w-full h-14 bg-[#9B8AFF] hover:bg-[#8A7AE8] text-white rounded-[20px] text-lg font-medium shadow-lg shadow-indigo-200 mt-4">
            Add
      </Button>

    </div>
  )
}
