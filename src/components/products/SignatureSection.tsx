import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

export function SignatureSection() {
  // 4 Signature items: Thekua, Gujiya, Sattu, Makhaana
  const signatureItems = products.filter((p) => p.isSignature);

  return (
    <section className="py-16 sm:py-24 md:py-30 bg-[#F7F1E7]">
      <Container className="space-y-10 sm:space-y-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2 border-b border-[#211B17]/10">
          <SectionHeading
            eyebrow="SIGNATURE HARVEST"
            title="A LITTLE BIHAR IN EVERY BITE."
            subtitle="The core four provincial staples that define celebrations, seasonal hearths, and daily nourishment across Bihar."
          />

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#8E2925] hover:text-[#641B1B] transition-colors border-b border-[#8E2925] pb-1 shrink-0"
          >
            <span>VIEW ALL ({products.length})</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 4-Column Responsive Grid mapping dynamically */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 md:gap-6">
          {signatureItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
