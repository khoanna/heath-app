"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"

const slides = [
  {
    type: "welcome",
    title: "Welcome & onboarding",
    description: "Just take a look and take action!",
    image: "/uit.png",
  },
  {
    type: "slide",
    title: "Keep calm and stay in control",
    description: "You can check your health with just one look.",
    image: "/onboard-1.png",
  },
  {
    type: "slide",
    title: "Don't miss a single pill, ever!",
    description: "Plan your supplementation in details.",
    image: "/onboard-2.png",
  },
  {
    type: "slide",
    title: "Exercise more & breathe better",
    description: "Learn, measure, set daily goals.",
    image: "/onboard-3.png",
  },
]

export default function OnboardingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const router = useRouter()

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      router.push("/auth/signup")
    }
  }

  const skip = () => {
    router.push("/auth/signup")
  }

  const slide = slides[currentSlide]

  return (
    <div className="min-h-screen flex flex-col p-6 bg-white overflow-hidden relative">
      {/* Top Bar */}
      <div className="w-full flex justify-end min-h-[40px] z-10">
        {slide.type !== "welcome" && (
          <Button 
            variant="ghost" 
            onClick={skip} 
            className="text-health-purple hover:text-health-purple/80 hover:bg-transparent px-4 py-2 h-auto text-base font-medium border border-health-purple rounded-full"
          >
            Skip intro
          </Button>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center -mt-10">
        
        {/* Image Area */}
        <div className="relative w-full max-w-[320px] aspect-square mb-8 flex items-center justify-center">
             <div className="relative w-2/3 h-full">
                <Image
                    src={slide.image!}
                    alt={slide.title}
                    fill
                    className="object-contain"
                    priority
                />
             </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4 max-w-sm px-4">
          <h1 className="text-3xl font-bold text-health-deep-purple leading-tight">
            {slide.title}
          </h1>
          <p className="text-health-muted text-lg">
            {slide.description}
          </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="w-full flex flex-col items-center pb-8 z-10 gap-8">
        {slide.type === "welcome" ? (
          <Button 
            className="w-full max-w-sm bg-health-purple hover:bg-health-purple/90 text-white rounded-2xl h-14 text-lg font-medium shadow-xl shadow-health-purple/20 transition-transform active:scale-95"
            onClick={nextSlide}
          >
            Let's start <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        ) : (
            <>
                 {/* Next Button */}
                <Button 
                    size="icon"
                    className="h-16 w-16 rounded-2xl bg-health-purple hover:bg-health-purple/90 text-white shadow-xl shadow-health-purple/30 transition-transform hover:scale-105 active:scale-95"
                    onClick={nextSlide}
                >
                    <ArrowRight className="h-8 w-8" />
                </Button>

                {/* Progress Indicators */}
                <div className="flex gap-3">
                    {slides.slice(1).map((_, index) => (
                        <div
                            key={index}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-500",
                                (index + 1) === currentSlide 
                                    ? "w-8 bg-health-deep-purple" 
                                    : "w-8 bg-gray-100" 
                            )}
                        />
                    ))}
                </div>
            </>
        )}
      </div>
    </div>
  )
}
