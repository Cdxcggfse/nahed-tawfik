import React, { useState } from 'react';
import { Sliders, Film, Layers, Play, Pause, RotateCcw, Sparkles, Check, Monitor, Smartphone } from 'lucide-react';
import { SketchyHeart, TapeStrip } from './HandDrawnDoodles';

export default function EditingTimelineSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFilter, setActiveFilter] = useState('vibrant');
  const [playProgress, setPlayProgress] = useState(35);

  const filters = [
    { id: 'vibrant', name: 'Vibrant Pop', style: 'brightness-110 contrast-110 saturate-125' },
    { id: 'cinematic', name: 'Cinematic Teal/Orange', style: 'contrast-125 saturate-90 hue-rotate-15' },
    { id: 'bw', name: 'Comic B&W', style: 'grayscale contrast-150' },
    { id: 'normal', name: 'Raw Original', style: '' }
  ];

  return (
    <section id="editing" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Hand-drawn Header Matching Reference Screenshot 2 */}
      <div className="mb-12">
        <span className="font-hand font-extrabold text-[#E86D3B] text-2xl tracking-wide block mb-1">
          04. EDITING & TIMELINE MASTERY
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#E86D3B] flex items-center gap-3">
          4- Design &Editing:
        </h2>
        
        {/* Bullet List matching reference screenshot 2 */}
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <ul className="space-y-2 font-display font-bold text-xl sm:text-2xl text-[#1E1E24]">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#E86D3B] inline-block"></span>
              Designs on Canva
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#E86D3B] inline-block"></span>
              Reels on Capcut
            </li>
          </ul>
          <p className="text-[#4A4E69] text-base max-w-md font-medium">
            Combining graphic design precision in Canva with high-speed, dynamic editing in CapCut & Premiere Pro for max audience retention.
          </p>
        </div>
      </div>

      {/* Interactive Video Editor Timeline Component (Concept Suite) */}
      <div className="sketch-box bg-[#1E1E24] text-white p-4 sm:p-6 rounded-3xl shadow-[8px_8px_0px_#E86D3B] mb-12 border-3 border-[#1E1E24]">
        
        {/* Top Software Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="font-mono text-xs text-gray-400 ml-2">
              Nahed_Tawfik_Montage_Project.prproj (CapCut / Premiere Pro Suite)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 font-display">Aspect Ratio:</span>
            <span className="bg-[#E86D3B] text-white text-xs px-2.5 py-1 rounded-md font-bold flex items-center gap-1">
              <Smartphone className="w-3.5 h-3.5" /> 9:16 Reel Vertical
            </span>
          </div>
        </div>

        {/* Editor Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
          
          {/* Left / Center Preview Screen */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm aspect-9/16 bg-black rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl flex items-center justify-center group">
              
              {/* Concept Video Canvas */}
              <video 
                src="assets/showcase.mp4"
                autoPlay
                loop
                muted={!isPlaying}
                className={`w-full h-full object-cover transition-all duration-300 ${filters.find(f => f.id === activeFilter)?.style}`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />

              {/* Overlay Play Indicator */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
                <div className={`w-16 h-16 bg-[#E86D3B]/90 rounded-full flex items-center justify-center text-white border-2 border-white shadow-xl transition-all ${isPlaying ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-6 left-4 right-4 bg-black/60 backdrop-blur-md p-2.5 rounded-xl border border-white/20 text-center">
                <span className="font-display font-extrabold text-sm text-[#FFE89C] animate-pulse">
                  ⚡ "3 SECONDS TO HOOK YOUR AUDIENCE!"
                </span>
              </div>
            </div>
          </div>

          {/* Right Control & Color Grading Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Color Grading Filter Picker */}
            <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl">
              <h4 className="font-display font-bold text-sm text-gray-200 mb-3 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#E86D3B]" /> Color Grading & LUT Presets
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {filters.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-display font-semibold transition-all flex items-center justify-between ${
                      activeFilter === f.id
                        ? 'border-[#E86D3B] bg-[#E86D3B]/20 text-white'
                        : 'border-neutral-800 bg-neutral-950 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>{f.name}</span>
                    {activeFilter === f.id && <Check className="w-4 h-4 text-[#E86D3B]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Editing Tools Active Badges */}
            <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl space-y-2 text-xs font-mono">
              <div className="flex justify-between text-gray-300">
                <span>Speed Ramp:</span>
                <span className="text-[#3AAFA9] font-bold">1.2x Smooth Motion</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Auto-Captions:</span>
                <span className="text-[#FFE89C] font-bold">CapCut Dynamic Sync</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Sound Design:</span>
                <span className="text-[#E86D3B] font-bold">Pop / Whoosh SFX Layered</span>
              </div>
            </div>

            {/* Play Scrub Control */}
            <div className="flex items-center gap-3 bg-neutral-900 p-3 rounded-2xl border border-neutral-800">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 bg-[#E86D3B] rounded-xl text-white hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </button>
              <div className="flex-1 space-y-1">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={playProgress}
                  onChange={(e) => setPlayProgress(e.target.value)}
                  className="w-full accent-[#E86D3B] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-400">
                  <span>00:10.24</span>
                  <span>00:30.00</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Multi-Track Timeline Simulation */}
        <div className="bg-neutral-950 border border-neutral-800 p-4 rounded-2xl space-y-2">
          <div className="text-xs font-mono text-gray-400 mb-2 flex items-center justify-between">
            <span>MULTITRACK TIMELINE</span>
            <span>4 Active Tracks</span>
          </div>
          
          {/* Track 1: Text & Captions */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-amber-400 w-14">TEXT 1</span>
            <div className="flex-1 bg-neutral-900 h-6 rounded-lg p-1 flex items-center gap-2">
              <div className="w-1/4 h-full bg-amber-500/30 border border-amber-500 rounded text-[9px] text-amber-300 px-1 font-mono flex items-center">
                Hook Caption
              </div>
              <div className="w-1/3 h-full bg-amber-500/30 border border-amber-500 rounded text-[9px] text-amber-300 px-1 font-mono flex items-center">
                Subtitles Sync
              </div>
            </div>
          </div>

          {/* Track 2: Video Footage */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-[#E86D3B] w-14">VIDEO 1</span>
            <div className="flex-1 bg-neutral-900 h-6 rounded-lg p-1 flex items-center gap-1">
              <div className="w-1/3 h-full bg-[#E86D3B]/40 border border-[#E86D3B] rounded text-[9px] text-white px-1 font-mono flex items-center">
                Clip 01 (B-Roll)
              </div>
              <div className="w-1/2 h-full bg-[#E86D3B]/60 border border-[#E86D3B] rounded text-[9px] text-white px-1 font-mono flex items-center">
                Clip 02 (Zoom Transition)
              </div>
            </div>
          </div>

          {/* Track 3: Audio & Voiceover */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-[#3AAFA9] w-14">AUDIO 1</span>
            <div className="flex-1 bg-neutral-900 h-6 rounded-lg p-1 flex items-center gap-1">
              <div className="w-full h-full bg-[#3AAFA9]/30 border border-[#3AAFA9] rounded text-[9px] text-[#3AAFA9] px-1 font-mono flex items-center justify-between">
                <span>Voiceover_Arabic_Cleaned.wav</span>
                <span className="text-[8px]">100% Vol</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
