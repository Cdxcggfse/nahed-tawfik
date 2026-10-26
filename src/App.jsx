import React, { useEffect, useRef, useState } from 'react';
import {
  motion, AnimatePresence, useScroll, useSpring,
  useTransform, useMotionValue, useInView, useReducedMotion,
} from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, ArrowUp, BadgeCheck, Brain, CalendarCheck, Clapperboard,
  MessageCircle, PenLine, Play, Scissors, Sparkles, Star, Target, TrendingUp, Wand2, Menu, X,
  Check, Plus, Quote,
} from 'lucide-react';
import StrategySection from './components/StrategySection.jsx';
import ResearchSection from './components/ResearchSection.jsx';
import ProductionSection from './components/ProductionSection.jsx';
import EditingTimelineSection from './components/EditingTimelineSection.jsx';
import ReelShowcase from './components/ReelShowcase.jsx';
import ReelModal from './components/ReelModal.jsx';
import ClientsSection from './components/ClientsSection.jsx';
import { CLIENTS } from './data/clients';
import { REELS } from './data/reels';
import WhatsAppFloatingButton from './components/WhatsAppCTA.jsx';
import { SketchyStar, SketchySquiggle, SketchyArrow } from './components/HandDrawnDoodles.jsx';

/* ============================== primitives ============================== */

const EASE = [0.22, 1, 0.36, 1];

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Scribble({ children }) {
  return (
    <span className="scribble-underline">
      {children}
      <svg viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden>
        <path d="M4 10 C 60 3, 150 3, 216 8" fill="none" stroke="#E4572E" strokeWidth="6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/* magnetic hover wrapper — subtle, premium */
function Magnetic({ children, strength = 0.25 }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  return (
    <motion.span
      style={{ x: sx, y: sy, display: 'inline-block' }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.span>
  );
}

function Counter({ to, suffix = '', decimals = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref} className={className}>
      {val.toFixed(decimals)}{suffix}
    </span>
  );
}

/* ============================== chrome ============================== */

function Preloader() {
  return (
    <motion.div
      exit={{ opacity: 0, y: -24, transition: { duration: 0.4 } }}
      className="fixed inset-0 z-[100] bg-[#201A15] flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.6, rotate: -10, opacity: 0 }}
          animate={{ scale: 1, rotate: -4, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          className="w-20 h-20 mx-auto rounded-3xl bg-[#E4572E] border-[3px] border-[#FFF8EB] shadow-[6px_6px_0_#FFB627] flex items-center justify-center font-display font-bold text-white text-4xl"
        >
          N
        </motion.div>
        <p className="mt-5 font-display font-bold text-[#FFF8EB] tracking-[0.2em] uppercase text-xs">
          Loading the cutting room
        </p>
        <div className="mt-3 w-44 h-2 mx-auto rounded-full bg-white/15 overflow-hidden">
          <div className="h-full w-full bg-[#FFB627] rounded-full animate-loadbar" />
        </div>
      </div>
    </motion.div>
  );
}

const NAV_LINKS = [
  ['Work', '#reels-showcase'],
  ['Process', '#strategy'],
  ['Clients', '#clients'],
  ['About', '#about'],
  ['FAQ', '#faq'],
];

function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <header className="sticky top-3 z-40 px-3 sm:px-6">
      <nav className={`max-w-6xl mx-auto bg-[#FFFDF6] sm:bg-[#FFFDF6]/95 sm:backdrop-blur border-[2.5px] border-[#201A15] rounded-2xl px-4 sm:px-5 py-3 flex items-center justify-between gap-3 transition-shadow ${scrolled ? 'shadow-[7px_7px_0_#201A15]' : 'shadow-[5px_5px_0_#201A15]'}`}>
        <a href="#top" className="flex items-center gap-2.5" aria-label="Back to top">
          <span className="w-10 h-10 rounded-xl bg-[#E4572E] border-2 border-[#201A15] shadow-[3px_3px_0_#201A15] flex items-center justify-center font-display font-bold text-white text-lg rotate-[-4deg]">
            N
          </span>
          <span className="leading-none">
            <span className="font-display font-bold text-[17px] block">Nahed Tawfik</span>
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#5C564D]">Content creator</span>
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-6 text-[14px] font-semibold">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} data-active={active === href} className="nav-link transition-colors hover:text-[#E4572E]">{label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold bg-[#E8F5F0] border-2 border-[#201A15] rounded-full px-3 py-1.5">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0E7C6B] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0E7C6B]" />
            </span>
            2 slots open
          </span>
          <Magnetic><a href="#contact" className="sketch-btn !py-2.5 !px-5 text-sm">Let's talk <ArrowUpRight className="w-4 h-4" /></a></Magnetic>
          <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 rounded-xl border-2 border-[#201A15] bg-white shadow-[3px_3px_0_#201A15] flex items-center justify-center" aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="lg:hidden max-w-6xl mx-auto mt-2 bg-[#FFFDF6] border-[2.5px] border-[#201A15] rounded-2xl shadow-[5px_5px_0_#201A15] p-3 grid grid-cols-2 gap-2"
          >
            {NAV_LINKS.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="font-display font-bold px-4 py-3 rounded-xl border-2 border-[#201A15]/10 hover:border-[#201A15] hover:bg-[#FFE9A8] transition-colors">
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ============================== hero ============================== */

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } };

function Hero() {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const portraitX = useTransform(px, (v) => v * 16);
  const portraitY = useTransform(py, (v) => v * 14);
  const chipX = useTransform(px, (v) => v * -26);
  const chipY = useTransform(py, (v) => v * -20);
  const starX = useTransform(px, (v) => v * 40);

  return (
    <section
      id="top"
      className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-6"
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set(((e.clientX - r.left) / r.width - 0.5) * 2);
        py.set(((e.clientY - r.top) / r.height - 0.5) * 2);
      }}
    >
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7">
          <motion.div variants={item} className="inline-flex items-center gap-2 bg-white border-[2.5px] border-[#201A15] rounded-full pl-1.5 pr-4 py-1.5 shadow-[4px_4px_0_#201A15] rotate-[-1.5deg]">
            <span className="bg-[#201A15] text-white text-[11px] font-display font-bold tracking-widest uppercase rounded-full px-3 py-1">2026</span>
            <span className="text-[13px] font-semibold">Booking reels across Egypt — EN / {'\u0639\u0631\u0628\u064A'}</span>
          </motion.div>

          <motion.h1 variants={item} className="font-display font-bold text-[clamp(2.2rem,7vw,5.4rem)] leading-[1.04] mt-6">
            Reels that make
            <br />
            people <Scribble>stop scrolling.</Scribble>
            <br />
            <span className="font-accent font-normal text-[#E4572E]">Edits they finish.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-[17px] leading-relaxed text-[#5C564D] max-w-xl font-medium">
            I'm Nahed - a bilingual content creator based in Cairo, working in content creation & planning
            and content creation & writing. I plan the idea,
            write the hook, cut the reel, and design the cover, so Egyptian brands get
            watch time, not just views. On-location filming across Cairo, Giza and all of Egypt.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3 mt-8">
            <Magnetic><a href="#reels-showcase" className="sketch-btn"><Play className="w-4 h-4 fill-current" /> Watch the work</a></Magnetic>
            <Magnetic><a href="#contact" className="sketch-btn sketch-btn-secondary">Book an edit <ArrowRight className="w-4 h-4" /></a></Magnetic>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-2 mt-6">
            {['CapCut', 'Premiere Pro', 'Canva', 'Captions + SFX', 'Color grade'].map((t) => (
              <span key={t} className="text-xs font-bold bg-white border-2 border-[#201A15] rounded-full px-3 py-1.5 shadow-[2px_2px_0_#201A15]">{t}</span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-7">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {['palermo', 'rushmart', 'mirola', 'alex48', 'covia'].map((id) => (
                  <img
                    key={id}
                    src={CLIENTS[id].src}
                    alt={`${CLIENTS[id].label} logo — client of Nahed Tawfik`}
                    title={CLIENTS[id].label}
                    loading="lazy"
                    className="w-11 h-11 rounded-full border-[2.5px] border-[#201A15] bg-white object-cover shadow-[2px_2px_0_#201A15]"
                  />
                ))}
                <span className="w-11 h-11 rounded-full border-[2.5px] border-[#201A15] bg-[#201A15] text-white font-display font-bold text-[10px] flex items-center justify-center shadow-[2px_2px_0_#201A15]">+{Object.keys(CLIENTS).length - 5}</span>
              </div>
              <div className="text-sm">
                <span className="flex gap-0.5 text-[#E4572E]" aria-label="5 star rated">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </span>
                <span className="font-semibold">Work for Palermo, Rush Mart, Mirola & more</span>
                <span className="text-[#5C564D]"> — caf{'\u00E9'}s & brands across Egypt</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, y: 36, rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <motion.div style={{ x: portraitX, y: portraitY }} className="sticker-photo relative w-[300px] sm:w-[350px] rotate-[-2deg]">
            <span className="tape -top-3 left-8 rotate-[-8deg]" />
            <span className="tape -bottom-3 right-8 rotate-[10deg] !bg-[#FFD8C7]" />
            <img
              src="/assets/profile/nahed_profile.jpg"
              alt="Portrait of content creator Nahed Tawfik"
              className="w-full aspect-[4/5] object-cover rounded-2xl border-2 border-[#201A15]"
              fetchPriority="high"
            />
            <div className="flex items-center justify-between pt-3 pb-1 px-1">
              <p className="font-hand text-2xl leading-none">hi, I'm Nahed!</p>
              <p className="eyebrow !text-[11px] text-[#E4572E]">Cairo, Egypt</p>
            </div>
            <div className="absolute -top-10 -right-6 sm:-right-8 w-28 h-28">
              <div className="absolute inset-0 animate-spin-slower">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs><path id="circ" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" /></defs>
                  <circle cx="50" cy="50" r="49" fill="#201A15" />
                  <circle cx="50" cy="50" r="30" fill="#FFB627" stroke="#FFF8EB" strokeWidth="2" />
                  <text fontSize="11.5" fontWeight="800" fill="#FFF8EB" letterSpacing="2.5" fontFamily="Fredoka, sans-serif">
                    <textPath href="#circ">LET'S MAKE IT POP • LET'S MAKE IT POP •</textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Scissors className="w-6 h-6 text-[#201A15]" />
              </div>
            </div>
          </motion.div>

          <motion.div style={{ x: chipX, y: chipY }} className="absolute -left-2 sm:left-0 top-8 bg-white border-[2.5px] border-[#201A15] rounded-2xl px-3.5 py-2.5 shadow-[4px_4px_0_#201A15] rotate-[-6deg] animate-float-slow">
            <p className="font-display font-bold text-sm flex items-center gap-1.5"><Clapperboard className="w-4 h-4 text-[#E4572E]" /> CapCut • Premiere</p>
            <p className="text-[11px] font-semibold text-[#5C564D]">speed ramps + captions</p>
          </motion.div>
          <motion.div style={{ x: chipX, y: chipY }} className="absolute -right-1 sm:right-2 bottom-20 bg-[#201A15] text-white border-[2.5px] border-[#201A15] rounded-2xl px-3.5 py-2.5 shadow-[4px_4px_0_#E4572E] rotate-[4deg] animate-float-slow">
            <p className="font-display font-bold text-sm">On-location filming</p>
            <p className="text-[11px] text-white/70 font-semibold">Cairo - Giza - Egypt</p>
          </motion.div>
          <motion.div style={{ x: starX }}>
            <SketchyStar className="absolute -bottom-8 left-10 w-10 h-10 text-[#FFB627] animate-wiggle" />
          </motion.div>
        </motion.div>
      </div>

      {/* stat band */}
      <Reveal className="mt-12">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { v: <Counter to={REELS.length} />, l: 'client reels live', s: 'watch them all below' },
            { v: <Counter to={Object.keys(CLIENTS).length} suffix="+" />, l: 'brands edited for', s: 'cafes, food and retail' },
            { v: <span className="font-display font-bold text-3xl">48h</span>, l: 'turnaround', s: 'single reels, post-ready' },
            { v: <span className="font-display font-bold text-2xl sm:text-3xl">EN / {'\u0639\u0631\u0628\u064A'}</span>, l: 'scripts & captions', s: 'bilingual by default' },
          ].map((s) => (
            <div key={s.l} className="bg-white border-[2.5px] border-[#201A15] rounded-2xl px-5 py-4 shadow-[4px_4px_0_#201A15] hover:-translate-y-1 transition-transform">
              <dd className="font-display font-bold text-3xl">{s.v}</dd>
              <dd className="font-bold text-sm mt-0.5">{s.l}</dd>
              <dd className="text-xs font-semibold text-[#5C564D]">{s.s}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

/* ============================== marquees ============================== */

function Marquees() {
  const a = ['Reels', 'Ad creatives', 'Voice-over', 'Scripts', 'Canva design', 'Content calendars', 'Color grading', 'Captions'];
  const b = ['Hook-first cuts', 'Bilingual scripts', 'Retention editing', 'Brand covers', 'Launch packs', 'Monthly engine'];
  const rowA = [...a, ...a];
  const rowB = [...b, ...b];
  return (
    <div className="my-12 space-y-3 overflow-hidden py-2">
      <div className="ink-band py-3.5 overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap animate-marquee w-max px-4">
          {rowA.map((t, i) => (
            <span key={i} className="font-display font-bold tracking-[0.14em] uppercase text-sm flex items-center gap-8">
              {t} <span className="text-[#FFB627]">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="mustard-band py-2.5 overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap animate-marquee-rev w-max px-4">
          {rowB.map((t, i) => (
            <span key={i} className="font-hand font-bold text-xl flex items-center gap-8">
              {t} <span>→</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================== manifesto ============================== */

function ManifestoWord({ progress, range, children }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <motion.span style={{ opacity, y }} className="inline-block mr-[0.28em]">
      {children}
    </motion.span>
  );
}

function Manifesto() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const text = 'Most reels get skipped in one second. Mine are built backwards — from the hook, the caption beat, the sound pop — so strangers stop, watch, and remember the brand.';
  const words = text.split(' ');
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-center" ref={ref}>
      <Reveal><span className="chapter-tag"><i /> Why it works</span></Reveal>
      <p className="font-display font-medium text-[clamp(1.5rem,3.4vw,2.4rem)] leading-[1.3] mt-6">
        {words.map((w, i) => (
          <ManifestoWord key={i} progress={scrollYProgress} range={[i / words.length, Math.min(1, (i + 1.5) / words.length)]}>
            {w}
          </ManifestoWord>
        ))}
      </p>
      <Reveal delay={0.1}><p className="font-hand text-2xl text-[#E4572E] mt-4 rotate-[-2deg]">strategy first, effects second — always</p></Reveal>
    </section>
  );
}

/* ============================== process ============================== */

function ProcessStrip() {
  const steps = [
    { icon: CalendarCheck, n: '01', t: 'Strategy', d: 'Positioning, pillars & bilingual calendar.' },
    { icon: BadgeCheck, n: '02', t: 'Research', d: 'SWOT + competitor hooks before a cut.' },
    { icon: Wand2, n: '03', t: 'Production', d: 'Script, voice-over, shoot direction.' },
    { icon: Scissors, n: '04', t: 'Edit', d: 'Cut, grade, captions, SFX, cover.' },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <motion.a
            key={s.n}
            href={['#strategy', '#research', '#production', '#editing'][i]}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
            className="sketch-box-flat p-5 flex gap-3.5 items-start bg-white group"
          >
            <span className="w-11 h-11 shrink-0 rounded-xl bg-[#FFE9A8] border-2 border-[#201A15] shadow-[3px_3px_0_#201A15] flex items-center justify-center group-hover:bg-[#E4572E] group-hover:text-white transition-colors">
              <s.icon className="w-5 h-5" />
            </span>
            <span>
              <span className="eyebrow text-[#E4572E]">Step {s.n}</span>
              <span className="font-display font-bold text-lg block leading-tight">{s.t} <ArrowUpRight className="inline w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></span>
              <span className="text-[13px] text-[#5C564D] font-medium">{s.d}</span>
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/* ============================== offer ============================== */

const OFFERS = [
  {
    name: 'Single Reel Fix',
    price: 'From $40 / reel',
    time: '48-hour turnaround',
    desc: 'One raw clip in, one post-ready reel out — hook, captions, SFX, cover.',
    points: ['Hook-first recut', 'Animated captions (AR/EN)', 'SFX + music mix', '1 cover design', '1 revision round'],
    featured: false,
  },
  {
    name: 'Launch Pack',
    price: 'From $180',
    time: '5 reels + 5 covers',
    desc: 'A full launch burst: 5 scroll-stoppers with a consistent visual system.',
    points: ['Content angles + hooks', '5 edited reels', '5 matching covers', 'Posting calendar', '2 revision rounds'],
    featured: true,
  },
  {
    name: 'Monthly Engine',
    price: 'From $450 / mo',
    time: '12 reels + strategy',
    desc: 'Your always-on content partner — strategy, scripts, edits, covers.',
    points: ['Bilingual content plan', '12 reels / month', '12 covers + carousels', 'Monthly analytics review', 'Priority WhatsApp lane'],
    featured: false,
  },
];

function Offer() {
  return (
    <section id="offer" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 scroll-mt-24">
      <Reveal className="text-center max-w-2xl mx-auto mb-10">
        <span className="chapter-tag"><i /> Ways to work together</span>
        <h2 className="font-display font-bold text-3xl sm:text-[2.75rem] leading-tight mt-3">
          Pick a pack. <span className="font-accent font-normal text-[#E4572E]">Get posting.</span>
        </h2>
        <p className="text-[#5C564D] font-medium mt-2">Transparent packaging, no mystery quotes. Final price depends on footage + scope — confirmed on WhatsApp before we start.</p>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5 items-stretch">
        {OFFERS.map((o, i) => (
          <motion.div
            key={o.name}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
            className={`relative rounded-[22px] border-[2.5px] border-[#201A15] p-6 flex flex-col ${o.featured ? 'bg-[#201A15] text-[#FFF8EB] shadow-[8px_8px_0_#E4572E] md:-translate-y-2' : 'bg-white shadow-[6px_6px_0_#201A15]'}`}
          >
            {o.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFB627] text-[#201A15] font-display font-bold text-xs uppercase tracking-widest rounded-full border-2 border-[#201A15] px-4 py-1.5 whitespace-nowrap">
                Most booked
              </span>
            )}
            <h3 className="font-display font-bold text-xl">{o.name}</h3>
            <p className={`font-display font-bold text-2xl mt-1 ${o.featured ? 'text-[#FFB627]' : 'text-[#E4572E]'}`}>{o.price}</p>
            <p className={`text-xs font-bold uppercase tracking-wider mt-0.5 ${o.featured ? 'text-white/60' : 'text-[#5C564D]'}`}>{o.time}</p>
            <p className={`text-sm font-medium mt-3 ${o.featured ? 'text-white/75' : 'text-[#5C564D]'}`}>{o.desc}</p>
            <ul className="mt-4 space-y-2 text-sm font-semibold flex-1">
              {o.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center ${o.featured ? 'bg-[#FFB627] border-[#FFB627] text-[#201A15]' : 'bg-[#E8F5F0] border-[#201A15] text-[#0E7C6B]'}`}>
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <a href="#contact" className={`mt-6 text-center font-display font-bold rounded-full border-[2.5px] border-[#201A15] py-3 transition-all ${o.featured ? 'bg-[#E4572E] text-white shadow-[4px_4px_0_#FFB627] hover:-translate-y-0.5' : 'bg-[#FFE9A8] shadow-[4px_4px_0_#201A15] hover:bg-[#FFB627] hover:-translate-y-0.5'}`}>
              Start with {o.name}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================== faq ============================== */

const FAQS = [
  { q: 'How fast is turnaround?', a: 'Single reels ship in 48 hours. Bigger projects take 5-7 days. You always know what lands and when before we start.' },
  { q: 'My footage is just phone clips. Is that enough?', a: 'Yes — most client work starts as phone footage. I stabilize, reframe for 9:16, clean the audio, and cut around the best 3 seconds. If something is truly unusable, I will tell you before we start.' },
  { q: 'Do you work in Arabic, English, or both?', a: 'Both, natively. Scripts, hooks, captions and on-screen text are written for each language — not auto-translated. Egyptian dialect included.' },
  { q: 'What do you need from me to start?', a: 'Raw clips + logo, one sentence on what viewers should do (buy, follow, book), and one reel you like. That is enough for a first draft.' },
  { q: 'How many revisions are included?', a: 'Single reels include 1 revision round, larger projects include 2. In practice most drafts land on the first cut because the hook is agreed upfront.' },
  { q: 'Where in Egypt do you work?', a: 'Everywhere in Egypt. I am based in Cairo and film on-location across Cairo and Giza, and I travel anywhere in the country for bigger shoots.' },
];

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 py-14 scroll-mt-24">
      <Reveal className="text-center mb-8">
        <span className="chapter-tag"><i /> Before you ask</span>
        <h2 className="font-display font-bold text-3xl sm:text-[2.5rem] mt-3">Questions, <span className="font-accent font-normal text-[#E4572E]">answered.</span></h2>
      </Reveal>
      <div className="space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={`bg-white border-[2.5px] border-[#201A15] rounded-2xl overflow-hidden transition-shadow ${isOpen ? 'shadow-[6px_6px_0_#E4572E]' : 'shadow-[4px_4px_0_#201A15]'}`}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-3 text-left px-5 py-4 font-display font-bold text-[16px]" aria-expanded={isOpen}>
                {f.q}
                <span className={`w-8 h-8 shrink-0 rounded-full border-2 border-[#201A15] flex items-center justify-center transition-all ${isOpen ? 'bg-[#E4572E] text-white rotate-45' : 'bg-[#FFE9A8]'}`}>
                  <Plus className="w-4 h-4" strokeWidth={3} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }}>
                    <p className="px-5 pb-5 text-[15px] text-[#5C564D] font-medium leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ============================== about ============================== */

const SKILLS = [
  {
    icon: Target,
    title: 'Content Strategy & Planning',
    tint: '#FFE9A8',
    points: ['Clear strategy before anything is shot', 'Content plan mapped to business goals', 'Format and cadence chosen on purpose'],
  },
  {
    icon: PenLine,
    title: 'Content Creation & Writing',
    tint: '#FFD8C7',
    points: ['Copywriting that reaches the audience', 'Reels scriptwriting — hook in the first second', 'Creative ideas + AI-assisted design'],
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    tint: '#E8F5F0',
    points: ['Demand analysis + customer profiles', 'Value map, media plan, ad analysis & optimization', 'Scaling what works — cut what does not'],
  },
];

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 scroll-mt-24">
      <Reveal className="text-center max-w-2xl mx-auto mb-10">
        <span className="chapter-tag"><i /> More about me</span>
        <h2 className="font-display font-bold text-3xl sm:text-[2.75rem] leading-tight mt-3">
          Psychology graduate. <span className="font-accent font-normal text-[#E4572E]">Marketer by mindset.</span>
        </h2>
        <p className="text-[#5C564D] font-medium mt-2">I'm Nahed — Psychology graduate with a Master's, now working in marketing with a mind built to understand the customer before selling to them.</p>
      </Reveal>

      <div className="grid lg:grid-cols-12 gap-5 items-start">
        {/* psychology edge */}
        <Reveal className="lg:col-span-5">
          <div className="bg-[#201A15] text-[#FFF8EB] border-[2.5px] border-[#201A15] rounded-[22px] shadow-[8px_8px_0_#E4572E] p-6 sm:p-7 rotate-[-1deg] h-full">
            <span className="inline-flex items-center gap-2 bg-[#FFB627] text-[#201A15] font-display font-bold text-[11px] uppercase tracking-widest rounded-full border-2 border-[#201A15] px-3 py-1">
              <Brain className="w-3.5 h-3.5" /> What sets me apart
            </span>
            <h3 className="font-display font-bold text-2xl mt-4 leading-tight">I studied the mind, so I understand the customer.</h3>
            <p className="text-white/75 font-medium mt-3 text-[15px]">
              My Psychology background is not a footnote — it is the method. I read customer behaviour and buying
              motivations, and that shows up in the content and the ads, with better results.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Customer behaviour', 'Buying motivations', 'Persuasion that feels human'].map((t) => (
                <span key={t} className="text-[11px] font-bold bg-white/10 border border-white/25 rounded-full px-3 py-1.5">{t}</span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* skills */}
        <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              className="bg-white border-[2.5px] border-[#201A15] rounded-[22px] shadow-[5px_5px_0_#201A15] p-5 hover:-translate-y-1 transition-transform"
            >
              <span className="w-11 h-11 rounded-xl border-2 border-[#201A15] flex items-center justify-center rotate-[-4deg]" style={{ background: s.tint }}>
                <s.icon className="w-5 h-5 text-[#201A15]" strokeWidth={2.5} />
              </span>
              <h3 className="font-display font-bold text-[17px] mt-3 leading-snug">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-[13px] font-semibold text-[#5C564D]">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#E4572E]" strokeWidth={3} />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* open to work strip */}
      <Reveal className="mt-5">
        <div className="bg-[#FFE9A8] border-[2.5px] border-[#201A15] rounded-[22px] shadow-[6px_6px_0_#201A15] px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div className="flex items-start gap-3">
            <span className="relative flex w-2.5 h-2.5 mt-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0E7C6B] opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0E7C6B]" />
            </span>
            <div>
              <p className="font-display font-bold text-lg leading-tight">Looking for an opportunity in a marketing agency</p>
              <p className="text-sm text-[#5C564D] font-medium mt-0.5">Passionate, fast learner, psychology-trained marketer. If you know a team that is hiring — or want me on yours, let's talk.</p>
            </div>
          </div>
          <Magnetic><a href="#contact" className="sketch-btn whitespace-nowrap">Get in touch <ArrowUpRight className="w-4 h-4" /></a></Magnetic>
        </div>
      </Reveal>
    </section>
  );
}

/* ============================== final CTA + footer ============================== */

function FinalCTA() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-6 scroll-mt-24">
      <Reveal>
        <div className="relative overflow-hidden bg-[#201A15] text-[#FFF8EB] border-[2.5px] border-[#201A15] rounded-[28px] shadow-[10px_10px_0_#E4572E] px-6 sm:px-12 py-12 sm:py-16">
          <span className="absolute -top-4 left-8 font-display font-bold text-[9rem] leading-none text-stroke-paper opacity-40 select-none hidden sm:block" aria-hidden>GO</span>
          <SketchySquiggle className="absolute top-6 right-8 w-28 text-[#FFB627] opacity-70" />
          <SketchyStar className="absolute bottom-8 right-10 w-10 h-10 text-[#FFB627]" />
          <div className="grid lg:grid-cols-12 gap-10 items-center relative">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[#FFB627]">Limited slots — 2 openings</p>
              <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.0] mt-3">
                Let's cut something <span className="font-accent font-normal text-[#FFB627]">great.</span>
              </h2>
              <p className="mt-4 text-white/70 font-medium max-w-lg">
                Send your clips + your goal (sales, followers, launch). You'll get a hook-first
                cut with captions, SFX and a cover — ready to post.
              </p>
              <div className="flex flex-wrap gap-3 mt-7">
                <Magnetic><a href="https://wa.me/201124138869?text=Hi%20Nahed!%20I%20saw%20your%20portfolio%20and%20want%20a%20reel%20edit." target="_blank" rel="noreferrer" className="sketch-btn"><MessageCircle className="w-4 h-4" /> Chat on WhatsApp</a></Magnetic>
                <Magnetic><a href="mailto:nahedmohamedt@gmail.com?subject=Reel%20edit%20inquiry" className="sketch-btn !bg-[#FFF8EB] !text-[#201A15] hover:!bg-[#FFE9A8]">Email the brief <ArrowUpRight className="w-4 h-4" /></a></Magnetic>
              </div>
              <p className="mt-5 text-[13px] text-white/55 font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFB627]" /> Replies within 24 hours • Cairo, Egypt • AR / EN
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-[#FFF8EB] text-[#201A15] border-[2.5px] border-[#FFF8EB] rounded-3xl p-6 rotate-[1.5deg]">
                <p className="font-display font-bold text-lg flex items-center gap-2">
                  <SketchyArrow className="w-8 h-8 text-[#E4572E] rotate-[140deg]" /> What to send:
                </p>
                <ol className="mt-4 space-y-3 text-[14px] font-semibold">
                  {['Your raw clips (phone is fine) + logo', 'One sentence: what should viewers do?', "A reel you like — I'll match the energy"].map((t, i) => (
                    <li key={i} className="flex gap-3 items-start bg-white border-2 border-[#201A15] rounded-xl px-3.5 py-2.5 shadow-[3px_3px_0_#201A15]">
                      <span className="w-6 h-6 shrink-0 rounded-full bg-[#201A15] text-white font-display font-bold text-xs flex items-center justify-center">{i + 1}</span>
                      {t}
                    </li>
                  ))}
                </ol>
                <p className="mt-4 flex items-start gap-2 text-[13px] font-medium text-[#5C564D]">
                  <Quote className="w-4 h-4 mt-0.5 shrink-0 text-[#E4572E]" />
                  "Nahed transformed our reel engagement completely — viewers watch until the last second."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="pt-12 pb-6">
        <a href="#top" className="group block text-center select-none" aria-label="Back to top">
          <span className="font-display font-bold leading-none tracking-tight text-[clamp(3rem,12vw,9rem)] group-hover:text-[#E4572E] transition-colors">
            NAHED<span className="text-stroke-ink group-hover:[-webkit-text-stroke-color:#E4572E]">✳</span>TAWFIK
          </span>
        </a>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t-2 border-dashed border-[#201A15]/20 mt-6 text-[13px] font-semibold text-[#5C564D]">
          <p>© 2026 Nahed Tawfik — cut with care in Cairo, Egypt.</p>
          <p className="font-hand text-xl text-[#201A15]">made frame by frame, not templated.</p>
          <a href="#top" className="inline-flex items-center gap-1.5 hover:text-[#E4572E] font-bold">Back to top <ArrowUp className="w-4 h-4" /></a>
        </div>
      </footer>
    </section>
  );
}

/* ============================== app ============================== */

const SECTION_IDS = ['#reels-showcase', '#strategy', '#clients', '#about', '#faq'];

export default function App() {
  const [activeReel, setActiveReel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState('#reels-showcase');
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    // Triple-safe dismissal: fast timeout + window load + absolute backstop,
    // so the splash can never trap the page.
    let done = false;
    const finish = () => { if (!done) { done = true; setLoading(false); } };
    const t1 = setTimeout(finish, reduce ? 200 : 900);
    const t2 = setTimeout(finish, 4000);
    window.addEventListener('load', finish);
    return () => { clearTimeout(t1); clearTimeout(t2); window.removeEventListener('load', finish); };
  }, [reduce]);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.querySelector(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [loading]);

  return (
    <div className="grain min-h-screen">
      {/* scroll progress */}
      <motion.div style={{ scaleX: progress }} className="fixed top-0 left-0 right-0 h-1.5 bg-[#E4572E] z-[70] origin-left" />

      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>

      <Navbar active={active} />
      <main>
        <Hero />
        <Marquees />
        <Manifesto />
        <ProcessStrip />
        <StrategySection />
        <ResearchSection />
        <ProductionSection />
        <EditingTimelineSection />
        <ReelShowcase onOpenModal={setActiveReel} />
        <div id="clients" className="scroll-mt-24">
          <ClientsSection />
        </div>
        <About />
        <Faq />
        <FinalCTA />
      </main>
      <ReelModal reel={activeReel} onClose={() => setActiveReel(null)} />
      <WhatsAppFloatingButton />
    </div>
  );
}
