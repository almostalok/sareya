"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, Search, User, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { navLinks } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const { openCart, totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery.trim())}`;
      setSearchOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || !isHome
            ? "bg-[#F7F1E7]/95 backdrop-blur-md border-b border-[#211B17]/10 py-3.5 shadow-xs"
            : "bg-transparent py-4 sm:py-5 border-b border-[#211B17]/10"
        }`}
      >
        <div className="w-[min(calc(100%-32px),1440px)] md:w-[min(calc(100%-64px),1440px)] mx-auto flex items-center justify-between">
          {/* Mobile Left: Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="p-1.5 -ml-1.5 text-[#211B17] hover:text-[#8E2925] focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop Left: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs xl:text-[13px] tracking-[0.16em] uppercase transition-colors relative py-1 ${
                    isActive
                      ? "text-[#8E2925] font-semibold"
                      : "text-[#211B17]/90 hover:text-[#8E2925]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8E2925]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Brand Logo / SAREYA */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-block font-serif text-2xl sm:text-3xl tracking-[0.24em] font-normal text-[#8E2925] hover:opacity-90 transition-opacity"
            >
              SAREYA
            </Link>
          </div>

          {/* Right Actions: Search, Account, Bag */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search products"
              className="p-2 text-[#211B17] hover:text-[#8E2925] transition-colors rounded-full focus:outline-none"
            >
              <Search size={19} />
            </button>

            {/* Account (Desktop) */}
            <Link
              href="/story"
              aria-label="Brand philosophy and story"
              className="hidden lg:inline-flex p-2 text-[#211B17] hover:text-[#8E2925] transition-colors rounded-full"
            >
              <User size={19} />
            </Link>

            {/* Shopping Bag Button */}
            <button
              onClick={openCart}
              aria-label={`Shopping bag with ${totalItems} items`}
              className="relative p-2 text-[#211B17] hover:text-[#8E2925] transition-colors rounded-full focus:outline-none flex items-center"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#8E2925] text-[#F7F1E7] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Expandable Search Input Bar */}
        {searchOpen && (
          <div className="border-t border-[#211B17]/10 bg-[#F7F1E7] px-4 py-3 shadow-md animate-in slide-in-from-top-2 duration-200">
            <form
              onSubmit={handleSearchSubmit}
              className="w-[min(calc(100%-32px),1440px)] mx-auto flex items-center gap-3"
            >
              <Search size={18} className="text-[#8E2925]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Thekua, Sattu, Makhaana, Gujiya, Litti..."
                className="flex-1 bg-transparent border-none text-sm focus:outline-none text-[#211B17] placeholder:text-[#75695D]/60"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-[#75695D] hover:text-[#211B17] p-1"
              >
                <X size={18} />
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
