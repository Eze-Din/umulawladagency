import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import YouTube from 'react-youtube';
import { FaPlayCircle } from 'react-icons/fa';

// Import sample images and videos
import img1 from '../assets/images/exp1.jpg';
import img2 from '../assets/images/exp2.jpg';
import img3 from '../assets/images/exp3.jpg';
import videoThumbnail1 from '../assets/images/dubai.jpeg';
import videoThumbnail2 from '../assets/images/saudi.jpg';
import videoThumbnail3 from '../assets/images/jordan.png';

// Image and video data
const images = [img1, img2, img3, img1];
const videos = [
  { id: '35g7UMVbfPc', thumbnail: videoThumbnail1 },
  { id: 'IdejM6wCkxA', thumbnail: videoThumbnail2 },
  { id: '-Ri2DOnbaoo', thumbnail: videoThumbnail3 }
];

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

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
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="container gallery-page mx-auto px-4 py-8">
      {/* Image Gallery Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-gold-500">Image Gallery</h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover"/>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Video Gallery Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-6 text-gold-500">Video Gallery</h2>
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="px-2">
              <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedVideo(video.id)}>
                <img src={video.thumbnail} alt={`Video ${index + 1}`} className="w-full h-full object-cover"/>
                <FaPlayCircle className="absolute inset-0 m-auto text-white text-5xl" />
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* YouTube Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-full max-w-3xl">
            <YouTube videoId={selectedVideo} className="w-full h-64 md:h-96" />
            <button
              className="absolute top-0 right-0 p-2 text-white text-2xl"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
