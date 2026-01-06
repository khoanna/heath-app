"use client"

import { ChevronLeft, Search, Clock, Flame } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"
import { cn } from "@/lib/utils"

const CATEGORIES = [
    { label: "All", icon: "🍽️", id: "all" },
    { label: "Breakfast", icon: "🥞", id: "breakfast" },
    { label: "Lunch", icon: "🥙", id: "lunch" },
    { label: "Dinner", icon: "🌙", id: "dinner" },
    { label: "Snack", icon: "🍪", id: "snack" },
]

import { MEALS } from "@/lib/data"

export default function FoodPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredMeals = MEALS.filter(meal => {
        const matchesCategory = activeCategory === "all" || meal.category === activeCategory
        const matchesSearch = meal.title.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="min-h-screen bg-[#FDF8F5] p-6 pb-24 font-sans max-w-[420px] mx-auto">
             {/* Header */}
             <div className="flex items-center gap-4 mb-6 relative">
                 <Link href="/" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                </Link>
                <h1 className="text-lg font-bold text-center flex-1 pr-10 text-health-deep-purple">All Meals 🍽️</h1>
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search meals..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-12 bg-white rounded-[16px] pl-12 pr-4 text-sm outline-none placeholder:text-gray-400 shadow-sm"
                />
            </div>

            {/* Filters */}
             <div className="flex gap-3 overflow-x-auto pb-6 no-scrollbar">
                 {CATEGORIES.map((cat) => (
                     <button 
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={cn(
                            "h-10 px-4 rounded-full flex items-center gap-2 text-xs font-bold whitespace-nowrap transition-colors shadow-sm",
                            activeCategory === cat.id ? "bg-[#FF876C] text-white shadow-orange-200" : "bg-white text-gray-500"
                        )}
                     >
                         <span>{cat.icon}</span> {cat.label}
                     </button>
                 ))}
             </div>

             {/* Meals Grid */}
             <div className="grid grid-cols-2 gap-4">
                 {filteredMeals.map((meal) => (
                     <Link href={`/food/${meal.id}`} key={meal.id} className="block group">
                         <div className="bg-white rounded-[24px] p-3 shadow-sm h-full hover:shadow-md transition-shadow flex flex-col">
                             {/* Image */}
                             <div className="relative h-28 w-full rounded-[20px] overflow-hidden mb-3">
                                 <img src={meal.image} alt={meal.title} className="w-full h-full object-cover" />
                                 <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                                     <Clock className="h-3 w-3 text-gray-500" />
                                     <span className="text-[10px] font-bold text-gray-600">{meal.time}</span>
                                 </div>
                                 <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                                     <Flame className="h-3 w-3 text-[#FF876C] fill-[#FF876C]" />
                                     <span className="text-[10px] font-bold text-gray-600">{meal.calories}</span>
                                 </div>
                             </div>

                             {/* Content */}
                             <div className="flex-1 flex flex-col">
                                 <h3 className="font-bold text-health-deep-purple text-sm mb-1 leading-tight line-clamp-2">
                                     {meal.title}
                                 </h3>
                                 <p className="text-gray-400 text-[10px] mb-3 line-clamp-1">
                                     {meal.description}
                                 </p>
                                 
                                 {/* Macros */}
                                 <div className="mt-auto flex gap-2 justify-center">
                                      <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-lg text-[10px] font-bold">{meal.macros.p}</span>
                                      <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-lg text-[10px] font-bold">{meal.macros.c}</span>
                                      <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-lg text-[10px] font-bold">{meal.macros.f}</span>
                                 </div>
                             </div>
                         </div>
                     </Link>
                 ))}
             </div>
        </div>
    )
}
