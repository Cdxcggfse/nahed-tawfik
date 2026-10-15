import React, { useState } from 'react';
import { Calendar, Target, Globe, CheckCircle2, Sparkles, LayoutList, FileText } from 'lucide-react';
import { SketchyHeart, TapeStrip } from './HandDrawnDoodles';

export default function StrategySection() {
  const [activeTab, setActiveTab] = useState('english');

  const strategyPillars = [
    {
      title: "Content Strategy",
      desc: "Architecting narrative hooks, content positioning, and multi-channel publishing roadmap tailored to brand goals.",
      icon: Target,
      tag: "Core Blueprint"
    },
    {
      title: "Content Plan (English & Arabic)",
      desc: "Crafting culturally nuanced content calendars, bilingual scripts, and localized storytelling for GCC & Global audiences.",
      icon: Globe,
      tag: "Bilingual"
    },
    {
      title: "Content Calendar & Scheduling",
      desc: "Organized weekly and monthly publishing workflows ensuring high consistency, prime posting times, and trend alignment.",
      icon: Calendar,
      tag: "Execution"
    },
    {
      title: "Content Creation & Reels",
      desc: "Transforming high-performing ideas into scroll-stopping vertical videos, reels, and engaging carousel assets.",
      icon: Sparkles,
      tag: "Creative Production"
    }
  ];

  const sampleCalendarData = {
    english: [
      { day: "Mon", type: "Reel Hook", topic: "3 Secret Editing Tricks for 10x Retention", status: "Ready" },
      { day: "Wed", type: "Carousel", topic: "SWOT Analysis: Branding for 2026", status: "In Edit" },
      { day: "Fri", type: "Montage", topic: "Before & After CapCut Color Grading", status: "Scheduled" }
    ],
    arabic: [
      { day: "الإثنين", type: "فيديو قصير", topic: "أسرار صناعة المحتوى الجذاب في ٣ ثواني", status: "جاهز" },
      { day: "الأربعاء", type: "منشور متعدد", topic: "تحليل المنافسين وبناء الاستراتيجية", status: "قيد التعديل" },
      { day: "الجمعة", type: "مونتاج كامل", topic: "تحويل مقاطع الفيديو البسيطة إلى احترافية", status: "مجدول" }
    ]
  };

  return (
    <section id="strategy" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Decorative Doodles */}
      <SketchyHeart className="w-12 h-12 text-[#E86D3B]/40 absolute top-4 right-8 animate-float-slow" />

      {/* Hand-drawn Header Matching Reference Screenshot 2 */}
      <div className="mb-12">
        <span className="chapter-tag mb-4">01 · Foundation & planning</span>
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#1E1E24] mt-3">
          Content strategy & planning
        </h2>
        <p className="text-[#4A4E69] text-base sm:text-lg max-w-2xl mt-2 font-medium">
          Great video editing begins with strategic planning. Every cut, transition, and audio cue serves a psychological purpose.
        </p>
      </div>

      {/* Grid of Strategy Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {strategyPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div key={idx} className="sketch-box p-6 relative group">
              <TapeStrip className="w-24 h-6 bg-[#FFE89C]/80 top-[-10px] right-8 absolute rotate-[2deg]" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFE89C] border-2 border-[#1E1E24] rounded-2xl flex items-center justify-center shadow-[3px_3px_0px_#1E1E24] group-hover:bg-[#E86D3B] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6 text-[#1E1E24] group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-display font-bold text-xl text-[#1E1E24]">
                      {pillar.title}
                    </h3>
                    <span className="font-hand text-xs font-bold text-[#E86D3B] bg-[#FFF8F5] px-2 py-0.5 rounded-md border border-[#E86D3B]">
                      {pillar.tag}
                    </span>
                  </div>
                  <p className="text-sm text-[#4A4E69] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Bilingual Content Calendar Previewer */}
      <div className="sketch-box-orange p-6 sm:p-8 relative">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display font-bold text-2xl text-[#1E1E24] flex items-center gap-2">
              <Calendar className="w-6 h-6 text-[#E86D3B]" />
              Interactive Content Plan Preview (Bilingual)
            </h3>
            <p className="text-sm text-[#4A4E69] mt-0.5">
              Demonstration of structured multi-language posting calendars.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-2 bg-white border-2 border-[#1E1E24] p-1 rounded-xl shadow-[3px_3px_0px_#1E1E24]">
            <button
              onClick={() => setActiveTab('english')}
              className={`px-4 py-1.5 rounded-lg font-display font-bold text-xs transition-all ${
                activeTab === 'english'
                  ? 'bg-[#E86D3B] text-white shadow-xs'
                  : 'text-[#1E1E24] hover:bg-gray-100'
              }`}
            >
              English Plan
            </button>
            <button
              onClick={() => setActiveTab('arabic')}
              className={`px-4 py-1.5 rounded-lg font-display font-bold text-xs transition-all ${
                activeTab === 'arabic'
                  ? 'bg-[#E86D3B] text-white shadow-xs'
                  : 'text-[#1E1E24] hover:bg-gray-100'
              }`}
            >
              خطة المحتوى العربي
            </button>
          </div>
        </div>

        {/* Content Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sampleCalendarData[activeTab].map((item, idx) => (
            <div key={idx} className="bg-white border-2 border-[#1E1E24] p-4 rounded-xl shadow-[3px_3px_0px_#1E1E24] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-sm bg-[#FFE89C] px-2.5 py-0.5 rounded-full border border-[#1E1E24]">
                    {item.day}
                  </span>
                  <span className="font-hand font-bold text-xs text-[#3AAFA9] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {item.status}
                  </span>
                </div>
                <h4 className="font-display font-bold text-base text-[#1E1E24] mb-1">
                  {item.topic}
                </h4>
              </div>
              <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                <span>Format: {item.type}</span>
                <FileText className="w-4 h-4 text-[#E86D3B]" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
