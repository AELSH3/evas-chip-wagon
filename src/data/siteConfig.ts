/**
 * ============================================================
 * EVA'S CHIP WAGON — SITE CONFIGURATION
 * ============================================================
 * Edit this file to update business info across the entire site.
 * ============================================================
 */

export const siteConfig = {
  businessName: "Eva's Chip Wagon",
  tagline: "Polish Heart, Canadian Soul",
  heroHeadline: "Polish Heart, Canadian Soul",
  heroSubheadline:
    "Fresh-cut fries, homemade perogies, and classic chip wagon favourites — all made with love at our family-run spot on Bank Street in Gloucester.",

  address: {
    street: "5496 Bank Street",
    city: "Gloucester",
    province: "ON",
    postalCode: "K1X 1G9",
  },
  phone: "(613) 822-7603",
  priceRange: "CA$5–15",

  links: {
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=Eva's+Chip+Wagon+5496+Bank+Street+Gloucester+ON+K1X+1G9",
    googleMapsEmbed:
      "https://www.google.com/maps?q=5496+Bank+Street,+Gloucester,+ON+K1X+1G9&output=embed",
    facebook: "https://www.facebook.com/EvasChipWagon/",
  },

  paymentNotice:
    "Cash and cards accepted. A small surcharge may apply to credit card payments.",

  hours: [
    { day: "Monday", time: "11:00 a.m. – 7:00 p.m.", closed: false },
    { day: "Tuesday", time: "11:00 a.m. – 7:00 p.m.", closed: false },
    { day: "Wednesday", time: "11:00 a.m. – 7:00 p.m.", closed: false },
    { day: "Thursday", time: "11:00 a.m. – 7:00 p.m.", closed: false },
    { day: "Friday", time: "11:00 a.m. – 7:00 p.m.", closed: false },
    { day: "Saturday", time: "11:00 a.m. – 7:00 p.m.", closed: false },
    { day: "Sunday", time: "12:00 p.m. – 5:00 p.m.", closed: false },
  ],
  hoursDisclaimer:
    "Hours may change during holidays or due to weather. Please check our Facebook page before visiting.",

  menu: {
    priceNote:
      "Prices are approximate and may vary. Please confirm with staff.",
    sections: [
      {
        title: "Poutines",
        items: [
          {
            name: "Classic Poutine",
            price: "$10.00",
            description:
              "Fresh-cut fries, real St. Albert cheese curds, and hearty homemade gravy.",
          },
          {
            name: "Bacon & Fried Onion Poutine",
            price: "$14.00",
            description:
              "Loaded with crispy bacon and caramelized fried onions over our classic poutine.",
            tag: "Fan Favourite",
          },
          {
            name: "Hamburger Poutine",
            price: "$14.00",
            description:
              "Seasoned ground beef piled on top of fresh fries, curds, and gravy.",
          },
          {
            name: "Pierogi Poutine",
            price: "$15.00",
            description:
              "A Polish-Canadian mashup — homemade perogies on a bed of poutine.",
            tag: "Polish Fusion",
          },
          {
            name: "Popcorn Chicken Poutine",
            price: "$15.00",
            description:
              "Crispy popcorn chicken tossed over fresh-cut fries, curds, and gravy.",
          },
        ],
      },
      {
        title: "Burgers",
        items: [
          {
            name: "Hamburger",
            price: "$8.00",
            description: "Classic grilled burger on a fresh bun.",
          },
          {
            name: "Cheeseburger",
            price: "$9.00",
            description: "Our hamburger topped with melted cheese.",
          },
          {
            name: "Crispy Chicken Burger",
            price: "$10.00",
            description: "Breaded chicken breast, crispy and golden, on a bun.",
          },
          {
            name: "Pork Tenderloin Burger",
            price: "$10.00",
            description:
              "Tender, breaded pork tenderloin served on a fresh bun.",
          },
          {
            name: "BBQ Cheeseburger with St. Albert Curds",
            price: "$12.00",
            description:
              "Smoky BBQ sauce, melted St. Albert cheese curds on a grilled burger.",
            tag: "Popular",
          },
        ],
      },
      {
        title: "Polish Specialties",
        items: [
          {
            name: "Homemade Meat Perogies (6 pcs)",
            price: "$10.00",
            description:
              "Hand-pinched perogies filled with seasoned meat, served with onions and sour cream.",
            tag: "Homemade",
          },
          {
            name: "Cheddar Perogies (6 pcs)",
            price: "$10.00",
            description:
              "Classic potato and cheddar filling in a homemade dough.",
            tag: "Homemade",
          },
          {
            name: "Sauerkraut & Mushroom Perogies (6 pcs)",
            price: "$10.00",
            description:
              "Traditional Polish filling of tangy sauerkraut and earthy mushrooms.",
            tag: "Homemade",
          },
          {
            name: "Large Cabbage Rolls (2 pcs)",
            price: "$10.00",
            description:
              "Hearty cabbage rolls stuffed with meat and rice in a savoury tomato sauce.",
            tag: "Homemade",
          },
        ],
      },
      {
        title: "From the Fryer",
        items: [
          {
            name: "Fresh-Cut Fries (Small)",
            price: "$5.00",
            description: "Cut fresh daily and fried in peanut oil until golden.",
          },
          {
            name: "Fresh-Cut Fries (Large)",
            price: "$8.00",
            description: "A generous portion of our hand-cut, crispy fries.",
          },
          {
            name: "Onion Rings",
            price: "$7.00",
            description: "Thick-cut, golden-battered onion rings.",
          },
          {
            name: "Chicken Fingers & Fries",
            price: "$12.00",
            description:
              "Crispy chicken fingers served with fresh-cut fries.",
          },
          {
            name: "Fish and Chips",
            price: "$14.00",
            description:
              "Battered fish fillet served with fresh-cut fries and tartar sauce.",
            tag: "Popular",
          },
          {
            name: "Pogo & Fries",
            price: "$8.00",
            description: "A Canadian classic corn dog served with fries.",
          },
          {
            name: "Jumbo Dog & Fries",
            price: "$9.00",
            description: "An oversized hot dog served with a side of fries.",
          },
        ],
      },
      {
        title: "Wraps & More",
        note: "Drinks available at the window.",
        items: [
          {
            name: "Crispy Chicken Wrap",
            price: "$12.00",
            description:
              "Crispy breaded chicken with fresh toppings in a soft wrap.",
          },
          {
            name: "Pop (can)",
            price: "$2.00",
          },
          {
            name: "Water",
            price: "$2.00",
          },
        ],
      },
    ],
  },

  reviews: {
    rating: 4.9,
    totalReviews: 264,
    testimonials: [
      {
        text: "If you're looking for authentic Polish Food with a Canadian twist this is the place to be. Whether it's a Bacon Fried Onion Poutine or Homemade Meat, Cheddar or Sauerkraut and Mushroom Pierogies this small but wholesome food truck has it all.",
        author: "Polish Food Fan",
      },
      {
        text: "If you're looking for the best burger and poutine in Ottawa, look no further than Eva's Chip Wagon. The burgers are always fresh, juicy, and cooked perfectly. The poutine is hands down one of the best around.",
        author: "Burger Lover",
      },
      {
        text: "My stepfather and I picked lunch up today and it was so nice to find a new local place! We got the fish and chips, poutine, and onion rings and it was sooo good!",
        author: "New Local",
      },
      {
        text: "Currently my favourite poutine in Ottawa. A very hearty, meaty, flavourful gravy over delicious crispy fries and St. Albert cheese curds. I now rate other poutines on a scale of Eva's Chip Wagon.",
        author: "Poutine Connoisseur",
      },
      {
        text: "One of the best burger and fries I've had in years. Restaurants charge the same price or more for lower quality food.",
        author: "Happy Customer",
      },
      {
        text: "Friendly service, amazing food and a huge selection. Definitely not your average chip stand.",
        author: "Regular Visitor",
      },
    ],
  },

  featuredDishes: [
    {
      name: "Bacon & Fried Onion Poutine",
      label: "Fan Favourite",
      description:
        "The crowd favourite — crispy bacon and caramelized onions over fresh fries, St. Albert curds, and rich gravy.",
    },
    {
      name: "Homemade Perogies",
      label: "Polish Classic",
      description:
        "Hand-pinched perogies made from scratch with traditional Polish fillings, served with sour cream and onions.",
    },
    {
      name: "Crispy Chicken Burger",
      label: "Popular",
      description:
        "Golden, crispy breaded chicken on a fresh bun — one of the most-ordered items at the wagon.",
    },
    {
      name: "Fish and Chips",
      label: "Classic",
      description:
        "Battered fish fillet with our signature fresh-cut fries — a chip wagon staple done right.",
    },
  ],

  faq: [
    {
      q: "Do you take credit cards?",
      a: "Yes, we accept both cash and cards. Please note a small surcharge may apply to credit card payments.",
    },
    {
      q: "Are you open in winter?",
      a: "Our hours may be seasonal. Please check our Facebook page for the most up-to-date schedule, especially during colder months.",
    },
    {
      q: "What oil do you use for frying?",
      a: "We use peanut oil for our fresh-cut fries and fried items. Please let us know if you have a peanut allergy before ordering.",
    },
    {
      q: "Do you have vegetarian options?",
      a: "Yes! Our cheddar perogies and sauerkraut & mushroom perogies are great vegetarian choices, along with fresh-cut fries and onion rings.",
    },
    {
      q: "Are the perogies really homemade?",
      a: "Absolutely. All our perogies are hand-pinched and made from scratch using traditional Polish recipes.",
    },
    {
      q: "Is there seating available?",
      a: "Yes, we have outdoor picnic tables where you can enjoy your meal. It's a great spot to sit, eat, and relax.",
    },
    {
      q: "Can I bring my dog?",
      a: "Yes! Our outdoor seating area is pet-friendly. We love furry visitors.",
    },
    {
      q: "What cheese curds do you use?",
      a: "We use real St. Albert cheese curds in our poutines — squeaky, fresh, and locally sourced.",
    },
  ],

  seo: {
    title:
      "Eva's Chip Wagon | Polish-Inspired Chip Wagon in Gloucester, Ottawa",
    description:
      "Visit Eva's Chip Wagon at 5496 Bank Street in Gloucester for fresh-cut fries, homemade Polish perogies, loaded poutines, and classic chip wagon fare. Family-run, 4.9 stars on Google.",
  },
} as const;
