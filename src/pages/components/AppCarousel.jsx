import React, { useRef, memo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PackageCard from '../PackageCard';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute right-24 top-[-4pc] text-black border-2 border-black border-solid p-1 rounded-full z-20"
    onClick={onClick}
  >
    <MdKeyboardArrowLeft className="text-3xl" />
  </button>
);

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-10 top-[-4pc] text-black border-2 border-black border-solid p-1 rounded-full z-20"
    onClick={onClick}
  >
    <MdKeyboardArrowRight className="text-3xl" />
  </button>
);

const AppCarousel = ({ visa }) => {
  const isLoadedRef = useRef(false); // Track if the component has been loaded

  // Ensure we only load the component once
  if (isLoadedRef.current) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4, // Default number of slides to show for large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
        }
      }
    ],
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // Mark the component as loaded
  isLoadedRef.current = true;

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

// Memoizing the component to prevent unnecessary re-renders
export default memo(AppCarousel);
