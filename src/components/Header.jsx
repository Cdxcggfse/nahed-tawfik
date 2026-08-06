import React, { useState } from 'react';
import { Play, Sparkles, Volume2, VolumeX, Menu, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SketchyHeart } from './HandDrawnDoodles';

export default function Header({ onToggleSound, isMuted }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.15 },
      colors: ['#E86D3B', '#F7D070', '#3AAFA9', '#FF85A1']
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF6F0]/90 backdrop-blur-md border-b-3 border-[#1E1E24] py-3.5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-11 h-11 bg-[#E86D3B] border-2 border-[#1E1E24] rounded-2xl flex items-center justify-center shadow-[3px_3px_0px_#1E1E24] group-hover:rotate-6 transition-transform">
              <span className="font-display text-white font-extrabold text-xl">NT</span>
            </div>
            <SketchyHeart className="w-5 h-5 absolute -top-2 -right-2 text-[#E86D3B] animate-pulse-heart" />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl sm:text-2xl text-[#1E1E24] leading-tight tracking-tight flex items-center gap-1.5">
              Nahed Tawfik
              <span className="font-hand text-sm text-[#E86D3B] bg-[#FFE89C] px-2 py-0.5 rounded-full border border-[#1E1E24] hidden sm:inline-block rotate-[-2deg]">
                Video Editor
              </span>
            </h1>
            <p className="font-hand text-xs text-[#4A4E69] font-medium hidden sm:block">
              Visual Problem Solver with a Creative Soul ✨
            </p>
          </div>
        </a>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-6 font-display font-semibold text-sm">
          <a href="#strategy" className="hover:text-[#E86D3B] hover:scale-105 transition-all text-[#1E1E24]">
            1. Strategy
          </a>
          <a href="#research" className="hover:text-[#E86D3B] hover:scale-105 transition-all text-[#1E1E24]">
            2. Research
          </a>
          <a href="#production" className="hover:text-[#E86D3B] hover:scale-105 transition-all text-[#1E1E24]">
            3. Production
          </a>
          <a href="#editing" className="hover:text-[#E86D3B] hover:scale-105 transition-all text-[#1E1E24]">
            4. Editing & Reels
          </a>
          <a href="#designs" className="hover:text-[#E86D3B] hover:scale-105 transition-all text-[#1E1E24]">
            Showcase
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Confetti Sparkle Fun Button */}
          <button 
            onClick={triggerConfetti}
            title="Surprise Sparkle!"
            className="p-2.5 bg-white border-2 border-[#1E1E24] rounded-xl shadow-[3px_3px_0px_#1E1E24] hover:bg-[#FFE89C] hover:-translate-y-0.5 active:translate-y-0 transition-all text-[#1E1E24]"
          >
            <Sparkles className="w-5 h-5 text-[#E86D3B]" />
          </button>

          {/* Sound Toggle */}
          <button 
            onClick={onToggleSound}
            title={isMuted ? "Unmute Ambient Concept Sound" : "Mute Sound"}
            className="p-2.5 bg-white border-2 border-[#1E1E24] rounded-xl shadow-[3px_3px_0px_#1E1E24] hover:bg-[#FFE89C] hover:-translate-y-0.5 active:translate-y-0 transition-all text-[#1E1E24]"
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-gray-500" /> : <Volume2 className="w-5 h-5 text-[#3AAFA9]" />}
          </button>

          {/* Contact CTA */}
          <a 
            href="#contact" 
            className="hidden sm:inline-flex sketch-btn text-sm py-2 px-4 shadow-[3px_3px_0px_#1E1E24]"
          >
            Let's Create!
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 bg-white border-2 border-[#1E1E24] rounded-xl shadow-[3px_3px_0px_#1E1E24]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-white border-3 border-[#1E1E24] rounded-2xl shadow-[5px_5px_0px_#1E1E24] flex flex-col gap-3 font-display font-bold">
          <a href="#strategy" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100">1. Strategy & Planning</a>
          <a href="#research" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100">2. Market Research</a>
          <a href="#production" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100">3. Creative Production</a>
          <a href="#editing" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100">4. Design & Editing</a>
          <a href="#designs" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-gray-100">Showcase Gallery</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="sketch-btn text-center justify-center py-2.5 mt-2">
            Let's Create Together
          </a>
        </div>
      )}
    </header>
  );
}
