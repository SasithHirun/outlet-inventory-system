import React, { useState } from 'react';
import { Phone, Clock, Menu, X, Shield, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Professional Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-white">Mobile Tyre Service On Duty</span>
            <span className="text-slate-500 hidden md:inline">|</span>
            <span className="text-slate-300 hidden md:inline">We come directly to your home, workplace, or roadside</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-red-500" />
              <span>7 Days: 7:00 AM – 7:00 PM (24/7 Emergency Roadside)</span>
            </div>
            <a 
              href="tel:0412344591" 
              className="text-white hover:text-red-400 font-bold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>Hotline: 04 1234 45 91</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="bg-slate-950 p-2 rounded-xl border border-slate-800 shadow-sm transition-transform group-hover:scale-102">
              <img 
                src="/logo.png" 
                alt="RoadMAX Logo" 
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>
            <div>
              <div className="font-heading font-black text-xl sm:text-2xl tracking-tight text-slate-900 leading-none">
                ROAD<span className="text-red-600">MAX</span>
              </div>
              <div className="text-[10px] tracking-widest uppercase font-bold text-slate-500 mt-1">
                MOBILE TYRE SERVICE
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-sm font-semibold text-slate-900 hover:text-red-600 transition-colors">
              Home
            </a>
            <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
              About Us
            </a>
            <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Action Header CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="https://facebook.com/marketplace" 
              target="_blank" 
              rel="noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-all"
            >
              <svg className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>FB Marketplace</span>
            </a>

            <a
              href="tel:0412344591"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>04 1234 45 91</span>
            </a>

            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm hover:shadow transition-all"
            >
              <span>Book Mobile Fitting</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:0412344591"
              className="p-2.5 rounded-xl bg-red-600 text-white font-bold"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-6 shadow-xl animate-fadeIn">
          <div className="space-y-1 pb-4 border-b border-slate-100">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg font-semibold text-slate-800 hover:bg-slate-50 hover:text-red-600"
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg font-semibold text-slate-800 hover:bg-slate-50 hover:text-red-600"
            >
              Services & Tyre Fitting
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg font-semibold text-slate-800 hover:bg-slate-50 hover:text-red-600"
            >
              How It Works
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg font-semibold text-slate-800 hover:bg-slate-50 hover:text-red-600"
            >
              About Us
            </a>
            <a 
              href="#call-now" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg font-semibold text-slate-800 hover:bg-slate-50 hover:text-red-600"
            >
              Emergency Callout
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg font-semibold text-slate-800 hover:bg-slate-50 hover:text-red-600"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg font-semibold text-slate-800 hover:bg-slate-50 hover:text-red-600"
            >
              Contact & Social Media
            </a>
          </div>

          <div className="pt-4 space-y-3">
            <a
              href="tel:0412344591"
              className="w-full py-3 bg-red-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call: 04 1234 45 91</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2"
            >
              Book Mobile Fitting
            </button>
            <a
              href="https://facebook.com/marketplace"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-xl font-semibold flex items-center justify-center gap-2 text-xs"
            >
              Find us on Facebook Marketplace
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
