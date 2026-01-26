"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Mountain, ArrowLeft, CalendarIcon, Users, Clock, MapPin, Star, Check, UtensilsCrossed, Bike, ExternalLink, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { format } from "date-fns"
import { getOfferById, type Offer } from "@/lib/data"

type FormDataState = {
  participants: number
  specialRequests: string
  dietaryRestrictions: string
  fitnessLevel: string
}

export default function BookingPage() {
  const params = useParams()
  const offerId = params.id as string
  const offer = getOfferById(offerId)

  const [selectedDate, setSelectedDate] = useState<Date>()
  const [formData, setFormData] = useState<FormDataState>({
    participants: 1,
    specialRequests: "",
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

  const handleInputChange = <K extends keyof FormDataState>(name: K, value: FormDataState[K]) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const getPricePerPerson = (participants: number): number => {
    if (participants === 1) {
      if (offer.pricingTiers && offer.pricingTiers.length > 0) {
        const soloSupplement = 50
        
        for (const tier of offer.pricingTiers) {
          const groupSizeStr = tier.groupSize.toLowerCase()
          const tierNumber = parseInt(groupSizeStr.replace(/\D/g, ""))
          
          if (tierNumber === 2 && !groupSizeStr.includes("+")) {
            return tier.pricePerPerson + soloSupplement
          }
        }
        
        const twoPersonTier = offer.pricingTiers.find(t => {
          const tierNumber = parseInt(t.groupSize.replace(/\D/g, ""))
          return tierNumber === 2
        })
        
        if (twoPersonTier) {
          return twoPersonTier.pricePerPerson + soloSupplement
        }
      }
      
      return offer.price
    }
    
    if (offer.pricingTiers && offer.pricingTiers.length > 0) {
      const exactTiers = offer.pricingTiers.filter(t => !t.groupSize.toLowerCase().includes("+"))
      const plusTiers = offer.pricingTiers.filter(t => t.groupSize.toLowerCase().includes("+"))
      
      for (const tier of exactTiers) {
        const tierNumber = parseInt(tier.groupSize.replace(/\D/g, ""))
        if (participants === tierNumber) {
          return tier.pricePerPerson
        }
      }
      
      if (plusTiers.length > 0) {
        const sortedPlusTiers = plusTiers.sort((a, b) => {
          const aNum = parseInt(a.groupSize.replace(/\D/g, "")) || 0
          const bNum = parseInt(b.groupSize.replace(/\D/g, "")) || 0
          return aNum - bNum
        })
        
        for (const tier of sortedPlusTiers) {
          const minNumber = parseInt(tier.groupSize.replace(/\D/g, ""))
          if (participants >= minNumber) {
            return tier.pricePerPerson
          }
        }
      }
      
      return offer.pricingTiers[offer.pricingTiers.length - 1].pricePerPerson
    }
    return offer.price
  }

  const participants = Number(formData.participants) || 1
  const currentPricePerPerson = getPricePerPerson(participants)
  const totalPrice = currentPricePerPerson * participants

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedDate) {
      alert("Please select a date for your trek")
      return
    }

    const formattedDate = format(selectedDate, "MMMM d, yyyy")
    const activityName = offer.name
    const fitnessLevel = formData.fitnessLevel || "Not specified"
    const dietaryRestrictions = formData.dietaryRestrictions.trim() || "None"
    const specialRequests = formData.specialRequests.trim() || "None"

    const currency = offer.pricingTiers && offer.pricingTiers.length > 0 
      ? (offer.pricingTiers[0].currency || "$") 
      : "$"
    
    const pricePerPersonDisplay = `${currency}${currentPricePerPerson}`
    const totalPriceDisplay = `${currency}${totalPrice}`
    
    const isSolo = participants === 1
    const hasPricingTiers = offer.pricingTiers && offer.pricingTiers.length > 0
    const soloNote = isSolo && hasPricingTiers ? `\nNote: Solo traveler supplement ($50) included (base price for 2 people + supplement).` : ""

    const whatsappMessage = `Hello Atlas Adventures! I want to book the ${activityName}.

Date: ${formattedDate}
Participants: ${participants}
Price per person: ${pricePerPersonDisplay}
Total price: ${totalPriceDisplay}${soloNote}
Fitness Level: ${fitnessLevel}
Dietary Requirements: ${dietaryRestrictions}
Special Requests: ${specialRequests}

Please let me know the availability.`
    
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/212653534590?text=${encodedMessage}`
    
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-900/90 to-red-900/90 text-white shadow-lg w-full backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 sm:py-4 max-w-full">
          <Link href="/" className="inline-flex items-center space-x-2 text-orange-300 hover:text-white mb-2 sm:mb-4">
            <ArrowLeft className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm sm:text-base">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Mountain className="h-6 w-6 sm:h-8 sm:w-8 text-orange-300 flex-shrink-0" />
            <h1 className="text-xl sm:text-2xl font-bold break-words">Book Your Adventure</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-full overflow-hidden">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 w-full max-w-full min-w-0 overflow-hidden">
            <Card className="border-orange-200 overflow-hidden shadow-lg w-full">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
                <Image
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.name}
                  fill
                  className="object-cover"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <CardHeader className="w-full">
                <CardTitle className="text-xl sm:text-2xl text-orange-900 break-words">{offer.name}</CardTitle>
                <CardDescription className="text-orange-700 leading-relaxed break-words">
                  {offer.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full min-w-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-6 w-full">
                  <div className="flex items-center space-x-1 sm:space-x-2 text-orange-700 min-w-0">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm truncate">{offer.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 text-orange-700 min-w-0">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm truncate">Max {offer.maxGroupSize}</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 text-orange-700 min-w-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm truncate">Morocco</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 text-orange-700 min-w-0">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm truncate">Age {offer.minAge}+</span>
                  </div>
                </div>

                {offer.dailyItinerary && offer.dailyItinerary.length > 0 && (
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-3 sm:p-4 md:p-6 border border-orange-200 shadow-sm mt-4 sm:mt-6 w-full max-w-full overflow-hidden">
                    <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-4 sm:mb-6 flex items-center justify-center md:justify-start space-x-2 break-words">
                      <Mountain className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                      <span>Your Adventure Itinerary</span>
                    </h3>
                    <div className="space-y-6 sm:space-y-8 w-full max-w-full">
                      {offer.dailyItinerary.map((day, index) => (
                        <div key={index} className="relative w-full max-w-full md:flex md:flex-row md:items-start md:space-x-4">
                          <div className="flex justify-center mb-4 md:mb-0 md:flex-shrink-0">
                            <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-xl shadow-lg">
                              <span className="text-center leading-tight">Day {day.day}</span>
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-4 sm:p-5 md:p-6 border border-orange-200 shadow-sm w-full max-w-full mx-0 min-w-0 text-center md:text-left">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2 w-full text-center md:text-left">
                              <h4 className="text-base sm:text-lg md:text-xl font-bold text-orange-900 break-words w-full">{day.title}</h4>
                              {day.duration && (
                                <Badge className="bg-orange-600 text-white w-fit flex-shrink-0 text-xs sm:text-sm whitespace-nowrap mx-auto sm:mx-0">{day.duration}</Badge>
                              )}
                            </div>
                            <p className="text-sm sm:text-base text-orange-700 leading-relaxed mb-3 sm:mb-4 break-words w-full text-center md:text-left">{day.description}</p>
                            {day.highlights && day.highlights.length > 0 && (
                              <div className="mt-4 pt-4 border-t border-orange-200 w-full text-center md:text-left">
                                <h5 className="font-semibold text-orange-900 mb-2 text-xs sm:text-sm uppercase tracking-wide break-words text-center md:text-left">
                                  Day Highlights
                                </h5>
                                <ul className="space-y-2 w-full text-center md:text-left">
                                  {day.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex} className="flex items-start justify-center md:justify-start space-x-2 text-sm sm:text-base text-orange-700 min-w-0 w-full">
                                      <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                      <span className="break-words flex-1 text-center md:text-left">{highlight}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                          {index < offer.dailyItinerary!.length - 1 && (
                            <div className="hidden md:block absolute left-8 top-14 md:top-16 w-0.5 h-6 md:h-8 bg-orange-300"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {offer.itinerary && offer.itinerary.length > 0 && (
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-3 sm:p-4 md:p-6 border border-orange-200 shadow-sm mt-4 sm:mt-6 w-full min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-4 sm:mb-6 flex items-center space-x-2 break-words">
                      {offer.id === 5 ? (
                        <>
                          <Bike className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                          <span>Your Biking Adventure</span>
                        </>
                      ) : (
                        <>
                          <Clock className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                          <span>Your Day in the High Atlas</span>
                        </>
                      )}
                    </h3>
                    <div className="space-y-4 sm:space-y-6 w-full">
                      {offer.itinerary.map((item, index) => (
                        <div
                          key={index}
                          className={`relative pl-6 sm:pl-8 w-full min-w-0 ${
                            index < offer.itinerary!.length - 1 ? "border-l-2 border-orange-300 pb-4 sm:pb-6" : ""
                          }`}
                        >
                          <div className="absolute left-0 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-orange-600 rounded-full border-2 border-white transform -translate-x-[7px] sm:-translate-x-[9px] flex-shrink-0"></div>
                          <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4 w-full min-w-0">
                            <div className="flex-shrink-0">
                              <div className="bg-orange-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                                {item.time}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0 w-full">
                              <h4 className="font-bold text-base sm:text-lg text-orange-900 mb-2 break-words">{item.title}</h4>
                              {item.title.includes("Lunch") && (
                                <div className="mb-3 flex items-center space-x-2 text-orange-700 bg-orange-100 px-2 sm:px-3 py-1 sm:py-2 rounded-lg w-fit max-w-full">
                                  <UtensilsCrossed className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 flex-shrink-0" />
                                  <span className="font-semibold italic text-xs sm:text-sm break-words">A highlight of your journey</span>
                                </div>
                              )}
                              {(item.title.includes("Biking") || item.title.includes("Bike") || item.title.includes("Cycle")) && offer.id === 5 && (
                                <div className="mb-3 flex items-center space-x-2 text-cyan-700 bg-cyan-100 px-2 sm:px-3 py-1 sm:py-2 rounded-lg w-fit max-w-full">
                                  <Bike className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-600 flex-shrink-0" />
                                  <span className="font-semibold italic text-xs sm:text-sm break-words">Adrenaline & adventure</span>
                                </div>
                              )}
                              <p className="text-sm sm:text-base text-orange-700 leading-relaxed break-words">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4 sm:mt-6 w-full min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg text-orange-900 mb-3 flex items-center space-x-2 break-words">
                    {offer.id === 5 ? (
                      <>
                        <Bike className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                        <span>Adventure Highlights</span>
                      </>
                    ) : (
                      <span>Journey Highlights</span>
                    )}
                  </h4>
                  <ul className="space-y-2 w-full">
                    {offer.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm sm:text-base text-orange-700 min-w-0">
                        {offer.id === 5 ? (
                          <Bike className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        )}
                        <span className="leading-relaxed break-words">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6 w-full min-w-0">
                  <div className="min-w-0 w-full">
                    <h4 className="font-semibold text-base sm:text-lg text-orange-900 mb-3 flex items-center space-x-2 break-words">
                      {offer.id === 5 ? <Bike className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-600 flex-shrink-0" /> : null}
                      <span>What's Included</span>
                    </h4>
                    <ul className="space-y-2 w-full">
                      {offer.included.map((item, index) => {
                        const isBikeItem = offer.id === 5 && (item.toLowerCase().includes("bike") || item.toLowerCase().includes("helmet"));
                        return (
                          <li key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-orange-700 min-w-0">
                            {isBikeItem ? (
                              <Bike className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                            ) : (
                              <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            )}
                            <span className="leading-relaxed break-words">{item}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="min-w-0 w-full">
                    <h4 className="font-semibold text-base sm:text-lg text-orange-900 mb-3 break-words">Not Included</h4>
                    <ul className="space-y-2 w-full">
                      {offer.notIncluded.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-orange-700 min-w-0">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-orange-400 rounded-sm flex-shrink-0 mt-0.5"></div>
                          <span className="leading-relaxed break-words">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 sm:space-y-6 w-full min-w-0">
            <Card className="border-orange-200 w-full">
              <CardContent className="pt-4 sm:pt-6 w-full min-w-0">
                <a
                  href="https://www.tripadvisor.fr/Attraction_Review-g488109-d33734404-Reviews-Atlas_Adventures-Imlil_Marrakech_Safi.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-700 hover:bg-green-50 max-w-full"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span className="break-words">See our reviews on TripAdvisor</span>
                  </Button>
                </a>
              </CardContent>
            </Card>

            {offer.pricingTiers && offer.pricingTiers.length > 0 && (
              <Card className="border-orange-200 w-full">
                <CardHeader className="w-full min-w-0">
                  <CardTitle className="text-lg text-orange-900 break-words">Group Pricing</CardTitle>
                </CardHeader>
                <CardContent className="w-full min-w-0">
                  <div className="space-y-3 w-full">
                    {offer.pricingTiers.map((tier, index) => (
                      <div key={index} className="flex justify-between p-2 bg-orange-50 rounded border border-orange-100 w-full min-w-0">
                        <span className="text-sm break-words min-w-0">{tier.groupSize}</span>
                        <span className="font-bold text-sm flex-shrink-0 ml-2 break-words">{tier.pricePerPerson}{tier.currency || "€"}/Person</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="border-orange-200 w-full">
              <CardHeader className="w-full min-w-0">
                <CardTitle className="text-lg text-orange-900 break-words">Book This Adventure</CardTitle>
              </CardHeader>
              <CardContent className="w-full min-w-0">
                <form onSubmit={handleSubmit} className="space-y-4 w-full">
                  <div className="space-y-2 w-full">
                    <Label className="break-words">Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal border-orange-200 max-w-full">
                          <CalendarIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{selectedDate ? format(selectedDate, "PPP") : "Pick a date"}</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2 w-full">
                    <Label className="break-words">Participants</Label>
                    <Select
                      value={String(formData.participants)}
                      onValueChange={(value) => handleInputChange("participants", Number(value))}
                    >
                      <SelectTrigger className="w-full border-orange-200 max-w-full">
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

                  <div className="space-y-2 w-full">
                    <Label className="break-words">Fitness Level</Label>
                    <Select value={formData.fitnessLevel} onValueChange={(value) => handleInputChange("fitnessLevel", value)}>
                      <SelectTrigger className="w-full border-orange-200 max-w-full">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 w-full">
                    <Label className="break-words">Dietary Restrictions</Label>
                    <Textarea
                      value={formData.dietaryRestrictions}
                      onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                      placeholder="Allergies..."
                      className="border-orange-200 w-full max-w-full resize-y"
                    />
                  </div>

                  <div className="space-y-2 w-full">
                    <Label className="break-words">Special Requests</Label>
                    <Textarea
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      placeholder="Any special requests or notes..."
                      className="border-orange-200 w-full max-w-full resize-y"
                    />
                  </div>

                  <div className="pt-4 border-t border-orange-200 w-full space-y-2">
                    <div className="flex justify-between items-center text-sm text-orange-700 w-full min-w-0">
                      <span className="break-words">Price per person:</span>
                      <span className="flex-shrink-0 ml-2 break-words">
                        {offer.pricingTiers && offer.pricingTiers.length > 0 
                          ? `${offer.pricingTiers[0].currency || "$"}${currentPricePerPerson}`
                          : `$${currentPricePerPerson}`
                        }
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold text-orange-900 w-full min-w-0">
                      <span className="break-words">Total:</span>
                      <span className="flex-shrink-0 ml-2 break-words">
                        {offer.pricingTiers && offer.pricingTiers.length > 0 
                          ? `${offer.pricingTiers[0].currency || "$"}${totalPrice}`
                          : `$${totalPrice}`
                        }
                      </span>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white max-w-full">
                    <MessageCircle className="mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="break-words">Book via WhatsApp</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}