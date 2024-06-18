import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const PackageCard = ({ packageData }) => {
  console.log(packageData);
  return (
    <Link to={`/search?country=${packageData.id}`} className="w-max">
     <div className="bg-white border flex flex-col rounded-lg shadow-md overflow-hidden" style={{    width: "90%"}}>
  <img
  style={{width: "22pc"}}
    className="w-full h-[190px] object-cover rounded-t-lg"
    src={`https://firebasestorage.googleapis.com/v0/b/gooutfilter.appspot.com/o/${packageData.image}.jpg?alt=media&token=bfa49e65-3d50-4117-8f74-1965c38854b8`}
    alt="Package Image"
  />
  <div className="w-full flex flex-col mt-4 px-2">
    <p className="font-semibold text-xl capitalize">
      {packageData.Name}
    </p>
    <div className="flex items-center mt-1 text-sm text-gray-500">
      {5 > 0 && (
        <>
          <span className="flex items-center text-yellow-500">
            {/* Assuming Rating is a component that displays stars */}
            <Rating
              value={5}
              size="small"
              readOnly
              precision={0.1}
            />
          </span>
          <span className="ml-2">
            {packageData.packageTotalRatings} Reviews
          </span>
        </>
      )}
    </div>
    <p className="font-medium text-green-700 text-lg mt-2">
    {packageData.packagePrice &&  `$${packageData.packagePrice}`}
     
    </p>
  </div>
</div>

    </Link>
  );
};

export default PackageCard;
