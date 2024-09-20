import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import expert1Image from '../assets/images/exp1.jpg';
import expert2Image from '../assets/images/exp2.jpg';
import expert3Image from '../assets/images/exp3.jpg';
import per1Pdf from '../assets/pdfs/tigist.pdf';

const people = [
  { id: 1, name: 'John Doe', age: '20-30', ages: 23, martial: 'Single', skill: 'House Maid', experience: '2-5 years', language: 'English', religion: 'Christian', photo: expert1Image, pdf: per1Pdf },
  { id: 2, name: 'Jane Smith', age: '31-40', ages: 31, martial: 'Single', skill: 'House Maid', experience: '5-10 years', language: 'Amharic', religion: 'Muslim', photo: expert2Image, pdf: 'https://drive.google.com/file/d/1UxPoIa5ltdnCxiJBuxQn2NLqyx3aDADT/view?usp=sharing' },
  { id: 3, name: 'Eze Din', age: '41-50', ages: 45, martial: 'Married', skill: 'House Maid', experience: '10-20 years', language: 'Arabic', religion: 'Other', photo: expert3Image, pdf: 'https://drive.google.com/file/d/1Q4xbyQcl8jVz4XkanK2jcAlGOPpsWzVL/view?usp=sharing' },
];

const ageGroups = ['20-30', '31-40', '41-50'];
const experiences = ['0-2 years', '2-5 years', '5-10 years', '10+ years'];
const languages = ['English', 'Amharic', 'Arabic', 'French'];
const religions = ['Christian', 'Muslim', 'Other'];

function FilterablePeopleSection() {
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

  const clearFilters = () => {
    setSelectedFilters({
      age: '',
      experience: '',
      language: '',
      religion: '',
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
    <div className="flex flex-col md:flex-row gap-4 px-4 md:px-8 lg:px-16 py-8">
      {/* Filter Card */}
      <div className="w-full md:w-1/3 bg-gray-600 dark:bg-gray-700 p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-gold-600 dark:text-gold-400">Filters</h2>
        <Accordion title="Age">
          {ageGroups.map((age) => (
            <div key={age} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gold-600 dark:text-gold-400"
                  checked={selectedFilters.age.includes(age)}
                  onChange={() => handleFilterChange('age', age)}
                />
                <span className="ml-2 text-gold-600 dark:text-gold-400">{age}</span>
              </label>
            </div>
          ))}
        </Accordion>
        <Accordion title="Experience">
          {experiences.map((exp) => (
            <div key={exp} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gold-600 dark:text-gold-400"
                  checked={selectedFilters.experience.includes(exp)}
                  onChange={() => handleFilterChange('experience', exp)}
                />
                <span className="ml-2 text-gold-600 dark:text-gold-400">{exp}</span>
              </label>
            </div>
          ))}
        </Accordion>
        <Accordion title="Language">
          {languages.map((lang) => (
            <div key={lang} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gold-600 dark:text-gold-400"
                  checked={selectedFilters.language.includes(lang)}
                  onChange={() => handleFilterChange('language', lang)}
                />
                <span className="ml-2 text-gold-600 dark:text-gold-400">{lang}</span>
              </label>
            </div>
          ))}
        </Accordion>
        <Accordion title="Religion">
          {religions.map((rel) => (
            <div key={rel} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gold-600 dark:text-gold-400"
                  checked={selectedFilters.religion.includes(rel)}
                  onChange={() => handleFilterChange('religion', rel)}
                />
                <span className="ml-2 text-gold-600 dark:text-gold-400">{rel}</span>
              </label>
            </div>
          ))}
        </Accordion>
      </div>

      {/* People Display */}
      <div className="w-full md:w-2/3">
        {/* Clear Selection Button */}
        <div className="text-white mt-2">
          <button
            onClick={clearFilters}
            className=""
          >
            Clear Selection
          </button>
        </div>
        {filteredPeople.length > 0 ? (
          filteredPeople.map((person) => (
            <Accordion key={person.id} title={person.name}>
              <div className="flex flex-col md:flex-row bg-gray-600 dark:bg-gray-700 p-4 rounded-lg shadow-lg mb-4">
                <div className="md:w-1/3 relative">
                  <img src={person.photo} alt={person.name} className="w-full h-auto rounded-lg mb-4 md:mb-0 md:mr-4" />
                  <button
                    onClick={() => toggleFavorite(person.id)}
                    className="absolute top-4 right-4 text-white bg-red-500 p-2 rounded-full"
                  >
                    {favorites.includes(person.id) ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
                  </button>
                </div>
                <div className="md:w-2/3 px-4">
                  <p className="text-gold-600 dark:text-gold-400 mb-2"><strong>Spoken Language:</strong> {person.language}</p>
                  <p className="text-gold-600 dark:text-gold-400 mb-2"><strong>Age:</strong> {person.ages}</p>
                  <p className="text-gold-600 dark:text-gold-400 mb-2"><strong>Martial Status:</strong> {person.martial}</p>
                  <p className="text-gold-600 dark:text-gold-400 mb-2"><strong>Experience:</strong> {person.experience}</p>
                  <p className="text-gold-600 dark:text-gold-400 mb-2"><strong>Religion:</strong> {person.religion}</p>
                  <p className="text-gold-600 dark:text-gold-400"><strong>Skilled As:</strong> {person.skill}</p>
                  <a
                    href={`https://wa.me/251914266446?text=Hello, I am interested in ${person.name}'s profile.`}
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
            </Accordion>
          ))
        ) : (
          <div className="text-center text-gold-600 dark:text-gold-400 font-bold">No matching people found.</div>
        )}
        <div className="flex justify-center mt-8">
          <Link to="/en/recruitment" className="mt-2 inline-block px-4 py-2 text-white bg-gray-800 w-full rounded-full hover:bg-gold-700 font-bold text-center">
            See More
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
        className="flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-gray-900 bg-gray-700 dark:bg-gold-400 rounded-lg focus:outline-none transition-all duration-300"
      >
        <span>{title}</span>
        <ChevronDownIcon
          className={`h-6 w-6 ${isOpen ? 'transform rotate-180' : ''} transition-transform duration-300`}
          aria-hidden="true"
        />
      </button>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
}

export default FilterablePeopleSection;
