"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, Lock, Eye, EyeOff, Check, X, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function SignUpPage() {
  const [step, setStep] = useState(1) // 1: Account, 2: Details, 3: Success
  const [showPassword, setShowPassword] = useState(false)
  const [selectedGender, setSelectedGender] = useState<'male' | 'female'>('male')
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    height: 180,
    weight: 80,
    agreed: false
  })

  // Password Validation
  const hasMinLength = formData.password.length >= 8
  const hasCase = /[a-z]/.test(formData.password) && /[A-Z]/.test(formData.password)
  const hasNumber = /[0-9]/.test(formData.password) || /[^a-zA-Z0-9]/.test(formData.password)
  
  // Criteria checks for UI
  const criteria = [
    { label: "At least 8 characters", met: hasMinLength },
    { label: "Both uppercase and lowercase characters", met: hasCase },
    { label: "At least one number or symbol", met: hasNumber },
  ]

  const isPasswordValid = hasMinLength && hasCase && hasNumber
  const canProceedToDetails = formData.name && formData.email && isPasswordValid && formData.agreed

  const handleSubmit = () => {
    if (step === 1 && canProceedToDetails) {
      setStep(2)
    } else if (step === 2) {
      setStep(3)
    }
  }

  if (step === 3) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center space-y-8">
        <div className="relative w-64 h-64 mx-auto mb-4">
            {/* Using a placeholder or similar image for success if available, otherwise just use one of the onboards */}
             <div className="absolute inset-0 flex items-center justify-center bg-blue-50/50 rounded-full">
                <Image 
                    src="/onboard-3.png" 
                    alt="Success" 
                    width={200} 
                    height={200}
                    className="object-contain"
                />
             </div>
        </div>
        <div>
            <h1 className="text-2xl font-bold text-health-deep-purple mb-2">You are Successfully<br/>Registered !!!!!</h1>
        </div>
        <Button className="w-full max-w-sm bg-health-purple hover:bg-health-purple/90 rounded-full h-12 text-base font-medium" asChild>
            <Link href="/">Move to home <ArrowRight className="ml-2 h-4 w-4"/></Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white p-6 pt-8 flex flex-col font-sans">
      {/* Header */}
      <div className="flex items-center mb-6">
        {step === 2 && (
             <Button variant="ghost" size="icon" onClick={() => setStep(1)} className="-ml-2 hover:bg-transparent">
                <ArrowLeft className="h-6 w-6 text-health-text" />
             </Button>
        )}
      </div>

      <div className="flex-1 max-w-sm mx-auto w-full flex flex-col">
        <h1 className="text-3xl font-bold text-health-deep-purple mb-8">
            {step === 1 ? "Create an account" : "Give us some basis information"}
        </h1>

        {step === 1 ? (
            /* STEP 1: ACCOUNT DETAILS */
            <div className="space-y-5 flex-1 pb-8">
                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-400 pl-1">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <Input 
                                placeholder="Enter your name" 
                                className="pl-10 h-12 bg-[#F7F8F8] border-none rounded-2xl text-base placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-health-purple"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-400 pl-1">E-mail</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <Input 
                                type="email" 
                                placeholder="Enter your e-mail here" 
                                className="pl-10 h-12 bg-[#F7F8F8] border-none rounded-2xl text-base placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-health-purple"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
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

                {/* Password Criteria */}
                <div className="space-y-2">
                    {criteria.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <div className={cn(
                                "flex items-center justify-center h-4 w-4 rounded-full border text-[10px]",
                                item.met ? "border-green-500 text-green-500 bg-green-50" : "border-red-300 text-red-400"
                            )}>
                                {item.met ? <Check className="h-2.5 w-2.5" /> : <X className="h-2.5 w-2.5" />}
                            </div>
                            <span className={cn(
                                "text-xs",
                                item.met ? "text-health-text" : "text-gray-400"
                            )}>{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-start gap-3 mt-4">
                    <Checkbox 
                        id="terms" 
                        checked={formData.agreed} 
                        onCheckedChange={(c) => setFormData({...formData, agreed: c as boolean})}
                        className="mt-0.5 rounded border-gray-300 data-[state=checked]:bg-health-purple data-[state=checked]:border-health-purple"
                    />
                    <label htmlFor="terms" className="text-xs text-gray-500 leading-tight">
                        By continuing you accept our Privacy Policy and Term of Use
                    </label>
                </div>

                <Button 
                    className="w-full bg-health-purple hover:bg-health-purple/90 rounded-2xl h-14 shadow-lg shadow-health-purple/20 mt-6 text-base font-semibold"
                    disabled={!canProceedToDetails}
                    onClick={handleSubmit}
                >
                    Sign Up <ArrowRight className="ml-2 h-5 w-5" />
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
                    <span className="text-gray-500">Already have an account? </span>
                    <Link href="/auth/login" className="text-health-purple font-semibold hover:underline">Login</Link>
                </div>
            </div>
        ) : (
            /* STEP 2: BASIC INFO */
            <div className="space-y-12 flex-1 flex flex-col pt-4">
                {/* Gender */}
                <div className="flex justify-center gap-8">
                    <button 
                        onClick={() => setSelectedGender('male')}
                        className={cn(
                            "w-36 h-36 rounded-3xl flex flex-col items-center justify-center gap-3 border transition-all duration-300 relative",
                            selectedGender === 'male' 
                                ? "bg-[#F8F8FA] border-transparent" 
                                : "bg-white border-gray-200 text-gray-400"
                        )}
                    >
                        {selectedGender === 'male' && <div className="bg-health-deep-purple text-white rounded-full p-0.5 absolute top-3 right-3"><Check className="h-2.5 w-2.5"/></div>}
                        <User className={cn("h-12 w-12", selectedGender === 'male' ? "text-health-text" : "text-gray-300")} strokeWidth={1.5} />
                        <span className={cn("text-base font-medium", selectedGender === 'male' ? "text-health-text" : "text-gray-400")}>Male</span>
                    </button>
                    <button 
                        onClick={() => setSelectedGender('female')}
                        className={cn(
                            "w-36 h-36 rounded-3xl flex flex-col items-center justify-center gap-3 border transition-all duration-300 relative",
                            selectedGender === 'female' 
                                ? "bg-[#F8F8FA] border-transparent" 
                                : "bg-white border-gray-200 text-gray-400"
                        )}
                    >
                         {selectedGender === 'female' && <div className="bg-health-deep-purple text-white rounded-full p-0.5 absolute top-3 right-3"><Check className="h-2.5 w-2.5"/></div>}
                        <User className={cn("h-12 w-12", selectedGender === 'female' ? "text-health-text" : "text-gray-300")} strokeWidth={1.5} />
                        <span className={cn("text-base font-medium", selectedGender === 'female' ? "text-health-text" : "text-gray-400")}>Female</span>
                    </button>
                </div>

                {/* Height */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end px-1">
                        <span className="font-bold text-lg text-health-deep-purple">Height</span>
                        <span className="text-xl font-bold text-health-deep-purple">{formData.height}cm</span>
                    </div>
                    {/* Custom styling for range input would be needed for perfect match, using accent color for now */}
                    <input 
                        type="range" 
                        min="50" 
                        max="500" 
                        value={formData.height} 
                        onChange={(e) => setFormData({...formData, height: parseInt(e.target.value)})}
                        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-health-purple"
                    />
                    <div className="flex justify-between text-xs text-gray-400 font-medium px-1">
                        <span>50cm</span>
                        <span>500cm</span>
                    </div>
                </div>

                {/* Weight */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end px-1">
                        <span className="font-bold text-lg text-health-deep-purple">Weight</span>
                        <span className="text-xl font-bold text-health-deep-purple">{formData.weight}kg</span>
                    </div>
                    <input 
                        type="range" 
                        min="20" 
                        max="200" 
                        value={formData.weight} 
                        onChange={(e) => setFormData({...formData, weight: parseInt(e.target.value)})}
                        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-health-purple"
                    />
                     <div className="flex justify-between text-xs text-gray-400 font-medium px-1">
                        <span>20kg</span>
                        <span>200kg</span>
                    </div>
                </div>

                <div className="flex-1 flex items-end justify-center pb-8">
                     <Button 
                        size="icon"
                        className="h-16 w-16 rounded-2xl bg-health-purple hover:bg-health-purple/90 text-white shadow-xl shadow-health-purple/30 transition-transform hover:scale-105 active:scale-95"
                        onClick={handleSubmit}

                    >
                        <ArrowRight className="h-8 w-8" />
                    </Button>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}
