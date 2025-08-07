"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mountain, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      rememberMe: checked,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically authenticate with your backend
    console.log("Login data:", formData)

    // Simulate successful login
    alert("Login successful! Welcome back!")
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-orange-900 hover:text-orange-700 mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Mountain className="h-8 w-8 text-orange-600" />
            <h1 className="text-2xl font-bold text-orange-900">Atlas Adventures</h1>
          </div>
        </div>

        <Card className="border-orange-200 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-orange-900">Welcome Back</CardTitle>
            <CardDescription className="text-orange-700">
              Sign in to your account to continue your adventure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-orange-900">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-orange-200 focus:border-orange-500"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-orange-900">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="border-orange-200 focus:border-orange-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="rememberMe" checked={formData.rememberMe} onCheckedChange={handleCheckboxChange} />
                  <Label htmlFor="rememberMe" className="text-sm text-orange-700">
                    Remember me
                  </Label>
                </div>
                <Link href="/forgot-password" className="text-sm text-orange-600 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white" size="lg">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-orange-700">
                Don't have an account?{" "}
                <Link href="/register" className="text-orange-600 hover:underline font-semibold">
                  Create one here
                </Link>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-orange-200">
              <div className="text-center">
                <p className="text-sm text-orange-600 mb-4">Or continue with</p>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full border-orange-200 text-orange-700 hover:bg-orange-50 bg-transparent"
                  >
                    Continue with Google
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-orange-200 text-orange-700 hover:bg-orange-50 bg-transparent"
                  >
                    Continue with Facebook
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
