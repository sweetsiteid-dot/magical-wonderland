import type { Metadata } from 'next';
import { Cinzel, Playfair_Display } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Deandra's Magical Kingdom 🏰✨",
  description: 'Taman keajaiban khusus yang diciptakan untuk Deandra dari Danial.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${cinzel.variable} ${playfair.variable}`}>
      <body className="bg-[#1a1446] text-white antialiased selection:bg-[#ffd86b] selection:text-slate-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
