import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShopByEmotion } from './components/ShopByEmotion';
import { FeaturedCollections } from './components/FeaturedCollections';
import { BuildYourBouquet } from './components/BuildYourBouquet';
import { FlowerMeanings } from './components/FlowerMeanings';
import { WhyChooseFloraNest } from './components/WhyChooseFloraNest';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { ContactAndLocation } from './components/ContactAndLocation';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';

import { FlowerProduct, CustomBouquet, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<FlowerProduct | null>(null);

  // Smooth Navigation Handler
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Cart Operations
  const handleAddPresetToCart = (product: FlowerProduct) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.type === 'preset' && item.product?.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.cartId === existing.cartId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      const newItem: CartItem = {
        cartId: `cart-preset-${product.id}-${Date.now()}`,
        type: 'preset',
        product,
        quantity: 1
      };
      return [...prev, newItem];
    });
    setIsCartOpen(true);
  };

  const handleAddCustomBouquetToCart = (customBouquet: CustomBouquet) => {
    const newItem: CartItem = {
      cartId: `cart-custom-${customBouquet.id}`,
      type: 'custom',
      customBouquet,
      quantity: 1
    };
    setCartItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#2E2E2E] flex flex-col font-poppins selection:bg-[#F5D6DE] selection:text-[#2E2E2E]">
      
      {/* 1. Sticky Navbar */}
      <Navbar
        cartItemsCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateTo={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onShopNow={() => scrollToSection('shop-emotion')}
          onBuildBouquet={() => scrollToSection('builder')}
        />

        {/* 3. Shop by Emotion */}
        <ShopByEmotion
          onQuickView={(prod) => setQuickViewProduct(prod)}
          onAddToCart={handleAddPresetToCart}
        />

        {/* 4. Featured Collections */}
        <FeaturedCollections
          onQuickView={(prod) => setQuickViewProduct(prod)}
          onAddToCart={handleAddPresetToCart}
        />

        {/* 5. Build Your Own Bouquet */}
        <BuildYourBouquet
          onAddCustomBouquetToCart={handleAddCustomBouquetToCart}
        />

        {/* 6. Why Choose FloraNest */}
        <WhyChooseFloraNest />

        {/* 7. Flower Meanings & Language */}
        <FlowerMeanings />

        {/* 8. Customer Testimonials */}
        <Testimonials />

        {/* 9. Newsletter Subscription */}
        <Newsletter />

        {/* 10. Contact & Location Section */}
        <ContactAndLocation />
      </main>

      {/* 11. Footer */}
      <Footer onNavigateTo={scrollToSection} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Quick View Product Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddPresetToCart}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onQuickView={(prod) => setQuickViewProduct(prod)}
        onAddToCart={handleAddPresetToCart}
      />

    </div>
  );
}
