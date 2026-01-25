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
import { Mountain, ArrowLeft, CalendarIcon, Users, Clock, MapPin, Star, Check, UtensilsCrossed, Sparkles, Bike, Landmark } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { format } from "date-fns"

// ------ (1) Typage clair pour les offres et le formulaire
type ItineraryItem = {
  time: string
  title: string
  description: string
}

type PricingTier = {
  groupSize: string
  pricePerPerson: number
  currency?: string
}

type SpecialFeature = {
  title: string
  description: string
  icon: string
}

type Offer = {
  id: number
  name: string
  description: string
  duration: string
  difficulty: "Easy" | "Moderate" | "Advanced" | "Moderate to Difficult" | "High" | "Easy to Moderate"
  price: number
  maxGroupSize: number
  minAge: number
  highlights: string[]
  included: string[]
  notIncluded: string[]
  image: string
  itinerary?: ItineraryItem[]
  dailyItinerary?: { day: number; title: string; description: string; highlights?: string[]; duration?: string }[]
  proTips?: string[]
  pricingTiers?: PricingTier[]
  note?: string
  specialFeatures?: SpecialFeature[]
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
      "Stand at the Roof of North Africa. Conquer Mount Toubkal (4,167m) and witness a sunrise you will never forget—where the rugged Atlas peaks meet the distant golden sands of the Sahara. A fast-paced, life-changing ascent designed for the adventurous spirit.",
    duration: "2 Days",
    difficulty: "Advanced",
    price: 150,
    maxGroupSize: 12,
    minAge: 16,
    highlights: [
      "Summit Mount Toubkal (4,167m) - The Roof of North Africa",
      "Breathtaking sunrise over Atlas peaks and Sahara Desert",
      "Trek through Armed village and spiritual Sidi Chamharouch",
      "3:00 AM star-lit ascent to the summit",
      "Professional certified mountain guide",
    ],
    included: [
      "Round-trip transport between Marrakech and Imlil",
      "Professional certified mountain guide",
      "Mule for luggage transport",
      "1-night accommodation at Toubkal Refuge",
      "All meals during the trek (breakfast, lunch, dinner)",
      "Use of trekking poles and headlamp (optional rental)",
    ],
    notIncluded: ["International flights", "Personal equipment", "Travel insurance", "Tips"],
    image: "/img_guide/guide_04.jpg",
    dailyItinerary: [
      {
        day: 1,
        title: "Imlil to Toubkal Refuge",
        description:
          "Begin your ascent from Imlil village, following ancient paths through the Armed village. Experience the spiritual atmosphere of Sidi Chamharouch, a sacred site where pilgrims have come for centuries. Continue your climb through rugged mountain terrain, arriving at the Toubkal Refuge where you'll rest and prepare for the summit push. The refuge offers warm meals, comfortable accommodation, and stunning views of the surrounding peaks.",
        highlights: ["Armed village exploration", "Sidi Chamharouch spiritual site", "Arrival at Toubkal Refuge"],
      },
      {
        day: 2,
        title: "Summit Day - The Roof of North Africa",
        description:
          "The magic begins at 3:00 AM under a canopy of stars. With headlamps lighting your path, you'll begin the final ascent to Mount Toubkal's summit. As dawn breaks, witness one of the world's most spectacular sunrises—where the rugged Atlas peaks meet the distant golden sands of the Sahara. Standing at 4,167 meters, you'll feel the pride of conquering North Africa's highest peak. After celebrating your achievement, descend back to the refuge for a well-deserved breakfast, then continue down to Imlil where your journey concludes.",
        highlights: [
          "3:00 AM star-lit start",
          "Sunrise at 4,167m summit",
          "Panoramic views of Atlas and Sahara",
          "Pride of reaching the Roof of North Africa",
        ],
      },
    ],
    proTips: [
      "Hydration is key - drink water consistently throughout the trek",
      "Bring a headlamp for the early morning summit ascent",
      "Layer up for the summit chill - temperatures drop significantly at altitude",
      "Start training with elevation gain before your trip",
      "Pack energy snacks for the summit push",
    ],
  },
  "2": {
    id: 2,
    name: "Adventure to Imlil",
    description:
      "Escape the heat of Marrakech for a day of pure mountain air. This isn't just a hike; it's an invitation into the heart of the High Atlas. Walk through emerald-green walnut orchards and hear the roar of cascading waterfalls as you discover the timeless rhythm of Amazigh life.",
    duration: "Full-Day",
    difficulty: "Easy",
    price: 80,
    maxGroupSize: 15,
    minAge: 12,
    highlights: [
      "Journey from the red Haouz plains to snow-capped peaks of Imlil",
      "Emerald-green walnut orchards and cascading waterfalls",
      "Traditional Amazigh lunch on a rooftop overlooking the valley",
      "Authentic Berber village experience",
      "Certified local mountain guide",
    ],
    included: [
      "Round-trip transportation from Marrakech to Imlil (private car or van)",
      "Certified local mountain guide",
      "Traditional Amazigh lunch on a rooftop terrace",
      "Guided hike tailored to your fitness level",
      "Bottled water during the trip",
    ],
    notIncluded: ["International flights", "Personal equipment", "Travel insurance", "Tips", "Additional beverages"],
    image: "/img_montagne/Montagne_hd_imlil.jpg",
    itinerary: [
      {
        time: "08:00",
        title: "Departure from Marrakech",
        description: "Your private vehicle picks you up from your accommodation. Watch the landscape transform as you leave behind the bustling red-earth plains of the Haouz and ascend into the High Atlas Mountains.",
      },
      {
        time: "09:30",
        title: "Arrival in Imlil",
        description: "Arrive in the charming mountain village of Imlil, gateway to Toubkal National Park. Meet your certified local guide and begin your journey into Berber culture.",
      },
      {
        time: "10:00",
        title: "Guided Mountain Walk",
        description: "Embark on a gentle hike through emerald-green walnut orchards, following ancient paths used by local villagers. Listen to the roar of cascading waterfalls and breathe in the crisp mountain air.",
      },
      {
        time: "13:00",
        title: "Traditional Amazigh Lunch",
        description:
          "The highlight of your day: a traditional lunch served on a rooftop terrace overlooking the valley. Savor authentic Berber cuisine while taking in panoramic views of snow-capped peaks and terraced fields. This is more than a meal—it's an immersion into Amazigh hospitality and mountain life.",
      },
      {
        time: "14:30",
        title: "Village Exploration",
        description: "Continue your exploration of Berber villages, learning about local customs, architecture, and the timeless rhythm of mountain life. Your guide shares stories passed down through generations.",
      },
      {
        time: "16:00",
        title: "Return Journey",
        description: "Begin your descent back to Marrakech, carrying with you memories of mountain vistas, authentic encounters, and the warmth of Amazigh hospitality.",
      },
      {
        time: "17:30",
        title: "Arrival in Marrakech",
        description: "Return to your accommodation, refreshed and inspired by your day in the High Atlas Mountains.",
      },
    ],
  },
  // (les autres clés inchangées…)
  "3": {
    id: 3,
    name: "Professional Mountain Trek",
    description:
      "The ultimate Atlas crossing for those who seek the path less traveled. Over 5 days, you will traverse deep juniper forests, stand beneath the highest waterfalls in North Africa, and conquer the legendary Aguelzim Pass before reaching the 4,167m summit. This is more than a trek; it's a professional-grade mountain odyssey.",
    duration: "5 Days",
    difficulty: "Moderate to Difficult",
    price: 270,
    maxGroupSize: 12,
    minAge: 16,
    highlights: [
      "Panoramic Tizi M'Zek Pass (2,489m) with breathtaking views",
      "Highest waterfalls in North Africa at Tamsoult",
      "Conquer the legendary Aguelzim Pass",
      "Reach the 4,167m summit of Mount Toubkal",
      "Deep juniper forests and pristine mountain landscapes",
      "Professional mule team support for comfort",
    ],
    included: [
      "Professional certified mountain guide",
      "Mule team for luggage transportation",
      "4 nights' accommodation in guesthouses and mountain refuges",
      "All meals throughout the trek (breakfast, lunch, dinner)",
      "Return transportation to/from Imlil",
      "Trekking permits and park fees",
    ],
    notIncluded: ["International flights", "Personal equipment", "Travel insurance", "Tips", "Beverages"],
    image: "/img_guide/guide_20.jpg",
    dailyItinerary: [
      {
        day: 1,
        title: "Imlil to Azzaden Valley",
        description:
          "Begin your professional-grade mountain odyssey from Imlil, ascending through terraced fields and traditional Berber villages. Your mule team carries your gear, allowing you to fully immerse yourself in the journey. Arrive in the Azzaden Valley, where you'll experience authentic refuge life—warm hospitality, hearty meals, and the camaraderie of fellow trekkers.",
        highlights: ["Mule team support", "Azzaden Valley arrival", "Refuge life experience"],
      },
      {
        day: 2,
        title: "Azzaden to Tamsoult - The Waterfalls",
        description:
          "Today you'll stand beneath the highest waterfalls in North Africa at Tamsoult. The journey takes you through deep juniper forests, where ancient trees create a cathedral-like atmosphere. The roar of cascading water grows louder as you approach, and the sight of these magnificent falls is a reward for serious trekkers. Your mule team ensures you travel light, making the challenging terrain manageable.",
        highlights: ["Highest waterfalls in North Africa", "Deep juniper forests", "Mule team support"],
      },
      {
        day: 3,
        title: "Tamsoult to Toubkal Refuge via Aguelzim Pass",
        description:
          "Conquer the legendary Aguelzim Pass—a challenging ascent that rewards you with panoramic views of the entire High Atlas range. This is where your training pays off. The mule team follows, carrying your equipment, while you focus on the technical terrain. Arrive at the Toubkal Refuge, where professional-grade facilities await. Refuge life here is comfortable despite the altitude, with warm meals and shared stories of mountain adventures.",
        highlights: ["Aguelzim Pass conquest", "Panoramic High Atlas views", "Toubkal Refuge arrival", "Refuge life"],
      },
      {
        day: 4,
        title: "Summit Day - Mount Toubkal (4,167m)",
        description:
          "The ultimate challenge: reaching the 4,167m summit of Mount Toubkal. An early start under the stars leads to a rewarding final ascent. The panoramic Tizi M'Zek Pass (2,489m) you conquered earlier was preparation for this moment. Stand at the Roof of North Africa, where the Atlas peaks stretch endlessly before you. Your professional guide ensures safety while the mule team waits at the refuge, ready to assist with your descent.",
        highlights: [
          "Mount Toubkal summit (4,167m)",
          "Rewarding final ascent",
          "Panoramic summit views",
          "Professional guide support",
        ],
      },
      {
        day: 5,
        title: "Descent to Imlil",
        description:
          "After celebrating your achievement, begin the descent back to Imlil. The mule team carries your gear, making the journey comfortable. Reflect on your professional-grade mountain odyssey—the juniper forests, the waterfalls, the passes conquered, and the summit reached. This is more than a trek; it's an accomplishment that serious trekkers will remember forever.",
        highlights: ["Comfortable descent with mule support", "Reflection on the journey", "Return to Imlil"],
      },
    ],
  },
  "4": {
    id: 4,
    name: "Azzaden Valley Discovery",
    description:
      "Discover the secret side of the Atlas. While others head straight for the summit, you will wander through untouched Berber villages and fragrant juniper forests. Spend a night in a traditional guesthouse (Gite) where authentic Moroccan hospitality and homemade tagines await you.",
    duration: "2 Days",
    difficulty: "Moderate",
    price: 130,
    maxGroupSize: 12,
    minAge: 14,
    highlights: [
      "Breathtaking Tizi M'Zik Pass (2,480m) with panoramic views",
      "Descent into the lush, untouched Azzaden Valley",
      "Authentic Berber villages off the beaten path",
      "Fragrant juniper forests and pristine landscapes",
      "Traditional guesthouse (Gite) experience with homemade tagines",
      "Authentic Moroccan hospitality in a family-run accommodation",
    ],
    included: [
      "Professional certified mountain guide",
      "Mule team for luggage transport (hike light and enjoy the journey)",
      "1-night accommodation in a traditional Berber guesthouse (Gite)",
      "All meals (2 lunches, 1 dinner, 1 breakfast) with authentic tagines",
      "Return transport to/from Imlil",
      "Trekking permits and park fees",
    ],
    notIncluded: ["International flights", "Personal equipment", "Travel insurance", "Tips", "Beverages"],
    image: "/img_pro_randonnee/Randonee_06.jpg",
    dailyItinerary: [
      {
        day: 1,
        title: "Imlil to Azzaden Valley via Tizi M'Zik Pass",
        description:
          "Begin your journey into the secret side of the Atlas from Imlil. As others rush toward the summit, you'll take the path less traveled. Ascend through fragrant juniper forests, where the scent of ancient trees fills the air. Reach the breathtaking Tizi M'Zik Pass (2,480m), where panoramic views stretch across the High Atlas Mountains. This is where you'll truly understand why this route is a hidden gem. Your mule team carries your luggage, allowing you to fully immerse yourself in the journey. Descend into the lush Azzaden Valley, a verdant paradise untouched by mass tourism. Arrive at your traditional Berber guesthouse (Gite), where authentic Moroccan hospitality awaits. Tonight, savor homemade tagines prepared with recipes passed down through generations, and experience the warmth of mountain hospitality.",
        highlights: [
          "Tizi M'Zik Pass (2,480m) - breathtaking panoramic views",
          "Fragrant juniper forests",
          "Descent into lush Azzaden Valley",
          "Traditional Berber guesthouse (Gite) accommodation",
          "Homemade tagines and authentic hospitality",
        ],
      },
      {
        day: 2,
        title: "Azzaden Valley Exploration and Return to Imlil",
        description:
          "Wake to the sounds of the valley and enjoy a traditional breakfast prepared by your hosts. Explore the untouched Berber villages of the Azzaden Valley, where life moves at a timeless pace. Wander through terraced fields, meet local families, and discover the authentic culture that thrives in these hidden corners of the Atlas. Your guide shares stories of the valley's history and the people who call it home. After a final authentic lunch, begin your return journey to Imlil. The mule team ensures your comfort, carrying your gear as you reflect on the authentic experiences and hidden gems you've discovered—far from the crowded summit trails.",
        highlights: [
          "Exploration of untouched Berber villages",
          "Authentic cultural encounters",
          "Terraced fields and traditional agriculture",
          "Final authentic lunch in the valley",
          "Comfortable return with mule team support",
        ],
      },
    ],
  },
  "5": {
    id: 5,
    name: "Mountain Biking Adventure: Tachedirt to Asni",
    description:
      "Swap your hiking boots for two wheels. Cycle from Tachedirt—one of the highest villages in Africa—through a landscape of terraced fields and ancient stone homes. Experience the thrill of scenic descents and the vibrant culture of the Asni market on this high-altitude biking adventure.",
    duration: "Full-Day",
    difficulty: "Moderate",
    price: 150,
    maxGroupSize: 10,
    minAge: 16,
    highlights: [
      "Cycle from Tachedirt—one of the highest villages in Africa",
      "Scenic descents through terraced fields and ancient stone homes",
      "Vibrant Asni market experience",
      "High-altitude biking adventure with breathtaking views",
      "Safety-first approach with certified local biking guides",
      "Thrilling descents and adrenaline-pumping routes",
    ],
    included: [
      "High-quality mountain bike & helmet (professional-grade equipment)",
      "Certified local biking guide (safety-first approach)",
      "Scenic lunch in Asni with local flavors",
      "Light snack and bottled water during the ride",
      "Personalized tips and insights from your local guide",
      "Support vehicle for safety and equipment transport",
    ],
    notIncluded: ["International flights", "Personal biking gear", "Travel insurance", "Tips", "Additional beverages"],
    image: "/img_guide/guide_24.jpg",
    itinerary: [
      {
        time: "08:00",
        title: "Departure from Marrakech",
        description:
          "Your adventure begins with a scenic drive from Marrakech to Tachedirt, one of the highest villages in Africa. Along the way, your guide briefs you on safety protocols and the day's route. Safety is our priority, and you'll be equipped with high-quality mountain bikes and helmets.",
      },
      {
        time: "09:30",
        title: "Arrival in Tachedirt & Bike Setup",
        description:
          "Arrive in Tachedirt and meet your certified local biking guide. Receive your high-quality mountain bike and helmet, professionally fitted to ensure comfort and safety. Your guide conducts a safety briefing, emphasizing our safety-first approach. Test your bike on a short practice route before the main adventure begins.",
      },
      {
        time: "10:00",
        title: "High-Altitude Biking Adventure Begins",
        description:
          "Start your adrenaline-pumping descent from Tachedirt, cycling through a stunning landscape of terraced fields and ancient stone homes. The route offers thrilling descents with breathtaking views of the High Atlas Mountains. Your guide leads the way, ensuring your safety while you enjoy the fresh mountain air and the freedom of two wheels.",
      },
      {
        time: "12:30",
        title: "Scenic Lunch in Asni",
        description:
          "Arrive in Asni, a vibrant market town nestled in the mountains. Enjoy a scenic lunch featuring local flavors, where you can refuel and experience the authentic culture of the region. This is more than a meal—it's a chance to immerse yourself in the vibrant atmosphere of the Asni market and connect with local life.",
      },
      {
        time: "14:00",
        title: "Asni Market Exploration",
        description:
          "Explore the vibrant Asni market, where local vendors sell everything from fresh produce to traditional crafts. Your guide shares insights into the local culture and helps you navigate this authentic Moroccan market experience. This cultural immersion adds depth to your biking adventure.",
      },
      {
        time: "15:30",
        title: "Return Journey",
        description:
          "After your market exploration, begin your return journey. The support vehicle is available if needed, ensuring your comfort and safety. Reflect on the day's adventure—the adrenaline of the descents, the fresh mountain air, and the authentic cultural experiences you've enjoyed.",
      },
      {
        time: "17:00",
        title: "Arrival in Marrakech",
        description:
          "Return to Marrakech, carrying with you memories of an unforgettable high-altitude biking adventure. You've experienced the thrill of cycling from one of Africa's highest villages, enjoyed scenic descents, and immersed yourself in the vibrant culture of the Atlas Mountains.",
      },
    ],
  },
  "6": {
    id: 6,
    name: "Three-Day Mount Toubkal Expedition",
    description:
      "Go beyond the standard ascent. This three-day expedition is the ultimate way to conquer North Africa's highest peak. Designed for those who want to balance the physical challenge with a deeper connection to the mountains, this trek offers better acclimatization, legendary Berber hospitality, and the most rewarding sunrise views on earth.",
    duration: "3 Days",
    difficulty: "High",
    price: 160,
    maxGroupSize: 12,
    minAge: 16,
    highlights: [
      "Summit Mount Toubkal (4,167m) - North Africa's highest peak",
      "Unforgettable 360-degree panorama over Atlas range, Saharan plains, and Marrakech plateau",
      "Better acclimatization with 2 nights at Toubkal Refuge",
      "Sacred shrine of Sidi Chamharouch - site of deep local significance",
      "Legendary Berber hospitality with dedicated cook",
      "Most rewarding sunrise views on earth",
      "Scenic descent through high-altitude walnut groves and terraced fields",
    ],
    included: [
      "Professional certified mountain guide and dedicated cook",
      "Mule team for all luggage (trek light!)",
      "2 nights at the Toubkal Refuge (Neltner) including all mountain equipment",
      "Full board meals (Berber tagines, fresh salads, and mint tea)",
      "Round-trip private transport from Marrakech",
      "Trekking permits and park fees",
    ],
    notIncluded: ["International flights", "Personal equipment", "Travel insurance", "Tips", "Beverages"],
    image: "/img_guide/guide_17.jpg",
    dailyItinerary: [
      {
        day: 1,
        title: "Journey to the Refuge",
        description:
          "Your expedition begins with a private transfer from Marrakech to Imlil (1,740m), the gateway to the High Atlas. Meet your professional certified mountain guide and mule team, then begin your trek through the lush Ait Mizane Valley. The path takes you to the sacred shrine of Sidi Chamharouch, a site of deep local significance where pilgrims have come for centuries. Feel the spiritual energy of this special place before continuing your steady ascent. The mule team carries all your luggage, allowing you to trek light and fully immerse yourself in the journey. Arrive at the Toubkal Refuge (3,200m), where you'll enjoy legendary Berber hospitality, hearty meals prepared by your dedicated cook, and a night of rest before the summit push.",
        duration: "5 hours of trekking",
        highlights: [
          "Transfer from Marrakech to Imlil (1,740m)",
          "Trek through lush Ait Mizane Valley",
          "Sacred shrine of Sidi Chamharouch",
          "Steady ascent to Toubkal Refuge (3,200m)",
          "Legendary Berber hospitality",
          "Mule team support for all luggage",
        ],
      },
      {
        day: 2,
        title: "The Summit Conquest",
        description:
          "An early alpine start under the stars to reach the 4,167m summit before dawn. This is the moment you've been preparing for. As you ascend, watch the sky transform from deep indigo to brilliant orange. Reach the summit just as the sun breaks the horizon, and experience an unforgettable 360-degree panorama over the Atlas range, the Saharan plains, and the Marrakech plateau. This is the most rewarding sunrise view on earth—a moment that will stay with you forever. After celebrating your achievement and taking in the breathtaking views, begin your descent back to the refuge. Enjoy a well-earned afternoon of rest, savoring Berber tagines, fresh salads, and mint tea prepared by your dedicated cook. Tonight, sleep under the stars, knowing you've conquered North Africa's highest peak.",
        duration: "6 hours of trekking",
        highlights: [
          "Early alpine start under the stars",
          "Summit Mount Toubkal (4,167m) at sunrise",
          "360-degree panorama over Atlas, Sahara, and Marrakech plateau",
          "Most rewarding sunrise views on earth",
          "Well-earned rest at the refuge",
          "Legendary Berber hospitality and meals",
        ],
      },
      {
        day: 3,
        title: "Farewell to the Peaks",
        description:
          "After a final breakfast at the refuge, begin your scenic descent back to Imlil. The journey takes you through high-altitude walnut groves and terraced fields, where you can reflect on your incredible achievement. The mule team continues to carry your gear, making the descent comfortable and allowing you to fully appreciate the beauty of the mountains. Arrive in Imlil for a farewell lunch in the village, where you can share stories with your guide and fellow trekkers. This final meal is a celebration of your expedition—a time to honor the mountains, the people, and the journey you've completed. After lunch, your private transfer returns you to Marrakech, carrying with you memories of an unforgettable three-day expedition and the pride of conquering North Africa's highest peak.",
        duration: "5 hours of trekking",
        highlights: [
          "Scenic descent through high-altitude walnut groves",
          "Terraced fields and mountain landscapes",
          "Farewell lunch in Imlil village",
          "Private transfer back to Marrakech",
          "Reflection on your incredible achievement",
        ],
      },
    ],
    pricingTiers: [
      { groupSize: "2 people", pricePerPerson: 220, currency: "€" },
      { groupSize: "3 people", pricePerPerson: 200, currency: "€" },
      { groupSize: "4+ people", pricePerPerson: 160, currency: "€" },
    ],
  },
  "7": {
    id: 7,
    name: "4-Day Ultimate Sahara Desert Expedition",
    description:
      "Embark on the journey of a lifetime from the vibrant streets of Marrakech to the golden silence of the Sahara. Over four days, you will cross the high peaks of the Atlas, explore ancient movie-set Kasbahs, and ride camels into the heart of the Erg Chebbi dunes for a night under the clearest stars you have ever seen. This is the ultimate Moroccan road trip.",
    duration: "4 Days",
    difficulty: "Easy to Moderate",
    price: 300,
    maxGroupSize: 12,
    minAge: 8,
    highlights: [
      "Cross the spectacular Tichka Pass (2,200m) in the High Atlas",
      "Explore ancient movie-set Kasbahs including UNESCO World Heritage Ait Benhaddou",
      "Ride camels into the heart of the Erg Chebbi dunes",
      "Night under the clearest stars in a traditional Berber desert camp",
      "Visit the dramatic Todra Gorges and lush palm groves",
      "Experience the 'Road of a Thousand Kasbahs'",
      "Visit cinema studios in Ouarzazate (Hollywood of Morocco)",
      "Explore hidden valleys and grand Kasbahs",
    ],
    included: [
      "Private air-conditioned transportation throughout the trip",
      "Professional local driver and guides",
      "3 nights of accommodation (Hotel in Dades, Berber Desert Tent, Hotel in Ait Benhaddou)",
      "Camel trekking experience in Merzouga",
      "Daily breakfasts and dinners, plus traditional desert hospitality",
      "All entrance fees to Kasbahs and historical sites",
    ],
    notIncluded: ["International flights", "Lunches (available at local restaurants)", "Travel insurance", "Tips", "Personal expenses"],
    image: "/img_montagne/Montagne_hd_7.jpg",
    dailyItinerary: [
      {
        day: 1,
        title: "The High Atlas & Thousand Kasbahs",
        description:
          "Your ultimate Moroccan road trip begins with an early departure from the vibrant streets of Marrakech. Your private air-conditioned vehicle takes you across the spectacular Tichka Pass (2,200m), one of the highest mountain passes in North Africa. As you cross the High Atlas, watch the landscape transform from the red-earth plains to snow-capped peaks and back to the golden desert. Arrive in Ouarzazate, known as the 'Hollywood of Morocco,' and visit the historic Taourirt Kasbah, a magnificent example of traditional Berber architecture. Continue your journey along the legendary 'Road of a Thousand Kasbahs,' where ancient fortresses rise from the desert like sandcastles. Arrive at the stunning Dades Gorges, where dramatic rock formations create a breathtaking backdrop. Your first night is spent in a comfortable hotel, where you can reflect on the day's journey and prepare for the desert adventure ahead.",
        duration: "Full day of travel and exploration",
        highlights: [
          "Cross Tichka Pass (2,200m) in the High Atlas",
          "Visit historic Taourirt Kasbah in Ouarzazate",
          "Drive through the 'Road of a Thousand Kasbahs'",
          "Arrive at stunning Dades Gorges",
          "Overnight in comfortable hotel",
        ],
      },
      {
        day: 2,
        title: "Into the Golden Dunes",
        description:
          "After breakfast, continue your journey through the dramatic Todra Gorges, where towering limestone cliffs create a natural cathedral. Travel through lush palm groves and traditional Berber villages, experiencing the contrast between the green oases and the golden desert beyond. Reach Merzouga, the gateway to the Erg Chebbi dunes, where your desert adventure truly begins. Here, you'll meet your camel caravan and begin a magical ride across the golden dunes. As the sun sets, the dunes transform into a sea of orange and gold, creating one of the most spectacular landscapes on earth. Arrive at your traditional Berber desert camp, nestled among the dunes. Tonight, enjoy a night of music and hospitality in your desert tent, where traditional Berber musicians play under the stars. The sky above is the clearest you have ever seen—a blanket of stars so bright you can almost touch them. This is the Sahara as it was meant to be experienced.",
        duration: "Full day including camel trek and desert camp",
        highlights: [
          "Visit dramatic Todra Gorges",
          "Travel through lush palm groves",
          "Camel trek across Erg Chebbi dunes at sunset",
          "Traditional Berber desert camp experience",
          "Night under the clearest stars",
          "Traditional music and hospitality",
        ],
      },
      {
        day: 3,
        title: "Cinema History & Ancient Citadels",
        description:
          "Wake up early for a breathtaking desert sunrise—a moment of pure magic as the first light touches the golden dunes. After a traditional breakfast in the desert, enjoy a camel ride back to Merzouga, where your vehicle awaits. Today, you'll travel toward the world-famous Ait Benhaddou Kasbah, a UNESCO World Heritage site and one of Morocco's most iconic locations. This ancient citadel has served as a filming location for countless Hollywood epics, including 'Gladiator,' 'Game of Thrones,' and 'Lawrence of Arabia.' Walk through its ancient streets and imagine the stories that have unfolded here over centuries. Continue to Ouarzazate, where you'll visit a cinema studio and learn about Morocco's role as a major film production destination. Your overnight stay is in a comfortable hotel, where you can reflect on the day's cinematic history and ancient wonders.",
        duration: "Full day of cultural and historical exploration",
        highlights: [
          "Breathtaking desert sunrise",
          "Camel ride back from desert camp",
          "Visit UNESCO World Heritage Ait Benhaddou Kasbah",
          "Explore filming locations of Hollywood epics",
          "Visit cinema studios in Ouarzazate",
          "Overnight in comfortable hotel",
        ],
      },
      {
        day: 4,
        title: "Hidden Valleys & Return",
        description:
          "Your final day begins with exploration of the Ounilla Valley, a hidden gem of the Atlas Mountains. This scenic valley offers a peaceful contrast to the desert landscapes you've experienced. Visit the grand Kasbah of Glaoui in Telouete, a magnificent example of traditional architecture that tells the story of Morocco's rich history. This impressive fortress showcases the wealth and power of the Glaoui dynasty. After your visit, enjoy a scenic final drive back to Marrakech, crossing the High Atlas one more time. As you descend into the city, reflect on your incredible journey—from the golden dunes of the Sahara to ancient Kasbahs, from desert camps to mountain passes. Arrive in Marrakech in the evening, concluding your ultimate Sahara expedition with memories that will last a lifetime. This has been more than a road trip—it's been a journey through the heart of Morocco.",
        duration: "Full day returning to Marrakech",
        highlights: [
          "Explore hidden Ounilla Valley",
          "Visit grand Kasbah of Glaoui in Telouete",
          "Scenic drive back across High Atlas",
          "Return to Marrakech in the evening",
          "Conclusion of ultimate Sahara expedition",
        ],
      },
    ],
    pricingTiers: [
      { groupSize: "2 people", pricePerPerson: 400, currency: "€" },
      { groupSize: "3 people", pricePerPerson: 340, currency: "€" },
      { groupSize: "4+ people", pricePerPerson: 300, currency: "€" },
    ],
    note: "A 3-day compact version is also available upon request.",
  },
  "8": {
    id: 8,
    name: "Sidi Chamharouch: The Sacred Shrine Trek",
    description:
      "Step into a world of myth and mountain beauty. This trek follows the classic route toward Mount Toubkal, leading you to the mysterious shrine of Sidi Chamharouch—the legendary 'King of the Jinns.' Whether you are seeking spiritual curiosity or simply the finest views of the Toubkal massif without the grueling summit climb, this journey offers a perfect balance of culture, waterfalls, and high-altitude scenery.",
    duration: "6 Hours",
    difficulty: "Moderate",
    price: 60,
    maxGroupSize: 12,
    minAge: 8,
    highlights: [
      "Visit the legendary shrine of Sidi Chamharouch - the 'King of the Jinns'",
      "Panoramic views of the Toubkal massif without the summit climb",
      "Discover hidden mountain waterfalls along the trail",
      "Experience the vibrant atmosphere of a pre-Islamic pilgrimage site",
      "Witness the famous white boulder marking the sacred shrine",
      "Perfect balance of culture, spirituality, and high-altitude scenery",
      "600m ascent through rugged Atlas landscapes",
    ],
    included: [
      "Certified local mountain guide with deep knowledge of local myths",
      "Complete picnic lunch by the stream",
      "Round-trip guided experience from Imlil",
      "All necessary permits and park fees",
    ],
    notIncluded: ["International flights", "Personal equipment", "Travel insurance", "Tips", "Mule hire (available for additional fee)"],
    image: "/img_montagne/Montagne_hd_imlil.jpg",
    itinerary: [
      {
        time: "08:00",
        title: "The Ascent from Imlil",
        description:
          "Your spiritual and cultural journey begins in Imlil village, the gateway to the High Atlas. Meet your certified local mountain guide, who possesses deep knowledge of the local myths and legends surrounding Sidi Chamharouch. Begin a steady climb through rugged Atlas landscapes, following the classic route toward Mount Toubkal. As you ascend, enjoy panoramic views of the Toubkal massif unfolding before you. The trail reveals hidden mountain waterfalls cascading down the rocky slopes, creating a soundtrack of nature's music. This 600m ascent offers the finest views without the grueling summit climb, making it accessible to those seeking mountain beauty and cultural immersion.",
      },
      {
        time: "11:30",
        title: "The White Boulder of Sidi Chamharouch",
        description:
          "Arrive at the famous pre-Islamic Marabou shrine, marked by a massive boulder painted white—a beacon visible from the trail below. This is the mysterious shrine of Sidi Chamharouch, the legendary 'King of the Jinns.' Step into a world where myth meets mountain beauty. Witness the vibrant atmosphere of this pilgrimage site, where ancient traditions meet high-altitude serenity. Your guide shares the deep knowledge of local myths surrounding this sacred place, explaining its significance in Berber culture and Islamic tradition. Feel the spiritual energy of this legendary site, where pilgrims have come for centuries seeking blessings and protection. The shrine sits dramatically against the backdrop of the Toubkal massif, creating one of the most photogenic and spiritually significant locations in the High Atlas.",
      },
      {
        time: "13:00",
        title: "A Tranquil Break",
        description:
          "Enjoy a picnic lunch specifically prepared for you, featuring traditional Moroccan flavors. Your guide will find a peaceful spot next to a mountain stream, where the sound of flowing water creates a truly relaxing atmosphere. This is more than a meal—it's a moment to reflect on the spiritual journey you've undertaken, surrounded by the natural beauty of the High Atlas. Take in the views of the Toubkal massif while savoring your lunch, connecting with both the cultural and natural wonders of this special place.",
      },
      {
        time: "14:30",
        title: "Return to Imlil",
        description:
          "Begin your descent back to Imlil via the same scenic route, allowing you to appreciate the landscapes from a different perspective. The return journey offers new views and a chance to reflect on the spiritual and cultural experience you've had. Arrive in Imlil in the late afternoon, carrying with you memories of the legendary shrine, the panoramic mountain views, and the perfect balance of culture, waterfalls, and high-altitude scenery you've experienced.",
      },
    ],
    specialFeatures: [
      {
        title: "Family Friendly Option",
        description:
          "Families can opt for a shorter 3.5-hour version starting from the police post below Aremd. This makes the trek more accessible for families with children or those seeking a gentler experience while still reaching the sacred shrine.",
        icon: "Users",
      },
      {
        title: "Mule Transport Available",
        description:
          "Mules are available for hire for children or adults who prefer a more relaxed ride up to the shrine. This option allows everyone to experience the spiritual journey to Sidi Chamharouch, regardless of fitness level or age.",
        icon: "Mountain",
      },
    ],
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
            <Card className="border-orange-200 overflow-hidden shadow-lg">
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge
                    className={`text-white ${
                      offer.difficulty === "Easy"
                        ? "bg-green-600"
                        : offer.difficulty === "Easy to Moderate"
                        ? "bg-green-500"
                        : offer.difficulty === "Easy to Moderate"
                        ? "bg-green-500"
                        : offer.difficulty === "Moderate"
                        ? "bg-yellow-600"
                        : offer.difficulty === "Moderate to Difficult"
                        ? "bg-orange-600"
                        : offer.difficulty === "High"
                        ? "bg-red-700"
                        : "bg-red-600"
                    }`}
                  >
                    {offer.difficulty}
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">{offer.name}</h2>
                  <p className="text-orange-200 text-lg drop-shadow-md">
                    {offer.duration} {offer.duration.includes("Day") ? "Adventure" : "Experience"}
                  </p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-orange-900">{offer.name}</CardTitle>
                <CardDescription className="text-orange-700 text-base text-lg leading-relaxed">
                  {offer.description}
                </CardDescription>
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

                <div className="space-y-6">
                  {/* Bucket List Highlight for Offer 1 */}
                  {offer.id === 1 && (
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-6 text-white shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="bg-white/20 rounded-full p-3">
                            <Star className="h-8 w-8 text-white fill-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">A Bucket List Experience</h3>
                          <p className="text-purple-100 text-lg leading-relaxed">
                            This is the most popular tour for a reason. Stand at the Roof of North Africa and witness a
                            sunrise where the rugged Atlas peaks meet the distant golden sands of the Sahara. A
                            fast-paced, life-changing ascent designed for the adventurous spirit. This is more than a
                            trek—it's a moment you'll remember forever.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Professional Trek Highlight for Offer 3 */}
                  {offer.id === 3 && (
                    <div className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg p-6 text-white shadow-lg border-2 border-slate-600">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="bg-white/20 rounded-full p-3">
                            <Mountain className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">A Professional-Grade Mountain Odyssey</h3>
                          <p className="text-slate-200 text-lg leading-relaxed">
                            For serious trekkers seeking the path less traveled. This is more than a trek—it's a
                            professional-grade mountain odyssey. With mule team support making the difficult terrain
                            comfortable, you'll traverse deep juniper forests, stand beneath North Africa's highest
                            waterfalls, and conquer legendary passes before reaching the 4,167m summit.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Sacred Shrine Trek Highlight for Offer 8 */}
                  {offer.id === 8 && (
                    <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-lg p-6 text-white shadow-lg border-2 border-indigo-400">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="bg-white/20 rounded-full p-3">
                            <Landmark className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">A Spiritual & Cultural Journey</h3>
                          <p className="text-indigo-100 text-lg leading-relaxed">
                            Step into a world of myth and mountain beauty. This trek leads you to the mysterious shrine of
                            Sidi Chamharouch—the legendary 'King of the Jinns.' Whether you seek spiritual curiosity or
                            simply the finest views of the Toubkal massif without the grueling summit climb, this journey
                            offers a perfect balance of culture, waterfalls, and high-altitude scenery.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Ultimate Sahara Expedition Highlight for Offer 7 */}
                  {offer.id === 7 && (
                    <div className="bg-gradient-to-r from-amber-700 to-yellow-700 rounded-lg p-6 text-white shadow-lg border-2 border-amber-500">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="bg-white/20 rounded-full p-3">
                            <Star className="h-8 w-8 text-white fill-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">The Ultimate Moroccan Road Trip</h3>
                          <p className="text-amber-100 text-lg leading-relaxed">
                            Embark on the journey of a lifetime from the vibrant streets of Marrakech to the golden
                            silence of the Sahara. Over four days, cross the high peaks of the Atlas, explore ancient
                            movie-set Kasbahs, and ride camels into the heart of the Erg Chebbi dunes for a night under
                            the clearest stars you have ever seen. This is our most comprehensive desert journey—the
                            ultimate Moroccan adventure.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Three-Day Expedition Highlight for Offer 6 */}
                  {offer.id === 6 && (
                    <div className="bg-gradient-to-r from-red-700 to-orange-700 rounded-lg p-6 text-white shadow-lg border-2 border-red-500">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="bg-white/20 rounded-full p-3">
                            <Mountain className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">The Ultimate Summit Expedition</h3>
                          <p className="text-red-100 text-lg leading-relaxed">
                            Go beyond the standard ascent. This three-day expedition is the ultimate way to conquer North
                            Africa's highest peak. With better acclimatization, legendary Berber hospitality, and the most
                            rewarding sunrise views on earth, this trek balances physical challenge with a deeper connection
                            to the mountains. Designed for those who want more than just a summit—they want an experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Authenticity & Hidden Gems Highlight for Offer 4 */}
                  {offer.id === 4 && (
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-6 text-white shadow-lg border-2 border-emerald-400">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="bg-white/20 rounded-full p-3">
                            <Sparkles className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">Authenticity & Hidden Gems</h3>
                          <p className="text-emerald-100 text-lg leading-relaxed">
                            Discover the secret side of the Atlas. While others head straight for the summit, you'll
                            wander through untouched Berber villages and fragrant juniper forests. Experience authentic
                            Moroccan hospitality in a traditional guesthouse (Gite) where homemade tagines and genuine
                            warmth await. This is the path less traveled—where authenticity meets adventure.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Adrenaline & Fresh Air Highlight for Offer 5 */}
                  {offer.id === 5 && (
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-6 text-white shadow-lg border-2 border-cyan-400">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="bg-white/20 rounded-full p-3">
                            <Bike className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">Adrenaline & Fresh Air</h3>
                          <p className="text-cyan-100 text-lg leading-relaxed">
                            Swap your hiking boots for two wheels. This high-altitude biking adventure takes you from
                            Tachedirt—one of the highest villages in Africa—through terraced fields and ancient stone
                            homes. Experience the thrill of scenic descents, the freedom of fresh mountain air, and the
                            vibrant culture of the Asni market. Perfect for active travelers seeking an adrenaline rush
                            with a cultural twist.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Special Highlight for Traditional Lunch */}
                  {offer.id === 2 && (
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-6 text-white shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="bg-white/20 rounded-full p-3">
                            <UtensilsCrossed className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">Traditional Amazigh Lunch Experience</h3>
                          <p className="text-orange-100 text-lg leading-relaxed">
                            The crown jewel of your day: savor authentic Berber cuisine on a rooftop terrace
                            overlooking the valley. This isn't just a meal—it's an immersion into Amazigh hospitality,
                            where every dish tells a story and every view takes your breath away. Watch the snow-capped
                            peaks while tasting flavors passed down through generations.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pro Tips Section for Offer 1 */}
                  {offer.proTips && offer.proTips.length > 0 && (
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-300 shadow-lg">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center space-x-2">
                        <Star className="h-6 w-6 text-blue-600" />
                        <span>Pro Tips for Your Summit</span>
                      </h3>
                      <div className="space-y-3">
                        {offer.proTips.map((tip, index) => (
                          <div key={index} className="flex items-start space-x-3 bg-white/60 rounded-lg p-4">
                            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                              {index + 1}
                            </div>
                            <p className="text-blue-900 font-medium leading-relaxed">{tip}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Daily Itinerary Section for Multi-Day Treks */}
                  {offer.dailyItinerary && offer.dailyItinerary.length > 0 && (
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 border border-orange-200 shadow-sm">
                      <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center space-x-2">
                        <Mountain className="h-6 w-6" />
                        <span>Your Adventure Itinerary</span>
                      </h3>
                      <div className="space-y-8">
                        {offer.dailyItinerary.map((day, index) => (
                          <div key={index} className="relative">
                            <div className="flex items-start space-x-4">
                              <div className="flex-shrink-0">
                                <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                  Day {day.day}
                                </div>
                              </div>
                              <div className="flex-1 bg-white rounded-lg p-6 border border-orange-200 shadow-sm">
                                <div className="flex items-center justify-between mb-3">
                                  <h4 className="text-xl font-bold text-orange-900">{day.title}</h4>
                                  {day.duration && (
                                    <Badge className="bg-orange-600 text-white">{day.duration}</Badge>
                                  )}
                                </div>
                                <p className="text-orange-700 leading-relaxed mb-4 text-base">{day.description}</p>
                                {day.highlights && day.highlights.length > 0 && (
                                  <div className="mt-4 pt-4 border-t border-orange-200">
                                    <h5 className="font-semibold text-orange-900 mb-2 text-sm uppercase tracking-wide">
                                      Day Highlights
                                    </h5>
                                    <ul className="space-y-2">
                                      {day.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="flex items-start space-x-2 text-orange-700 text-sm">
                                          <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                          <span>{highlight}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                            {index < offer.dailyItinerary!.length - 1 && (
                              <div className="absolute left-8 top-16 w-0.5 h-8 bg-orange-300"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Detailed Itinerary Section for Offer 2 and 5 */}
                  {offer.itinerary && offer.itinerary.length > 0 && (
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6 border border-orange-200 shadow-sm">
                      <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center space-x-2">
                        {offer.id === 5 ? (
                          <>
                            <Bike className="h-6 w-6" />
                            <span>Your Biking Adventure</span>
                          </>
                        ) : (
                          <>
                            <Clock className="h-6 w-6" />
                            <span>Your Day in the High Atlas</span>
                          </>
                        )}
                      </h3>
                      <div className="space-y-6">
                        {offer.itinerary.map((item, index) => (
                          <div
                            key={index}
                            className={`relative pl-8 pb-6 ${
                              index < offer.itinerary!.length - 1 ? "border-l-2 border-orange-300" : ""
                            }`}
                          >
                            <div className="absolute left-0 top-0 w-4 h-4 bg-orange-600 rounded-full border-2 border-white transform -translate-x-[9px]"></div>
                            <div className="flex items-start space-x-4">
                              <div className="flex-shrink-0">
                                <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                  {item.time}
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-orange-900 text-lg mb-2">{item.title}</h4>
                                {item.title.includes("Lunch") && (
                                  <div className="mb-3 flex items-center space-x-2 text-orange-700 bg-orange-100 px-3 py-2 rounded-lg inline-flex">
                                    <UtensilsCrossed className="h-5 w-5 text-orange-600" />
                                    <span className="font-semibold italic">A highlight of your journey</span>
                                  </div>
                                )}
                                {(item.title.includes("Biking") || item.title.includes("Bike") || item.title.includes("Cycle")) && offer.id === 5 && (
                                  <div className="mb-3 flex items-center space-x-2 text-cyan-700 bg-cyan-100 px-3 py-2 rounded-lg inline-flex">
                                    <Bike className="h-5 w-5 text-cyan-600" />
                                    <span className="font-semibold italic">Adrenaline & adventure</span>
                                  </div>
                                )}
                                <p className="text-orange-700 leading-relaxed">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-orange-900 mb-3 text-lg flex items-center space-x-2">
                      {offer.id === 5 ? (
                        <>
                          <Bike className="h-5 w-5" />
                          <span>Adventure Highlights</span>
                        </>
                      ) : (
                        <span>Journey Highlights</span>
                      )}
                    </h4>
                    <ul className="space-y-2">
                      {offer.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-2 text-orange-700">
                          {offer.id === 5 ? (
                            <Bike className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          )}
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-orange-900 mb-3 text-lg flex items-center space-x-2">
                        {offer.id === 5 ? <Bike className="h-5 w-5 text-cyan-600" /> : null}
                        <span>What's Included</span>
                      </h4>
                      <ul className="space-y-2">
                        {offer.included.map((item, index) => {
                          const isBikeItem = offer.id === 5 && (item.toLowerCase().includes("bike") || item.toLowerCase().includes("helmet"));
                          return (
                            <li key={index} className="flex items-start space-x-2 text-orange-700 text-sm">
                              {isBikeItem ? (
                                <Bike className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                              ) : (
                                <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              )}
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-900 mb-3 text-lg">Not Included</h4>
                      <ul className="space-y-2">
                        {offer.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2 text-orange-700 text-sm">
                            <div className="w-4 h-4 border-2 border-orange-400 rounded-sm flex-shrink-0 mt-0.5"></div>
                            <span className="leading-relaxed">{item}</span>
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
            {/* Pricing Table for Offer 6 */}
            {offer.pricingTiers && offer.pricingTiers.length > 0 && (
              <Card className="border-orange-200 sticky top-4">
                <CardHeader>
                  <CardTitle className="text-orange-900">Group Pricing</CardTitle>
                  <CardDescription className="text-orange-700">Starting from ${offer.price} per person</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {offer.pricingTiers.map((tier, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200"
                      >
                        <span className="font-medium text-orange-900">{tier.groupSize}</span>
                        <span className="font-bold text-orange-700">
                          {tier.pricePerPerson}
                          {tier.currency || "€"}/Person
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <p className="text-sm text-orange-600 text-center mb-2">
                      Prices vary by group size. Contact us for custom group rates.
                    </p>
                    {offer.note && (
                      <p className="text-sm text-orange-700 text-center font-medium italic">{offer.note}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

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
                    {offer.pricingTiers && offer.pricingTiers.length > 0 ? (
                      <div className="mb-2">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-orange-700">Starting from:</span>
                          <span className="font-semibold text-orange-900">${offer.price}/person</span>
                        </div>
                        <p className="text-xs text-orange-600 italic">
                          Final price depends on group size. See pricing table above.
                        </p>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-orange-700">Price per person:</span>
                        <span className="font-semibold text-orange-900">${offer.price}</span>
                      </div>
                    )}
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
