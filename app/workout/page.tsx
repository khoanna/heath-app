"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Play, Clock, Flame, Dumbbell, CheckCircle2, Filter, ChevronRight, Pause, SkipForward, SkipBack } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BottomNav } from "@/components/BottomNav"
import { StatCard } from "@/components/ui-custom/StatCard"
import { SectionHeader } from "@/components/ui-custom/SectionHeader"
import { cn } from "@/lib/utils"

// --- Mock Data ---

const EXERCISES = [
  {
    id: "ex1",
    name: "Push Ups",
    muscleGroup: "Upper Body",
    duration: "3 sets x 12 reps",
    difficulty: "Medium",
    image: "https://www.muscletech.in/wp-content/uploads/2025/01/push-up-exercises.webp",
    videoUrl: "https://www.muscletech.in/wp-content/uploads/2025/01/push-up-exercises.webp", // Placeholder
    steps: [
      "Start in a plank position with hands shoulder-width apart.",
      "Lower your body until your chest nearly touches the floor.",
      "Push yourself back up to the starting position.",
      "Keep your core tight throughout the movement."
    ],
    tips: ["Don't let your hips sag.", "Keep your elbows at a 45-degree angle."]
  },
  {
    id: "ex2",
    name: "Squats",
    muscleGroup: "Lower Body",
    duration: "3 sets x 15 reps",
    difficulty: "Easy",
    image: "https://hips.hearstapps.com/hmg-prod/images/man-doing-gym-front-squat-royalty-free-image-1649261343.jpg?crop=0.670xw:1.00xh;0.250xw,0&resize=1200:*",
    steps: [
      "Stand with feet shoulder-width apart.",
      "Lower your hips back and down as if sitting in a chair.",
      "Keep your chest up and back straight.",
      "Push through your heels to return to standing."
    ],
    tips: ["Keep knees behind toes.", "Inhale down, exhale up."]
  },
  {
    id: "ex3",
    name: "Plank",
    muscleGroup: "Core",
    duration: "3 sets x 45 sec",
    difficulty: "Hard",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBfGIOrvjPzG2I1-IIsgINtusCcCSaEIvOzA&s",
    steps: [
      "Start on your forearms and toes.",
      "Keep your body in a straight line from head to heels.",
      "Engage your core and glutes.",
      "Hold the position without letting hips drop."
    ],
    tips: ["Breathe steadily.", "Don't look up, keep neck neutral."]
  },
  {
    id: "ex4",
    name: "Lunges",
    muscleGroup: "Lower Body",
    duration: "3 sets x 12 reps/leg",
    difficulty: "Medium",
    image: "https://hips.hearstapps.com/hmg-prod/images/walking-lunges-667e8add0acad.jpg?crop=0.599xw:0.899xh;0.324xw,0.0791xh&resize=1200:*",
    steps: [
      "Step forward with one leg.",
      "Lower your hips until both knees are bent at 90 degrees.",
      "Push back to the starting position.",
      "Repeat with the other leg."
    ],
    tips: ["Keep torso upright.", "Don't let front knee pass toes."]
  }
]

const TODAY_PLAN = [
  { id: "ex1", done: true },
  { id: "ex2", done: false },
  { id: "ex3", done: false },
]

export default function WorkoutPage() {
  const [activeTab, setActiveTab] = useState("today")
  const [selectedExerciseId, setSelectedExerciseId] = useState<string | null>(null)
  const [todayProgress, setTodayProgress] = useState(TODAY_PLAN)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleDone = (id: string) => {
    setTodayProgress(prev => 
      prev.map(item => item.id === id ? { ...item, done: !item.done } : item)
    )
  }

  const completedCount = todayProgress.filter(p => p.done).length
  const totalCount = todayProgress.length
  const progressPercent = (completedCount / totalCount) * 100

  const selectedExercise = selectedExerciseId ? EXERCISES.find(e => e.id === selectedExerciseId) : null

  return (
    <div className="pb-24 min-h-screen bg-health-bg-start">
      <header className="px-6 pt-8 pb-4 flex items-center gap-4 relative z-10">
        {selectedExerciseId ? (
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white/50 hover:bg-white"
            onClick={() => setSelectedExerciseId(null)}
          >
            <ChevronLeft className="h-5 w-5 text-health-text" />
          </Button>
        ) : (
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full bg-white/50 hover:bg-white">
              <ChevronLeft className="h-5 w-5 text-health-text" />
            </Button>
          </Link>
        )}
        <h1 className="text-xl font-semibold text-health-text">
          {selectedExerciseId && selectedExercise ? selectedExercise.name : "Workout"}
        </h1>
      </header>

      {selectedExerciseId && selectedExercise ? (
        <div className="px-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Video Player */}
          <div className="rounded-4xl overflow-hidden bg-black relative aspect-4/5 shadow-2xl shadow-health-purple/20">
            <img src={selectedExercise.image} className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 bg-linear-to-b from-black/30 via-transparent to-black/80">
              <div className="flex justify-between items-start">
                <Badge className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-none">{selectedExercise.difficulty}</Badge>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedExercise.name}</h2>
                <p className="text-white/80 text-sm mb-6">{selectedExercise.muscleGroup} • {selectedExercise.duration}</p>
                
                <div className="flex items-center justify-center gap-6">
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 rounded-full h-12 w-12">
                    <SkipBack className="h-6 w-6" />
                  </Button>
                  <Button 
                    size="icon" 
                    className="h-16 w-16 rounded-full bg-health-purple hover:bg-health-deep-purple text-white shadow-lg shadow-health-purple/40 scale-100 active:scale-95 transition-all"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="h-8 w-8 fill-current" /> : <Play className="h-8 w-8 fill-current ml-1" />}
                  </Button>
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 rounded-full h-12 w-12">
                    <SkipForward className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-4">
            <SectionHeader title="Instructions" />
            <StatCard>
              <ol className="space-y-4 relative border-l border-health-muted/20 ml-2">
                {selectedExercise.steps.map((step, i) => (
                  <li key={i} className="pl-6 relative">
                    <span className="absolute -left-1.25 top-1.5 h-2.5 w-2.5 rounded-full bg-health-purple ring-4 ring-white" />
                    <p className="text-sm text-health-text leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </StatCard>
          </div>

          {/* Tips */}
          <div className="space-y-2">
            <SectionHeader title="Pro Tips" />
            <div className="grid gap-2">
              {selectedExercise.tips.map((tip, i) => (
                <div key={i} className="bg-health-blue/10 p-3 rounded-xl flex gap-3 items-start">
                  <CheckCircle2 className="h-4 w-4 text-health-blue mt-0.5 shrink-0" />
                  <p className="text-xs text-health-text font-medium">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Tabs defaultValue="today" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="px-6 mb-6">
            <TabsList className="w-full bg-white p-1 h-12 rounded-full shadow-sm">
              <TabsTrigger value="today" className="rounded-full flex-1 text-xs font-medium data-[state=active]:bg-linear-to-r data-[state=active]:from-health-purple data-[state=active]:to-health-deep-purple data-[state=active]:text-white">Today</TabsTrigger>
              <TabsTrigger value="exercises" className="rounded-full flex-1 text-xs font-medium data-[state=active]:bg-linear-to-r data-[state=active]:from-health-purple data-[state=active]:to-health-deep-purple data-[state=active]:text-white">Exercises</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="today" className="px-6 space-y-6 mt-0">
            {/* Progress Summary */}
            <StatCard className="bg-linear-to-br from-health-purple to-health-deep-purple text-white">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-lg font-bold">Daily Goal</h2>
                  <p className="text-xs text-white/70">{completedCount} of {totalCount} exercises completed</p>
                </div>
                <div className="h-12 w-12 relative flex items-center justify-center">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                    <path className="text-white/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                    <path className="text-health-purple" strokeDasharray={`${progressPercent}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  <span className="absolute text-xs font-bold">{Math.round(progressPercent)}%</span>
                </div>
              </div>
              <Button className="w-full bg-white text-health-deep-purple hover:bg-white/90 rounded-xl font-semibold">
                Start Workout
              </Button>
            </StatCard>

            <div className="space-y-3">
              <SectionHeader title="Today's Routine" />
              {todayProgress.map((item) => {
                const exercise = EXERCISES.find(e => e.id === item.id)
                if (!exercise) return null
                return (
                  <StatCard 
                    key={item.id} 
                    className={cn("transition-all cursor-pointer", item.done ? "opacity-60" : "")} 
                    contentClassName="p-4 flex items-center gap-4"
                    onClick={() => setSelectedExerciseId(item.id)}
                  >
                    <div className="h-16 w-16 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                      <img src={exercise.image} alt={exercise.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className={cn("font-semibold text-health-text", item.done && "line-through")}>{exercise.name}</h3>
                        <Badge variant="secondary" className="text-[10px] h-5 px-1.5 bg-health-bg-start text-health-muted">{exercise.difficulty}</Badge>
                      </div>
                      <p className="text-xs text-health-muted mt-1">{exercise.duration}</p>
                    </div>
                    <Checkbox 
                      checked={item.done} 
                      onCheckedChange={() => toggleDone(item.id)}
                      onClick={(e) => e.stopPropagation()}
                      className="h-6 w-6 rounded-full border-2 border-health-muted data-[state=checked]:bg-health-purple data-[state=checked]:border-health-purple"
                    />
                  </StatCard>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="exercises" className="px-6 space-y-4 mt-0">
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {["All", "Upper Body", "Lower Body", "Core", "Cardio", "Yoga", "Pilates"].map((filter, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 border",
                    i === 0 
                      ? "bg-health-text text-white border-transparent" 
                      : "bg-transparent border-health-muted/30 text-health-muted hover:border-health-text hover:text-health-text"
                  )}
                >
                  {filter}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {EXERCISES.map((exercise) => (
                <StatCard 
                  key={exercise.id} 
                  className="group cursor-pointer"
                  onClick={() => setSelectedExerciseId(exercise.id)}
                  contentClassName="p-3"
                >
                  <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-3 relative">
                    <img src={exercise.image} alt={exercise.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="h-8 w-8 text-white fill-current" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm text-health-text truncate">{exercise.name}</h3>
                  <p className="text-[10px] text-health-muted">{exercise.muscleGroup}</p>
                </StatCard>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      )}

      <BottomNav />
    </div>
  )
}
