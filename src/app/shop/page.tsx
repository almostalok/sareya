import React, { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShopContent } from "@/components/shop/ShopContent";

export const metadata = {
  title: "Shop All Delicacies — SAREYA | Bihar, Beautifully Packed",
  description:
    "Explore our complete pantry of authentic Bihar delicacies: Heirloom Thekua, Chashni Gujiya, Roasted Chana Sattu, Mithila Makhaana, Champaran Litti Mix, and Festive Gift Boxes.",
};

export default function ShopPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 bg-[#F7F1E7]">
      <Container className="space-y-10 sm:space-y-12">
        {/* Editorial Heading */}
        <div className="border-b border-[#211B17]/10 pb-6 sm:pb-8">
          <SectionHeading
            eyebrow="PROVINCIAL PANTRY"
            title="THE SAREYA COLLECTION."
            subtitle="Pure A2 bilona ghee sweets, cold stone-ground flours, and regional snacks prepared in the time-honoured traditions of Bihar."
          />
        </div>

        {/* Dynamic Shop Client with Filters, Search, and Grid */}
        <Suspense
          fallback={
            <div className="py-20 text-center text-sm text-[#75695D]">
              Loading Bihar pantry collection...
            </div>
          }
        >
          <ShopContent />
        </Suspense>
      </Container>
    </div>
  );
}
