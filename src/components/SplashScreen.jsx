import React, { useEffect } from 'react';
import Logo from '../assets/images/umulogo.png';

const SplashScreen = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed (e.g., 3 seconds)

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="splash-screen flex items-center justify-center h-screen bg-gray-900">
      <img
        src={Logo}
        alt="Logo"
        className="rotating-logo"
      />
    </div>
  );
};

export default SplashScreen;
