export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export const navLinks: NavLink[] = [
  { label: "SHOP", href: "/shop" },
  { label: "THE PANTRY", href: "/shop?category=pantry" },
  { label: "OUR STORY", href: "/story" },
  { label: "EXPLORE BIHAR", href: "/bihar" },
  { label: "GIFTING", href: "/gifting" },
];

export const footerLinks = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "Heirloom Thekua", href: "/products/heirloom-thekua" },
    { label: "Roasted Chana Sattu", href: "/products/roasted-chana-sattu" },
    { label: "Mithila Phool Makhaana", href: "/products/mithila-phool-makhaana" },
    { label: "Chashni Gujiya", href: "/products/chashni-mava-gujiya" },
    { label: "Gift Collections", href: "/gifting" },
  ],
  story: [
    { label: "The Sareya Philosophy", href: "/story" },
    { label: "Artisanal Sourcing", href: "/story#sourcing" },
    { label: "Bihar Culinary Terroirs", href: "/bihar" },
    { label: "Preserving Heritage Recipes", href: "/story#heritage" },
  ],
  explore: [
    { label: "Mithila Wetlands", href: "/bihar#mithila" },
    { label: "Magadh Grain Belts", href: "/bihar#magadh" },
    { label: "Bhojpur Hearth Tradition", href: "/bihar#bhojpur" },
    { label: "Champaran Spices", href: "/bihar#champaran" },
  ],
  help: [
    { label: "Shipping & Delivery", href: "#shipping" },
    { label: "Packaging & Freshness", href: "#freshness" },
    { label: "Corporate Inquiries", href: "/gifting#corporate" },
    { label: "Track Your Order", href: "#track" },
    { label: "Frequently Asked Questions", href: "#faq" },
  ],
};
