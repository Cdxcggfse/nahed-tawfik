import React from 'react';

export function WhatsAppIcon({ className = "w-6 h-6" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 2.22.723 4.27 1.956 5.932L2.5 21.5l3.704-1.43A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1113.856 5.464l.307.49 2.073.8-.8-2.073.49-.307A7.962 7.962 0 0120 12a8 8 0 01-8 8c-1.892 0-3.634-.658-5.016-1.76l-.358-.287-2.6.87.87-2.6-.287-.358A7.96 7.96 0 014 12z"/>
    </svg>
  );
}

export default function WhatsAppFloatingButton({ 
  phoneNumber = "201124138869", 
  message = "Hi Nahed! I saw your portfolio and I'd like to discuss a content creation project." 
}) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = phoneNumber 
    ? `https://wa.me/${phoneNumber}?text=${encodedMessage}` 
    : `https://api.whatsapp.com/send?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group">
      {/* Tooltip text */}
      <span className="hidden sm:inline-block bg-[#1E1E24] text-white text-xs font-display font-bold px-3 py-1.5 rounded-xl border-2 border-white shadow-lg group-hover:scale-105 transition-transform">
        Quick chat on WhatsApp
      </span>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-[#25D366] text-white border-[2.5px] border-[#1E1E24] rounded-full flex items-center justify-center shadow-[4px_4px_0px_#1E1E24] hover:scale-110 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 relative group"
      >
        <WhatsAppIcon className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E86D3B] border-2 border-white rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E86D3B] border-2 border-white rounded-full" />
      </a>
    </div>
  );
}
