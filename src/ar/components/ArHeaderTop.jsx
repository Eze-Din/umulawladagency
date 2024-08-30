// src/components/HeaderTop.jsx

import React from 'react';
import WhatsAppIcon from '../../assets/images/whatsapp.png';

function ArHeaderTop() {
  return (
    <div className="bg-gray-600 text-white p-1 flex justify-between items-center hidden md:flex">
      <div className="text-gold-500 font-bold text-xl">
      مكتب أم الأولاد للإستقدام
      </div>

      {/* Right-side content */}
      <div className="flex items-center space-x-4 text-gold-500">
        <span>اتصل بنا: 446 266 914 251+</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>البريد الإلكتروني: info@umulawlad.com</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://wa.me/251914266446" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition duration-300">
          <img src={WhatsAppIcon} alt="WhatsApp" className="h-5 w-5 mr-2" />
          <span className='font-bold px-1'>واتساب</span>
        </a>
      </div>
    </div>
  );
}

export default ArHeaderTop;
