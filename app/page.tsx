'use client';
import { useState } from 'react';
import Castle from '../components/Castle';
import StarFieldR3F from '../components/StarFieldR3F';
import GateIntro from '../components/GateIntro';
import MusicPlayer from '../components/MusicPlayer';
import CursorTrail from '../components/CursorTrail';
import StorySection from '../components/StorySection';
import PhotoGallery from '../components/PhotoGallery';
import LoveTimeline from '../components/LoveTimeline';
import LoveCounter from '../components/LoveCounter';
import LoveLetter from '../components/LoveLetter';
import MiniGames from '../components/MiniGames';
import WishingWall from '../components/WishingWall';
import LoveCoupons from '../components/LoveCoupons';
import EasterEggs from '../components/EasterEggs';
import FinaleFireworks from '../components/FinaleFireworks';
import Footer from '../components/Footer';

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#1a1446] text-white">
      <GateIntro onEnter={() => setHasEntered(true)} />
      <MusicPlayer autoPlayTrigger={hasEntered} />
      <CursorTrail />
      
      {/* Intro Scene with Castle */}
      <div className="relative">
        <StarFieldR3F />
        <Castle />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-[#ffd86b] drop-shadow-[0_0_15px_rgba(255,216,107,0.6)]">
            Untuk Deandra
          </h1>
          <p className="font-playfair text-slate-200 text-base md:text-xl mt-3 italic">
            Selamat datang di dunia ajaib kita
          </p>
        </div>
      </div>

      {/* Chapters & Interactive Sections */}
      <StorySection />
      <PhotoGallery />
      <LoveTimeline />
      <LoveCounter />
      <LoveLetter />
      <MiniGames />
      <WishingWall />
      <LoveCoupons />
      <EasterEggs />
      <FinaleFireworks />
      <Footer />
    </main>
  );
}
