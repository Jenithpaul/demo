// data/products.js
export const categories = [
  "PLYWOOD",
  "BLOCK BOARD", 
  "LAMINATES",
  "VENEERS",
  "MDF",
  "PARTICLE BOARD",
  "DOORS",
  "FLUSH DOORS",
  "DECORATIVE PANELS",
  "WPC/PVC BOARDS",
  "FILM FACED SHUTTERING PLY",
  "COMMERCIAL PLY",
  "MARINE PLY",
];

export const products = [
  {
    id: 1,
    name: "Premium Plywood Sheet",
    category: "PLYWOOD",
    price: 1800,
    originalPrice: 2200,
    image: "/images/plywood.png",
    description: "Premium grade plywood sheet, perfect for furniture and interiors. High durability and smooth finish.",
    features: ["Water Resistant", "Termite Proof", "ISI Certified"],
    specifications: {
      thickness: "18mm",
      size: "8x4 feet",
      grade: "BWR Grade"
    },
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    name: "Commercial Plywood",
    category: "PLYWOOD", 
    price: 1200,
    originalPrice: 1500,
    image: "/images/plywood.png",
    description: "Commercial grade plywood suitable for construction and general purpose use.",
    features: ["Cost Effective", "Good Strength", "Versatile Use"],
    specifications: {
      thickness: "15mm",
      size: "8x4 feet", 
      grade: "Commercial Grade"
    },
    inStock: true,
    rating: 4.5,
    reviews: 89
  },
  {
    id: 3,
    name: "Decorative Block Board",
    category: "BLOCK BOARD",
    price: 2500,
    originalPrice: 3000,
    image: "/images/wood1.jpg",
    description: "High-quality block board with decorative veneer finish for premium applications.",
    features: ["Decorative Finish", "Strong Core", "Warp Resistant"],
    specifications: {
      thickness: "19mm",
      size: "8x4 feet",
      grade: "Premium"
    },
    inStock: true,
    rating: 4.7,
    reviews: 67
  },
  {
    id: 4,
    name: "Marine Block Board", 
    category: "BLOCK BOARD",
    price: 3200,
    originalPrice: 3800,
    image: "/images/wood1.jpg",
    description: "Marine grade block board with superior water resistance for outdoor applications.",
    features: ["Marine Grade", "100% Waterproof", "Long Lasting"],
    specifications: {
      thickness: "19mm",
      size: "8x4 feet",
      grade: "Marine Grade"
    },
    inStock: false,
    rating: 4.9,
    reviews: 34
  },
  {
    id: 5,
    name: "High Gloss Laminate",
    category: "LAMINATES",
    price: 850,
    originalPrice: 1000,
    image: "/images/ply1.jpg", 
    description: "Premium high gloss laminate with scratch resistant surface and vibrant colors.",
    features: ["High Gloss Finish", "Scratch Resistant", "Easy to Clean"],
    specifications: {
      thickness: "1mm",
      size: "8x4 feet",
      finish: "High Gloss"
    },
    inStock: true,
    rating: 4.6,
    reviews: 123
  },
  {
    id: 6,
    name: "Textured Laminate",
    category: "LAMINATES",
    price: 750,
    originalPrice: 900,
    image: "/images/ply1.jpg",
    description: "Textured laminate with natural wood grain finish for modern interiors.",
    features: ["Natural Texture", "Anti-Fingerprint", "Durable"],
    specifications: {
      thickness: "0.8mm", 
      size: "8x4 feet",
      finish: "Textured"
    },
    inStock: true,
    rating: 4.4,
    reviews: 98
  },
  {
    id: 7,
    name: "Natural Wood Veneer",
    category: "VENEERS",
    price: 2200,
    originalPrice: 2600,
    image: "/images/wood2.jpg",
    description: "Beautiful natural wood veneer panel for luxury interior applications.",
    features: ["Natural Wood", "Unique Grain", "Premium Quality"],
    specifications: {
      thickness: "0.6mm",
      size: "8x4 feet",
      wood: "Teak Wood"
    },
    inStock: true,
    rating: 4.8,
    reviews: 45
  },
  {
    id: 8,
    name: "Engineered Veneer",
    category: "VENEERS", 
    price: 1800,
    originalPrice: 2100,
    image: "/images/wood2.jpg",
    description: "Engineered veneer with consistent pattern and color for uniform appearance.",
    features: ["Consistent Pattern", "Color Uniform", "Cost Effective"],
    specifications: {
      thickness: "0.5mm",
      size: "8x4 feet", 
      type: "Engineered"
    },
    inStock: true,
    rating: 4.3,
    reviews: 72
  },
  {
    id: 9,
    name: "Premium MDF Board",
    category: "MDF",
    price: 1600,
    originalPrice: 1900,
    image: "/images/ply2.jpg",
    description: "High-density MDF board perfect for furniture and cabinet making.",
    features: ["High Density", "Smooth Surface", "Easy to Work"],
    specifications: {
      thickness: "18mm",
      size: "8x4 feet",
      density: "High Density"
    },
    inStock: true,
    rating: 4.5,
    reviews: 134
  },
  {
    id: 10,
    name: "Medium MDF Board",
    category: "MDF",
    price: 1200,
    originalPrice: 1400,
    image: "/images/ply2.jpg", 
    description: "Medium density MDF board suitable for general carpentry work.",
    features: ["Medium Density", "Good Finish", "Affordable"],
    specifications: {
      thickness: "15mm",
      size: "8x4 feet",
      density: "Medium Density"
    },
    inStock: true,
    rating: 4.2,
    reviews: 87
  },
  {
    id: 11,
    name: "Particle Board Standard",
    category: "PARTICLE BOARD",
    price: 800,
    originalPrice: 950,
    image: "/images/wood1.jpg",
    description: "Standard particle board for economical furniture and construction use.",
    features: ["Cost Effective", "Good Strength", "Versatile"],
    specifications: {
      thickness: "18mm",
      size: "8x4 feet",
      grade: "Standard"
    },
    inStock: true,
    rating: 4.0,
    reviews: 112
  },
  {
    id: 12,
    name: "Flush Door Premium",
    category: "FLUSH DOORS",
    price: 3200,
    originalPrice: 3800,
    image: "/images/ply2.jpg",
    description: "Premium flush door with high durability and elegant finish.",
    features: ["Premium Finish", "High Durability", "Warp Resistant"],
    specifications: {
      size: "7x3 feet",
      thickness: "35mm",
      core: "Solid Core"
    },
    inStock: true,
    rating: 4.7,
    reviews: 67
  },
  {
    id: 13,
    name: "Standard Flush Door",
    category: "FLUSH DOORS",
    price: 2400,
    originalPrice: 2800,
    image: "/images/ply2.jpg",
    description: "Standard flush door suitable for residential and commercial use.",
    features: ["Standard Quality", "Good Finish", "Affordable"],
    specifications: {
      size: "7x3 feet", 
      thickness: "32mm",
      core: "Hollow Core"
    },
    inStock: true,
    rating: 4.3,
    reviews: 89
  },
  {
    id: 14,
    name: "Decorative Wall Panel",
    category: "DECORATIVE PANELS",
    price: 2800,
    originalPrice: 3200,
    image: "/images/ply1.jpg",
    description: "Designer decorative wall panel for modern interior decoration.",
    features: ["Designer Pattern", "Easy Installation", "Modern Look"],
    specifications: {
      thickness: "8mm",
      size: "8x4 feet",
      pattern: "3D Textured"
    },
    inStock: true,
    rating: 4.6,
    reviews: 43
  },
  {
    id: 15,
    name: "WPC Board Eco",
    category: "WPC/PVC BOARDS", 
    price: 2100,
    originalPrice: 2500,
    image: "/images/wood2.jpg",
    description: "Eco-friendly WPC board for modern construction and outdoor applications.",
    features: ["Eco-Friendly", "Weather Resistant", "Low Maintenance"],
    specifications: {
      thickness: "20mm",
      size: "8x4 feet",
      material: "Wood Plastic Composite"
    },
    inStock: true,
    rating: 4.8,
    reviews: 56
  },
  {
    id: 16,
    name: "PVC Foam Board",
    category: "WPC/PVC BOARDS",
    price: 1800,
    originalPrice: 2100,
    image: "/images/wood2.jpg",
    description: "Lightweight PVC foam board for signage and interior applications.",
    features: ["Lightweight", "Waterproof", "Easy to Cut"],
    specifications: {
      thickness: "15mm",
      size: "8x4 feet", 
      material: "PVC Foam"
    },
    inStock: true,
    rating: 4.4,
    reviews: 78
  },
  {
    id: 17,
    name: "Film Faced Shuttering Ply",
    category: "FILM FACED SHUTTERING PLY",
    price: 2800,
    originalPrice: 3200,
    image: "/images/plywood.png",
    description: "High-quality film faced shuttering plywood for concrete construction work.",
    features: ["Film Faced", "High Strength", "Reusable"],
    specifications: {
      thickness: "18mm",
      size: "8x4 feet",
      grade: "Construction Grade"
    },
    inStock: true,
    rating: 4.6,
    reviews: 34
  },
  {
    id: 18,
    name: "Commercial Ply BWR",
    category: "COMMERCIAL PLY",
    price: 1400,
    originalPrice: 1650,
    image: "/images/ply1.jpg",
    description: "BWR grade commercial plywood with boiling water resistance.",
    features: ["BWR Grade", "Water Resistant", "Strong Bond"],
    specifications: {
      thickness: "18mm",
      size: "8x4 feet",
      grade: "BWR Grade"
    },
    inStock: true, 
    rating: 4.5,
    reviews: 91
  },
  {
    id: 19,
    name: "Marine Plywood Premium",
    category: "MARINE PLY",
    price: 3500,
    originalPrice: 4000,
    image: "/images/ply2.jpg",
    description: "Premium marine plywood with 100% waterproof guarantee for marine applications.",
    features: ["100% Waterproof", "Marine Grade", "Long Lasting"],
    specifications: {
      thickness: "19mm",
      size: "8x4 feet",
      grade: "Marine Grade"
    },
    inStock: true,
    rating: 4.9,
    reviews: 23
  },
  {
    id: 20,
    name: "Wooden Door Frame",
    category: "DOORS",
    price: 4500,
    originalPrice: 5200,
    image: "/images/plywood.png",
    description: "Solid wooden door with frame, perfect for main entrance and rooms.",
    features: ["Solid Wood", "Complete Frame", "Premium Hardware"],
    specifications: {
      size: "7x3 feet",
      material: "Solid Wood",
      hardware: "Premium"
    },
    inStock: false,
    rating: 4.8,
    reviews: 12
  }
];