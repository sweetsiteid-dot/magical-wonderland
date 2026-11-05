'use client';

const timelineData = [
  {
    date: '[GANTI: 01 Januari 2024]',
    title: 'Pertemuan Pertama',
    desc: '[GANTI: Momen pertama kali ngobrol atau bertatap muka].',
  },
  {
    date: '[GANTI: 14 Februari 2024]',
    title: 'Momen Spesial Bersama',
    desc: '[GANTI: Ceritakan kencan atau pernyataan perasaan pertama].',
  },
  {
    date: 'Hari Ini',
    title: 'Petualangan Masih Berlanjut',
    desc: 'Bersamamu, Deandra, setiap hari adalah perayaan kebahagiaan.',
  },
];

export default function LoveTimeline() {
  return (
    <div className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="font-cinzel text-3xl md:text-4xl text-center text-[#ffd86b] font-bold mb-16">
        Garis Waktu Perjalanan Cinta
      </h2>
      <div className="relative border-l-2 border-[#ffd86b]/40 ml-4 md:ml-32 space-y-12">
        {timelineData.map((item, idx) => (
          <div key={idx} className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#ffd86b] shadow-[0_0_10px_#ffd86b]" />
            <span className="text-xs font-cinzel text-[#ffb3d1] font-bold block mb-1">
              {item.date}
            </span>
            <h3 className="font-cinzel text-xl text-[#ffd86b] font-semibold mb-2">
              {item.title}
            </h3>
            <p className="font-playfair text-slate-300 text-sm md:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
