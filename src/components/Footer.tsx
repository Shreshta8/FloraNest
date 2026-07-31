import React from 'react';
import { Instagram, Facebook, Heart, Sparkles, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigateTo: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo }) => {
  return (
    <footer className="bg-[#2E2E2E] text-white pt-0 pb-12 border-t border-gray-800">
      
      {/* Editorial Ticker Bar */}
      <div className="meaning-bar bg-[#7A9E7E]/15 border-t border-b border-[#7A9E7E]/25 py-3 px-4 sm:px-12 flex items-center gap-6 sm:gap-12 overflow-hidden text-[#FFFDF8]">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#7A9E7E] shrink-0">
          Flower Meanings
        </span>
        <div className="flex-1 flex items-center gap-8 sm:gap-16 text-[11px] font-medium italic overflow-x-auto scrollbar-none whitespace-nowrap opacity-85">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#7A9E7E] rounded-full" />
            <span>Red Rose • Deep Love & Passion</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#7A9E7E] rounded-full" />
            <span>Sunflower • Loyalty & Pure Happiness</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#7A9E7E] rounded-full" />
            <span>White Lily • Purity & Rebirth</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#7A9E7E] rounded-full" />
            <span>Lavender • Serenity & Grace</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#7A9E7E] rounded-full" />
            <span>Pink Peony • Prosperity & Compassion</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#7A9E7E] rounded-full" />
            <span>Tulip • Perfect Unconditional Love</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pt-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#7A9E7E] text-white flex items-center justify-center font-playfair font-bold text-xl">
                F
              </div>
              <span className="font-playfair text-2xl font-bold tracking-tight">
                Flora<span className="text-[#7A9E7E]">Nest</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed">
              Expressing every emotion beautifully through artisanal fresh blooms, bespoke bouquet curation, and white-glove nationwide delivery.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="#instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#7A9E7E] text-white flex items-center justify-center transition-colors text-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#7A9E7E] text-white flex items-center justify-center transition-colors text-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#pinterest"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#7A9E7E] text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Pinterest"
              >
                P
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-playfair font-bold text-sm tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button onClick={() => onNavigateTo('hero')} className="hover:text-[#7A9E7E] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('shop-emotion')} className="hover:text-[#7A9E7E] transition-colors">
                  Shop by Emotion
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('builder')} className="hover:text-[#7A9E7E] transition-colors">
                  Build Your Bouquet
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('meanings')} className="hover:text-[#7A9E7E] transition-colors">
                  Flower Meanings
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('why-us')} className="hover:text-[#7A9E7E] transition-colors">
                  About FloraNest
                </button>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div className="space-y-3">
            <h4 className="font-playfair font-bold text-sm tracking-wide text-white">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button onClick={() => onNavigateTo('collections')} className="hover:text-[#7A9E7E] transition-colors">
                  Best Sellers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('collections')} className="hover:text-[#7A9E7E] transition-colors">
                  Birthday Collection
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('collections')} className="hover:text-[#7A9E7E] transition-colors">
                  Wedding & Events
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('collections')} className="hover:text-[#7A9E7E] transition-colors">
                  Luxury Bouquets
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('collections')} className="hover:text-[#7A9E7E] transition-colors">
                  Indoor Plants & Hampers
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Policies */}
          <div className="space-y-3">
            <h4 className="font-playfair font-bold text-sm tracking-wide text-white">
              Support & Care
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button onClick={() => onNavigateTo('contact')} className="hover:text-[#7A9E7E] transition-colors">
                  Contact Concierge
                </button>
              </li>
              <li>
                <a href="#care" className="hover:text-[#7A9E7E] transition-colors">
                  Flower Care Guide
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#7A9E7E] transition-colors">
                  Delivery FAQs
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#7A9E7E] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#7A9E7E] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} FloraNest Atelier LLC. All rights reserved.</p>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-[#D96B74] fill-current inline" />
            <span>for floral lovers everywhere.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
