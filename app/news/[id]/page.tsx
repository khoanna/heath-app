"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import React, { useState } from "react"
import { ChevronLeft, Share2,  Clock, Bookmark, Play } from "lucide-react"
import { ARTICLES } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ArticleDetailPage() {
    const params = useParams()
    const router = useRouter()
    const { id } = params
    const article = ARTICLES.find(a => a.id === id)
    const [isBookmarked, setIsBookmarked] = useState(false)

    if (!article) {
        return <div className="p-10 text-center">Article not found</div>
    }

    return (
        <div className="min-h-screen bg-white font-sans max-w-[420px] mx-auto relative flex flex-col">
            {/* Hero Image */}
            <div className="relative h-[280px] w-full shrink-0">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
                
                {/* Header Actions */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-white">
                    <button 
                        onClick={() => router.back()}
                        className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <div className="flex gap-3">
                        <button 
                             onClick={() => setIsBookmarked(!isBookmarked)}
                             className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                            <Bookmark className={cn("h-4 w-4", isBookmarked ? "fill-white" : "")} />
                        </button>
                        <button className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                            <Share2 className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Container - Overlaps image */}
            <div className="flex-1 bg-white rounded-t-[32px] -mt-10 relative z-10 px-6 pt-6 pb-24">
                
                {/* Badges */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="bg-teal-500 text-white px-4 py-1.5 rounded-full text-xs font-bold">
                        {article.category}
                    </span>
                    <span className="border border-gray-200 text-gray-500 px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
                        <Clock className="h-3 w-3" /> {article.readTime} read
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl font-bold text-health-deep-purple mb-6 leading-tight">
                    {article.title}
                </h1>

                {/* Author Card */}
                <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 mb-8 bg-gray-50/50">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 bg-teal-100 text-teal-600">
                             <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${article.author}`} />
                             <AvatarFallback>{article.author[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-bold text-health-deep-purple">{article.author}</p>
                            <p className="text-[10px] text-gray-400">{article.timeAgo}</p>
                        </div>
                    </div>
                    <button className="bg-teal-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm shadow-teal-100 hover:bg-teal-600 transition-colors">
                        Follow
                    </button>
                </div>

                {/* Article Body */}
                <div className="space-y-6 text-gray-600 leading-relaxed">
                    {article.content.map((block, index) => {
                        if (block.type === 'heading') {
                            return (
                                <h2 key={index} className="text-lg font-bold text-health-deep-purple mt-2">
                                    {block.text}
                                </h2>
                            )
                        }
                        return (
                            <p key={index} className="text-sm">
                                {block.text}
                            </p>
                        )
                    })}
                </div>

                {/* Related Topics (Tags) */}
                <div className="mt-10">
                    <h3 className="text-sm font-bold text-gray-800 mb-3">Related Topics</h3>
                    <div className="flex flex-wrap gap-2">
                        {article.tags?.map((tag) => (
                            <span key={tag} className="px-3 py-1.5 bg-gray-100 text-gray-500 rounded-lg text-[10px] font-medium border border-gray-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

             {/* Bottom Share Button */}
             <div className="fixed bottom-6 left-6 right-6 z-20 max-w-[420px] mx-auto">
                <button className="w-full bg-teal-500 text-white py-4 rounded-[20px] font-bold shadow-lg shadow-teal-100 flex items-center justify-center gap-2 hover:bg-teal-600 transition-colors">
                    <Share2 className="h-4 w-4" /> Share Article
                </button>
            </div>
        </div>
    )
}
