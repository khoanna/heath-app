"use client"

import { ChevronLeft, Minus, Plus, Droplets } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function WaterPage() {
    const [goal, setGoal] = useState(8)
    const [current, setCurrent] = useState(6)

    const percentage = Math.min(100, Math.max(0, (current / goal) * 100))

    const handleAdd = () => setCurrent(prev => Math.min(goal + 5, prev + 1))
    const handleRemove = () => setCurrent(prev => Math.max(0, prev - 1))

    return (
        <div className="min-h-screen bg-transparent p-6 pb-24 font-sans max-w-[420px] mx-auto">
            {/* Header */}
            <div className="flex items-center mb-6 relative">
                <Link href="/" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm z-10">
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                </Link>
                <h1 className="text-lg font-bold text-health-deep-purple absolute w-full text-center left-0 top-2 flex items-center justify-center gap-2">
                    Water Tracker <span className="text-blue-400">💧</span>
                </h1>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-[32px] p-6 shadow-sm mb-6">
                <div className="flex justify-between mb-8">
                    <div className="pt-4">
                        <p className="text-sm text-gray-500 mb-1">Today's Progress</p>
                        <h2 className="text-4xl font-bold text-health-deep-purple mb-1">
                            {current} <span className="text-2xl text-gray-400 font-normal">/ {goal}</span>
                        </h2>
                        <p className="text-sm text-gray-400">glasses of water</p>
                    </div>
                    
                    {/* Visual Glass */}
                    <div className="relative h-40 w-24 mr-2">
                         {/* Glass Shape */}
                         <div className="absolute inset-0 border-4 border-t-0 border-blue-200/50 rounded-b-xl transform perspective-500 rotate-x-12" 
                              style={{ 
                                  clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
                                  background: "linear-gradient(to right, rgba(255,255,255,0.4), rgba(255,255,255,0.1))"
                              }}>
                         </div>
                         
                         {/* Water Fill */}
                         <div className="absolute bottom-0 w-full transition-all duration-700 ease-out"
                              style={{ 
                                  height: `${percentage}%`,
                                  clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)", /* Match glass taper roughly, simplified */
                                  // Improving clip path to match a tapered glass that fills from bottom
                                  // Actually, cleaner way is to put the fill inside a container that has the glass shape
                              }}>
                              <div className="w-full h-full bg-[#6EB2FF] relative overflow-hidden"
                                    style={{
                                        clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)" // This is tricky with height change
                                    }}>
                              </div>
                         </div>
                         
                         {/* Better Glass Implementation with SVG */}
                         <svg viewBox="0 0 100 160" className="absolute inset-0 w-full h-full drop-shadow-md">
                            <defs>
                                <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#6EB2FF" />
                                    <stop offset="100%" stopColor="#4A90E2" />
                                </linearGradient>
                            </defs>
                            {/* Glass Outline / Background */}
                            <path d="M10,0 L20,150 Q25,160 50,160 Q75,160 80,150 L90,0" 
                                  fill="rgba(230, 240, 255, 0.3)" 
                                  stroke="#BDE0FE" 
                                  strokeWidth="2"/>
                            
                            {/* Water Fill */}
                             <mask id="glassMask">
                                <path d="M12,2 L21,148 Q25,158 50,158 Q75,158 79,148 L88,2" fill="white" />
                             </mask>
                             
                             <g mask="url(#glassMask)">
                                <rect x="0" y={160 - (160 * percentage / 100)} width="100" height="160" fill="url(#waterGradient)" 
                                      className="transition-all duration-700 ease-in-out" />
                                {/* Surface line */}
                                <path d={`M0,${160 - (160 * percentage / 100)} Q50,${160 - (160 * percentage / 100) + 5} 100,${160 - (160 * percentage / 100)}`} 
                                      stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                             </g>
                         </svg>
                    </div>
                </div>

                {/* Progress Stats */}
                <div className="flex justify-between text-sm font-medium text-gray-400 mb-2">
                    <span>Goal Progress</span>
                    <span className="text-blue-500">{Math.round(percentage)}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-3 bg-blue-50 rounded-full w-full mb-8 relative overflow-hidden">
                    <div 
                        className="h-full bg-[#2B7FFF] rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${percentage}%` }}
                    />
                </div>

                {/* Controls */}
                <div className="flex gap-4">
                    <button 
                        onClick={handleRemove}
                        className="flex-1 h-12 bg-[#F1F5F9] rounded-[16px] flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                        <Minus className="h-6 w-6" />
                    </button>
                    <button 
                        onClick={handleAdd}
                        className="flex-1 h-12 bg-[#2B7FFF] rounded-[16px] flex items-center justify-center text-white shadow-lg shadow-blue-200 hover:bg-blue-600 transition-colors"
                    >
                        <Plus className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Banner */}
            <div className="bg-yellow-100 rounded-[24px] p-6 mb-6 flex flex-col items-center justify-center text-center">
                <h3 className="font-bold text-health-deep-purple text-lg mb-1 flex items-center gap-2">
                    Keep Going! <span className="text-xl">💪</span>
                </h3>
                <p className="text-gray-600 text-sm">
                    {Math.max(0, goal - current)} more glasses to reach your goal
                </p>
            </div>

            {/* Streak Grid */}
            <div>
                <h3 className="text-health-deep-purple font-bold mb-4">Streak's Water Intake</h3>
                <div className="grid grid-cols-5 gap-3 bg-white p-4 rounded-[24px]">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div 
                            key={i}
                            className={cn(
                                "aspect-square rounded-[16px] flex items-center justify-center transition-all duration-300",
                                i < current 
                                    ? "bg-[#2B7FFF] shadow-md shadow-blue-200" 
                                    : "bg-[#F5F5F5]"
                            )}
                        >
                            <Droplets 
                                className={cn(
                                    "h-5 w-5 fill-current",
                                    i < current ? "text-white" : "text-gray-300 stroke-gray-400 fill-transparent"
                                )} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
