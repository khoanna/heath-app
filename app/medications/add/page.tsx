"use client"

import { ChevronLeft, Clock, Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { cn } from "@/lib/utils"

const colors = [
    { id: 'blue', bg: 'bg-[#D9F4FF]', dot: 'bg-blue-500' },
    { id: 'green', bg: 'bg-[#D6FBE5]', dot: 'bg-green-500' },
    { id: 'yellow', bg: 'bg-[#FFF5D2]', dot: 'bg-yellow-500' },
    { id: 'purple', bg: 'bg-[#F3E5F5]', dot: 'bg-purple-500' },
    { id: 'pink', bg: 'bg-[#FFD9EA]', dot: 'bg-pink-500' },
]

export default function AddMedicationPage() {
    const [selectedColor, setSelectedColor] = useState(colors[0])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [dosage, setDosage] = useState("")

    return (
        <div className="min-h-screen bg-[#F8F5FC] p-6 pb-24 font-sans max-w-[420px] mx-auto">
             {/* Header */}
            <div className="flex items-center mb-8 relative">
                <Link href="/medications" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm z-10">
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                </Link>
                <h1 className="text-lg font-bold text-health-deep-purple absolute w-full text-center left-0 top-2">
                    Add Medication
                </h1>
            </div>

            <div className="space-y-5">
                {/* Medication Name */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-health-deep-purple">Medication Name</label>
                    <Input 
                        placeholder="e.g., Aspirin" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-white border-0 h-12 rounded-[16px] px-4 shadow-sm text-base placeholder:text-gray-400"
                    />
                </div>

                {/* Description */}
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-health-deep-purple">Description</label>
                    <Input 
                        placeholder="e.g., Anti-Inflammatory" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="bg-white border-0 h-12 rounded-[16px] px-4 shadow-sm text-base placeholder:text-gray-400"
                    />
                </div>

                {/* Dosage */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-health-deep-purple">Dosage</label>
                    <Input 
                        placeholder="e.g., 400mg" 
                        value={dosage}
                        onChange={(e) => setDosage(e.target.value)}
                        className="bg-white border-0 h-12 rounded-[16px] px-4 shadow-sm text-base placeholder:text-gray-400"
                    />
                </div>

                {/* Card Color */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-health-deep-purple">Card Color</label>
                    <div className="flex justify-between gap-2">
                        {colors.map((c) => (
                            <button
                                key={c.id}
                                onClick={() => setSelectedColor(c)}
                                className={cn(
                                    "h-12 w-12 rounded-[14px] transition-all",
                                    c.bg,
                                    selectedColor.id === c.id ? "ring-2 ring-offset-2 ring-[#FF2D6C]" : ""
                                )}
                            />
                        ))}
                    </div>
                </div>

                {/* Reminder Times */}
                <div className="space-y-2">
                     <div className="flex justify-between items-center">
                        <label className="text-sm font-medium text-health-deep-purple">Reminder Times</label>
                        <button className="bg-[#FF2D6C] text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
                            <Plus className="h-3 w-3" /> Add Time
                        </button>
                     </div>
                     <div className="bg-white h-12 rounded-[16px] px-4 shadow-sm flex items-center text-gray-400">
                        <Clock className="h-4 w-4 mr-2" />
                     </div>
                </div>

                {/* Preview */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-health-deep-purple">Preview</label>
                    <div className={cn("rounded-[24px] p-5 transition-colors", selectedColor.bg)}>
                        <div className="flex gap-4 mb-3">
                            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shrink-0">
                                <div className={cn("h-4 w-4 rounded-full", selectedColor.dot)} />
                            </div>
                            <div>
                                <h4 className="font-bold text-health-deep-purple text-lg">{name || "Medication Name"}</h4>
                                <p className="text-xs text-gray-500 mb-2">{description || "Description"}</p>
                                <span className="bg-white/60 px-3 py-1 rounded-[10px] text-xs font-medium text-gray-600">
                                    {dosage || "Dosage"}
                                </span>
                            </div>
                        </div>
                        <div className="bg-white/40 rounded-[18px] py-3 flex items-center justify-center gap-2 w-1/2">
                             <Clock className="h-4 w-4 text-gray-500" />
                             <span className="text-sm font-semibold text-gray-600">8:00 AM</span>
                        </div>
                    </div>
                </div>

                <Button className="w-full h-14 bg-[#FF2D6C] hover:bg-[#E61E5C] text-white rounded-[20px] text-lg font-medium shadow-lg shadow-pink-200 mt-4">
                    Save Medication
                </Button>
            </div>
        </div>
    )
}
