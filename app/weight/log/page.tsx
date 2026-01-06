"use client"

import { ChevronLeft, Scale, Lightbulb, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function LogWeightPage() {
    const [weight, setWeight] = useState("")

    return (
        <div className="min-h-screen bg-gray-50/50 flex items-center justify-center p-6">
             <div className="bg-white w-full max-w-[420px] rounded-[32px] p-8 shadow-sm text-center">
                 {/* Icon */}
                 <div className="w-full flex justify-center mb-6">
                    <div className="h-20 w-20 bg-[#D9F4FF] rounded-full flex items-center justify-center">
                         <Scale className="h-10 w-10 text-[#0066FF]" />
                    </div>
                </div>

                <h1 className="text-xl font-bold text-health-deep-purple mb-2">Enter Your Weight</h1>
                <p className="text-gray-500 text-sm mb-8">Track your progress for today</p>

                {/* Input */}
                <div className="relative mb-8">
                     <input 
                        type="number" 
                        value={weight}
                        placeholder="0.0"
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full h-20 bg-[#F5F5F7] rounded-[24px] text-center text-4xl font-bold text-gray-700 outline-none focus:ring-2 focus:ring-[#7C7AF5] placeholder:text-gray-400"
                        autoFocus
                     />
                     <span className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-xl">kg</span>
                </div>

                {/* Actions */}
                <div className="space-y-4 mb-8">
                     <Link href="/weight" className="block">
                         <Button className="w-full h-14 bg-[#B0B2EE] hover:bg-[#9FA1E6] text-white rounded-[20px] text-base font-medium flex items-center justify-center gap-2">
                             <Check className="h-5 w-5" /> Save Entry
                         </Button>
                     </Link>
                     
                     <Link href="/weight" className="block">
                        <Button variant="ghost" className="w-full h-14 bg-white hover:bg-gray-50 text-gray-700 border border-gray-100 rounded-[20px] text-base font-medium">
                            Cancel
                        </Button>
                     </Link>
                </div>

                {/* Tips */}
                <div className="bg-[#F8F9FF] rounded-[24px] p-5 text-left">
                     <div className="flex items-center gap-2 mb-3 text-[#EBCB8B]">
                          <Lightbulb className="h-5 w-5 fill-[#EBCB8B]" />
                          <span className="font-bold text-health-deep-purple text-sm">Tips for accurate tracking:</span>
                     </div>
                     <ul className="space-y-2 text-xs text-gray-600 pl-1">
                         <li className="flex gap-2">
                             <span className="block w-1 h-1 rounded-full bg-gray-400 mt-1.5 shrink-0"></span>
                             Weigh yourself at the same time each day
                         </li>
                         <li className="flex gap-2">
                             <span className="block w-1 h-1 rounded-full bg-gray-400 mt-1.5 shrink-0"></span>
                             Use the same scale consistently
                         </li>
                         <li className="flex gap-2">
                             <span className="block w-1 h-1 rounded-full bg-gray-400 mt-1.5 shrink-0"></span>
                             Weigh before eating or drinking
                         </li>
                     </ul>
                </div>

             </div>
        </div>
    )
}
