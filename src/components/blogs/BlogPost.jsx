import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../assets/data/blogData.json';

function BlogPost() {
  const { id } = useParams();
  const post = blogData.find(blog => blog.id === id);

  return post ? (
    <div className="max-w-2xl mx-auto p-6 bg-gray-600 rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-t-lg mb-4" />
      <p className="text-base mb-6">{post.content}</p>
      <p className="text-base mb-6 text-right">{post.date}</p>
      <a href="/en/blog" className="text-blue-500 hover:underline">
        Go Back to Blog
      </a>
    </div>
  ) : (
    <div className="text-center text-red-500 font-bold mt-8">
      Post not found
    </div>
  );
}

export default BlogPost;
