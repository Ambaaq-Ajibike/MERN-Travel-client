import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PackageCard from '../PackageCard';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Styled Previous Arrow Button using Tailwind
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
    onClick={onClick}
  >
    <MdKeyboardArrowLeft className="text-3xl" />
  </button>
);

// Styled Next Arrow Button using Tailwind
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
    onClick={onClick}
  >
    <MdKeyboardArrowRight className="text-3xl" />
  </button>
);

const AppCarousel = ({ visa }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4, // Default number of slides to show for large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // 1 card on small devices
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // 2 cards on tablets
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // 3 cards on medium devices
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4, // 4 cards on large screens
        }
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5, // 5 cards on extra-large screens
        }
      }
    ],
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="container mx-auto px-4">
      <Slider {...settings}>
        {visa.map((packageData, i) => (
          <div className="px-2" key={i}>
            <PackageCard className="w-full" packageData={packageData} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AppCarousel;
