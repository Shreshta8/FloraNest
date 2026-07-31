import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Heart, Sparkles, MapPin, Phone } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cartItemsCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItemsCount,
  onOpenCart,
  onOpenSearch,
  onNavigateTo
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', target: 'hero' },
    { name: 'Shop by Emotion', target: 'shop-emotion' },
    { name: 'Collections', target: 'collections' },
    { name: 'Custom Bouquet', target: 'builder' },
    { name: 'Flower Meanings', target: 'meanings' },
    { name: 'About', target: 'why-us' },
    { name: 'Contact', target: 'contact' }
  ];

  const handleLinkClick = (targetId: string) => {
    onNavigateTo(targetId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#7A9E7E] text-white text-xs font-medium py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#F5D6DE] animate-pulse" />
        <span>Same-Day Nationwide Delivery Available • Order by 2 PM local time</span>
        <span className="hidden sm:inline-block opacity-75">|</span>
        <span className="hidden sm:inline-flex items-center gap-1 opacity-90">
          <Phone className="w-3 h-3" /> 1-800-FLORANEST
        </span>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFDF8]/90 backdrop-blur-md shadow-sm border-b border-[#7A9E7E]/10 py-3'
            : 'bg-[#FFFDF8] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            aria-label="FloraNest Home"
          >
            <div className="w-9 h-9 rounded-full bg-[#7A9E7E] text-white flex items-center justify-center font-playfair font-bold text-xl shadow-xs group-hover:bg-[#628366] transition-colors">
              F
            </div>
            <div>
              <span className="font-playfair text-2xl font-bold tracking-tight text-[#2E2E2E] block leading-none">
                Flora<span className="text-[#7A9E7E]">Nest</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#7A9E7E] uppercase font-semibold block mt-0.5">
                Bespoke Florals
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className="text-sm font-medium text-[#2E2E2E]/80 hover:text-[#7A9E7E] transition-colors py-1 px-2 rounded-md hover:bg-[#7A9E7E]/5"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#2E2E2E]/80 hover:text-[#7A9E7E] hover:bg-[#7A9E7E]/10 rounded-full transition-colors"
              aria-label="Search flowers"
              title="Search flowers"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="p-2 text-[#2E2E2E]/80 hover:text-[#7A9E7E] hover:bg-[#7A9E7E]/10 rounded-full transition-colors relative"
              aria-label="Open Cart"
              title="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#7A9E7E] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs animate-bounce">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Build Bouquet CTA */}
            <button
              onClick={() => handleLinkClick('builder')}
              className="hidden lg:inline-flex items-center gap-1.5 bg-[#7A9E7E] text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-[#628366] transition-all shadow-xs hover:shadow-md active:scale-98"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F5D6DE]" />
              Build Bouquet
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#2E2E2E] hover:text-[#7A9E7E] rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFDF8] border-b border-[#7A9E7E]/20 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleLinkClick(link.target)}
                  className="text-left text-base font-medium text-[#2E2E2E] hover:text-[#7A9E7E] hover:bg-[#7A9E7E]/10 px-3 py-2.5 rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                <button
                  onClick={() => handleLinkClick('builder')}
                  className="w-full bg-[#7A9E7E] text-white text-sm font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-[#F5D6DE]" />
                  Build Your Own Bouquet
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
