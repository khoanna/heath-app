"use client"

import { Utensils, Plus } from "lucide-react"
import { StatCard } from "@/components/ui-custom/StatCard"
import { SectionHeader } from "@/components/ui-custom/SectionHeader"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export function FoodCard() {
  return (
    <div className="space-y-2">
      <SectionHeader title="Nutrition" />
      <StatCard contentClassName="p-0">
        <Tabs defaultValue="breakfast" className="w-full">
          <div className="px-4 pt-4">
            <TabsList className="w-full bg-health-bg-start rounded-full p-1 h-10">
              <TabsTrigger value="breakfast" className="rounded-full text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm">Breakfast</TabsTrigger>
              <TabsTrigger value="lunch" className="rounded-full text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm">Lunch</TabsTrigger>
              <TabsTrigger value="dinner" className="rounded-full text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm">Dinner</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="breakfast" className="p-4 space-y-3 mt-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <span className="text-lg">🥣</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-health-text">Oatmeal & Berries</p>
                  <p className="text-xs text-health-muted">320 kcal</p>
                </div>
              </div>
              <span className="text-xs font-medium text-health-muted">08:30 AM</span>
            </div>
            <Button variant="ghost" className="w-full h-9 text-xs text-health-purple hover:text-health-deep-purple hover:bg-health-purple/5 border border-dashed border-health-purple/20 rounded-xl">
              <Plus className="h-3.5 w-3.5 mr-1.5" /> Add Food
            </Button>
          </TabsContent>
          
          <TabsContent value="lunch" className="p-4 space-y-3 mt-0">
             <div className="flex flex-col items-center justify-center py-4 text-center">
                <p className="text-sm text-health-muted mb-2">No lunch logged yet</p>
                <Button size="sm" className="rounded-full bg-health-text text-white h-8 text-xs">
                  Log Lunch
                </Button>
             </div>
          </TabsContent>

          <TabsContent value="dinner" className="p-4 space-y-3 mt-0">
             <div className="flex flex-col items-center justify-center py-4 text-center">
                <p className="text-sm text-health-muted mb-2">No dinner logged yet</p>
                <Button size="sm" className="rounded-full bg-health-text text-white h-8 text-xs">
                  Log Dinner
                </Button>
             </div>
          </TabsContent>
        </Tabs>
      </StatCard>
    </div>
  )
}
