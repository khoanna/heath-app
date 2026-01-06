"use client"

import { ChevronRight, Settings, Bell, Shield, CircleHelp, LogOut, Target, User, ChevronLeft } from "lucide-react"
import Link from "next/link"
import React from "react"
import { BottomNav } from "@/components/BottomNav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-[#F8F9FE] pb-28 font-sans max-w-[420px] mx-auto">
            {/* Header */}
            <header className="px-6 pt-10 pb-6 flex items-center gap-4 bg-white sticky top-0 z-10">
                <h1 className="text-xl font-bold text-health-deep-purple flex-1 text-center pr-0">My Profile</h1>
            </header>

            <div className="px-6 space-y-6 pt-6">
                
                {/* User Card */}
                <div className="bg-white rounded-[32px] p-6 text-center shadow-sm border border-gray-50">
                    <div className="relative inline-block mb-4">
                        <Avatar className="h-24 w-24 border-4 border-white shadow-lg mx-auto">
                            <AvatarFallback className="bg-purple-100">
                                <User className="h-10 w-10 text-purple-600" />
                            </AvatarFallback>
                        </Avatar>
                        <div className="absolute bottom-1 right-1 h-6 w-6 bg-green-400 border-4 border-white rounded-full"></div>
                    </div>
                    <h2 className="text-xl font-bold text-health-deep-purple mb-1">Hoan Nguyen</h2>
                    <p className="text-sm text-gray-400">hoan.nguyen@example.com</p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-[24px] text-center shadow-sm border border-gray-50">
                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Age</p>
                        <p className="text-lg font-bold text-health-deep-purple">26</p>
                    </div>
                    <div className="bg-white p-4 rounded-[24px] text-center shadow-sm border border-gray-50">
                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Weight</p>
                        <p className="text-lg font-bold text-health-deep-purple">68kg</p>
                    </div>
                    <div className="bg-white p-4 rounded-[24px] text-center shadow-sm border border-gray-50">
                         <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Height</p>
                        <p className="text-lg font-bold text-health-deep-purple">175cm</p>
                    </div>
                </div>

                {/* Settings Menu */}
                <div className="bg-white rounded-[32px] p-2 shadow-sm border border-gray-50 overflow-hidden">
                    
                    {/* Account */}
                    <Link href="#" className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-[20px] transition-colors group">
                        <div className="h-10 w-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                            <User className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-health-deep-purple text-sm">Account Settings</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-300" />
                    </Link>

                    {/* Goals */}
                    <Link href="#" className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-[20px] transition-colors group">
                        <div className="h-10 w-10 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                            <Target className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-health-deep-purple text-sm">My Goals</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-300" />
                    </Link>

                    {/* Notifications Toggle */}
                    <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-[20px] transition-colors group">
                        <div className="h-10 w-10 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                            <Bell className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-health-deep-purple text-sm">Notifications</p>
                        </div>
                        <Switch id="notif-toggle" />
                    </div>

                    {/* Privacy */}
                    <Link href="#" className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-[20px] transition-colors group">
                         <div className="h-10 w-10 bg-green-50 text-green-500 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                            <Shield className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-health-deep-purple text-sm">Privacy & Security</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-300" />
                    </Link>

                     {/* Help */}
                     <Link href="#" className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-[20px] transition-colors group">
                         <div className="h-10 w-10 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                            <CircleHelp className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-health-deep-purple text-sm">Help & Support</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-300" />
                    </Link>
                </div>

                {/* Logout */}
                <button className="w-full bg-[#FF4D4D] text-white py-4 rounded-[24px] font-bold shadow-lg shadow-red-100 flex items-center justify-center gap-2 hover:bg-[#ff3333] transition-colors mb-6">
                    <LogOut className="h-5 w-5" /> Log Out
                </button>

            </div>
            <BottomNav />
        </div>
    )
}
