import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/images/umueng3.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=' bg-gray-800'>
      <div className="container mx-auto px-4 text-center">
        
        {/* Centered Logo and Motto */}
        <div className="mb-8">
          <Link to="/en"><img src={logo} alt="UmelAwlad Logo" className="h-16 mx-auto mb-4 w-96" /></Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4">Quick Links</h3> {/* Quick links title */}
          <ul className="flex flex-wrap justify-center text-white">
            <li className="mb-2 px-4"><Link to="/en" className="underline hover:text-gray-400">Home</Link></li> {/* Home link */}
            <li className="mb-2 px-4"><Link to="/en/gallery" className="underline hover:text-gray-400">Gallery</Link></li> {/* Gallery link */}
            <li className="mb-2 px-4"><Link to="/en/about" className="underline hover:text-gray-400">About</Link></li> {/* About link */}
            <li className="mb-2 px-4"><Link to="/en/contact" className="underline hover:text-gray-400">Contact</Link></li> {/* Contact link */}
            <li className="mb-2 px-4"><Link to="/en/services" className="underline hover:text-gray-400">Services</Link></li> {/* Services link */}
            <li className="mb-2 px-4"><Link to="/en/recruitment" className="underline hover:text-gray-400">Recruitment</Link></li> {/* Recruitment link */}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center bg-gray-900">
        
        {/* Left Side: All Rights Reserved */}
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <p className="text-sm text-white font-bold md:mr-4">&copy; 2024 UmelAwlad. All rights reserved.</p> {/* All rights reserved text */}
          {/*<p className="text-sm text-white">Developed by <a href="https://ezedin.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400 underline">Ezedin</a></p>*/}
        </div>

        <div className="flex items-center justify-center bg-gray-900">
          <a
            href="https://ezedin.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base font-medium text-white bg-blue-1000 hover:bg-blue-600 transition-colors px-4 py-2 rounded-full shadow-lg"
          >
            Built by Ezedin - View Portfolio
          </a>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex justify-center mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400 mx-2">
            <FaFacebook size={24} /> {/* Facebook icon */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400 mx-2">
            <FaTwitter size={24} /> {/* Twitter icon */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400 mx-2">
            <FaInstagram size={24} /> {/* Instagram icon */}
          </a>
        </div>
      </div>
    </footer>  
  );
};

export default Footer;
