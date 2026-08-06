import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Heart, Share2, Film, Sparkles } from 'lucide-react';
import { SketchyHeart } from './HandDrawnDoodles';

export default function ReelModal({ reel, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!reel) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="sketch-box bg-white max-w-4xl w-full p-4 sm:p-6 rounded-3xl relative animate-scale-up grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute -top-3 -right-3 z-30 p-2.5 bg-[#E86D3B] text-white border-2 border-[#1E1E24] rounded-full shadow-[3px_3px_0px_#1E1E24] hover:scale-110 transition-transform"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Phone Player */}
        <div className="md:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[280px] phone-mockup-body aspect-9/16 p-3 flex flex-col justify-between text-white overflow-hidden shadow-2xl">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between text-xs px-2 pt-2 z-20">
              <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[10px] font-bold">
                {reel.badge || 'Reel Breakdown'}
              </span>
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/20"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#3AAFA9]" />}
              </button>
            </div>

            {/* Video Canvas */}
            <div 
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 bg-black cursor-pointer flex items-center justify-center"
            >
              <video 
                src={reel.videoSrc || 'assets/showcase.mp4'} 
                autoPlay 
                loop 
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#E86D3B] rounded-full flex items-center justify-center border-2 border-white shadow-xl">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-20 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-3 rounded-b-2xl">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-[#E86D3B] flex items-center justify-center font-bold text-[10px]">
                  NT
                </div>
                <span className="font-bold text-xs">@nahed_tawfik</span>
              </div>
              <p className="text-xs text-gray-100 font-medium">
                {reel.title}
              </p>
            </div>

          </div>
        </div>

        {/* Right Column: Breakdown & Editing Notes */}
        <div className="md:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFE89C] border-2 border-[#1E1E24] px-3 py-1 rounded-full text-xs font-display font-bold">
            <Film className="w-4 h-4 text-[#E86D3B]" /> Concept Video Breakdown
          </div>

          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1E1E24]">
            {reel.title}
          </h3>

          <p className="text-sm text-[#4A4E69] leading-relaxed">
            {reel.conceptDesc || 'This video breakdown showcases how strategic hooks, CapCut speed ramping, and Canva graphic overlays drive 3x higher watch retention.'}
          </p>

          <div className="bg-[#FAF6F0] border-2 border-[#1E1E24] p-4 rounded-2xl space-y-2">
            <h4 className="font-display font-bold text-xs text-[#E86D3B] uppercase tracking-wider">
              Key Production Elements:
            </h4>
            <ul className="space-y-1.5 text-xs text-[#1E1E24] font-medium">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E86D3B]"></span>
                Hook Pacing: Changed visual angle every 1.8 seconds.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3AAFA9]"></span>
                Audio Balance: Normalized voiceover to -3dB with low EQ cut.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F7D070]"></span>
                Graphics: Custom Canva animated arrows & text callouts.
              </li>
            </ul>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <a 
              href="#contact" 
              onClick={onClose}
              className="sketch-btn text-xs py-2.5 px-5"
            >
              Order a Similar Edit 🚀
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
