"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Search, X, SlidersHorizontal } from "lucide-react";

export function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setActiveCategory(cat);
    const q = searchParams.get("search");
    if (q) setSearchQuery(q);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          activeCategory === "all" || product.category === activeCategory;
        const matchesQuery =
          !searchQuery.trim() ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.region.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        return 0; // featured/default order
      });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="space-y-8">
      {/* Category Pills & Controls Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 border-b border-[#211B17]/10 pb-6">
        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium tracking-[0.12em] uppercase whitespace-nowrap transition-all duration-200 border ${
                  isSelected
                    ? "bg-[#8E2925] border-[#8E2925] text-[#F7F1E7]"
                    : "bg-white/60 border-[#211B17]/10 text-[#211B17] hover:border-[#8E2925]/40"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex items-center gap-3">
          {/* Search Box */}
          <div className="relative flex-1 sm:w-64">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#75695D]"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pantry..."
              className="w-full bg-white/70 pl-9 pr-8 py-2 text-xs border border-[#211B17]/15 focus:outline-none focus:border-[#8E2925] text-[#211B17]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#75695D] hover:text-[#211B17]"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5 shrink-0">
            <SlidersHorizontal size={14} className="text-[#75695D]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white/70 py-2 px-3 text-xs border border-[#211B17]/15 focus:outline-none focus:border-[#8E2925] text-[#211B17]"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Result Count and Active Filters */}
      <div className="flex items-center justify-between text-xs text-[#75695D]">
        <span>
          Showing <strong>{filteredProducts.length}</strong> delicacies
        </span>
        {(activeCategory !== "all" || searchQuery) && (
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="text-[#8E2925] hover:underline uppercase tracking-wider text-[11px] font-semibold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} columns={4} priorityCount={4} />
      ) : (
        <div className="text-center py-20 bg-white/40 border border-[#211B17]/10 space-y-3">
          <p className="font-serif text-2xl text-[#211B17]">
            No delicacies found matching your search.
          </p>
          <p className="text-xs text-[#75695D] max-w-sm mx-auto">
            Try adjusting your search terms or view our complete Bihar collection.
          </p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 inline-block px-5 py-2.5 bg-[#8E2925] text-[#F7F1E7] text-xs uppercase tracking-wider font-semibold"
          >
            Show All Products
          </button>
        </div>
      )}
    </div>
  );
}
