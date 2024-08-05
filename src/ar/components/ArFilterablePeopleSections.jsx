// src/components/FilterablePeopleSections.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/outline'; // Import ChevronDownIcon from Heroicons
import expert1Image from '../assets/images/exp1.jpg';
import expert2Image from '../assets/images/exp2.jpg';
import expert3Image from '../assets/images/exp3.jpg';
import per1Pdf from '../assets/pdfs/tigist.pdf'
import WhatsAppIcon from '../assets/images/whatsapp.png';

// Sample data for people (this would typically come from a database or API)
const people = [
  { id: 1, name: 'John Doe', age: '20-30', ages: 23, martial: 'Single', skill: 'House Maid', experience: '2-5 years', language: 'English', religion: 'Christian', photo: expert1Image, pdf: per1Pdf },
  { id: 2, name: 'Jane Smith', age: '31-40', ages: 31, martial: 'Single', skill: 'House Maid', experience: '5-10 years', language: 'Amharic', religion: 'Muslim', photo: expert2Image, pdf: 'https://drive.google.com/file/d/1UxPoIa5ltdnCxiJBuxQn2NLqyx3aDADT/view?usp=sharing' },
  { id: 3, name: 'Eze Din', age: '41-50', ages: 45, martial: 'Married', skill: 'House Maid', experience: '10-20 years', language: 'Arabic', religion: 'Other', photo: expert3Image, pdf: 'https://drive.google.com/file/d/1Q4xbyQcl8jVz4XkanK2jcAlGOPpsWzVL/view?usp=sharing' },
  { id: 4, name: 'John Doe', age: '20-30', ages: 23, martial: 'Single', skill: 'House Maid', experience: '2-5 years', language: 'English', religion: 'Christian', photo: expert1Image, pdf: per1Pdf },
  { id: 5, name: 'Jane Smith', age: '31-40', ages: 31, martial: 'Single', skill: 'House Maid', experience: '5-10 years', language: 'Amharic', religion: 'Muslim', photo: expert2Image, pdf: 'https://drive.google.com/file/d/1UxPoIa5ltdnCxiJBuxQn2NLqyx3aDADT/view?usp=sharing' },
  { id: 6, name: 'Eze Din', age: '41-50', ages: 45, martial: 'Married', skill: 'House Maid', experience: '10-20 years', language: 'Arabic', religion: 'Other', photo: expert3Image, pdf: 'https://drive.google.com/file/d/1Q4xbyQcl8jVz4XkanK2jcAlGOPpsWzVL/view?usp=sharing' },
  // Add more people as needed
];

// Filter options
const ageGroups = ['20-30', '31-40', '41-50'];
const experiences = ['0-2 years', '2-5 years', '5-10 years', '10-20 years'];
const languages = ['English', 'Amharic', 'Arabic', 'French'];
const religions = ['Christian', 'Muslim', 'Other'];

function ArFilterablePeopleSections() {
  const [selectedFilters, setSelectedFilters] = useState({
    age: [],
    experience: [],
    language: [],
    religion: [],
  });

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => {
      const categoryFilters = prev[category];
      const isSelected = categoryFilters.includes(value);
      return {
        ...prev,
        [category]: isSelected
          ? categoryFilters.filter((item) => item !== value)
          : [...categoryFilters, value],
      };
    });
  };

  const filteredPeople = people.filter((person) => {
    return (
      (selectedFilters.age.length === 0 || selectedFilters.age.includes(person.age.toString())) &&
      (selectedFilters.experience.length === 0 || selectedFilters.experience.includes(person.experience)) &&
      (selectedFilters.language.length === 0 || selectedFilters.language.includes(person.language)) &&
      (selectedFilters.religion.length === 0 || selectedFilters.religion.includes(person.religion))
    );
  });

  return (
    <div className="flex flex-col md:flex-row gap-8 px-16">
      {/* Filter Card */}
      <div className="w-full md:w-1/3 bg-gray-600 p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        {/* Age Accordion */}
        <Accordion title="Age">
          {ageGroups.map((age) => (
            <div key={age} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gold-600"
                  checked={selectedFilters.age.includes(age)}
                  onChange={() => handleFilterChange('age', age)}
                />
                <span className="ml-2 text-gold-500 font-bold">{age}</span>
              </label>
            </div>
          ))}
        </Accordion>
        {/* Experience Accordion */}
        <Accordion title="Experience">
          {experiences.map((exp) => (
            <div key={exp} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gold-600"
                  checked={selectedFilters.experience.includes(exp)}
                  onChange={() => handleFilterChange('experience', exp)}
                />
                <span className="ml-2 text-gold-500 font-bold">{exp}</span>
              </label>
            </div>
          ))}
        </Accordion>
        {/* Language Accordion */}
        <Accordion title="Language">
          {languages.map((lang) => (
            <div key={lang} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gold-600"
                  checked={selectedFilters.language.includes(lang)}
                  onChange={() => handleFilterChange('language', lang)}
                />
                <span className="ml-2 text-gold-500 font-bold">{lang}</span>
              </label>
            </div>
          ))}
        </Accordion>
        {/* Religion Accordion */}
        <Accordion title="Religion">
          {religions.map((rel) => (
            <div key={rel} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gold-600"
                  checked={selectedFilters.religion.includes(rel)}
                  onChange={() => handleFilterChange('religion', rel)}
                />
                <span className="ml-2 text-gold-500 font-bold">{rel}</span>
              </label>
            </div>
          ))}
        </Accordion>
      </div>

      {/* People Display */}
      <div className="w-full md:w-2/3">
        {filteredPeople.length > 0 ? (
          filteredPeople.map((person) => (
            <div key={person.id} className="flex flex-col md:flex-row bg-gray-600 p-4 rounded-lg shadow-lg mb-4">
              <div className="md:w-1/3">
                <img src={person.photo} alt={person.name} className="w-full h-auto rounded-lg mb-4 md:mb-0 md:mr-4" />
              </div>
              <div className="md:w-2/3 px-16">
                <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                <p className="text-gold-500 mb-2"><strong>Spoken Language:</strong> {person.language}</p>
                <p className="text-gold-500 mb-2"><strong>Age:</strong> {person.ages}</p>
                <p className="text-gold-500 mb-2"><strong>Martial Status:</strong> {person.martial}</p>
                <p className="text-gold-500 mb-2"><strong>Experience:</strong> {person.experience}</p>
                <p className="text-gold-500 mb-2"><strong>Religion:</strong> {person.religion}</p>
                <p className="text-gold-500"><strong>Skilled As:</strong> {person.skill}</p>
                <a
                  href={`https://wa.me/?text=Hello, I am interested in ${person.name}'s profile.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600"
                >
                  Hire Me
                </a>
                <a
                  href={`${person.pdf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 ml-2"
                >
                  View CV
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gold-500 font-bold">No matching people found.</div>
        )}
        <div className="flex justify-center mt-8">
          <a href="https://chat.whatsapp.com/Grf2FODUxmGLThnMCYHdNE" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-2 text-white bg-gold-500 w-full rounded-full hover:bg-gold-600 font-bold text-center">
          <img src={WhatsAppIcon} alt="WhatsApp" className="h-6 w-6 mr-2 inline-block align-top" />
          المزيد على الواتس اب
          </a>
        </div>
      </div>
    </div>
  );
}

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-gray-800 bg-gold-500 rounded-lg focus:outline-none transition-all duration-300"
      >
        <span>{title}</span>
        <ChevronDownIcon
          className={`h-6 w-6 ${isOpen ? 'transform rotate-180' : ''} text-gray-900 transition-transform duration-300`}
          aria-hidden="true"
        />
      </button>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
}

export default ArFilterablePeopleSections;
