import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAREYA — Bihar, Beautifully Packed | Premium Regional Food & Sweets",
  description:
    "Traditional flavours. Modern expression. Rooted in Bihar. Explore authentic Thekua, Gujiya, Sattu, Makhaana, and heirloom Bihar food crafted with pure ingredients.",
  keywords: [
    "Sareya",
    "Bihar food",
    "Thekua",
    "Bihari sweets",
    "Chana Sattu",
    "Makhana",
    "Gujiya",
    "Litti Chokha mix",
    "Premium Indian Sweets",
    "Mithila food",
  ],
  openGraph: {
    title: "SAREYA — Bihar, Beautifully Packed",
    description: "Traditional flavours. Modern expression. Rooted in Bihar.",
    siteName: "Sareya",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F1E7] text-[#211B17] font-sans selection:bg-[#8E2925] selection:text-[#F7F1E7]">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
