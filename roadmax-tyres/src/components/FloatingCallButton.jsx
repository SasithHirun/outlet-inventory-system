import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp or SMS quick bubble */}
      <a
        href="https://wa.me/61412344591"
        target="_blank"
        rel="noreferrer"
        className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg transition-all hover:scale-105"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span>WhatsApp Quick Chat</span>
      </a>

      {/* Main Glowing Call Button */}
      <a
        href="tel:0412344591"
        className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-heading font-black text-sm shadow-2xl shadow-red-600/50 hover:scale-105 active:scale-95 transition-all border-2 border-white/60 animate-bounce duration-1000"
        title="Call 04 1234 45 91"
      >
        <div className="relative">
          <Phone className="w-5 h-5 fill-white" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
        </div>
        <span className="tracking-wide">04 1234 45 91</span>
      </a>
    </div>
  );
}
