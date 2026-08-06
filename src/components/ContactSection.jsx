import React, { useState } from 'react';
import { Mail, Send, Sparkles, CheckCircle, Heart, Phone, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SketchyHeart, TapeStrip, SketchyArrow } from './HandDrawnDoodles';
import { WhatsAppIcon } from './WhatsAppCTA';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Reel Editing',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#E86D3B', '#F7D070', '#3AAFA9']
    });
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      <SketchyHeart className="w-16 h-16 text-[#E86D3B]/40 absolute top-2 right-8 animate-pulse-heart" />

      {/* Main Container Card */}
      <div className="sketch-box-orange p-8 sm:p-12 relative overflow-hidden bg-[#FFF8F5]">
        <TapeStrip className="w-32 h-8 bg-[#FFE89C] top-[-12px] left-12 absolute rotate-[-4deg] z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-hand font-extrabold text-[#E86D3B] text-2xl tracking-wide block">
              ✨ READY TO ELEVATE YOUR CONTENT?
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#1E1E24] leading-tight">
              LET'S CREATE GREAT CONTENT TOGETHER!
            </h2>
            <p className="text-[#4A4E69] text-base sm:text-lg leading-relaxed font-medium">
              Whether you need high-retention Instagram Reels, YouTube Shorts, market research SWOT, or a full bilingual content plan, let's connect!
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* WhatsApp Quick Chat Card */}
              <a 
                href="https://api.whatsapp.com/send?text=Hi%20Nahed!%20I'd%20like%20to%20inquire%20about%20video%20editing%20services." 
                target="_blank" 
                rel="noopener noreferrer"
                className="sketch-box p-4 bg-[#EBFDF8] flex items-center gap-4 hover:scale-[1.02] transition-transform cursor-pointer border-3 border-[#1E1E24]"
              >
                <div className="w-12 h-12 bg-[#25D366] text-white rounded-2xl flex items-center justify-center border-2 border-[#1E1E24] shadow-[2px_2px_0px_#1E1E24]">
                  <WhatsAppIcon className="w-7 h-7" />
                </div>
                <div>
                  <span className="font-hand font-bold text-xs text-[#1E7872] block">
                    INSTANT WHATSAPP CHAT
                  </span>
                  <span className="font-display font-bold text-lg text-[#1E1E24] flex items-center gap-1.5">
                    Start Quick Chat <span className="text-xs bg-[#25D366] text-white px-2 py-0.5 rounded-full font-bold">ONLINE</span>
                  </span>
                </div>
              </a>

              {/* Direct Email Badge Card */}
              <div className="sketch-box p-4 bg-white flex items-center gap-4 rotate-[-1deg]">
                <div className="w-12 h-12 bg-[#E86D3B] text-white rounded-2xl flex items-center justify-center border-2 border-[#1E1E24] shadow-[2px_2px_0px_#1E1E24]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-hand font-bold text-xs text-[#4A4E69] block">
                    DIRECT EMAIL INQUIRIES
                  </span>
                  <a 
                    href="mailto:nahedmohamedt@gmail.com" 
                    className="font-display font-bold text-lg text-[#1E1E24] hover:text-[#E86D3B] transition-colors"
                  >
                    nahedmohamedt@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Certification Badge */}
            <div className="inline-flex items-center gap-3 bg-[#FFE89C] border-2 border-[#1E1E24] p-3 rounded-2xl shadow-[3px_3px_0px_#1E1E24]">
              <Award className="w-6 h-6 text-[#E86D3B]" />
              <div>
                <span className="font-display font-bold text-xs text-[#1E1E24] block">
                  Certified Specialist
                </span>
                <span className="font-hand font-bold text-sm text-[#E86D3B]">
                  Digital Marketing Diploma - Adham Hossam 2026
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-6">
            <div className="bg-white border-3 border-[#1E1E24] p-6 sm:p-8 rounded-3xl shadow-[8px_8px_0px_#1E1E24]">
              {formSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-[#3AAFA9] text-white rounded-full flex items-center justify-center mx-auto border-2 border-[#1E1E24] shadow-[3px_3px_0px_#1E1E24]">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#1E1E24]">
                    Message Sent Successfully! 🎉
                  </h3>
                  <p className="text-sm text-[#4A4E69]">
                    Thank you for reaching out, {formData.name || 'Friend'}! Nahed will get back to your email ({formData.email || 'nahedmohamedt@gmail.com'}) shortly.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="sketch-btn text-xs py-2 px-4 mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display font-bold text-xl text-[#1E1E24] mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#E86D3B]" /> Quick Project Inquiry
                  </h3>

                  <div>
                    <label className="font-display font-bold text-xs text-[#1E1E24] block mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Sarah Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#FAF6F0] border-2 border-[#1E1E24] p-3 rounded-xl font-display text-sm focus:outline-none focus:border-[#E86D3B]"
                    />
                  </div>

                  <div>
                    <label className="font-display font-bold text-xs text-[#1E1E24] block mb-1">
                      Your Email Address
                    </label>
                    <input 
                      type="email"
                      required
                      placeholder="e.g. sarah@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#FAF6F0] border-2 border-[#1E1E24] p-3 rounded-xl font-display text-sm focus:outline-none focus:border-[#E86D3B]"
                    />
                  </div>

                  <div>
                    <label className="font-display font-bold text-xs text-[#1E1E24] block mb-1">
                      Project Goal / Service
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full bg-[#FAF6F0] border-2 border-[#1E1E24] p-3 rounded-xl font-display text-sm focus:outline-none focus:border-[#E86D3B]"
                    >
                      <option value="Reel Editing">Instagram Reel / Shorts Editing</option>
                      <option value="Content Strategy">Content Plan & Strategy (Bilingual)</option>
                      <option value="Market Research">SWOT & Competitor Analysis</option>
                      <option value="Full Production">Full Creative Production (Script + Voiceover)</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-display font-bold text-xs text-[#1E1E24] block mb-1">
                      Message Details
                    </label>
                    <textarea 
                      rows="3"
                      required
                      placeholder="Tell me about your project goals and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-[#FAF6F0] border-2 border-[#1E1E24] p-3 rounded-xl font-display text-sm focus:outline-none focus:border-[#E86D3B]"
                    ></textarea>
                  </div>

                  <button type="submit" className="sketch-btn w-full justify-center py-3">
                    Send Message to Nahed <Send className="w-4 h-4 ml-1" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
