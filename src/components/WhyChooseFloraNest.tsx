import React from 'react';
import { Flower2, Truck, Award, Leaf, Globe2, ShieldCheck, Sparkles } from 'lucide-react';

export const WhyChooseFloraNest: React.FC = () => {
  const features = [
    {
      icon: <Flower2 className="w-6 h-6 text-[#7A9E7E]" />,
      title: 'Fresh Daily Flowers',
      description: 'Hand-picked daily from sustainable artisan flower farms at peak morning bloom.'
    },
    {
      icon: <Truck className="w-6 h-6 text-[#7A9E7E]" />,
      title: 'Same-Day Delivery',
      description: 'Order by 2:00 PM for guaranteed same-day white-glove courier delivery.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#7A9E7E]" />,
      title: '7-Day Freshness Guarantee',
      description: 'Standard blooms are backed by our 7-day guarantee. (Rare seasonal drops like Tulips are offered at peak annual bloom without fixed shelf guarantees).'
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#7A9E7E]" />,
      title: '100% Eco-Friendly Packaging',
      description: 'Recyclable kraft paper, organic jute twine, and zero single-use plastics.'
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#7A9E7E]" />,
      title: 'Nationwide Coverage',
      description: 'Delivering warmth and emotion across all 50 states with artisan partner florists.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#7A9E7E]" />,
      title: 'Secure White-Glove Checkout',
      description: 'Encrypted checkout, real-time SMS tracking, and photo proof of delivery.'
    }
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-[#F9F7F0] border-t border-[#7A9E7E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7A9E7E]/10 text-[#7A9E7E] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The FloraNest Promise</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E]">
            Why Choose FloraNest
          </h2>
          <p className="text-sm sm:text-base text-[#2E2E2E]/80 leading-relaxed">
            We are dedicated to turning moments into lasting memories with uncompromised quality, floral passion, and seamless care.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-2xs hover:shadow-md transition-all duration-300 space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#7A9E7E]/10 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#2E2E2E]">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#2E2E2E]/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
