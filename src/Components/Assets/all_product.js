import p1_img1 from "./desert1.jpg";
import p1_img2 from "./desert2.jpg";
import p1_img3 from "./desert3.jpg";
import p1_img4 from "./desert4.jpg";
import p1_img5 from "./desert5.jpg";

import p2_img1 from "./maison1.1.jpg";
import p2_img2 from "./maison1.2.jpg";
import p2_img3 from "./maison1.3.jpg";
import p2_img4 from "./maison1.4.jpg";
import p2_img5 from "./maison1.5.jpg";
import p2_img6 from "./maison1.6.jpg";

import p3_img1 from "./maison2.1.jpg";
import p3_img2 from "./maison2.2.jpg";
import p3_img3 from "./maison2.3.jpg";
import p3_img4 from "./maison2.4.jpg";
import p3_img5 from "./maison2.5.jpg";
import p3_img6 from "./maison2.6.jpg";

import p4_img1 from "./maison3.1.jpg";
import p4_img2 from "./maison3.2.jpg";
import p4_img3 from "./maison3.3.jpg";
import p4_img4 from "./maison3.4.jpg";
import p4_img5 from "./maison3.5.jpg";

import p5_img1 from "./maison4.1.jpg";
import p5_img2 from "./maison4.2.jpg";
import p5_img3 from "./maison4.3.jpg";
import p5_img4 from "./maison4.4.jpg";
import p5_img5 from "./maison4.5.jpg";
import p5_img6 from "./maison4.6.jpg";

import p6_img1 from "./maison5.1.jpg";
import p6_img2 from "./maison5.2.jpg";
import p6_img3 from "./maison5.3.jpg";
import p6_img4 from "./maison5.4.jpg";
import p6_img5 from "./maison5.5.jpg";
import p6_img6 from "./maison5.6.jpg";

import p7_img1 from "./maison6..jpg";
import p7_img2 from "./maison6.2.jpg";
import p7_img3 from "./maison6.3.jpg";
import p7_img4 from "./maison6.4.jpg";
import p7_img5 from "./maison6.5.jpg";

import p8_img1 from "./maison7.1.jpg";
import p8_img2 from "./maison7.2.jpg";
import p8_img3 from "./maison7.3.jpg";
import p8_img4 from "./maison7.4.jpg";
import p8_img5 from "./maison7.5.jpg";
import p8_img6 from "./maison7.6.jpg";

import p9_img1 from "./maison8.1.jpg";
import p9_img2 from "./maison8.2.jpg";
import p9_img3 from "./maison8.3.jpg";
import p9_img4 from "./maison8.4.jpg";
import p9_img5 from "./maison8.5.jpg";

import p10_img1 from "./sidibou1.jpg";
import p10_img2 from "./sidibou2.jpg";
import p10_img3 from "./sidibou3.jpg";
import p10_img4 from "./sidibou4.jpg";
import p10_img5 from "./sidibou5.jpg";
import p10_img6 from "./sidibou6.jpg";
import p10_img7 from "./sidibou7.jpg";
import p10_img8 from "./sidibou8.jpg";

import p11_img1 from "./Tozer1.jpg";
import p11_img2 from "./Tozer2.jpg";
import p11_img3 from "./Tozer3.jpg";
import p11_img4 from "./Tozer4.jpg";
import p11_img5 from "./Tozer5.jpg";

import p12_img1 from "./traditionel1.jpg";
import p12_img2 from "./traditionel2.jpg";
import p12_img3 from "./traditionel3.jpg";
import p12_img4 from "./traditionel4.jpg";
import p12_img5 from "./traditionel5.jpg";

// import p1_img1 from "./desert1.jpg";
// import p1_img2 from "./desert2.jpg";
// import p1_img3 from "./desert3.jpg";
// import p1_img4 from "./desert4.jpg";
// import p1_img5 from "./desert5.jpg";
// import p1_img6 from "./Picture3.png";

// import p1_img1 from "./desert1.jpg";
// import p1_img2 from "./desert2.jpg";
// import p1_img3 from "./desert3.jpg";
// import p1_img4 from "./desert4.jpg";
// import p1_img5 from "./desert5.jpg";
// import p1_img6 from "./Picture3.png";

// import p1_img1 from "./desert1.jpg";
// import p1_img2 from "./desert2.jpg";
// import p1_img3 from "./desert3.jpg";
// import p1_img4 from "./desert4.jpg";
// import p1_img5 from "./desert5.jpg";
// import p1_img6 from "./Picture3.png";

const all_product = [
  {
    id: 1,
    description: "Majestic riad with lush central courtyard and grand arches",
    long_description: "This opulent riad in Kairouan blends tradition and luxury, featuring a grand courtyard adorned with palm trees, warm lighting, and refined archways. A perfect harmony between elegance and heritage, it offers a serene ambiance ideal for family or retreat living.",
    city: "Kairouan",
    type: "Apartment",
    new_price: 480000,
    old_price: 520000,
    image:p1_img1,
    images: [p1_img1, p1_img2, p1_img3, p1_img4, p1_img5],
    includes: [
      "6 bedrooms",
      "5 bathrooms",
      "Open patio with fountain",
      "Indoor-outdoor lounge area",
      "Traditional Tunisian chandeliers",
      "Full-service kitchen",
      "Terrace with city views"
    ]
  },
  {
    id: 2,
    description: "Modern Mediterranean villa with panoramic sea views",
    long_description: "Located in the coastal city of Hammamet, this architectural marvel features fluid curves, bright white walls, and wide arched glass doors that open onto a pristine poolside. Ideal for lovers of minimalism and ocean breeze.",
    city: "Hammamet",
    type: "Villa",
    new_price: 720000,
    old_price: 800000,
    image:p2_img1,
    images: [p2_img1,p2_img2,p2_img3, p2_img4, p2_img5, p2_img6],
    includes: [
      "4 bedrooms",
      "4 bathrooms",
      "Infinity-edge pool",
      "Panoramic sea-facing terraces",
      "Floor-to-ceiling windows",
      "Outdoor lounge area",
      "Private beach access"
    ]
  },
  {
    id: 3,
    description: "Organic-style appartments with spiral stairs and jungle vibes",
    long_description: "Tucked away in the calm corners of Tabarka, this earth-toned villa embraces nature with its lush greenery, rustic materials, and unique spiral staircases. An ideal home for those who want to reconnect with the natural world in style.",
    city: "Tabarka",
    type: "Apartment",
    new_price: 390000,
    old_price: 400000,
    image:p3_img1,
    images: [p3_img1, p3_img2, p3_img3, p3_img4, p3_img5, p3_img6],
    includes: [
      "3 bedrooms",
      "3 bathrooms",
      "Spiral staircase",
      "Tropical indoor garden",
      "Rooftop terrace with wooden pergola",
      "Natural light corridors",
      "Eco-friendly construction"
    ]
  },
  {
    id: 4,
    description: "Contemporary minimalist house with marble walkways",
    long_description: "A tranquil residence in Mahdia blending modern Tunisian elegance with minimalist design. Featuring pristine white walls and serene water basins, it creates an atmosphere of calm sophistication.",
    city: "Mahdia",
    type: "Villa",
    new_price: 510000,
    old_price: 570000,
    image:p4_img1,
    images: [p4_img1, p4_img2, p4_img3, p4_img4, p4_img5],
    includes: [
      "3 bedrooms",
      "2 bathrooms",
      "Interior garden with olive trees",
      "Stone and marble water features",
      "Large open-space living",
      "Sunlit corridors",
      "High-end modern kitchen"
    ]
  },
  {
    id: 5,
    description: "Rustic stone courtyard house with private plunge pool",
    long_description: "Located in the heart of Djerba’s medina, this rustic home offers traditional charm with stone arches, antique wooden doors, and a peaceful courtyard featuring a vintage plunge pool. A step back into authentic island life.",
    city: "Djerba",
    type: "Traditional House",
    new_price: 280000,
    old_price: 285000,
    image:p5_img1,
    images: [p5_img1, p5_img2, p5_img3, p5_img4, p5_img5, p5_img6],
    includes: [
      "2 bedrooms",
      "1 bathroom",
      "Inner courtyard with small pool",
      "Traditional Djerbian décor",
      "Vaulted stone arches",
      "Vintage tiled floors",
      "Cozy outdoor seating area"
    ]
  },
  {
    id: 6,
    description: "Desert-inspired white villa with cactus garden",
    long_description: "This villa in Tataouine embraces Saharan aesthetics with clean white geometry, large sculptural cacti, and a minimalist desert garden. A peaceful desert haven with a luxury twist.",
    city: "Djerba",
    type: "Villa",
    new_price: 430000,
    old_price: 590000,
    image:p6_img1,
    images: [p6_img1, p6_img2, p6_img3, p6_img4, p6_img5, p6_img6],
    includes: [
      "3 bedrooms",
      "2 bathrooms",
      "Cactus rock garden",
      "Modern desert-inspired interior",
      "Large open patio",
      "Sand-colored stone accents",
      "Private rooftop sun deck"
    ]
  },
  {
  id: 7,
  description: "Stone villa with panoramic mountain views and infinity pool",
  long_description: "Perched on the hills of Le Kef, this traditional-style stone villa offers breathtaking views of the surrounding valleys. With its green shutters, olive trees, and peaceful poolside, it's the perfect blend of rustic charm and modern comfort.",
  city: "Le Kef",
  type: "Villa",
  new_price: 680000,
  old_price: 710000,
  image: p7_img1,
  images: [p7_img1, p7_img2, p7_img3, p7_img4, p7_img5],
  includes: [
    "5 bedrooms",
    "4 bathrooms",
    "Infinity pool with valley view",
    "Stone façade and rustic shutters",
    "Olive trees and Mediterranean garden",
    "Sunset-facing terrace",
    "Outdoor dining area"
  ]
},
{
  id: 8,
  description: "Tropical-inspired apartment with arched windows and serene interior",
  long_description: "This peaceful apartment in Gammarth embraces earthy textures and natural tones. Featuring large arched windows, indoor plants, and a custom low-sitting couch, the ambiance offers a perfect refuge from busy city life.",
  city: "Gammarth",
  type: "Apartment",
  new_price: 450000,
  old_price: 470000,
  image: p8_img1,
  images: [p8_img1, p8_img2, p8_img3, p8_img4, p8_img5, p8_img6],
  includes: [
    "2 bedrooms",
    "2 bathrooms",
    "Custom sunken sofa lounge",
    "Floor-to-ceiling arched windows",
    "Indoor tropical plants",
    "Open-plan kitchen and living",
    "Natural fiber rugs and wooden finishes"
  ]
},
{
  id: 9,
  description: "Contemporary villa with palm garden and poolside lounge",
  long_description: "Located in La Marsa, this modern villa features clean lines, large glass panels, and a lush garden surrounded by palm trees. Designed for comfort and style, the open layout flows seamlessly into a sun-drenched pool area.",
  city: "La Marsa",
  type: "Villa",
  new_price: 740000,
  old_price: 780000,
  image: p9_img1,
  images: [p9_img1, p9_img2, p9_img3, p9_img4, p9_img5],
  includes: [
    "4 bedrooms",
    "4 bathrooms",
    "Modern kitchen with island",
    "Spacious outdoor terrace",
    "Private swimming pool",
    "Palm-lined garden",
    "Indoor-outdoor living room"
  ]
},
{
  id: 10,
  description: "Authentic blue-and-white traditional house with pool",
  long_description: "Nestled in the heart of Sidi Bou Said, this stunning traditional house showcases the iconic white façade with deep blue wooden elements. With arched entrances and a serene pool, it’s a postcard-perfect embodiment of Tunisian coastal charm.",
  city: "Sidi Bou Said",
  type: "Traditional House",
  new_price: 520000,
  old_price: 550000,
  image: p10_img1,
  images: [p10_img1, p10_img2, p10_img3, p10_img4, p10_img5, p10_img6, p10_img7, p10_img8],
  includes: [
    "3 bedrooms",
    "2 bathrooms",
    "Interior courtyard pool",
    "Ornate blue wooden balcony",
    "Traditional white stone arches",
    "Rooftop terrace",
    "Decorative mashrabiya windows"
  ]
},
{
  id: 11,
  description: "Desert riad with palm garden and central pool",
  long_description: "This breathtaking riad in Tozeur features sandy-toned walls, intricate arched facades, and a peaceful central pool framed by palm trees. An immersive desert escape where traditional architecture meets serenity.",
  city: "Tozeur",
  type: "Traditional House",
  new_price: 600000,
  old_price: 645000,
  image: p11_img1,
  images: [p11_img1, p11_img2, p11_img3, p11_img4, p11_img5],
  includes: [
    "6 bedrooms",
    "5 bathrooms",
    "Central courtyard pool",
    "Multiple arched terraces",
    "Palm garden",
    "Authentic brick architecture",
    "Desert-inspired lounge decor"
  ]
},
{
  id: 12,
  description: "Andalusian-style palace with vibrant zellige and arched galleries",
  long_description: "In the heart of Tunis lies this magnificent traditional home, richly adorned with Andalusian zellige tiles, vaulted galleries, and intricate wood ceilings. A historical gem blending art, culture, and timeless beauty.",
  city: "Tunis",
  type: "Traditional House",
  new_price: 880000,
  old_price: 950000,
  image: p12_img1,
  images: [p12_img1, p12_img2, p12_img3, p12_img4, p12_img5],
  includes: [
    "7 bedrooms",
    "6 bathrooms",
    "Full zellige courtyard",
    "Upper floor with balustrades",
    "Hand-painted wooden ceiling",
    "Decorative columns and arches",
    "Traditional hammam room"
  ]
}

];



export default all_product;
