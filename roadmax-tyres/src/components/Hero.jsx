import React, { useState } from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Clock, Truck, Star, Wrench, HelpCircle } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('size');
  const [width, setWidth] = useState('205');
  const [profile, setProfile] = useState('55');
  const [rim, setRim] = useState('16');
  const [tyreType, setTyreType] = useState('both');
  const [suburb, setSuburb] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onOpenQuote({
      size: `${width}/${profile} R${rim}`,
      type: tyreType,
      suburb: suburb
    });
  };

  return (
    <section id="home" className="relative bg-white pt-10 pb-16 lg:pb-24 border-b border-slate-200">
      
      {/* Subtle decorative grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span>BUILT FOR THE ROAD AHEAD • WE KEEP YOU MOVING</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-600 font-medium">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.9/5</span>
            <span>(500+ Verified Customer Ratings)</span>
          </div>
        </div>

        {/* 2-Column Split: Value Proposition (Left) + Interactive Booking (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="text-red-600 font-extrabold text-xs sm:text-sm uppercase tracking-wider block">
                Mobile Tyre Service • We Come To You!
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-slate-900 tracking-tight leading-[1.12]">
                Expert Mobile Tyre Fitting & Balancing At Your Doorstep.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Don’t waste your weekend waiting in tyre shop queues or paying expensive tow trucks. RoadMAX delivers top-grade new & quality used tyres, professional fitting, and precision computerized wheel balancing directly to your home, workplace, or roadside.
            </p>

            {/* 3 Key Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">100% Mobile Service</div>
                  <div className="text-[11px] text-slate-500">Fitted in ~45 minutes</div>
                </div>
              </div>
              
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">New & Inspected Used</div>
                  <div className="text-[11px] text-slate-500">Options for every budget</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Trade & Public</div>
                  <div className="text-[11px] text-slate-500">Bulk orders welcome</div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenQuote()}
                className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Book Mobile Fitting</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:0412344591"
                className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base transition-colors flex items-center justify-center gap-3"
              >
                <div className="p-1 rounded-lg bg-red-600">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold leading-none">Emergency / Hotline</div>
                  <div className="text-base font-black tracking-wide leading-none mt-1">04 1234 45 91</div>
                </div>
              </a>
            </div>

            {/* Service Area Notice */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <Truck className="w-4 h-4 text-slate-400" />
              <span>Covering Greater Sydney & Surrounding Regional Districts • Same-Day Dispatch</span>
            </div>

          </div>

          {/* Right Column: Clean Interactive Tyre Booking Box */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Header with Tabs */}
              <div className="bg-slate-900 p-5 text-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-heading font-black text-lg text-white flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-red-500" />
                    <span>Instant Tyre Matcher</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-0.5 rounded-full">
                    Van Available
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Select your tyre dimensions or call us directly for immediate dispatch.
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSearch} className="p-6 space-y-4">
                
                {/* Tyre Dimensions Row */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Tyre Size Dimensions
                    </label>
                    <span className="text-[11px] text-slate-500">e.g. 205/55 R16</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <span className="block text-[10px] font-bold text-slate-500 mb-1">WIDTH (mm)</span>
                      <select
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      >
                        <option value="175">175</option>
                        <option value="185">185</option>
                        <option value="195">195</option>
                        <option value="205">205</option>
                        <option value="215">215</option>
                        <option value="225">225</option>
                        <option value="235">235</option>
                        <option value="245">245</option>
                        <option value="255">255</option>
                        <option value="265">265</option>
                        <option value="275">275</option>
                      </select>
                    </div>

                    <div>
                      <span className="block text-[10px] font-bold text-slate-500 mb-1">PROFILE (%)</span>
                      <select
                        value={profile}
                        onChange={(e) => setProfile(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      >
                        <option value="35">35</option>
                        <option value="40">40</option>
                        <option value="45">45</option>
                        <option value="50">50</option>
                        <option value="55">55</option>
                        <option value="60">60</option>
                        <option value="65">65</option>
                        <option value="70">70</option>
                      </select>
                    </div>

                    <div>
                      <span className="block text-[10px] font-bold text-slate-500 mb-1">RIM DIAMETER</span>
                      <select
                        value={rim}
                        onChange={(e) => setRim(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      >
                        <option value="14">14"</option>
                        <option value="15">15"</option>
                        <option value="16">16"</option>
                        <option value="17">17"</option>
                        <option value="18">18"</option>
                        <option value="19">19"</option>
                        <option value="20">20"</option>
                        <option value="21">21"</option>
                        <option value="22">22"</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Tyre Condition Option */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Tyre Condition Preference
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setTyreType('both')}
                      className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all ${
                        tyreType === 'both'
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Compare Both
                    </button>
                    <button
                      type="button"
                      onClick={() => setTyreType('new')}
                      className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all ${
                        tyreType === 'new'
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Brand New
                    </button>
                    <button
                      type="button"
                      onClick={() => setTyreType('used')}
                      className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all ${
                        tyreType === 'used'
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Quality Used
                    </button>
                  </div>
                </div>

                {/* Suburb / Postcode Input */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Your Suburb or Postcode
                  </label>
                  <input
                    type="text"
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                    placeholder="e.g. Parramatta, Liverpool, Penrith..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-black text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <span>Check Availability & Price</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-2 border-t border-slate-100 text-center">
                  <a 
                    href="tel:0412344591" 
                    className="text-xs font-bold text-slate-700 hover:text-red-600 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Unsure of your size? Call our technicians on <strong>04 1234 45 91</strong></span>
                  </a>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Brand Trust Strip */}
      <div className="mt-14 pt-8 border-t border-slate-200/80 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 shrink-0">
              Premium Tyre Brands We Stock & Fit:
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm font-bold text-slate-600">
              <span className="hover:text-slate-900 transition-colors">MICHELIN</span>
              <span className="hover:text-slate-900 transition-colors">BRIDGESTONE</span>
              <span className="hover:text-slate-900 transition-colors">GOODYEAR</span>
              <span className="hover:text-slate-900 transition-colors">PIRELLI</span>
              <span className="hover:text-slate-900 transition-colors">CONTINENTAL</span>
              <span className="hover:text-slate-900 transition-colors">DUNLOP</span>
              <span className="hover:text-slate-900 transition-colors">HANKOOK</span>
              <span className="text-red-600 font-extrabold">+ Budget Brands</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
