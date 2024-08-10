import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/umulogo.png';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gold-500 p-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-4">Page Not Found</h2>
        <p className="mb-8 text-lg">
          Oops! The page you are looking for doesn`t exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-gold-500 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-gold-600 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
      <div className="mt-12">
        <img
          src={Logo}
          alt="Logo"
          className="w-24 h-24 animate-spin"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
