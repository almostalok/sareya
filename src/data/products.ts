export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "sweets" | "savoury" | "drinks" | "pantry" | "gifting";
  tagline: string;
  description: string;
  story: string;
  price: number;
  originalPrice?: number;
  weight: string;
  rating: number;
  reviewCount: number;
  image: string;
  galleryImages: string[];
  badge?: string;
  region: string;
  ingredients: string[];
  tastingNotes: string[];
  shelfLife: string;
  isBestseller?: boolean;
  isSignature?: boolean;
}

export const products: Product[] = [
  {
    id: "thekua",
    slug: "heirloom-thekua",
    name: "Heirloom Thekua",
    category: "sweets",
    tagline: "Festival favourite, all year round.",
    description: "Crisp, aromatic wheat cookies hand-pressed with traditional wooden moulds, enriched with desi ghee, organic cane jaggery, and crushed fennel.",
    story: "Born in the courtyard hearths of Bihar during Chhath Puja, Thekua is an offering of devotion and slow cooking. Sareya preserves the authentic recipe: coarse stone-ground whole wheat, pure A2 bilona ghee, and jaggery sourced from unrefined sugarcane juice, slow-fried over gentle embers until golden bronze.",
    price: 299,
    originalPrice: 349,
    weight: "350g (Pack of 12)",
    rating: 4.9,
    reviewCount: 148,
    image: "/images/sareya/products/product-thekua.jpg",
    galleryImages: [
      "/images/sareya/products/product-thekua.jpg",
      "/images/sareya/bestsellers/bestseller-thekua.jpg",
      "/images/sareya/story/story-making-thekua.jpg",
    ],
    badge: "Heritage Recipe",
    region: "Magadh & Mithila",
    ingredients: ["Stone-ground Whole Wheat", "Pure Desi Ghee", "Organic Jaggery", "Green Cardamom", "Fennel Seeds (Saunf)"],
    tastingNotes: ["Caramelised Cane Jaggery", "Nutty Toasted Wheat", "Subtle Cooling Fennel"],
    shelfLife: "60 Days in airtight container",
    isSignature: true,
    isBestseller: true,
  },
  {
    id: "gujiya",
    slug: "chashni-mava-gujiya",
    name: "Chashni Mava Gujiya",
    category: "sweets",
    tagline: "Golden crescent parcel of slow-roasted mawa.",
    description: "Delicate pastry crust crimped by hand, filled with slow-cooked khoya, roasted pistachios, Chironji nuts, and infused with saffron cardamom syrup.",
    story: "Every spring and festive evening in Bihar, households gather around the brass thali to crimp crisp crescent moon shells. Sareya's Gujiya uses reduced whole milk mawa slow-roasted for hours with melon seeds and dry fruits, sealed delicately and brushed with fragrant saffron nectar.",
    price: 349,
    originalPrice: 399,
    weight: "400g (Pack of 8)",
    rating: 4.8,
    reviewCount: 112,
    image: "/images/sareya/products/product-gujiya.jpg",
    galleryImages: [
      "/images/sareya/products/product-gujiya.jpg",
      "/images/sareya/bestsellers/bestseller-gujiya.jpg",
      "/images/sareya/social/social-gujiya.jpg",
    ],
    badge: "Seasonal Batch",
    region: "Bhojpur & Tirhut",
    ingredients: ["Refined Wheat & Ghee Crust", "Slow-Roasted Cow Milk Khoya", "Kashmiri Saffron", "Green Cardamom", "California Almonds & Pistachios"],
    tastingNotes: ["Rich Cardamom Milk", "Golden Flaky Pastry", "Saffron Honey Undertones"],
    shelfLife: "21 Days chilled / 14 Days ambient",
    isSignature: true,
    isBestseller: true,
  },
  {
    id: "sattu",
    slug: "roasted-chana-sattu",
    name: "Roasted Chana Sattu",
    category: "pantry",
    tagline: "The superfood powerhouse of the Gangetic plains.",
    description: "Cold stone-ground from hand-selected roasted Bengal gram (chana) with toasted cumin seeds and Himalayan rock salt.",
    story: "Long before protein powders existed, Bihar had Sattu. Farmers, scholars, and wanderers relied on this 100% plant-protein staple for cool endurance under the summer sun. Ground using slow traditional stone chakki to retain enzymes, aroma, and essential dietary fibre.",
    price: 199,
    originalPrice: 229,
    weight: "500g Tin",
    rating: 5.0,
    reviewCount: 220,
    image: "/images/sareya/products/product-sattu.jpg",
    galleryImages: [
      "/images/sareya/products/product-sattu.jpg",
      "/images/sareya/bestsellers/bestseller-sattu.jpg",
      "/images/sareya/social/social-sattu-drink.jpg",
    ],
    badge: "100% Natural Protein",
    region: "Magadh & Nalanda",
    ingredients: ["Slow-Roasted Desi Chana (Bengal Gram)", "Roasted Jeera (Cumin)", "Black Salt (Kala Namak)"],
    tastingNotes: ["Earth-Roasted Gram", "Warm Smoky Cumin", "Savory Umami Finish"],
    shelfLife: "180 Days",
    isSignature: true,
    isBestseller: true,
  },
  {
    id: "makhaana",
    slug: "mithila-phool-makhaana",
    name: "Mithila Phool Makhaana",
    category: "savoury",
    tagline: "GI-tagged giant lotus pops harvested from freshwater ponds.",
    description: "Grade-A jumbo popped lotus seeds gently roasted in cold-pressed mustard oil with red rock salt and freshly cracked black pepper.",
    story: "Over 85% of the world's makhaana comes from the tranquil wetland ponds of Mithila in Northern Bihar. Hand-harvested by generational Mallah community divers from lake beds and toasted over wood-fired pans until they pop like snowy pearls.",
    price: 329,
    originalPrice: 380,
    weight: "200g Resealable Pouch",
    rating: 4.9,
    reviewCount: 89,
    image: "/images/sareya/products/product-makhaana.jpg",
    galleryImages: [
      "/images/sareya/products/product-makhaana.jpg",
      "/images/sareya/ingredients/ingredient-makhaana.jpg",
      "/images/sareya/social/social-bihar-lifestyle.jpg",
    ],
    badge: "GI Tagged Mithila",
    region: "Darbhanga & Madhubani",
    ingredients: ["GI-Certified Mithila Gorgon Nut / Foxnut", "A2 Cold-Pressed Oil", "Sendha Namak (Rock Salt)", "Black Pepper"],
    tastingNotes: ["Airy Crunch", "Subtle Mineral Salt", "Pecan-like Creaminess"],
    shelfLife: "90 Days",
    isSignature: true,
    isBestseller: false,
  },
  {
    id: "litti-mix",
    slug: "champaran-litti-sattu-mix",
    name: "Champaran Litti Masala Mix",
    category: "pantry",
    tagline: "The soul filling of Bihar's iconic charcoal bread.",
    description: "Specially tempered sattu blended with pickled mustard oil, wild carom (ajwain), kalonji, crushed green chillies, and sun-dried mango amchoor.",
    story: "Litti is Bihar's great culinary emblem. The secret to an unforgettable Litti lies entirely in the stuffing: pungent cold-pressed mustard oil, sour mango achar masala, and biting ajwain folded into roasted chana. Sareya packs the chef's dry blend ready to stuff or knead in minutes.",
    price: 249,
    originalPrice: 289,
    weight: "400g Kraft Jar",
    rating: 4.9,
    reviewCount: 164,
    image: "/images/sareya/bestsellers/bestseller-litti-mix.jpg",
    galleryImages: [
      "/images/sareya/bestsellers/bestseller-litti-mix.jpg",
      "/images/sareya/ingredients/ingredient-spices.jpg",
      "/images/sareya/ingredients/ingredient-sattu-powder.jpg",
    ],
    badge: "Iconic Classic",
    region: "Champaran & Bhojpur",
    ingredients: ["Roasted Bengal Gram", "Mustard Oil Vinaigrette Powder", "Ajwain (Carom)", "Mangrela (Kalonji)", "Dry Mango Powder", "Garlic & Green Chilli Flakes"],
    tastingNotes: ["Zesty Mustard Punch", "Warm Ajwain", "Tangy Sun-dried Mango"],
    shelfLife: "120 Days",
    isSignature: false,
    isBestseller: true,
  },
  {
    id: "bihar-gift-box",
    slug: "the-bihar-heritage-box",
    name: "The Bihar Heritage Gift Box",
    category: "gifting",
    tagline: "A curated heirloom treasure of Bihar's celebrated delicacies.",
    description: "An elegant, bespoke keepsake box containing Heirloom Thekua (300g), Roasted Chana Sattu (250g), Mithila Phool Makhaana (150g), and Brass Mould Keepsake.",
    story: "Presented in a tactile burgundy and gold textured gift box with embossed Madhubani line art. Created for Diwali, Chhath, weddings, corporate honors, or sending nostalgic warmth to loved ones around the globe.",
    price: 1199,
    originalPrice: 1450,
    weight: "1.2kg Gift Box",
    rating: 5.0,
    reviewCount: 97,
    image: "/images/sareya/gifting/gifting-bihar-box.jpg",
    galleryImages: [
      "/images/sareya/gifting/gifting-bihar-box.jpg",
      "/images/sareya/social/social-gift-box.jpg",
      "/images/sareya/textures/texture-illustration-pattern.jpg",
    ],
    badge: "Signature Gifting",
    region: "All Bihar Regions",
    ingredients: ["Heirloom Thekua Pack", "Artisanal Roasted Chana Sattu", "Mithila Roasted Makhaana", "Handcrafted Wooden Mould"],
    tastingNotes: ["Festive Sweetness", "Smoky Savoury", "Crisp Lotus Crunch"],
    shelfLife: "60 Days",
    isSignature: false,
    isBestseller: false,
  },
  {
    id: "sattu-drink-can",
    slug: "spiced-sattu-refresher",
    name: "Spiced Sattu Elixir",
    category: "drinks",
    tagline: "Natural electrolytes, cold-brewed with mint and roasted cumin.",
    description: "Chilled ready-to-drink beverage crafted from roasted black chana, rock salt, fresh mint extract, and squeezed lemon juice.",
    story: "The quintessential Bihar street drink bottled in modern recyclable cans. Zero refined sugar, zero preservatives, 8g natural plant protein per can.",
    price: 149,
    originalPrice: 180,
    weight: "330ml Can (Pack of 2)",
    rating: 4.7,
    reviewCount: 63,
    image: "/images/sareya/social/social-sattu-drink.jpg",
    galleryImages: [
      "/images/sareya/social/social-sattu-drink.jpg",
      "/images/sareya/products/product-sattu.jpg",
    ],
    badge: "Ready-to-Drink",
    region: "Patna & Bhagalpur",
    ingredients: ["Roasted Bengal Gram Extract", "Spring Water", "Fresh Mint Juice", "Lemon Juice", "Roasted Cumin", "Kala Namak"],
    tastingNotes: ["Tangy Lemon Zest", "Earthy Gram", "Cooling Spearmint"],
    shelfLife: "90 Days ambient",
    isSignature: false,
    isBestseller: false,
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "sweets", name: "Heritage Sweets" },
  { id: "savoury", name: "Savoury & Snacks" },
  { id: "drinks", name: "Drinks & Elixirs" },
  { id: "pantry", name: "Pantry & Staples" },
  { id: "gifting", name: "Gift Boxes" },
];
