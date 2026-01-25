"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mountain, Calendar, MapPin, User, Settings, LogOut, Clock, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const userBookings = [
  {
    id: 1,
    trekName: "Atlas Summit Adventure",
    date: "2024-03-15",
    status: "Confirmed",
    duration: "7 days",
    price: "$899",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    trekName: "Desert Dunes Trek",
    date: "2024-04-20",
    status: "Pending",
    duration: "5 days",
    price: "$699",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const upcomingTreks = [
  {
    id: 3,
    name: "Anti-Atlas Discovery",
    date: "2024-02-10",
    spotsLeft: 3,
    price: "$499",
  },
  {
    id: 4,
    name: "Middle Atlas Explorer",
    date: "2024-02-25",
    spotsLeft: 1,
    price: "$749",
  },
]

export default function DashboardPage() {
  const [user] = useState({
    name: "Ahmed Hassan",
    email: "ahmed@example.com",
    joinDate: "January 2024",
    totalBookings: 2,
    completedTreks: 0,
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-900 to-red-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-orange-300" />
            <h1 className="text-2xl font-bold">Atlas Adventures</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-orange-200">Welcome, {user.name}</span>
            <Button
              variant="outline"
              size="sm"
              className="border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-orange-900 bg-transparent"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-orange-900 mb-2">Your Adventure Dashboard</h2>
          <p className="text-orange-700">Manage your bookings and discover new adventures</p>
        </div>

        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-orange-100">
            <TabsTrigger value="bookings" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              My Bookings
            </TabsTrigger>
            <TabsTrigger value="discover" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              Discover
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              Profile
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              Settings
            </TabsTrigger>
          </TabsList>

          {/* My Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-orange-200">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-orange-900">{user.totalBookings}</p>
                      <p className="text-orange-700">Total Bookings</p>
                    </div>
                    <Calendar className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="border-orange-200">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-orange-900">{user.completedTreks}</p>
                      <p className="text-orange-700">Completed Treks</p>
                    </div>
                    <Mountain className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="border-orange-200">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-orange-900">1</p>
                      <p className="text-orange-700">Upcoming Adventures</p>
                    </div>
                    <MapPin className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Your Bookings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userBookings.map((booking) => (
                  <Card key={booking.id} className="border-orange-200 overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={booking.image || "/placeholder.svg"}
                        alt={booking.trekName}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={`${booking.status === "Confirmed" ? "bg-green-600" : "bg-yellow-600"}`}>
                          {booking.status}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-orange-900">{booking.trekName}</CardTitle>
                      <CardDescription className="text-orange-700">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{booking.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{booking.duration}</span>
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-orange-900">{booking.price}</span>
                        <Button
                          variant="outline"
                          className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
                        >
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Discover Tab */}
          <TabsContent value="discover" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Upcoming Adventures</h3>
              <p className="text-orange-700 mb-6">Don't miss these amazing opportunities!</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingTreks.map((trek) => (
                  <Card key={trek.id} className="border-orange-200">
                    <CardHeader>
                      <CardTitle className="text-orange-900">{trek.name}</CardTitle>
                      <CardDescription className="text-orange-700">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{trek.date}</span>
                          </div>
                          <Badge variant="outline" className="border-orange-600 text-orange-600">
                            {trek.spotsLeft} spots left
                          </Badge>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-orange-900">{trek.price}</span>
                        <Link href={`/book/${trek.id}`}>
                          <Button className="bg-orange-600 hover:bg-orange-700">Book Now</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Card className="border-orange-200 bg-gradient-to-r from-orange-100 to-amber-100">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-orange-900 mb-2">Explore All Adventures</h4>
                    <p className="text-orange-700 mb-4">Discover our complete range of trekking experiences</p>
                    <Link href="/#offers">
                      <Button className="bg-orange-600 hover:bg-orange-700">View All Offers</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-900 flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-orange-900">Full Name</label>
                    <p className="text-orange-700">{user.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-orange-900">Email</label>
                    <p className="text-orange-700">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-orange-900">Member Since</label>
                    <p className="text-orange-700">{user.joinDate}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-orange-900">Adventure Level</label>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                      <span className="text-orange-700">Beginner Explorer</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700">Edit Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-900 flex items-center space-x-2">
                  <Settings className="h-5 w-5" />
                  <span>Account Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-orange-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-orange-900">Email Notifications</h4>
                      <p className="text-sm text-orange-700">Receive updates about your bookings</p>
                    </div>
                    <Button variant="outline" className="border-orange-600 text-orange-600 bg-transparent">
                      Manage
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-orange-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-orange-900">Password</h4>
                      <p className="text-sm text-orange-700">Change your account password</p>
                    </div>
                    <Button variant="outline" className="border-orange-600 text-orange-600 bg-transparent">
                      Change
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-orange-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-orange-900">Privacy Settings</h4>
                      <p className="text-sm text-orange-700">Manage your privacy preferences</p>
                    </div>
                    <Button variant="outline" className="border-orange-600 text-orange-600 bg-transparent">
                      Configure
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
