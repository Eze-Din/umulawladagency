import React, { useState, useEffect } from 'react';
import BlogList from './blogs/ArBlogList';
import BlogSidebar from './blogs/ArBlogSidebar';
import blogData from '../../assets/data/ArblogData.json';

function BlogSection() {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState('latest');

  useEffect(() => {
    // Initialize with 'latest' filter by default
    setFilteredPosts([...blogData].sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

  // Filter posts
  const handleFilterChange = (selectedFilter) => {
    let sortedPosts = [...blogData];
    if (selectedFilter === 'latest') {
      sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (selectedFilter === 'oldest') {
      sortedPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (selectedFilter === 'popular') {
      sortedPosts.sort((a, b) => b.popularity - a.popularity);
    }
    setFilteredPosts(sortedPosts);
    setFilter(selectedFilter);
  };

  // Search functionality
  const handleSearch = (searchTerm) => {
    const filtered = blogData.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="py-4 blog-section grid grid-cols-12 gap-8">
      {/* Blog Sidebar */}
      <div className="col-span-12 md:col-span-4">
        <BlogSidebar 
          handleFilterChange={handleFilterChange} 
          filter={filter} 
          handleSearch={handleSearch} 
        />
      </div>

      {/* Blog List */}
      <div className="col-span-12 md:col-span-8">
        <BlogList filteredPosts={filteredPosts} />
      </div>
    </div>
  );
}

export default BlogSection;
