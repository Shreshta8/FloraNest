import {
  Emotion,
  FlowerProduct,
  FlowerMeaning,
  BouquetStem,
  WrappingPaper,
  RibbonColor,
  CardStyle,
  Testimonial,
  FAQItem
} from '../types';

import heroFlowerImg from '../assets/images/floranest_hero_flower_1785431513011.jpg';
import builderImg from '../assets/images/floranest_bouquet_builder_1785431527968.jpg';

export { heroFlowerImg, builderImg };

export const EMOTIONS: Emotion[] = [
  {
    id: 'love',
    name: 'Love & Romance',
    emoji: '❤️',
    tagline: 'Deep devotion & passionate affection',
    description: 'Express your deepest feelings with velvety crimson roses, delicate blush peonies, and romantic orchids.',
    primaryColor: '#D96B74',
    bgLight: '#FDF2F4',
    borderColor: '#F8CBD1',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'happiness',
    name: 'Joy & Happiness',
    emoji: '😊',
    tagline: 'Sunlit smiles & cheerful moments',
    description: 'Radiant golden sunflowers, vibrant gerbera daisies, and bright yellow tulips to illuminate any room.',
    primaryColor: '#E29532',
    bgLight: '#FEF8EE',
    borderColor: '#FAD8A5',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'celebration',
    name: 'Celebration',
    emoji: '🎉',
    tagline: 'Milestones, achievements & joy',
    description: 'Festive ranunculus, exuberant lilies, and multi-colored wildflower arrangements for life’s grand wins.',
    primaryColor: '#9C62A8',
    bgLight: '#F8F1FA',
    borderColor: '#E6C9EE',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gratitude',
    name: 'Gratitude & Thanks',
    emoji: '🙏',
    tagline: 'Heartfelt thanks & appreciation',
    description: 'Gentle hydrangeas, peach garden roses, and eucalyptus sprigs that whisper sincere thankfulness.',
    primaryColor: '#5E8C6A',
    bgLight: '#F1F7F2',
    borderColor: '#C3DEC8',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sympathy',
    name: 'Sympathy & Solace',
    emoji: '🤍',
    tagline: 'Graceful comfort & gentle remembrance',
    description: 'Pure white lilies, soft cream carnations, and serene baby breath crafting peaceful condolences.',
    primaryColor: '#707A8A',
    bgLight: '#F4F6F8',
    borderColor: '#D2D7DE',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'peace',
    name: 'Peace & Serenity',
    emoji: '🌿',
    tagline: 'Calming harmony & self-care',
    description: 'Soothing French lavender, white chamomile, and lush indoor botanical greenery to relax the soul.',
    primaryColor: '#4C8276',
    bgLight: '#EFF7F5',
    borderColor: '#BFE0D8',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80'
  }
];

export const FLOWER_PRODUCTS: FlowerProduct[] = [
  {
    id: 'fn-01',
    name: 'The Whispering Velvet',
    price: 89,
    originalPrice: 110,
    rating: 4.9,
    reviewCount: 324,
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80',
    emotionCategory: 'love',
    collection: 'bestsellers',
    meanings: ['Love', 'Passion', 'Devotion'],
    description: 'An iconic arrangement of 18 long-stemmed Ecuadorian red roses hand-gathered with silver dollar eucalyptus.',
    stemsCount: 22,
    vaseIncluded: true,
    freshDaysGuarantee: 10,
    isBestselling: true,
    tags: ['Best Seller', 'Romantic', 'Vase Included']
  },
  {
    id: 'fn-02',
    name: 'Golden Hour Harmony',
    price: 74,
    originalPrice: 85,
    rating: 4.8,
    reviewCount: 218,
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80',
    emotionCategory: 'happiness',
    collection: 'birthday',
    meanings: ['Happiness', 'Loyalty', 'Warmth'],
    description: 'Bright Tuscan sunflowers nestled among golden ranunculus, yellow spray roses, and fresh craspedia pods.',
    stemsCount: 16,
    vaseIncluded: false,
    freshDaysGuarantee: 8,
    isBestselling: true,
    tags: ['Sunflowers', 'Birthday Favorite', 'Bright']
  },
  {
    id: 'fn-03',
    name: 'Blush & Opal Dream',
    price: 115,
    originalPrice: 135,
    rating: 5.0,
    reviewCount: 189,
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80',
    emotionCategory: 'celebration',
    collection: 'luxury',
    meanings: ['Grace', 'Prosperity', 'Honor'],
    description: 'Opulent Sarah Bernhardt blush peonies paired with cream garden roses and dusty miller foliage.',
    stemsCount: 24,
    vaseIncluded: true,
    freshDaysGuarantee: 9,
    isBestselling: true,
    isNew: true,
    tags: ['Luxury', 'Peonies', 'Signature']
  },
  {
    id: 'fn-04',
    name: 'Serenade of Gratitude',
    price: 68,
    rating: 4.9,
    reviewCount: 142,
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80',
    emotionCategory: 'gratitude',
    collection: 'bestsellers',
    meanings: ['Gratitude', 'Heartfelt Emotion', 'Understanding'],
    description: 'Soft lavender hydrangeas accented with peach lisianthus, cream carnations, and ruscus stems.',
    stemsCount: 15,
    vaseIncluded: false,
    freshDaysGuarantee: 8,
    tags: ['Hydrangeas', 'Thank You']
  },
  {
    id: 'fn-05',
    name: 'Ethereal Solace',
    price: 82,
    rating: 4.9,
    reviewCount: 96,
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80',
    emotionCategory: 'sympathy',
    collection: 'bestsellers',
    meanings: ['Purity', 'Peace', 'Rebirth'],
    description: 'A soothing symphony of majestic white Oriental lilies, pristine white roses, and delicate gypsophila.',
    stemsCount: 18,
    vaseIncluded: true,
    freshDaysGuarantee: 12,
    tags: ['Sympathy', 'White Lilies', 'Peaceful']
  },
  {
    id: 'fn-06',
    name: 'Provence Meadow Breeze',
    price: 62,
    originalPrice: 72,
    rating: 4.8,
    reviewCount: 164,
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80',
    emotionCategory: 'peace',
    collection: 'seasonal',
    meanings: ['Serenity', 'Calmness', 'Self-Care'],
    description: 'Fragrant dried French lavender bundled with fresh chamomile daisies and seeded eucalyptus.',
    stemsCount: 20,
    vaseIncluded: false,
    freshDaysGuarantee: 14,
    tags: ['Aromatic', 'Lavender', 'Long-lasting']
  },
  {
    id: 'fn-07',
    name: 'Bridal Grandeur',
    price: 145,
    originalPrice: 160,
    rating: 5.0,
    reviewCount: 88,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    emotionCategory: 'celebration',
    collection: 'wedding',
    meanings: ['Eternal Devotion', 'New Beginnings'],
    description: 'Exquisite cascading bouquet with ivory orchids, garden roses, ranunculus, and trailing jasmine vines.',
    stemsCount: 30,
    vaseIncluded: true,
    freshDaysGuarantee: 7,
    isNew: true,
    tags: ['Wedding', 'Cascading', 'Orchids']
  },
  {
    id: 'fn-08',
    name: 'Emerald Botanical Haven',
    price: 78,
    rating: 4.7,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    emotionCategory: 'peace',
    collection: 'plants',
    meanings: ['Abundance', 'Longevity', 'Fresh Energy'],
    description: 'Lush Monstera Deliciosa housed in a handmade artisanal matte white ceramic planter with saucer.',
    stemsCount: 1,
    vaseIncluded: true,
    freshDaysGuarantee: 30,
    tags: ['Indoor Plant', 'Easy Care', 'Pet Friendly']
  },
  {
    id: 'fn-09',
    name: 'The Royal Celebration Hamper',
    price: 165,
    originalPrice: 190,
    rating: 4.9,
    reviewCount: 79,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    emotionCategory: 'celebration',
    collection: 'hampers',
    meanings: ['Joy', 'Affection', 'Luxury'],
    description: 'Hand-picked floral bouquet accompanied by artisan Belgian chocolates, organic rose scented candle, and sparkling cider.',
    stemsCount: 14,
    vaseIncluded: true,
    freshDaysGuarantee: 10,
    tags: ['Gift Hamper', 'Chocolates Included', 'Luxury Gift']
  },
  {
    id: 'fn-10',
    name: 'Autumn Spice Carnation Glow',
    price: 58,
    rating: 4.8,
    reviewCount: 105,
    image: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&w=800&q=80',
    emotionCategory: 'gratitude',
    collection: 'seasonal',
    meanings: ['Admiration', 'Warmth', 'Kinship'],
    description: 'Rich terracotta spray carnations, copper hypericum berries, and warm amber dahlias.',
    stemsCount: 18,
    vaseIncluded: false,
    freshDaysGuarantee: 9,
    tags: ['Seasonal', 'Terracotta', 'Cozy']
  },
  {
    id: 'fn-11',
    name: 'Springtime Tulip Fiesta',
    price: 79,
    originalPrice: 89,
    rating: 4.9,
    reviewCount: 230,
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=800&q=80',
    emotionCategory: 'happiness',
    collection: 'seasonal',
    meanings: ['Rare Spring Harvest', 'Blooms Once A Year', 'Pure Grace'],
    description: 'A rare seasonal reserve of 20 French Dutch tulips in pastel coral, lavender, and buttercup yellow. Tulips bloom naturally only once a year in spring during a brief harvest window. Available strictly during this seasonal drop — no standard multi-day guarantees apply to these rare, delicate blooms.',
    stemsCount: 20,
    vaseIncluded: false,
    isRareFlower: true,
    rareNotice: 'Rare Seasonal Bloom • Blooms Once/Year in Spring',
    tags: ['Rare Bloom', 'Spring Harvest Only', 'Once A Year', 'Seasonal Specialty']
  },
  {
    id: 'fn-12',
    name: 'Velvet Midnight Orchid',
    price: 128,
    rating: 5.0,
    reviewCount: 64,
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=80',
    emotionCategory: 'love',
    collection: 'luxury',
    meanings: ['Luxury', 'Exotic Beauty', 'Refinement'],
    description: 'Double-stemmed Phalaenopsis dark purple orchid blooming in an elegant gold-rimmed ceramic pot.',
    stemsCount: 2,
    vaseIncluded: true,
    freshDaysGuarantee: 21,
    isNew: true,
    tags: ['Orchid', 'Long Blooming', 'Luxury']
  }
];

export const FLOWER_MEANINGS: FlowerMeaning[] = [
  {
    id: 'fm-rose',
    flowerName: 'Rose',
    botanicalName: 'Rosa rubiginosa',
    meaning: 'Unconditional Love & Passion',
    symbol: '❤️',
    description: 'Known across cultures for centuries as the ultimate token of love. Red symbolizes deep passion, pink represents gentle admiration, and white signifies pure innocence.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    popularFor: ['Anniversaries', 'Valentine’s Day', 'Declarations of Love'],
    colorTag: 'Rose Red'
  },
  {
    id: 'fm-sunflower',
    flowerName: 'Sunflower',
    botanicalName: 'Helianthus annuus',
    meaning: 'Unwavering Loyalty & Warm Joy',
    symbol: '🌻',
    description: 'Turning its face toward the sun, the sunflower embodies optimism, health, and enduring warmth in friendships and family bonds.',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80',
    popularFor: ['Birthdays', 'Get Well Soon', 'Graduations'],
    colorTag: 'Golden Yellow'
  },
  {
    id: 'fm-lily',
    flowerName: 'Lily',
    botanicalName: 'Lilium candidum',
    meaning: 'Purity, Hope & Rebirth',
    symbol: '🤍',
    description: 'Majestic trumpet blossoms that express peace and honor. White lilies represent clean starts and spiritual devotion.',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80',
    popularFor: ['Sympathy', 'Weddings', 'Easter'],
    colorTag: 'Ivory White'
  },
  {
    id: 'fm-lavender',
    flowerName: 'Lavender',
    botanicalName: 'Lavandula angustifolia',
    meaning: 'Peace, Serenity & Quiet Strength',
    symbol: '🌿',
    description: 'Celebrated for its soothing botanical scent, lavender delivers tranquility, stress relief, and mindful relaxation.',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80',
    popularFor: ['Self-Care', 'Thank You', 'New Home'],
    colorTag: 'Soft Lavender'
  },
  {
    id: 'fm-tulip',
    flowerName: 'Tulip (Rare Seasonal Bloom)',
    botanicalName: 'Tulipa gesneriana',
    meaning: 'Rare Beauty & Spring Harvest Grace',
    symbol: '🌷',
    description: 'Tulips are prized rare seasonal flowers that bloom naturally only once per year in spring during a brief harvest window. Because they are delicate ephemeral blooms available only during their natural season, they represent rare, precious moments and deep genuine care.',
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=800&q=80',
    popularFor: ['Spring Harvest Drops', 'Rare Flower Collectors', 'Special Milestones'],
    colorTag: 'Rare Pastel Coral',
    isRare: true,
    bloomFrequency: 'Blooms Once a Year (Spring Harvest Window)'
  },
  {
    id: 'fm-peony',
    flowerName: 'Peony',
    botanicalName: 'Paeonia lactiflora',
    meaning: 'Prosperity, Luck & Graceful Romance',
    symbol: '🌸',
    description: 'Lush layered petals radiating opulence and feminine charm. Peonies promise happy marriages and good fortune.',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80',
    popularFor: ['Weddings', 'Bridal Showers', 'Anniversaries'],
    colorTag: 'Blush Pink'
  },
  {
    id: 'fm-hydrangea',
    flowerName: 'Hydrangea',
    botanicalName: 'Hydrangea macrophylla',
    meaning: 'Heartfelt Gratitude & Deep Connection',
    symbol: '💙',
    description: 'Bountiful cloud-like clusters that express sincere appreciation and understanding between heartful friends.',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80',
    popularFor: ['Thank You Gifts', 'Corporate Gratitude', 'Housewarmings'],
    colorTag: 'Periwinkle Blue'
  },
  {
    id: 'fm-orchid',
    flowerName: 'Orchid',
    botanicalName: 'Orchidaceae',
    meaning: 'Rare Beauty, Refinement & Luxury',
    symbol: '💜',
    description: 'Sophisticated tropical blooms that retain beauty for months, symbolizing strength, elegance, and unique charm.',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=80',
    popularFor: ['Executive Gifts', 'Luxury Homes', 'Milestone Celebrations'],
    colorTag: 'Deep Purple'
  }
];

// Custom Bouquet Builder Data
export const BOUQUET_STEMS: BouquetStem[] = [
  {
    id: 'stem-rose-red',
    name: 'Red Velvet Rose',
    pricePerStem: 3.50,
    colorName: 'Crimson Red',
    colorHex: '#C81D31',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80',
    symbol: 'Deep Passion & Romance'
  },
  {
    id: 'stem-rose-blush',
    name: 'Garden Blush Rose',
    pricePerStem: 3.80,
    colorName: 'Blush Pink',
    colorHex: '#F2AEC1',
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=300&q=80',
    symbol: 'Gentle Admiration'
  },
  {
    id: 'stem-peony',
    name: 'Sarah Peony',
    pricePerStem: 4.80,
    colorName: 'Pastel Pink',
    colorHex: '#EBB4C4',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=300&q=80',
    symbol: 'Prosperity & Honor'
  },
  {
    id: 'stem-sunflower',
    name: 'Tuscan Sunflower',
    pricePerStem: 3.20,
    colorName: 'Golden Yellow',
    colorHex: '#E59B28',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=300&q=80',
    symbol: 'Joyful Loyalty'
  },
  {
    id: 'stem-tulip',
    name: 'Dutch Coral Tulip (Rare Season)',
    pricePerStem: 3.90,
    colorName: 'Coral Orange',
    colorHex: '#E86E53',
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=300&q=80',
    symbol: 'Rare Spring Bloom (Blooms Once/Year)',
    isRare: true,
    seasonNotice: 'Spring Harvest Only • Rare Stem'
  },
  {
    id: 'stem-lily-white',
    name: 'Casablanca Lily',
    pricePerStem: 4.20,
    colorName: 'Pure White',
    colorHex: '#F7F7F7',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=300&q=80',
    symbol: 'Purity & Dignity'
  },
  {
    id: 'stem-eucalyptus',
    name: 'Silver Eucalyptus',
    pricePerStem: 2.10,
    colorName: 'Sage Green',
    colorHex: '#7A9E7E',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=300&q=80',
    symbol: 'Protection & Refreshment'
  },
  {
    id: 'stem-lavender',
    name: 'French Lavender Sprig',
    pricePerStem: 2.50,
    colorName: 'Soft Lavender',
    colorHex: '#B28DC7',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=300&q=80',
    symbol: 'Peace & Serenity'
  }
];

export const WRAPPING_PAPERS: WrappingPaper[] = [
  {
    id: 'wrap-kraft',
    name: 'Rustic Artisan Kraft Paper',
    hex: '#CDB196',
    description: 'Eco-friendly natural kraft paper tied with organic jute twine.',
    price: 0,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'wrap-ivory',
    name: 'Pure Ivory Silk Linen',
    hex: '#F9F6F0',
    description: 'Premium textured ivory matte paper with subtle gold leaf trim.',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'wrap-blush',
    name: 'Vintage Blush Parchment',
    hex: '#F4D4DD',
    description: 'Soft rose tinted luxury parchment paper for romantic occasions.',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'wrap-sage',
    name: 'Sage Botanical Wrap',
    hex: '#A3BC9B',
    description: 'Calming botanical green wrap with delicate leaf embossed patterns.',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'wrap-charcoal',
    name: 'Matte Charcoal Velvet',
    hex: '#333333',
    description: 'Ultra-modern dramatic black matte paper highlighting vibrant bloom colors.',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=400&q=80'
  }
];

export const RIBBON_COLORS: RibbonColor[] = [
  { id: 'ribbon-sage', name: 'Sage Green Silk', hex: '#7A9E7E', price: 0 },
  { id: 'ribbon-blush', name: 'Blush Pink Satin', hex: '#F5D6DE', price: 0 },
  { id: 'ribbon-lavender', name: 'Soft Lavender Velvet', hex: '#CDB4DB', price: 2.00 },
  { id: 'ribbon-gold', name: 'Metallic Champagne Gold', hex: '#D4AF37', price: 3.00 },
  { id: 'ribbon-ivory', name: 'Cream Grosgrain', hex: '#FFF9EE', price: 0 }
];

export const CARD_STYLES: CardStyle[] = [
  {
    id: 'card-love',
    title: 'Warm Heart',
    subtitle: 'Romantic & Intimate',
    bgGradient: 'from-[#FFF0F3] to-[#FDE2E4]',
    borderColor: '#F8B4C0'
  },
  {
    id: 'card-celebrate',
    title: 'Golden Sparkle',
    subtitle: 'Joyful & Festive',
    bgGradient: 'from-[#FFF8E7] to-[#FEF0CD]',
    borderColor: '#FAD380'
  },
  {
    id: 'card-sage',
    title: 'Botanical Grace',
    subtitle: 'Calming & Thoughtful',
    bgGradient: 'from-[#F0F6F1] to-[#E1EFE3]',
    borderColor: '#ABCBB0'
  },
  {
    id: 'card-minimal',
    title: 'Classic Letterpress',
    subtitle: 'Minimal & Elegant',
    bgGradient: 'from-[#FAF9F6] to-[#F2EFE9]',
    borderColor: '#D8D3C8'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'Elena Rostova',
    location: 'Chicago, IL',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    occasion: '10th Wedding Anniversary',
    text: 'I ordered "The Whispering Velvet" for my wife on our 10th anniversary. The quality exceeded my highest expectations! The roses arrived in perfect bloom with fresh dew on the petals. FloraNest is unmatched in artistry.',
    date: '2 days ago',
    verified: true,
    bouquetName: 'The Whispering Velvet'
  },
  {
    id: 't-2',
    author: 'Marcus Vance',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    occasion: 'Custom Birthday Gift',
    text: 'The Build Your Own Bouquet tool was so intuitive and fun! I selected sunflowers and lavender for my mother’s 60th birthday. She was in tears when she opened the doorstep delivery. Same-day delivery was flawless!',
    date: '1 week ago',
    verified: true,
    bouquetName: 'Custom Sunburst Bouquet'
  },
  {
    id: 't-3',
    author: 'Sophia Chen',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    occasion: 'Thank You Gift',
    text: 'The Shop by Emotion concept is genius. I needed to send a condolence bouquet that felt respectful without being overly sombre. The white lilies with peace notes arrived wrapped like a museum piece.',
    date: '2 weeks ago',
    verified: true,
    bouquetName: 'Ethereal Solace'
  },
  {
    id: 't-4',
    author: 'David Sterling',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    occasion: 'Corporate Gala',
    text: 'FloraNest provided 25 custom luxury centerpieces for our corporate gala. Every single guest complimented the exquisite aroma and pristine condition. They have earned our business permanently.',
    date: '3 weeks ago',
    verified: true,
    bouquetName: 'Luxury Peony Centerpieces'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Why are Tulips marked as Rare Seasonal Blooms without standard guarantees?',
    answer: 'Tulips are genuine natural treasures that bloom naturally only once per year in spring during a limited harvest window. Unlike cultivated greenhouse flowers, tulips continue to grow and open rapidly once cut. To respect their delicate, rare ephemeral nature, they are offered exclusively during their natural spring harvest drop without standard artificial multi-day shelf guarantees.',
    category: 'Seasonal Specialty'
  },
  {
    question: 'How does same-day nationwide delivery work?',
    answer: 'Orders placed before 2:00 PM in your recipient’s local time zone qualify for same-day delivery across all 50 states. We collaborate with expert artisan florists in every city who assemble and deliver your order fresh within hours.',
    category: 'Delivery'
  },
  {
    question: 'How long will FloraNest flowers remain fresh?',
    answer: 'All our blooms are backed by our 7-day Freshness Promise. Every bouquet includes specialized floral nutrient food and care instructions. Many stems like lilies, carnations, and orchids bloom beautifully for up to 14 days.',
    category: 'Quality'
  },
  {
    question: 'Can I write a personalized handwritten message on the card?',
    answer: 'Absolutely! During checkout or in the Custom Bouquet Builder, you can enter a heartfelt personal message. We transcribe your words onto heavy-stock cotton embossed greeting cards sealed in a wax-stamped envelope.',
    category: 'Customization'
  },
  {
    question: 'What happens if my recipient is not at home during delivery?',
    answer: 'Our white-glove couriers place the bouquet in a shaded temperature-controlled hydration box at the front doorstep, and immediately send SMS/Email notifications with photo proof of delivery.',
    category: 'Delivery'
  },
  {
    question: 'Are FloraNest packaging materials eco-friendly?',
    answer: 'Yes! We take pride in 100% recyclable kraft paper, biodegradable flower food packets, and natural jute ribbons. No single-use plastics are ever used in our signature wrapping.',
    category: 'Sustainability'
  }
];
