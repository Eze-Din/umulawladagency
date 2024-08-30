import React from 'react';

function TeamCard({ name, role, image }) {
  return (
    <div className="bg-gray-400 p-2 rounded-lg shadow-md">
      <img src={image} alt={`${name}`} className="w-full h-30 object-cover rounded-3xl mb-2" />
      <h3 className="text-2xl font-bold text-gold-500 mb-2">{name}</h3>
      <b className="text-gray-700">{role}</b>
    </div>
  );
}

export default TeamCard;
