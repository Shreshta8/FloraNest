import React, { useState } from 'react';
import { FLOWER_MEANINGS } from '../data/flowerData';
import { FlowerMeaning } from '../types';
import { BookOpen, Sparkles, Tag, ArrowUpRight } from 'lucide-react';

export const FlowerMeanings: React.FC = () => {
  const [selectedFlower, setSelectedFlower] = useState<FlowerMeaning | null>(FLOWER_MEANINGS[0]);

  return (
    <section id="meanings" className="py-16 lg:py-24 bg-[#FFFDF8] border-t border-[#7A9E7E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CDB4DB]/30 text-[#2E2E2E] text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-[#9C62A8]" />
            <span>Floral Language & Symbolism</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E]">
            The Language of Flowers
          </h2>
          <p className="text-sm sm:text-base text-[#2E2E2E]/80 leading-relaxed">
            In Victorian times, floriography was used to send coded secret messages. Discover the rich emotional symbolism behind every bloom we harvest.
          </p>
        </div>

        {/* Flower Meanings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLOWER_MEANINGS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedFlower(item)}
              className={`bg-white rounded-2xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                selectedFlower?.id === item.id
                  ? 'border-[#7A9E7E] shadow-md ring-2 ring-[#7A9E7E]/20 scale-102'
                  : 'border-gray-100 hover:border-[#7A9E7E]/30 hover:shadow-xs'
              }`}
            >
              <div className="space-y-4">
                {/* Image & Symbol Badge */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-gray-50">
                  <img
                    src={item.image}
                    alt={item.flowerName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-sm">
                    {item.symbol}
                  </div>
                  {item.isRare && (
                    <div className="absolute top-2.5 left-2.5 bg-[#FEF3C7] text-[#B45309] border border-[#FAD380] text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#E29532]" />
                      <span>Rare 1x/Year Bloom</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#7A9E7E] uppercase tracking-wider">
                      {item.botanicalName}
                    </span>
                    <span className="text-[10px] bg-[#FFFDF8] border border-gray-200 px-2 py-0.5 rounded-full text-gray-600">
                      {item.colorTag}
                    </span>
                  </div>

                  <h3 className="font-playfair text-xl font-bold text-[#2E2E2E] mt-1 group-hover:text-[#7A9E7E] transition-colors">
                    {item.flowerName}
                  </h3>

                  <p className="text-xs font-semibold text-[#D96B74] mt-0.5">
                    "{item.meaning}"
                  </p>

                  <p className="text-xs text-[#2E2E2E]/70 mt-2 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Popular For Tags */}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <p className="text-[10px] font-bold text-[#2E2E2E]/50 uppercase tracking-wider mb-1.5">
                  Best Expressed For:
                </p>
                <div className="flex flex-wrap gap-1">
                  {item.popularFor.map((occ, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-[#7A9E7E]/10 text-[#7A9E7E] font-medium px-2 py-0.5 rounded-md"
                    >
                      {occ}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
