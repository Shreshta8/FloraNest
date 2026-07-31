import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, Calendar, Sparkles, CheckCircle } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState('Today (Express)');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => {
    const itemPrice = item.type === 'preset' ? item.product?.price || 0 : item.customBouquet?.totalPrice || 0;
    return sum + itemPrice * item.quantity;
  }, 0);

  const discountAmount = Math.round((subtotal * discountPercent) / 100 * 100) / 100;
  const freeDeliveryThreshold = 75;
  const deliveryFee = subtotal >= freeDeliveryThreshold || subtotal === 0 ? 0 : 9.99;
  const finalTotal = Math.max(0, Math.round((subtotal - discountAmount + deliveryFee) * 100) / 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'FLORA15') {
      setDiscountPercent(15);
    } else {
      alert('Invalid promo code. Try "FLORA15" for 15% off!');
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#7A9E7E', '#F5D6DE', '#CDB4DB', '#E29532']
    });
    setTimeout(() => {
      onClearCart();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#FFFDF8] h-full shadow-2xl flex flex-col justify-between overflow-y-auto">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#7A9E7E]" />
            <h3 className="font-playfair text-xl font-bold text-[#2E2E2E]">
              Your Cart ({cartItems.reduce((s, i) => s + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Content Body */}
        <div className="p-4 sm:p-6 flex-1 space-y-4">
          
          {/* Free Shipping Progress */}
          <div className="bg-[#F1F7F2] p-3 rounded-2xl border border-[#7A9E7E]/20 text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-[#2E2E2E]">
                {subtotal >= freeDeliveryThreshold
                  ? '🎉 You unlocked FREE Nationwide Express Delivery!'
                  : `Add $${(freeDeliveryThreshold - subtotal).toFixed(2)} more for FREE Delivery`}
              </span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#7A9E7E] transition-all duration-300"
                style={{ width: `${Math.min(100, (subtotal / freeDeliveryThreshold) * 100)}%` }}
              />
            </div>
          </div>

          {orderComplete ? (
            <div className="py-12 text-center space-y-4 bg-white p-6 rounded-3xl border border-[#7A9E7E]">
              <CheckCircle className="w-12 h-12 text-[#7A9E7E] mx-auto animate-bounce" />
              <h4 className="font-playfair text-2xl font-bold text-[#2E2E2E]">Order Confirmed!</h4>
              <p className="text-xs text-[#2E2E2E]/80">
                Your order <span className="font-mono font-bold">#FN-{Math.floor(100000 + Math.random() * 900000)}</span> has been placed. You will receive real-time SMS tracking updates.
              </p>
              <button
                onClick={() => {
                  setOrderComplete(false);
                  setIsCheckingOut(false);
                  onClose();
                }}
                className="mt-4 bg-[#7A9E7E] text-white font-semibold text-xs px-6 py-2.5 rounded-full"
              >
                Continue Shopping
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#7A9E7E]/10 text-[#7A9E7E] flex items-center justify-center mx-auto text-2xl">
                🌸
              </div>
              <h4 className="font-playfair text-lg font-bold text-[#2E2E2E]">Your cart is currently empty</h4>
              <p className="text-xs text-[#2E2E2E]/60 max-w-xs mx-auto">
                Explore our Shop by Emotion or build your custom bouquet to add fresh blooms!
              </p>
            </div>
          ) : isCheckingOut ? (
            /* Checkout Form View */
            <form onSubmit={handleCompleteOrder} className="space-y-4 text-xs">
              <div className="border-b border-gray-100 pb-2">
                <h4 className="font-playfair font-bold text-base text-[#2E2E2E]">White-Glove Delivery Details</h4>
              </div>

              <div>
                <label className="font-semibold block mb-1">Recipient Name</label>
                <input
                  type="text"
                  required
                  placeholder="Recipient's Name"
                  className="w-full p-2.5 rounded-xl border border-gray-200"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  placeholder="Address, Apt / Suite"
                  className="w-full p-2.5 rounded-xl border border-gray-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-semibold block mb-1">City</label>
                  <input
                    type="text"
                    required
                    placeholder="City"
                    className="w-full p-2.5 rounded-xl border border-gray-200"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Zip Code</label>
                  <input
                    type="text"
                    required
                    placeholder="Zip"
                    className="w-full p-2.5 rounded-xl border border-gray-200"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">Preferred Delivery Date</label>
                <select
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-gray-200 bg-white"
                >
                  <option value="Today (Express)">Today (Express Same-Day)</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="This Weekend">This Weekend</option>
                </select>
              </div>

              <div className="pt-2 border-t border-gray-100 flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="text-xs font-semibold text-gray-500 hover:text-black"
                >
                  ← Back to Items
                </button>
                <button
                  type="submit"
                  className="bg-[#7A9E7E] text-white font-bold px-6 py-2.5 rounded-full hover:bg-[#628366]"
                >
                  Pay ${finalTotal.toFixed(2)} & Complete
                </button>
              </div>
            </form>
          ) : (
            /* Items List View */
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.cartId}
                  className="p-3 bg-white rounded-2xl border border-gray-100 shadow-2xs flex items-center gap-3"
                >
                  {/* Item Image */}
                  {item.type === 'preset' ? (
                    <img
                      src={item.product?.image}
                      alt={item.product?.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-[#F5D6DE]/40 border border-[#F5D6DE] flex items-center justify-center shrink-0 text-xl">
                      🌸
                    </div>
                  )}

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h5 className="font-playfair font-bold text-sm text-[#2E2E2E] truncate">
                      {item.type === 'preset' ? item.product?.name : 'Custom Bespoke Bouquet'}
                    </h5>

                    {item.type === 'custom' && item.customBouquet && (
                      <p className="text-[10px] text-gray-500 line-clamp-1">
                        {item.customBouquet.stems.reduce((s, i) => s + i.count, 0)} Stems • {item.customBouquet.wrapping.name}
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-1">
                      <span className="font-bold text-xs text-[#7A9E7E]">
                        ${(item.type === 'preset' ? item.product?.price || 0 : item.customBouquet?.totalPrice || 0).toFixed(2)}
                      </span>

                      {/* Quantity control */}
                      <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-200">
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, -1)}
                          className="text-gray-500 hover:text-black"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, 1)}
                          className="text-[#7A9E7E] hover:text-[#628366]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.cartId)}
                    className="p-1.5 text-gray-400 hover:text-red-500 rounded-md"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer Summary & Checkout Trigger */}
        {!orderComplete && cartItems.length > 0 && !isCheckingOut && (
          <div className="p-4 sm:p-6 bg-white border-t border-gray-100 space-y-3 sticky bottom-0 z-10">
            {/* Promo code form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Promo Code (try FLORA15)"
                className="flex-1 text-xs p-2.5 rounded-xl border border-gray-200 uppercase"
              />
              <button
                type="submit"
                className="bg-gray-100 text-[#2E2E2E] hover:bg-gray-200 font-semibold text-xs px-3.5 py-2.5 rounded-xl"
              >
                Apply
              </button>
            </form>

            <div className="space-y-1 text-xs text-[#2E2E2E]/80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#7A9E7E] font-semibold">
                  <span>Discount (15%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>{deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#2E2E2E] pt-2 border-t border-gray-100">
                <span>Total</span>
                <span className="text-[#7A9E7E]">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => setIsCheckingOut(true)}
              className="w-full bg-[#7A9E7E] text-white font-bold text-sm py-3.5 rounded-full hover:bg-[#628366] transition-all shadow-md flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Proceed to Checkout</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
