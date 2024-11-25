import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Import Images */
import img1 from '../assets/images/candidates/img1.jpeg';
import img2 from '../assets/images/candidates/img2.jpeg';
import img3 from '../assets/images/candidates/img3.jpeg';
import img4 from '../assets/images/candidates/img4.jpeg';
import img5 from '../assets/images/candidates/img5.jpeg';
import img6 from '../assets/images/candidates/img6.jpeg';
import img7 from '../assets/images/candidates/img7.jpeg';
import img8 from '../assets/images/candidates/img8.jpeg';
import promo from '../assets/images/hanan.jpeg';

const Gallery = () => {
  // Array of photo URLs
  const photos = [
    { src: img1, alt: 'Photo 1' },
    { src: img2, alt: 'Photo 2' },
    { src: img3, alt: 'Photo 3' },
    { src: img4, alt: 'Photo 4' },
    { src: img5, alt: 'Photo 5' },
    { src: img6, alt: 'Photo 3' },
    { src: img7, alt: 'Photo 4' },
    { src: img8, alt: 'Photo 5' },
  ];

  // Array of YouTube video IDs and thumbnails
  const videos = [
    { id: '7424351948201004321', thumbnail: promo },
    { id: '7436323553814777120', thumbnail: img2 },
    { id: '7425255300946595105', thumbnail: img8 },
    { id: '7424878562022264096', thumbnail: img5 },
    { id: '7420770320153365793', thumbnail: img1 },
    { id: '7415517839538261280', thumbnail: img4 },
    { id: '7414401108279397665', thumbnail: img6 },
  ];

  // State to track which video is currently playing
  const [activeVideo, setActiveVideo] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="text-white">
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Photo Gallery</h2>
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index}>
              <img src={photo.src} alt={photo.alt} className="rounded-lg shadow-lg w-full h-96 px-2 object-cover" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Video Gallery</h2>
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="relative h-96 px-2">
              {activeVideo === video.id ? (
                <div className="relative">
                  <div className="relative h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                    <iframe
                      src={`https://www.tiktok.com/embed/${video.id}`}
                      title={`Video ${index + 1}`}
                      width="100%"
                      height="600"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="rounded-md"
                    />
                  </div>
                  {/* Close button */}
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-2 right-2 bg-black text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div
                  className="relative cursor-pointer"
                  onClick={() => setActiveVideo(video.id)}
                >
                  <img
                    src={video.thumbnail}
                    alt={`Video ${index + 1}`}
                    className="rounded-lg shadow-lg object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-75">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;