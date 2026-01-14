"use client"

import Link from "next/link"
import { ChevronLeft, Search, Zap, Flame } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { BottomNav } from "@/components/BottomNav"

const CATEGORIES = [
    { label: "All", icon: "💪", active: true },
    { label: "Beginner", icon: "🔥", active: false },
    { label: "Advanced", icon: "🏋️", active: false },
]

const TYPES = [
    { label: "All", icon: "💪", active: true },
    { label: "Yoga", icon: "🧘", active: false },
    { label: "Leg", icon: "🦵", active: false },
]

const WORKOUTS = [
    {
        id: "full-body-warmup",
        title: "Full Body Warm Up",
        tags: ["Warm Up", "Beginner"],
        exercises: 20,
        time: "22 min",
        calories: 180,
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop", // Yoga/Warmup image
        tagColor: "bg-health-purple"
    },
    {
        id: "core-strength",
        title: "Core Strength Plank",
        tags: ["Core", "Advanced"],
        exercises: 15,
        time: "18 min",
        calories: 200,
        image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?q=80&w=2670&auto=format&fit=crop", // Plank
        tagColor: "bg-health-purple"
    },
    {
        id: "legs-squats",
        title: "Legs Squats Workout",
        tags: ["Leg", "Intermediate"],
        exercises: 18,
        time: "25 min",
        calories: 250,
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop", // Squats
        tagColor: "bg-health-purple"
    },
     {
        id: "upper-body",
        title: "Upper Body Strength",
        tags: ["Body", "Advanced"],
        exercises: 12,
        time: "20 min",
        calories: 220,
        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2670&auto=format&fit=crop", // Upper Body
        tagColor: "bg-health-purple"
    },
    {
        id: "lunges",
        title: "Lunges",
        tags: ["Strength", "Beginner"],
        exercises: 10,
        time: "15 min",
        calories: 160,
        image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=2670&auto=format&fit=crop", // Lunges (Gym)
        tagColor: "bg-health-purple"
    }
]

export default function WorkoutPage() {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className="min-h-screen bg-transparent p-6 pb-24 font-sans max-w-[420px] mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6 relative">
                 <Link href="/" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                </Link>
                <h1 className="text-lg font-bold text-center flex-1 pr-10 text-health-deep-purple">Exercises 💪</h1>
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search exercises..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-12 bg-white rounded-[16px] pl-12 pr-4 text-sm outline-none placeholder:text-gray-400 shadow-sm"
                />
            </div>

             {/* Filters Row 1 */}
             <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                 {CATEGORIES.map((cat, i) => (
                     <button 
                        key={i}
                        className={cn(
                            "h-10 px-4 rounded-full flex items-center gap-2 text-xs font-medium whitespace-nowrap transition-colors",
                            cat.active ? "bg-health-purple text-white shadow-md shadow-indigo-200" : "bg-white text-gray-500"
                        )}
                     >
                         <span>{cat.icon}</span> {cat.label}
                     </button>
                 ))}
             </div>

             {/* Filters Row 2 */}
             <div className="flex gap-3 overflow-x-auto pb-6 no-scrollbar">
                 {TYPES.map((type, i) => (
                     <button 
                        key={i}
                        className={cn(
                            "h-10 px-4 rounded-full flex items-center gap-2 text-xs font-medium whitespace-nowrap transition-colors",
                            type.active ? "bg-health-purple text-white shadow-md shadow-indigo-200" : "bg-white text-gray-500"
                        )}
                     >
                         <span>{type.icon}</span> {type.label}
                     </button>
                 ))}
             </div>

             {/* Workout Grid */}
             <div className="grid grid-cols-2 gap-4">
                 {WORKOUTS.map((workout) => (
                     <Link href={`/workout/${workout.id}`} key={workout.id} className="block group">
                         <div className="bg-white rounded-[24px] p-3 shadow-sm h-full hover:shadow-md transition-shadow">
                             {/* Image Container */}
                             <div className="relative h-32 w-full rounded-[20px] overflow-hidden mb-3">
                                 <img src={workout.image} alt={workout.title} className="w-full h-full object-cover" />
                                 
                                 {/* Tags Overlay */}
                                 <div className="absolute top-2 left-2 flex gap-1">
                                    <div className="bg-health-purple text-white text-[10px] font-bold px-2 py-1 rounded-full">
                                        {workout.tags[0]}
                                    </div>
                                    <div className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded-full">
                                        {workout.tags[1]}
                                    </div>
                                 </div>
                             </div>

                             {/* Content */}
                             <div>
                                 <h3 className="font-bold text-health-deep-purple text-sm mb-1 leading-tight line-clamp-2 min-h-[40px]">
                                     {workout.title}
                                 </h3>
                                 <p className="text-gray-400 text-[10px] mb-2">
                                     {workout.exercises} Exercises
                                 </p>
                                 
                                 <div className="flex items-center gap-2">
                                     <div className="h-6 px-2 bg-health-lavender rounded-full flex items-center gap-1">
                                         <ClockIcon className="h-3 w-3 text-health-purple" />
                                         <span className="text-[10px] font-bold text-health-purple">{workout.time}</span>
                                     </div>
                                 </div>
                                 <div className="flex items-center gap-1 mt-1">
                                     <Flame className="h-3 w-3 text-orange-400 fill-orange-400" />
                                     <span className="text-[10px] text-gray-400">{workout.calories} cal</span>
                                 </div>
                             </div>
                         </div>
                     </Link>
                 ))}
             </div>
             
             <BottomNav />
        </div>
    )
}

function ClockIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}
