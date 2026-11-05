'use client';
import { useState } from 'react';

export default function EasterEggs() {
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="text-center py-6">
      <button
        onClick={() => setShowSecret(true)}
        className="text-[#ffd86b]/40 hover:text-[#ffd86b] transition-colors text-xs font-cinzel"
      >
        ✨ [Bintang Rahasia]
      </button>

      {showSecret && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-[#1a1446] border border-[#ffd86b] p-6 rounded-2xl max-w-md text-center">
            <h3 className="font-cinzel text-xl text-[#ffd86b] font-bold mb-2">Pesan Rahasia! 🤫</h3>
            <p className="font-playfair text-slate-200 text-sm mb-4">
              [GANTI: Tulis pesan rahasia atau candaan internal kalian di sini].
            </p>
            <button
              onClick={() => setShowSecret(false)}
              className="px-4 py-2 bg-[#ffd86b] text-slate-900 rounded-full font-cinzel text-xs font-bold"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
