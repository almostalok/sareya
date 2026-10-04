import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductPrice } from "@/components/products/ProductPrice";
import { ProductActions } from "@/components/products/ProductActions";
import { ProductCard } from "@/components/products/ProductCard";
import {
  ShieldCheck,
  Truck,
  Sparkles,
  RotateCcw,
  Check,
  ChevronRight,
  MapPin,
} from "lucide-react";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Related products from same category or complementary
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 bg-[#F7F1E7]">
      <Container className="space-y-12 sm:space-y-16">
        {/* Breadcrumb Trail */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-xs text-[#75695D]"
        >
          <Link href="/" className="hover:text-[#8E2925] transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/shop" className="hover:text-[#8E2925] transition-colors">
            Shop
          </Link>
          <ChevronRight size={12} />
          <span className="capitalize">{product.category}</span>
          <ChevronRight size={12} />
          <span className="text-[#211B17] font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        {/* Main Product Section: Two columns on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Gallery Column (Desktop: 6 cols, Mobile: full) */}
          <div className="lg:col-span-6 w-full">
            <ProductGallery
              images={product.galleryImages}
              alt={product.name}
              badge={product.badge}
            />
          </div>

          {/* Product Information Column (Desktop: 6 cols, Mobile: full) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 lg:pl-4">
            {/* Title & Tagline */}
            <div className="space-y-2 border-b border-[#211B17]/10 pb-5">
              {product.region && (
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#B95A3C]">
                  <MapPin size={13} />
                  <span>{product.region}</span>
                </div>
              )}

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#211B17] leading-tight">
                {product.name}
              </h1>

              <p className="text-sm sm:text-base text-[#75695D] font-light italic">
                {product.tagline}
              </p>
            </div>

            {/* Price & Weight */}
            <div className="flex items-baseline justify-between border-b border-[#211B17]/10 pb-5">
              <ProductPrice
                price={product.price}
                originalPrice={product.originalPrice}
                size="lg"
              />
              <span className="text-xs sm:text-sm font-medium text-[#75695D] bg-[#EFE3D0] px-3 py-1">
                {product.weight}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#75695D] leading-relaxed font-light">
              {product.description}
            </p>

            {/* Interactive Add to Cart & Quantity Selector */}
            <ProductActions product={product} />

            {/* In-stock status & guarantees */}
            <div className="grid grid-cols-2 gap-3 pt-3 text-xs text-[#75695D]">
              <div className="flex items-center gap-2 p-2.5 bg-white/60 border border-[#211B17]/10">
                <Truck size={16} className="text-[#8E2925]" />
                <span>Pan-India Dispatch in 24h</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white/60 border border-[#211B17]/10">
                <ShieldCheck size={16} className="text-[#59634C]" />
                <span>Small Batch Guaranteed</span>
              </div>
            </div>

            {/* Detailed Tabs/Accordions */}
            <div className="border-t border-[#211B17]/10 pt-6 space-y-5 text-sm">
              {/* Heritage Story */}
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-[#211B17] font-normal">
                  Courtyard Heritage
                </h3>
                <p className="text-xs sm:text-sm text-[#75695D] leading-relaxed font-light">
                  {product.story}
                </p>
              </div>

              {/* Ingredients */}
              <div className="space-y-2.5 pt-2">
                <h3 className="font-serif text-xl text-[#211B17] font-normal">
                  Pure Ingredients
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="bg-[#EFE3D0]/80 text-[#211B17] px-2.5 py-1 text-xs font-light"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tasting Notes */}
              <div className="space-y-2.5 pt-2">
                <h3 className="font-serif text-xl text-[#211B17] font-normal">
                  Flavour Notes
                </h3>
                <div className="flex flex-wrap gap-2 text-xs text-[#8E2925]">
                  {product.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="inline-flex items-center gap-1 border border-[#8E2925]/30 px-2.5 py-0.5 bg-[#8E2925]/5"
                    >
                      <Sparkles size={11} />
                      <span>{note}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Shelf Life & Storage */}
              <div className="pt-2 text-xs text-[#75695D] space-y-1">
                <p>
                  <strong>Shelf Life:</strong> {product.shelfLife}
                </p>
                <p>
                  <strong>Storage:</strong> Store in a cool, dry place away from direct sunlight.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Delicacies Recommendation Section */}
        <div className="border-t border-[#211B17]/10 pt-16 sm:pt-20 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8E2925]">
                PAIRINGS & MORE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#211B17] font-normal mt-1">
                You May Also Relish
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-xs uppercase tracking-wider text-[#8E2925] hover:text-[#641B1B] font-semibold border-b border-[#8E2925] pb-0.5"
            >
              View Full Pantry
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5 md:gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
