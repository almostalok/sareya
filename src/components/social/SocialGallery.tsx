import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { socialPosts } from "@/data/social";
import { Heart, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

export function SocialGallery() {
  return (
    <section className="py-16 sm:py-24 md:py-28 bg-[#F7F1E7] relative overflow-hidden">
      <Container className="space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2 border-b border-[#211B17]/10">
          <SectionHeading
            eyebrow="COMMUNITY MOMENTS"
            title="FROM THE SAREYA TABLE."
            subtitle="Glimpses into our kitchens, the Bihar countryside, and slow culinary rituals shared with friends."
          />

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8E2925] hover:text-[#641B1B] transition-colors border-b border-[#8E2925] pb-1 shrink-0"
          >
            <InstagramIcon size={15} />
            <span>FOLLOW @SAREYAFOOD</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Responsive Editorial Grid:
            Desktop: 6 items in mixed editorial rhythm
            Tablet: 3 columns
            Mobile: 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
          {socialPosts.map((post) => (
            <div
              key={post.id}
              className="group relative overflow-hidden bg-[#EFE3D0] border border-[#211B17]/10 aspect-square"
            >
              <ResponsiveImage
                src={post.image}
                alt={post.caption}
                aspectRatio="1/1"
                objectFit="cover"
                hoverScale={true}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="group-hover:scale-105 transition-transform duration-600 ease-out"
              />

              {/* Hover Overlay with Caption & Handle */}
              <div className="absolute inset-0 bg-[#211B17]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 sm:p-4 flex flex-col justify-between text-[#F7F1E7]">
                <div className="flex items-center justify-between text-[11px] text-[#D39A38]">
                  <span>{post.handle}</span>
                  <div className="flex items-center gap-1">
                    <Heart size={12} fill="#D39A38" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] sm:text-xs text-[#EFE3D0] line-clamp-3 leading-snug font-light">
                    {post.caption}
                  </p>
                  <p className="text-[10px] text-[#D39A38] uppercase tracking-wider font-semibold mt-1">
                    {post.tag}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
