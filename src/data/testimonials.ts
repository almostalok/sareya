export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  verified: boolean;
  productMentioned: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Biting into Sareya's Thekua took me back twenty years to our family home in Muzaffarpur. The crunch, the unmistakable warmth of unrefined jaggery and crushed saunf—it feels cooked by hand in someone's courtyard, not a factory line.",
    author: "Ananya Kashyap",
    location: "South Extension, New Delhi",
    verified: true,
    productMentioned: "Heirloom Thekua",
    rating: 5,
  },
  {
    id: "2",
    quote: "I replaced my synthetic whey protein shakes with Sareya's stone-ground Sattu every morning. The digestion is effortless, the toasted aroma is incredible, and the packaging looks gorgeous on my kitchen shelf.",
    author: "Vikramaditya Roy",
    location: "Indiranagar, Bengaluru",
    verified: true,
    productMentioned: "Roasted Chana Sattu",
    rating: 5,
  },
  {
    id: "3",
    quote: "We gifted 50 Bihar Heritage Boxes to our corporate clients for Diwali. Everyone messaged asking where we found it. Modern Indian gifting done with genuine cultural pride and zero kitsch.",
    author: "Pooja Shrivastava",
    location: "Bandra West, Mumbai",
    verified: true,
    productMentioned: "The Bihar Heritage Gift Box",
    rating: 5,
  },
  {
    id: "4",
    quote: "Finding authentic makhana with this grade of crispness and size in London was impossible until my sister brought Sareya's Phool Makhaana. You can taste the purity of the Mithila wetlands.",
    author: "Rohan Jha",
    location: "Canary Wharf, London",
    verified: true,
    productMentioned: "Mithila Phool Makhaana",
    rating: 5,
  },
  {
    id: "5",
    quote: "The Champaran Litti Mix makes Sunday lunches foolproof. Just knead into dough with a drop of mustard oil and roast. Real smoky, tangy, pungent Bihari soul food.",
    author: "Dr. Alok Verma",
    location: "Patna, Bihar",
    verified: true,
    productMentioned: "Champaran Litti Masala Mix",
    rating: 5,
  },
];
