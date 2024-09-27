import React, { useState } from 'react';

function BlogSidebar({ handleFilterChange, handleSearch, filter }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="bg-gray-600 p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-2">Search</h3>
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
      />

      <h3 className="text-lg font-bold mt-4 mb-2">Filter By</h3>
      <div className="flex flex-col space-y-2">
        <button 
          onClick={() => handleFilterChange('latest')}
          className={`py-2 px-4 rounded-md text-white ${filter === 'latest' ? 'bg-gold-500' : 'bg-blue-500'} hover:bg-gold-600 transition`}
        >
          Latest
        </button>
        <button 
          onClick={() => handleFilterChange('oldest')}
          className={`py-2 px-4 rounded-md text-white ${filter === 'oldest' ? 'bg-gold-500' : 'bg-blue-500'} hover:bg-gold-600 transition`}
        >
          Oldest
        </button>
        <button 
          onClick={() => handleFilterChange('popular')}
          className={`py-2 px-4 rounded-md text-white ${filter === 'popular' ? 'bg-gold-500' : 'bg-blue-500'} hover:bg-gold-600 transition`}
        >
          Popular
        </button>
      </div>
    </div>
  );
}

export default BlogSidebar;
