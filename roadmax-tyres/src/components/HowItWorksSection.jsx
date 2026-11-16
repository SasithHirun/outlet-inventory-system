import React from 'react';
import { PhoneCall, Truck, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Book or Call With Your Details',
    desc: 'Provide your tyre size (e.g. 205/55 R16) and preferred location — whether at your driveway, office carpark, or roadside breakdown.',
    icon: PhoneCall,
  },
  {
    number: '02',
    title: 'Mobile Workshop Arrives',
    desc: 'Our technician pulls up in a customized RoadMAX mobile tyre van equipped with commercial-grade tyre changers and digital balancers.',
    icon: Truck,
  },
  {
    number: '03',
    title: 'Fitted, Balanced & Ready to Drive',
    desc: 'We mount, digitally balance, and torque-test every wheel. Old tyres are responsibly removed and recycled. You are back on the road in ~45 mins!',
    icon: CheckCircle2,
  },
];

export default function HowItWorksSection({ onOpenQuote }) {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2 block">
            Effortless Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
            How RoadMAX Mobile Service Works
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Say goodbye to sitting in garage waiting rooms. We make changing or repairing your tyres as seamless as ordering a ride.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-heading font-black text-slate-200">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-heading font-black text-slate-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-red-600">
                  <span>Fast & hassle-free</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenQuote()}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-colors"
          >
            <span>Book Your Mobile Appointment Now</span>
            <ArrowRight className="w-4 h-4 text-red-500" />
          </button>
        </div>

      </div>
    </section>
  );
}
