'use client';
import { useState } from 'react';
import Image from 'next/image';

const photos = [
  {
    src: '/foto1.jpg',
    caption: 'Momen Indah 1: [GANTI - Deskripsi Singkat Foto 1]',
    rotation: '-rotate-3',
  },
  {
    src: '/foto2.jpg',
    caption: 'Momen Indah 2: [GANTI - Deskripsi Singkat Foto 2]',
    rotation: 'rotate-3',
  },
];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="font-cinzel text-3xl md:text-4xl text-center text-[#ffd86b] font-bold mb-12">
        Galeri Kenangan Kita
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {photos.map((photo, i) => (
          <div
            key={i}
            onClick={() => setSelectedPhoto(photo.src)}
            className={`bg-white p-4 pb-8 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer max-w-xs ${photo.rotation}`}
          >
            <div className="relative w-64 h-72 bg-slate-200 overflow-hidden rounded">
              <Image src={photo.src} alt="Galeri" fill className="object-cover" />
            </div>
            <p className="font-playfair text-slate-800 text-center text-sm font-semibold mt-4">
              {photo.caption}
            </p>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-3xl w-full h-[80vh]">
            <Image src={selectedPhoto} alt="Zoom" fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
