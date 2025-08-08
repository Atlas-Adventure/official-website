"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Mountain, ArrowLeft, CalendarIcon, Users, Clock, MapPin, Star, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { format } from "date-fns"

// ------ (1) Typage clair pour les offres et le formulaire
type Offer = {
  id: number
  name: string
  description: string
  duration: string
  difficulty: "Easy" | "Moderate" | "Advanced"
  price: number
  maxGroupSize: number
  minAge: number
  highlights: string[]
  included: string[]
  notIncluded: string[]
  image: string
}

type FormDataState = {
  participants: number
  specialRequests: string
  emergencyContact: string
  emergencyPhone: string
  dietaryRestrictions: string
  fitnessLevel: string
}

const trekkingOffers: Record<string, Offer> = {
  "1": {
    id: 1,
    name: "Trek to Mount Toubkal",
    description:
      "Conquer the highest peaks of the High Atlas Mountains with breathtaking views and traditional Berber villages. This challenging trek takes you through diverse landscapes, from lush valleys to rocky summits, offering an authentic Moroccan mountain experience.",
    duration: "7 days",
    difficulty: "Advanced",
    price: 899,
    maxGroupSize: 12,
    minAge: 16,
    highlights: ["Mount Toubkal (4,167m)", "Berber villages", "Stunning valleys", "Traditional mountain huts"],
    included: ["Professional guide", "All meals", "Accommodation", "Transportation", "Permits"],
    notIncluded: ["International flights", "Personal equipment", "Travel insurance", "Tips"],
    image: "/placeholder.svg?height=400&width=600",
  },
  "2": {
    id: 2,
    name: "Adventure to Imlil",
    description: "Experience the magic of the Sahara with camel trekking and nights under the stars in luxury desert camps.",
    duration: "5 days",
    difficulty: "Moderate",
    price: 699,
    maxGroupSize: 15,
    minAge: 12,
    highlights: ["Erg Chebbi dunes", "Camel trekking", "Desert camping", "Sunrise/sunset views"],
    included: ["Professional guide", "All meals", "Desert camp", "Camel trekking", "Transportation"],
    notIncluded: ["International flights", "Personal equipment", "Travel insurance", "Tips"],
    image: "/placeholder.svg?height=400&width=600",
  },
  // (les autres clés inchangées…)
  "3": {
    id: 2,
    name: "Professional Mountain Trek",
    description: "Experience the magic of the Sahara with camel trekking and nights under the stars in luxury desert camps.",
    duration: "5 days",
    difficulty: "Moderate",
    price: 699,
    maxGroupSize: 15,
    minAge: 12,
    highlights: ["Erg Chebbi dunes", "Camel trekking", "Desert camping", "Sunrise/sunset views"],
    included: ["Professional guide", "All meals", "Desert camp", "Camel trekking", "Transportation"],
    notIncluded: ["International flights", "Personal equipment", "Travel insurance", "Tips"],
    image: "/placeholder.svg?height=400&width=600",
  },
  "4": {
    id: 2,
    name: "Trek: Imlil → Tizi M'Zik Pass → Tizi Oussem → Azzaden Valley → Return to Imlil.",
    description: "Experience the magic of the Sahara with camel trekking and nights under the stars in luxury desert camps.",
    duration: "5 days",
    difficulty: "Moderate",
    price: 699,
    maxGroupSize: 15,
    minAge: 12,
    highlights: ["Erg Chebbi dunes", "Camel trekking", "Desert camping", "Sunrise/sunset views"],
    included: ["Professional guide", "All meals", "Desert camp", "Camel trekking", "Transportation"],
    notIncluded: ["International flights", "Personal equipment", "Travel insurance", "Tips"],
    image: "/placeholder.svg?height=400&width=600",
  },
  "5": {
    id: 2,
    name: "Mountain Biking Tour Imlil → Tachedirt → Asni → Return to Imlil",
    description: "Experience the magic of the Sahara with camel trekking and nights under the stars in luxury desert camps.",
    duration: "5 days",
    difficulty: "Moderate",
    price: 699,
    maxGroupSize: 15,
    minAge: 12,
    highlights: ["Erg Chebbi dunes", "Camel trekking", "Desert camping", "Sunrise/sunset views"],
    included: ["Professional guide", "All meals", "Desert camp", "Camel trekking", "Transportation"],
    notIncluded: ["International flights", "Personal equipment", "Travel insurance", "Tips"],
    image: "/placeholder.svg?height=400&width=600",
  },
  "6": {
    id: 2,
    name: "3-days trek to Mount Toubkal",
    description: "Experience the magic of the Sahara with camel trekking and nights under the stars in luxury desert camps.",
    duration: "5 days",
    difficulty: "Moderate",
    price: 699,
    maxGroupSize: 15,
    minAge: 12,
    highlights: ["Erg Chebbi dunes", "Camel trekking", "Desert camping", "Sunrise/sunset views"],
    included: ["Professional guide", "All meals", "Desert camp", "Camel trekking", "Transportation"],
    notIncluded: ["International flights", "Personal equipment", "Travel insurance", "Tips"],
    image: "/placeholder.svg?height=400&width=600",
  },
  "7": {
    id: 2,
    name: "Marrakech to Sahara Desert Adventure Tour",
    description: "Experience the magic of the Sahara with camel trekking and nights under the stars in luxury desert camps.",
    duration: "5 days",
    difficulty: "Moderate",
    price: 699,
    maxGroupSize: 15,
    minAge: 12,
    highlights: ["Erg Chebbi dunes", "Camel trekking", "Desert camping", "Sunrise/sunset views"],
    included: ["Professional guide", "All meals", "Desert camp", "Camel trekking", "Transportation"],
    notIncluded: ["International flights", "Personal equipment", "Travel insurance", "Tips"],
    image: "/placeholder.svg?height=400&width=600",
  },
}

export default function BookingPage() {
  const params = useParams()
  const router = useRouter()
  const offerId = params.id as string
  const offer = trekkingOffers[offerId as keyof typeof trekkingOffers]

  const [selectedDate, setSelectedDate] = useState<Date>()
  // ------ (2) Typage explicite du state formulaire
  const [formData, setFormData] = useState<FormDataState>({
    participants: 1,
    specialRequests: "",
    emergencyContact: "",
    emergencyPhone: "",
    dietaryRestrictions: "",
    fitnessLevel: "",
  })

  if (!offer) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 flex items-center justify-center">
        <Card className="border-orange-200">
          <CardContent className="pt-6 text-center">
            <h2 className="text-2xl font-bold text-orange-900 mb-4">Trek Not Found</h2>
            <Link href="/">
              <Button className="bg-orange-600 hover:bg-orange-700">Return Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  // ------ (3) handleInputChange typé + conversion des nombres en amont
  const handleInputChange = <K extends keyof FormDataState>(name: K, value: FormDataState[K]) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedDate) {
      alert("Please select a date for your trek")
      return
    }

    // ------ (4) Normaliser participants (toujours nombre) AVANT de construire bookingData
    const participants = Number(formData.participants) || 1
    const totalPrice = offer.price * participants

    const bookingData = {
      ...formData, // on étale d'abord
      participants, // on écrase avec la version normalisée
      offerId: offer.id,
      offerName: offer.name,
      date: selectedDate,
      totalPrice,
    }

    console.log("Booking data:", bookingData)
    alert("Booking submitted successfully! We'll contact you soon to confirm your adventure.")
    router.push("/dashboard")
  }

  // ------ (5) Total calculé avec participants normalisé (affichage)
  const totalPrice = offer.price * (Number(formData.participants) || 1)

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-900 to-red-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center space-x-2 text-orange-300 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-orange-300" />
            <h1 className="text-2xl font-bold">Book Your Adventure</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trek Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-orange-200 overflow-hidden">
              <div className="relative h-64">
                <Image src={offer.image || "/placeholder.svg"} alt={offer.name} fill className="object-cover" />
                <div className="absolute top-4 right-4">
                  <Badge
                    className={`${
                      offer.difficulty === "Easy"
                        ? "bg-green-600"
                        : offer.difficulty === "Moderate"
                        ? "bg-yellow-600"
                        : "bg-red-600"
                    }`}
                  >
                    {offer.difficulty}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-orange-900">{offer.name}</CardTitle>
                <CardDescription className="text-orange-700 text-base">{offer.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-orange-700">
                    <Clock className="h-5 w-5" />
                    <span>{offer.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-orange-700">
                    <Users className="h-5 w-5" />
                    <span>Max {offer.maxGroupSize}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-orange-700">
                    <MapPin className="h-5 w-5" />
                    <span>Morocco</span>
                  </div>
                  <div className="flex items-center space-x-2 text-orange-700">
                    <Star className="h-5 w-5" />
                    <span>Age {offer.minAge}+</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">Highlights</h4>
                    <ul className="space-y-1">
                      {offer.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center space-x-2 text-orange-700">
                          <Check className="h-4 w-4 text-green-600" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-orange-900 mb-2">Included</h4>
                      <ul className="space-y-1">
                        {offer.included.map((item, index) => (
                          <li key={index} className="flex items-center space-x-2 text-orange-700 text-sm">
                            <Check className="h-3 w-3 text-green-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-900 mb-2">Not Included</h4>
                      <ul className="space-y-1">
                        {offer.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-center space-x-2 text-orange-700 text-sm">
                            <div className="w-3 h-3 border border-orange-400 rounded-sm"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="space-y-6">
            <Card className="border-orange-200 sticky top-4">
              <CardHeader>
                <CardTitle className="text-orange-900">Book This Adventure</CardTitle>
                <CardDescription className="text-orange-700">Fill in your details to secure your spot</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-orange-900">Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal border-orange-200 bg-transparent"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="participants" className="text-orange-900">
                      Number of Participants
                    </Label>
                    <Select
                      value={String(formData.participants)}
                      onValueChange={(value) => handleInputChange("participants", Number(value))}
                    >
                      <SelectTrigger className="border-orange-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(offer.maxGroupSize)].map((_, i) => (
                          <SelectItem key={i + 1} value={String(i + 1)}>
                            {i + 1} {i === 0 ? "person" : "people"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fitnessLevel" className="text-orange-900">
                      Fitness Level
                    </Label>
                    <Select
                      value={formData.fitnessLevel}
                      onValueChange={(value) => handleInputChange("fitnessLevel", value)}
                    >
                      <SelectTrigger className="border-orange-200">
                        <SelectValue placeholder="Select your fitness level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact" className="text-orange-900">
                      Emergency Contact Name
                    </Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                      className="border-orange-200"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone" className="text-orange-900">
                      Emergency Contact Phone
                    </Label>
                    <Input
                      id="emergencyPhone"
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                      className="border-orange-200"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dietaryRestrictions" className="text-orange-900">
                      Dietary Restrictions
                    </Label>
                    <Textarea
                      id="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                      className="border-orange-200"
                      placeholder="Any dietary restrictions or allergies"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequests" className="text-orange-900">
                      Special Requests
                    </Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      className="border-orange-200"
                      placeholder="Any special requests or requirements"
                    />
                  </div>

                  <div className="border-t border-orange-200 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-700">Price per person:</span>
                      <span className="font-semibold text-orange-900">${offer.price}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-orange-700">Participants:</span>
                      <span className="font-semibold text-orange-900">{Number(formData.participants)}</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold text-orange-900 border-t border-orange-200 pt-2">
                      <span>Total:</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white" size="lg">
                    Book Now - ${totalPrice}
                  </Button>
                </form>

                <div className="mt-4 text-center">
                  <p className="text-sm text-orange-600">Secure booking • Free cancellation up to 48 hours</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
