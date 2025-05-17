
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  images: string[];
  colors: string[];
  sizes: number[];
  description: string;
  isNewArrival?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: "Air Jordan 1 High Satin Bred",
    name: "Air Jordan 1 High Satin Bred",
    brand: "Nike",
    price: 18999,
    images: ["/IMAGES/JORDAN SatinBred/Jordans.png", "/IMAGES/JORDAN SatinBred/pic1.jpg"],
    colors: ["black", "grey", "white"],
    sizes: [7, 8, 9, 10, 11, 12],
    description: "The Air Jordan 1 High Shadow features a black and grey leather upper with a white midsole and black outsole. This classic colorway is a must-have for any sneaker collector.",
    isFeatured: true
  },
  {
    id: "New Balance 550 Low Topo",
    name: "New Balance 550 Low Top",
    brand: "New Balance",
    price: 21999,
    images: ["/IMAGES/550/550.png"],
    colors: ["white Green"],
    sizes: [7, 8, 9, 10, 11, 12],
    description: "The Air Jordan 1 High Chicago is a legendary silhouette featuring a white and red leather upper with black accents. An iconic colorway that represents the beginning of the Air Jordan legacy.",
    isFeatured: true
  },
  {
    id: "air-jordan-1-high-shadow-2018",
    name: "Air Jordan 1 High “Shadow 2018”",
    brand: "Nike",
    price: 4089,
    images: ["/lovable-uploads/shadow-2018.png"],
    colors: ["black", "grey", "white"],
    sizes: [7, 7.5, 8.5, 9, 10, 11],
    description: "The Air Jordan 1 High Shadow 2018 blends classic black and grey tones with a premium leather finish, reviving a fan-favorite colorway.",
    isFeatured: true,
    isNewArrival: false
  },
  {
    id: "air-jordan-1-high-satin-bred",
    name: "Air Jordan 1 High Satin Bred",
    brand: "Nike",
    price: 3999,
    images: ["/lovable-uploads/satin-bred.png"],
    colors: ["black", "red"],
    sizes: [7, 7.5, 8.5, 9, 10],
    description: "A satin twist on the iconic 'Bred' colorway, this Air Jordan 1 delivers sleek comfort and timeless style.",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "air-jordan-1-retro-high-black-white",
    name: "Air Jordan 1 Retro High “Black/White”",
    brand: "Nike",
    price: 4089,
    images: ["/lovable-uploads/black-white.png"],
    colors: ["black", "white"],
    sizes: [7, 7.5, 8.5, 9, 10],
    description: "Clean and classic, the Air Jordan 1 Retro High in black and white is a versatile staple for sneaker lovers.",
    isFeatured: false,
    isNewArrival: true
  },
  {
    id: "air-jordan-1-retro-high-black-toe",
    name: "Air Jordan 1 Retro High Black Toe",
    brand: "Nike",
    price: 4089,
    images: ["/lovable-uploads/black-toe.png"],
    colors: ["white", "black", "red"],
    sizes: [7, 7.5, 8.5, 9, 10],
    description: "The Black Toe edition of the Air Jordan 1 Retro High features a bold black toe cap with classic red and white contrast.",
    isFeatured: true,
    isNewArrival: false
  },
  {
    id: "air-sacai-vaporwaffle-off-noir",
    name: "Air Sacai x Vaporwaffle Off Noir",
    brand: "Nike",
    price: 4149,
    images: ["/lovable-uploads/sacai-off-noir.png"],
    colors: ["black", "white"],
    sizes: [7, 7.5, 8.5, 9, 10],
    description: "The Sacai x Vaporwaffle Off Noir fuses modern styling with a layered silhouette and rich black tones.",
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: "air-sacai-vaporwaffle-sesame-blue",
    name: "Air Sacai x Vaporwaffle Sesame Blue Void",
    brand: "Nike",
    price: 4189,
    images: ["/lovable-uploads/sacai-sesame-blue.png"],
    colors: ["beige", "blue", "white"],
    sizes: [7, 7.5, 8.5, 9, 10],
    description: "Featuring neutral sesame hues contrasted with vibrant blue, this Vaporwaffle offers a stylish and comfortable ride.",
    isFeatured: false,
    isNewArrival: true
  },
  {
    id: "blazer-low-vintage-77-white-black",
    name: "Blazer Low Vintage 77 “White/Black”",
    brand: "Nike",
    price: 3599,
    images: ["/lovable-uploads/blazer-vintage.png"],
    colors: ["white", "black"],
    sizes: [7, 7.5, 8.5, 9, 10],
    description: "Classic court style meets street flair in the Blazer Low Vintage 77 with its timeless white and black palette.",
    isFeatured: false,
    isNewArrival: false
  },
  {
    id: "converse-all-star-high-black",
    name: "Converse All Star High Ankle “Black”",
    brand: "Converse",
    price: 2089,
    images: ["/lovable-uploads/converse-high-black.png"],
    colors: ["black", "white"],
    sizes: [6.5, 7.5, 8, 9, 9.5, 10.5],
    description: "The classic black high-ankle Converse All Star remains a timeless symbol of individuality and comfort.",
    isFeatured: true,
    isNewArrival: false
  },
  {
    id: "dunk-low-light-iron-orewood-sashiko",
    name: "Dunk Low “Light Iron Orewood Sashiko”",
    brand: "Nike",
    price: 3899,
    images: ["/lovable-uploads/sashiko.png"],
    colors: ["grey", "white", "red"],
    sizes: [7, 7.5, 8.5, 9, 10],
    description: "With detailed Sashiko stitching and neutral tones, this Dunk Low delivers a refined yet artistic sneaker experience.",
    isFeatured: true,
    isNewArrival: true
  }
];
