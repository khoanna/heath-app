"use client"

import { ChevronLeft, Send, Sparkles, Bot, User } from "lucide-react"
import Link from "next/link"
import React, { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { BottomNav } from "@/components/BottomNav"

type Message = {
    id: string
    role: "user" | "assistant"
    text: string
    time: string
}

const SUGGESTIONS = [
    "Plan a healthy dinner 🥗",
    "How to sleep better? 😴",
    "5 min workout routine 💪",
    "Benefits of meditation 🧘"
]

export default function AiAssistPage() {
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "assistant",
            text: "Hi Hoan! I'm your personal health assistant. How can I help you reach your goals today?",
            time: "Now"
        }
    ])
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = () => {
        if (!input.trim()) return

        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            text: input,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }

        setMessages(prev => [...prev, userMsg])
        setInput("")
        setIsTyping(true)

        // Simulate AI response
        setTimeout(() => {
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                text: "That's a great question! Based on your recent activity, I'd recommend focusing on consistency. Would you like a specific plan?",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
            setMessages(prev => [...prev, aiMsg])
            setIsTyping(false)
        }, 1500)
    }

    const handleSuggestionClick = (text: string) => {
        setInput(text)
        // Optionally auto-send:
        // handleSend() via useEffect or Ref refactoring, but setting input is good for now
    }

    return (
        <div className="min-h-screen bg-transparent pb-24 font-sans max-w-[420px] mx-auto flex flex-col relative">
            {/* Header */}
            <header className="px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-purple-200">
                        <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                        <h1 className="font-bold text-health-deep-purple">Health AI</h1>
                        <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-xs text-green-600 font-medium">Online</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Chat Area */}
            <div className="flex-1 px-4 py-6 overflow-y-auto space-y-6">
                {messages.map((msg) => (
                    <div 
                        key={msg.id} 
                        className={cn(
                            "flex w-full",
                            msg.role === "user" ? "justify-end" : "justify-start"
                        )}
                    >
                        <div className={cn(
                            "flex gap-3 max-w-[85%]",
                            msg.role === "user" ? "flex-row-reverse" : "flex-row"
                        )}>
                            {/* Avatar */}
                            <div className={cn(
                                "h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-auto",
                                msg.role === "user" ? "bg-gray-200 text-gray-500" : "bg-purple-100 text-purple-600"
                            )}>
                                {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                            </div>

                            {/* Bubble */}
                            <div className="space-y-1">
                                <div className={cn(
                                    "p-4 rounded-[20px] text-sm leading-relaxed shadow-sm",
                                    msg.role === "user" 
                                        ? "bg-health-deep-purple text-white rounded-br-none" 
                                        : "bg-white text-gray-700 rounded-bl-none"
                                )}>
                                    {msg.text}
                                </div>
                                <span className={cn(
                                    "text-[10px] text-gray-400 block px-1",
                                    msg.role === "user" ? "text-right" : "text-left"
                                )}>
                                    {msg.time}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                
                {isTyping && (
                    <div className="flex justify-start w-full">
                        <div className="flex gap-3 max-w-[85%]">
                             <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-auto">
                                <Bot className="h-4 w-4" />
                            </div>
                            <div className="bg-white p-4 rounded-[20px] rounded-bl-none shadow-sm flex gap-1 items-center h-[52px]">
                                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Suggestions (Only show if few messages or idle) */}
            {messages.length < 3 && !isTyping && (
                <div className="px-6 mb-2">
                    <p className="text-xs text-gray-400 mb-2 font-medium ml-2">Suggestions</p>
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                        {SUGGESTIONS.map((suggestion) => (
                            <button
                                key={suggestion}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="whitespace-nowrap px-4 py-2 bg-white text-health-deep-purple text-xs font-bold rounded-full border border-purple-50 shadow-sm hover:bg-purple-50 transition-colors"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input Area */}
            <div className="sticky bottom-[80px] p-4 bg-transparent backdrop-blur-sm">
                <div className="relative bg-white rounded-[24px] shadow-lg shadow-purple-50 p-2 flex items-center pr-2 border border-gray-100/50">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask anything..."
                        className="flex-1 bg-transparent border-none outline-none h-12 pl-4 text-sm text-gray-700 placeholder:text-gray-400"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={!input.trim()}
                        className="h-10 w-10 bg-[#7B61FF] rounded-full flex items-center justify-center transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-white shadow-md shadow-purple-200"
                    >
                        <Send className="h-4 w-4 ml-0.5" />
                    </button>
                </div>
            </div>

            <BottomNav />
        </div>
    )
}
