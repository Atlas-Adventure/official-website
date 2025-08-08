import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, Star, Users, Clock, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const trekkingOffers = [
  {
    id: 1,
        name: "Trek to Mount Toubkal",
    description:
      "A fast-paced adventure to conquer the highest peak in North Africa. Traverse breathtaking landscapes, discover Berber villages, and reach the summit of Mount Toubkal with a rewarding sunrise view over the Atlas Mountains and the Sahara.",
    duration: "2 days",
    difficulty: "Advanced",
    price: "$499",
    highlights: ["Round-trip transport between Marrakech and Imlil", "Professional certified mountain guide", "Mule for luggage transport", "1-night accommodation at Toubkal Refuge", "All meals during the trek (breakfast, lunch, dinner)", "Use of trekking poles and headlamp (optional rental)"],
    image: "/img_montagne/Montagne_hd_3.jpg",
  },
  {
    id: 2,
    name: "Adventure to Imlil",
    description:
      "Immerse yourself in the serene beauty of the High Atlas Mountains. Discover picturesque landscapes, authentic Amazigh (Berber) culture, charming villages, and cascading waterfalls — all in a single unforgettable day.",
    duration: "Full-Day Experience",
    difficulty: "Easy",
    price: "$199",
    highlights: ["Round-trip transportation from Marrakech to Imlil (private car or van)","Certified local mountain guide", "Traditional Amazigh lunch", "Guided hike tailored to your fitness level","Bottled water during the trip"],
    image: "img_montagne/Montagne_hd_imlil.jpg",
  },
  {
    id: 3,
    name: "Professional Mountain Trek",
    description:
      "Stunning panoramic mountain views, majestic waterfalls, authentic Berber villages, and an unforgettable journey through the High Atlas Mountains. Imlil → Azadene → Tignet → Tamsoult → Toubkal Refuge → Imlil",
    duration: "5 days",
    difficulty: "Moderate",
    price: "$899",
    highlights: ["Professional certified mountain guide", "Mule team for luggage transportation", "4 nights’ accommodation in guesthouses and mountain refuges", "All meals throughout the trek (breakfast, lunch, dinner)", "Return transportation to/from Imlil (if needed) "],
    image: "/img_montagne/Montagne_hd_4.jpg",
  },
  {
    id: 4,
    name: "Trek: Imlil → Tizi M'Zik Pass → Tizi Oussem → Azzaden Valley → Return to Imlil.",
    description: 
      "Panoramic views, authentic Berber villages, juniper forests, local culture, and mountain hospitality.",
    duration: "2 days",
    difficulty: "Moderate",
    price: "$299",
    highlights: ["Professional mountain guide", "Mule(s) for luggage (optional)", "1-night accommodation in a Berber guesthouse", "All meals (2 lunches, 1 dinner, 1 breakfast)", "Return transport to/from Imlil (on request)"],
    image: "/img_pro_randonnee/Randonee_06.jpg",
  },
  {
    id: 5,
    name: "Rif Mountains Journey",
    description:
      "Trek through the green mountains of northern Morocco with Mediterranean views and traditional villages.",
    duration: "5 days",
    difficulty: "Easy",
    price: "$599",
    highlights: ["Mediterranean views", "Green landscapes", "Traditional villages"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    name: "Grand Morocco Circuit",
    description:
      "The ultimate 12-day adventure combining all mountain ranges with desert experience and cultural immersion.",
    duration: "12 days",
    difficulty: "Advanced",
    price: "$1499",
    highlights: ["All mountain ranges", "Desert & mountains", "Cultural immersion"],
    image: "/placeholder.svg?height=300&width=400",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "USA",
    text: "An incredible journey through Morocco's mountains. Our guide was knowledgeable and the landscapes were breathtaking!",
    rating: 5,
  },
  {
    name: "Pierre Dubois",
    location: "France",
    text: "The Atlas trek exceeded all expectations. Professional service and unforgettable memories.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    location: "UAE",
    text: "Perfect blend of adventure and culture. The desert nights were magical!",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-900 to-red-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-orange-300" />
            <h1 className="text-2xl font-bold">Atlas Adventures</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
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
          <div className="flex space-x-2">
            <Link href="/login">
              <Button
                variant="outline"
                className="border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-orange-900 bg-transparent"
              >
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-orange-600 hover:bg-orange-700">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-red-900/70 z-10"></div>
        <Image
          src="/img_montagne/Montagne_hd_1.jpg?height=1080&width=1920"
          alt="Moroccan Mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
            Discover Morocco's
            <span className="block text-orange-300">Majestic Mountains</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Expert-guided trekking adventures through the Atlas, Sahara, and beyond
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
              Explore Our Treks
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-orange-900 text-lg px-8 py-4 bg-transparent"
            >
              Meet Your Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Trekking Offers */}
      <section id="offers" className="py-20 bg-gradient-to-b from-amber-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-orange-900 mb-4">Our Trekking Adventures</h3>
            <p className="text-xl text-orange-700 max-w-2xl mx-auto">
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
                    <h4 className="font-semibold text-orange-900">Highlights:</h4>
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
      <section id="about" className="py-20 bg-gradient-to-r from-orange-900 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Meet Your Expert Guide</h3>
              <p className="text-xl mb-6 text-orange-100">
                With over 15 years of experience guiding adventurers through Morocco's most spectacular landscapes, I am
                passionate about sharing the beauty and culture of my homeland.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mountain className="h-6 w-6 text-orange-300" />
                  <span>Certified Mountain Guide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-orange-300" />
                  <span>500+ Successful Expeditions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-orange-300" />
                  <span>Fluent in Arabic, French, English</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Mountain Guide" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-orange-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-orange-900 mb-4">What Our Adventurers Say</h3>
            <p className="text-xl text-orange-700">Real experiences from real travelers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-red-900 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Ready for Your Adventure?</h3>
            <p className="text-xl text-orange-100">Get in touch to plan your perfect Moroccan mountain experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <Phone className="h-12 w-12 text-orange-300" />
              <h4 className="text-xl font-semibold">Call Us</h4>
              <p className="text-orange-100">+212 6XX XXX XXX</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Mail className="h-12 w-12 text-orange-300" />
              <h4 className="text-xl font-semibold">Email Us</h4>
              <p className="text-orange-100">info@atlasadventures.ma</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <MapPin className="h-12 w-12 text-orange-300" />
              <h4 className="text-xl font-semibold">Visit Us</h4>
              <p className="text-orange-100">Marrakech, Morocco</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                    Atlas Summit
                  </Link>
                </li>
                <li>
                  <Link href="/book/2" className="hover:text-orange-300">
                    Desert Dunes
                  </Link>
                </li>
                <li>
                  <Link href="/book/3" className="hover:text-orange-300">
                    Anti-Atlas
                  </Link>
                </li>
                <li>
                  <Link href="/book/6" className="hover:text-orange-300">
                    Grand Circuit
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <p className="text-orange-200 mb-4">Stay updated with our latest adventures</p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-orange-900 bg-transparent"
                >
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-orange-900 bg-transparent"
                >
                  Instagram
                </Button>
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
