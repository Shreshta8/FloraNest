import React from 'react';
import { FlowerProduct } from '../types';
import { X, Star, ShoppingBag, ShieldCheck, Heart, Sparkles, Droplets, Sun, Thermometer } from 'lucide-react';

interface ProductDetailModalProps {
  product: FlowerProduct | null;
  onClose: () => void;
  onAddToCart: (product: FlowerProduct) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-[#FFFDF8] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/50 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md text-gray-600 hover:text-black rounded-full shadow-md transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image Showcase */}
          <div className="relative aspect-square md:aspect-auto bg-gray-50 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-1.5">
              <div className="bg-[#7A9E7E] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                {product.emotionCategory.toUpperCase()} COLLECTION
              </div>
              {product.isRareFlower && (
                <div className="bg-[#FEF3C7] text-[#B45309] border border-[#FAD380] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#E29532]" />
                  <span>Rare Seasonal Bloom</span>
                </div>
              )}
            </div>
          </div>

          {/* Product Details Content */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              <div className="flex items-center gap-2">
                <div className="flex text-[#E29532]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#2E2E2E]">{product.rating}</span>
                <span className="text-xs text-gray-400">({product.reviewCount} reviews)</span>
              </div>

              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#2E2E2E]">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-[#7A9E7E]">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                <span className="text-xs text-[#2E2E2E]/60 bg-[#7A9E7E]/10 px-2.5 py-1 rounded-full font-medium">
                  {product.stemsCount} Stems included
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#2E2E2E]/80 leading-relaxed">
                {product.description}
              </p>

              {/* Rare Flower Special Notice */}
              {product.isRareFlower && (
                <div className="bg-[#FEF8EE] border border-[#FAD8A5] text-[#8C5312] p-3.5 rounded-2xl text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-[#E29532] shrink-0" />
                    <span>Rare Ephemeral Harvest Notice</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-[#8C5312]/90">
                    Tulips bloom naturally only once per year in spring! Because they are delicate, limited seasonal blooms with a short harvest window, standard multi-day guarantees do not apply. Enjoy them fresh at the peak of their natural annual cycle.
                  </p>
                </div>
              )}

              {/* Meanings */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-bold text-[#7A9E7E] uppercase tracking-wider block">
                  Symbolic Meanings
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.meanings.map((m, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#F5D6DE]/40 border border-[#F5D6DE] text-[#2E2E2E] px-2.5 py-1 rounded-full font-medium"
                    >
                      🌸 {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botanical Care Tips */}
              <div className="pt-3 border-t border-gray-100 space-y-2 text-xs text-[#2E2E2E]/75">
                <span className="font-bold text-[#2E2E2E] block">Atelier Care Tips:</span>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 bg-white rounded-xl border border-gray-100 shadow-2xs">
                    <Droplets className="w-4 h-4 text-[#7A9E7E] mx-auto mb-1" />
                    <span className="text-[10px] block font-semibold">Fresh Water</span>
                    <span className="text-[9px] text-gray-400">Change every 2 days</span>
                  </div>
                  <div className="p-2 bg-white rounded-xl border border-gray-100 shadow-2xs">
                    <Sun className="w-4 h-4 text-[#E29532] mx-auto mb-1" />
                    <span className="text-[10px] block font-semibold">Indirect Light</span>
                    <span className="text-[9px] text-gray-400">Avoid harsh heat</span>
                  </div>
                  {product.freshDaysGuarantee ? (
                    <div className="p-2 bg-white rounded-xl border border-gray-100 shadow-2xs">
                      <ShieldCheck className="w-4 h-4 text-[#7A9E7E] mx-auto mb-1" />
                      <span className="text-[10px] block font-semibold">{product.freshDaysGuarantee} Days</span>
                      <span className="text-[9px] text-gray-400">Fresh guarantee</span>
                    </div>
                  ) : (
                    <div className="p-2 bg-[#FEF8EE] rounded-xl border border-[#FAD8A5] shadow-2xs">
                      <Sparkles className="w-4 h-4 text-[#E29532] mx-auto mb-1" />
                      <span className="text-[10px] block font-semibold text-[#8C5312]">1x/Year Bloom</span>
                      <span className="text-[9px] text-[#8C5312]/80">Spring Harvest</span>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-gray-100 flex gap-3">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="flex-1 bg-[#7A9E7E] text-white font-bold text-xs sm:text-sm py-3.5 rounded-full hover:bg-[#628366] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart (${product.price})</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
