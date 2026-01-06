"use client"

import { ChevronLeft, Pause, RotateCcw, SkipForward, Play } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"

export default function WorkoutStartPage() {
    const params = useParams()
    const [timeLeft, setTimeLeft] = useState(139) // 2:19 is 139 seconds
    const [isPaused, setIsPaused] = useState(false)

    // Simple timer countdown
    useEffect(() => {
        if (isPaused) return
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
        }, 1000)
        return () => clearInterval(timer)
    }, [isPaused])

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <div className="min-h-screen bg-[#F8F9FE] flex flex-col font-sans max-w-[420px] mx-auto relative overflow-hidden">
            {/* Header */}
            <header className="px-6 pt-6 pb-4 flex items-center justify-between relative z-10 bg-[#7C7AF5] text-white">
                <Link href={`/workout/${params.id}`} className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <ChevronLeft className="h-5 w-5 text-white" />
                </Link>
                <h1 className="text-base font-medium">Workout In Progress</h1>
                <div className="w-10" /> {/* Spacer */}
            </header>
            
            {/* Purple Background Extension */}
            <div className="absolute top-0 left-0 right-0 h-[300px] bg-[#7C7AF5] rounded-b-[40px] z-0" />

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-start relative z-10 px-6 pt-2">
                
                <h2 className="text-2xl font-bold text-white mb-8">Core Strength Plank</h2>

                {/* Circular Image */}
                <div className="w-[280px] h-[280px] rounded-full p-2 bg-white flex items-center justify-center shadow-lg mb-8">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                         <img 
                            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop" 
                            alt="Exercise" 
                            className="w-full h-full object-cover"
                         />
                    </div>
                </div>

                {/* Timer */}
                <div className="text-center mb-8">
                    <div className="text-6xl font-bold text-health-deep-purple mb-2 font-mono tracking-tight">
                        {formatTime(timeLeft)}
                    </div>
                    <p className="text-gray-500 font-medium">Jumping Jacks</p>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-6 mb-8 w-full justify-center">
                    <Button 
                        variant="outline" 
                        onClick={() => setTimeLeft(139)}
                        className="h-14 px-8 rounded-[20px] border-[#7C7AF5] text-[#7C7AF5] hover:bg-[#7C7AF5]/10 bg-transparent flex gap-2"
                    >
                        <RotateCcw className="h-5 w-5" /> Restart
                    </Button>

                    <Button 
                        onClick={() => setIsPaused(!isPaused)}
                        className="h-14 px-10 rounded-[20px] bg-[#7C7AF5] hover:bg-[#6866E5] text-white flex gap-2 shadow-lg shadow-indigo-200"
                    >
                        {isPaused ? <Play className="h-5 w-5 fill-current" /> : <Pause className="h-5 w-5 fill-current" />} 
                        {isPaused ? "Resume" : "Pause"}
                    </Button>
                </div>

                {/* Skip Link */}
                <button className="text-gray-400 text-sm font-medium flex items-center gap-1 hover:text-gray-600 transition-colors mb-auto">
                    <SkipForward className="h-4 w-4" /> Skip Exercise
                </button>

                 {/* Footer Status Card */}
                <div className="w-full bg-white rounded-[24px] p-4 py-5 shadow-sm mt-8 mb-6 flex items-center justify-center">
                    <p className="text-gray-500 text-sm">
                        Exercise <span className="font-bold text-[#7C7AF5]">1</span> of 20 • 200 calories burned
                    </p>
                </div>
            </div>
        </div>
    )
}
