'use client';
import { useState, useEffect } from 'react';

// GANTI tanggal jadian di bawah (Tahun, Bulan-1, Tanggal)
const START_DATE = new Date(2023, 0, 1).getTime(); 

export default function LoveCounter() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = now - START_DATE;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 px-6 text-center bg-[#4a2a82]/20 border-y border-[#ffd86b]/20 my-12">
      <h3 className="font-cinzel text-xl text-[#ffb3d1] mb-6">Kita Telah Bersama Selama:</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {[
          { label: 'Hari', val: time.days },
          { label: 'Jam', val: time.hours },
          { label: 'Menit', val: time.minutes },
          { label: 'Detik', val: time.seconds },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#1a1446]/80 border border-[#ffd86b]/30 p-4 rounded-xl">
            <span className="font-cinzel text-3xl md:text-4xl text-[#ffd86b] font-bold block">
              {item.val}
            </span>
            <span className="font-playfair text-slate-300 text-xs">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
