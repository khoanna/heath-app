import { cn } from "@/lib/utils"

interface MiniChartProps {
  data: number[]
  color?: string
  height?: number
  className?: string
}

export function MiniChart({ data, color = "bg-white/50", height = 40, className }: MiniChartProps) {
  const max = Math.max(...data)

  return (
    <div className={cn("flex items-end gap-1", className)} style={{ height }}>
      {data.map((value, i) => (
        <div
          key={i}
          className={cn("flex-1 rounded-t-sm transition-all duration-500", color)}
          style={{
            height: `${(value / max) * 100}%`,
            opacity: 0.5 + (value / max) * 0.5
          }}
        />
      ))}
    </div>
  )
}
