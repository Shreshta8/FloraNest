import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  BOUQUET_STEMS,
  WRAPPING_PAPERS,
  RIBBON_COLORS,
  CARD_STYLES,
  builderImg
} from '../data/flowerData';
import { CustomBouquet, BouquetStem, WrappingPaper, RibbonColor, CardStyle } from '../types';
import { Sparkles, Plus, Minus, Check, Heart, Send, RefreshCw, ShoppingBag } from 'lucide-react';

interface BuildYourBouquetProps {
  onAddCustomBouquetToCart: (customBouquet: CustomBouquet) => void;
}

export const BuildYourBouquet: React.FC<BuildYourBouquetProps> = ({
  onAddCustomBouquetToCart
}) => {
  // Builder state
  const [selectedStems, setSelectedStems] = useState<{ stem: BouquetStem; count: number }[]>([
    { stem: BOUQUET_STEMS[0], count: 6 }, // 6 Red Roses default
    { stem: BOUQUET_STEMS[1], count: 4 }, // 4 Blush Roses default
    { stem: BOUQUET_STEMS[6], count: 4 }  // 4 Eucalyptus default
  ]);

  const [selectedWrapping, setSelectedWrapping] = useState<WrappingPaper>(WRAPPING_PAPERS[0]);
  const [selectedRibbon, setSelectedRibbon] = useState<RibbonColor>(RIBBON_COLORS[0]);
  const [selectedCardStyle, setSelectedCardStyle] = useState<CardStyle>(CARD_STYLES[0]);
  const [cardRecipient, setCardRecipient] = useState<string>('Sophia');
  const [cardSender, setCardSender] = useState<string>('With all my love, Julian');
  const [cardMessage, setCardMessage] = useState<string>(
    'May these fresh blooms bring endless sunshine and warmth to your heart today. Thank you for being my constant grace.'
  );

  const [activeStep, setActiveStep] = useState<number>(1);

  // Calculate pricing
  const stemsCost = selectedStems.reduce((sum, item) => sum + item.stem.pricePerStem * item.count, 0);
  const totalStemCount = selectedStems.reduce((sum, item) => sum + item.count, 0);
  const wrappingCost = selectedWrapping.price;
  const ribbonCost = selectedRibbon.price;
  const baseServiceFee = 12.00; // Florist artisan arrangement fee
  const totalPrice = Math.round((stemsCost + wrappingCost + ribbonCost + baseServiceFee) * 100) / 100;

  // Handlers for stem count
  const handleUpdateStemCount = (stem: BouquetStem, delta: number) => {
    setSelectedStems((prev) => {
      const existing = prev.find((item) => item.stem.id === stem.id);
      if (!existing && delta > 0) {
        return [...prev, { stem, count: delta }];
      }
      if (existing) {
        const newCount = existing.count + delta;
        if (newCount <= 0) {
          return prev.filter((item) => item.stem.id !== stem.id);
        }
        return prev.map((item) => (item.stem.id === stem.id ? { ...item, count: newCount } : item));
      }
      return prev;
    });
  };

  const handleReset = () => {
    setSelectedStems([
      { stem: BOUQUET_STEMS[0], count: 6 },
      { stem: BOUQUET_STEMS[1], count: 4 },
      { stem: BOUQUET_STEMS[6], count: 4 }
    ]);
    setSelectedWrapping(WRAPPING_PAPERS[0]);
    setSelectedRibbon(RIBBON_COLORS[0]);
    setSelectedCardStyle(CARD_STYLES[0]);
  };

  const handleAddToCart = () => {
    if (totalStemCount === 0) return;

    const newBouquet: CustomBouquet = {
      id: `custom-${Date.now()}`,
      stems: selectedStems,
      wrapping: selectedWrapping,
      ribbon: selectedRibbon,
      cardStyle: selectedCardStyle,
      cardMessage,
      cardRecipient,
      cardSender,
      totalPrice
    };

    onAddCustomBouquetToCart(newBouquet);

    // Fire floral celebration confetti burst!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#7A9E7E', '#F5D6DE', '#CDB4DB', '#FFFDF8']
    });
  };

  return (
    <section id="builder" className="py-16 lg:py-24 bg-[#FFFDF8] border-t border-[#7A9E7E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#7A9E7E]/10 text-[#7A9E7E] text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-[#7A9E7E]" />
            <span>Interactive Floral Studio</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E2E2E]">
            Build Your Own Bouquet
          </h2>
          <p className="text-sm sm:text-base text-[#2E2E2E]/80 leading-relaxed">
            Unleash your inner floral artist. Select your favorite stems, pick signature wrapping paper, pair with satin ribbons, and compose a personalized handwritten message.
          </p>
        </div>

        {/* Builder Step Progress Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 overflow-x-auto pb-2">
          {[
            { step: 1, name: '1. Select Stems' },
            { step: 2, name: '2. Wrapping & Ribbon' },
            { step: 3, name: '3. Greeting Card' },
            { step: 4, name: '4. Summary & Order' }
          ].map((item) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
                activeStep === item.step
                  ? 'bg-[#7A9E7E] text-white border-[#7A9E7E] shadow-xs'
                  : 'bg-white text-[#2E2E2E]/70 border-gray-200 hover:border-[#7A9E7E]/30'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Builder Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls (Steps 1 to 4) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-8">
            
            {/* STEP 1: STEM SELECTION */}
            {activeStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-[#2E2E2E]">Step 1: Choose Fresh Stems</h3>
                    <p className="text-xs text-[#2E2E2E]/60">Mix & match to build your bespoke composition.</p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="text-xs text-[#7A9E7E] hover:underline flex items-center gap-1 font-medium"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {BOUQUET_STEMS.map((stem) => {
                    const currentItem = selectedStems.find((i) => i.stem.id === stem.id);
                    const count = currentItem ? currentItem.count : 0;

                    return (
                      <div
                        key={stem.id}
                        className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                          count > 0
                            ? 'bg-[#F1F7F2] border-[#7A9E7E]'
                            : 'bg-white border-gray-100 hover:border-gray-200'
                        }`}
                      >
                        <img
                          src={stem.image}
                          alt={stem.name}
                          className="w-14 h-14 rounded-xl object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span
                              className="w-2.5 h-2.5 rounded-full shrink-0"
                              style={{ backgroundColor: stem.colorHex }}
                            />
                            <h4 className="font-semibold text-xs text-[#2E2E2E] truncate">
                              {stem.name}
                            </h4>
                            {stem.isRare && (
                              <span className="text-[9px] bg-[#FEF3C7] text-[#B45309] border border-[#FAD380] font-bold px-1.5 py-0.2 rounded-full shrink-0">
                                Rare Spring Drop
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-[#2E2E2E]/60 truncate mt-0.5">{stem.symbol}</p>
                          {stem.seasonNotice && (
                            <p className="text-[10px] text-[#B45309] font-medium truncate">{stem.seasonNotice}</p>
                          )}
                          <span className="text-xs font-bold text-[#7A9E7E]">
                            ${stem.pricePerStem.toFixed(2)} / stem
                          </span>
                        </div>

                        {/* Counter Control */}
                        <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-full border border-gray-200 shadow-2xs">
                          <button
                            onClick={() => handleUpdateStemCount(stem, -1)}
                            disabled={count === 0}
                            className="p-1 text-gray-500 hover:text-[#2E2E2E] disabled:opacity-30"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center text-[#2E2E2E]">{count}</span>
                          <button
                            onClick={() => handleUpdateStemCount(stem, 1)}
                            className="p-1 text-[#7A9E7E] hover:text-[#628366]"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setActiveStep(2)}
                    disabled={totalStemCount === 0}
                    className="bg-[#7A9E7E] text-white font-semibold text-xs px-6 py-2.5 rounded-full hover:bg-[#628366] transition-all disabled:opacity-50"
                  >
                    Next: Select Wrapping →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: WRAPPING & RIBBON */}
            {activeStep === 2 && (
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-playfair text-xl font-bold text-[#2E2E2E]">Step 2: Signature Wrapping & Ribbon</h3>
                  <p className="text-xs text-[#2E2E2E]/60">Select artisanal wrapping paper and silk ribbon ties.</p>
                </div>

                {/* Wrapping Selector */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#7A9E7E]">
                    Artisanal Wrapping Paper
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {WRAPPING_PAPERS.map((paper) => {
                      const isSelected = selectedWrapping.id === paper.id;
                      return (
                        <button
                          key={paper.id}
                          onClick={() => setSelectedWrapping(paper)}
                          className={`p-3 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                            isSelected
                              ? 'bg-[#F1F7F2] border-[#7A9E7E] ring-2 ring-[#7A9E7E]/20'
                              : 'bg-white border-gray-100 hover:border-gray-200'
                          }`}
                        >
                          <div
                            className="w-10 h-10 rounded-xl shrink-0 border border-black/10 flex items-center justify-center text-white"
                            style={{ backgroundColor: paper.hex }}
                          >
                            {isSelected && <Check className="w-5 h-5 text-gray-800" />}
                          </div>
                          <div>
                            <h4 className="font-bold text-xs text-[#2E2E2E]">{paper.name}</h4>
                            <p className="text-[11px] text-[#2E2E2E]/60 line-clamp-1">{paper.description}</p>
                            <span className="text-[11px] font-semibold text-[#7A9E7E]">
                              {paper.price === 0 ? 'Included' : `+$${paper.price.toFixed(2)}`}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Ribbon Selector */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#7A9E7E]">
                    Ribbon Color
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {RIBBON_COLORS.map((ribbon) => {
                      const isSelected = selectedRibbon.id === ribbon.id;
                      return (
                        <button
                          key={ribbon.id}
                          onClick={() => setSelectedRibbon(ribbon)}
                          className={`px-3 py-2 rounded-full border text-xs font-medium flex items-center gap-2 transition-all ${
                            isSelected
                              ? 'bg-[#7A9E7E] text-white border-[#7A9E7E]'
                              : 'bg-white text-[#2E2E2E] border-gray-200 hover:border-[#7A9E7E]/40'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/10"
                            style={{ backgroundColor: ribbon.hex }}
                          />
                          <span>{ribbon.name}</span>
                          {ribbon.price > 0 && <span className="opacity-75">(+${ribbon.price})</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setActiveStep(1)}
                    className="text-xs font-semibold text-gray-500 hover:text-black"
                  >
                    ← Back to Stems
                  </button>
                  <button
                    onClick={() => setActiveStep(3)}
                    className="bg-[#7A9E7E] text-white font-semibold text-xs px-6 py-2.5 rounded-full hover:bg-[#628366] transition-all"
                  >
                    Next: Add Greeting Card →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: GREETING CARD */}
            {activeStep === 3 && (
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-playfair text-xl font-bold text-[#2E2E2E]">Step 3: Personal Handwritten Card</h3>
                  <p className="text-xs text-[#2E2E2E]/60">We transcribe your message onto embossed cotton stationery.</p>
                </div>

                {/* Card Template Styles */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#7A9E7E]">
                    Card Stationery Style
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {CARD_STYLES.map((card) => {
                      const isSelected = selectedCardStyle.id === card.id;
                      return (
                        <button
                          key={card.id}
                          onClick={() => setSelectedCardStyle(card)}
                          className={`p-3 rounded-2xl border text-left transition-all bg-gradient-to-r ${card.bgGradient} ${
                            isSelected ? 'border-[#7A9E7E] ring-2 ring-[#7A9E7E]/30' : 'border-transparent opacity-80 hover:opacity-100'
                          }`}
                        >
                          <h4 className="font-playfair font-bold text-xs text-[#2E2E2E]">{card.title}</h4>
                          <p className="text-[10px] text-[#2E2E2E]/70">{card.subtitle}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Card Form Inputs */}
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-[#2E2E2E] block mb-1">To (Recipient)</label>
                      <input
                        type="text"
                        value={cardRecipient}
                        onChange={(e) => setCardRecipient(e.target.value)}
                        placeholder="Recipient's Name"
                        className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7A9E7E]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#2E2E2E] block mb-1">From (Sender)</label>
                      <input
                        type="text"
                        value={cardSender}
                        onChange={(e) => setCardSender(e.target.value)}
                        placeholder="Your Signature"
                        className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7A9E7E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#2E2E2E] block mb-1">Personal Card Note</label>
                    <textarea
                      rows={3}
                      value={cardMessage}
                      onChange={(e) => setCardMessage(e.target.value)}
                      placeholder="Write your heart's message here..."
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7A9E7E]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="text-xs font-semibold text-gray-500 hover:text-black"
                  >
                    ← Back to Wrapping
                  </button>
                  <button
                    onClick={() => setActiveStep(4)}
                    className="bg-[#7A9E7E] text-white font-semibold text-xs px-6 py-2.5 rounded-full hover:bg-[#628366] transition-all"
                  >
                    Next: Final Summary →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: SUMMARY & CONFIRMATION */}
            {activeStep === 4 && (
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-playfair text-xl font-bold text-[#2E2E2E]">Step 4: Custom Creation Summary</h3>
                  <p className="text-xs text-[#2E2E2E]/60">Review your custom bouquet specs before placing your order.</p>
                </div>

                <div className="space-y-3 text-xs text-[#2E2E2E]/80">
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="font-semibold">Selected Stems ({totalStemCount})</span>
                    <span>${stemsCost.toFixed(2)}</span>
                  </div>

                  <div className="space-y-1 pl-2">
                    {selectedStems.map((item) => (
                      <div key={item.stem.id} className="flex justify-between text-[11px] text-gray-600">
                        <span>• {item.count}x {item.stem.name}</span>
                        <span>${(item.stem.pricePerStem * item.count).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="font-semibold">Wrapping: {selectedWrapping.name}</span>
                    <span>{selectedWrapping.price === 0 ? 'Included' : `$${selectedWrapping.price.toFixed(2)}`}</span>
                  </div>

                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="font-semibold">Ribbon: {selectedRibbon.name}</span>
                    <span>{selectedRibbon.price === 0 ? 'Included' : `$${selectedRibbon.price.toFixed(2)}`}</span>
                  </div>

                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="font-semibold">Artisan Florist Arrangement Fee</span>
                    <span>${baseServiceFee.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-base font-bold text-[#2E2E2E] pt-2">
                    <span>Total Price</span>
                    <span className="text-[#7A9E7E]">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setActiveStep(3)}
                    className="text-xs font-semibold text-gray-500 hover:text-black"
                  >
                    ← Back to Card
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="bg-[#7A9E7E] text-white font-bold text-sm px-8 py-3 rounded-full hover:bg-[#628366] transition-all shadow-md flex items-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Custom Bouquet to Cart</span>
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Right Live Interactive Preview */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Preview Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#7A9E7E] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Live Atelier Preview</span>
                </div>
                <span className="text-xs font-bold bg-[#7A9E7E]/10 text-[#7A9E7E] px-3 py-1 rounded-full">
                  {totalStemCount} Stems Selected
                </span>
              </div>

              {/* Visual Presentation Stack */}
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-[#FFFDF8] border border-gray-100 p-4 flex flex-col justify-between">
                <img
                  src={builderImg}
                  alt="Custom Bouquet Studio Preview"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                
                <div className="relative z-10 flex justify-between items-start">
                  <span className="bg-white/90 backdrop-blur-xs text-[10px] font-bold text-[#2E2E2E] px-2.5 py-1 rounded-full shadow-2xs">
                    {selectedWrapping.name}
                  </span>
                  <span
                    className="text-[10px] font-bold text-white px-2.5 py-1 rounded-full shadow-2xs flex items-center gap-1"
                    style={{ backgroundColor: selectedRibbon.hex }}
                  >
                    <span>{selectedRibbon.name}</span>
                  </span>
                </div>

                <div className="relative z-10 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/60 shadow-lg">
                  <p className="text-[11px] font-bold text-[#7A9E7E] uppercase tracking-wider">
                    Bespoke Bouquet Composition
                  </p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedStems.map((item) => (
                      <span
                        key={item.stem.id}
                        className="text-[10px] bg-[#FFFDF8] border border-gray-200 text-[#2E2E2E] px-2 py-0.5 rounded-md"
                      >
                        {item.count}x {item.stem.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Personalized Greeting Card Preview */}
              <div className={`p-4 rounded-2xl border bg-gradient-to-r ${selectedCardStyle.bgGradient} border-[${selectedCardStyle.borderColor}] space-y-2 shadow-2xs`}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A9E7E]">
                    Transcribed Greeting Card
                  </span>
                  <Heart className="w-3.5 h-3.5 text-[#D96B74] fill-current" />
                </div>
                <p className="font-playfair font-bold text-xs text-[#2E2E2E]">Dearest {cardRecipient || 'Recipient'},</p>
                <p className="font-playfair italic text-xs text-[#2E2E2E]/80 leading-relaxed">
                  "{cardMessage || 'Your heart note here...'}"
                </p>
                <p className="font-playfair text-[11px] text-[#2E2E2E]/90 text-right font-medium">
                  {cardSender || 'Sender'}
                </p>
              </div>

              {/* Total & Instant CTA */}
              <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                <div>
                  <span className="text-xs text-gray-500 block">Total Price</span>
                  <span className="text-2xl font-bold text-[#2E2E2E]">${totalPrice.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleAddToCart}
                  disabled={totalStemCount === 0}
                  className="bg-[#7A9E7E] text-white font-bold text-xs px-6 py-3 rounded-full hover:bg-[#628366] transition-all shadow-md flex items-center gap-2 disabled:opacity-40"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
