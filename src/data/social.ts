export interface SocialPost {
  id: string;
  image: string;
  caption: string;
  handle: string;
  tag: string;
  likes: string;
}

export const socialPosts: SocialPost[] = [
  {
    id: "social-thekua",
    image: "/images/sareya/social/social-thekua.jpg",
    caption: "The sound of fresh morning thekua cooling on woven brass trays. Pure jaggery, pure ghee, no shortcuts.",
    handle: "@sareyafood",
    tag: "#BiharBeautifullyPacked",
    likes: "1.4k",
  },
  {
    id: "social-sattu-drink",
    image: "/images/sareya/social/social-sattu-drink.jpg",
    caption: "Cold-shaken sattu with mint leaves and roasted cumin on a sultry afternoon. The original natural protein elixir.",
    handle: "@sareyafood",
    tag: "#SattuRefresher",
    likes: "2.1k",
  },
  {
    id: "social-bihar-landscape",
    image: "/images/sareya/social/social-bihar-landscape.jpg",
    caption: "Sunrise across the lotus ponds of North Bihar. Where every seed begins its gentle journey to your table.",
    handle: "@sareyafood",
    tag: "#MithilaRoots",
    likes: "3.5k",
  },
  {
    id: "social-gift-box",
    image: "/images/sareya/social/social-gift-box.jpg",
    caption: "Unboxing our festive keepsake parcel. Handcrafted sweets wrapped in heritage Bihar motifs.",
    handle: "@sareyafood",
    tag: "#SareyaGifting",
    likes: "1.8k",
  },
  {
    id: "social-gujiya",
    image: "/images/sareya/social/social-gujiya.jpg",
    caption: "Crisp flaky crescents bathed in delicate saffron dew, packed with roasted mawa and dry fruits.",
    handle: "@sareyafood",
    tag: "#HeirloomMithai",
    likes: "2.9k",
  },
  {
    id: "social-bihar-lifestyle",
    image: "/images/sareya/social/social-bihar-lifestyle.jpg",
    caption: "Stories from the courtyard: preserving cooking traditions that honour both the land and our ancestors.",
    handle: "@sareyafood",
    tag: "#SlowFoodIndia",
    likes: "4.2k",
  },
];
