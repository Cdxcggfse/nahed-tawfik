import React, { useState } from 'react';
import { BarChart3, Shield, TrendingUp, Search, AlertCircle, Award } from 'lucide-react';
import { SketchyHeart, SketchyArrow } from './HandDrawnDoodles';

export default function ResearchSection() {
  const [flippedCard, setFlippedCard] = useState(null);

  const swotItems = [
    {
      type: "Strengths",
      icon: Award,
      color: "bg-[#EBFDF8] border-[#3AAFA9] text-[#1E7872]",
      badge: "S",
      frontText: "Deep Audience Psychology & Storytelling Skills",
      details: ["Cross-platform editing expertise (CapCut, Premiere, Canva)", "Bilingual script & strategy (Arabic & English)", "High-retention reel pacing & visual hooks"]
    },
    {
      type: "Weaknesses",
      icon: AlertCircle,
      color: "bg-[#FFF4F2] border-[#E86D3B] text-[#C95323]",
      badge: "W",
      frontText: "High Demand vs Creation Capacity Limits",
      details: ["Selective client onboarding to preserve edit quality", "Constant adaptation to shifting social algorithm trends"]
    },
    {
      type: "Opportunities",
      icon: TrendingUp,
      color: "bg-[#FFFBEB] border-[#F7D070] text-[#92400E]",
      badge: "O",
      frontText: "Exploding Demand for AI & Short-Form Video",
      details: ["Expanding short-form reel services for GCC brands", "Integrating dynamic AI visual elements into traditional edits"]
    },
    {
      type: "Threats",
      icon: Shield,
      color: "bg-[#F3F4F6] border-[#4A4E69] text-[#1E1E24]",
      badge: "T",
      frontText: "Saturated Short-Form Content Landscape",
      details: ["Differentiating via data-backed SWOT market research", "Maintaining high production values over generic template edits"]
    }
  ];

  return (
    <section id="research" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Hand-drawn Header Matching Reference Screenshot 2 */}
      <div className="mb-12">
        <span className="font-hand font-extrabold text-[#E86D3B] text-2xl tracking-wide block mb-1">
          02. ANALYTICS & MARKET AUDIT
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#E86D3B] flex items-center gap-3">
          2- Market Research & Analysis:
        </h2>
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <ul className="space-y-2 font-display font-bold text-xl sm:text-2xl text-[#1E1E24]">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#E86D3B] inline-block"></span>
              Swot Analysis
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#E86D3B] inline-block"></span>
              Competitors Analysis
            </li>
          </ul>
          <p className="text-[#4A4E69] text-base max-w-md font-medium">
            Before cutting a single video frame, I analyze target demographics, competitor performance benchmarks, and content gaps.
          </p>
        </div>
      </div>

      {/* Interactive SWOT Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {swotItems.map((item, idx) => {
          const Icon = item.icon;
          const isFlipped = flippedCard === idx;
          return (
            <div 
              key={idx}
              onClick={() => setFlippedCard(isFlipped ? null : idx)}
              className="cursor-pointer group perspective"
            >
              <div className={`sketch-box p-6 h-full flex flex-col justify-between transition-all ${item.color}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full border-2 border-[#1E1E24] bg-white flex items-center justify-center font-display font-bold text-lg shadow-[2px_2px_0px_#1E1E24]">
                    {item.badge}
                  </div>
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-xl text-[#1E1E24] mb-2">
                    {item.type}
                  </h3>
                  <p className="font-semibold text-sm text-[#1E1E24] mb-4">
                    {item.frontText}
                  </p>
                </div>

                {/* Expanded bullet details */}
                <div className="pt-3 border-t border-black/10">
                  <ul className="space-y-1.5 text-xs text-gray-700 font-medium">
                    {item.details.map((d, i) => (
                      <li key={i} className="flex items-baseline gap-1.5">
                        <span className="text-[#E86D3B] font-bold">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Competitor Analysis Breakdown Banner */}
      <div className="sketch-box p-6 sm:p-8 bg-white relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#FFE89C] border-2 border-[#1E1E24] px-3 py-1 rounded-full font-display font-bold text-xs">
              <Search className="w-4 h-4 text-[#E86D3B]" /> Competitor Benchmarking Strategy
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1E1E24]">
              Data-Driven Edits That Stand Out From The Crowd 🚀
            </h3>
            <p className="text-sm text-[#4A4E69] leading-relaxed">
              By auditing 20+ top niche competitors, I isolate hook patterns, retention drop-off points, and optimal caption styling to maximize watch time.
            </p>
          </div>

          {/* Chart Metric Visual */}
          <div className="md:w-1/2 w-full space-y-3 bg-[#FAF6F0] p-4 rounded-xl border-2 border-[#1E1E24]">
            <div>
              <div className="flex justify-between text-xs font-bold font-display mb-1">
                <span>Hook Retention (First 3 Sec)</span>
                <span className="text-[#E86D3B]">94% vs 62% Industry Avg</span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden border border-black">
                <div className="bg-[#E86D3B] h-full rounded-full w-[94%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold font-display mb-1">
                <span>Completion Rate (Reels / Shorts)</span>
                <span className="text-[#3AAFA9]">82% High Retention</span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden border border-black">
                <div className="bg-[#3AAFA9] h-full rounded-full w-[82%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold font-display mb-1">
                <span>Audience Engagement (Likes & Shares)</span>
                <span className="text-[#F7D070]">3.8x Competitor Benchmark</span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden border border-black">
                <div className="bg-[#F7D070] h-full rounded-full w-[88%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
