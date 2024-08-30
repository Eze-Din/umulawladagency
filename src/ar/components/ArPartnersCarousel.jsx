import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import partner logos
import logo1 from '../../assets//images/easyenjaz.png';
import logo2 from '../../assets/images/mofa.png';
import logo3 from '../../assets/images/lmis.jpg';
import logo4 from '../../assets/images/musaned.png';
import logo5 from '../../assets/images/nyala.png';
import logo6 from '../../assets/images/eff.png';
// Add more imports as needed

const partnerLogos = [
  { imgSrc: logo1, url: 'https://easyenjaz.net' },
  { imgSrc: logo2, url: 'https://visa.mofa.com' },
  { imgSrc: logo3, url: 'https://lmis.gov.et' },
  { imgSrc: logo4, url: 'https://tawtheeq.musaned.com.sa' },
  { imgSrc: logo5, url: 'https://nyalainsurancesc.com' },
  { imgSrc: logo6, url: 'https://federalpolice.gov.et' },
  // Add more logos and URLs as needed
];

function ArPartnersCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
    <Slider {...settings}>
      {partnerLogos.map((partner, index) => (
        <div key={index} className="p-4">
          <a href={partner.url} target="_blank" rel="noopener noreferrer">
            <img src={partner.imgSrc} alt={`Partner ${index + 1}`} className="mx-auto h-24" />
          </a>
        </div>
      ))}
    </Slider>
  );
}

export default ArPartnersCarousel;
