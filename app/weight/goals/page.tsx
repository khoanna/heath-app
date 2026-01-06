"use client"

import { ChevronLeft, Scale, Ruler, Target, Info, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function SetGoalsPage() {
    const [height, setHeight] = useState("170")
    const [currentWeight, setCurrentWeight] = useState("86")
    const [targetWeight, setTargetWeight] = useState("70")
    
    // Simple calc
    const h = parseFloat(height) / 100
    const w = parseFloat(currentWeight)
    const bmi = (h && w) ? (w / (h * h)).toFixed(1) : "--"
    
    const loss = (parseFloat(currentWeight) - parseFloat(targetWeight)).toFixed(1)

    return (
        <div className="min-h-screen bg-[#F8F9FE] p-6 text-center font-sans max-w-[420px] mx-auto flex flex-col items-center">
            
            <div className="bg-white w-full rounded-[32px] p-6 shadow-sm flex-1 flex flex-col">
                {/* Icon Header */}
                <div className="w-full flex justify-center mb-6">
                    <div className="h-20 w-20 bg-[#D9F4FF] rounded-full flex items-center justify-center">
                         <Scale className="h-10 w-10 text-[#0066FF]" />
                    </div>
                </div>

                <h1 className="text-xl font-bold text-health-deep-purple mb-1">Set Your Goals</h1>
                <p className="text-gray-500 text-sm mb-8">Start tracking your health</p>

                <div className="space-y-6 text-left w-full mb-8">
                     {/* Height */}
                     <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-500">Height</label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Ruler className="h-5 w-5 rotate-45" />
                            </div>
                            <input 
                                type="number" 
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="w-full h-14 bg-[#F5F5F7] rounded-[16px] pl-12 pr-12 text-gray-700 font-medium outline-none focus:ring-2 focus:ring-[#7C7AF5]"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                                cm
                            </div>
                        </div>
                     </div>

                     {/* Current Weight */}
                     <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-500">Current Weight</label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Scale className="h-5 w-5" />
                            </div>
                            <input 
                                type="number" 
                                value={currentWeight}
                                onChange={(e) => setCurrentWeight(e.target.value)}
                                className="w-full h-14 bg-[#F5F5F7] rounded-[16px] pl-12 pr-12 text-gray-700 font-medium outline-none focus:ring-2 focus:ring-[#7C7AF5]"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                                kg
                            </div>
                        </div>
                     </div>

                     {/* Target Weight */}
                     <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-500">Target Weight</label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Target className="h-5 w-5" />
                            </div>
                            <input 
                                type="number" 
                                value={targetWeight}
                                onChange={(e) => setTargetWeight(e.target.value)}
                                className="w-full h-14 bg-[#F5F5F7] rounded-[16px] pl-12 pr-12 text-gray-700 font-medium outline-none focus:ring-2 focus:ring-[#7C7AF5]"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">
                                kg
                            </div>
                        </div>
                     </div>
                </div>

                {/* BMI Card */}
                <div className="bg-[#EBF2FF] rounded-[24px] p-5 mb-8">
                     <div className="flex justify-between items-center mb-2">
                         <span className="text-gray-600 font-medium text-sm">Current BMI</span>
                         <span className="text-[#2B8FF4] font-bold">{bmi}</span>
                     </div>
                     <div className="flex justify-between items-center">
                         <span className="text-gray-600 font-medium text-sm">Goal</span>
                         <span className="text-[#0066FF] font-medium text-sm">{loss > 0 ? `${loss} kg to lose` : 'Goal reached!'}</span>
                     </div>
                </div>

                <div className="mt-auto">
                     <Link href="/weight">
                        <Button className="w-full h-14 bg-[#7C7AF5] hover:bg-[#6866E5] text-white rounded-[16px] text-lg font-medium shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
                            Start Tracking <ArrowRight className="h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
