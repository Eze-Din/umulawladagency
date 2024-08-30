// src/pages/Recruitment.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// Example recruitment process image, replace with actual path
import recruitmentImage from '../assets/images/recruitment.png';
import FilterablePeopleSections from '../components/FilterablePeopleSections';

function Recruitment() {
  return (
    <div className="mx-auto px-4">
      <div className="rounded-3xl shadow-lg overflow-hidden">
        <img
          src={recruitmentImage}
          alt="Recruitment Process"
          className="w-full h-64"
        />
        <div className="p-6">
          <h2 className="text-3xl text-center font-bold text-gold-500 mb-4">Our Recruitment Process</h2>
          <p className="mb-4">
            At UmelAwlad, we have a streamlined recruitment process to ensure that we find the best candidates for your needs.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Initial Consultation: Understanding your requirements and expectations.</li>
            <li>Candidate Sourcing: Identifying potential candidates through various channels.</li>
            <li>Screening and Shortlisting: Conducting preliminary interviews and background checks.</li>
            <li>Client Interviews: Arranging interviews between clients and shortlisted candidates.</li>
            <li>Final Selection: Assisting in the final decision-making process.</li>
            <li>Onboarding: Facilitating the smooth integration of the chosen candidate.</li>
            <li>Follow-Up: Continuous support and feedback collection after placement.</li>
          </ul>
          <ul className="list-disc list-inside mb-4">
            <li>Documentation: Ensuring all necessary legal and administrative paperwork is completed.</li>
            <li>Training: Providing any required training or orientation for the candidate.</li>
            <li>Deployment: Coordinating the logistics of the candidate’s travel and accommodation.</li>
            <li>Feedback Collection: Gathering feedback from both the employer and the candidate to improve our services.</li>
            <li>Support: Offering ongoing support to resolve any issues that may arise during the employment period.</li>
          </ul>
        </div>
      </div>
      <h2 className="text-3xl text-center font-bold text-gold-500 mt-4 mb-4">Filter Your Desire</h2>
      <FilterablePeopleSections/>
      <div className="flex justify-center mt-8">
        <Link to="/" className="bg-gold-500 text-white px-3 py-1 mb-2 rounded-md text-lg hover:bg-gold-600">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Recruitment;
