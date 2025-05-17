
import React from 'react';
import { products } from '../../data/products';
import ProductCard from './ProductCard';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const newArrivals = products.filter(product => product.isNewArrival);
  
  return (
    <section className="py-20 bg-hype-light-gray dark:bg-hype-dark">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading">New Arrivals</h2>
          <Link to="/new-arrivals" className="flex items-center text-hype-red hover:underline font-bold group">
            View All
            <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {newArrivals.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {newArrivals.map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end mt-6 gap-2">
              <CarouselPrevious className="static transform-none h-10 w-10 mr-2 bg-black hover:bg-hype-red text-white border-none" />
              <CarouselNext className="static transform-none h-10 w-10 bg-black hover:bg-hype-red text-white border-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
