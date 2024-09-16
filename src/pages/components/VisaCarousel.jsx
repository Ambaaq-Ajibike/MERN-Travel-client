import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import PackageCard from '../PackageCard';

const VisaCarousel = ({ visa }) => {
    const settings = {
        dots: true, // Enable pagination dots
        infinite: true, // Enable endless scrolling
        slidesToShow: 2, // Number of cards visible on small screens
        slidesToScroll: 1, // Number of cards to scroll per click
        responsive: [
            { // Breakpoint for large screens
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            { // Breakpoint for extra large screens
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
        {visa.map((packageData, i) => (
            <PackageCard className="bg-blue-500 p-4" key={i} packageData={packageData} />
        ))}
    </Slider>
    );
};

export default VisaCarousel;