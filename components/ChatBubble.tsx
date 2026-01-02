import { cn } from "@/lib/utils"

interface ChatBubbleProps {
  message: string
  isUser?: boolean
  timestamp?: string
}

export function ChatBubble({ message, isUser = false, timestamp }: ChatBubbleProps) {
  return (
    <div className={cn("flex w-full mb-4", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] px-5 py-3 rounded-2xl text-sm leading-relaxed shadow-sm",
          isUser
            ? "bg-health-purple text-white rounded-br-none"
            : "bg-white text-health-text rounded-bl-none border border-border"
        )}
      >
        {message}
      </div>
    </div>
  )
}
