"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function CorporateInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#1c1410] border border-[#D39A38]/30 p-8 text-center space-y-3">
        <div className="w-12 h-12 bg-[#59634C]/20 text-[#D39A38] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 size={28} />
        </div>
        <h4 className="font-serif text-2xl text-[#F7F1E7]">Inquiry Received</h4>
        <p className="text-xs text-[#EFE3D0]/70 max-w-xs mx-auto leading-relaxed">
          Dhanyawad, {name}! Our Gifting Concierge will reach out at {email} within 4 business hours with our bespoke catalogue.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
      <div>
        <label className="block text-[#EFE3D0]/70 mb-1">Your Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Priyadarshini Sen"
          className="w-full bg-[#1c1410] border border-[#F7F1E7]/20 p-2.5 text-[#F7F1E7] focus:outline-none focus:border-[#D39A38]"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[#EFE3D0]/70 mb-1">Work Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            className="w-full bg-[#1c1410] border border-[#F7F1E7]/20 p-2.5 text-[#F7F1E7] focus:outline-none focus:border-[#D39A38]"
          />
        </div>
        <div>
          <label className="block text-[#EFE3D0]/70 mb-1">Phone Number</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full bg-[#1c1410] border border-[#F7F1E7]/20 p-2.5 text-[#F7F1E7] focus:outline-none focus:border-[#D39A38]"
          />
        </div>
      </div>
      <div>
        <label className="block text-[#EFE3D0]/70 mb-1">Estimated Quantity & Occasion</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="e.g. 50 boxes for Annual Partners Gala"
          className="w-full bg-[#1c1410] border border-[#F7F1E7]/20 p-2.5 text-[#F7F1E7] focus:outline-none focus:border-[#D39A38]"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-[#D39A38] text-[#211B17] font-semibold uppercase tracking-wider text-xs hover:bg-[#C28B2F] transition-colors"
      >
        REQUEST CUSTOM PROPOSAL
      </button>
    </form>
  );
}
