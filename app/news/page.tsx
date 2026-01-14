"use client"

import { ChevronLeft, Search, Bookmark, Clock } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { ARTICLES } from "@/lib/data"

const CATEGORIES = [
    { label: "All", id: "all", icon: "📰" },
    { label: "Nutrition", id: "Nutrition", icon: "🥗" },
    { label: "Fitness", id: "Fitness", icon: "💪" },
    { label: "Mental Health", id: "Mental Health", icon: "🧘" },
    { label: "Sleep", id: "Sleep", icon: "😴" },
    { label: "Wellness", id: "Wellness", icon: "💧" },
]

export default function NewsPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredArticles = ARTICLES.filter(article => {
        const matchesCategory = activeCategory === "all" || article.category === activeCategory
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="min-h-screen bg-transparent p-6 pb-24 font-sans max-w-[420px] mx-auto">
             {/* Header */}
             <div className="flex items-center gap-4 mb-6 relative">
                 <Link href="/" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                </Link>
                <h1 className="text-lg font-bold text-center flex-1 pr-10 text-health-deep-purple flex items-center justify-center gap-2">
                    Health News <span className="text-xl">📰</span>
                </h1>
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search articles..." 
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
                            "h-9 px-4 rounded-full flex items-center gap-2 text-xs font-bold whitespace-nowrap transition-colors shadow-sm",
                            activeCategory === cat.id 
                                ? "bg-teal-500 text-white shadow-emerald-100" 
                                : "bg-white text-gray-500"
                        )}
                     >
                         <span>{cat.icon}</span> {cat.label}
                     </button>
                 ))}
             </div>

             {/* Articles Grid */}
             <div className="grid grid-cols-2 gap-4">
                 {filteredArticles.map((article) => (
                     <Link href={`/news/${article.id}`} key={article.id} className="block group">
                         <div className="bg-white rounded-[24px] p-3 shadow-sm h-full hover:shadow-md transition-shadow flex flex-col">
                             {/* Image */}
                             <div className="relative h-28 w-full rounded-[20px] overflow-hidden mb-3">
                                 <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                                 
                                 {/* Category Badge */}
                                 <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                                     <span className="text-[10px] font-bold text-gray-700">{article.category}</span>
                                 </div>

                                 {/* Bookmark */}
                                 <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm h-6 w-6 rounded-full flex items-center justify-center">
                                     <Bookmark className="h-3 w-3 text-gray-600" />
                                 </div>
                             </div>

                             {/* Content */}
                             <div className="flex-1 flex flex-col">
                                 <h3 className="font-bold text-health-deep-purple text-sm mb-2 leading-tight line-clamp-2">
                                     {article.title}
                                 </h3>
                                 
                                 <div className="flex items-center justify-between text-[10px] text-gray-400 mb-3">
                                     <span className="line-clamp-1">{article.author}</span>
                                     <span>{article.timeAgo}</span>
                                 </div>
                                 
                                 {/* Read Time */}
                                 <div className="mt-auto">
                                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#F0FBFA] text-teal-500 rounded-lg text-[10px] font-bold">
                                          <Clock className="h-3 w-3" /> {article.readTime}
                                      </div>
                                 </div>
                             </div>
                         </div>
                     </Link>
                 ))}
             </div>
        </div>
    )
}
