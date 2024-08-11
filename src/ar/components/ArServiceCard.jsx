import React from 'react';
import { Link } from 'react-router-dom';

function ArServiceCard({ title, description, image }) {
  return (
    <div className="bg-gray-400 p-2 rounded-lg shadow-md">
      <img src={image} alt="" className='rounded-r-full' />
      <h3 className="text-2xl font-bold text-gold-500 mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link to="/ar/services" className="bg-gold-500 text-white px-4 py-2 rounded-md font-bold hover:bg-gold-600">
      اقرأ أكثر
      </Link>
    </div>
  );
}

export default ArServiceCard;
