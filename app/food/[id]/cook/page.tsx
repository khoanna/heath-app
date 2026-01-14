"use client"

import { useParams, useRouter } from "next/navigation"
import React, { useState } from "react"
import { ChevronLeft, Check, Clock } from "lucide-react"
import { MEALS } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function CookingModePage() {
    const params = useParams()
    const router = useRouter()
    const { id } = params
    const meal = MEALS.find(m => m.id === id)
    
    const [currentStep, setCurrentStep] = useState(0)

    if (!meal || !meal.instructions) {
        return <div className="p-10 text-center">Meal details not found</div>
    }

    const totalSteps = meal.instructions.length
    const currentInstruction = meal.instructions[currentStep]
    const progress = ((currentStep + 1) / totalSteps) * 100

    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1)
        } else {
            // Finished
            router.push('/food') // Or back to detail
        }
    }

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }

    return (
        <div className="min-h-screen bg-transparent font-sans flex flex-col max-w-[420px] mx-auto relative overflow-hidden">
            
            {/* Header / Nav */}
            <div className="p-6 flex items-center gap-4">
                <button 
                    onClick={() => router.back()}
                    className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm"
                >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                </button>
                <div className="flex-1">
                    <p className="text-xs text-gray-400 font-bold mb-2 text-center uppercase tracking-wide">Cooking Mode</p>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-[#91C788] transition-all duration-300 ease-out rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
                <div className="h-10 w-10 flex items-center justify-center font-bold text-gray-400 text-sm">
                    {currentStep + 1}/{totalSteps}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col px-8 pt-4 pb-24 text-center">
                
                {/* Step Image (using meal image as placeholder since we don't have step images) */}
                <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-md mb-8 relative">
                    <img src={meal.image} alt="Cooking Step" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Step Info */}
                <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-xs font-bold mb-4 mx-auto">
                    Step {currentStep + 1}
                </span>

                <h2 className="text-2xl font-bold text-health-deep-purple mb-4">
                    {currentInstruction.time ? `~ ${currentInstruction.time}` : "Almost There"}
                </h2>

                <p className="text-gray-600 leading-relaxed text-lg">
                    {currentInstruction.text}
                </p>

                {/* Timer Hint */}
                {currentInstruction.time && (
                    <div className="mt-8 flex justify-center">
                        <div className="flex items-center gap-2 text-gray-400 font-medium bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                            <Clock className="h-4 w-4" />
                            <span>Timer Recommended</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-10 left-6 right-6 flex gap-4">
                <button 
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className={cn(
                        "h-14 w-14 rounded-full flex items-center justify-center transition-colors border-2",
                        currentStep === 0 
                            ? "border-gray-200 text-gray-300 cursor-not-allowed" 
                            : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                    )}
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>

                <button 
                    onClick={handleNext}
                    className="flex-1 h-14 bg-orange-400 rounded-[20px] text-white font-bold text-lg shadow-lg shadow-orange-200 flex items-center justify-center gap-2 hover:bg-orange-500 transition-colors"
                >
                    {currentStep === totalSteps - 1 ? (
                        <>Finish <Check className="h-5 w-5" /></>
                    ) : (
                        "Next Step"
                    )}
                </button>
            </div>
        </div>
    )
}
