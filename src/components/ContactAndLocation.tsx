import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export const ContactAndLocation: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FFFDF8] border-t border-[#7A9E7E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#7A9E7E] uppercase">
            Get in Touch
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E]">
            Visit or Contact Our Atelier
          </h2>
          <p className="text-sm sm:text-base text-[#2E2E2E]/75 leading-relaxed">
            Have questions about custom wedding installations, corporate subscriptions, or nationwide delivery? Our master florists are here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Business Specs */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-2xs space-y-6">
              <h3 className="font-playfair text-xl font-bold text-[#2E2E2E]">
                FloraNest Flagship Atelier
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#2E2E2E]/80">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#7A9E7E]/10 text-[#7A9E7E] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E]">Atelier Address</h4>
                    <p className="text-gray-600">742 Blossom Avenue, Suite 100</p>
                    <p className="text-gray-600">Chicago, IL 60611, United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#7A9E7E]/10 text-[#7A9E7E] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E]">Phone & Support</h4>
                    <p className="text-gray-600">Toll Free: 1-800-FLORANEST (356-7263)</p>
                    <p className="text-gray-600">Direct Concierge: +1 (312) 555-0198</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#7A9E7E]/10 text-[#7A9E7E] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E]">Email</h4>
                    <p className="text-gray-600">hello@floranest.com</p>
                    <p className="text-gray-600">bespoke-weddings@floranest.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#7A9E7E]/10 text-[#7A9E7E] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E]">Atelier & Delivery Hours</h4>
                    <p className="text-gray-600">Monday – Saturday: 8:00 AM – 7:00 PM</p>
                    <p className="text-gray-600">Sunday: 9:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Google Map Mockup Box */}
              <div className="pt-2">
                <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-inner flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
                    alt="FloraNest Chicago Map Location"
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-10 h-10 rounded-full bg-[#7A9E7E] text-white flex items-center justify-center shadow-md mb-1 animate-bounce">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="bg-white/95 text-[#2E2E2E] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      FloraNest Chicago Flagship
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-2xs space-y-6">
            <div>
              <h3 className="font-playfair text-xl font-bold text-[#2E2E2E]">
                Send Us a Message
              </h3>
              <p className="text-xs text-[#2E2E2E]/65">
                Our floral design team responds within 2 hours during business operating hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-3 bg-[#F1F7F2] rounded-2xl border border-[#7A9E7E]">
                <CheckCircle className="w-10 h-10 text-[#7A9E7E] mx-auto" />
                <h4 className="font-playfair text-xl font-bold text-[#2E2E2E]">Thank You!</h4>
                <p className="text-xs sm:text-sm text-[#2E2E2E]/80 max-w-sm mx-auto">
                  Your message has been safely received. A dedicated FloraNest concierge will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="text-xs font-semibold text-[#7A9E7E] underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-[#2E2E2E] block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Clara Henderson"
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7A9E7E]"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-[#2E2E2E] block mb-1">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. clara@example.com"
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7A9E7E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-[#2E2E2E] block mb-1">Topic / Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7A9E7E] bg-white"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Custom Wedding Flowers">Custom Wedding & Event Flowers</option>
                    <option value="Corporate Subscription">Corporate Subscription</option>
                    <option value="Delivery Status">Existing Order & Delivery Status</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-[#2E2E2E] block mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your floral vision, dates, or questions..."
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7A9E7E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#7A9E7E] text-white font-semibold text-xs px-8 py-3.5 rounded-full hover:bg-[#628366] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
