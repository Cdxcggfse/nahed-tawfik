import React, { useState } from 'react';
import { Play, Sparkles, Film, ArrowRight, Heart, Share2, MessageCircle, Volume2 } from 'lucide-react';
import { SketchyHeart, SketchyArrow, SketchyStar, TapeStrip } from './HandDrawnDoodles';
import { WhatsAppIcon } from './WhatsAppCTA';

export default function Hero({ onOpenReelModal }) {
  const [isHoveredProfile, setIsHoveredProfile] = useState(false);

  return (
    <section className="relative pt-8 pb-16 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Decorative Doodles */}
      <SketchyHeart className="w-16 h-16 text-[#E86D3B]/40 absolute top-6 left-4 sm:left-12 animate-float-slow" />
      <SketchyHeart className="w-10 h-10 text-[#E86D3B]/60 absolute top-24 right-12 sm:right-24 animate-pulse-heart" style={{ transform: 'rotate(15deg)' }} />
      <SketchyStar className="w-12 h-12 text-[#F7D070] absolute bottom-12 left-1/3 animate-float-reverse" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Text & Intro */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFE89C] border-2 border-[#1E1E24] px-4 py-1.5 rounded-full shadow-[3px_3px_0px_#1E1E24] transform rotate-[-1deg]">
            <Sparkles className="w-4 h-4 text-[#E86D3B]" />
            <span className="font-display font-bold text-xs sm:text-sm text-[#1E1E24]">
              Digital Marketing & Video Production Specialist 🎬
            </span>
          </div>

          {/* Headline */}
          <div className="relative">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-[#1E1E24] leading-[1.1] tracking-tight">
              Crafting Viral <br className="hidden sm:inline" />
              <span className="relative inline-block text-[#E86D3B]">
                Video Editing
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#E86D3B]" viewBox="0 0 200 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 8 C50 2, 150 12, 195 6" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span> & Storytelling.
            </h1>
          </div>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-xl text-[#4A4E69] leading-relaxed max-w-xl font-medium">
            Hi, I’m <strong className="text-[#1E1E24] font-bold">Nahed Tawfik</strong>! My journey blends <span className="text-[#E86D3B] font-semibold">creativity, psychology, and storytelling</span>. From market research to CapCut & Premiere Pro edits, I transform raw footage into high-converting reels and brand montages.
          </p>

          {/* Handwritten Quote Card (Matching Image 2 Reference) */}
          <div className="relative w-full max-w-lg bg-white border-3 border-[#1E1E24] p-4 sm:p-5 rounded-2xl shadow-[5px_5px_0px_#E86D3B] rotate-[-1deg]">
            <TapeStrip className="w-24 h-6 bg-[#F7D070]/80 top-[-10px] left-6 absolute rotate-[-4deg]" />
            <p className="font-cursive text-2xl sm:text-3xl text-[#E86D3B] leading-tight">
              “A designer is a visual problem solver with a creative soul.”
            </p>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-hand text-sm font-bold text-[#1E1E24]">— Nahed Tawfik</span>
              <SketchyHeart className="w-6 h-6 text-[#E86D3B]" />
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button 
              onClick={() => onOpenReelModal()} 
              className="sketch-btn group"
            >
              <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
              Watch Concept Reels
            </button>

            <a 
              href="https://api.whatsapp.com/send?text=Hi%20Nahed!%20I'd%20like%20to%20inquire%20about%20video%20editing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-display font-bold border-3 border-[#1E1E24] rounded-full shadow-[4px_4px_0px_#1E1E24] hover:scale-105 hover:-translate-y-0.5 active:translate-y-0 transition-all py-3 px-6 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            <a href="#strategy" className="sketch-btn-white">
              Explore Process
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Arrow pointing to CTA */}
          <div className="hidden sm:flex items-center gap-2 text-[#E86D3B] font-hand text-lg font-bold">
            <SketchyArrow className="w-14 h-10 text-[#E86D3B]" />
            <span>Check out my 4-step process below!</span>
          </div>

          {/* Skill Tag Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {['Reels & Shorts', 'Canva & CapCut', 'Market Research & SWOT', 'Voice-Over & Scriptwriting', 'Digital Marketing Diploma 2026'].map((tag, i) => (
              <span key={i} className="bg-white border-2 border-[#1E1E24] text-[#1E1E24] font-display font-semibold text-xs px-3 py-1 rounded-full shadow-[2px_2px_0px_#1E1E24]">
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Right Column: Interactive Phone Mockup & Profile Collage (Matching Image 1 & 2 Style) */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-center gap-6 relative">
          
          {/* Profile Polaroid Frame */}
          <div 
            className="relative w-64 bg-white border-3 border-[#1E1E24] p-3 rounded-2xl shadow-[6px_6px_0px_#1E1E24] transform rotate-[-4deg] hover:rotate-0 transition-transform duration-300"
            onMouseEnter={() => setIsHoveredProfile(true)}
            onMouseLeave={() => setIsHoveredProfile(false)}
          >
            <TapeStrip className="w-28 h-7 bg-[#FFE89C] absolute -top-3 left-16 rotate-[3deg] z-20" />
            <div className="relative aspect-4/5 rounded-xl overflow-hidden border-2 border-[#1E1E24] bg-[#FFE89C]">
              <img 
                src="/assets/profile/nahed_profile.jpg" 
                alt="Nahed Tawfik - Video Editor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                <span className="text-white font-display font-bold text-sm drop-shadow-md">
                  Nahed Tawfik 🎬
                </span>
              </div>
            </div>
            <div className="mt-3 text-center">
              <span className="font-hand font-extrabold text-[#E86D3B] text-xl block">
                Visual Content Editor
              </span>
              <span className="font-display text-xs text-[#4A4E69]">
                Cairo, Egypt 🇪🇬
              </span>
            </div>
          </div>

          {/* Sleek Instagram Reel Phone Mockup (Replicating Screenshot 1) */}
          <div className="relative w-64 sm:w-72 phone-mockup-body aspect-9/16 flex flex-col justify-between p-3 text-white transform rotate-[3deg] hover:rotate-0 transition-transform duration-300">
            
            {/* Top Reel Header */}
            <div className="flex items-center justify-between text-xs font-semibold px-2 pt-2 z-10">
              <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
                <Film className="w-3.5 h-3.5 text-[#E86D3B]" /> Reel Preview
              </span>
              <span className="bg-[#E86D3B] text-white px-2 py-0.5 rounded-full text-[10px] font-bold">
                LIVE CONCEPT
              </span>
            </div>

            {/* Middle Video / Motion Canvas */}
            <div 
              onClick={() => onOpenReelModal()}
              className="absolute inset-0 bg-neutral-900 cursor-pointer group flex items-center justify-center"
            >
              <video 
                src="assets/showcase.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback animated poster container if video file fails
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 bg-[#E86D3B] rounded-full border-2 border-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 text-white fill-current ml-1" />
                </div>
              </div>
            </div>

            {/* Instagram Style Overlay Icons Right Side */}
            <div className="absolute right-3 bottom-16 flex flex-col items-center gap-4 z-20">
              <button className="flex flex-col items-center gap-1 group">
                <div className="p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20 group-hover:bg-[#E86D3B] transition-colors">
                  <Heart className="w-5 h-5 text-white fill-current" />
                </div>
                <span className="text-[10px] font-bold">2.4k</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <div className="p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-bold">184</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <div className="p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
                  <Share2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-bold">Share</span>
              </button>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 rounded-b-2xl">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-[#E86D3B] flex items-center justify-center font-bold text-[10px]">
                  NT
                </div>
                <span className="font-bold text-xs">@nahed_tawfik</span>
              </div>
              <p className="text-[11px] text-gray-200 line-clamp-2">
                Concept reel breakdown: High retention editing & visual hooks ✨ #VideoEditing #Reels
              </p>
            </div>

            {/* Outer Doodle Hearts around Phone Mockup (Exactly like Screenshot 1) */}
            <SketchyHeart className="w-12 h-12 text-[#E86D3B] absolute -top-8 -right-6 z-30 animate-pulse-heart" />
            <SketchyHeart className="w-9 h-9 text-[#E86D3B] absolute bottom-4 -left-8 z-30" style={{ transform: 'rotate(-20deg)' }} />
          </div>

        </div>

      </div>

    </section>
  );
}
