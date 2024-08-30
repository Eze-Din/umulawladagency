// src/pages/Services.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// Example service images, replace these with actual paths
import serviceImage1 from '../assets/images/followup.jpg';
import serviceImage2 from '../assets/images/health.png';
import serviceImage3 from '../assets/images/multiple.jpeg';
import serviceImage4 from '../assets/images/contract.jpeg';

// Services data
const servicesData = [
  {
    title: 'Claim FollowUp',
    description: (
      <div>
        <p>
          Our Claim FollowUp service ensures that any claims or issues related to the employees recruited through our agency are addressed promptly and efficiently. This service includes:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Regular Monitoring:</strong> Ongoing supervision of employee status and performance to identify potential issues early.</li>
          <li><strong>Issue Resolution:</strong> Providing mediation and support to resolve any conflicts or misunderstandings between employers and employees.</li>
          <li><strong>Claim Management:</strong> Assisting with the management of claims related to employee misconduct, absenteeism, or other issues.</li>
        </ul>
        <p className="mt-2">
          By offering this service, we help maintain smooth and positive relationships between employers and employees, ensuring both parties are satisfied with the employment arrangement.
        </p>
      </div>
    ),
    image: serviceImage1,
  },
  {
    title: 'Health Insurance',
    description: (
      <div>
        <p>
          Our Health Insurance service ensures that all employees recruited through our agency have access to comprehensive health insurance coverage. This service includes:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Coverage for Medical Expenses:</strong> Including hospitalization, medication, and routine check-ups.</li>
          <li><strong>Emergency Services:</strong> Immediate access to healthcare services in case of emergencies.</li>
          <li><strong>Regular Health Checkups:</strong> Ensuring ongoing health monitoring for employees.</li>
        </ul>
        <p className="mt-2">
          With this service, employers can ensure the well-being of their employees, leading to a healthier and more productive workforce.
        </p>
      </div>
    ),
    image: serviceImage2,
  },
  {
    title: 'Multiple Countries',
    description: (
      <div>
        <p>
          Our agency proudly offers services across multiple countries, ensuring that our clients receive consistent and high-quality support, no matter their location. Currently, we are operational in the following countries:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Kingdom of Saudi Arabia:</strong> Providing comprehensive recruitment solutions tailored to the needs of Saudi employers.</li>
          <li><strong>United Arab Emirates:</strong> Facilitating the hiring of skilled workers and ensuring legal compliance with UAE labor laws.</li>
          <li><strong>Jordan:</strong> Offering recruitment services that cater to both local and expatriate communities in Jordan.</li>
        </ul>
        <p className="mt-2">
          We are continuously expanding our reach to new countries, aiming to offer our high-standard recruitment services worldwide. Stay tuned as we add more locations to our network!
        </p>
      </div>
    ),
    image: serviceImage3,
  },
  {
    title: 'Flexible Contracts',
    description: (
      <div>
        <p>
          Our agency understands that every client has unique needs and circumstances. That`s why we offer flexible contract options designed to suit a variety of situations. Our contracts are created with the following features:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Customized Duration:</strong> Choose a contract length that fits your needs, from short-term to long-term engagements.
          </li>
          <li>
            <strong>Adjustable Terms:</strong> Our contracts allow for adjustments in terms of services provided, payment plans, and other key factors, ensuring maximum convenience.
          </li>
          <li>
            <strong>No Hidden Fees:</strong> Transparent pricing and no hidden charges so you know exactly what you are paying for.
          </li>
        </ul>
        <p className="mt-2">
          Whether you need a temporary solution or a long-term partnership, our flexible contracts provide you with the <strong>freedom</strong> to choose the terms that work best for you. Get in touch with us to learn more about how we can tailor a contract to your specific requirements.
        </p>
      </div>
    ),
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
            <div className="text-gray-700 mb-4">{service.description}</div>
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
