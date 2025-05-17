
import React from 'react';
import { products } from '../data/products';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/home/ProductCard';

const NewArrivals = () => {
  const newArrivalsProducts = products.filter(product => product.isNewArrival);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16">
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center">New Arrivals</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newArrivalsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {newArrivalsProducts.length === 0 && (
            <div className="py-16 text-center">
              <h2 className="text-xl font-bold">No new arrivals at the moment</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Check back soon for new products!
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewArrivals;
