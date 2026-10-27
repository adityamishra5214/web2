// ==========================================================================
// LIVY — Concept 03: A New Indian Home
// Living Indian Voices and Yarns
// Authentic 5-SKU Product Catalog & Master Data
// ==========================================================================

const LIVY_CATALOG = [
  {
    id: "sku-01",
    skuCode: "LIVY-SKU-01",
    name: "Floral Garden",
    subtitle: "Cream bedsheet with a delicate floral print",
    category: "botanical",
    collectionName: "Botanical & Meadow",
    badge: "Bestseller",
    priceINR: 5200,
    priceUSD: 68,
    priceEUR: 62,
    priceGBP: 54,
    rating: 4.95,
    reviewCount: 42,
    conceptNote: "A dialogue between classical Sanganer botanical art and modern minimalist bedroom architecture.",
    shortDescription: "A calm, unbleached cream canvas blooming with delicate hand-carved floral sprigs in marigold ochre, gentle madder terracotta, and sage accents.",
    fullDescription: "Inspired by the wild meadow gardens bordering the artisan clusters of Sanganer, the Floral Garden bedsheet is printed using traditional hand-carved teak wood blocks on our signature 400-thread-count combed cotton percale. Crisp yet remarkably soft against bare skin, this piece introduces an unhurried, grounded luxury to modern Indian homes.",
    artisanCluster: "Sanganer & Jaipur, Rajasthan",
    craftTechnique: "Teak-block relief printing with AZO-free botanical mineral pigments",
    fabricComposition: "100% Long-Staple Indian Combed Cotton",
    threadCount: "400 TC Single-Ply Percale Weave",
    weaveType: "Matte Crisp Percale (Cooling & Breathable)",
    dyeProcess: "Plant-derived mineral pastes cured under desert sun",
    washFeel: "Softens luxuriously with each wash while preserving tensile crispness",
    images: {
      folded: "assets/products/sku-01-folded-hd-clean.png",
      lifestyle: "assets/products/sku-01-lifestyle-hd.png",
      foldedThumb: "assets/products/sku-01-folded-clean.png",
      lifestyleThumb: "assets/products/sku-01-lifestyle.png"
    },
    paletteTones: [
      { name: "Alabaster Cream", hex: "#F7F3EC" },
      { name: "Sunburst Ochre", hex: "#FFB900" },
      { name: "Madder Terracotta", hex: "#C87030" },
      { name: "Meadow Sage", hex: "#8A947A" }
    ],
    sizes: [
      {
        id: "single",
        label: "Single",
        sheetDimensions: "150 × 250 cm (60 × 98 in)",
        mattressFit: "Up to 30 cm (12 in) depth",
        includes: "1 Flat Bed Sheet + 1 Standard Pillowcase",
        priceMultiplier: 0.8
      },
      {
        id: "queen",
        label: "Queen",
        sheetDimensions: "230 × 275 cm (90 × 108 in)",
        mattressFit: "Up to 36 cm (14 in) depth",
        includes: "1 Flat Bed Sheet + 2 Standard Pillowcases",
        priceMultiplier: 1.0,
        isDefault: true
      },
      {
        id: "king",
        label: "King",
        sheetDimensions: "275 × 275 cm (108 × 108 in)",
        mattressFit: "Up to 40 cm (16 in) depth",
        includes: "1 Flat Bed Sheet + 2 Standard Pillowcases",
        priceMultiplier: 1.15
      },
      {
        id: "superking",
        label: "Super King",
        sheetDimensions: "275 × 305 cm (108 × 120 in)",
        mattressFit: "Up to 45 cm (18 in) depth",
        includes: "1 Flat Bed Sheet + 2 King Pillowcases",
        priceMultiplier: 1.25
      }
    ],
    pillowDimensions: "46 × 70 cm (18 × 28 in) with deep 20 cm envelope flap closure",
    careInstructions: [
      "Machine wash gentle cycle at 30°C / 85°F with similar pale tones",
      "Use pH-neutral, plant-based detergent; strictly avoid chlorine bleach",
      "Line dry in open shade to preserve natural dye vibrancy and crisp hand",
      "Warm steam iron while slightly damp for that crisp five-star hotel drape",
      "Develops a buttery, lived-in drape through seasons of restful sleep"
    ],
    craftStory: "Over 18 hours of patient artisan hand-alignment went into this piece. Each flower stamp is applied by eye without mechanical guides, honoring the subtle, human asymmetry of true Indian craft.",
    sustainabilityImpact: "Saves 1,400 liters of water through closed-loop natural river rinsing and zero petrochemical coatings."
  },
  {
    id: "sku-02",
    skuCode: "LIVY-SKU-02",
    name: "Soft Blue Stripes",
    subtitle: "Light neutral bedsheet with fine blue stripes",
    category: "minimal",
    collectionName: "Quiet Lines",
    badge: "New Release",
    priceINR: 4950,
    priceUSD: 64,
    priceEUR: 58,
    priceGBP: 51,
    rating: 4.88,
    reviewCount: 31,
    conceptNote: "Understated rhythmic pinstripes celebrating the slow, meditative motion of the handloom shuttle.",
    shortDescription: "A rhythmic interplay of undyed organic cream yarn and delicate wavy indigo pinstripes, breathing an airy tranquility into bedroom spaces.",
    fullDescription: "Inspired by gentle ripples across Indian inland riverbeds, Soft Blue Stripes brings an architectural serenity to your sanctuary. Woven from single-origin organic cotton, each stripe is yarn-dyed with indigo extract before weaving, guaranteeing deep colorfastness that remains luminous season after season.",
    artisanCluster: "Maheshwar, Madhya Pradesh",
    craftTechnique: "Slow shuttle pit-loom weaving with yarn-dyed indigo threads",
    fabricComposition: "100% Organic Hand-Picked Indian Cotton",
    threadCount: "380 TC Balanced Slub Percale",
    weaveType: "Matte Breathable Slub Percale (Cool in Summer, Cozy in Winter)",
    dyeProcess: "Hank-dyed in cold natural indigo vats",
    washFeel: "Soft, relaxed texture with subtle tactile linen-like tooth",
    images: {
      folded: "assets/products/sku-02-folded-hd-clean.png",
      lifestyle: "assets/products/sku-02-lifestyle-hd.png",
      foldedThumb: "assets/products/sku-02-folded-clean.png",
      lifestyleThumb: "assets/products/sku-02-lifestyle.png"
    },
    paletteTones: [
      { name: "Cream Parchment", hex: "#F4EFE6" },
      { name: "River Indigo", hex: "#2D36A8" },
      { name: "Flax Linen", hex: "#C4BCB0" }
    ],
    sizes: [
      {
        id: "single",
        label: "Single",
        sheetDimensions: "150 × 250 cm (60 × 98 in)",
        mattressFit: "Up to 30 cm (12 in) depth",
        includes: "1 Flat Bed Sheet + 1 Standard Pillowcase",
        priceMultiplier: 0.8
      },
      {
        id: "queen",
        label: "Queen",
        sheetDimensions: "230 × 275 cm (90 × 108 in)",
        mattressFit: "Up to 36 cm (14 in) depth",
        includes: "1 Flat Bed Sheet + 2 Standard Pillowcases",
        priceMultiplier: 1.0,
        isDefault: true
      },
      {
        id: "king",
        label: "King",
        sheetDimensions: "275 × 275 cm (108 × 108 in)",
        mattressFit: "Up to 40 cm (16 in) depth",
        includes: "1 Flat Bed Sheet + 2 Standard Pillowcases",
        priceMultiplier: 1.15
      },
      {
        id: "superking",
        label: "Super King",
        sheetDimensions: "275 × 305 cm (108 × 120 in)",
        mattressFit: "Up to 45 cm (18 in) depth",
        includes: "1 Flat Bed Sheet + 2 King Pillowcases",
        priceMultiplier: 1.25
      }
    ],
    pillowDimensions: "46 × 70 cm (18 × 28 in) with deep 20 cm envelope flap closure",
    careInstructions: [
      "Machine wash gentle cycle at 30°C / 85°F",
      "Do not soak in bleach or chemical optical brighteners",
      "Tumble dry low or line dry in a gentle evening breeze",
      "Warm iron if desired; natural relaxed rumple is celebrated"
    ],
    craftStory: "Yarns are spun on traditional charkhas and dyed in small batches before being hand-dressed onto the loom beam, yielding a gentle organic variation between every run.",
    sustainabilityImpact: "Zero chemical sizing agents used throughout the weaving cycle; spun from non-GMO rain-fed cotton."
  },
  {
    id: "sku-03",
    skuCode: "LIVY-SKU-03",
    name: "Botanical Sprig",
    subtitle: "Warm ivory bedsheet with a subtle botanical motif",
    category: "botanical",
    collectionName: "Botanical & Meadow",
    badge: "Craft Pick",
    priceINR: 5400,
    priceUSD: 70,
    priceEUR: 65,
    priceGBP: 56,
    rating: 5.0,
    reviewCount: 48,
    conceptNote: "Intimate botanical impressions echoing the tranquil courtyard gardens of Indian heritage havelis.",
    shortDescription: "Delicate hand-carved botanical sprigs floating over a warm ivory foundation of long-staple Indian combed cotton, radiating organic serenity.",
    fullDescription: "Botanical Sprig embodies the contemporary soul of LIVY: quiet, intentional, and intimately tied to nature. Small clusters of herbal flora are pressed by master block carvers onto undyed ivory cotton. The resulting texture is delightfully smooth, offering an unhurried morning calm that transforms bedroom retreats.",
    artisanCluster: "Bagru, Rajasthan",
    craftTechnique: "Mud-resist (Dabu) and natural alum dye immersion",
    fabricComposition: "100% Long-Staple Indian Combed Cotton",
    threadCount: "420 TC Satin-Crisp Percale",
    weaveType: "Silky Percale (Luxe Matte Sheen)",
    dyeProcess: "Dabu clay resist applied by hand, immersed in natural tannin mordants",
    washFeel: "Ultra-silky hand with a crisp architectural weight that stays pristine on the bed",
    images: {
      folded: "assets/products/sku-03-folded-hd-clean.png",
      lifestyle: "assets/products/sku-03-lifestyle-hd.png",
      foldedThumb: "assets/products/sku-03-folded-clean.png",
      lifestyleThumb: "assets/products/sku-03-lifestyle.png"
    },
    paletteTones: [
      { name: "Warm Ivory", hex: "#F5ECE1" },
      { name: "Clay Ink", hex: "#1C1C28" },
      { name: "Earthy Bark", hex: "#7A6455" }
    ],
    sizes: [
      {
        id: "single",
        label: "Single",
        sheetDimensions: "150 × 250 cm (60 × 98 in)",
        mattressFit: "Up to 30 cm (12 in) depth",
        includes: "1 Flat Bed Sheet + 1 Standard Pillowcase",
        priceMultiplier: 0.8
      },
      {
        id: "queen",
        label: "Queen",
        sheetDimensions: "230 × 275 cm (90 × 108 in)",
        mattressFit: "Up to 36 cm (14 in) depth",
        includes: "1 Flat Bed Sheet + 2 Standard Pillowcases",
        priceMultiplier: 1.0,
        isDefault: true
      },
      {
        id: "king",
        label: "King",
        sheetDimensions: "275 × 275 cm (108 × 108 in)",
        mattressFit: "Up to 40 cm (16 in) depth",
        includes: "1 Flat Bed Sheet + 2 Standard Pillowcases",
        priceMultiplier: 1.15
      },
      {
        id: "superking",
        label: "Super King",
        sheetDimensions: "275 × 305 cm (108 × 120 in)",
        mattressFit: "Up to 45 cm (18 in) depth",
        includes: "1 Flat Bed Sheet + 2 King Pillowcases",
        priceMultiplier: 1.25
      }
    ],
    pillowDimensions: "46 × 70 cm (18 × 28 in) with deep 20 cm envelope flap closure",
    careInstructions: [
      "Gentle cold cycle with cool water (30°C / 85°F)",
      "Wash inside out with gentle eco-friendly detergent",
      "Air dry flat or line dry away from direct scorching sun",
      "Medium steam iron for structured editorial elegance"
    ],
    craftStory: "Printed by third-generation artisan families using century-old wooden block stamps. The dabu mud resist allows crisp, micro-detailed lines that synthetic screens could never reproduce.",
    sustainabilityImpact: "Biodegradable, zero synthetic microplastics, packaged in reusable handmade cotton bags."
  },
  {
    id: "sku-04",
    skuCode: "LIVY-SKU-04",
    name: "Minimal Dash",
    subtitle: "Neutral bedsheet with a restrained linear print",
    category: "minimal",
    collectionName: "Quiet Lines",
    badge: "Architectural",
    priceINR: 4800,
    priceUSD: 62,
    priceEUR: 56,
    priceGBP: 49,
    rating: 4.82,
    reviewCount: 26,
    conceptNote: "A modernist study in restraint, inspired by counting tallies and loom markings of Indian weavers.",
    shortDescription: "A rhythmic cadence of miniature hand-stamped dashes, expressing the quiet simplicity and warmth of contemporary Indian architecture.",
    fullDescription: "Inspired by the tally marks etched into wooden weaver looms, Minimal Dash speaks to the modern minimalist. Its restrained, warm monochrome palette blends seamlessly with oak, limestone, lime-plaster, and raw linen spaces, inviting effortless rest with tactile softness.",
    artisanCluster: "Patan, Gujarat & Barmer, Rajasthan",
    craftTechnique: "Precision micro-stamp block printing on washed percale",
    fabricComposition: "100% GOTS-Certified Organic Indian Cotton",
    threadCount: "400 TC Cool Weave",
    weaveType: "Matte Percale (Year-Round Breathability)",
    dyeProcess: "Low-impact mineral inks with natural gum fixatives",
    washFeel: "Crisp and cool to the skin, ideal for hot tropical nights and warm climates",
    images: {
      folded: "assets/products/sku-04-folded-hd-clean.png",
      lifestyle: "assets/products/sku-04-lifestyle-hd.png",
      foldedThumb: "assets/products/sku-04-folded-clean.png",
      lifestyleThumb: "assets/products/sku-04-lifestyle.png"
    },
    paletteTones: [
      { name: "Oat Neutral", hex: "#F3EDE4" },
      { name: "Soft Charcoal", hex: "#2C2C38" },
      { name: "Coffee Thread", hex: "#8C6C58" }
    ],
    sizes: [
      {
        id: "single",
        label: "Single",
        sheetDimensions: "150 × 250 cm (60 × 98 in)",
        mattressFit: "Up to 30 cm (12 in) depth",
        includes: "1 Flat Bed Sheet + 1 Standard Pillowcase",
        priceMultiplier: 0.8
      },
      {
        id: "queen",
        label: "Queen",
        sheetDimensions: "230 × 275 cm (90 × 108 in)",
        mattressFit: "Up to 36 cm (14 in) depth",
        includes: "1 Flat Bed Sheet + 2 Standard Pillowcases",
        priceMultiplier: 1.0,
        isDefault: true
      },
      {
        id: "king",
        label: "King",
        sheetDimensions: "275 × 275 cm (108 × 108 in)",
        mattressFit: "Up to 40 cm (16 in) depth",
        includes: "1 Flat Bed Sheet + 2 Standard Pillowcases",
        priceMultiplier: 1.15
      },
      {
        id: "superking",
        label: "Super King",
        sheetDimensions: "275 × 305 cm (108 × 120 in)",
        mattressFit: "Up to 45 cm (18 in) depth",
        includes: "1 Flat Bed Sheet + 2 King Pillowcases",
        priceMultiplier: 1.25
      }
    ],
    pillowDimensions: "46 × 70 cm (18 × 28 in) with deep 20 cm envelope flap closure",
    careInstructions: [
      "Machine wash at 30°C / 85°F with gentle liquid detergent",
      "Do not dry clean or use industrial high-heat tumble dry",
      "Line dry in partial shade to retain fabric integrity",
      "Steam iron for crisp linen finish or keep rumpled for relaxed chic"
    ],
    craftStory: "Each dash is hand-stamped in rhythmic intervals following a hand-measured grid marked with herbal chalk. The human eye guides the tempo, giving every sheet its own quiet pulse.",
    sustainabilityImpact: "Fair-trade certified artisan wages with healthcare micro-grants for weaver families."
  },
  {
    id: "sku-05",
    skuCode: "LIVY-SKU-05",
    name: "Indigo Geometry",
    subtitle: "Cream bedsheet with a blue geometric print",
    category: "geometric",
    collectionName: "Indigo Crafts",
    badge: "Heritage Masterpiece",
    priceINR: 5600,
    priceUSD: 74,
    priceEUR: 68,
    priceGBP: 59,
    rating: 4.96,
    reviewCount: 57,
    conceptNote: "A bold geometrical diamond matrix rooted in India's millennia-old indigo fermenting tradition.",
    shortDescription: "Geometric medallion diamonds in authentic fermented Indian indigo, hand-pressed over an unbleached cream cotton foundation.",
    fullDescription: "Rooted in India's millennia-old indigo mastery, Indigo Geometry pairs mathematical harmony with artisan unpredictability. Hand-pressed with hand-carved acacia wood blocks into pure plant-fermented indigo, every diamond reveals deep celestial blues and subtle tone gradients that celebrate the poetry of human craft.",
    artisanCluster: "Akola & Bagru, Rajasthan",
    craftTechnique: "Natural fermented indigo vat immersion with wooden block resist",
    fabricComposition: "100% Long-Staple Indian Combed Cotton",
    threadCount: "400 TC Royal Percale",
    weaveType: "Matte Smooth Percale (Year-Round Temperature Balance)",
    dyeProcess: "25-day biologically fermented plant indigo with jaggery and lime",
    washFeel: "Rich, substantial drape with soothing coolness and deep color longevity",
    images: {
      folded: "assets/products/sku-05-folded-hd-clean.png",
      lifestyle: "assets/products/sku-05-lifestyle-hd.png",
      foldedThumb: "assets/products/sku-05-folded-clean.png",
      lifestyleThumb: "assets/products/sku-05-lifestyle.png"
    },
    paletteTones: [
      { name: "Warm Cream Base", hex: "#F6EFE6" },
      { name: "Deep Royal Indigo", hex: "#2D36A8" },
      { name: "Midnight Charcoal", hex: "#161622" }
    ],
    sizes: [
      {
        id: "single",
        label: "Single",
        sheetDimensions: "150 × 250 cm (60 × 98 in)",
        mattressFit: "Up to 30 cm (12 in) depth",
        includes: "1 Flat Bed Sheet + 1 Standard Pillowcase",
        priceMultiplier: 0.8
      },
      {
        id: "queen",
        label: "Queen",
        sheetDimensions: "230 × 275 cm (90 × 108 in)",
        mattressFit: "Up to 36 cm (14 in) depth",
        includes: "1 Flat Bed Sheet + 2 Standard Pillowcases",
        priceMultiplier: 1.0,
        isDefault: true
      },
      {
        id: "king",
        label: "King",
        sheetDimensions: "275 × 275 cm (108 × 108 in)",
        mattressFit: "Up to 40 cm (16 in) depth",
        includes: "1 Flat Bed Sheet + 2 Standard Pillowcases",
        priceMultiplier: 1.15
      },
      {
        id: "superking",
        label: "Super King",
        sheetDimensions: "275 × 305 cm (108 × 120 in)",
        mattressFit: "Up to 45 cm (18 in) depth",
        includes: "1 Flat Bed Sheet + 2 King Pillowcases",
        priceMultiplier: 1.25
      }
    ],
    pillowDimensions: "46 × 70 cm (18 × 28 in) with deep 20 cm envelope flap closure",
    careInstructions: [
      "First wash separate in cold water with a pinch of sea salt to set natural indigo luster",
      "Subsequent washes at 30°C / 85°F with mild wool/linen detergent",
      "Do not dry under direct harsh desert midday sun",
      "Steam iron on cotton setting while slightly damp"
    ],
    craftStory: "The biological indigo vats used for this sheet are kept alive for over 25 days with dates, jaggery, and slaked lime. The living bacteria impart a depth of blue that synthetic dyes cannot replicate.",
    sustainabilityImpact: "100% natural organic plant pigment with zero petroleum or chemical fixatives."
  }
];

const LIVY_COLLECTIONS = [
  {
    id: "all",
    name: "All Foundations",
    count: 5,
    tagline: "The Complete Foundational Suite",
    description: "Five signature bedsheets exploring the tactile dialogue between Indian textile craft and contemporary spaces."
  },
  {
    id: "botanical",
    name: "Botanical & Meadow",
    count: 2,
    tagline: "Sanganer & Bagru Flora",
    description: "Intricate floral and sprig block motifs celebrating Rajasthan's native flora and courtyard tranquility."
  },
  {
    id: "minimal",
    name: "Quiet Lines",
    count: 2,
    tagline: "Shuttle Rhythms & Loom Tallies",
    description: "Understated pinstripes and rhythmic dash patterns for minimal, architectural bedrooms."
  },
  {
    id: "geometric",
    name: "Indigo Crafts",
    count: 1,
    tagline: "Heritage Fermented Indigo",
    description: "Deep indigo vat geometries honoring India's five-thousand-year heritage of natural plant dyeing."
  }
];

const CURRENCIES = {
  INR: { symbol: "₹", rate: 1.0, label: "INR (₹)" },
  USD: { symbol: "$", rate: 0.012, label: "USD ($)" },
  EUR: { symbol: "€", rate: 0.011, label: "EUR (€)" },
  GBP: { symbol: "£", rate: 0.0095, label: "GBP (£)" }
};

const BRAND_PILLARS = [
  {
    number: "01",
    title: "Living Voices",
    color: "#FFCC00", // Sun Yellow
    textColor: "#141312",
    tagline: "Direct Artisan Equity",
    body: "LIVY cuts through intermediaries. We partner directly with artisan families in Sanganer, Bagru, and Maheshwar, ensuring fair living wages and generational craft continuity."
  },
  {
    number: "02",
    title: "400 TC Percale",
    color: "#FFB900", // Golden Yellow
    textColor: "#141312",
    tagline: "Crisp Indian Combed Cotton",
    body: "Woven from single-ply, long-staple Indian cotton with a matte percale finish. Lightweight, breathable, and crisp—engineered specifically for modern indoor living and tropical ease."
  },
  {
    number: "03",
    title: "Teak & Mud Resist",
    color: "#FF8C00", // Orange
    textColor: "#FFFFFF",
    tagline: "Living Ancient Chemistry",
    body: "No synthetic chemical screens. We work exclusively with hand-carved teak wood blocks, Dabu mud resists, and biologically fermented desert indigo vats."
  },
  {
    number: "04",
    title: "A New Indian Home",
    color: "#FF5F00", // Vermilion
    textColor: "#FFFFFF",
    tagline: "Contemporary Editorial Design",
    body: "Rooted in heritage without being trapped by nostalgia. Our patterns are clean, architectural, and serene—designed to elevate contemporary bedrooms worldwide."
  }
];

if (typeof module !== 'undefined') {
  module.exports = { LIVY_CATALOG, LIVY_COLLECTIONS, CURRENCIES, BRAND_PILLARS };
}
