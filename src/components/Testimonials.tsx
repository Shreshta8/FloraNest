import React from 'react';
import { TESTIMONIALS } from '../data/flowerData';
import { Star, CheckCircle, Quote, Heart } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-[#FFFDF8] border-t border-[#7A9E7E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5D6DE]/40 text-[#2E2E2E] text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 text-[#D96B74] fill-current" />
            <span>Stories of Feeling</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E]">
            Loved by Thousands of Hearts
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1">
            <div className="flex text-[#E29532]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-sm text-[#2E2E2E]">4.9 / 5.0 Average Rating</span>
            <span className="text-xs text-gray-400">• Over 12,000+ Verified Orders</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating & Occasion */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#E29532]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] bg-[#7A9E7E]/10 text-[#7A9E7E] font-semibold px-2 py-0.5 rounded-full">
                    {item.occasion}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-[#2E2E2E]/80 italic leading-relaxed">
                  "{item.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover border border-gray-100"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <h4 className="font-bold text-xs text-[#2E2E2E]">{item.author}</h4>
                      {item.verified && (
                        <CheckCircle className="w-3 h-3 text-[#7A9E7E] fill-current" title="Verified Buyer" />
                      )}
                    </div>
                    <p className="text-[10px] text-[#2E2E2E]/60">{item.location}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
