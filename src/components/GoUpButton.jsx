import React, { useState, useEffect } from 'react';

function GoUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gold-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-300 focus:outline-none"
        >
          &#8679; {/* Unicode for up arrow */}
        </button>
      )}
    </div>
  );
}

export default GoUpButton;
