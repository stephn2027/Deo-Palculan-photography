import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-transparent text-white pt-12 w-full text-center -mb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row sm:flex-col items-end justify-between align-bottom">
          
          <div className="flex mt-4 m-auto">
            <a href="/" className="mr-4 hover:text-gray-400">Home</a>
            <a href="works" className="mr-4 hover:text-gray-400">Portfolio</a>
            <a href="services" className="mr-4 hover:text-gray-400">Services</a>
            <a href="contact" className="mr-4 hover:text-gray-400">Contact</a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-4">
          <p>&copy; 2024 Deo Palculan Photography Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
