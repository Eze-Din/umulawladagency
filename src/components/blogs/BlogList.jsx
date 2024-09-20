import React from 'react';
import { Link } from 'react-router-dom';

function BlogList({ filteredPosts = [] }) {
  // Ensure we handle the case where filteredPosts might be undefined
  if (!filteredPosts.length) {
    return <p>No blog posts available.</p>;
  }

  return (
    <div className="space-y-4 px-6 py-10">
      {filteredPosts.map(post => (
        <div key={post.id} className="p-6 bg-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Link to={`/en/blog/${post.id}`}>
            <h2 className="text-xl font-semibold text-gold-500 hover:text-gold-600">{post.title}</h2>
          </Link>
          <p className="text-gray-700 mt-2">{post.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
