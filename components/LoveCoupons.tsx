'use client';
import { useState } from 'react';

const coupons = [
  { title: 'Kupon Traktir Makan Ice Cream 🍦', claim: false },
  { title: 'Kupon Pelukan 10 Detik 🤗', claim: false },
  { title: 'Kupon Bebas Pilih Film Cinema 🎬', claim: false },
];

export default function LoveCoupons() {
  const [claimed, setClaimed] = useState<boolean[]>([false, false, false]);

  const toggleClaim = (index: number) => {
    const updated = [...claimed];
    updated[index] = !updated[index];
    setClaimed(updated);
  };

  return (
    <div className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="font-cinzel text-3xl text-[#ffd86b] font-bold mb-10">Kupon Cinta Spesial</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {coupons.map((c, i) => (
          <div
            key={i}
            onClick={() => toggleClaim(i)}
            className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
              claimed[i]
                ? 'bg-[#4a2a82]/40 border-slate-500 opacity-60'
                : 'bg-[#1a1446] border-[#ffd86b] hover:scale-105'
            }`}
          >
            <h3 className="font-cinzel text-[#ffd86b] font-bold text-lg mb-4">{c.title}</h3>
            <span className="text-xs font-playfair text-slate-300">
              {claimed[i] ? '✓ Sudah Klaim' : 'Klik untuk Klaim'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
