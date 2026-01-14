"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  
  return (
    <div className="min-h-screen bg-white p-6 pt-8 flex flex-col font-sans">
       {/* Removed 'Login' header text to match design white space above 'Welcome back' better or keep it minimal */}
       <div className="flex items-center mb-8 h-10 invisible"> 
            {/* Placeholder for spacing if needed, or just remove */}
       </div>

       <div className="flex-1 max-w-sm mx-auto w-full flex flex-col justify-center pb-20">
            <h1 className="text-3xl font-bold text-health-deep-purple mb-10 text-center">
                Welcome back
            </h1>

            <div className="space-y-6">
                 <div className="space-y-5">
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-400 pl-1">E-mail</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <Input 
                                type="email" 
                                placeholder="Enter your e-mail here" 
                                className="pl-10 h-12 bg-[#F7F8F8] border-none rounded-2xl text-base placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-health-purple"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-400 pl-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <Input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="Place the password here" 
                                className="pl-10 h-12 bg-[#F7F8F8] border-none rounded-2xl pr-10 text-base placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-health-purple"
                            />
                            <button 
                                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
                            </button>
                        </div>
                    </div>
                 </div>

                 <div className="flex justify-center">
                    <Link href="#" className="text-xs font-semibold text-[#6B7280] hover:text-health-purple">
                        Forgot your password?
                    </Link>
                 </div>

                 <Button 
                    className="w-full bg-health-purple hover:bg-health-purple/90 rounded-2xl h-14 shadow-lg shadow-health-purple/20 mt-4 text-base font-semibold"
                    asChild
                 >
                    <Link href="/">
                     Log in <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>

                <div className="relative py-6">
                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100"></span></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-gray-400">Or</span></div>
                </div>

                <div className="flex justify-center gap-4">
                  <Button variant="outline" className="h-12 w-12 rounded-xl border-gray-100 p-0 hover:bg-gray-50 flex items-center justify-center">
                       {/* Google Icon Proxy */}
                       <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#EA4335" d="M24 12.276c0-.816-.073-1.641-.212-2.455H12.273v4.615h6.635c-.287 1.549-1.155 2.903-2.474 3.791v3.134h3.978c2.327-2.143 3.668-5.302 3.668-8.966z" />
                          <path fill="#34A853" d="M12.273 24c3.218 0 5.923-1.077 7.895-2.915l-3.978-3.134c-1.077.728-2.455 1.158-3.917 1.158-3.058 0-5.636-2.072-6.558-4.868H1.67v3.057C3.665 21.295 7.694 24 12.273 24z" />
                          <path fill="#4A90E2" d="M5.715 14.122c-.227-.69-.356-1.424-.356-2.181s.129-1.491.356-2.181V6.703H1.67C.607 8.828 0 11.231 0 13.941c0 2.71.607 5.113 1.67 7.239l4.045-3.057z" />
                          <path fill="#FBBC05" d="M12.273 4.773c1.71 0 3.255.6 4.473 1.745l3.297-3.297C17.923 1.346 15.291 0 12.273 0 7.694 0 3.665 2.705 1.67 6.703l4.045 3.057c.922-2.796 3.5-4.868 6.558-4.868z" />
                      </svg>
                  </Button>
                  <Button variant="outline" className="h-12 w-12 rounded-xl border-gray-100 p-0 hover:bg-gray-50 flex items-center justify-center">
                      {/* Facebook Icon Proxy */}
                      <svg className="w-5 h-5 text-blue-600 fill-current" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                  </Button>
                </div>

                <div className="text-center text-xs mt-8">
                    <span className="text-gray-500">Don't have an account yet? </span>
                    <Link href="/auth/signup" className="text-health-purple font-semibold hover:underline">Sign up</Link>
                </div>
            </div>
       </div>
    </div>
  )
}
