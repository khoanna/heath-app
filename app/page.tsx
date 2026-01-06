import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BottomNav } from "@/components/BottomNav"
import { Moon, Droplets, Scale, Pill, ChevronRight, Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MEALS, ARTICLES } from "@/lib/data"

export default function Dashboard() {
  return (
    <div className="pb-28 relative overflow-hidden min-h-screen bg-[#F8F9FE]">
      {/* Header */}
      <header className="px-6 pt-10 pb-6 flex justify-between items-center bg-white sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 border border-gray-100">
            <AvatarFallback className="bg-purple-100">
               <User className="h-6 w-6 text-purple-600" />
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-1">
                <h1 className="text-xl font-bold text-health-deep-purple">Hi, Hoan</h1>
                <span className="text-xl">👋</span>
            </div>
            <p className="text-sm text-gray-500">Tuesday, 26 November</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-6 pt-4 space-y-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
            {/* Sleep */}
            <Link href="/sleep" className="bg-white p-4 rounded-[24px] flex flex-col justify-between shadow-sm border border-gray-50 hover:shadow-md transition-shadow h-full">
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-[#E2E6FF] flex items-center justify-center">
                             <Moon className="h-4 w-4 text-[#5C59E8]" />
                        </div>
                    </div>
                    <div>
                         <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Sleep</p>
                         <p className="text-xl font-bold text-health-deep-purple">7h 45m</p>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-blue-500">
                    See Detail <ChevronRight className="h-3 w-3" />
                </div>
            </Link>

            {/* Water */}
            <Link href="/water" className="bg-white p-4 rounded-[24px] flex flex-col justify-between shadow-sm border border-gray-50 hover:shadow-md transition-shadow h-full">
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                         <div className="h-8 w-8 rounded-full bg-[#D9EFFF] flex items-center justify-center">
                            <Droplets className="h-4 w-4 text-[#2B8FF4]" />
                        </div>
                    </div>
                    <div>
                         <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Water</p>
                         <p className="text-xl font-bold text-health-deep-purple">6 / 10 <span className="text-sm font-normal text-gray-400">glasses</span></p>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-blue-500">
                    See Detail <ChevronRight className="h-3 w-3" />
                </div>
            </Link>
            
            {/* Weight */}
            <Link href="/weight" className="bg-white p-4 rounded-[24px] flex flex-col justify-between shadow-sm border border-gray-50 hover:shadow-md transition-shadow h-full">
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-[#F6DDFE] flex items-center justify-center">
                            <Scale className="h-4 w-4 text-[#C45EE6]" />
                        </div>
                    </div>
                    <div>
                         <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Weight</p>
                         <p className="text-xl font-bold text-health-deep-purple">68.5 <span className="text-sm font-normal text-gray-400">kg</span></p>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-blue-500">
                    See Detail <ChevronRight className="h-3 w-3" />
                </div>
            </Link>

            {/* Medication */}
            <Link href="/medications" className="bg-white p-4 rounded-[24px] flex flex-col justify-between shadow-sm border border-gray-50 hover:shadow-md transition-shadow h-full">
                 <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-[#FFD9EA] flex items-center justify-center">
                            <Pill className="h-4 w-4 text-[#EB4D88]" />
                        </div>
                    </div>
                    <div>
                         <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Medication</p>
                         <p className="text-xl font-bold text-health-deep-purple">2 of 4</p>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-blue-500">
                    See Detail <ChevronRight className="h-3 w-3" />
                </div>
            </Link>
        </div>

        {/* Health News */}
        <section className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-health-deep-purple flex items-center gap-2">
                    Health News 
                </h2>
                <Link href="/news" className="text-blue-500 text-sm font-semibold flex items-center">
                    View All <ChevronRight className="h-4 w-4" />
                </Link>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6">
                {ARTICLES.slice(0, 3).map((article) => (
                    <Link href={`/news/${article.id}`} key={article.id} className="min-w-[260px] bg-white rounded-3xl p-3 shadow-sm border border-gray-50 block active:scale-95 transition-transform">
                        <div className="relative h-32 w-full rounded-2xl overflow-hidden mb-3">
                            <Image 
                                src={article.image} 
                                alt={article.title} 
                                fill 
                                className="object-cover"
                            />
                            <div className="absolute top-2 left-2 bg-[#00CFAE] text-white text-[10px] font-bold px-2 py-1 rounded-full">
                                {article.category}
                            </div>
                        </div>
                        <div className="px-1 space-y-2">
                            <div className="flex items-center gap-1 text-[10px] text-gray-400">
                                <Clock className="h-3 w-3" />
                                <span>{article.timeAgo}</span>
                            </div>
                            <h3 className="font-bold text-health-deep-purple leading-tight line-clamp-2 min-h-[2.5rem]">{article.title}</h3>
                            <p className="text-xs text-gray-400">{article.role}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>

        {/* Recommended Meals */}
        <section className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-health-deep-purple flex items-center gap-2">
                    Meals 
                </h2>
                 <Link href="/food" className="text-blue-500 text-sm font-semibold flex items-center">
                    View All <ChevronRight className="h-4 w-4" />
                </Link>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6">
                {MEALS.slice(0, 3).map((meal) => (
                    <Link href={`/food/${meal.id}`} key={meal.id} className="min-w-[280px] bg-white rounded-[24px] p-4 flex gap-4 items-center shadow-sm border border-gray-50 active:scale-95 transition-transform">
                        <div className="relative h-20 w-20 rounded-full overflow-hidden shrink-0 bg-gray-100">
                            <Image 
                                src={meal.image} 
                                alt={meal.title} 
                                fill 
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-1 flex-1">
                            <h3 className="font-bold text-health-deep-purple text-sm line-clamp-1">{meal.title}</h3>
                            <p className="text-[10px] text-gray-400 line-clamp-1">{meal.description}</p>
                            <div className="flex justify-between items-center pt-1">
                                <span className="text-[#FF876C] font-bold text-xs">{meal.calories} <span className="font-normal text-[10px]">cal</span></span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>

      </div>

      <BottomNav />
    </div>
  )
}
