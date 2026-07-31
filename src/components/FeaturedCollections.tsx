import React, { useState } from 'react';
import { FLOWER_PRODUCTS } from '../data/flowerData';
import { CollectionId, FlowerProduct } from '../types';
import { Star, Eye, Plus, ShoppingBag, Sparkles, Filter } from 'lucide-react';

interface FeaturedCollectionsProps {
  onQuickView: (product: FlowerProduct) => void;
  onAddToCart: (product: FlowerProduct) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  onQuickView,
  onAddToCart
}) => {
  const [activeTab, setActiveTab] = useState<CollectionId>('bestsellers');

  const tabs: { id: CollectionId; label: string; icon: string }[] = [
    { id: 'bestsellers', label: 'Best Sellers', icon: '✨' },
    { id: 'birthday', label: 'Birthday Collection', icon: '🎂' },
    { id: 'wedding', label: 'Wedding Flowers', icon: '💍' },
    { id: 'luxury', label: 'Luxury Bouquets', icon: '💎' },
    { id: 'plants', label: 'Indoor Plants', icon: '🪴' },
    { id: 'hampers', label: 'Gift Hampers', icon: '🎁' },
    { id: 'seasonal', label: 'Seasonal Blooms', icon: '🌸' }
  ];

  const filteredProducts =
    activeTab === 'bestsellers'
      ? FLOWER_PRODUCTS.filter((p) => p.isBestselling || p.rating >= 4.9)
      : FLOWER_PRODUCTS.filter((p) => p.collection === activeTab);

  return (
    <section id="collections" className="py-16 lg:py-24 bg-[#FFFDF8] border-t border-[#7A9E7E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#7A9E7E] uppercase block mb-1">
              Curated Masterpieces
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2E2E2E]">
              Featured Collections
            </h2>
          </div>
          <p className="text-sm text-[#2E2E2E]/70 max-w-md">
            Handcrafted arrangements for every milestone, styled by our lead floral architects using daily garden fresh stems.
          </p>
        </div>

        {/* Tab Buttons Horizontal Scrollable */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-gray-100">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#7A9E7E] text-white border-[#7A9E7E] shadow-sm'
                    : 'bg-white text-[#2E2E2E]/80 border-gray-200 hover:border-[#7A9E7E]/40 hover:bg-[#7A9E7E]/5'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {product.isRareFlower ? (
                    <span className="bg-[#FEF3C7] text-[#B45309] border border-[#FAD380] text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full shadow-2xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#E29532]" />
                      <span>Rare Bloom (Spring)</span>
                    </span>
                  ) : product.isNew ? (
                    <span className="bg-[#CDB4DB] text-[#2E2E2E] text-[10px] font-bold uppercase px-2 py-0.5 rounded-full shadow-2xs">
                      New Arrival
                    </span>
                  ) : null}
                  {product.freshDaysGuarantee && (
                    <span className="bg-white/90 backdrop-blur-xs text-[#2E2E2E] text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-2xs">
                      {product.freshDaysGuarantee} Days Guarantee
                    </span>
                  )}
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-3">
                  <button
                    onClick={() => onQuickView(product)}
                    className="p-2.5 bg-white text-[#2E2E2E] rounded-full hover:bg-[#7A9E7E] hover:text-white transition-colors shadow-md"
                    title="Quick View"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="px-3.5 py-2 bg-[#7A9E7E] text-white font-semibold text-xs rounded-full hover:bg-[#628366] transition-colors shadow-md flex items-center gap-1"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-xs text-[#7A9E7E] font-medium">{product.stemsCount} Stems</span>
                    <div className="flex items-center gap-1 text-[#E29532]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-bold text-xs">{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-playfair text-lg font-bold text-[#2E2E2E] line-clamp-1 group-hover:text-[#7A9E7E] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#2E2E2E]/65 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Footer Price & Add */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-[#2E2E2E]">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through ml-1.5">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="p-2 bg-[#7A9E7E]/10 text-[#7A9E7E] hover:bg-[#7A9E7E] hover:text-white rounded-full transition-colors"
                    title="Add to Cart"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
