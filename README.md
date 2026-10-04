# SAREYA — Bihar, Beautifully Packed
### Traditional flavours. Modern expression. Rooted in Bihar.

**SAREYA** is a contemporary, production-quality direct-to-consumer food and beverage ecommerce platform celebrating the authentic culinary heritage of Bihar. Moving far beyond generic templates or traditional sweet shop aesthetics, Sareya combines high-craft editorial design, slow-food storytelling, tactile packaging, and modern responsive engineering.

---

## 🌾 The Creative Direction

> **"Bihar, beautifully packed."**
> Traditional flavours. Modern expression. Rooted in Bihar.

- **Aesthetic Principles**: Editorial food magazine layout, warm earthy palettes, unhurried typography, tactile packaging details, subtle Mithila art motifs.
- **Brand Palette**:
  - **Ivory (`#F7F1E7`)**: Clean, natural background
  - **Cream (`#EFE3D0`)**: Warm parchment tone
  - **Deep Sareya Red (`#8E2925`)**: Primary brand accent & signature bands
  - **Burgundy (`#641B1B`)**: Deep contrast & rich accents
  - **Terracotta (`#B95A3C`)**: Hearth and clay tone
  - **Dark Brown (`#211B17` / `#291D17`)**: High-contrast editorial typography
  - **Muted Gold (`#D39A38`)**: Keepsake highlights and festive trim
  - **Muted Green (`#59634C`)**: Natural ingredient accents

---

## 🏛️ Project Architecture & Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Runtime**: React 19 & TypeScript
- **Styling**: Tailwind CSS v4 with bespoke fluid clamp typography and custom design tokens
- **Typography**: Google Fonts via `next/font/google`:
  - Display: `Cormorant Garamond` (Editorial serif)
  - UI & Body: `Manrope` (Clean modern sans-serif)
- **Icons**: Lucide React + custom SVG branding elements
- **State Management**: Reactive React Context with LocalStorage persistence for Cart Drawer

```text
src/
├── app/
│   ├── layout.tsx                     # Root layout with fonts, providers, navbar & cart
│   ├── globals.css                    # Fluid typography, tokens, animations, container
│   ├── page.tsx                       # Homepage (12-stage visual flow)
│   ├── shop/                          # Catalog page with instant category filters & search
│   ├── story/                         # Brand story, courtyard hearth & provenance
│   ├── bihar/                         # Explore Bihar: 5 regional terroirs & map
│   ├── gifting/                       # Bespoke festive boxes & corporate inquiry
│   └── products/[slug]/               # Dynamic product page (SSG + gallery + pairings)
├── components/
│   ├── ui/
│   │   ├── ResponsiveImage.tsx        # Section 06/07 non-distorting image system
│   │   ├── Container.tsx              # Fluid 1440px container
│   │   ├── SectionHeading.tsx         # Editorial typography heading
│   │   ├── Button.tsx                 # Polymorphic button & link system
│   │   └── IconButton.tsx             # Interactive icon buttons with badges
│   ├── layout/
│   │   ├── Navbar.tsx                 # Transparent-to-solid header, search & mobile drawer
│   │   ├── MobileMenu.tsx             # Slide-over navigation drawer
│   │   └── Footer.tsx                 # Editorial HTML/CSS footer with zero hardcoded images
│   ├── hero/
│   │   └── HeroSection.tsx            # Section 12 & 13 fluid hero (desktop split / mobile stacked)
│   ├── brand/
│   │   ├── Marquee.tsx                # Deep red animated ticker
│   │   ├── BrandStory.tsx             # Section 18 responsive split story
│   │   └── BrandValues.tsx            # 4 core culinary pillars
│   ├── products/
│   │   ├── ProductCard.tsx            # Reusable 4:5 card with hover scaling (Sec 16/17)
│   │   ├── ProductGrid.tsx            # 4-col desktop, 2-col mobile responsive grid
│   │   ├── ProductPrice.tsx           # Formatted INR pricing
│   │   ├── QuantitySelector.tsx       # Accessible quantity controls
│   │   ├── AddToCartButton.tsx        # Direct bag trigger with instant feedback
│   │   ├── ProductGallery.tsx         # Interactive product image switcher
│   │   ├── ProductActions.tsx         # PDP actions & express checkout
│   │   ├── SignatureSection.tsx       # Homepage Section 15
│   │   └── BestsellerSection.tsx      # Homepage Section 21
│   ├── bihar/
│   │   └── BiharMap.tsx               # Section 20 interactive provincial map & region cards
│   ├── ingredients/
│   │   └── IngredientSection.tsx      # Section 19 individual ingredient cards & provenance
│   ├── gifting/
│   │   ├── GiftingSection.tsx         # Section 22 keepsake box showcase
│   │   └── CorporateInquiryForm.tsx   # Bulk gifting inquiry form
│   ├── testimonials/
│   │   └── TestimonialCarousel.tsx    # Section 23 multi-item responsive carousel
│   ├── social/
│   │   └── SocialGallery.tsx          # Section 24 editorial social moments grid
│   └── newsletter/
│       └── NewsletterSection.tsx      # Section 41 subscriber capture with confirmation
├── context/
│   └── CartContext.tsx                # Cart state, shipping threshold & storage sync
└── data/
    ├── products.ts                    # Dynamic catalog with regions, ingredients & stories
    ├── testimonials.ts                # Real verified customer reviews from 5 cities
    ├── regions.ts                     # Bihar regional terroirs (Mithila, Magadh, etc.)
    ├── ingredients.ts                 # Provenance data for unrefined ingredients
    ├── social.ts                      # Editorial social posts
    └── navigation.ts                  # Navbar and footer links
```

---

## 🖼️ Raw Asset Organization

All 27 raw assets are mapped into their required directories in `public/images/sareya/`:

```text
public/
└── images/
    └── sareya/
        ├── hero/            └── hero-food-scene.jpg
        ├── products/        ├── product-thekua.jpg, product-gujiya.jpg, product-sattu.jpg, product-makhaana.jpg
        ├── story/           └── story-making-thekua.jpg
        ├── bihar/           └── bihar-regional-map.jpg
        ├── bestsellers/     ├── bestseller-thekua.jpg, bestseller-gujiya.jpg, bestseller-sattu.jpg, bestseller-litti-mix.jpg
        ├── gifting/         └── gifting-bihar-box.jpg
        ├── social/          ├── social-thekua.jpg, social-sattu-drink.jpg, social-bihar-landscape.jpg, social-gift-box.jpg, social-gujiya.jpg, social-bihar-lifestyle.jpg
        ├── ingredients/     ├── ingredient-jaggery.jpg, ingredient-wheat.jpg, ingredient-chana.jpg, ingredient-makhaana.jpg, ingredient-sattu-powder.jpg, ingredient-spices.jpg
        └── textures/        ├── texture-bihar-textile.jpg, texture-banana-leaf.jpg, texture-illustration-pattern.jpg
```

---

## 🚀 Running the Project

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Production build & type check
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the application.
