import React, { useEffect, useState } from 'react';
import { Play, Clock3 } from 'lucide-react';
import { SketchyHeart } from './HandDrawnDoodles';
import { REELS } from '../data/reels';

/* Touch devices never get the hover-preview, so mounting gallery <video>
   elements there is pure decode/memory overhead — show posters instead. */
function useHasHover() {
  // Read once at mount — phones should never mount the <video> elements at all
  const [hasHover, setHasHover] = useState(
    () => typeof window === 'undefined' || window.matchMedia('(hover: hover) and (pointer: fine)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setHasHover(mq.matches);
    const fn = (e) => setHasHover(e.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);
  return hasHover;
}

const FILTERS = [
  ['all', 'All reels'],
  ['food', 'Food & cafés'],
  ['ugc', 'UGC & promos'],
  ['product', 'Product & detail'],
];

export default function ReelShowcase({ onOpenModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const hasHover = useHasHover();

  const filtered = selectedCategory === 'all'
    ? REELS
    : REELS.filter((r) => r.category === selectedCategory);

  return (
    <section id="reels-showcase" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto relative scroll-mt-24">

      <SketchyHeart className="w-14 h-14 text-[#E86D3B]/40 absolute top-8 left-6 animate-pulse-heart" />

      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="chapter-tag mb-4">Real client reels</span>
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#1E1E24] mt-3">
          Fresh cuts, <span className="font-accent font-normal text-[#E4572E]">straight from the edit.</span>
        </h2>
        <p className="text-[#4A4E69] text-base mt-3 font-medium">
          Actual reels cut for cafés and brands across Egypt. Tap any phone to watch the full cut.
        </p>

        <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
          {FILTERS.map(([cat, label]) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all border-2 border-[#1E1E24] shadow-[3px_3px_0px_#1E1E24] ${
                selectedCategory === cat
                  ? 'bg-[#E86D3B] text-white'
                  : 'bg-white text-[#1E1E24] hover:bg-[#FFE89C]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 items-start justify-center">
        {filtered.map((reel) => (
          <div
            key={reel.id}
            onClick={() => onOpenModal(reel)}
            className="group cursor-pointer flex flex-col items-center"
          >
            <div className="relative w-full max-w-[280px] phone-mockup-body aspect-[9/16] p-3 flex flex-col justify-between text-white group-hover:-translate-y-2 transition-transform duration-300">

              <div className="flex items-center justify-between text-xs px-2 pt-2 z-10">
                <span className="bg-black/65 px-2 py-0.5 rounded-full border border-white/20 text-[10px] font-bold">
                  {reel.badge}
                </span>
                <span className="bg-black/65 px-2 py-0.5 rounded-full border border-white/20 text-[10px] font-bold flex items-center gap-1">
                  <Clock3 className="w-3 h-3" /> {reel.duration}
                </span>
              </div>

              <div className="absolute inset-0 bg-neutral-900 overflow-hidden flex items-center justify-center">
                {hasHover ? (
                  <video
                    src={reel.videoSrc}
                    poster={reel.poster}
                    muted
                    loop
                    playsInline
                    preload="none"
                    className={`w-full h-full ${reel.fit === 'contain' ? 'object-contain bg-black' : 'object-cover'}`}
                    onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  />
                ) : (
                  <img
                    src={reel.poster}
                    alt={`${reel.brand} — ${reel.title}`}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full ${reel.fit === 'contain' ? 'object-contain bg-black' : 'object-cover'}`}
                  />
                )}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/0 transition-colors flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 bg-[#E86D3B] rounded-full border-2 border-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-white fill-current ml-1" />
                  </div>
                </div>
              </div>

              <div className="relative z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 rounded-b-2xl pointer-events-none">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#FFE89C]">{reel.brand}</p>
                <h3 className="font-bold text-xs text-white mb-0.5 line-clamp-1">
                  {reel.title}
                </h3>
              </div>

            </div>

            <div className="mt-4 text-center max-w-[280px]">
              <p className="text-[13px] font-semibold text-[#4A4E69] leading-snug">{reel.desc}</p>
              <span className="font-hand font-bold text-lg text-[#E86D3B]">
                Tap to watch the full cut →
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
