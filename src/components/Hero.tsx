import React from 'react';
import { Sparkles, ArrowRight, Star, ShieldCheck, Truck, Heart } from 'lucide-react';
import { heroFlowerImg } from '../data/flowerData';

interface HeroProps {
  onShopNow: () => void;
  onBuildBouquet: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNow, onBuildBouquet }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-16 lg:py-24 bg-[#FFFDF8]">
      {/* Decorative Floating Editorial Petals */}
      <div className="petal" style={{ top: '12%', left: '6%' }} />
      <div className="petal" style={{ top: '38%', left: '11%', transform: 'rotate(120deg)', background: '#CDB4DB' }} />
      <div className="petal" style={{ top: '18%', right: '35%', transform: 'rotate(200deg)' }} />
      <div className="petal" style={{ bottom: '15%', right: '8%', transform: 'rotate(75deg)', background: '#7A9E7E', opacity: 0.3 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5D6DE]/30 border border-[#F5D6DE] text-[#2E2E2E]">
              <Sparkles className="w-3.5 h-3.5 text-[#7A9E7E]" />
              <span className="text-[#7A9E7E] font-medium tracking-[0.2em] text-[11px] uppercase">
                Expressions of Nature
              </span>
            </div>

            {/* Main Headline - Editorial Typography */}
            <h1 className="serif text-5xl sm:text-6xl lg:text-[76px] xl:text-[84px] leading-[0.95] text-[#2E2E2E] tracking-tight font-normal">
              Flowers for Every <span className="italic text-[#7A9E7E]">Feeling.</span>
            </h1>

            {/* Supporting Copywriter Text */}
            <p className="text-base sm:text-lg text-[#2E2E2E]/75 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Whether you're celebrating, thanking someone, or simply making a day brighter, we help you express every emotion beautifully.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onShopNow}
                className="w-full sm:w-auto btn-sage px-8 py-3.5 text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 group shadow-sm hover:shadow-md"
              >
                <span>Shop Collections</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onBuildBouquet}
                className="w-full sm:w-auto btn-outline px-7 py-3.5 text-xs font-medium tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#7A9E7E]" />
                <span>Build Your Bouquet</span>
              </button>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-8 border-t border-[#7A9E7E]/15 grid grid-cols-3 gap-2 sm:gap-6 text-left max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-[#E29532]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-sm text-[#2E2E2E]">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-[#2E2E2E]/60">12,000+ Happy Hearts</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#7A9E7E]">
                  <Truck className="w-4 h-4" />
                  <span className="font-bold text-sm text-[#2E2E2E]">Same-Day</span>
                </div>
                <p className="text-xs text-[#2E2E2E]/60">Nationwide Express</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#7A9E7E]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-bold text-sm text-[#2E2E2E]">7 Days</span>
                </div>
                <p className="text-xs text-[#2E2E2E]/60">Freshness Guarantee</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background Accent Frame */}
              <div className="absolute -inset-3 bg-[#F5D6DE]/40 rounded-[40px] transform rotate-2 blur-xs -z-10" />
              <div className="absolute -inset-3 bg-[#CDB4DB]/30 rounded-[40px] transform -rotate-2 blur-xs -z-10" />

              {/* Main Visual Image Card with Editorial Styling */}
              <div className="relative rounded-[36px] overflow-hidden card-shadow border border-gray-100 bg-white">
                <img
                  src={heroFlowerImg}
                  alt="FloraNest Luxury Fresh Flower Bouquet"
                  className="w-full h-[380px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Micro Badge 1 */}
                <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl card-shadow border border-white/60 flex items-center gap-3 max-w-[240px]">
                  <div className="w-10 h-10 rounded-full bg-[#F5D6DE] flex items-center justify-center text-[#7A9E7E]">
                    <Heart className="w-5 h-5 fill-current text-[#D96B74]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2E2E2E]">Crafted with Love</p>
                    <p className="text-[11px] text-[#2E2E2E]/70">Hand-selected fresh stems</p>
                  </div>
                </div>

                {/* Floating Micro Badge 2 */}
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-white/60 text-xs font-semibold text-[#7A9E7E] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#7A9E7E] animate-ping" />
                  <span className="tracking-wider uppercase text-[10px]">Fresh Today</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
