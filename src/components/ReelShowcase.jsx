import React, { useState } from 'react';
import { Play, Clock3 } from 'lucide-react';
import { SketchyHeart } from './HandDrawnDoodles';

const REELS = [
  {
    id: 'palermo-matcha',
    brand: 'Palermo Coffee',
    title: 'Matcha Pour — product reel',
    category: 'food',
    duration: '0:17',
    desc: 'Slow-pour product moment for a specialty coffee menu launch. Graded warm, paced to the pour.',
    videoSrc: '/assets/reels/palermo-matcha.mp4',
    poster: '/assets/reels/palermo-matcha.jpg',
    badge: 'Product reel',
    craft: ['Macro pour pacing', 'Warm color grade', 'Menu-launch hook'],
  },
  {
    id: 'spanish-latte',
    brand: 'Palermo Coffee',
    title: 'Iced Spanish Latte — type cut',
    category: 'food',
    duration: '0:12',
    desc: 'Kinetic typography over a three-drink lineup. One line of type does all the selling.',
    videoSrc: '/assets/reels/spanish-latte.mp4',
    poster: '/assets/reels/spanish-latte.jpg',
    badge: 'Kinetic type',
    craft: ['Animated title lockup', 'Lineup framing', 'Tight 12-sec pacing'],
  },
  {
    id: 'trio-labels',
    brand: 'Café Menu Series',
    title: 'Mocha · Matcha · Caramel — label edit',
    category: 'food',
    duration: '0:07',
    desc: 'Seven seconds, three drinks, zero confusion. Bold labels synced to each serve.',
    videoSrc: '/assets/reels/trio-labels.mp4',
    poster: '/assets/reels/trio-labels.jpg',
    badge: 'Label edit',
    craft: ['Synced drink labels', 'Server-action pacing', 'High-energy cut'],
  },
  {
    id: 'cilantro-croissant',
    brand: 'Cilantro',
    title: 'Croissant — food film',
    category: 'food',
    duration: '0:21',
    desc: 'Appetite-first food film for a café menu hero. Slow push-ins, crispy detail, no rush.',
    videoSrc: '/assets/reels/cilantro-croissant.mp4',
    poster: '/assets/reels/cilantro-croissant.jpg',
    badge: 'Food film',
    craft: ['Appetite pacing', 'Detail close-ups', 'Natural-light grade'],
  },
  {
    id: 'inout-cafe',
    brand: 'In & Out Café',
    title: 'Bilingual walkthrough — UGC',
    category: 'ugc',
    duration: '0:23',
    desc: 'Arabic-captioned walkthrough cut for a café opening. Presenter energy, location-first framing.',
    videoSrc: '/assets/reels/inout-cafe.mp4',
    poster: '/assets/reels/inout-cafe.jpg',
    badge: 'Bilingual UGC',
    craft: ['Arabic animated captions', 'Walkthrough structure', 'Opening-day hook'],
  },
  {
    id: 'rushmart-pour',
    brand: 'Rush Mart',
    title: 'Barista pour — brand reel',
    category: 'ugc',
    duration: '0:18',
    desc: 'In-uniform brand moment for a mart chain. Real staff, real counter, cut like an ad.',
    videoSrc: '/assets/reels/rushmart-pour.mp4',
    poster: '/assets/reels/rushmart-pour.jpg',
    badge: 'Brand reel',
    craft: ['Staff-as-talent direction', 'Brand-color grade', 'Pour-to-smile arc'],
  },
  {
    id: 'mirola-breakfast',
    brand: 'Mirola Cheese Cake',
    title: 'Breakfast spread — testimonial UGC',
    category: 'food',
    duration: '0:22',
    desc: 'Street-side testimonial for a cheesecake spot. Breakfast spread up front, Arabic captions throughout.',
    videoSrc: '/assets/reels/mirola-breakfast.mp4',
    poster: '/assets/reels/mirola-breakfast.jpg',
    badge: 'Testimonial UGC',
    craft: ['Arabic animated captions', 'Food-first framing', 'Street-testimonial pacing'],
  },
  {
    id: 'mirola-coffee-talk',
    brand: 'Mirola Cheese Cake',
    title: 'Coffee chat — storefront UGC',
    category: 'food',
    duration: '0:48',
    desc: 'Relaxed storefront chat cut for Mirola. One take, captioned and paced to hold the full story.',
    videoSrc: '/assets/reels/mirola-coffee-talk.mp4',
    poster: '/assets/reels/mirola-coffee-talk.jpg',
    badge: 'Storefront UGC',
    craft: ['Arabic animated captions', 'Single-take retention cut', 'Brand-in-frame composition'],
  },
  {
    id: 'branch-launch-talk',
    brand: 'Store Launch',
    title: 'New branch announcement — UGC',
    category: 'ugc',
    duration: '0:21',
    desc: 'Founder-style announcement for a new branch opening. Captions carry the key details.',
    videoSrc: '/assets/reels/branch-launch-talk.mp4',
    poster: '/assets/reels/branch-launch-talk.jpg',
    badge: 'Announcement UGC',
    craft: ['Arabic animated captions', 'Announcement hook', 'Location-first framing'],
  },
  {
    id: 'furniture-workshop-tour',
    brand: 'Furniture Store',
    title: 'Workshop walkthrough — price-hook promo',
    category: 'ugc',
    duration: '1:16',
    desc: 'Factory-floor walkthrough that sells on price. Bold title cards keep a long cut moving.',
    videoSrc: '/assets/reels/furniture-workshop-tour.mp4',
    poster: '/assets/reels/furniture-workshop-tour.jpg',
    badge: 'Promo walkthrough',
    craft: ['Price-hook title cards', 'Walkthrough structure', 'Long-form retention pacing'],
  },
  {
    id: 'furnish-your-home',
    brand: 'Furniture Brand',
    title: 'Full-home offer — talking head',
    category: 'ugc',
    duration: '0:30',
    desc: 'Direct-to-camera offer cut for a furniture brand. One promise, captioned word by word.',
    videoSrc: '/assets/reels/furnish-your-home.mp4',
    poster: '/assets/reels/furnish-your-home.jpg',
    badge: 'Talking head',
    craft: ['Word-by-word captions', 'Single-promise script', 'Clean indoor grade'],
  },
  {
    id: 'pizza-discount-promo',
    brand: 'Pizza Restaurant',
    title: 'Discount callout — in-store promo',
    category: 'food',
    duration: '0:15',
    desc: 'Fifteen-second discount driver shot in-store. Offer text lands in the first second.',
    videoSrc: '/assets/reels/pizza-discount-promo.mp4',
    poster: '/assets/reels/pizza-discount-promo.jpg',
    badge: 'Offer promo',
    craft: ['First-second offer hook', 'In-store energy', 'Tight 15-sec pacing'],
  },
  {
    id: 'alex48-branch-intro',
    brand: 'Alex 48',
    title: 'Branch intro — presenter UGC',
    category: 'ugc',
    duration: '0:16',
    desc: 'Presenter-led branch intro for a pizza spot. Menu wall behind her does half the selling.',
    videoSrc: '/assets/reels/alex48-branch-intro.mp4',
    poster: '/assets/reels/alex48-branch-intro.jpg',
    badge: 'Presenter UGC',
    craft: ['Presenter direction', 'Menu-wall backdrop', 'Daylight exterior grade'],
  },
  {
    id: 'alex48-hook-talk',
    brand: 'Alex 48',
    title: 'Hook-first pitch — captioned cut',
    category: 'ugc',
    duration: '0:24',
    desc: 'Caption-driven pitch for Alex 48. The hook line stays on screen until it lands.',
    videoSrc: '/assets/reels/alex48-hook-talk.mp4',
    poster: '/assets/reels/alex48-hook-talk.jpg',
    badge: 'Captioned pitch',
    craft: ['Arabic hook captions', 'Outdoor daylight grade', 'Punchy 24-sec arc'],
  },
  {
    id: 'rushmart-ice-lineup',
    brand: 'Rush Mart',
    title: 'Iced lineup — product build',
    category: 'food',
    duration: '0:43',
    desc: 'Step-by-step iced-drink build across four cups. Process pacing that viewers finish.',
    videoSrc: '/assets/reels/rushmart-ice-lineup.mp4',
    poster: '/assets/reels/rushmart-ice-lineup.jpg',
    badge: 'Process reel',
    craft: ['Step-by-step pacing', 'Brand-color grade', 'Overhead product framing'],
  },
  {
    id: 'rushmart-mojito-make',
    brand: 'Rush Mart',
    title: 'Mojito mix — staff spotlight',
    category: 'food',
    duration: '0:18',
    desc: 'Staff spotlight reel: one mojito, mixed to camera. Counter-level framing, brand red grade.',
    videoSrc: '/assets/reels/rushmart-mojito-make.mp4',
    poster: '/assets/reels/rushmart-mojito-make.jpg',
    badge: 'Staff spotlight',
    craft: ['Staff-as-talent direction', 'Counter-level framing', 'Brand-red grade'],
  },
  {
    id: 'rushmart-branch-duo',
    brand: 'Rush Mart',
    title: 'Branch duo — street promo',
    category: 'ugc',
    duration: '1:45',
    desc: 'Two-presenter street promo outside the branch. Conversational cut with a location payoff.',
    videoSrc: '/assets/reels/rushmart-branch-duo.mp4',
    poster: '/assets/reels/rushmart-branch-duo.jpg',
    badge: 'Street promo',
    craft: ['Duo-presenter direction', 'Branch exterior payoff', 'Long-form conversation cut'],
  },
  {
    id: 'rushmart-walkin-pov',
    brand: 'Rush Mart',
    title: 'Walk-in POV — store tour',
    category: 'ugc',
    duration: '1:01',
    desc: 'First-person walk-in that tours the store like a customer. Doors, aisles, counter — one flow.',
    videoSrc: '/assets/reels/rushmart-walkin-pov.mp4',
    poster: '/assets/reels/rushmart-walkin-pov.jpg',
    badge: 'POV tour',
    craft: ['POV walkthrough structure', 'Night-interior grade', 'Customer-journey arc'],
  },
  {
    id: 'palermo-matcha-handheld',
    brand: 'Palermo Coffee',
    title: 'Matcha handoff — smile reel',
    category: 'food',
    duration: '0:17',
    desc: 'Feel-good handoff moment for Palermo. Cup to camera, mural behind, zero staging.',
    videoSrc: '/assets/reels/palermo-matcha-handheld.mp4',
    poster: '/assets/reels/palermo-matcha-handheld.jpg',
    badge: 'Feel-good reel',
    craft: ['Handoff-to-camera moment', 'Mural backdrop', 'Daylight product grade'],
  },
  {
    id: 'palermo-dessert-cup',
    brand: 'Palermo Coffee',
    title: 'Dessert cup — product smile',
    category: 'food',
    duration: '0:27',
    desc: 'Dessert-cup hero for the Palermo menu. Held to camera with the café wall as backdrop.',
    videoSrc: '/assets/reels/palermo-dessert-cup.mp4',
    poster: '/assets/reels/palermo-dessert-cup.jpg',
    badge: 'Product reel',
    craft: ['Cup-to-camera hero', 'Café-wall backdrop', 'Menu-item framing'],
  },
  {
    id: 'palermo-street-sampling',
    brand: 'Palermo Coffee',
    title: 'Street sampling — vox-pop promo',
    category: 'ugc',
    duration: '0:47',
    desc: 'Street-sampling vox pop for Palermo. Real reactions, mic in hand, cup in the other.',
    videoSrc: '/assets/reels/palermo-street-sampling.mp4',
    poster: '/assets/reels/palermo-street-sampling.jpg',
    badge: 'Vox-pop promo',
    craft: ['Vox-pop direction', 'Reaction-first edit', 'Street daylight grade'],
  },
  {
    id: 'madeira-sofa-fabric',
    brand: 'Madeira Home',
    title: 'Fabric close-up — texture reel',
    category: 'product',
    duration: '0:42',
    desc: 'Tactile fabric study for a home brand. A hand on boucle says more than a spec sheet.',
    videoSrc: '/assets/reels/madeira-sofa-fabric.mp4',
    poster: '/assets/reels/madeira-sofa-fabric.jpg',
    badge: 'Texture reel',
    craft: ['Macro texture pacing', 'Soft natural grade', 'Logo-sting framing'],
  },
  {
    id: 'madeira-bed-detail',
    brand: 'Madeira Home',
    title: 'Headboard detail — craft reel',
    category: 'product',
    duration: '0:47',
    desc: 'Slow craft reel over a headboard detail. Stitching, panels and light do the talking.',
    videoSrc: '/assets/reels/madeira-bed-detail.mp4',
    poster: '/assets/reels/madeira-bed-detail.jpg',
    badge: 'Craft reel',
    craft: ['Slow detail pacing', 'Craft close-ups', 'Soft natural grade'],
  },
  {
    id: 'foodbank-event-talk',
    brand: 'Egyptian Food Bank',
    title: 'Event talk — coverage cut',
    category: 'ugc',
    duration: '0:16',
    desc: 'On-stage event coverage for the Egyptian Food Bank. Stage presence kept intact, branded lower frame.',
    videoSrc: '/assets/reels/foodbank-event-talk.mp4',
    poster: '/assets/reels/foodbank-event-talk.jpg',
    badge: 'Event coverage',
    craft: ['Stage coverage framing', 'Speech-moment pacing', 'Branded stage grade'],
  },
];

const FILTERS = [
  ['all', 'All reels'],
  ['food', 'Food & cafés'],
  ['ugc', 'UGC & promos'],
  ['product', 'Product & detail'],
];

export default function ReelShowcase({ onOpenModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
                <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20 text-[10px] font-bold">
                  {reel.badge}
                </span>
                <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20 text-[10px] font-bold flex items-center gap-1">
                  <Clock3 className="w-3 h-3" /> {reel.duration}
                </span>
              </div>

              <div className="absolute inset-0 bg-neutral-900 overflow-hidden flex items-center justify-center">
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
