import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dubai from '../../assets/images/dubai.jpeg';
import saudi from '../../assets/images/saudi.jpg';
import jordan from '../../assets/images/jordan.png';

const images = [
  { src: saudi, text: 'العمل في المملكة العربية السعودية' },
  { src: dubai, text: 'العمل في الإمارات العربية المتحدة' },
  { src: jordan, text: 'العمل في الأردن' }
];

function ArImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="image-carousel mx-auto">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative h-96 overflow-hidden rounded-lg shadow-md">
            <img src={img.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover"/>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-4">
              {img.text}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ArImageCarousel;
