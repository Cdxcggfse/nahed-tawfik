import React, { useState } from 'react';
import { ZoomIn, Sparkles, Image, X, Maximize2 } from 'lucide-react';
import { SketchyHeart, TapeStrip } from './HandDrawnDoodles';

export default function DesignGallery() {
  const [activeImage, setActiveImage] = useState(null);

  // Curated design images selected by Nahed
  const designItems = [
    { src: '/assets/designs/design_09.jpg', title: 'Content Strategy Visual', tag: 'Canva Design' },
    { src: '/assets/designs/design_14.jpg', title: 'Creative Storyboard Asset', tag: 'Design' },
    { src: '/assets/designs/client_02.jpg', title: 'Brand Identity Mockup', tag: 'Branding' },
    { src: '/assets/designs/client_04.jpg', title: 'Reel Cover & Thumbnail Frame', tag: 'Canva Design' },
    { src: '/assets/designs/client_05.jpg', title: 'Social Media Graphic Asset', tag: 'Graphics' },
    { src: '/assets/designs/client_13.jpg', title: 'Audience Engagement Layout', tag: 'Infographic' },
    { src: '/assets/designs/client_47.jpg', title: 'Campaign Visual Design', tag: 'Canva' },
  ];

  return (
    <section id="designs" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      <SketchyHeart className="w-10 h-10 text-[#E86D3B]/50 absolute top-4 right-12 animate-float-slow" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="font-hand font-extrabold text-[#E86D3B] text-2xl tracking-wide block mb-1">
          🎨 GRAPHIC & CANVA WORKS
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#1E1E24]">
          Designs on Canva & Visual Showcase
        </h2>
        <p className="text-[#4A4E69] text-base mt-2 font-medium">
          A collection of graphic designs, reel covers, infographics, and visual assets crafted for client campaigns.
        </p>
      </div>

      {/* Responsive Uncropped Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {designItems.map((item, idx) => (
          <div 
            key={idx}
            onClick={() => setActiveImage(item)}
            className="sketch-box p-4 bg-white cursor-pointer group relative flex flex-col justify-between hover:rotate-0 transition-transform duration-300"
          >
            <TapeStrip className="w-24 h-6 bg-[#FFE89C]/80 top-[-10px] left-6 absolute rotate-[-3deg] z-10" />
            
            {/* Image Container - Displays complete uncropped image */}
            <div className="w-full min-h-[260px] max-h-[380px] rounded-2xl overflow-hidden border-2 border-[#1E1E24] bg-[#FAF6F0] p-2 flex items-center justify-center relative group-hover:border-[#E86D3B] transition-colors">
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-contain rounded-xl group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl backdrop-blur-xs">
                <div className="w-12 h-12 bg-[#E86D3B] text-white rounded-full flex items-center justify-center border-2 border-white shadow-lg font-bold text-xs gap-1 px-3">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Title & Tag */}
            <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
              <h3 className="font-display font-bold text-base text-[#1E1E24] line-clamp-1">
                {item.title}
              </h3>
              <span className="font-hand font-bold text-xs text-[#E86D3B] bg-[#FFF8F5] px-2.5 py-1 rounded-lg border border-[#E86D3B] whitespace-nowrap">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Uncropped Fullscreen View */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="sketch-box bg-white max-w-4xl w-full p-4 sm:p-6 rounded-3xl relative animate-scale-up"
          >
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-[#E86D3B] text-white border-2 border-[#1E1E24] rounded-full shadow-[2px_2px_0px_#1E1E24] hover:scale-110 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden border-2 border-[#1E1E24] bg-[#1E1E24] p-3 mb-4 max-h-[75vh] flex items-center justify-center">
              <img 
                src={activeImage.src} 
                alt={activeImage.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-extrabold text-2xl text-[#1E1E24]">
                  {activeImage.title}
                </h3>
                <p className="font-hand text-base text-[#E86D3B] font-bold">
                  Created by Nahed Tawfik using Canva & Photoshop
                </p>
              </div>
              <span className="sketch-btn text-xs py-2 px-4">
                {activeImage.tag}
              </span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
