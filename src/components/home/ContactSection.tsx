
import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-heading mb-6">How to Order</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">1. Direct Message</h3>
                <p className="text-gray-300">
                  Send us a DM with the sneaker style, size, and your delivery address.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2. WhatsApp Order</h3>
                <p className="text-gray-300">
                  Contact us on WhatsApp for a faster response:
                </p>
                <a 
                  href="https://wa.me/8684017715" 
                  className="text-hype-red hover:underline block mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 8684017715
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">3. Delivery</h3>
                <p className="text-gray-300">
                  We offer All India Delivery. No COD available.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-heading mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              Have questions about our products, orders, or sizing? Get in touch with us.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-1">Follow Us</h3>
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
                <h3 className="font-bold mb-1">Website</h3>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
