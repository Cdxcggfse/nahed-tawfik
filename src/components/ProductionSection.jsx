import React, { useState } from 'react';
import { PenTool, Mic, Video, Camera, Play, Pause, Volume2, Sparkles } from 'lucide-react';
import { SketchyHeart, TapeStrip } from './HandDrawnDoodles';

export default function ProductionSection() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const productionServices = [
    {
      title: "Writing Scripts",
      icon: PenTool,
      desc: "Hook-driven viral storytelling scripts designed for maximum retention, emotional connection, and high conversion.",
      accent: "bg-[#FFE89C]"
    },
    {
      title: "Voice-Over",
      icon: Mic,
      desc: "Professional voiceover narration, audio balancing, sound design, and noise cancellation for crisp studio-quality sound.",
      accent: "bg-[#EBFDF8]"
    },
    {
      title: "Reel Making",
      icon: Video,
      desc: "Full-service vertical video creation: dynamic jump-cuts, animated captions, SFX timing, and trend-setting motion.",
      accent: "bg-[#FFF8F5]"
    },
    {
      title: "Photography",
      icon: Camera,
      desc: "High-resolution product & lifestyle photo captures crafted specifically for video overlays, thumbnails, and social carousels.",
      accent: "bg-[#FFFBEB]"
    }
  ];

  return (
    <section id="production" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Hand-drawn Header Matching Reference Screenshot 2 */}
      <div className="mb-12">
        <span className="font-hand font-extrabold text-[#E86D3B] text-2xl tracking-wide block mb-1">
          03. PRODUCTION & EXECUTION
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#E86D3B] flex items-center gap-3">
          3-Creative production:
        </h2>
        
        {/* Bullet List matching reference screenshot 2 */}
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-2 font-display font-bold text-xl sm:text-2xl text-[#1E1E24]">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#E86D3B] inline-block"></span>
              Writing scripts
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#E86D3B] inline-block"></span>
              Voice -over
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#E86D3B] inline-block"></span>
              Reel making
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#E86D3B] inline-block"></span>
              photography
            </li>
          </ul>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {productionServices.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div key={idx} className="sketch-box p-6 relative group">
              <TapeStrip className="w-20 h-5 bg-[#F7D070]/70 top-[-8px] left-6 absolute rotate-[-3deg]" />
              <div className={`w-12 h-12 ${service.accent} border-2 border-[#1E1E24] rounded-2xl flex items-center justify-center shadow-[3px_3px_0px_#1E1E24] mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-[#1E1E24]" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#1E1E24] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#4A4E69] leading-relaxed">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Interactive Voice-Over & Script Simulator Card */}
      <div className="sketch-box p-6 sm:p-8 bg-white relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="md:w-1/2 space-y-4">
            <span className="font-hand font-bold text-lg text-[#E86D3B] bg-[#FFE89C] px-3 py-1 rounded-full border border-[#1E1E24] inline-block rotate-[-2deg]">
              🎙️ Interactive Audio & Script Preview
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1E1E24]">
              High-Impact Voiceover & Sound Design
            </h3>
            <p className="text-sm text-[#4A4E69] leading-relaxed">
              Audio accounts for over 50% of video engagement. I blend studio-level voice overs with custom background scores and sound effects (swooshes, pops, impacts).
            </p>

            {/* Interactive Audio Player Bar */}
            <div className="bg-[#FAF6F0] border-2 border-[#1E1E24] p-4 rounded-xl shadow-[4px_4px_0px_#1E1E24] flex items-center gap-4">
              <button 
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="w-12 h-12 bg-[#E86D3B] border-2 border-[#1E1E24] rounded-full flex items-center justify-center text-white shadow-[2px_2px_0px_#1E1E24] hover:scale-105 transition-transform"
              >
                {isPlayingAudio ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </button>

              <div className="flex-1 space-y-1">
                <div className="flex justify-between text-xs font-bold font-display">
                  <span>Sample Voiceover Demo</span>
                  <span className="text-[#E86D3B]">{isPlayingAudio ? '0:14 / 0:30' : 'Click Play'}</span>
                </div>
                {/* Waveform graphic */}
                <div className="flex items-center gap-1 h-6">
                  {[40, 75, 30, 90, 60, 100, 45, 80, 55, 95, 70, 40, 85, 65, 90, 50, 75, 45].map((h, i) => (
                    <div 
                      key={i} 
                      className={`flex-1 rounded-full transition-all duration-300 ${isPlayingAudio ? 'bg-[#E86D3B] animate-pulse' : 'bg-gray-300'}`}
                      style={{ height: isPlayingAudio ? `${Math.max(20, (h * Math.random()) % 100)}%` : `${h * 0.4}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Script Sample Card */}
          <div className="md:w-1/2 w-full bg-[#FFF8F5] border-2 border-[#E86D3B] p-5 rounded-2xl shadow-[4px_4px_0px_#E86D3B] relative">
            <TapeStrip className="w-24 h-6 bg-[#FFE89C] absolute -top-3 right-6 rotate-[3deg]" />
            <div className="flex items-center justify-between mb-3 border-b border-orange-200 pb-2">
              <span className="font-display font-bold text-sm text-[#E86D3B]">
                📄 Reel Script Blueprint Sample
              </span>
              <span className="font-hand text-xs text-[#4A4E69]">Target: 30 Secs</span>
            </div>
            <div className="space-y-2 text-xs font-mono text-[#1E1E24]">
              <p><strong className="text-[#E86D3B]">[00:00 - 00:03 HOOK]:</strong> "Stop editing videos like it's 2020! Here's the 1 retention secret top creators use..."</p>
              <p><strong className="text-[#3AAFA9]">[00:04 - 00:15 BODY]:</strong> [Visual: Fast zoom + pop SFX] "Pacing matters more than fancy effects. Every 2 seconds, change the visual element!"</p>
              <p><strong className="text-[#92400E]">[00:16 - 00:30 CTA]:</strong> [Visual: Animated arrow to profile] "Follow for daily editing breakdown guides!"</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
