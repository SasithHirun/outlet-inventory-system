import React from 'react';
import { Phone, Clock, MapPin, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-slate-950 p-2 rounded-xl border border-slate-800 shadow-sm">
                <img 
                  src="/logo.png" 
                  alt="RoadMAX Logo" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <div className="font-heading font-black text-xl tracking-tight text-slate-900 leading-none">
                  ROAD<span className="text-red-600">MAX</span>
                </div>
                <div className="text-[10px] tracking-widest uppercase font-bold text-slate-500 mt-1">
                  MOBILE TYRE SERVICE
                </div>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              We bring the tyre workshop to your driveway, jobsite, or roadside. Quality new & tested used tyres, precision computerized balancing, and rapid emergency puncture repair.
            </p>

            <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                BUILT FOR THE ROAD AHEAD
              </div>
              <div className="text-xs font-black text-red-600 tracking-wide">
                WE KEEP YOU MOVING
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-red-600 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-red-600 transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-red-600 transition-colors">How It Works</a></li>
              <li><a href="#about" className="hover:text-red-600 transition-colors">About Us</a></li>
              <li><a href="#call-now" className="hover:text-red-600 transition-colors">Emergency Callout</a></li>
              <li><a href="#faq" className="hover:text-red-600 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider">
              Services
            </div>
            <ul className="space-y-2 text-xs">
              <li>Mobile Tyre Fitting</li>
              <li>Precision Wheel Balancing</li>
              <li>Emergency Puncture Repairs</li>
              <li>Brand-New Tyres</li>
              <li>Safety Tested Used Tyres</li>
              <li>Trade & Fleet Bulk Supply</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider">
              Direct Hotline
            </div>
            <div className="space-y-3 text-xs">
              <a 
                href="tel:0412344591" 
                className="block p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold transition-colors"
              >
                <div className="text-[10px] uppercase font-bold text-slate-500">Call / Message 24/7</div>
                <div className="text-base font-heading font-black text-slate-900">04 1234 45 91</div>
              </a>

              <div className="text-slate-500 space-y-1">
                <div>Mon – Sun: 7:00 AM – 7:00 PM</div>
                <div className="text-red-600 font-semibold">24/7 Emergency Roadside Dispatch</div>
              </div>

              <div>
                <a
                  href="https://facebook.com/marketplace"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 font-bold hover:underline"
                >
                  Facebook Marketplace Seller
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} RoadMAX Mobile Tyre Service. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#call-now" className="hover:text-slate-900 transition-colors">Roadside Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
