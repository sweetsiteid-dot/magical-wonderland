'use client';
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

export default function MiniGames() {
  const [score, setScore] = useState(0);
  const [starPos, setStarPos] = useState({ top: '30%', left: '50%' });

  const moveStar = () => {
    const top = Math.floor(Math.random() * 70 + 15) + '%';
    const left = Math.floor(Math.random() * 80 + 10) + '%';
    setStarPos({ top, left });
  };

  const handleCatch = () => {
    setScore(score + 1);
    moveStar();
  };

  return (
    <div className="py-20 px-6 max-w-3xl mx-auto text-center relative">
      <h2 className="font-cinzel text-3xl text-[#ffd86b] font-bold mb-2">Tangkap Bintang Harapan</h2>
      <p className="font-playfair text-slate-300 text-sm mb-6">Klik bintang yang bermunculan di arena!</p>
      <div className="text-xl font-cinzel text-[#ffb3d1] mb-4">Skor: {score} / 5</div>
      
      <div className="relative w-full h-64 bg-[#1a1446]/80 border border-[#ffd86b]/30 rounded-2xl overflow-hidden">
        {score < 5 ? (
          <button
            onClick={handleCatch}
            style={{ top: starPos.top, left: starPos.left }}
            className="absolute p-2 text-[#ffd86b] hover:scale-125 transition-transform"
          >
            <Star className="w-8 h-8 fill-[#ffd86b] animate-pulse" />
          </button>
        ) : (
          <div className="flex items-center justify-center h-full p-4 font-cinzel text-[#ffd86b] text-xl">
            🎉 Kamu Berhasil! Hadiah: Satu Pelukan Hangat dari Danial! ❤️
          </div>
        )}
      </div>
    </div>
  );
}
