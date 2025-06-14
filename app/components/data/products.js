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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthvnext.bing.com%2Fth%3Fid%3DOIP.97LYZArLJfi2un-8qrrdXgHaHa%26cb%3Dthvnext%26pid%3DApi&f=1&ipt=e61b68c9ce884b739d1e3dd68b608a8885095441673e925a9bf0e5c27e5e38f7&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%2Fid%2FOIP.HnI_tV_RhAijYT5lzhqqKwHaGf%3Fpid%3DApi&f=1&ipt=9ca4739ba76b5182b5594f7c4b273f8c248ee35cf81ca03610bc9bc2a0119dc2&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.f-gfJ_3EZR5DrNYefQCHtgHaFj%26pid%3DApi&f=1&ipt=977ea6a5c90424c08ef84259cda2d7868bee3a99fc013f3a80c2af1054047438&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.NB21Cbvg3z4ATo4J66mmtgHaHE%26pid%3DApi&f=1&ipt=63f341e309f2cf72d9ff8256cfcc64fdde935261e8ba3578a060179f00f8266d&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.8upjZBzDMbpDctr6XEES9QHaHa%3Fpid%3DApi&f=1&ipt=180a4d35eb596ae88d12a2a6f3bcffb2eb8ef1aab65391fa5e342ae56e2cc88c&ipo=images", 
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.9iAf4fLfE4FHuV8Zz4mnwAHaDu%26pid%3DApi&f=1&ipt=6170066baf649905f2e10b63b63af4c53656a8ddebf30471822ef1fcae31cae9&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.ZjNHC9evQCQJdbuahVZAxAHaCe%3Fpid%3DApi&f=1&ipt=02fd6f8b07ee86294d0c29404183e85e454d31c8fc4e1e53812138d51a3a4eae&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-mjszBcWZUZYVo4k4YtL8AHaFF%26pid%3DApi&f=1&ipt=ca92826df9a3b800f00a92b0d701ea9d904dd9647bd8467043ebbe6199165f44&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.j2fRFI11d6mLdbbYjcGQPgAAAA%26cb%3Dthvnext%26pid%3DApi&f=1&ipt=64586202fef4e9125cc8e6f4487f7bcf1304e2dadf31f6137b567fe60ce1a023&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.qGEIZMNhEmr1jTatrwBzxgHaE8%3Fpid%3DApi&f=1&ipt=6fa9b36263baf86b835e782e80801a6213968d966814695d7c4c29b1ce75d804&ipo=images", 
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.snhoT5IVQR0EftYE6sYjCAHaEO%26pid%3DApi&f=1&ipt=1c463104affbba5a62a0132d50a9f5bcecd2fb52f55a5e0f9a112af503499ee3&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XMpXq9BHZ2Td9M7bPnwwlQHaEh%26pid%3DApi&f=1&ipt=4963f7ddaa045546dd5c5c1c59b030b0f58882a3448a5f51c3ca429492e7ad55&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.QUjslp-9NiXxDGYB6YGnlwHaI4%26pid%3DApi&f=1&ipt=7652801f4f76a4929d55e8723ef0e210e9c3aeaa89d908d91786ec4536d54d1b&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.aYSu4poLDucxaKFyyv2PkwHaE6%26pid%3DApi&f=1&ipt=721e0b961cdc5dc98363d31ffed673c168637b419132b537726d3d8f57b16e5e&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.CKBYJRXKP5kDR8zSx46wEgHaHI%3Fpid%3DApi&f=1&ipt=92d6710dda8d0740a17ac8fb233a963d536da85fcc6275d3a31da15013abfc0b&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.B1YffPOc4rFD4hFfEL53pAHaEK%26pid%3DApi&f=1&ipt=0fb70503428be2b1e573b754a24eef85a44a2f4edc81c9fe8ea5afb4d03cd2e8&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.CKHCwC2mCtVQmX2Q_4g4RgHaEU%26pid%3DApi&f=1&ipt=3afbda27adabc953bb10e2df1bef97b6b948b50faa3a07e6834fce36ef8a7ae1&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GpEYcHxXWmzI-Qlz9g3lFAHaEK%26pid%3DApi&f=1&ipt=b7cc753f20c42ac3a9311749346f54a439280b087e57da39715b0ee97ae482ff&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fth.bing.com%2Fth%3Fid%3DOIP.iOGTtr5zCFttp1dS2iUz2AHaE8%26cb%3Dthvnextc1%26pid%3DApi&f=1&ipt=0cf094e4510761b9f4c533bdfa8b85e06eaf2c0f1d540dfa07a3f5317e3652d5&ipo=images",
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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.4o8YwP9Hc5yIhS48IvthxAHaHa%26pid%3DApi&f=1&ipt=05b853b8a55cc9df3e75924785e6ec6e3a04ee53cfe76ddd7025f03111eae9ac&ipo=images",
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