import React from 'react';
import { ShieldCheck, Award, Users, Wrench, CheckCircle, Phone, ArrowRight } from 'lucide-react';

export default function AboutSection({ onOpenQuote }) {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Story, Right Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">
                About RoadMAX Mobile Tyre Service
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight leading-tight">
                Built For The Road Ahead. <br />
                <span className="text-red-600">We Keep You Moving.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At RoadMAX, our mission is simple: redefine tyre replacement by delivering workshop-level speed, precision, and competitive pricing straight to you. We serve both everyday motorists and commercial trade partners with honesty, safety, and modern equipment.
            </p>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-sm">
                    New & Tested Used Tyres
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Huge inventory of brand-new tier-1 brands alongside thoroughly road-tested, safety-verified used tyres for any budget.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-sm">
                    Trade & Public Welcome
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Whether you need a single emergency puncture repair or a weekly wholesale tyre supply for your car yard, we've got you covered.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-sm">
                    Bulk Orders & Fleets
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Discounted wholesale pricing for commercial fleets, delivery vans, courier fleets, and automotive workshops.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-sm">
                    Workshop-Grade Equipment
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Custom vans fitted with alloy wheel tyre changers, high-accuracy dynamic balancing machines, and calibrated torque wrenches.
                </p>
              </div>

            </div>

            {/* Direct Phone / Contact row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="tel:0412344591"
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline: 04 1234 45 91</span>
              </a>

              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 transition-colors"
              >
                <span>Request Commercial / Trade Quote</span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Card Presentation */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Presentation Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
              
              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/10 p-2 rounded-xl">
                      <img src="/logo.png" alt="RoadMAX" className="h-7 w-auto object-contain" />
                    </div>
                    <div>
                      <div className="font-heading font-black text-lg text-white">RoadMAX Operations</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Mobile Tyre Unit</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">
                    Sydney Wide
                  </span>
                </div>

                <div className="space-y-3">
                  <h4 className="font-heading font-black text-xl text-white">
                    "Great Tyres. Great Service. Great Prices."
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Designed from the ground up for convenience, transparency, and top safety standards on Australian roads.
                  </p>
                </div>

                {/* Key Numbers Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                    <div className="text-2xl font-black text-red-500 font-heading">15,000+</div>
                    <div className="text-[10px] text-slate-400 uppercase font-semibold mt-0.5">Tyres Fitted</div>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                    <div className="text-2xl font-black text-white font-heading">30-60m</div>
                    <div className="text-[10px] text-slate-400 uppercase font-semibold mt-0.5">Avg Arrival</div>
                  </div>
                </div>

                {/* Direct Callout */}
                <div className="pt-2">
                  <div className="text-xs text-slate-400 text-center">
                    Find our latest verified stock and deals on
                  </div>
                  <a
                    href="https://facebook.com/marketplace"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Facebook Marketplace Verified Seller</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
