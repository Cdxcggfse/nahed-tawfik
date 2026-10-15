import React, { useEffect, useRef } from 'react';
import { X, Volume2, VolumeX, Film, Clock3 } from 'lucide-react';

export default function ReelModal({ reel, onClose }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = React.useState(false);

  useEffect(() => {
    if (!reel) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, reel]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [reel]);

  if (!reel) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="sketch-box bg-white max-w-4xl w-full p-4 sm:p-6 rounded-3xl relative animate-scale-up grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-h-[92vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-3 -right-3 z-30 p-2.5 bg-[#E86D3B] text-white border-2 border-[#1E1E24] rounded-full shadow-[3px_3px_0px_#1E1E24] hover:scale-110 transition-transform"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="md:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[280px] phone-mockup-body aspect-[9/16] p-3 flex flex-col justify-between text-white overflow-hidden shadow-2xl">

            <div className="flex items-center justify-between text-xs px-2 pt-2 z-20">
              <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[10px] font-bold">
                {reel.badge || 'Client reel'}
              </span>
              <button
                onClick={() => {
                  setIsMuted(!isMuted);
                  if (videoRef.current) videoRef.current.muted = !isMuted;
                }}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
                className="p-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/20"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#3AAFA9]" />}
              </button>
            </div>

            <div className="absolute inset-0 bg-black flex items-center justify-center">
              {reel.videoSrc ? (
                <video
                  ref={videoRef}
                  src={reel.videoSrc}
                  poster={reel.poster}
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className={`w-full h-full ${reel.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                />
              ) : (
                <img src={reel.poster} alt={reel.title} className="w-full h-full object-cover" />
              )}
            </div>

            <div className="relative z-20 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-3 rounded-b-2xl pointer-events-none">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-[#E86D3B] flex items-center justify-center font-bold text-[10px]">
                  NT
                </div>
                <span className="font-bold text-xs">{reel.brand || '@nahed_tawfik'}</span>
              </div>
              <p className="text-xs text-gray-100 font-medium">{reel.title}</p>
            </div>

          </div>
        </div>

        <div className="md:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFE89C] border-2 border-[#1E1E24] px-3 py-1 rounded-full text-xs font-display font-bold">
            <Film className="w-4 h-4 text-[#E86D3B]" /> Client work — {reel.brand}
          </div>

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1E1E24]">
            {reel.title}
          </h3>

          <p className="text-sm text-[#4A4E69] leading-relaxed">
            {reel.desc}
          </p>

          {(reel.craft || reel.duration) && (
            <div className="bg-[#FAF6F0] border-2 border-[#1E1E24] p-4 rounded-2xl space-y-2">
              <h4 className="font-display font-bold text-xs text-[#E86D3B] uppercase tracking-wider flex items-center gap-2">
                Edit craft {reel.duration && <span className="inline-flex items-center gap-1 text-[#1E1E24] normal-case tracking-normal"><Clock3 className="w-3.5 h-3.5" /> {reel.duration}</span>}
              </h4>
              <ul className="space-y-1.5 text-xs text-[#1E1E24] font-medium">
                {(reel.craft || []).map((c, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${['bg-[#E86D3B]', 'bg-[#3AAFA9]', 'bg-[#F7D070]'][i % 3]}`} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-2 flex items-center gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="sketch-btn text-xs py-2.5 px-5"
            >
              Order a similar edit
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
