import { memo, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';  // Import the specific loader component

const PackageCard = memo(({ packageData }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link to={packageData.url} className="w-max">
      <div className="w-[280px] bg-white border flex flex-col rounded-lg shadow-lg overflow-hidden relative">
        {!imageLoaded && (
          <div className="flex justify-center items-center h-[20px] absolute top-24 left-24">
            <ThreeDots color="#00BFFF" height={120} width={80} /> {/* Loader before image is loaded */}
          </div>
        )}
        <LazyLoadImage
          src={`https://firebasestorage.googleapis.com/v0/b/gooutfilter.appspot.com/o/${packageData.image}.jpg?alt=media&token=bfa49e65-3d50-4117-8f74-1965c38854b8`}
          alt={packageData.name}
          effect="blur"
          className={`w-full h-[190px] object-cover rounded-t-lg`}
          afterLoad={() => setImageLoaded(true)} // Hide loader once image loads
        />

        <div className="p-4 flex flex-col gap-2">
          {/* Badge: "Earn R Points" */}
         

          {/* Name of the Package */}
          <h2 className="text-md font-semibold text-gray-900 truncate">{packageData.name}</h2>
        <div className="flex justify-between">
               {/* Rating and Reviews */}
          <div className="text-gray-600 text-sm flex flex-col">
            <span className="text-xs">{packageData.packageTotalRatings} Reviews</span>
              <Rating
                value={packageData.rating || 5}
                size="small"
                readOnly
                precision={0.1}
                color="black"
              />
          
          </div>

          {/* Pricing Section */}
          <div className="flex flex-col justify-between items-center mt-2">
            <div className="text-gray-500 text-xs">
              Per Person from
            </div>
            <div className="text-sm font-bold text-gray-900">
              {packageData.discountedPrice}
            </div>
          </div>
        </div>
         
        </div>
      </div>
    </Link>
  );
});

export default PackageCard;
