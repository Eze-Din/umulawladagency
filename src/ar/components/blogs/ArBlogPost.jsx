import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import blogData from '../../../assets/data/ArblogData.json';
import image1 from '../../../assets/images/ezedin.jpeg';
import image2 from '../../../assets/images/hanan.jpeg';
import image3 from '../../../assets/images/mame.jpeg';

const images = {
  'arblog1': image1,
  'arblog2': image2,
  'arblog3': image3,
};

function BlogPost() {
  const { id } = useParams();
  const post = blogData.find(blog => blog.id === id);

  return post ? (
    <div className="max-w-2xl mx-auto p-6 bg-gray-600 rounded-lg shadow-lg mt-8">
      <img src={images[post.id]} alt={post.title} className="w-full h-64 object-cover rounded-t-lg mb-4" />
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 text-base mb-6">{post.content}</p>
      <Link to="/ar/blog" className="text-blue-500 hover:underline">
      العودة إلى المدونة
      </Link>
    </div>
  ) : (
    <div className="text-center text-red-500 font-bold mt-8">
      لم يتم العثور على المنشور
    </div>
  );
}

export default BlogPost;
