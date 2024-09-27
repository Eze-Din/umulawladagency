import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Import example team images
import teamMember1 from '../assets/images/exp1.jpg';
import teamMember2 from '../assets/images/exp2.jpg';
import teamMember3 from '../assets/images/exp3.jpg';

function About() {
  return (
    <div className="about-page bg-gray-600" data-aos="fade-left">
      <Helmet>
        <title>About Umulawlad Agency</title>
        <meta name="description" content="Umulawlad Agency provides exceptional services including recruitment, gallery, and more." />
        <meta name="keywords" content="Umulawlad Agency, recruitment, gallery, services, about" />
      </Helmet>
      {/* Hero Section */}
      <div className="hero-section relative bg-cover bg-center h-64">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-gold-500">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-xl">
            We are committed to connecting families with dedicated and skilled domestic workers to meet their household needs.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="container mx-auto py-16 px-4" data-aos="fade-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-500 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gold-500 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To provide reliable and professional domestic employment services, ensuring satisfaction for both clients and employees.
            </p>
          </div>
          <div className="p-6 bg-gray-500 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gold-500 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be the leading agency in Ethiopia for foreign domestic employment, renowned for quality service and ethical practices.
            </p>
          </div>
          <div className="p-6 bg-gray-500 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gold-500 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Integrity and Trust</li>
              <li>Commitment to Excellence</li>
              <li>Respect and Inclusivity</li>
              <li>Client Satisfaction</li>
              <li>Employee Welfare</li>
            </ul>
          </div>
        </div>
      </div>

      {/* History/Story Section */}
      <div className="bg-gray-500 py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gold-500 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6">
              UmelAwlad was founded with the vision to bridge the gap between skilled domestic workers and families in need of their services. With years of experience and a deep understanding of the industry`s dynamics, we are dedicated to fostering a supportive and productive environment for all.
            </p>
            <p className="text-gray-700">
              Our journey started with a small team and a big dream, and over the years, we have grown into a trusted name in the sector, helping numerous families and workers find the perfect match. We believe in creating lasting relationships built on trust, respect, and mutual benefit.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto py-16 px-4 bg-gray-500" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gold-500 mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="team-member text-center bg-white p-6 rounded-lg shadow-md">
            <img src={teamMember1} alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-bold text-gray-800"><Link to="/en/teams/hanan">Hanan Hussen</Link></h3>
            <p className="text-gray-600">Owner</p>
          </div>
          <div className="team-member text-center bg-white p-6 rounded-lg shadow-md">
            <img src={teamMember2} alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-bold text-gray-800"><Link to="/en/teams/abdurezaq">Abdurezaq Akmel</Link></h3>
            <p className="text-gray-600">Agent</p>
          </div>
          <div className="team-member text-center bg-white p-6 rounded-lg shadow-md">
            <img src={teamMember3} alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-bold text-gray-800"><Link to="/en/teams/roman">Roman Akmel</Link></h3>
            <p className="text-gray-600">Manager</p>
          </div>
          <div className="team-member text-center bg-white p-6 rounded-lg shadow-md">
            <img src={teamMember3} alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-bold text-gray-800"><Link to="/en/teams/imamudin">Imamudin Akmel</Link></h3>
            <p className="text-gray-600">Unknown</p>
          </div>
          <div className="team-member text-center bg-white p-6 rounded-lg shadow-md">
            <img src={teamMember3} alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-bold text-gray-800"><Link to="/en/teams/muhammed">Muhammed Seid</Link></h3>
            <p className="text-gray-600">IT Man</p>
          </div>
          <div className="team-member text-center bg-white p-6 rounded-lg shadow-md">
            <img src={teamMember3} alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-bold text-gray-800"><Link to="/en/teams/ezedin">Ezedin Nigussie</Link></h3>
            <p className="text-gray-600">UnKnown</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-600 py-16" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-8">
            We are here to help you with all your domestic employment needs. Contact us today to learn more about our services and how we can assist you.
          </p>
          <Link to="/en/contact" className="bg-gold-600 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-gold-500">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
