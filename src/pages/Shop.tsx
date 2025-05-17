
import React, { useState } from 'react';
import { products } from '../data/products';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/home/ProductCard';
import { ChevronDown } from 'lucide-react';

const Shop = () => {
  const [filterBrand, setFilterBrand] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('default');
  const [showFilters, setShowFilters] = useState(false);

  const brands = [...new Set(products.map(p => p.brand))];

  const filteredProducts = products.filter(product => {
    if (filterBrand && product.brand !== filterBrand) return false;
    return true;
  });
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16">
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center">Shop All Sneakers</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center mb-4 md:mb-0 font-medium"
            >
              Filters <ChevronDown className="ml-2 w-4 h-4" />
            </button>
            
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-sm">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-black"
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          {showFilters && (
            <div className="mb-8 p-4 border border-gray-200 dark:border-gray-800 rounded">
              <h3 className="text-lg font-semibold mb-4">Brands</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setFilterBrand(null)}
                  className={`px-3 py-1 text-sm rounded border ${!filterBrand ? 'bg-black text-white dark:bg-white dark:text-black' : 'border-gray-300'}`}
                >
                  All
                </button>
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => setFilterBrand(brand === filterBrand ? null : brand)}
                    className={`px-3 py-1 text-sm rounded border ${brand === filterBrand ? 'bg-black text-white dark:bg-white dark:text-black' : 'border-gray-300'}`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {sortedProducts.length === 0 && (
            <div className="py-16 text-center">
              <h2 className="text-xl font-bold">No products found</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Try changing your filters or check back later for new arrivals.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
