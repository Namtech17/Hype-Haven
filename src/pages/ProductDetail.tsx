import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Eye, Share2, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductViewer from '../components/product/ProductViewer';
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSwipeable } from 'react-swipeable';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [view, setView] = useState<'image' | '3d'>('image');

  // Swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setActiveImageIndex(prev => Math.min(prev + 1, product?.images.length - 1 || 0)),
    onSwipedRight: () => setActiveImageIndex(prev => Math.max(prev - 1, 0)),
    trackMouse: true
  });

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (view === 'image' && product?.images.length) {
        setActiveImageIndex(prev => (prev + 1) % product.images.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [product?.images.length, view]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow mt-16 flex items-center justify-center">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold">Product Not Found</h1>
            <a href="/" className="text-hype-red hover:underline mt-4 inline-block">
              Return to Home
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSizeSelect = (size: number) => {
    setSelectedSize(size);
    toast.success(`Size ${size} selected`);
  };

  const handleAddToWishlist = () => {
    toast.success(`${product.name} added to wishlist`);
  };

  const handleShareProduct = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image/3D View */}
            <div className="space-y-4">
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden relative">
                <Tabs defaultValue="image" className="w-full" onValueChange={(value) => setView(value as 'image' | '3d')}>
                  <div className="absolute top-4 right-4 z-10">
                    <TabsList className="bg-black/50 backdrop-blur-sm">
                      <TabsTrigger value="image">2D View</TabsTrigger>
                      <TabsTrigger value="3d">3D View</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="image" className="m-0 relative">
                    <div {...swipeHandlers}>
                      <img
                        src={product.images[activeImageIndex]}
                        alt={product.name}
                        className="w-full h-[400px] object-contain object-center transition-all duration-500"
                      />
                    </div>

                    {/* Left Arrow */}
                    {activeImageIndex > 0 && (
                      <button
                        onClick={() => setActiveImageIndex(prev => Math.max(prev - 1, 0))}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                    )}

                    {/* Right Arrow */}
                    {activeImageIndex < product.images.length - 1 && (
                      <button
                        onClick={() => setActiveImageIndex(prev => Math.min(prev + 1, product.images.length - 1))}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    )}
                  </TabsContent>

                  <TabsContent value="3d" className="m-0">
                    <ProductViewer productName={product.name} />
                  </TabsContent>
                </Tabs>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveImageIndex(index);
                        setView('image');
                      }}
                      className={`w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${activeImageIndex === index && view === 'image'
                          ? 'border-black dark:border-white'
                          : 'border-transparent'
                        }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} thumbnail ${index}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">{product.brand}</p>
                <div className="mt-4">
                  <p className="text-3xl font-bold">₹{product.price.toLocaleString()}</p>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-bold mb-3">Description</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {product.description}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-bold mb-3">Select Size</h2>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`
                        w-14 h-10 flex items-center justify-center border
                        ${selectedSize === size
                          ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                          : 'bg-transparent text-black dark:text-white border-gray-300'}
                        hover:border-black dark:hover:border-white transition-colors
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={`https://wa.me/8684017715?text=Hi, I'm interested in ${product.name} size ${selectedSize || '[size]'}. Please let me know if it's available.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white dark:bg-white dark:text-black px-8 py-3 text-center font-bold hover:bg-hype-red dark:hover:bg-hype-red dark:hover:text-white transition-colors flex-1"
                >
                  ORDER VIA WHATSAPP
                </a>
                <button
                  onClick={handleAddToWishlist}
                  className="border border-black dark:border-white p-3 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart className="w-5 h-5" />
                </button>
                <button
                  onClick={handleShareProduct}
                  className="border border-black dark:border-white p-3 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  aria-label="Share product"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="flex items-center">
                  <span className="text-sm font-medium">• 100% Authentic</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium">• All India Shipping</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium">• DM to Order</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
