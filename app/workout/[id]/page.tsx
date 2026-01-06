"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, Bookmark, Clock, Zap, Flame, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const WORKOUTS_DATA: Record<string, any> = {
    "full-body-warmup": {
        title: "Full Body Warm Up",
        tags: ["Warm Up", "Beginner"],
        duration: "10 min",
        exercisesCount: 20,
        calories: 180,
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop",
        description: "This workout is designed to warm up your entire body and prepare you for more intense exercises. Perfect for beginners and experienced athletes alike.",
        equipment: ["No Equipment", "Yoga Mat (Optional)"],
        exercises: [
            { name: "Jumping Jacks", duration: "30 sec", id: 1, isWarmUp: true },
            { name: "Arm Circles", duration: "30 sec", id: 2, isWarmUp: true },
            { name: "High Knees", duration: "30 sec", id: 3, isWarmUp: true },
            { name: "Leg Swings", duration: "30 sec", id: 4, isWarmUp: false },
            { name: "Torso Twists", duration: "30 sec", id: 5, isWarmUp: false },
            { name: "Hip Circles", duration: "30 sec", id: 6, isWarmUp: false },
            { name: "Shoulder Rolls", duration: "30 sec", id: 7, isWarmUp: false },
            { name: "Ankle Rolls", duration: "30 sec", id: 8, isWarmUp: false },
        ]
    }
}

export default function WorkoutDetailsPage() {
    const params = useParams()
    const id = params.id as string
    
    // Fallback to first workout if not found for demo purposes or exact match
    const workout = WORKOUTS_DATA[id] || WORKOUTS_DATA["full-body-warmup"]

    return (
        <div className="min-h-screen bg-[#F8F9FE] pb-24 relative font-sans max-w-[420px] mx-auto">
            {/* Header Image Background */}
            <div className="h-[300px] w-full relative">
                <img src={workout.image} alt={workout.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                
                {/* Header Actions */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
                    <Link href="/workout" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <ChevronLeft className="h-5 w-5 text-gray-700" />
                    </Link>
                    <button className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <Bookmark className="h-5 w-5 text-gray-700" />
                    </button>
                </div>
            </div>

            {/* Content Card - Negative Margin to overlap */}
            <div className="relative -mt-10 bg-[#F8F9FE] rounded-t-[32px] px-6 pt-8">
                 {/* Title & Tags */}
                 <div className="flex gap-2 mb-4">
                     {workout.tags.map((tag: string, i: number) => (
                         <span key={i} className={`px-4 py-1.5 rounded-full text-xs font-bold ${i === 0 ? 'bg-[#7C7AF5] text-white' : 'bg-white text-gray-600 border border-gray-100'}`}>
                             {tag}
                         </span>
                     ))}
                 </div>
                 
                 <h1 className="text-2xl font-bold text-health-deep-purple mb-6">{workout.title}</h1>

                 {/* Stats Cards */}
                 <div className="grid grid-cols-3 gap-3 mb-8">
                     <div className="bg-white rounded-[20px] p-3 py-4 flex flex-col items-center justify-center shadow-sm">
                         <Clock className="h-5 w-5 text-[#7C7AF5] mb-2" />
                         <p className="text-[10px] text-gray-400 mb-1">Duration</p>
                         <p className="font-bold text-health-deep-purple text-sm">{workout.duration}</p>
                     </div>
                     <div className="bg-white rounded-[20px] p-3 py-4 flex flex-col items-center justify-center shadow-sm">
                         <Zap className="h-5 w-5 text-[#7C7AF5] mb-2" />
                         <p className="text-[10px] text-gray-400 mb-1">Exercises</p>
                         <p className="font-bold text-health-deep-purple text-sm">{workout.exercisesCount}</p>
                     </div>
                     <div className="bg-white rounded-[20px] p-3 py-4 flex flex-col items-center justify-center shadow-sm">
                         <Flame className="h-5 w-5 text-[#FF9800] fill-[#FF9800] mb-2" />
                         <p className="text-[10px] text-gray-400 mb-1">Calories</p>
                         <p className="font-bold text-health-deep-purple text-sm">{workout.calories}</p>
                     </div>
                 </div>

                 {/* About */}
                 <div className="bg-[#EDE9FE] rounded-[24px] p-5 mb-8">
                     <h3 className="font-bold text-health-deep-purple text-sm mb-2">About This Workout</h3>
                     <p className="text-gray-600 text-xs leading-5">
                         {workout.description}
                     </p>
                 </div>

                 {/* Exercise List */}
                 <div className="mb-8">
                     <h3 className="font-bold text-health-deep-purple text-base mb-4">Exercise List</h3>
                     <div className="space-y-3">
                         {workout.exercises.map((ex: any) => (
                             <Link href={`/workout/${id}/exercise/${ex.id}`} key={ex.id} className="block">
                                <div className="bg-white rounded-[20px] p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="h-8 w-8 bg-[#7C7AF5] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                                            {ex.id}
                                        </div>
                                        <div>
                                            <p className="font-medium text-health-deep-purple text-sm">{ex.name}</p>
                                            {ex.isWarmUp && (
                                                <div className="flex items-center gap-1 mt-0.5">
                                                    <Flame className="h-3 w-3 text-orange-400 fill-orange-400" />
                                                    <span className="text-[10px] text-orange-400 font-bold">Warm Up</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <span className="text-gray-400 text-xs">{ex.duration}</span>
                                </div>
                             </Link>
                         ))}
                     </div>
                 </div>

                 {/* Equipment Needed */}
                 <div className="mb-24">
                     <h3 className="font-bold text-health-deep-purple text-base mb-4">Equipment Needed</h3>
                     <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                         {workout.equipment.map((item: string, i: number) => (
                             <div key={i} className="bg-[#EBF2FF] px-4 py-2.5 rounded-[16px] text-xs font-bold text-[#2B8FF4] whitespace-nowrap">
                                 {item}
                             </div>
                         ))}
                     </div>
                 </div>
            </div>

            {/* Sticky Bottom Button */}
            <div className="fixed bottom-6 left-0 right-0 max-w-[420px] mx-auto px-6 z-20">
                <Link href={`/workout/${id}/start`}>
                    <Button className="w-full h-14 bg-[#7C7AF5] hover:bg-[#6866E5] text-white rounded-[20px] text-lg font-medium shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
                        <Play className="h-5 w-5 fill-current" /> Start Workout
                    </Button>
                </Link>
            </div>
        </div>
    )
}
