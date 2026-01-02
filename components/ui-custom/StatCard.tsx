import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  children: React.ReactNode
  className?: string
  contentClassName?: string
  onClick?: () => void
}

export function StatCard({ children, className, contentClassName, onClick }: StatCardProps) {
  return (
    <Card 
      onClick={onClick}
      className={cn(
        "bg-white border-none shadow-sm shadow-black/5 rounded-[24px] overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
        onClick && "cursor-pointer active:scale-[0.98]",
        className
      )}
    >
      <CardContent className={cn("p-5", contentClassName)}>
        {children}
      </CardContent>
    </Card>
  )
}
