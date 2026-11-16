import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    tyreSize: initialData?.size || '',
    tyreType: initialData?.type || 'both',
    service: initialData?.service || 'Mobile Tyre Fitting',
  });
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (initialData?.size) {
      setFormData(prev => ({ ...prev, tyreSize: initialData.size }));
    }
    if (initialData?.service) {
      setFormData(prev => ({ ...prev, service: initialData.service }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-heading font-black text-slate-900">
              Request Received!
            </h3>
            <p className="text-sm text-slate-600">
              Our mobile team is reviewing your tyre requirements and will call you back immediately on <strong>{formData.phone}</strong>.
            </p>
            <div className="pt-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">Free Instant Quote</span>
              <h3 className="text-2xl font-heading font-black text-slate-900 mt-0.5">
                Request Mobile Tyre Quote
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                We will match your tyre size and provide our best price with mobile fitting.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Michael"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0412 345 678"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Fitting Location</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Suburb / Postcode"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tyre Size</label>
                  <input
                    type="text"
                    value={formData.tyreSize}
                    onChange={(e) => setFormData({ ...formData, tyreSize: e.target.value })}
                    placeholder="e.g. 205/55 R16"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tyre Preference</label>
                <select
                  value={formData.tyreType}
                  onChange={(e) => setFormData({ ...formData, tyreType: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                >
                  <option value="both">Compare Both New & Used</option>
                  <option value="new">Brand New Tyres</option>
                  <option value="used">Quality Used Tyres</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit For Instant Price</span>
              </button>

              <div className="pt-2 text-center">
                <a
                  href="tel:0412344591"
                  className="text-xs font-bold text-red-600 hover:underline flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Or call immediately: 04 1234 45 91</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
