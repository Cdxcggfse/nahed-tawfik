import React, { useState } from 'react';
import { Film, Play, Heart, MessageCircle, Share2, Sparkles, Volume2, VolumeX, Maximize2, X } from 'lucide-react';
import { SketchyHeart, TapeStrip } from './HandDrawnDoodles';

export default function ReelShowcase({ onOpenModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const reels = [
    {
      id: 'reel-1',
      title: 'High-Retention Brand Reel',
      category: 'reels',
      views: '45.2K',
      likes: '3.8K',
      conceptDesc: 'Fast-paced vertical reel utilizing 2-second visual cut transitions, custom sound FX, and bold Canva typography overlays.',
      videoSrc: 'assets/showcase.mp4',
      badge: 'CapCut & Premiere'
    },
    {
      id: 'reel-2',
      title: 'Content Creator Story Montage',
      category: 'montage',
      views: '88.1K',
      likes: '7.4K',
      conceptDesc: 'Cinematic storytelling montage blending voice-over narrative, background score, and color-graded B-roll footage.',
      videoSrc: 'assets/Content Creator.mp4',
      badge: 'Voiceover & Script'
    },
    {
      id: 'reel-3',
      title: 'Product Launch Hook Short',
      category: 'reels',
      views: '29.6K',
      likes: '2.1K',
      conceptDesc: 'E-commerce product spotlight featuring split-screen transitions, animated arrows, and clear call-to-action overlays.',
      videoSrc: 'assets/showcase.mp4',
      badge: 'Canva & Reels'
    }
  ];

  const filteredReels = selectedCategory === 'all' 
    ? reels 
    : reels.filter(r => r.category === selectedCategory);

  return (
    <section id="reels-showcase" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      <SketchyHeart className="w-14 h-14 text-[#E86D3B]/40 absolute top-8 left-6 animate-pulse-heart" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="font-hand font-extrabold text-[#E86D3B] text-2xl tracking-wide block mb-1">
          🎬 CONCEPT REEL GALLERY
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#1E1E24]">
          Reels & Video Montage Showcase
        </h2>
        <p className="text-[#4A4E69] text-base mt-2 font-medium">
          Interactive concept demonstrations simulating real social media performance & vertical reel editing.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
          {['all', 'reels', 'montage'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all border-2 border-[#1E1E24] shadow-[3px_3px_0px_#1E1E24] ${
                selectedCategory === cat
                  ? 'bg-[#E86D3B] text-white'
                  : 'bg-white text-[#1E1E24] hover:bg-[#FFE89C]'
              }`}
            >
              {cat === 'all' ? 'All Concepts' : cat === 'reels' ? 'Reels & Shorts' : 'Video Montages'}
            </button>
          ))}
        </div>
      </div>

      {/* Reels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
        {filteredReels.map((reel) => (
          <div 
            key={reel.id}
            onClick={() => onOpenModal(reel)}
            className="group cursor-pointer flex flex-col items-center"
          >
            {/* Phone Frame Mockup (Matching Image 1 Reference) */}
            <div className="relative w-full max-w-[280px] phone-mockup-body aspect-9/16 p-3 flex flex-col justify-between text-white group-hover:-translate-y-2 transition-transform duration-300">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between text-xs px-2 pt-2 z-10">
                <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20 text-[10px] font-bold">
                  {reel.badge}
                </span>
                <span className="bg-[#E86D3B] text-white px-2 py-0.5 rounded-full text-[10px] text-xs font-bold">
                  {reel.views} Views
                </span>
              </div>

              {/* Video Preview */}
              <div className="absolute inset-0 bg-neutral-900 overflow-hidden flex items-center justify-center">
                <video 
                  src={reel.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#E86D3B] rounded-full border-2 border-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-white fill-current ml-1" />
                  </div>
                </div>
              </div>

              {/* Instagram Reel Action Icons */}
              <div className="absolute right-3 bottom-16 flex flex-col items-center gap-3 z-20">
                <div className="p-2 bg-black/40 rounded-full border border-white/20">
                  <Heart className="w-4 h-4 text-white fill-current" />
                </div>
                <span className="text-[10px] font-bold">{reel.likes}</span>
                <div className="p-2 bg-black/40 rounded-full border border-white/20">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Caption Overlay */}
              <div className="relative z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 rounded-b-2xl">
                <h3 className="font-bold text-xs text-white mb-1 line-clamp-1">
                  {reel.title}
                </h3>
                <p className="text-[10px] text-gray-300 line-clamp-2">
                  {reel.conceptDesc}
                </p>
              </div>

            </div>

            <div className="mt-4 text-center">
              <span className="font-hand font-bold text-lg text-[#E86D3B]">
                Click to Watch Concept Reel →
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
