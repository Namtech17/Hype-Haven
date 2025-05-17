
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { ChevronRight, Star } from 'lucide-react';

const HeroSection = () => {
  // Find a featured product for the hero
  const featuredProduct = products.find(p => p.id === 'Air Jordan 1 High Satin Bred') || products[0];

  const [selectedColor, setSelectedColor] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showRating, setShowRating] = useState(false);

  const colorOptions = [
    { name: 'Purple', class: 'bg-purple-600' },
    { name: 'Green', class: 'bg-green-500' },
    { name: 'Red', class: 'bg-red-500' },
  ];

  useEffect(() => {
    setIsLoaded(true);

    const timer = setTimeout(() => {
      setShowRating(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-black min-h-[90vh] relative flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-hype-red opacity-20"
        style={{
          backgroundSize: '200% 200%',
          animation: 'gradient-animation 15s ease infinite',
        }}
      ></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-16 lg:py-0 relative z-10">
        <div className={`flex flex-col justify-center pt-16 lg:pt-0 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="flex items-center mb-4">
            <span className="text-hype-red text-sm font-bold mr-2">FEATURED</span>
            <div className="h-px bg-hype-red flex-grow opacity-50"></div>
          </div>

          <h1 className="text-4xl md:text-7xl text-white mb-4 leading-tight relative">
            <span className="text-hype-red">Satin</span>Bred
            <div className={`absolute -right-3 top-0 transition-all duration-700 ${showRating ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-hype-red text-white text-xs px-2 py-1 rounded-full flex items-center">
                <Star className="w-3 h-3 fill-white stroke-none mr-1" />
                <span>4.9</span>
              </div>
            </div>
          </h1>

          <p className="text-white text-lg md:text-xl uppercase tracking-widest mb-2">
            Basketball Shoes
          </p>
          <p className="text-white/80 text-sm md:text-base mb-6 max-w-lg">
            Inspired by the design of the latest Air Jordan game shoe,
            the Jordan Jumpman 2021 helps up-and-coming players level up their game.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <p className="text-hype-red text-3xl font-bold">
              ₹{featuredProduct.price.toLocaleString()}
            </p>

            <div className="hidden md:flex items-center ml-4">
              <div className="w-px h-10 bg-gray-700 mr-4"></div>
              <span className="text-white text-sm">
                <span className="text-hype-red font-bold">250+</span> sold this week
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-6">
            {/* Size pills */}
            <div>
              <span className="text-white/60 text-xs uppercase tracking-widest mb-2 block">Available Sizes</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {featuredProduct.sizes.map(size => (
                  <div
                    key={size}
                    className="w-10 h-8 flex items-center justify-center border border-white/20 text-white/80 text-sm hover:text-white hover:border-white/60 transition-colors cursor-pointer"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row mt-6 gap-4">
              <Link
                to={`/product/${featuredProduct.id}`}
                className="bg-white text-black border border-white px-8 py-3 font-bold hover:bg-hype-red hover:border-hype-red hover:text-white transition-colors duration-300 text-center flex items-center justify-center gap-2 group"
              >
                EXPLORE NOW
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/8684017715"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white border border-white px-8 py-3 font-bold hover:border-hype-red hover:text-hype-red transition-colors duration-300 text-center relative overflow-hidden group"
              >
                <span className="relative z-10">WHATSAPP ORDER</span>
                <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </div>
          </div>
        </div>
        <div className={`flex items-center justify-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative w-full h-full max-h-[500px] animate-float">
            <img
              src={featuredProduct.images[0]}
              alt={featuredProduct.name}
              className="object-contain w-full h-full drop-shadow-[0_0_30px_rgba(255,51,51,0.3)]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Color selector dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {colorOptions.map((color, index) => (
          <button
            key={color.name}
            className={`w-8 h-8 ${color.class} rounded-full border-2 ${selectedColor === index ? 'border-hype-red ring-2 ring-hype-red scale-110' : 'border-white'} transition-all duration-300 hover:scale-110`}
            onClick={() => setSelectedColor(index)}
            aria-label={`Select ${color.name} color`}
          ></button>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;
