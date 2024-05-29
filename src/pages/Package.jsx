import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { citizenList, ResidencyList, visaList } from "./data";
import "swiper/css/bundle";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaClock,
  FaMapMarkerAlt,
  FaShare,
} from "react-icons/fa";
import Rating from "@mui/material/Rating";
import { useSelector } from "react-redux";
import RatingCard from "./RatingCard";

const Package = () => {
  SwiperCore.use([Navigation]);
  const { currentUser } = useSelector((state) => state.user);
  const params = useParams();
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState({
    packageName: "",
    packageDescription: "",
    packageDescription: "",
    packageDays: 1,
    packageNights: 1,
    packageAccommodation: "",
    packageTransportation: "",
    packageMeals: "",
    packageActivities: "",
    packagePrice: 500,
    packageDiscountPrice: 0,
    packageOffer: false,
    packageRating: 0,
    packageTotalRatings: 0,
    packageImages: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [ratingsData, setRatingsData] = useState({
    rating: 0,
    review: "",
    packageId: params?.id,
    userRef: currentUser?._id,
    username: currentUser?.username,
    userProfileImg: currentUser?.avatar,
  });
  const [packageRatings, setPackageRatings] = useState([]);
  const [ratingGiven, setRatingGiven] = useState(false);

  const getPackageData = async () => {
    try {
      setLoading(true);
    //  const res = await fetch(`/api/package/get-package-data/${params?.id}`);
    console.log(params?.id, 'params?.id');
    console.log(visaList, 'visaList');
      let data = visaList.find(x => x.id == params?.id);
      console.log(data, "data111");
      if(data === undefined || data === null) data =  citizenList.find(x => x.id == params?.id);
      if(data === undefined || data === null) data =  ResidencyList.find(x => x.id == params?.id);
      console.log(data, "data");
      //const data = await res.json();
      if (data) {
        setPackageData({
          packageName: data?.packageName,
          packageDescription: data?.packageDescription,
          packageDescription: data?.packageDescription,
          packageDays: data?.packageDays,
          packageNights: data?.packageNights,
          packageAccommodation: data?.packageAccommodation,
          packageTransportation: data?.packageTransportation,
          packageMeals: data?.packageMeals,
          packageActivities: data?.packageActivities,
          packagePrice: data?.packagePrice,
          packageDiscountPrice: data?.packageDiscountPrice,
          packageOffer: data?.packageOffer,
          packageRating: data?.packageRating,
          packageTotalRatings: data?.packageTotalRatings,
          packageImage: data?.packageImage,
        });
        setLoading(false);
      } else {
        setError(data?.message || "Something went wrong!");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };



  const checkRatingGiven = async () => {
    try {
      const res = await fetch(
        `/api/rating/rating-given/${currentUser?._id}/${params?.id}`
      );
      const data = await res.json();
      setRatingGiven(data?.given);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getPackageData();
    }
    if (currentUser) {
      checkRatingGiven();
    }
  }, [params.id, currentUser]);

  return (
    <div className="bg-gray-100 flex justify-center py-8">
    <div className="w-full max-w-6xl p-4 bg-white rounded-lg shadow-md relative">
      {loading && (
        <p className="text-center font-semibold">Loading...</p>
      )}
      {error && (
        <div className="flex flex-col w-full items-center gap-2">
          <p className="text-center text-red-700">Something went wrong!</p>
          <Link
            className="bg-slate-600 text-white p-3 py-2 rounded-lg w-min"
            to="/"
          >
            Back
          </Link>
        </div>
      )}
      {packageData && !loading && !error && (
        <>
          <Swiper navigation>
            <SwiperSlide>
              <img src={packageData?.packageImage} alt="Package" className="w-full h-64 object-cover rounded-t-lg" />
            </SwiperSlide>
          </Swiper>

          {/* Share Button */}
          <div className="absolute top-4 right-4 z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-white cursor-pointer shadow">
            <FaShare
              className="text-gray-500"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>
          {copied && (
            <p className="fixed top-16 right-16 z-10 rounded-md bg-white p-2 shadow">Link copied!</p>
          )}

          {/* Back Button */}
          <div className="absolute top-4 left-4 z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-white cursor-pointer shadow">
            <FaArrowLeft
              className="text-gray-500"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>

          <div className="p-5">
            <p className="text-2xl font-bold capitalize">{packageData?.packageName}</p>
            
            {/* Price Section */}
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="flex gap-1 text-xl font-semibold">
                  {packageData?.packageOffer ? (
                    <>
                      <span className="line-through text-gray-700">${packageData?.packagePrice}</span> 
                      <span>${packageData?.packageDiscountPrice}</span>
                      <span className="text-lg ml-2 bg-green-700 p-1 rounded text-white">
                        {Math.floor(((+packageData?.packagePrice - +packageData?.packageDiscountPrice) / +packageData?.packagePrice) * 100)}% Off
                      </span>
                    </>
                  ) : (
                    <span>${packageData?.packagePrice}</span>
                  )}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (currentUser) {
                    navigate(`/booking/${params?.id}`);
                  } else {
                    navigate("/login");
                  }
                }}
                className="bg-orange-500 text-white rounded p-3 hover:opacity-95"
              >
                BOOK NOW
              </button>
            </div>

            {/* Description */}
            <p className="text-green-700 flex items-center gap-1 text-lg capitalize mt-3">
              <FaMapMarkerAlt />
              {packageData?.packageDescription}
            </p>
            
            {/* Days & Nights */}
            {(+packageData?.packageDays > 0 || +packageData?.packageNights > 0) && (
              <p className="flex items-center gap-2 mt-2">
                <FaClock />
                {+packageData?.packageDays > 0 && (+packageData?.packageDays > 1 ? packageData?.packageDays + " Days" : packageData?.packageDays + " Day")}
                {+packageData?.packageDays > 0 && +packageData?.packageNights > 0 && " - "}
                {+packageData?.packageNights > 0 && (+packageData?.packageNights > 1 ? packageData?.packageNights + " Nights" : packageData?.packageNights + " Night")}
              </p>
            )}

            {/* Ratings */}
            {packageData?.packageTotalRatings > 0 && (
              <div className="flex items-center mt-3">
                <Rating value={packageData?.packageRating || 0} readOnly precision={0.1} />
                <p className="ml-2">({packageData?.packageTotalRatings} Reviews)</p>
              </div>
            )}

            {/* Long Description */}
            <div className="mt-2">
              <p className="font-medium">
                {packageData?.packageDescription.length > 280 ? (
                  <>
                    <span id="desc">{packageData?.packageDescription.substring(0, 150)}...</span>
                    <button
                      id="moreBtn"
                      onClick={() => {
                        document.getElementById("desc").innerText = packageData?.packageDescription;
                        document.getElementById("moreBtn").style.display = "none";
                        document.getElementById("lessBtn").style.display = "flex";
                      }}
                      className="ml-2 font-semibold text-gray-600 hover:underline"
                    >
                      More <FaArrowDown />
                    </button>
                    <button
                      id="lessBtn"
                      onClick={() => {
                        document.getElementById("desc").innerText = packageData?.packageDescription.substring(0, 150) + "...";
                        document.getElementById("lessBtn").style.display = "none";
                        document.getElementById("moreBtn").style.display = "flex";
                      }}
                      className="ml-2 font-semibold text-gray-600 hover:underline hidden"
                    >
                      Less <FaArrowUp />
                    </button>
                  </>
                ) : (
                  packageData?.packageDescription
                )}
              </p>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <FaClock className="text-gray-500" />
                <p>Normal 10-15 Working Days</p>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-gray-500" />
                <p>Easy Documentation</p>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-gray-500" />
                <p>Online Payment Option</p>
              </div>
            </div>

          </div>
        </>
      )}
    </div>
  </div>
   
  );
};

export default Package;
