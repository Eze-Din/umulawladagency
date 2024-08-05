// src/components/FilterablePeopleSection.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import expert1Image from '../assets/images/exp1.jpg';
import expert2Image from '../assets/images/exp2.jpg';
import expert3Image from '../assets/images/exp3.jpg';
import per1Pdf from '../assets/pdfs/tigist.pdf';

// Sample data for people (this would typically come from a database or API)
const people = [
  { id: 1, name: 'John Doe', age: '20-30', ages: 23, martial: 'غير متزوج', skill: 'خادمة المنزل', experience: '0-2 سنين', language: 'إنجليزي', religion: 'النصراني', photo: expert1Image, pdf: per1Pdf },
  { id: 2, name: 'Jane Smith', age: '31-40', ages: 31, martial: 'غير متزوج', skill: 'خادمة المنزل', experience: '3-5 سنين', language: 'الأمهرية', religion: 'مسلم', photo: expert2Image, pdf: 'https://drive.google.com/file/d/1UxPoIa5ltdnCxiJBuxQn2NLqyx3aDADT/view?usp=sharing' },
  { id: 3, name: 'Eze Din', age: '41-50', ages: 45, martial: 'متزوج', skill: 'خادمة المنزل', experience: '6-10 سنين', language: 'عربي', religion: 'آخر', photo: expert3Image, pdf: 'https://drive.google.com/file/d/1Q4xbyQcl8jVz4XkanK2jcAlGOPpsWzVL/view?usp=sharing' },
  // Add more people as needed
];

const ageGroups = ['20-30', '31-40', '41-50'];
const experiences = ['0-2 سنين', '3-5 سنين', '6-10 سنين', '10+ سنين'];
const languages = ['إنجليزي', 'الأمهرية', 'عربي', 'فرنسي'];
const religions = ['النصراني', 'مسلم', 'آخر'];

function ArFilterablePeopleSection() {
  const [selectedFilters, setSelectedFilters] = useState({
    age: [],
    experience: [],
    language: [],
    religion: [],
  });

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

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

  const toggleFavorite = (personId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(personId)) {
        return prevFavorites.filter((id) => id !== personId);
      } else {
        return [...prevFavorites, personId];
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 px-16">
      {/* Filter Card */}
      <div className="w-full md:w-1/3 bg-gray-600 p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">ترشح</h2>
        <Accordion title="عمر">
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
        <Accordion title="الخبرة">
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
        <Accordion title="اللغة">
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
        <Accordion title="الدين">
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
              <div className="md:w-1/3 relative">
                <img src={person.photo} alt={person.name} className="w-full h-auto rounded-lg mb-4 md:mb-0 md:mr-4" />
                <button
                  onClick={() => toggleFavorite(person.id)}
                  className="absolute top-4 right-4 text-white bg-red-500 p-2 rounded-full"
                >
                  {favorites.includes(person.id) ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
                </button>
              </div>
              <div className="md:w-2/3 px-16">
                <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                <p className="text-gold-500 mb-2"><strong>اللغة المتحدثة:</strong> {person.language}</p>
                <p className="text-gold-500 mb-2"><strong>عمر:</strong> {person.ages}</p>
                <p className="text-gold-500 mb-2"><strong>الحالة الاجتماعية:</strong> {person.martial}</p>
                <p className="text-gold-500 mb-2"><strong>الخبرة:</strong> {person.experience}</p>
                <p className="text-gold-500 mb-2"><strong>الدين:</strong> {person.religion}</p>
                <p className="text-gold-500"><strong>المهارة:</strong> {person.skill}</p>
                <a
                  href={`https://wa.me/251914266446?text=Hello, I am interested in ${person.name}'s profile.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600"
                >
                  استأجرني
                </a> &nbsp;
                <a
                  href={`${person.pdf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 ml-2"
                >
                  السيرة الذاتية
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gold-500 font-bold">لم يتم العثور على أشخاص متطابقين.</div>
        )}
        <div className="flex justify-center mt-8">
          <Link to="/ar/recruitment" className="mt-2 inline-block px-4 py-2 text-white bg-gold-500 w-full rounded-full hover:bg-gold-600 font-bold text-center">
          شاهد المزيد
          </Link>
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

export default ArFilterablePeopleSection;
