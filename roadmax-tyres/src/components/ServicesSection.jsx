import React from 'react';
import { Truck, RotateCw, Layers, Box, AlertTriangle, ShieldCheck, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Mobile Tyre Fitting',
    desc: 'Professional on-site tyre fitting delivered directly to your driveway, office carpark, or roadside breakdown.',
    features: ['Scratch-free mounting for all wheel sizes', 'Fitted at your scheduled time and location', 'Old tyre eco-friendly disposal included', 'Zero waiting in garage waiting rooms'],
  },
  {
    icon: RotateCw,
    title: 'Precision Wheel Balancing',
    desc: 'Eliminate high-speed steering wheel vibrations and prolong tyre lifespan with digital mobile computerized balancing.',
    features: ['Computerized digital laser balance weights', 'Protects vehicle suspension & wheel bearings', 'Ensures optimal road grip & fuel efficiency', 'Included with every mobile tyre fitting'],
  },
  {
    icon: Layers,
    title: 'New & Quality Used Tyres',
    desc: 'Access a massive inventory of brand-new global manufacturers alongside thoroughly tested, roadworthy used tyres.',
    features: ['All leading premium, mid-tier & budget brands', 'Comprehensive tread depth & safety check on used stock', 'Low-profile, run-flat, and commercial specs', 'Competitive price match guarantee'],
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Puncture Repairs',
    desc: 'Rapid mobile puncture assessment and puncture repair compliant with strict Australian road safety standards.',
    features: ['Rapid mobile dispatch across Sydney & surrounds', 'Permanent internal vulcanized plug repairs', 'Replacement tyre on board if non-repairable', 'Safe roadside & highway recovery service'],
  },
  {
    icon: Box,
    title: 'Bulk Orders & Wholesale Supply',
    desc: 'Wholesale tyre orders and regular consignment supply for mechanical workshops, car yards, and transport companies.',
    features: ['Tiered wholesale volume discounts', 'Consignment supply & priority dispatch', 'Sold directly to trade and public', 'Flexible trade billing and invoice terms'],
  },
  {
    icon: ShieldCheck,
    title: 'Fleet & Commercial Ute Servicing',
    desc: 'Dedicated on-site tyre management for commercial delivery vans, tradie utes, and company car fleets.',
    features: ['Scheduled preventative fleet inspections', 'Minimizes costly vehicle downtime', 'Heavy-load rated commercial fitments', 'Consolidated monthly reporting'],
  },
];

export default function ServicesSection({ onOpenQuote }) {
  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
            Comprehensive Mobile Tyre Services
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            From single emergency replacements to bulk commercial deliveries, RoadMAX handles all your tyre needs with precision and care.
          </p>
        </div>

        {/* 6 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-heading font-black text-slate-900 mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuote({ service: item.title })}
                  className="w-full py-2.5 rounded-lg text-xs font-bold bg-slate-50 hover:bg-red-600 text-slate-800 hover:text-white border border-slate-200 hover:border-red-600 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
