import Link from "next/link"
import { ChevronLeft, FileText, ArrowRight, Target, Zap, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BottomNav } from "@/components/BottomNav"

const PLANS = [
  {
    id: 1,
    title: "Weight Loss Journey",
    description: "A balanced approach to losing 5kg in 4 weeks through cardio and diet.",
    icon: Target,
    color: "text-health-purple",
    bgColor: "bg-health-purple/10",
    progress: 35,
    duration: "4 weeks",
    level: "Intermediate"
  },
  {
    id: 2,
    title: "Muscle Builder",
    description: "Hypertrophy focused strength training to build lean muscle mass.",
    icon: Zap,
    color: "text-health-blue",
    bgColor: "bg-health-blue/10",
    progress: 12,
    duration: "8 weeks",
    level: "Advanced"
  },
  {
    id: 3,
    title: "Mindfulness & Yoga",
    description: "Daily meditation and stretching routines for mental clarity.",
    icon: Leaf,
    color: "text-health-pink",
    bgColor: "bg-health-pink/10",
    progress: 60,
    duration: "Ongoing",
    level: "Beginner"
  }
]

export default function PlansPage() {
  return (
    <div className="pb-24 min-h-screen bg-health-bg-start">
      <header className="px-6 pt-8 pb-4 flex items-center gap-4 relative z-10">
        <Link href="/">
          <Button variant="ghost" size="icon" className="rounded-full bg-white/50 hover:bg-white">
            <ChevronLeft className="h-5 w-5 text-health-text" />
          </Button>
        </Link>
        <h1 className="text-xl font-semibold text-health-text">Health Plans</h1>
      </header>

      <div className="px-6 space-y-4">
        {PLANS.map((plan) => {
          const Icon = plan.icon
          return (
            <Card key={plan.id} className="border-none shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-all">
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div className={`p-3 rounded-xl ${plan.bgColor}`}>
                    <Icon className={`h-6 w-6 ${plan.color}`} />
                  </div>
                  <Badge variant="secondary" className="bg-health-bg-start text-health-muted font-normal">
                    {plan.level}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold text-health-text mb-1">{plan.title}</h3>
                <p className="text-sm text-health-muted mb-4 leading-relaxed">
                  {plan.description}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-health-text">Progress</span>
                    <span className="text-health-muted">{plan.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-health-bg-start rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${plan.color.replace('text-', 'bg-')}`} 
                      style={{ width: `${plan.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                  <span className="text-xs text-health-muted font-medium">{plan.duration}</span>
                  <div className="flex items-center text-xs font-bold text-health-deep-purple group-hover:translate-x-1 transition-transform">
                    Continue <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}

        <Button variant="outline" className="w-full rounded-full border-dashed border-2 h-14 text-health-muted hover:text-health-purple hover:border-health-purple/50 hover:bg-health-purple/5">
          <PlusIcon className="h-5 w-5 mr-2" />
          Browse New Plans
        </Button>
      </div>

      <BottomNav />
    </div>
  )
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  )
}
