import React from 'react';

// Hand-drawn sketchy heart matching the user's reference image
export const SketchyHeart = ({ className = "w-12 h-12 text-[#E86D3B]", style = {} }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    style={style}
  >
    <path 
      d="M50 88 C35 75, 12 55, 12 33 C12 18, 24 8, 38 8 C46 8, 50 14, 50 14 C50 14, 54 8, 62 8 C76 8, 88 18, 88 33 C88 55, 65 75, 50 88 Z" 
      stroke="currentColor" 
      strokeWidth="5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M48 84 C36 72, 16 53, 16 35 C16 22, 26 13, 37 13 C44 13, 48 18, 48 18" 
      stroke="currentColor" 
      strokeWidth="3.5" 
      strokeLinecap="round"
      opacity="0.85"
    />
  </svg>
);

// Hand-drawn sketchy arrow pointing to CTAs / key text
export const SketchyArrow = ({ className = "w-16 h-16 text-[#E86D3B]", style = {} }) => (
  <svg 
    viewBox="0 0 120 80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`inline-block ${className}`}
    style={style}
  >
    <path 
      d="M10 20 C40 10, 70 25, 100 50" 
      stroke="currentColor" 
      strokeWidth="5" 
      strokeLinecap="round" 
      fill="none" 
    />
    <path 
      d="M80 52 L102 52 L95 32" 
      stroke="currentColor" 
      strokeWidth="5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="none" 
    />
  </svg>
);

// Hand-drawn star doodle
export const SketchyStar = ({ className = "w-8 h-8 text-[#F7D070]", style = {} }) => (
  <svg 
    viewBox="0 0 50 50" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    style={style}
  >
    <path 
      d="M25 3 L31 17 L46 19 L35 29 L38 44 L25 36 L12 44 L15 29 L4 19 L19 17 Z" 
      stroke="currentColor" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.2"
    />
  </svg>
);

// Hand-drawn squiggle line accent
export const SketchySquiggle = ({ className = "w-24 h-6 text-[#E86D3B]" }) => (
  <svg 
    viewBox="0 0 120 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M5 10 Q 20 2, 35 10 T 65 10 T 95 10 T 115 10" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      fill="none" 
    />
  </svg>
);

// Hand-drawn tape strip
export const TapeStrip = ({ className = "w-28 h-7 bg-[#F7D070]/75" }) => (
  <div className={`border border-dashed border-[#1E1E24]/30 backdrop-blur-xs shadow-xs transform rotate-[-6deg] ${className}`}></div>
);
