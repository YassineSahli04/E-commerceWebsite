import p1_img from "./Picture3.png";
import p2_img from "./Picture4.png";
import p3_img from "./Picture5.png";
import p4_img from "./Picture6.png";
import p5_img from "./picture7.png";
import p6_img from "./Picture8.png";
import p7_img from "./Picture9.png";
import p8_img from "./Picture10.png";
import p9_img from "./Picture11.png";
import p10_img from "./Picture12.png";
import p11_img from "./Picture13.png";
import p12_img from "./Picture14.png";




let all_product = [
  {
    id: 1,
    description: "Hand-painted vase for flowers",
    artisan :"Meriem",
    category: "products",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
    group: "Vases",
    shapes: ['Mason Jar', 'Milk Bottle', 'Rustic Vase','Same as in picture']

  },
  {
    id: 2,
    description: "Flower pot cover vase",
    artisan :"Mohammed",
    category: "products",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
    group: "Vases",
    shapes: ['Square', 'Round', 'rectangular','Same as in picture']
  },
  {
    id: 3,
    description: "Ceramic Pot",
    artisan :"Hedi",
    category: "products",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
    group: "Vases",
    shapes: ['Square', 'Round', 'rectangular','Same as in picture']
  },
  {
    id: 4,
    description: "3 Olive wood Bowls",
    artisan :"Samia",
    category: "products",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
    group: "Bowls",
    dimension: ['Small : 15cm', 'Meduim : 20cm', 'Big : 25cm']
  },
  {
    id: 5,
    description: "Hand-Painted Serving Bowls",
    artisan :"Sondous",
    category: "products",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
    group: "Bowls",
    dimension: ['Small : 15cm', 'Meduim : 20cm', 'Big : 25cm']
  },
  {
    id: 6,
    description: "Decorative Serving Ceramic Oval Bow",
    artisan :"Lamia",
    category: "products",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
    group: "Bowls",
   
  },
  {
    id: 7,
    description: "2 Tunisian Knit Bags",
    artisan :"Asma",
    category: "products",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
    group: "Handwoven_Bags",
 
  },
  { 
    id: 8,
    description: "Tunisian Crochet Bag Pattern with a button",
    artisan :"Meriem",
    category: "products",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
    group: "Handwoven_Bags",

  },
  {
    id: 9,
    description: "Tunisian Crochet Bag Pattern",
    artisan :"Asma",
    category: "products",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
    group: "Handwoven_Bags",
    
  },
  {
    id: 10,
    description: "Straw Basket With Leather Handle",
    artisan :"Mohammed",
    category: "products",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
    group: "Straw_baskets",
    dimension: ['Small : 1m', 'Meduim : 1.5m', 'Big: 2m']
  },
  {
    id: 11,
    description: "Straw basket with Braided Handles",
    artisan :"Aziz",
    category: "products",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
    group: "Straw_baskets",
    dimension: ['Small : 1m', 'Meduim : 1.5m', 'Big: 2m']
  },
  {
    id: 12,
    description: "Hand woven straw basket",
    artisan :"Aziz",
    category: "products",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
    group: "Straw_baskets",
    dimension: ['Small : 1m', 'Meduim : 1.5m', 'Big: 2m']
  },



  // {
  //   id: 13,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p13_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 14,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p14_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 15,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p15_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 16,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p16_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 17,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p17_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 18,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p18_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 19,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p19_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 20,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p20_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 21,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p21_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 22,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p22_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 23,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p23_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  // {
  //   id: 24,
  //   name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
  //   category: "men",
  //   image: p24_img,
  //   new_price: 85.0,
  //   old_price: 120.5,
  // },
  
];

export default all_product;
