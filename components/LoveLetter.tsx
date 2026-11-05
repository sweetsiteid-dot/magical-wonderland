'use client';
import { useState, useEffect } from 'react';
import { Mail, MailOpen } from 'lucide-react';

const letterText = `Untuk Deandra tersayang,

Terima kasih sudah menjadi bagian paling ajaib dalam hidupku. Taman hiburan ini hanyalah gambaran kecil dari betapa indahnya hariku saat bersamamu.

[GANTI: Tuliskan pesan surat romantis yang hangat dan tulus di sini. Ungpakan rasa terima kasih, harapan untuk masa depan bersama, dan perasaaanmu pada Deandra].

Dengan seluruh cintaku,
Danial`;

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (isOpen) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < letterText.length) {
          setDisplayedText(letterText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 35);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  return (
    <div className="py-20 px-6 max-w-2xl mx-auto text-center">
      <h2 className="font-cinzel text-3xl text-[#ffd86b] font-bold mb-8">Surat Rahasia Untukmu</h2>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex flex-col items-center gap-3 p-8 bg-[#1a1446] border-2 border-[#ffd86b]/50 rounded-2xl shadow-2xl hover:scale-105 transition-transform"
        >
          <Mail className="w-16 h-16 text-[#ffd86b]" />
          <span className="font-cinzel text-[#ffb3d1]">Buka Amplop</span>
        </button>
      ) : (
        <div className="bg-[#fff9ea] text-slate-800 p-8 md:p-10 rounded-2xl shadow-2xl text-left border-4 border-[#ffd86b] relative">
          <MailOpen className="w-8 h-8 text-[#4a2a82] absolute top-4 right-4" />
          <p className="font-playfair text-base md:text-lg leading-relaxed whitespace-pre-line font-medium">
            {displayedText}
          </p>
        </div>
      )}
    </div>
  );
}
