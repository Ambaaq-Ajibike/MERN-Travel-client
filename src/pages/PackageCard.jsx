import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const PackageCard = ({ packageData }) => {
  return (
    <Link to={`/package/${packageData.id}`} className="w-max">
     <div className="bg-white border flex flex-col rounded-lg shadow-md overflow-hidden">
  <img
  style={{width: "22pc"}}
    className="w-full h-[190px] object-cover rounded-t-lg"
    src={packageData.packageImage}
    alt="Package Image"
  />
  <div className="w-full flex flex-col mt-4 px-2">
    <p className="font-semibold text-xl capitalize">
      {packageData.packageName}
    </p>
    <div className="flex items-center mt-1 text-sm text-gray-500">
      {packageData.packageTotalRatings > 0 && (
        <>
          <span className="flex items-center text-yellow-500">
            {/* Assuming Rating is a component that displays stars */}
            <Rating
              value={packageData.packageRating}
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
      ${packageData.packagePrice}
    </p>
  </div>
</div>

    </Link>
  );
};

export default PackageCard;
