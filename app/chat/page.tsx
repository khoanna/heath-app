import Link from "next/link"
import { ChevronLeft, Send, Sparkles, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChatBubble } from "@/components/ChatBubble"
import { BottomNav } from "@/components/BottomNav"
import { Input } from "@/components/ui/input"

export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen bg-health-bg-start pb-20 relative">
      {/* Header */}
      <header className="px-6 pt-8 pb-4 flex items-center gap-4 bg-white/80 backdrop-blur-xl border-b border-black/5 sticky top-0 z-10">
        <Link href="/">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-health-lavender">
            <ChevronLeft className="h-5 w-5 text-health-text" />
          </Button>
        </Link>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-linear-to-tr from-health-purple to-health-deep-purple flex items-center justify-center text-white shadow-lg shadow-health-purple/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-base font-bold text-health-text">AI Coach</h1>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-xs text-health-muted font-medium">Online</p>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 pb-32">
        <div className="text-center text-[10px] font-medium text-health-muted uppercase tracking-wider my-4">Today, 9:41 AM</div>
        
        <ChatBubble message="Hello Jane! I noticed you slept well last night. How are you feeling today?" />
        <ChatBubble message="I'm feeling great, thanks! I want to focus on hydration today." isUser />
        <ChatBubble message="That's a wonderful goal! Based on your activity level, I recommend aiming for 2.5 liters. Would you like me to set some reminders for you?" />
        
        {/* Suggested Prompts */}
        <div className="flex flex-wrap gap-2 mt-8 justify-center">
          <button className="px-4 py-2 bg-white border border-health-purple/20 rounded-full text-xs font-medium text-health-purple hover:bg-health-purple/5 transition-colors shadow-sm">
            How much water should I drink?
          </button>
          <button className="px-4 py-2 bg-white border border-health-purple/20 rounded-full text-xs font-medium text-health-purple hover:bg-health-purple/5 transition-colors shadow-sm">
            Plan a 3-day workout
          </button>
          <button className="px-4 py-2 bg-white border border-health-purple/20 rounded-full text-xs font-medium text-health-purple hover:bg-health-purple/5 transition-colors shadow-sm">
            Healthy dinner ideas
          </button>
        </div>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-20 left-0 right-0 px-4 pb-4 pt-2 bg-linear-to-t from-health-bg-start via-health-bg-start to-transparent z-20 flex justify-center pointer-events-none">
        <div className="w-full max-w-105 flex gap-2 pointer-events-auto">
          <div className="flex-1 relative">
            <Input 
              placeholder="Ask anything..." 
              className="h-12 rounded-full border-none bg-white shadow-lg shadow-black/5 pl-5 pr-12 text-sm focus-visible:ring-1 focus-visible:ring-health-purple"
            />
            <Button size="icon" variant="ghost" className="absolute right-1 top-1 h-10 w-10 rounded-full text-health-muted hover:text-health-purple">
              <Mic className="h-5 w-5" />
            </Button>
          </div>
          <Button size="icon" className="h-12 w-12 rounded-full bg-linear-to-br from-health-purple to-health-deep-purple text-white shadow-lg shadow-health-deep-purple/20 hover:opacity-90">
            <Send className="h-5 w-5 ml-0.5" />
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
