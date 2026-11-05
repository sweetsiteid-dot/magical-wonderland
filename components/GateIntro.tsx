'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

interface GateProps {
  onEnter: () => void;
}

export default function GateIntro({ onEnter }: GateProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleStart = () => {
    setIsOpen(true);
    setTimeout(() => {
      onEnter();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0d0926]"
        >
          {/* Left Gate Door */}
          <motion.div
            animate={{ x: isOpen ? '-100%' : '0%' }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="absolute left-0 top-0 w-1/2 h-full bg-[#1a1446] border-r-4 border-[#ffd86b]/40 flex items-center justify-end pr-6 shadow-2xl"
          >
            <div className="w-32 h-64 border-4 border-[#ffd86b]/20 rounded-t-full" />
          </motion.div>

          {/* Right Gate Door */}
          <motion.div
            animate={{ x: isOpen ? '100%' : '0%' }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="absolute right-0 top-0 w-1/2 h-full bg-[#1a1446] border-l-4 border-[#ffd86b]/40 flex items-center justify-start pl-6 shadow-2xl"
          >
            <div className="w-32 h-64 border-4 border-[#ffd86b]/20 rounded-t-full" />
          </motion.div>

          {/* Center Gate Button CTA */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative z-10 text-center px-4"
          >
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-magic-purple/60 border border-[#ffd86b] text-[#ffd86b] animate-bounce">
              <Sparkles className="w-8 h-8" />
            </div>
            <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-[#ffd86b] tracking-wider mb-2 drop-shadow-md">
              Deandra's Magical Kingdom
            </h1>
            <p className="font-playfair italic text-slate-300 text-sm md:text-base mb-8">
              Sebuah taman keajaiban khusus yang diciptakan untukmu
            </p>
            <button
              onClick={handleStart}
              className="px-8 py-4 bg-gradient-to-r from-[#4a2a82] to-[#ffd86b] text-slate-900 font-cinzel font-bold text-lg rounded-full shadow-[0_0_25px_rgba(255,216,107,0.5)] hover:scale-105 active:scale-95 transition-transform flex items-center gap-2 mx-auto"
            >
              <Heart className="w-5 h-5 fill-slate-900" /> Ketuk Untuk Masuk
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
