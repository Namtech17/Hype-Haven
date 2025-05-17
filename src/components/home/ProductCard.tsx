
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';
import { Eye, ShoppingCart } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="sneaker-card group transition-all duration-300 hover:-translate-y-2">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="sneaker-image w-full h-full object-cover"
        />
        {product.isNewArrival && (
          <div className="absolute top-2 left-2 bg-hype-red text-white text-xs px-2 py-1 rounded">
            NEW
          </div>
        )}
        
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Link 
              to={`/product/${product.id}`}
              className="bg-white text-black p-3 rounded-full hover:bg-hype-red hover:text-white transition-colors"
              aria-label="View product"
            >
              <Eye className="w-5 h-5" />
            </Link>
            <a 
              href={`https://wa.me/8684017715?text=Hi, I'm interested in ${product.name}. Please let me know if it's available.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-3 rounded-full hover:bg-hype-red hover:text-white transition-colors"
              aria-label="Order via WhatsApp"
            >
              <ShoppingCart className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="p-4 cursor-pointer">
            <h3 className="font-semibold text-base text-black dark:text-white group-hover:text-hype-red transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {product.brand}
            </p>
            <p className="mt-2 font-bold text-black dark:text-white">
              ₹{product.price.toLocaleString()}
            </p>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 p-0 bg-white dark:bg-black shadow-xl rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="p-4">
            <h4 className="font-bold text-base mb-2">{product.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
              {product.description || "Premium sneaker with exceptional comfort and style. Limited edition design for sneaker enthusiasts."}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {product.sizes.map(size => (
                <span key={size} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                  {size}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm font-medium text-hype-red">
                {product.isNewArrival ? 'New Arrival' : 'In Stock'}
              </span>
              <Link 
                to={`/product/${product.id}`}
                className="text-xs font-bold text-black dark:text-white hover:text-hype-red dark:hover:text-hype-red transition-colors"
              >
                View Details →
              </Link>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default ProductCard;
