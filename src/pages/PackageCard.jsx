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
     <div className="bg-white border flex flex-col rounded-lg shadow-md overflow-hidden" 
     style={{ width: "19pc", height: (packageData.moreContent !== '') ? "20pc" : "19pc"}}>
       {!imageLoaded && (
         <div className="flex justify-center items-center h-[190px]">
           <ThreeDots color="#00BFFF" height={120} width={80} />  {/* Use the specific loader component */}
         </div>
       )}
       <LazyLoadImage
         src={`https://firebasestorage.googleapis.com/v0/b/gooutfilter.appspot.com/o/${packageData.image}.jpg?alt=media&token=bfa49e65-3d50-4117-8f74-1965c38854b8`}
         alt="Package Image"
         effect="blur"
         className="w-full h-[190px] object-cover rounded-t-lg"
         afterLoad={() => setImageLoaded(true)}  // Set imageLoaded to true once the image is loaded
       />
       <div className="w-full flex flex-col mt-4 px-2">
         <p className="font-semibold text-xl capitalize">
           {packageData.name}
         </p>
         <div className="flex items-center mt-1 text-sm text-gray-500">
           <Rating
             value={5}
             size="small"
             readOnly
             precision={0.1}
           />
           <span className="ml-2">
             {packageData.packageTotalRatings} Reviews
           </span>
         </div>
         <p className="font-medium text-green-700 text-lg my-2">
           {packageData.moreContent}
         </p>
       </div>
     </div>
    </Link>
  );
});

export default PackageCard;
