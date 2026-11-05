'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function WishingWall() {
  const [wish, setWish] = useState('');
  const [lanterns, setLanterns] = useState<string[]>([]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wish.trim()) return;
    setLanterns([...lanterns, wish]);
    setWish('');
  };

  return (
    <div className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="font-cinzel text-3xl text-[#ffd86b] font-bold mb-4">Wishing Wall Lentera</h2>
      <p className="font-playfair text-slate-300 text-sm mb-8">
        Tuliskan harapanmu, lalu biarkan ia terbang menjadi lentera ke langit malam.
      </p>

      <form onSubmit={handleSend} className="flex gap-2 max-w-md mx-auto mb-12">
        <input
          type="text"
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          placeholder="Tulis harapan Deandra di sini..."
          className="flex-1 px-4 py-3 bg-[#1a1446] border border-[#ffd86b]/40 rounded-full text-white text-sm focus:outline-none"
        />
        <button type="submit" className="px-6 py-3 bg-[#ffd86b] text-slate-900 rounded-full font-cinzel font-bold flex items-center gap-1">
          <Send className="w-4 h-4" />
        </button>
      </form>

      <div className="relative h-48 border-t border-[#ffd86b]/20 overflow-hidden flex flex-wrap gap-4 justify-center items-center">
        {lanterns.map((txt, i) => (
          <div
            key={i}
            className="animate-bounce bg-gradient-to-t from-amber-500 to-yellow-300 text-slate-900 px-4 py-2 rounded-full font-playfair text-xs font-bold shadow-[0_0_15px_#ffd86b]"
          >
            🏮 {txt}
          </div>
        ))}
      </div>
    </div>
  );
}
