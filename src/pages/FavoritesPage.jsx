// src/pages/FavoritesPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import expert1Image from '../assets/images/exp1.jpg'; // Example image, replace with your own
import expert2Image from '../assets/images/exp2.jpg'; // Example image, replace with your own
import expert3Image from '../assets/images/exp3.jpg'; // Example image, replace with your own

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const people = [
    { id: 1, name: 'John Doe', photo: expert1Image },
    { id: 2, name: 'Jane Smith', photo: expert2Image },
    { id: 3, name: 'Eze Din', photo: expert3Image },
    // Add more people as needed
  ];

  const favoritePeople = people.filter(person => favorites.includes(person.id));

  return (
    <div className="flex flex-col px-16">
      <h2 className="text-lg font-bold mb-4">Favorites</h2>
      {favoritePeople.length > 0 ? (
        favoritePeople.map(person => (
          <div key={person.id} className="flex items-center bg-gray-600 p-4 rounded-lg shadow-lg mb-4">
            <img src={person.photo} alt={person.name} className="w-24 h-24 rounded-lg mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">{person.name}</h3>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gold-500 font-bold">No favorites added.</div>
      )}
      <div className="flex justify-center mt-8">
        <Link to="/" className="mt-2 inline-block px-4 py-2 text-white bg-gold-500 rounded-full hover:bg-gold-600 font-bold text-center">
          Back to Search
        </Link>
      </div>
    </div>
  );
};

export default FavoritesPage;
