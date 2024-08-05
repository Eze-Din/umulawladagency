import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import FontAwesome icons
import logo from '../assets/images/umueng3.png'; // Adjust the path to your logo image

const Footer = () => {
  return (
    <footer className=' bg-gray-800'>
      <div className="container mx-auto px-4 text-center">
        
        {/* Centered Logo and Motto */}
        <div className="mb-8">
          <a href="/en"><img src={logo} alt="UmelAwlad Logo" className="h-16 mx-auto mb-4 w-96" /></a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4">Quick Links</h3> {/* Quick links title */}
          <ul className="flex flex-wrap justify-center text-white">
            <li className="mb-2 px-4"><a href="/en" className="underline hover:text-gray-400">Home</a></li> {/* Home link */}
            <li className="mb-2 px-4"><a href="/en/gallery" className="underline hover:text-gray-400">Gallery</a></li> {/* Gallery link */}
            <li className="mb-2 px-4"><a href="/en/about" className="underline hover:text-gray-400">About</a></li> {/* About link */}
            <li className="mb-2 px-4"><a href="/en/contact" className="underline hover:text-gray-400">Contact</a></li> {/* Contact link */}
            <li className="mb-2 px-4"><a href="/en/services" className="underline hover:text-gray-400">Services</a></li> {/* Services link */}
            <li className="mb-2 px-4"><a href="/en/recruitment" className="underline hover:text-gray-400">Recruitment</a></li> {/* Recruitment link */}
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
