import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 w-full mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">Fashion Factory</h1>
          <p className="text-sm">
            Your one-stop shop for the latest trends and timeless styles.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Categories</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Men's Clothing</a></li>
            <li><a href="#" className="hover:text-white">Women's Clothing</a></li>
            <li><a href="#" className="hover:text-white">Accessories</a></li>
            <li><a href="#" className="hover:text-white">Footwear</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Useful Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>Email: support@fashionfactory.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Mumbai, India</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        © 2025 Fashion Factory. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
