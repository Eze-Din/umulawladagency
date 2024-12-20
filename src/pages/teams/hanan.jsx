import React from 'react';
import hananImg from '../../assets/images/hanan.jpeg';

function Hanan() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-gold-500 mb-4">Approved Candidate</h1>
      <p className="text-lg text-center">This is the legal document of the canditate</p>
      <div className="h-96 overflow-hidden rounded-lg shadow-md">
        <img src={hananImg} alt="Hanan" className="w-full h-full object-cover"/>
      </div>
    </div>
  );
}

export default Hanan;
