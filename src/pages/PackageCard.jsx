import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const PackageCard = ({ packageData }) => {
  return (
    <Link to={`/package/${packageData.id}`} className="w-max">
      <div className="bg-white border flex flex-col items-center p-3 rounded shadow-md overflow-hidden">
        <img
          className="w-[300px] h-[190px] rounded border hover:scale-110  transition-all duration-300"
          src={packageData.packageImage}
          alt="Package Image"
        />
        <div className="w-full flex flex-col my-2">
          <p className="font-semibold text-lg capitalize w-[90%] xsm:w-[250px]">
            {packageData.packageName}
          </p>
          <p className="text-green-700 text-lg capitalize">
            {packageData.packageDescription}
          </p>
          
          <div className="flex flex-wrap justify-between">
            {packageData.packageTotalRatings > 0 && (
              <p className="flex items-center text-lg">
                <Rating
                  value={packageData.packageRating}
                  size="medium"
                  readOnly
                  precision={0.1}
                />
                ({packageData.packageTotalRatings})
              </p>
            )}
            <p className="font-medium text-green-700">
                ${packageData.packagePrice}
              </p>
          </div>
          {/* price & rating */}
        </div>
      </div>
    </Link>
  );
};

export default PackageCard;
