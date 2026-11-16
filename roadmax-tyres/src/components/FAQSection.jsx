import React, { useState } from 'react';
import { ChevronDown, Phone, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How does RoadMAX mobile tyre fitting work?',
    a: 'It’s straightforward and hassle-free. You contact us with your tyre size and location. Our mobile tyre van arrives equipped with industrial tyre-fitting machines, computerised digital balancers, and fresh tyres. We fit, balance, and torque-test your wheels on site while you relax at home or carry on with your workday.',
  },
  {
    q: 'Where can you fit my tyres?',
    a: 'We can fit tyres anywhere with reasonably level ground and safe access. This includes residential driveways, apartment car parks, office car parks, building sites, or on the roadside during an emergency puncture breakdown.',
  },
  {
    q: 'Do you sell both brand-new and quality used tyres?',
    a: 'Yes. RoadMAX supplies brand-new tyres from all leading global brands (Michelin, Bridgestone, Goodyear, Pirelli, Continental, Dunlop, etc.) as well as safety-inspected used tyres. Every used tyre undergoes a comprehensive multi-point inspection for tread depth, structural integrity, and roadworthiness.',
  },
  {
    q: 'How do I check my tyre size?',
    a: 'Look on the sidewall of your current tyre. You will see markings such as "205/55 R16 91V". 205 is the tyre width in millimetres, 55 is the aspect ratio, and 16 is the rim diameter in inches. If you are unsure, simply call 04 1234 45 91 or text us a photo of your tyre sidewall.',
  },
  {
    q: 'Is digital wheel balancing included?',
    a: 'Yes, precision computerized wheel balancing is included with every tyre fitting. Proper balancing prevents steering wheel vibrations, ensures even tyre wear, and protects vehicle suspension components.',
  },
  {
    q: 'How quickly can your mobile technician arrive?',
    a: 'For emergency roadside puncture calls, our average response time is typically between 30 to 60 minutes across Greater Sydney, subject to traffic. You can also schedule convenient morning or afternoon appointment slots in advance.',
  },
  {
    q: 'Do you offer bulk trade pricing for fleets and workshops?',
    a: 'Yes, trade & public are both warmly welcomed. We provide wholesale tyre supply and volume discount terms to mechanics, car yards, transport businesses, and courier fleets. Contact our team to set up trade pricing.',
  },
  {
    q: 'What payment methods do you accept on site?',
    a: 'Our mobile technicians carry wireless EFTPOS terminals accepting all major credit/debit cards (Visa, Mastercard, Amex), Apple Pay, Google Pay, direct bank transfer, and cash.',
  },
];

export default function FAQSection({ onOpenQuote }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2 block">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Everything you need to know about our mobile tyre fitting, emergency roadside dispatch, and tyre options.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 overflow-hidden bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-slate-900 text-base">
                    {faq.q}
                  </span>
                  <div
                    className={`p-1 rounded-full text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-red-600' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-heading font-bold text-slate-900 text-base">
              Have a question not answered here?
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Call our friendly mobile team directly on <strong>04 1234 45 91</strong> for quick assistance.
            </p>
          </div>
          <a
            href="tel:0412344591"
            className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shrink-0 transition-colors"
          >
            Call 04 1234 45 91
          </a>
        </div>

      </div>
    </section>
  );
}
