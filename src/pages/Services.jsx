// src/pages/Services.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// Example service images, replace these with actual paths
import serviceImage1 from '../assets/images/service1.jpeg';
import serviceImage2 from '../assets/images/service2.jpeg';
import serviceImage3 from '../assets/images/service3.jpeg';
import serviceImage4 from '../assets/images/service4.jpeg';

// Example services data
const servicesData = [
  {
    title: 'Service 1',
    description: 'Detailed description of Service 1: We offer comprehensive support in hiring foreign domestic workers, ensuring all legal and logistical aspects are handled seamlessly.',
    image: serviceImage1,
  },
  {
    title: 'Service 2',
    description: 'Detailed description of Service 2: Our team assists in training and skill development for domestic workers to match the requirements of employers.',
    image: serviceImage2,
  },
  {
    title: 'Service 3',
    description: 'Detailed description of Service 3: We provide continuous support and follow-up to ensure a smooth transition and satisfactory employment for all parties involved.',
    image: serviceImage3,
  },
  {
    title: 'Service 4',
    description: 'Detailed description of Service 4: Our services extend to handling repatriation processes and managing any issues that arise during employment.',
    image: serviceImage4,
  },
];

function Services() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-gold-500 mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-gray-500 rounded-lg shadow-md p-6">
            <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-t-md mb-4" />
            <h2 className="text-2xl font-bold text-gold-500 mb-2">{service.title}</h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/" className="bg-gold-500 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-gold-600">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Services;
