import React, { useEffect, useState } from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
 import { auth, db } from "../../firebase";
import { getDocs, collection, addDoc} from "firebase/firestore";
import { visaList, ResidencyList, citizenList } from "../data";
const Booking = () => {
  const [currentUser, setCurrentUser] = useState({})
  const params = useParams();
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState({
    packageName: "",
    packageDescription: "",
    packageDestination: "",
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
    packageImage: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [bookingData, setBookingData] = useState({
    totalPrice: 0,
    packageDetails: null,
    buyer: null,
    buyerId: null,
    persons: 1,
    date: null,
  });
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const getPackageData = async () => {
    try {
      setLoading(true);

      let data = visaList.find(x => x.id == params?.packageId);
      if(data === undefined || data === null) data =  citizenList.find(x => x.id == params?.packageId);
      if(data === undefined || data === null) data =  ResidencyList.find(x => x.id == params?.packageId);
      // const data = await res.json();
      if (data) {
        setPackageData({
          packageName: data?.packageName,
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
      //console.log(error);
    }
  };

  //get paymentgateway token
  
  const usersCollectionRef = collection(db, "appUsers");
  const getUser = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const user = filteredData.find(x => x.userId == auth?.currentUser?.uid);
      setCurrentUser(user);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  //handle payment & book package
  const bookingCollectionRef = collection(db, "booking");
  const handleBookPackage = async () => {
    bookingData.buyer  = currentUser.username;
    bookingData.buyerId  = auth?.currentUser?.uid;
    bookingData.packageDetails = packageData.packageName
    if (
      bookingData.totalPrice <= 0 ||
      bookingData.persons <= 0 ||
      bookingData.date === "" || bookingData.date == null
    ) {
      // alert("All fields are required!");
      return;
    }
    try {
      setLoading(true);
      
   const data = await addDoc(bookingCollectionRef, bookingData);
      if (data) {
        setLoading(false);
        // alert("Booked successfully");
        navigate(`/profile/${currentUser?.user_role === 1 ? "admin" : "user"}`);
      } else {
        setLoading(false);
        // alert("Error while booking, Pls try again");
      }
    } catch (error) {
      //console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params?.packageId) {
      getPackageData();
    }
    let date = new Date().toISOString().substring(0, 10);
    let d = date.substring(0, 8) + (parseInt(date.substring(8)) + 1);
    setCurrentDate(d);
  }, [params?.packageId]);

  useEffect(() => {
    if (packageData && params?.packageId) {
      setBookingData({
        ...bookingData,
        packageDetails: params?.packageId,
        buyer: currentUser?._id,
        totalPrice: packageData?.packageDiscountPrice
          ? packageData?.packageDiscountPrice * bookingData?.persons
          : packageData?.packagePrice * bookingData?.persons,
      });
    }
  }, [packageData, params]);
  const handlePersonChange = () => {
    if (bookingData.persons > 1) {
      setBookingData({
        ...bookingData,
        persons: (bookingData.persons -= 1),
        totalPrice: packageData.packageDiscountPrice
          ? packageData.packageDiscountPrice *
            bookingData.persons
          : packageData.packagePrice * bookingData.persons,
      });
    }
  }
  return (
    <div className="w-full flex flex-col items-center">
    <div className="w-[95%] flex flex-col items-center p-6 rounded shadow-2xl gap-3 bg-white">
      <h1 className="text-center font-bold text-2xl">Book Now</h1>
      {/* user info */}
      <div className="w-full flex flex-wrap justify-center gap-6">
        <div className="flex flex-col p-4 rounded border border-gray-200 shadow-md w-full md:w-1/2 lg:w-1/3 bg-gray-50">
          <h2 className="font-semibold mb-3">User Info</h2>
          <div className="flex flex-col mb-2">
            <label htmlFor="username" className="font-semibold">Username:</label>
            <input type="text" id="username" className="p-2 rounded border border-gray-300" value={currentUser.username} disabled />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="email" className="font-semibold">Email:</label>
            <input type="email" id="email" className="p-2 rounded border border-gray-300" value={currentUser.email} disabled />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="address" className="font-semibold">Address:</label>
            <textarea maxLength={200} id="address" className="p-2 rounded border border-gray-300 resize-none" value={currentUser.address} disabled />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="font-semibold">Phone:</label>
            <input type="text" id="phone" className="p-2 rounded border border-gray-300" value={currentUser.phone} disabled />
          </div>
        </div>
        {/* package info */}
        <div className="flex flex-col p-4 rounded border border-gray-200 shadow-md w-full md:w-1/2 lg:w-1/3 bg-gray-50">
          <h2 className="font-semibold mb-3">Package Info</h2>
          <div className="flex items-center gap-4 mb-2">
            <img className="w-28 rounded" src={packageData.packageImage} alt="Package image" />
            <div>
              <p className="font-semibold text-lg mb-1 capitalize">{packageData.packageName}</p>
              <p className="flex items-center gap-2 text-green-700 font-semibold capitalize">
                <FaMapMarkerAlt /> {packageData.packageDestination}
              </p>
              {(packageData.packageDays > 0 || packageData.packageNights > 0) && (
                <p className="flex items-center gap-2">
                  <FaClock />
                  {packageData.packageDays > 0 && (packageData.packageDays > 1 ? `${packageData.packageDays} Days` : `${packageData.packageDays} Day`)}
                  {packageData.packageDays > 0 && packageData.packageNights > 0 && ' - '}
                  {packageData.packageNights > 0 && (packageData.packageNights > 1 ? `${packageData.packageNights} Nights` : `${packageData.packageNights} Night`)}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-semibold" htmlFor="date">Select Date:</label>
            <input type="date" min={currentDate || ''} id="date" className="p-2 border border-gray-300 rounded" onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })} />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <p className="text-xl font-semibold">Price:</p>
            {packageData.packageOffer ? (
              <>
                <span className="line-through text-gray-700">${packageData.packagePrice}</span>
                <span className="text-green-700"> - ${packageData.packageDiscountPrice}</span>
                <span className="text-lg ml-2 bg-green-700 p-1 rounded text-white">
                  {Math.floor(((+packageData.packagePrice - +packageData.packageDiscountPrice) / +packageData.packagePrice) * 100)}% Off
                </span>
              </>
            ) : (
              <span className="text-green-700">${packageData.packagePrice}</span>
            )}
          </div>
          <div className="flex items-center border-2 w-max mb-2">
          <button
                className="p-2 py-1 font-semibold"
                onClick={() => {
                  if (bookingData.persons > 1) {
                    setBookingData({
                      ...bookingData,
                      persons: (bookingData.persons -= 1),
                      totalPrice: packageData.packageDiscountPrice
                        ? packageData.packageDiscountPrice *
                          bookingData.persons
                        : packageData.packagePrice * bookingData.persons,
                    });
                  }
                }}
              >
                -
              </button>
            <input value={bookingData.persons} disabled type="text" className="border w-10 text-center text-lg" />
            <button
                className="p-2 py-1 font-semibold"
                onClick={() => {
                  if (bookingData.persons < 10) {
                    setBookingData({
                      ...bookingData,
                      persons: (bookingData.persons += 1),
                      totalPrice: packageData.packageDiscountPrice
                        ? packageData.packageDiscountPrice *
                          bookingData.persons
                        : packageData.packagePrice * bookingData.persons,
                    });
                  }
                }}
              >
                +
              </button>
          </div>
          <p className="text-xl font-semibold">Total Price: <span className="text-green-700">$
                {packageData.packageDiscountPrice
                  ? packageData.packageDiscountPrice * bookingData.persons
                  : packageData.packagePrice * bookingData.persons}</span></p>
          <div className="mt-4">
          <button className="mt-2 p-2 rounded bg-blue-600 text-white hover:opacity-95 cursor-pointer" onClick={handleBookPackage}>
                  {loading ? "Processing..." : "Book Now"}
                </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Booking;
