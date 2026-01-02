import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  action?: React.ReactNode
  className?: string
}

export function SectionHeader({ title, action, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex justify-between items-center mb-3 px-1", className)}>
      <h3 className="text-sm font-medium uppercase tracking-wide text-health-muted">
        {title}
      </h3>
      {action}
    </div>
  )
}
