import React from 'react';

export default function EditingTimelineSection() {
  return (
    <section id="editing" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Hand-drawn Header Matching Reference Screenshot 2 */}
      <div>
        <span className="chapter-tag mb-4">04 · Editing & timeline</span>
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#1E1E24] mt-3">
          Design & edit, built for retention
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
    </section>
  );
}
