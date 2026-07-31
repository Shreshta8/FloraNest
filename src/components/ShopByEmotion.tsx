import React, { useState } from 'react';
import { EMOTIONS, FLOWER_PRODUCTS } from '../data/flowerData';
import { EmotionId, FlowerProduct } from '../types';
import { Heart, Star, Sparkles, Eye, Plus, ShoppingBag } from 'lucide-react';

interface ShopByEmotionProps {
  onQuickView: (product: FlowerProduct) => void;
  onAddToCart: (product: FlowerProduct) => void;
}

export const ShopByEmotion: React.FC<ShopByEmotionProps> = ({ onQuickView, onAddToCart }) => {
  const [activeEmotionId, setActiveEmotionId] = useState<EmotionId>('love');

  const activeEmotion = EMOTIONS.find((e) => e.id === activeEmotionId) || EMOTIONS[0];
  const filteredProducts = FLOWER_PRODUCTS.filter((p) => p.emotionCategory === activeEmotionId);

  return (
    <section id="shop-emotion" className="py-16 lg:py-24 bg-[#FFFDF8] border-t border-[#7A9E7E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5D6DE]/40 text-[#2E2E2E] text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 text-[#D96B74] fill-current" />
            <span>Emotional Journey</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2E2E2E]">
            Shop by Emotion
          </h2>
          <p className="text-sm sm:text-base text-[#2E2E2E]/75 leading-relaxed">
            Flowers convey what words sometimes cannot. Choose the feeling you want to express, and let our curated arrangements speak directly to the heart.
          </p>
        </div>

        {/* Emotion Buttons Selector Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {EMOTIONS.map((emotion) => {
            const isActive = emotion.id === activeEmotionId;
            return (
              <button
                key={emotion.id}
                onClick={() => setActiveEmotionId(emotion.id)}
                className={`p-4 rounded-2xl transition-all text-center flex flex-col items-center justify-center gap-2 border text-left focus:outline-none ${
                  isActive
                    ? 'bg-white shadow-md border-[#7A9E7E] ring-2 ring-[#7A9E7E]/20 scale-102'
                    : 'bg-white/60 hover:bg-white border-gray-100 hover:border-[#7A9E7E]/30 hover:shadow-xs'
                }`}
              >
                <span className="text-3xl sm:text-4xl mb-1">{emotion.emoji}</span>
                <span className={`text-xs sm:text-sm font-bold block ${isActive ? 'text-[#2E2E2E]' : 'text-[#2E2E2E]/80'}`}>
                  {emotion.name}
                </span>
                <span className="text-[11px] text-[#2E2E2E]/60 line-clamp-1">
                  {emotion.tagline}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Emotion Highlight Card */}
        <div
          className="mt-8 p-6 sm:p-8 rounded-2xl border transition-all duration-300"
          style={{
            backgroundColor: activeEmotion.bgLight,
            borderColor: activeEmotion.borderColor
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{activeEmotion.emoji}</span>
                <h3 className="font-playfair text-2xl font-bold text-[#2E2E2E]">
                  Arrangements for {activeEmotion.name}
                </h3>
              </div>
              <p className="text-sm text-[#2E2E2E]/80 max-w-2xl leading-relaxed">
                {activeEmotion.description}
              </p>
            </div>
            <div className="text-xs font-semibold px-4 py-2 bg-white/80 backdrop-blur-xs rounded-full border border-black/5 text-[#2E2E2E] self-start md:self-auto shadow-2xs">
              {filteredProducts.length} Curated Bouquets
            </div>
          </div>
        </div>

        {/* Products Grid for Active Emotion */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image & Quick Action Overlay */}
              <div className="relative aspect-4/3 overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {product.isRareFlower && (
                    <span className="bg-[#FEF3C7] text-[#B45309] border border-[#FAD380] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#E29532]" />
                      <span>Rare Bloom</span>
                    </span>
                  )}
                  {product.isBestselling && (
                    <span className="bg-[#7A9E7E] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                      Best Seller
                    </span>
                  )}
                  {product.vaseIncluded && (
                    <span className="bg-[#FFFDF8] text-[#2E2E2E] text-[10px] font-medium px-2.5 py-1 rounded-full shadow-xs border border-gray-100">
                      Vase Included
                    </span>
                  )}
                </div>

                {/* Quick Action Overlay Buttons */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                  <button
                    onClick={() => onQuickView(product)}
                    className="p-3 bg-white text-[#2E2E2E] rounded-full hover:bg-[#7A9E7E] hover:text-white transition-colors shadow-md"
                    title="Quick View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="px-4 py-2.5 bg-[#7A9E7E] text-white font-semibold text-xs rounded-full hover:bg-[#628366] transition-colors shadow-md flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#7A9E7E] font-semibold">{product.stemsCount} Fresh Stems</span>
                    <div className="flex items-center gap-1 text-[#E29532]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-bold">{product.rating}</span>
                      <span className="text-gray-400">({product.reviewCount})</span>
                    </div>
                  </div>

                  <h4 className="font-playfair text-xl font-bold text-[#2E2E2E] group-hover:text-[#7A9E7E] transition-colors">
                    {product.name}
                  </h4>

                  <p className="text-xs text-[#2E2E2E]/70 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Meanings tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {product.meanings.map((meaning, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-[#FFFDF8] border border-[#7A9E7E]/20 text-[#2E2E2E]/80 px-2 py-0.5 rounded-md"
                    >
                      {meaning}
                    </span>
                  ))}
                </div>

                {/* Price & Action */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-[#2E2E2E]">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through ml-2">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="p-2 bg-[#7A9E7E]/10 text-[#7A9E7E] hover:bg-[#7A9E7E] hover:text-white rounded-full transition-all"
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
