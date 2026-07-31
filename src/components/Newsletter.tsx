import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, Sparkles, Check } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setSubscribed(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#F5D6DE', '#7A9E7E', '#CDB4DB']
    });
  };

  return (
    <section className="py-16 lg:py-20 bg-[#FFFDF8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#F5D6DE]/40 via-[#FFFDF8] to-[#7A9E7E]/15 p-8 sm:p-12 border border-[#7A9E7E]/20 text-center space-y-6 shadow-sm">
          
          <div className="w-12 h-12 rounded-full bg-white shadow-xs mx-auto flex items-center justify-center text-xl">
            🌸
          </div>

          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2E2E2E]">
              Join the FloraNest Family 🌸
            </h2>
            <p className="text-sm sm:text-base text-[#2E2E2E]/80 leading-relaxed">
              Subscribe to receive weekly botanical care guides, secret seasonal flower drops, and enjoy <span className="font-bold text-[#7A9E7E]">15% OFF</span> your first bespoke order.
            </p>
          </div>

          {subscribed ? (
            <div className="max-w-md mx-auto p-4 bg-white/90 rounded-2xl border border-[#7A9E7E] text-center space-y-1 shadow-xs animate-in fade-in duration-300">
              <div className="flex items-center justify-center gap-1.5 text-[#7A9E7E] font-bold text-sm">
                <Check className="w-4 h-4" />
                <span>Welcome to the Family!</span>
              </div>
              <p className="text-xs text-[#2E2E2E]/80">
                Use promo code <span className="font-mono font-bold bg-[#7A9E7E]/10 text-[#7A9E7E] px-2 py-0.5 rounded">FLORA15</span> at checkout for 15% off.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 text-xs sm:text-sm px-4 py-3.5 rounded-full border border-gray-200 bg-white focus:outline-none focus:border-[#7A9E7E] shadow-2xs"
              />
              <button
                type="submit"
                className="bg-[#7A9E7E] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full hover:bg-[#628366] transition-all shadow-md flex items-center justify-center gap-2 shrink-0"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-[#2E2E2E]/50">
            We respect your privacy. Unsubscribe anytime with one click.
          </p>

        </div>

      </div>
    </section>
  );
};
