'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Castle() {
  const castleRef = useRef<HTMLDivElement>(null);
  const fogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 15;
      const yPos = (clientY / window.innerHeight - 0.5) * 10;

      if (castleRef.current) {
        gsap.to(castleRef.current, {
          x: xPos,
          y: yPos,
          duration: 1.2,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-end justify-center bg-gradient-to-b from-[#0b0826] via-[#1a1446] to-[#4a2a82]">
      {/* Layer 1: Stars Background */}
      <div className="absolute inset-0 opacity-80 pointer-events-none">
        <div className="absolute top-12 left-[15%] w-1 h-1 bg-white rounded-full animate-twinkle" />
        <div className="absolute top-24 left-[75%] w-2 h-2 bg-gold-accent rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 left-[45%] w-1.5 h-1.5 bg-soft-pink rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-10 right-[20%] w-2 h-2 bg-white rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Layer 2: Glowing Crescent Moon */}
      <div className="absolute top-12 right-12 w-20 h-20 rounded-full shadow-[inset_-8px_8px_0_0_#ffd86b] filter drop-shadow-[0_0_15px_#ffd86b] opacity-90" />

      {/* Layer 3: Main Parallax Castle SVG Container */}
      <div ref={castleRef} className="relative z-10 w-full max-w-4xl h-[65vh] flex justify-center items-end transition-transform duration-100 ease-out">
        <svg viewBox="0 0 1000 800" className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
          {/* Base Castle Silhouette */}
          <path d="M150,800 L150,550 L200,500 L200,800 Z" fill="#120d36" />
          <path d="M800,800 L800,550 L850,500 L850,800 Z" fill="#120d36" />
          
          {/* Main Walls */}
          <rect x="250" y="450" width="500" height="350" fill="#1a1446" />
          
          {/* Towers Left & Right */}
          <rect x="200" y="350" width="100" height="450" fill="#150f3b" />
          <path d="M200,350 L250,200 L300,350 Z" fill="#4a2a82" />
          
          <rect x="700" y="350" width="100" height="450" fill="#150f3b" />
          <path d="M700,350 L750,200 L800,350 Z" fill="#4a2a82" />

          {/* Center Spire & Grand Tower */}
          <rect x="400" y="250" width="200" height="550" fill="#241a5e" />
          <path d="M400,250 L500,50 L600,250 Z" fill="#6037a3" />
          
          {/* Small Flags */}
          <path d="M500,50 L500,20 L530,35 Z" fill="#ffd86b" />
          <path d="M250,200 L250,170 L275,185 Z" fill="#ffb3d1" />
          <path d="M750,200 L750,170 L775,185 Z" fill="#ffb3d1" />

          {/* Glowing Windows */}
          <path d="M475,320 A25,25 0 0,1 525,320 L525,380 L475,380 Z" className="animate-window-glow" />
          <path d="M235,420 A15,15 0 0,1 265,420 L265,470 L235,470 Z" className="animate-window-glow" style={{ animationDelay: '1s' }} />
          <path d="M735,420 A15,15 0 0,1 765,420 L765,470 L735,470 Z" className="animate-window-glow" style={{ animationDelay: '2s' }} />
          <path d="M460,500 A15,15 0 0,1 490,500 L490,550 L460,550 Z" className="animate-window-glow" style={{ animationDelay: '1.5s' }} />
          <path d="M510,500 A15,15 0 0,1 540,500 L540,550 L510,550 Z" className="animate-window-glow" style={{ animationDelay: '0.5s' }} />

          {/* Castle Arch Gate */}
          <path d="M440,800 A60,60 0 0,1 560,800 Z" fill="#0d0926" stroke="#ffd86b" strokeWidth="4" />
        </svg>
      </div>

      {/* Layer 4: Hills & Lantern Glow */}
      <div className="absolute bottom-0 inset-x-0 h-44 z-20 bg-gradient-to-t from-[#0d092b] via-[#140e3d] to-transparent pointer-events-none" />

      {/* Layer 5: Dynamic Animated Fog */}
      <div 
        ref={fogRef}
        className="absolute bottom-0 inset-x-0 h-48 z-30 opacity-40 bg-gradient-to-r from-transparent via-[#ffd86b]/10 to-transparent blur-2xl animate-fog-slow pointer-events-none" 
      />
    </div>
  );
}
