'use client';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer({ autoPlayTrigger }: { autoPlayTrigger: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.log('Autoplay blocked:', err));
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-5 right-5 z-40 flex items-center gap-3 bg-[#1a1446]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#ffd86b]/30 shadow-lg">
      <audio ref={audioRef} src="/shapeofmyheart.mp3" loop />
      <div className="flex items-center gap-2 text-[#ffd86b]">
        <Music className={`w-4 h-4 ${isPlaying ? 'animate-spin' : ''}`} />
        <span className="text-xs font-cinzel font-medium hidden sm:inline">Shape of My Heart</span>
      </div>
      <button onClick={togglePlay} className="p-1.5 hover:text-[#ffd86b] transition-colors">
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>
      <button onClick={toggleMute} className="p-1.5 hover:text-[#ffd86b] transition-colors">
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
