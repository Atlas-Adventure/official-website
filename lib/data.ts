export type ItineraryItem = {
  time: string
  title: string
  description: string
}

export type DailyItineraryItem = {
  day: number
  title: string
  description: string
  highlights: string[]
  duration?: string
}

export type PricingTier = {
  groupSize: string
  pricePerPerson: number
  currency?: string
}

export type SpecialFeature = {
  title: string
  description: string
  icon: string
}

export type Offer = {
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
  dailyItinerary?: DailyItineraryItem[]
  proTips?: string[]
  pricingTiers?: PricingTier[]
  note?: string
  specialFeatures?: SpecialFeature[]
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
    image: "/img_montagne/Montagne_hd_8.jpg",
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

export function getOfferById(id: string): Offer | undefined {
  return trekkingOffers[id]
}

export function getAllOffers(): Offer[] {
  return Object.values(trekkingOffers)
}

export function getOffersForHomepage(): Array<{ id: number; name: string; description: string; duration: string; difficulty: string; price: string; highlights: string[]; image: string }> {
  return getAllOffers().map((offer) => ({
    id: offer.id,
    name: offer.name,
    description: offer.description,
    duration: offer.duration,
    difficulty: offer.difficulty,
    price: `$${offer.price}`,
    highlights: offer.highlights.slice(0, 6),
    image: offer.image,
  }))
}
