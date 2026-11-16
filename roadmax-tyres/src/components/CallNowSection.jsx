import React from 'react';
import { Phone, MessageSquare, Clock, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export default function CallNowSection() {
  return (
    <section id="call-now" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span>Emergency Roadside & Urgent Mobile Fitting</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white leading-tight">
            Stranded With A Flat Tyre, Or Need New Tyres Fitted Today?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Call our direct dispatch line. Our technicians will confirm your tyre dimensions, give you an upfront price with zero hidden fees, and roll out immediately.
          </p>

          {/* Primary Call Now Action Box */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0412344591"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xl sm:text-2xl tracking-wide flex items-center justify-center gap-3 shadow-lg shadow-red-600/30 transition-all hover:scale-102 active:scale-98"
            >
              <Phone className="w-6 h-6 fill-white" />
              <span>04 1234 45 91</span>
            </a>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="sms:0412344591"
                className="flex-1 sm:flex-initial px-5 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-slate-400" />
                <span>Send SMS</span>
              </a>

              <a
                href="https://wa.me/61412344591"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial px-5 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 3 Trust Points */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-red-500" />
              Rapid Mobile Dispatch (Avg. 30-60 Mins)
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Upfront Pricing — No Hidden Fees
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              7 Days A Week Service
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
