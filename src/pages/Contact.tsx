
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16">
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center">Contact Us</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">WhatsApp</h3>
                  <a 
                    href="https://wa.me/8684017715" 
                    className="text-hype-red hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    +91 8684017715
                  </a>
                </div>
                
                <div>
                  <h3 className="font-bold">Instagram</h3>
                  <a 
                    href="https://instagram.com/gethypehaven" 
                    className="text-hype-red hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    @gethypehaven
                  </a>
                </div>
                
                <div>
                  <h3 className="font-bold">Quick Link</h3>
                  <a 
                    href="https://wa.me/qr/UNSS4XUWPQ26L1" 
                    className="text-hype-red hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    wa.me/qr/UNSS4XUWPQ26L1
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6">Ordering Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold">How to Order</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      DM to Order or use WhatsApp to place your order.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold">Payment</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      No COD available. Payment must be made in advance.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold">Shipping</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      All India Delivery available. Shipping times vary by location.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black p-2 rounded"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black p-2 rounded"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block font-medium mb-1">
                    Phone (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black p-2 rounded"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black p-2 rounded"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-black text-white dark:bg-white dark:text-black py-3 px-8 font-bold hover:bg-hype-red dark:hover:bg-hype-red dark:hover:text-white transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
