
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-heading mb-4 relative inline-block">
              HYPE HAVEN
              <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-hype-red"></span>
            </h3>
            <p className="text-gray-400 mb-4">Your Home for Hype</p>
            <p className="text-gray-400">Premium Sneakers and Limited-Edition Footwear</p>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://instagram.com/gethypehaven" 
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200" 
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-hype-red"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors relative group">
                  Shop
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-400 hover:text-white transition-colors relative group">
                  New Arrivals
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-hype-red"></span>
            </h3>
            <p className="text-gray-400 mb-2 hover:text-white transition-colors cursor-pointer">WhatsApp: +91 8684017715</p>
            <p className="text-gray-400 mb-2 hover:text-white transition-colors cursor-pointer">Instagram: @gethypehaven</p>
            <p className="text-gray-400">All India Delivery Available</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Instagram
              <span className="absolute -bottom-1 left-0 w-1/3 h-0.5 bg-hype-red"></span>
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <a 
                  key={i}
                  href="https://instagram.com/gethypehaven" 
                  target="_blank"
                  className="aspect-square bg-gray-800 rounded-sm overflow-hidden hover:opacity-80 transition-opacity flex items-center justify-center text-xs text-gray-500"
                >
                  @hype
                </a>
              ))}
            </div>
            <a 
              href="https://instagram.com/gethypehaven" 
              target="_blank" 
              className="mt-4 text-sm inline-block text-hype-red hover:underline"
            >
              Follow us on Instagram
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Hype Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
