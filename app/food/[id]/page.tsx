"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import React, { useState } from "react"
import { ChevronLeft, Flame, Clock, Heart, Play, Share2 } from "lucide-react"
import { MEALS } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function MealDetailPage() {
    const params = useParams()
    const { id } = params
    const meal = MEALS.find(m => m.id === id)
    const [activeTab, setActiveTab] = useState<"ingredients" | "instructions">("ingredients")
    const [isFavorite, setIsFavorite] = useState(false)

    if (!meal) {
        return <div className="p-10 text-center">Meal not found</div>
    }

    return (
        <div className="min-h-screen bg-transparent font-sans pb-24 max-w-[420px] mx-auto">
            {/* Hero Section */}
            <div className="relative h-[300px] w-full">
                <img src={meal.image} alt={meal.title} className="w-full h-full object-cover" />
                
                {/* Header Actions */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                    <Link href="/food" className="h-10 w-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                        <ChevronLeft className="h-5 w-5 text-white" />
                    </Link>
                    <div className="flex gap-3">
                        <button className="h-10 w-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                            <Share2 className="h-4 w-4 text-white" />
                        </button>
                        <button 
                            onClick={() => setIsFavorite(!isFavorite)}
                            className="h-10 w-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center"
                        >
                            <Heart className={cn("h-4 w-4", isFavorite ? "fill-red-500 text-red-500" : "text-white")} />
                        </button>
                    </div>
                </div>

                {/* Info Card Overlay */}
                <div className="absolute -bottom-10 left-6 right-6 p-4 bg-white rounded-[24px] shadow-lg flex flex-col items-center">
                    <h1 className="text-xl font-bold text-health-deep-purple mb-3 text-center">{meal.title}</h1>
                    <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
                         <div className="flex items-center gap-1.5">
                             <Flame className="h-4 w-4 text-orange-500" />
                             <span>{meal.calories} kcal</span>
                         </div>
                         <div className="w-[1px] h-4 bg-gray-200"></div>
                         <div className="flex items-center gap-1.5">
                             <Clock className="h-4 w-4 text-purple-500" />
                             <span>{meal.time}</span>
                         </div>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="mt-14 px-6">
                
                {/* Tabs */}
                <div className="bg-gray-100 p-1 rounded-full flex mb-6">
                    <button 
                        onClick={() => setActiveTab("ingredients")}
                        className={cn(
                            "flex-1 py-3 px-6 rounded-full text-sm font-bold transition-all",
                            activeTab === "ingredients" ? "bg-white text-health-deep-purple shadow-sm" : "text-gray-400"
                        )}
                    >
                        Ingredients
                    </button>
                    <button 
                        onClick={() => setActiveTab("instructions")}
                        className={cn(
                            "flex-1 py-3 px-6 rounded-full text-sm font-bold transition-all",
                            activeTab === "instructions" ? "bg-white text-health-deep-purple shadow-sm" : "text-gray-400"
                        )}
                    >
                        Instructions
                    </button>
                </div>

                {/* Tab Content */}
                <div className="space-y-4">
                    {activeTab === "ingredients" ? (
                        <div className="space-y-3">
                            {meal.ingredients?.map((ing, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-50 hover:border-orange-100 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 bg-orange-50 rounded-full flex items-center justify-center text-lg">
                                            🥗
                                        </div>
                                        <span className="font-bold text-gray-700">{ing.name}</span>
                                    </div>
                                    <span className="text-gray-400 font-medium text-sm">{ing.amount}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {meal.instructions?.map((inst, i) => (
                                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-50">
                                    <div className="h-8 w-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                                        {inst.step}
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-2">{inst.text}</p>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                                            <Clock className="h-3 w-3" />
                                            <span>{inst.time}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Start Cooking Button */}
                <div className="fixed bottom-6 left-6 right-6 z-10 max-w-[calc(420px-3rem)] mx-auto">
                    <Link href={`/food/${id}/cook`}>
                        <button className="w-full bg-orange-400 text-white py-4 rounded-[20px] font-bold shadow-lg shadow-orange-200 flex items-center justify-center gap-2 hover:bg-orange-500 transition-colors">
                            Start Cooking <Play className="h-4 w-4 fill-white" />
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
