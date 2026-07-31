export type EmotionId = 'love' | 'happiness' | 'celebration' | 'gratitude' | 'sympathy' | 'peace';

export type CollectionId = 'bestsellers' | 'birthday' | 'wedding' | 'luxury' | 'plants' | 'hampers' | 'seasonal';

export interface Emotion {
  id: EmotionId;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  primaryColor: string;
  bgLight: string;
  borderColor: string;
  image: string;
}

export interface FlowerProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  emotionCategory: EmotionId;
  collection: CollectionId;
  meanings: string[];
  description: string;
  stemsCount: number;
  vaseIncluded: boolean;
  freshDaysGuarantee?: number;
  isRareFlower?: boolean;
  rareNotice?: string;
  isBestselling?: boolean;
  isNew?: boolean;
  tags: string[];
}

export interface FlowerMeaning {
  id: string;
  flowerName: string;
  botanicalName: string;
  meaning: string;
  symbol: string;
  description: string;
  image: string;
  popularFor: string[];
  colorTag: string;
  isRare?: boolean;
  bloomFrequency?: string;
}

export interface BouquetStem {
  id: string;
  name: string;
  pricePerStem: number;
  colorName: string;
  colorHex: string;
  image: string;
  symbol: string;
  isRare?: boolean;
  seasonNotice?: string;
}

export interface WrappingPaper {
  id: string;
  name: string;
  hex: string;
  description: string;
  price: number;
  image: string;
}

export interface RibbonColor {
  id: string;
  name: string;
  hex: string;
  price: number;
}

export interface CardStyle {
  id: string;
  title: string;
  subtitle: string;
  bgGradient: string;
  borderColor: string;
}

export interface CustomBouquet {
  id: string;
  stems: { stem: BouquetStem; count: number }[];
  wrapping: WrappingPaper;
  ribbon: RibbonColor;
  cardStyle: CardStyle;
  cardMessage: string;
  cardRecipient: string;
  cardSender: string;
  totalPrice: number;
}

export interface CartItem {
  cartId: string;
  type: 'preset' | 'custom';
  product?: FlowerProduct;
  customBouquet?: CustomBouquet;
  quantity: number;
  deliveryDate?: string;
  giftNote?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  occasion: string;
  text: string;
  date: string;
  verified: boolean;
  bouquetName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
