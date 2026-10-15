import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { SketchyHeart, TapeStrip } from './HandDrawnDoodles';

export default function ClientsSection() {
  // Real client logos — cafés, restaurants & brands Nahed edits for
  const clientImages = [
    { src: '/assets/clients/client_48.jpg', label: 'Cilantro' },
    { src: '/assets/clients/rush-mart.jpg', label: 'Rush Mart' },
    { src: '/assets/clients/mirola.jpg', label: 'Mirola Cheesecake' },
    { src: '/assets/clients/alex48.jpg', label: 'Alex 48' },
    { src: '/assets/clients/covia.jpg', label: 'Covia' },
    { src: '/assets/clients/azooz.jpg', label: 'Azooz' },
    { src: '/assets/clients/cairo-furniture.jpg', label: 'Cairo Furniture' },
    { src: '/assets/clients/client_36.jpg', label: 'Malaz' },
    { src: '/assets/clients/client_31.jpg', label: '30 North' },
    { src: '/assets/clients/client_50.jpg', label: 'BNB' },
    { src: '/assets/clients/client_10.jpg', label: 'Crimson' },
    { src: '/assets/clients/client_11.jpg', label: 'Waselah' },
  ];

  const testimonials = [
    {
      brand: 'Palermo Coffee',
      context: 'Specialty coffee — product reels',
      quote: 'The matcha pour reel made our new menu launch feel premium. Filmed, cut and captioned — ready to post in days.',
      rating: 5
    },
    {
      brand: 'Rush Mart',
      context: 'Retail chain — brand reels',
      quote: 'Real staff, real counter, cut like an ad. Nahed directs on the spot and the edit carries the brand energy.',
      rating: 5
    },
    {
      brand: 'Cilantro',
      context: 'Café brand — food films',
      quote: 'Appetite-first cuts that actually look like the food tastes. Our croissant film still pulls saves and shares.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      <SketchyHeart className="w-12 h-12 text-[#E86D3B]/40 absolute top-4 left-10 animate-float-slow" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="chapter-tag mb-4">Clients & collaborations</span>
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#1E1E24] mt-3">
          Trusted by creators & brands
        </h2>
        <p className="text-[#4A4E69] text-base mt-2 font-medium">
          Delivering high-impact video edits and strategy for digital campaigns across the region.
        </p>
      </div>

      {/* Client Logos / Asset Wall */}
      <div className="sketch-box p-6 bg-white mb-12">
        <h3 className="font-display font-bold text-lg text-center text-[#1E1E24] mb-6 flex items-center justify-center gap-2">
          <Award className="w-5 h-5 text-[#E86D3B]" /> Client Projects & Brand Portfolio
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clientImages.map((client, idx) => (
            <div key={idx} className="p-2 bg-[#FAF6F0] rounded-xl border-2 border-[#1E1E24] flex items-center justify-center hover:scale-105 hover:shadow-[3px_3px_0px_#E86D3B] transition-all aspect-square overflow-hidden">
              <img 
                src={client.src} 
                alt={client.label} 
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => { e.target.style.opacity = '0.3'; }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="sketch-box p-6 bg-white relative flex flex-col justify-between">
            <TapeStrip className="w-20 h-5 bg-[#FFE89C]/80 top-[-8px] right-6 absolute rotate-[3deg]" />
            <div>
              <div className="flex items-center gap-1 text-[#F7D070] mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#4A4E69] italic leading-relaxed mb-4">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="font-display font-bold text-base text-[#1E1E24]">
                  {t.brand}
                </h4>
                <span className="text-xs text-[#E86D3B] font-medium block">
                  {t.context}
                </span>
              </div>
              <Quote className="w-6 h-6 text-[#E86D3B]/40" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
