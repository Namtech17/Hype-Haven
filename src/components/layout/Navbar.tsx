
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, ShoppingCart, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-2 bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-md" : "py-4 bg-white dark:bg-black"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group"
          >
            <h1 className="text-2xl font-heading relative">
              <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-hype-red group-hover:to-orange-500 transition-all duration-300">
                HYPE HAVEN
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hype-red group-hover:w-full transition-all duration-300"></span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex space-x-8">
              {['HOME', 'SHOP', 'NEW ARRIVALS', 'CONTACT'].map((item) => {
                const path = item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                const isActive = location.pathname === path;
                
                return (
                  <NavigationMenuItem key={item}>
                    <Link 
                      to={path} 
                      className={cn(
                        "font-medium relative px-2 py-1 transition-all duration-300 hover:text-hype-red",
                        isActive ? "text-hype-red" : "",
                        "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-hype-red after:transition-all after:duration-300",
                        "hover:after:w-full",
                        isActive ? "after:w-full" : ""
                      )}
                    >
                      {item}
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            {/* Social Media Icons */}
            <div 
              className="hidden md:flex items-center space-x-3 mr-4 relative"
              onMouseEnter={() => setShowSocialLinks(true)}
              onMouseLeave={() => setShowSocialLinks(false)}
            >
              <button className="hover:text-hype-red transition-colors p-1" aria-label="Social Media">
                <Instagram size={20} />
              </button>
              
              {/* Social Media Dropdown */}
              {showSocialLinks && (
                <div className="absolute top-full right-0 mt-2 py-3 px-4 w-72 bg-white dark:bg-black rounded-md shadow-lg border border-gray-200 dark:border-gray-800 transition-all z-50">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-bold">Follow Us</h3>
                    <div className="flex space-x-2">
                      <a 
                        href="https://instagram.com/gethypehaven" 
                        target="_blank"
                        className="hover:text-hype-red transition-colors text-gray-700 dark:text-gray-300" 
                        aria-label="Instagram"
                      >
                        <Instagram size={18} />
                      </a>
                      <a 
                        href="#" 
                        className="hover:text-hype-red transition-colors text-gray-700 dark:text-gray-300" 
                        aria-label="Facebook"
                      >
                        <Facebook size={18} />
                      </a>
                      <a 
                        href="#" 
                        className="hover:text-hype-red transition-colors text-gray-700 dark:text-gray-300" 
                        aria-label="Twitter"
                      >
                        <Twitter size={18} />
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800 hover:opacity-80 transition-opacity">
                        <a 
                          href="https://instagram.com/gethypehaven" 
                          target="_blank"
                          className="block w-full h-full"
                        >
                          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                            @hype
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                  <a 
                    href="https://instagram.com/gethypehaven" 
                    target="_blank"
                    className="mt-3 text-xs text-hype-red hover:underline block text-center"
                  >
                    View Instagram
                  </a>
                </div>
              )}
            </div>
            
            <button className="hover:text-hype-red transition-colors p-1 relative group" aria-label="Search">
              <Search size={20} />
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-hype-red group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </button>
            
            <Link to="/cart" className="p-1 relative group" aria-label="Cart">
              <ShoppingCart size={20} className="group-hover:text-hype-red transition-colors" />
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-hype-red group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </Link>
            
            <button 
              className="md:hidden p-1 relative group hover:text-hype-red transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <Menu size={20} />
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-hype-red group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link 
              to="/" 
              className="text-white text-2xl font-heading"
              onClick={() => setIsMenuOpen(false)}
            >
              HYPE HAVEN
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-hype-red transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['HOME', 'SHOP', 'NEW ARRIVALS', 'CONTACT'].map((item) => {
              const path = item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
              return (
                <Link 
                  key={item}
                  to={path} 
                  className="text-white text-2xl font-medium hover:text-hype-red transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-1/4 after:w-0 after:h-0.5 after:bg-hype-red hover:after:w-1/2 after:transition-all after:duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
            
            <div className="flex space-x-6 mt-8">
              <a 
                href="https://instagram.com/gethypehaven" 
                target="_blank"
                className="text-white hover:text-hype-red transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-hype-red transition-colors" 
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-hype-red transition-colors" 
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
