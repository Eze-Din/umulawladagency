import React from 'react'
import tinishuImg from '../../../assets/images/noimg.jpg';

function ArImamudin() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-gold-500 mb-4">المرشح المعتمد</h1>
      <p className="text-lg text-center">هذه هي الوثيقة القانونية للمرشح</p>
      <div className="h-96 overflow-hidden rounded-lg shadow-md">
        <img src={tinishuImg} alt="Hanan" className="w-full h-full object-cover"/>
      </div>
    </div>
  );
}

export default ArImamudin;