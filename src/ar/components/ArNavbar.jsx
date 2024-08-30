import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logoimg from '../../assets/images/umueng3.png';
import { FaGlobe } from 'react-icons/fa';

function ArNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gold-500 p-1 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
      <img src={logoimg} alt="UmelAwlad Logo" className="h-12 md:h-16 w-auto object-contain" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className="hidden md:flex space-x-4">
          <Link to="/ar/" className="hover:text-yellow-300 px-3">الرئيسية</Link>
          <Link to="/ar/services" className="hover:text-yellow-300">الخدمات</Link>
          <Link to="/ar/recruitment" className="hover:text-yellow-300">التوظيف</Link>
          <Link to="/ar/gallery" className="hover:text-yellow-300">المعرض</Link>
          <Link to="/ar/about" className="hover:text-yellow-300">نبذة عنا</Link>
          <Link to="/ar/contact" className="hover:text-yellow-300">الاتصال بنا</Link>
          <Link to="/en/" className="hover:text-yellow-300 flex items-center"><FaGlobe className="mr-2" /><span>&nbsp;En</span></Link>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-gold-500 p-4">
          <Link to="/ar/" className="block text-center hover:text-yellow-300" onClick={() => setIsOpen(false)}>الرئيسية</Link>
          <Link to="/ar/services" className="block text-center hover:text-yellow-300" onClick={() => setIsOpen(false)}>الخدمات</Link>
          <Link to="/ar/recruitment" className="block text-center hover:text-yellow-300" onClick={() => setIsOpen(false)}>التوظيف</Link>
          <Link to="/ar/gallery" className="block text-center hover:text-yellow-300" onClick={() => setIsOpen(false)}>المعرض</Link>
          <Link to="/ar/about" className="block text-center hover:text-yellow-300" onClick={() => setIsOpen(false)}>نبذة عنا</Link>
          <Link to="/ar/contact" className="block text-center hover:text-yellow-300" onClick={() => setIsOpen(false)}>الاتصال بنا</Link>
          <Link to="/en/" onClick={() => setIsOpen(false)} className="flex hover:text-yellow-300 items-center justify-center" ><FaGlobe className="mr-2" /><span>&nbsp;En</span></Link>
        </div>
      )}
    </nav>
  );
}

export default ArNavbar;
