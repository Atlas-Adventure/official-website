"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, Star, Users, Clock, MapPin, Phone, Mail, ChevronDown, ChevronUp, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getOffersForHomepage } from "@/lib/data"

const trekkingOffers = getOffersForHomepage()

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "USA",
    text: "The sunrise from Toubkal was unlike anything I've ever seen. Our guide, Hamid, was fantastic—so knowledgeable and encouraging when the trek got tough. A truly unforgettable experience!",
    rating: 5,
  },
  {
    name: "Pierre Dubois",
    location: "France",
    text: "Organizing a trek from abroad can be stressful, but the team made it seamless. From the airport pickup to the final descent, everything was perfectly managed. Professionalism at its best.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    location: "UAE",
    text: "A perfect blend of adventure and culture. The camel trek into the dunes at sunset and sleeping under a blanket of stars in the Sahara was pure magic. Highly recommended!",
    rating: 5,
  },
  {
    name: "The Müller Family",
    location: "Germany",
    text: "We did the family trek with our two kids (ages 8 and 11). The Mule team was a lifesaver, and the guide was so patient with the little ones. It was the highlight of our family holiday in Morocco.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    location: "Canada",
    text: "As a solo female traveler, I was a bit nervous, but I felt completely safe and welcomed from day one. It was a challenging hike, but the group camaraderie was amazing. I made friends for life!",
    rating: 5,
  },
  {
    name: "James & Chloe Wilson",
    location: "UK",
    text: "My wife and I chose the 3-day Toubkal trek for our honeymoon. It was challenging but incredibly rewarding. The private refuge room was a nice touch, and the food was delicious!",
    rating: 5,
  },
  {
    name: "Liam O'Connell",
    location: "Ireland",
    text: "An absolute must-do! We are a group of four friends in our 30s looking for an adventure. The 4-day desert tour was the perfect mix of hiking, culture, and relaxation. The Kasbahs were stunning.",
    rating: 5,
  },
  {
    name: "Robert Davis",
    location: "Australia",
    text: "At 62, I wasn't sure I could make it to the summit. But our guide, Omar, set the perfect pace and was incredibly supportive. Standing on top of North Africa was a dream come true.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    location: "Spain",
    text: "The day trip to Imlil was fantastic. We didn't have time for a multi-day trek, but this gave us a wonderful taste of the Atlas Mountains and Berber culture. The lunch in the village was superb.",
    rating: 5,
  },
  {
    name: "Lars & Ingrid Johansson",
    location: "Sweden",
    text: "From the moment we booked, the communication was excellent. The Imlil to Azzaden Valley trek was beautiful, and staying in the local guesthouse was such an authentic experience. Thank you!",
    rating: 5,
  },
  {
    name: "Markus Webber",
    location: "Netherlands",
    text: "I'm an avid mountain biker, and the day tour from Imlil was epic. Great bikes, a knowledgeable guide, and some thrilling descents. A fantastic way to see the landscape.",
    rating: 5,
  },
  {
    name: "The Tanaka Family",
    location: "Japan",
    text: "We took our teenagers on the desert tour, and they actually loved it! No phones, just nature, camels, and incredible stars. It was a great bonding experience for our family.",
    rating: 5,
  },
  {
    name: "Isabella Rossi",
    location: "Italy",
    text: "Everything exceeded our expectations. The guides were passionate, the food was plentiful and tasty, and the scenery was out of this world. Don't hesitate to book with them!",
    rating: 5,
  },
]

export default function HomePage() {
  const [showAllTestimonials, setShowAllTestimonials] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-900/90 to-red-900/90 text-white shadow-lg backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="grid grid-cols-[auto_1fr_auto] items-center">
            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-orange-200 hover:text-white"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="flex items-center justify-center space-x-2">
              <Mountain className="h-7 w-7 sm:h-8 sm:w-8 text-orange-300" />
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Atlas Adventures</h1>
            </div>
            <nav className="hidden md:flex justify-end space-x-6">
              <Link href="#offers" className="hover:text-orange-300 transition-colors">
                Offers
              </Link>
              <Link href="#about" className="hover:text-orange-300 transition-colors">
                About
              </Link>
              <Link href="#testimonials" className="hover:text-orange-300 transition-colors">
                Reviews
              </Link>
              <Link href="#contact" className="hover:text-orange-300 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              mobileMenuOpen ? "max-h-64 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
            }`}
            style={{ transitionProperty: "max-height, opacity, margin-top" }}
          >
            <div className="flex flex-col space-y-2 pb-2">
              <Link href="#offers" className="px-2 py-2 rounded-md hover:text-orange-300" onClick={() => setMobileMenuOpen(false)}>
                Offers
              </Link>
              <Link href="#about" className="px-2 py-2 rounded-md hover:text-orange-300" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#testimonials" className="px-2 py-2 rounded-md hover:text-orange-300" onClick={() => setMobileMenuOpen(false)}>
                Reviews
              </Link>
              <Link href="#contact" className="px-2 py-2 rounded-md hover:text-orange-300" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-red-900/70 z-10"></div>
        <Image
          src="/img_montagne/montagne_10.jpg"
          alt="Majestic High Atlas Mountains in Morocco with snow-capped peaks and dramatic landscapes - Atlas Adventures trekking destination"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-shadow-lg">
            Discover Morocco's
            <span className="block text-orange-300">Majestic Mountains</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-orange-100">
            Expert-guided trekking adventures through the Atlas, Sahara, and beyond
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4 shadow-lg active:scale-95 transition-transform">
            <Link href="#offers">
              Explore Our Treks
            </Link>
          </Button>
            <Button asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-orange-900 text-lg px-8 py-4 bg-transparent"
            >
              <Link href="#about">
                Meet Your Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trekking Offers */}
      <section id="offers" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-amber-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-900 mb-4">Our Trekking Adventures</h3>
            <p className="text-base sm:text-lg md:text-xl text-orange-700 max-w-2xl mx-auto">
              Choose from our carefully crafted mountain expeditions, each offering unique landscapes and cultural
              experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trekkingOffers.map((offer) => (
              <Card
                key={offer.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-orange-200"
              >
                <div className="relative h-80">
                  <Image src={offer.image || "/placeholder.svg"} alt={offer.name} fill className="object-cover" quality={75} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
                  <CardTitle className="text-orange-900">{offer.name}</CardTitle>
                  <CardDescription className="text-orange-700">{offer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-orange-700">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{offer.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-900">{offer.price}</div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-orange-900">Included Services:</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      {offer.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/book/${offer.id}`} className="w-full">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">Book This Adventure</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-orange-900 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Meet Your Expert Guide Lahsan</h3>
              <p className="text-base sm:text-lg md:text-xl mb-6 text-orange-100">
                With over 10 years of experience guiding adventurers through Morocco's most spectacular landscapes, I am
                passionate about sharing the beauty and culture of my homeland.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mountain className="h-6 w-6 text-orange-300" />
                  <span className="text-sm sm:text-base">Certified Mountain Guide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-orange-300" />
                  <span className="text-sm sm:text-base">500+ Successful Expeditions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-orange-300" />
                  <span className="text-sm sm:text-base">Fluent in Arabic, French, English</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/img_guide/guide_26.jpg" alt="Mountain Guide" fill className="object-cover" quality={75} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-orange-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-900 mb-4">What Our Adventurers Say</h3>
            <p className="text-base sm:text-lg md:text-xl text-orange-700">Real experiences from real travelers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Always visible first 3 testimonials */}
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="border-orange-200">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-orange-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-orange-900">{testimonial.name}</div>
                  <div className="text-sm text-orange-600">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Expandable container for remaining testimonials */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden transition-all duration-500 ease-in-out ${
              showAllTestimonials
                ? "max-h-[5000px] opacity-100 mt-8"
                : "max-h-0 opacity-0 mt-0"
            }`}
            style={{
              transitionProperty: "max-height, opacity, margin-top",
            }}
          >
            {testimonials.slice(3).map((testimonial, index) => (
              <Card key={index + 3} className="border-orange-200">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-orange-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-orange-900">{testimonial.name}</div>
                  <div className="text-sm text-orange-600">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show More/Less Button */}
          {testimonials.length > 3 && (
            <div className="text-center mt-8">
              <Button
                onClick={() => setShowAllTestimonials(!showAllTestimonials)}
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg"
                size="lg"
              >
                {showAllTestimonials ? (
                  <>
                    <ChevronUp className="mr-2 h-5 w-5" />
                    Show Less Reviews
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-5 w-5" />
                    Show More Reviews
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-red-900 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready for Your Adventure?</h3>
            <p className="text-base sm:text-lg md:text-xl text-orange-100">Get in touch to plan your perfect Moroccan mountain experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <Phone className="h-12 w-12 text-orange-300" />
              <h4 className="text-xl font-semibold">Call Us</h4>
              <p className="text-orange-100">+212 653 534 590</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Mail className="h-12 w-12 text-orange-300" />
              <h4 className="text-xl font-semibold">Email Us</h4>
              <p className="text-orange-100">toubkaleguidepro@gmail.com</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <MapPin className="h-12 w-12 text-orange-300" />
              <h4 className="text-xl font-semibold">Visit Us</h4>
              <p className="text-orange-100">Marrakech, Imlil, Morocco</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-950 text-white py-10 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="h-6 w-6 text-orange-300" />
                <h4 className="text-xl font-bold">Atlas Adventures</h4>
              </div>
              <p className="text-orange-200">Your gateway to Morocco's most spectacular mountain adventures.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-orange-200">
                <li>
                  <Link href="#offers" className="hover:text-orange-300">
                    Our Offers
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-orange-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-orange-300">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-orange-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Adventures</h5>
              <ul className="space-y-2 text-orange-200">
                <li>
                  <Link href="/book/1" className="hover:text-orange-300">
                    Trek to Mount Toubkal
                  </Link>
                </li>
                <li>
                  <Link href="/book/2" className="hover:text-orange-300">
                    Adventure to Imlil
                  </Link>
                </li>
                <li>
                  <Link href="/book/3" className="hover:text-orange-300">
                    Professional Mountain Trek
                  </Link>
                </li>
                <li>
                  <Link href="/book/4" className="hover:text-orange-300">
                    Trek to Imlil
                  </Link>
                </li>
                <li>
                  <Link href="/book/5" className="hover:text-orange-300">
                    Mountain Biking Tour to Imlil
                  </Link>
                </li>
                <li>
                  <Link href="/book/6" className="hover:text-orange-300">
                    3-days trek to Mount Toubkal
                  </Link>
                </li>
                <li>
                  <Link href="/book/7" className="hover:text-orange-300">
                    Marrakech to Sahara Desert Adventure Tour
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-orange-200">
                <li>
                  <Link href="/terms" className="hover:text-orange-300">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-orange-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="hover:text-orange-300">
                    Legal Notice
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <p className="text-orange-200 mb-4">Stay updated with our latest adventures</p>
            <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/ayni.idblid?mibextid=wwXIfr&mibextid=wwXIfr" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-orange-900 bg-transparent"
                  >
                    Facebook
                  </Button>
                </a>

                <a
                  href="https://www.instagram.com/atlas_holiday_tours/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-orange-900 bg-transparent"
                  >
                    Instagram
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-200">
            <p>&copy; 2024 Atlas Adventures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
