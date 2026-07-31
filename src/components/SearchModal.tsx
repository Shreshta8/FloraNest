import React, { useState } from 'react';
import { FLOWER_PRODUCTS } from '../data/flowerData';
import { FlowerProduct } from '../types';
import { Search, X, Star, ShoppingBag, Eye } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuickView: (product: FlowerProduct) => void;
  onAddToCart: (product: FlowerProduct) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onQuickView,
  onAddToCart
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = FLOWER_PRODUCTS.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.emotionCategory.toLowerCase().includes(q) ||
      p.meanings.some((m) => m.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in duration-200">
      <div className="bg-[#FFFDF8] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-white/50 p-6 space-y-4">
        
        {/* Search Header Input */}
        <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
          <Search className="w-5 h-5 text-[#7A9E7E]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search flowers by name, emotion (e.g. Love, Sympathy), or stem..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#2E2E2E] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-black rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Filter Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-gray-400">Popular:</span>
          {['Roses', 'Peonies', 'Sunflowers', 'Love', 'Sympathy', 'Birthday'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="text-xs bg-white border border-gray-200 hover:border-[#7A9E7E] text-[#2E2E2E] px-2.5 py-1 rounded-full transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="max-h-96 overflow-y-auto space-y-3 pt-2">
          {results.length === 0 ? (
            <p className="text-xs text-gray-500 text-center py-8">
              No floral arrangements found matching "{query}". Try searching "Roses" or "Love".
            </p>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                className="p-3 bg-white rounded-2xl border border-gray-100 hover:border-[#7A9E7E]/30 transition-all flex items-center justify-between gap-3 shadow-2xs group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 rounded-xl object-cover"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-playfair font-bold text-sm text-[#2E2E2E] group-hover:text-[#7A9E7E] transition-colors truncate">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                    <span className="text-[#7A9E7E] font-bold">${product.price}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1 text-[#E29532]">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onQuickView(product);
                      onClose();
                    }}
                    className="p-2 text-gray-500 hover:text-[#7A9E7E] hover:bg-gray-100 rounded-full"
                    title="Quick view"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      onAddToCart(product);
                      onClose();
                    }}
                    className="px-3 py-1.5 bg-[#7A9E7E] text-white font-semibold text-xs rounded-full hover:bg-[#628366]"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
