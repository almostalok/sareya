import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { products, Product } from "@/data/products";
import { ArrowRight } from "lucide-react";

export function BestsellerSection() {
  // Map bestsellers with specific bestseller image assets per Section 21
  const bestsellerItems: Product[] = [
    {
      ...products.find((p) => p.id === "thekua")!,
      image: "/images/sareya/bestsellers/bestseller-thekua.jpg",
    },
    {
      ...products.find((p) => p.id === "gujiya")!,
      image: "/images/sareya/bestsellers/bestseller-gujiya.jpg",
    },
    {
      ...products.find((p) => p.id === "sattu")!,
      image: "/images/sareya/bestsellers/bestseller-sattu.jpg",
    },
    {
      ...products.find((p) => p.id === "litti-mix")!,
      image: "/images/sareya/bestsellers/bestseller-litti-mix.jpg",
    },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-30 bg-[#F7F1E7]">
      <Container className="space-y-10 sm:space-y-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2 border-b border-[#211B17]/10">
          <SectionHeading
            eyebrow="PROVEN FAVOURITES"
            title="THE ONES EVERYONE COMES BACK FOR."
            subtitle="Beloved by families, shared across festive tables, and reordered time and time again."
          />

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#8E2925] hover:text-[#641B1B] transition-colors border-b border-[#8E2925] pb-1 shrink-0"
          >
            <span>SHOP ALL BESTSELLERS</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 4-Column Responsive Grid with same ProductCard component */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 md:gap-6">
          {bestsellerItems.map((product) => (
            <ProductCard key={`bestseller-${product.id}`} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
