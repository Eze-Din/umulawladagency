import React from 'react';
import { Link } from 'react-router-dom';

function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={image} alt="" />
      <h3 className="text-2xl font-bold text-gold-500 mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link to="/en/services" className="bg-gold-500 text-white px-4 py-2 rounded-md font-bold hover:bg-gold-600">
        Read More
      </Link>
    </div>
  );
}

export default ServiceCard;
