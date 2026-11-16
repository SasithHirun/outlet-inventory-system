import React, { useState } from 'react';
import { Phone, Clock, MapPin, Send, CheckCircle2, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';

export default function ContactSection({ initialQuoteData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    suburb: initialQuoteData?.suburb || '',
    vehicle: '',
    tyreSize: initialQuoteData?.size || '',
    tyreType: initialQuoteData?.type || 'both',
    service: initialQuoteData?.service || 'Mobile Tyre Fitting',
    quantity: '2',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  React.useEffect(() => {
    if (initialQuoteData?.size) {
      setFormData(prev => ({ ...prev, tyreSize: initialQuoteData.size }));
    }
    if (initialQuoteData?.service) {
      setFormData(prev => ({ ...prev, service: initialQuoteData.service }));
    }
    if (initialQuoteData?.suburb) {
      setFormData(prev => ({ ...prev, suburb: initialQuoteData.suburb }));
    }
  }, [initialQuoteData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
            Contact RoadMAX & Request Service
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Need immediate roadside assistance, quote comparison, or bulk tyre supply? Reach our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact & Social Media */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-5">
              <h3 className="font-heading font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                <a 
                  href="tel:0412344591" 
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 hover:bg-red-50/50 border border-slate-200 hover:border-red-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Direct Call & Dispatch</div>
                    <div className="text-lg font-heading font-black text-slate-900 group-hover:text-red-600 transition-colors">
                      04 1234 45 91
                    </div>
                    <div className="text-xs text-slate-500">Tap to call our mobile technicians</div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Service Hours</div>
                    <div className="text-sm font-bold text-slate-900">Monday – Sunday: 7:00 AM – 7:00 PM</div>
                    <div className="text-xs text-red-600 font-medium">24/7 Roadside Emergency Dispatch Available</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase">Operating Radius</div>
                    <div className="text-sm font-bold text-slate-900">Greater Sydney & Surrounding Districts</div>
                    <div className="text-xs text-slate-500">Mobile workshops come straight to your location</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Facebook Marketplace Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-slate-900 text-lg">
                Connect With Us On Social Media
              </h3>

              {/* Facebook Marketplace Feature */}
              <a
                href="https://facebook.com/marketplace"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white text-blue-600 flex items-center justify-center font-black">
                    <svg className="w-5 h-5 fill-blue-600" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-blue-200">Official Seller Profile</div>
                    <div className="text-sm font-bold">Find us on Facebook Marketplace</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-200" />
              </a>

              {/* Social Channels Row */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center transition-colors"
                >
                  <div className="text-xs font-bold text-slate-800">Facebook</div>
                  <div className="text-[10px] text-slate-500">@roadmax</div>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center transition-colors"
                >
                  <div className="text-xs font-bold text-slate-800">Instagram</div>
                  <div className="text-[10px] text-slate-500">@roadmaxtyres</div>
                </a>

                <a
                  href="https://wa.me/61412344591"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-center transition-colors"
                >
                  <div className="text-xs font-bold text-emerald-700">WhatsApp</div>
                  <div className="text-[10px] text-slate-500">Chat 24/7</div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Booking & Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-sm">
              
              <div className="mb-6">
                <h3 className="text-xl font-heading font-black text-slate-900">
                  Request Mobile Tyre Fitting or Price Quote
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Complete the short form below and our mobile technicians will get back to you with exact pricing and availability.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-emerald-900">
                    Quote Request Received!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                    Thank you, {formData.name || 'valued customer'}. Our team will review your tyre details and call you on <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-4 py-2 rounded-lg bg-white text-emerald-800 font-bold text-xs border border-emerald-300 hover:bg-emerald-100 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. David Wilson"
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 0412 345 678"
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Fitting Suburb / Postcode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="suburb"
                        required
                        value={formData.suburb}
                        onChange={handleChange}
                        placeholder="e.g. Parramatta 2150"
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Vehicle Make & Model
                      </label>
                      <input
                        type="text"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        placeholder="e.g. 2021 Toyota Hilux"
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tyre Size (if known)
                      </label>
                      <input
                        type="text"
                        name="tyreSize"
                        value={formData.tyreSize}
                        onChange={handleChange}
                        placeholder="e.g. 205/55 R16"
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tyre Condition
                      </label>
                      <select
                        name="tyreType"
                        value={formData.tyreType}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      >
                        <option value="both">Compare New & Used</option>
                        <option value="new">Brand New Tyres</option>
                        <option value="used">Quality Used Tyres</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Quantity
                      </label>
                      <select
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                      >
                        <option value="1">1 Tyre</option>
                        <option value="2">2 Tyres (Axle Pair)</option>
                        <option value="4">4 Tyres (Full Set)</option>
                        <option value="bulk">Bulk / Fleet Order</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Notes or Urgency
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="e.g. Flat tyre parked on street / Need service today before 3 PM"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-black text-sm flex items-center justify-center gap-2 shadow-sm transition-colors disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Submitting Enquiry...' : 'Submit Service Request'}</span>
                  </button>

                  <p className="text-center text-[11px] text-slate-500">
                    Need immediate emergency response? Please call <strong>04 1234 45 91</strong> directly.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
