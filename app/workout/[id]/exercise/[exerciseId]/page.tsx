"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronLeft, Clock, Info, AlertCircle, PlayCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// In a real app, this would be fetched based on ID
const EXERCISE_DETAILS: Record<string, any> = {
    "1": { // Jumping Jacks
        name: "Jumping Jacks",
        duration: "30 sec",
        video: "https://media.giphy.com/media/l2Je5Imz6ZqLzgwz6/giphy.gif", // Placeholder GIF
        image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2670&auto=format&fit=crop",
        difficulty: "Beginner",
        muscles: ["Calves", "Quads", "Shoulders", "Core"],
        description: "A jumping jack is a physical jumping exercise performed by jumping to a position with the legs spread wide and the hands going to the overhead position.",
        steps: [
            "Stand upright with your legs together and arms at your sides.",
            "Bend your knees slightly, and jump into the air.",
            "As you jump, spread your legs to be about shoulder-width apart.",
            "Stretch your arms out and over your head.",
            "Jump back to starting position."
        ],
        mistakes: [
            "Not engaging your core.",
            "Landing only on toes.",
            "Arms not fully extended."
        ],
        isWarmUp: true
    },
    // Fallback data for others
    "default": {
        name: "Exercise Details",
        duration: "30 sec",
        video: "https://media.giphy.com/media/l2Je5Imz6ZqLzgwz6/giphy.gif",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop",
        difficulty: "Intermediate",
        muscles: ["Full Body"],
        description: "Perform this exercise with controlled movements to maximize muscle engagement.",
        steps: [
             "Get into the starting position.",
             "Perform the movement slowly.",
             "Maintain proper breathing.",
             "Return to start."
        ],
        mistakes: ["Rushing the movement.", "Improper form."],
        isWarmUp: false
    }
}

export default function ExerciseDetailsPage() {
    const params = useParams()
    const { id, exerciseId } = params // id is workoutId, exerciseId is exerciseId
    
    // Type safer casting
    const eId = Array.isArray(exerciseId) ? exerciseId[0] : exerciseId
    const data = EXERCISE_DETAILS[eId as string] || EXERCISE_DETAILS["default"]
    
    // Override name if fallback
    const displayData = EXERCISE_DETAILS[eId as string] ? data : { ...data, name: `Exercise ${eId}` }

    return (
        <div className="min-h-screen bg-transparent pb-24 font-sans max-w-[420px] mx-auto flex flex-col">
            {/* Header */}
            <div className="px-6 pt-6 mb-6 flex items-center justify-between">
                <Link href={`/workout/${id}`} className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                </Link>
                <h1 className="text-lg font-bold text-health-deep-purple">Exercise</h1>
                <div className="w-10" />
            </div>

            {/* Video/Image Area */}
            <div className="px-6 mb-6">
                 <div className="relative w-full aspect-video bg-black rounded-[24px] overflow-hidden shadow-lg shadow-indigo-100">
                     <img src={displayData.image} alt={displayData.name} className="w-full h-full object-cover opacity-80" />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                         <PlayCircle className="h-16 w-16 text-white/90" />
                     </div>
                     {displayData.isWarmUp && (
                         <div className="absolute top-4 left-4 bg-orange-400 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                             Warm Up
                         </div>
                     )}
                 </div>
            </div>

            {/* Content */}
            <div className="px-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-health-deep-purple">{displayData.name}</h2>
                    <div className="flex items-center gap-1 bg-[#EBF2FF] px-3 py-1.5 rounded-full">
                        <Clock className="h-3 w-3 text-[#2B8FF4]" />
                        <span className="text-xs font-bold text-[#2B8FF4]">{displayData.duration}</span>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 bg-white border border-gray-100 text-gray-500 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {displayData.difficulty}
                    </span>
                    {displayData.muscles.map((muscle: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-white border border-gray-100 text-gray-500 rounded-full text-[10px] uppercase tracking-wider">
                           {muscle}
                        </span>
                    ))}
                </div>

                {/* Important Note for UI/UX */}
                { !displayData.isWarmUp && (
                     <div className="bg-[#FFF8E1] border border-[#FFE0B2] rounded-[20px] p-4 mb-6 flex gap-3">
                         <AlertCircle className="h-5 w-5 text-orange-600 shrink-0" />
                         <div>
                             <p className="text-orange-600 font-bold text-xs mb-1">Warm Up Recommended</p>
                             <p className="text-orange-500 text-[10px] leading-4">
                                 This is a strenuous exercise. Ensure you have completed a warm-up routine prevents injury.
                             </p>
                         </div>
                     </div>
                )}
                
                {/* Description */}
                <div className="mb-6">
                     <h3 className="font-bold text-health-deep-purple text-sm mb-2">Description</h3>
                     <p className="text-gray-500 text-xs leading-5">
                         {displayData.description}
                     </p>
                </div>

                {/* Steps */}
                <div className="mb-6">
                     <h3 className="font-bold text-health-deep-purple text-sm mb-3">How To Do It</h3>
                     <div className="space-y-4 relative border-l-2 border-indigo-100 ml-2 pl-6">
                         {displayData.steps.map((step: string, i: number) => (
                             <div key={i} className="relative">
                                 <span className="absolute -left-[31px] top-0 h-6 w-6 bg-health-purple rounded-full text-white text-[10px] font-bold flex items-center justify-center ring-4 ring-white">
                                     {i + 1}
                                 </span>
                                 <p className="text-gray-600 text-xs leading-5">
                                     {step}
                                 </p>
                             </div>
                         ))}
                     </div>
                </div>

                 {/* Focus Area */}
                <div className="mb-8">
                     <h3 className="font-bold text-health-deep-purple text-sm mb-3">Common Mistakes</h3>
                     <div className="bg-transparent rounded-[20px] p-4">
                         {displayData.mistakes.map((mistake: string, i: number) => (
                             <div key={i} className="flex gap-3 mb-2 last:mb-0">
                                 <div className="h-4 w-4 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                     <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                                 </div>
                                 <p className="text-gray-500 text-xs">{mistake}</p>
                             </div>
                         ))}
                     </div>
                </div>
            </div>

            {/* Bottom Button */}
            <div className="p-6 pt-0 mt-auto">
                 <Button className="w-full h-14 bg-health-purple hover:bg-[#6866E5] text-white rounded-[20px] text-base font-medium">
                     Mark as Completed
                 </Button>
            </div>
        </div>
    )
}
