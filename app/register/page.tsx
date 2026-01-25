'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mountain, ArrowLeft } from "lucide-react"

import { supabase } from '@/lib/supabaseClient'

export default function RegisterPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    country: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  })
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setMessage(null)

    // Vérifications basiques
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.")
      return
    }
    if (!formData.agreeToTerms) {
      setError("Vous devez accepter les conditions générales.")
      return
    }

    setLoading(true)

    // Appel Supabase Auth
    const { error: supaError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          country: formData.country,
          newsletter: formData.subscribeNewsletter,
        },
      },
    })

    setLoading(false)

    if (supaError) {
      setError(supaError.message)
    } else {
      setMessage("Inscription réussie ! Vérifiez votre boîte mail pour confirmer.")
      setTimeout(() => router.push('/login'), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-orange-900 hover:text-orange-700 mb-4"
          >
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
            <CardTitle className="text-2xl text-orange-900">
              Join Our Adventure Community
            </CardTitle>
            <CardDescription className="text-orange-700">
              Create your account to book amazing trekking experiences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p className="text-red-600 text-center">{error}</p>}
              {message && <p className="text-green-600 text-center">{message}</p>}

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-orange-900">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border-orange-200 focus:border-orange-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-orange-900">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="border-orange-200 focus:border-orange-500"
                  />
                </div>
              </div>

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
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-orange-900">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-orange-200 focus:border-orange-500"
                  placeholder="+212 6XX XXX XXX"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="text-orange-900">
                  Country
                </Label>
                <Input
                  id="country"
                  name="country"
                  type="text"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="border-orange-200 focus:border-orange-500"
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

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-orange-900">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="border-orange-200 focus:border-orange-500"
                />
              </div>

              {/* Bloc “Terms & Conditions” */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("agreeToTerms", checked as boolean)
                  }
                />
                <Label htmlFor="agreeToTerms" className="text-sm text-orange-700">
                  J’accepte les{" "}
                  <Link href="/terms" className="underline text-orange-600">
                    Conditions Générales
                  </Link>
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="subscribeNewsletter"
                  checked={formData.subscribeNewsletter}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("subscribeNewsletter", checked as boolean)
                  }
                />
                <Label htmlFor="subscribeNewsletter" className="text-sm text-orange-700">
                  Subscribe to our newsletter for adventure updates
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                size="lg"
                disabled={loading}
              >
                {loading ? "Création en cours…" : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-orange-700">
                Already have an account?{" "}
                <Link href="/login" className="text-orange-600 hover:underline font-semibold">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
