import React, { useState } from 'react';
import expert1Image from '../assets/images/exp1.jpg';
import expert2Image from '../assets/images/exp2.jpg';
import expert3Image from '../assets/images/exp3.jpg';
import per1Pdf from '../assets/pdfs/tigist.pdf';
import WhatsAppIcon from '../assets/images/whatsapp.png';

// Sample data for people (this would typically come from a database or API)
const people = [
  { id: 1, name: 'John Doe', passport: 'EP8544781', age: '20-30', ages: 23, martial: 'Single', skill: 'House Maid', experience: '2-5 years', language: 'English', religion: 'Christian', photo: expert1Image, pdf: per1Pdf },
  { id: 2, name: 'Jane Smith', passport: 'EP8544782', age: '31-40', ages: 31, martial: 'Single', skill: 'House Maid', experience: '5-10 years', language: 'Amharic', religion: 'Muslim', photo: expert2Image, pdf: 'https://drive.google.com/file/d/1UxPoIa5ltdnCxiJBuxQn2NLqyx3aDADT/view?usp=sharing' },
  { id: 3, name: 'Eze Din', passport: 'EP8544783', age: '41-50', ages: 45, martial: 'Married', skill: 'House Maid', experience: '10-20 years', language: 'Arabic', religion: 'Other', photo: expert3Image, pdf: 'https://drive.google.com/file/d/1Q4xbyQcl8jVz4XkanK2jcAlGOPpsWzVL/view?usp=sharing' },
  { id: 4, name: 'Mame', passport: 'EP8544784', age: '20-30', ages: 27, martial: 'Married', skill: 'House Maid', experience: '10-20 years', language: 'Arabic', religion: 'Other', photo: expert2Image, pdf: 'https://drive.google.com/file/d/1Q4xbyQcl8jVz4XkanK2jcAlGOPpsWzVL/view?usp=sharing' },
  { id: 5, name: 'Hanan', passport: 'EP8544785', age: '20-30', ages: 29, martial: 'Married', skill: 'House Maid', experience: '2-5 years', language: 'English', religion: 'Christian', photo: expert1Image, pdf: per1Pdf },
  { id: 6, name: 'Hayat', passport: 'EP8544786', age: '31-40', ages: 38, martial: 'Single', skill: 'House Maid', experience: '10-20 years', language: 'Amharic', religion: 'Muslim', photo: expert2Image, pdf: 'https://drive.google.com/file/d/1UxPoIa5ltdnCxiJBuxQn2NLqyx3aDADT/view?usp=sharing' },
  { id: 7, name: 'Seble', passport: 'EP8544787', age: '41-50', ages: 45, martial: 'Married', skill: 'House Maid', experience: '10-20 years', language: 'Arabic', religion: 'Other', photo: expert3Image, pdf: 'https://drive.google.com/file/d/1Q4xbyQcl8jVz4XkanK2jcAlGOPpsWzVL/view?usp=sharing' },
  { id: 8, name: 'Jemila', passport: 'EP8544788', age: '20-30', ages: 22, martial: 'Married', skill: 'House Maid', experience: '10-20 years', language: 'Arabic', religion: 'Other', photo: expert2Image, pdf: 'https://drive.google.com/file/d/1Q4xbyQcl8jVz4XkanK2jcAlGOPpsWzVL/view?usp=sharing' },
  // Add more people as needed
];

// Filter options
const ageGroups = ['20-30', '31-40', '41-50'];
const experiences = ['0-2 years', '2-5 years', '5-10 years', '10-20 years'];
const languages = ['English', 'Amharic', 'Arabic', 'French'];
const religions = ['Christian', 'Muslim', 'Other'];

function FilterablePeopleSections() {
  const [selectedFilters, setSelectedFilters] = useState({
    age: '',
    experience: '',
    language: '',
    religion: '',
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      age: '',
      experience: '',
      language: '',
      religion: '',
    });
    setSearchTerm('');
  };

  const filteredPeople = people.filter((person) => {
    const matchesSearch = searchTerm === '' || person.passport.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilters =
      (selectedFilters.age.length === 0 || selectedFilters.age.includes(person.age.toString())) &&
      (selectedFilters.experience.length === 0 || selectedFilters.experience.includes(person.experience)) &&
      (selectedFilters.language.length === 0 || selectedFilters.language.includes(person.language)) &&
      (selectedFilters.religion.length === 0 || selectedFilters.religion.includes(person.religion));
    
    return matchesSearch && matchesFilters;
  });

  return (
    <div className="px-4">
      {/* Filters Dropdowns */}
      <div className="flex flex-wrap gap-2 justify-center mb-8 sticky">
        {/* Age Filter */}
        <div>
          <select
            className="form-select w-full bg-gray-600 text-gold-500 font-bold p-2 rounded-lg"
            value={selectedFilters.age}
            onChange={(e) => handleFilterChange('age', e.target.value)}
          >
            <option value="">Select Age Group</option>
            {ageGroups.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Filter */}
        <div>
          <select
            className="form-select w-full bg-gray-600 text-gold-500 font-bold p-2 rounded-lg"
            value={selectedFilters.experience}
            onChange={(e) => handleFilterChange('experience', e.target.value)}
          >
            <option value="">Select Experience</option>
            {experiences.map((exp) => (
              <option key={exp} value={exp}>
                {exp}
              </option>
            ))}
          </select>
        </div>

        {/* Language Filter */}
        <div>
          <select
            className="form-select w-full bg-gray-600 text-gold-500 font-bold p-2 rounded-lg"
            value={selectedFilters.language}
            onChange={(e) => handleFilterChange('language', e.target.value)}
          >
            <option value="">Select Language</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Religion Filter */}
        <div>
          <select
            className="form-select w-full bg-gray-600 text-gold-500 font-bold p-2 rounded-lg"
            value={selectedFilters.religion}
            onChange={(e) => handleFilterChange('religion', e.target.value)}
          >
            <option value="">Select Religion</option>
            {religions.map((rel) => (
              <option key={rel} value={rel}>
                {rel}
              </option>
            ))}
          </select>
        </div>
        {/* Search Button */}
        <input
          type="text"
          placeholder="Search by Passport Number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-60 md:w-1/3 p-2 rounded-lg text-gray-900"
        />
        {/* Clear Selection Button */}
        <div className="text-white mt-2">
          <button
            onClick={clearFilters}
            className=""
          >
            Clear Selection
          </button>
        </div>
      </div>

      

      {/* People Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredPeople.length > 0 ? (
          filteredPeople.map((person) => (
            <div key={person.id} className="bg-gray-600 p-4 rounded-lg shadow-lg">
              <img src={person.photo} alt={person.name} className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2 text-center">{person.name}</h3>
              <p className="text-gold-500 mb-2"><strong>Spoken Language:</strong> {person.language}</p>
              <p className="text-gold-500 mb-2"><strong>Age:</strong> {person.ages}</p>
              <p className="text-gold-500 mb-2"><strong>Martial Status:</strong> {person.martial}</p>
              <p className="text-gold-500 mb-2"><strong>Experience:</strong> {person.experience}</p>
              <p className="text-gold-500 mb-2"><strong>Religion:</strong> {person.religion}</p>
              <p className="text-gold-500 mb-4"><strong>Skilled As:</strong> {person.skill}</p>
              <div className="flex justify-between">
                <a
                  href={`https://wa.me/?text=Hello, I am interested in ${person.name}'s profile.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600"
                >
                  Hire Me
                </a>
                <a
                  href={person.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
                >
                  View CV
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gold-500 font-bold">No matching people found.</div>
        )}
      </div>

      {/* WhatsApp Link */}
      <div className="flex justify-center mt-8">
        <a href="https://chat.whatsapp.com/Grf2FODUxmGLThnMCYHdNE" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-2 text-white bg-gold-500 w-full rounded-full hover:bg-gold-600 font-bold text-center">
          <img src={WhatsAppIcon} alt="WhatsApp" className="h-6 w-6 mr-2 inline-block align-top" />
          More on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default FilterablePeopleSections;
