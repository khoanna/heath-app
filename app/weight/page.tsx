"use client"

import { ChevronLeft, Ruler, Target, Flame, Plus, TrendingDown, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

// Tabs for the bottom switcher
type Tab = 'daily' | 'weekly' | 'monthly'

export default function WeightPage() {
    const [activeTab, setActiveTab] = useState<Tab>('daily')

    return (
        <div className="min-h-screen bg-transparent p-6 pb-24 font-sans max-w-[420px] mx-auto flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <Link href="/" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                </Link>
                <h1 className="text-lg font-bold text-health-deep-purple">Weight Control</h1>
                <Link href="/weight/goals" className="h-10 w-10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-gray-700" />
                </Link>
            </div>

            {/* Main Stats Card - Persistent across tabs */}
            <div className="bg-white rounded-[32px] p-6 shadow-sm mb-4">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <p className="text-gray-500 text-sm mb-1">Current Weight</p>
                        <h2 className="text-3xl font-bold text-health-deep-purple">74.0 <span className="text-sm font-normal text-gray-400">kg</span></h2>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-500 text-sm mb-1">Target Weight</p>
                        <h2 className="text-3xl font-bold text-health-deep-purple">68.0 <span className="text-sm font-normal text-gray-400">kg</span></h2>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-2 flex justify-between text-xs font-semibold text-gray-400">
                    <span>Progress</span>
                    <span className="text-[#2B8FF4]">14%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full w-full mb-6 overflow-hidden">
                    {/* Changed color to #2B8FF4 (App Blue) */}
                    <div className="h-full bg-[#2B8FF4] rounded-full w-[14%]" />
                </div>

                {/* Change Badge */}
                <div className="bg-[#EBF2FF] rounded-[16px] p-3 flex justify-between items-center text-sm font-medium text-[#2B8FF4]">
                    <div className="flex items-center gap-2">
                        <TrendingDown className="h-4 w-4" /> Total Change
                    </div>
                    <span>-1.0 kg</span>
                </div>
            </div>

            {/* Dashboard Views */}
            
            {activeTab === 'daily' && (
                <DailyViewContent />
            )}
             {activeTab === 'weekly' && (
                <WeeklyView />
            )}
             {activeTab === 'monthly' && (
                <MonthlyView />
            )}


            {/* Bottom Tabs Switcher - Sticky Bottom */}
            <div className="fixed bottom-6 left-0 right-0 max-w-[420px] mx-auto px-6 z-10">
                <div className="bg-white/80 backdrop-blur-md border border-gray-100 p-1.5 rounded-[24px] grid grid-cols-3 gap-1 shadow-lg shadow-indigo-100/50">
                    <button 
                        onClick={() => setActiveTab('daily')}
                        className={cn(
                            "h-12 rounded-[20px] text-sm font-bold transition-all flex items-center justify-center gap-2",
                            activeTab === 'daily' ? "bg-[#2B8FF4] text-white shadow-md shadow-blue-200" : "bg-transparent text-gray-400 hover:bg-gray-50"
                        )}
                    >
                        Daily
                    </button>
                    <button 
                        onClick={() => setActiveTab('weekly')}
                        className={cn(
                            "h-12 rounded-[20px] text-sm font-bold transition-all flex items-center justify-center gap-2",
                            activeTab === 'weekly' ? "bg-[#2B8FF4] text-white shadow-md shadow-blue-200" : "bg-transparent text-gray-400 hover:bg-gray-50"
                        )}
                    >
                        Weekly
                    </button>
                    <button 
                        onClick={() => setActiveTab('monthly')}
                        className={cn(
                            "h-12 rounded-[20px] text-sm font-bold transition-all flex items-center justify-center gap-2",
                            activeTab === 'monthly' ? "bg-[#2B8FF4] text-white shadow-md shadow-blue-200" : "bg-transparent text-gray-400 hover:bg-gray-50"
                        )}
                    >
                        Monthly
                    </button>
                </div>
            </div>
            {/* Spacer for fixed bottom tabs */}
            <div className="h-20" />
        </div>
    )
}

function DailyViewContent() {
    return (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Grid Stats */}
            <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white rounded-[24px] p-5 shadow-sm min-h-[140px] flex flex-col justify-between">
                     <div className="h-10 w-10 bg-purple-100 rounded-xl flex items-center justify-center text-[#9C27B0]">
                        <Ruler className="h-5 w-5 rotate-45" />
                     </div>
                     <div>
                         <p className="text-gray-400 text-sm mb-1">Height</p>
                         <p className="text-xl font-bold text-health-deep-purple">170 cm</p>
                     </div>
                 </div>
                 <div className="bg-white rounded-[24px] p-5 shadow-sm min-h-[140px] flex flex-col justify-between">
                     <div className="h-10 w-10 bg-[#E8F5E9] rounded-xl flex items-center justify-center text-[#4CAF50]">
                        <Target className="h-5 w-5" />
                     </div>
                     <div>
                         <p className="text-gray-400 text-sm mb-1">Current BMI</p>
                         <p className="text-xl font-bold text-health-deep-purple">25.6</p>
                     </div>
                 </div>
            </div>

            {/* Streak Card */}
            <div className="bg-[#FFF3E0] rounded-[24px] p-4 flex items-center justify-between border border-[#FFE0B2]">
                 <div className="flex items-center gap-4">
                     <div className="h-12 w-12 bg-white/50 rounded-full flex items-center justify-center">
                         <Flame className="h-6 w-6 text-[#FF9800] fill-[#FF9800]" />
                     </div>
                     <div>
                         <p className="font-bold text-health-deep-purple text-sm">7 days</p>
                         <p className="text-gray-500 text-xs">Current Streak</p>
                     </div>
                 </div>
                 <div className="flex flex-col items-end">
                     <Calendar className="h-5 w-5 text-[#FF9800] mb-1" />
                     <p className="text-[#E65100] text-xs font-bold">Great job!</p>
                 </div>
            </div>

            {/* Log Button */}
            <Link href="/weight/log">
                <Button className="w-full h-14 bg-health-purple hover:bg-[#6866E5] text-white rounded-[20px] text-lg font-medium shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
                    <Plus className="h-5 w-5" /> Log Today's Weight
                </Button>
            </Link>

            {/* Chart Section (From Daily Tab - Image 4) */}
            <div className="bg-white rounded-[24px] p-5 shadow-sm">
                 <div className="mb-4">
                     <h3 className="font-bold text-health-deep-purple">Weight Trend</h3>
                     <p className="text-gray-400 text-xs">Daily fluctuations</p>
                 </div>
                 
                 {/* Chart Mock */}
                 <div className="h-[180px] w-full relative border-l border-b border-gray-100">
                      {/* Using SVG for precise line chart matching Screenshot 4 */}
                      <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
                           {/* Grid Lines */}
                           <line x1="0" y1="30" x2="300" y2="30" stroke="#f0f0f0" strokeDasharray="4" />
                           <line x1="0" y1="60" x2="300" y2="60" stroke="#f0f0f0" strokeDasharray="4" />
                           <line x1="0" y1="90" x2="300" y2="90" stroke="#f0f0f0" strokeDasharray="4" />
                           
                           {/* Line */}
                           <polyline 
                                points="0,50 50,60 100,70 150,65 200,80 250,90 300,100" 
                                fill="none" 
                                stroke="#2B8FF4" 
                                strokeWidth="3" 
                                strokeLinecap="round"
                                strokeLinejoin="round"
                           />
                           {/* Dots */}
                           <circle cx="0" cy="50" r="4" fill="#2B8FF4" stroke="white" strokeWidth="2" />
                           <circle cx="50" cy="60" r="4" fill="#2B8FF4" stroke="white" strokeWidth="2" />
                           <circle cx="100" cy="70" r="4" fill="#2B8FF4" stroke="white" strokeWidth="2" />
                           <circle cx="150" cy="65" r="4" fill="#2B8FF4" stroke="white" strokeWidth="2" />
                           <circle cx="200" cy="80" r="4" fill="#2B8FF4" stroke="white" strokeWidth="2" />
                           <circle cx="250" cy="90" r="4" fill="#2B8FF4" stroke="white" strokeWidth="2" />
                           <circle cx="300" cy="100" r="4" fill="#2B8FF4" stroke="white" strokeWidth="2" />

                           {/* Y-Axis Labels */}
                           <g className="text-[10px] text-gray-300" transform="translate(-25, 0)">
                               <text y="50">75.25</text>
                               <text y="75">74.5</text>
                               <text y="100">73.75</text>
                           </g>
                      </svg>
                 </div>
                 <div className="flex justify-between text-xs text-gray-400 mt-2 px-1">
                     <span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>31</span><span>01</span>
                 </div>
            </div>
            
            {/* Recent Logs partial view */}
            <div>
                 <h3 className="font-bold text-health-deep-purple mb-3">Recent Logs</h3>
                 <div className="bg-[#EBF2FF] rounded-[20px] p-4 flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                           <div className="h-10 w-10 bg-[#2B8FF4] rounded-xl flex items-center justify-center text-white">
                                <Calendar className="h-5 w-5" />
                           </div>
                           <div>
                               <p className="text-[#2B8FF4] font-bold text-sm">Today</p>
                               <p className="text-[#2B8FF4]/60 text-xs">Sun</p>
                           </div>
                      </div>
                      <div className="text-right">
                          <p className="text-[#2B8FF4] font-bold">74.0 kg</p>
                          <p className="text-green-500 text-xs font-bold">-0.2 kg</p>
                      </div>
                 </div>
            </div>
        </div>
    )
}

function WeeklyView() {
    return (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-[32px] p-6 shadow-sm min-h-[300px]">
                 <div className="mb-6">
                     <h3 className="font-bold text-health-deep-purple text-lg">Weight Trend</h3>
                     <p className="text-gray-400 text-sm">Weekly progress</p>
                 </div>

                 {/* Weekly Chart */}
                 <div className="h-[200px] w-full relative border-l border-b border-gray-100">
                      <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
                           {/* Grid Lines */}
                           <line x1="0" y1="30" x2="300" y2="30" stroke="#f0f0f0" strokeDasharray="4" />
                           <line x1="0" y1="90" x2="300" y2="90" stroke="#f0f0f0" strokeDasharray="4" />
                           
                           {/* Dotted Projection Line */}
                           <line x1="0" y1="40" x2="300" y2="100" stroke="#2B8FF4" strokeWidth="1" strokeDasharray="4" opacity="0.5" />

                           {/* Line */}
                           <polyline 
                                points="0,40 100,60 200,80 300,100" 
                                fill="none" 
                                stroke="#2B8FF4" 
                                strokeWidth="3" 
                                strokeLinecap="round"
                                strokeLinejoin="round"
                           />
                           
                           {/* Dots */}
                           <circle cx="0" cy="40" r="5" fill="#2B8FF4" stroke="white" strokeWidth="2" />
                           <circle cx="100" cy="60" r="5" fill="#2B8FF4" stroke="white" strokeWidth="2" />
                           <circle cx="200" cy="80" r="5" fill="#2B8FF4" stroke="white" strokeWidth="2" />
                           <circle cx="300" cy="100" r="5" fill="#2B8FF4" stroke="white" strokeWidth="2" />
                      </svg>
                 </div>
                 <div className="flex justify-between text-xs text-gray-400 mt-4 px-2">
                     <span>W1</span><span>W2</span><span>W3</span><span>W4</span>
                 </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F0F4F8] rounded-[20px] p-4 flex flex-col justify-center h-24">
                     <p className="text-gray-500 text-xs mb-1">Average</p>
                     <p className="text-health-deep-purple font-bold text-lg">74.5 kg</p>
                </div>
                 <div className="bg-[#F0F4F8] rounded-[20px] p-4 flex flex-col justify-center h-24">
                     <p className="text-gray-500 text-xs mb-1">Total</p>
                     <p className="text-green-500 font-bold text-lg">-1.5 kg</p>
                </div>
            </div>

            {/* Insight Card */}
            <div className="bg-[#E8F5E9] rounded-[24px] p-5 flex gap-4">
                 <div className="h-10 w-10 bg-[#00C853] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                     <TrendingDown className="h-5 w-5 text-white" />
                 </div>
                 <div className="space-y-1">
                     <h4 className="font-bold text-green-800 text-sm">Consistent Progress!</h4>
                     <p className="text-[#2E7D32] text-xs leading-5">You're losing an average of 0.5 kg per week. Keep up the great work!</p>
                 </div>
            </div>
        </div>
    )
}

function MonthlyView() {
    return (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="bg-white rounded-[32px] p-6 shadow-sm min-h-[300px]">
                 <div className="mb-6">
                     <h3 className="font-bold text-health-deep-purple text-lg">Weight Trend</h3>
                     <p className="text-gray-400 text-sm">Long-term progress</p>
                 </div>

                 {/* Monthly Chart */}
                 <div className="h-[200px] w-full relative border-l border-b border-gray-100">
                      <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
                           {/* Line */}
                           <path 
                                d="M0,20 Q150,30 300,70" 
                                fill="none" 
                                stroke="#2B8FF4" 
                                strokeWidth="3" 
                                strokeLinecap="round"
                           />
                           
                           {/* Dots */}
                           <circle cx="0" cy="20" r="5" fill="#2B8FF4" stroke="white" strokeWidth="2" />
                           <circle cx="150" cy="35" r="5" fill="#2B8FF4" stroke="white" strokeWidth="2" />
                           <circle cx="300" cy="70" r="5" fill="#2B8FF4" stroke="white" strokeWidth="2" />

                           {/* Dot Line */}
                           <line x1="0" y1="150" x2="300" y2="150" stroke="#2B8FF4" strokeWidth="1" strokeDasharray="4" opacity="0.3" />
                      </svg>
                 </div>
                 <div className="flex justify-between text-xs text-gray-400 mt-4 px-1">
                     <span>Aug</span><span>Sep</span><span>Oct</span>
                 </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F0F4F8] rounded-[20px] p-4 flex flex-col justify-center h-24">
                     <p className="text-gray-500 text-xs mb-1">Per Month</p>
                     <p className="text-green-500 font-bold text-lg">-1.0 kg</p>
                </div>
                 <div className="bg-[#F0F4F8] rounded-[20px] p-4 flex flex-col justify-center h-24">
                     <p className="text-gray-500 text-xs mb-1">Total</p>
                     <p className="text-green-500 font-bold text-lg">-3.0 kg</p>
                </div>
            </div>

             {/* Motivation Card */}
            <div className="bg-purple-100 rounded-[24px] p-5 flex gap-4">
                 <div className="h-10 w-10 bg-[#AA00FF] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                     <Target className="h-5 w-5 text-white" />
                 </div>
                 <div className="space-y-1">
                     <h4 className="font-bold text-purple-900 text-sm">You're 43% There!</h4>
                     <p className="text-purple-800 text-xs leading-5">Only 6 kg left to reach your target weight. You've got this!</p>
                 </div>
            </div>
        </div>
    )
}
