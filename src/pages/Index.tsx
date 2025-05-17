
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import NewArrivals from '../components/home/NewArrivals';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [showSlogan, setShowSlogan] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { 
      title: '100% Authentic', 
      description: 'Every product we sell is guaranteed authentic with detailed verification.'
    },
    { 
      title: 'All India Shipping', 
      description: 'We deliver to all corners of India with secure, trackable shipping.'
    },
    { 
      title: 'Expert Curation', 
      description: 'Our team of sneaker enthusiasts selects only the most coveted items.'
    },
  ];

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    const handleScroll = () => {
      // Check if user has scrolled to the slogan section
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight * 0.6;
      
      if (scrollPosition > triggerPosition) {
        setShowSlogan(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger once on initial load too
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(featureInterval);
    };
  }, [features.length]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16">
        <HeroSection />
        <FeaturedProducts />
        
        <div 
          className="py-24 bg-black text-center relative overflow-hidden"
          id="slogan-section"
        >
          {/* Animated background lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hype-red to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hype-red to-transparent"></div>
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-hype-red to-transparent"></div>
            <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-hype-red to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <h2 
              className={`text-white text-3xl md:text-5xl font-heading mb-6 transition-all duration-1000 ${
                showSlogan ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              YOUR HOME FOR <span className="text-hype-red">HYPE</span>
            </h2>
            <p 
              className={`text-gray-400 text-lg max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
                showSlogan ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              We provide premium sneakers and limited-edition footwear for sneaker enthusiasts and collectors.
            </p>
            
            <div 
              className={`flex flex-col md:flex-row gap-8 justify-center mt-16 transition-all duration-1000 delay-500 ${
                showSlogan ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {features.map((feature, idx) => (
                <Card 
                  key={feature.title}
                  className={`bg-black border border-gray-800 hover:border-hype-red transition-all duration-500 ${
                    activeFeature === idx ? 'transform scale-105 border-hype-red' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <NewArrivals />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
