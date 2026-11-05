'use client';
import { useState } from 'react';
import confetti from 'canvas-confetti';

export default function FinaleFireworks() {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoPos({ x, y });
  };

  const handleYes = () => {
    setAccepted(true);
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="py-24 px-6 max-w-3xl mx-auto text-center relative">
      <h2 className="font-cinzel text-3xl md:text-5xl text-[#ffd86b] font-bold mb-6">
        Satu Pertanyaan Terakhir...
      </h2>
      <p className="font-playfair text-slate-200 text-lg mb-10">
        Apakah Deandra mau terus menjelajahi petualangan cinta ini bersama Danial?
      </p>

      {!accepted ? (
        <div className="flex justify-center items-center gap-6 relative min-h-[100px]">
          <button
            onClick={handleYes}
            className="px-8 py-4 bg-[#ffd86b] text-slate-900 font-cinzel font-bold rounded-full shadow-[0_0_20px_#ffd86b] hover:scale-110 transition-transform"
          >
            Mau Banget! ❤️
          </button>
          <button
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
            className="px-8 py-4 bg-slate-700 text-slate-300 font-cinzel font-bold rounded-full transition-all duration-200"
          >
            Tidak 😜
          </button>
        </div>
      ) : (
        <div className="bg-[#4a2a82]/40 border border-[#ffd86b] p-8 rounded-2xl animate-fade-in">
          <h3 className="font-cinzel text-2xl text-[#ffd86b] font-bold mb-2">Yay! 🎉</h3>
          <p className="font-playfair text-slate-200">
            Terima kasih telah menjadi alasan tersenyum setiap hari. Aku mencintaimu!
          </p>
        </div>
      )}
    </div>
  );
}
