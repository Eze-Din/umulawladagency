// src/pages/Contact.jsx

import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="contact-page bg-gray-600">
      {/* Hero Section */}
      <div className="hero-section relative bg-cover bg-center h-64" data-aos="fade-left">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-gold-500">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-xl">
            We`re here to help you with any inquiries or support you need. Get in touch with us today!
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto py-16 px-4" data-aos="fade-left">
        <h2 className="text-4xl font-bold text-gold-500 mb-8 text-center">Send Us a Message</h2>
        <ContactForm />
      </div>

      {/* Contact Details Section */}
      <div className="bg-gray-500 py-16 rounded-lg" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gold-500 mb-8">Contact Details</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Address:</strong> Ayer Tena, Addis Ababa, Ethiopia
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Phone:</strong> +251914266446 / +251910616281
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Email:</strong> info@umelawlad.com
          </p>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d778.6854396903276!2d38.69430491375435!3d8.982050503827548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2set!4v1721397763147!5m2!1sen!2set"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Agency Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
