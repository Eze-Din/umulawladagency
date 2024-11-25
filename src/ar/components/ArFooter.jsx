import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import FontAwesome icons
import logo from '../../assets/images/umueng3.png'; // Adjust the path to your logo image

const ArFooter = () => {
  return (
    <footer className=' bg-gray-800'>
      <div className="container mx-auto px-4 text-center">
        
        {/* Centered Logo and Motto */}
        <div className="mb-8">
          <Link to="/ar"><img src={logo} alt="UmelAwlad Logo" className="h-16 mx-auto mb-4 w-96" /></Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4">روابط سريعة</h3> {/* Quick links title */}
          <div className="flex flex-wrap justify-center text-white">
            <Link to="/ar" className="underline hover:text-gray-400 mb-2 px-4">الرئيسية</Link>{/* Home link */}
            <Link to="/ar/gallery" className="underline hover:text-gray-400 mb-2 px-4">المعرض</Link>
            <Link to="/ar/about" className="underline hover:text-gray-400 mb-2 px-4">نبذة عنا</Link>
            <Link to="/ar/contact" className="underline hover:text-gray-400 mb-2 px-4">الاتصال بنا</Link>
            <Link to="/ar/services" className="underline hover:text-gray-400 mb-2 px-4">الخدمات</Link>
            <Link to="/ar/recruitment" className="underline hover:text-gray-400 mb-2 px-4">التوظيف</Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center bg-gray-900">
        
        {/* Left Side: All Rights Reserved */}
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <p className="text-sm text-white font-bold md:mr-4">&copy; 2024 أم أولاد. جميع الحقوق محفوظة. </p> {/* All rights reserved text */}
          {/*<p className="text-sm text-white">Developed by <a href="https://ezedin.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400 underline">Ezedin</a></p>*/}
        </div>

        <div className="flex items-center justify-center bg-gray-900">
          <a
            href="https://ezedin.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base font-medium text-white bg-blue-1000 hover:bg-blue-600 transition-colors px-4 py-2 rounded-full shadow-lg"
          >
            بناه عز الدين - عرض المحفظة
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

export default ArFooter;
