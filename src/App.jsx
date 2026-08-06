import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StrategySection from './components/StrategySection';
import ResearchSection from './components/ResearchSection';
import ProductionSection from './components/ProductionSection';
import EditingTimelineSection from './components/EditingTimelineSection';
import ReelShowcase from './components/ReelShowcase';
import DesignGallery from './components/DesignGallery';
import ClientsSection from './components/ClientsSection';
import ContactSection from './components/ContactSection';
import ReelModal from './components/ReelModal';
import WhatsAppFloatingButton from './components/WhatsAppCTA';
import { SketchyHeart } from './components/HandDrawnDoodles';

export default function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [activeReelModal, setActiveReelModal] = useState(null);

  const defaultConceptReel = {
    title: 'Nahed Tawfik - Video Editor Showcase Reel',
    category: 'reels',
    views: '54.3K',
    likes: '4.2K',
    conceptDesc: 'High-impact concept montage demonstrating fast-cut video editing, CapCut transition timing, sound design, and custom Canva captions.',
    videoSrc: 'assets/showcase.mp4',
    badge: 'CapCut & Premiere Suite'
  };

  const handleOpenReelModal = (reelData = null) => {
    setActiveReelModal(reelData || defaultConceptReel);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1E1E24] relative overflow-x-hidden font-body">
      
      {/* Top Header */}
      <Header 
        isMuted={isMuted}
        onToggleSound={() => setIsMuted(!isMuted)} 
      />

      {/* Main Content Sections */}
      <main className="space-y-8 sm:space-y-12">
        <Hero onOpenReelModal={handleOpenReelModal} />
        
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="border-b-2 border-dashed border-[#1E1E24]/20 my-4"></div>
        </div>

        <StrategySection />

        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="border-b-2 border-dashed border-[#1E1E24]/20 my-4"></div>
        </div>

        <ResearchSection />

        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="border-b-2 border-dashed border-[#1E1E24]/20 my-4"></div>
        </div>

        <ProductionSection />

        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="border-b-2 border-dashed border-[#1E1E24]/20 my-4"></div>
        </div>

        <EditingTimelineSection />

        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="border-b-2 border-dashed border-[#1E1E24]/20 my-4"></div>
        </div>

        <ReelShowcase onOpenModal={handleOpenReelModal} />

        <DesignGallery />

        <ClientsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-[#1E1E24] text-white border-t-3 border-[#1E1E24] py-12 px-4 sm:px-8 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E86D3B] text-white rounded-xl font-display font-extrabold text-xl flex items-center justify-center border-2 border-white">
              NT
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">Nahed Tawfik</h4>
              <p className="font-hand text-xs text-[#FFE89C]">
                Video Editor & Creative Content Strategist 🎬
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 font-display text-xs text-gray-300">
            <a href="#strategy" className="hover:text-[#E86D3B] transition-colors">Strategy</a>
            <a href="#research" className="hover:text-[#E86D3B] transition-colors">Market Research</a>
            <a href="#production" className="hover:text-[#E86D3B] transition-colors">Production</a>
            <a href="#editing" className="hover:text-[#E86D3B] transition-colors">Editing Suite</a>
            <a href="#designs" className="hover:text-[#E86D3B] transition-colors">Canva Designs</a>
          </div>

          <div className="text-center md:text-right font-hand text-sm text-gray-400">
            © {new Date().getFullYear()} Nahed Tawfik. Crafted with <SketchyHeart className="w-4 h-4 text-[#E86D3B] inline mx-1" /> for Great Content.
          </div>
        </div>
      </footer>

      {/* Interactive Reel Play Modal */}
      {activeReelModal && (
        <ReelModal 
          reel={activeReelModal}
          onClose={() => setActiveReelModal(null)}
        />
      )}

      {/* Floating WhatsApp Quick-Chat CTA */}
      <WhatsAppFloatingButton />

    </div>
  );
}
