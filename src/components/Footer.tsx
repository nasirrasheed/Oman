import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold">MUSCATYACHTCLUB</span>
            </div>
            <p className="text-gray-300 mb-4">
              Experience the finest marine adventures in Oman with our premium yacht tours, dolphin watching, and snorkeling excursions. Your gateway to unforgettable memories on the Arabian Sea.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-cyan-400 transition-colors">Gallery</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-cyan-400 transition-colors">Reviews</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">+968 9999 9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">info@muscatyachtclub.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <span className="text-gray-300">Marina Bandar Al Rowdha, Muscat, Sultanate of Oman</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 MUSCATYACHTCLUB. All rights reserved. | 
            <span className="ml-2">Licensed Marine Adventure Operator - Sultanate of Oman</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;