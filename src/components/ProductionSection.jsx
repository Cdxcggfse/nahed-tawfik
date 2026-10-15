import React from 'react';
import { Mic, Video } from 'lucide-react';
import { TapeStrip } from './HandDrawnDoodles';

export default function ProductionSection() {
  const productionServices = [
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
  ];

  return (
    <section id="production" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Hand-drawn Header Matching Reference Screenshot 2 */}
      <div className="mb-12">
        <span className="chapter-tag mb-4">03 · Production & execution</span>
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#1E1E24] mt-3">
          Creative production
        </h2>
        
        {/* Bullet List matching reference screenshot 2 */}
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-2 font-display font-bold text-xl sm:text-2xl text-[#1E1E24]">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#E86D3B] inline-block"></span>
              Voice -over
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#E86D3B] inline-block"></span>
              Reel making
            </li>
          </ul>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </section>
  );
}
