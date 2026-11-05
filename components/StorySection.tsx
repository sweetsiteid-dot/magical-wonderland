'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  {
    title: 'Wahana 1: Gerbang Awal Pertemuan',
    badge: 'Awal Kisah',
    text: 'Di antara riuhnya dunia, takdir mempertemukan aku (Danial) dan kamu (Deandra). [GANTI: Tuliskan lokasi atau momen pertama kali kamu berkenalan atau mengobrol secara mendalam dengannya].',
  },
  {
    title: 'Wahana 2: Bianglala Momen Indah',
    badge: 'Kenangan Manis',
    text: 'Setiap putaran waktu bersama selalu membawa kehangatan. [GANTI: Tuliskan pengalaman kencan favorit kalian, misalnya saat jalan-jalan malam atau makan ice cream bertiga/berdua].',
  },
  {
    title: 'Wahana 3: Komedi Putar Kebahagiaan',
    badge: 'Canda & Tawa',
    text: 'Terima kasih telah hadir dan mewarnai hari-hariku dengan senyuman tulusmu. [GANTI: Tuliskan kebiasaan lucu Deandra yang selalu bikin kamu tersenyum].',
  },
];

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll('.story-card');
    sections?.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sec,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="py-24 px-6 max-w-4xl mx-auto space-y-32">
      {chapters.map((chap, idx) => (
        <div
          key={idx}
          className="story-card bg-[#1a1446]/60 backdrop-blur-lg border border-[#ffd86b]/30 p-8 md:p-10 rounded-2xl shadow-2xl relative"
        >
          <span className="text-xs font-cinzel font-bold text-[#ffb3d1] tracking-widest uppercase mb-2 block">
            {chap.badge}
          </span>
          <h2 className="font-cinzel text-2xl md:text-4xl text-[#ffd86b] font-bold mb-4">
            {chap.title}
          </h2>
          <p className="font-playfair text-slate-200 text-base md:text-lg leading-relaxed">
            {chap.text}
          </p>
        </div>
      ))}
    </div>
  );
}
