import  { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { db, auth } from "../../firebase";
import { getDocs, collection} from "firebase/firestore";

const MyBookings = () => {
  // const { currentUser } = useSelector((state) => state.user);
  const [currentBookings, setCurrentBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const bookingCollectionRef = collection(db, "booking");
  const getAllBookings = async () => {
    setCurrentBookings([]);
   
    try {
      setLoading(true);
      const data = await getDocs(bookingCollectionRef);
      let filteredData = data.docs.map((doc) => ({
        ...doc.data()
      }));
      filteredData =  filteredData.filter(x => x.buyerId == auth?.currentUser?.uid);
      //console.log(filteredData);
      if (filteredData) {
        setCurrentBookings(filteredData);
        setLoading(false);
        setError(false);
      } else {
        setLoading(false);
        setError(data?.message);
      }
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    getAllBookings();
  }, [searchTerm]);

  // const handleCancel = async (id) => {
  //   try {
  //     setLoading(true);
  //     const res = await fetch(
  //       `/api/booking/cancel-booking/${id}/${currentUser._id}`,
  //       {
  //         method: "POST",
  //       }
  //     );
  //     const data = await res.json();
  //     if (data?.success) {
  //       setLoading(false);
  //       // alert(data?.message);
  //       getAllBookings();
  //     } else {
  //       setLoading(false);
  //       // alert(data?.message);
  //     }
  //   } catch (error) {
  //     //console.log(error);
  //   }
  // };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[95%] shadow-xl rounded-lg p-3 flex flex-col gap-2">
        {loading && <h1 className="text-center text-2xl">Loading...</h1>}
        {error && <h1 className="text-center text-2xl">{error}</h1>}
        <div className="w-full border-b-4">
          <input
            className="border rounded-lg p-2 mb-2"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <div
                className="w-full border-y-2 p-3 flex flex-wrap overflow-auto gap-3 items-center justify-between"
                
              >
                  <p style={{ fontSize: "18px", fontWeight: "700"}}>Package</p>
                <p style={{ fontSize: "18px", fontWeight: "700"}}>Buyer</p>
                <p style={{ fontSize: "18px", fontWeight: "700"}}>Date</p>
              </div>
        {!loading &&
          currentBookings &&
          currentBookings.map((booking, i) => {
            return (
              <div
                className="w-full border-y-2 p-3 flex flex-wrap overflow-auto gap-3 items-center justify-between"
                key={i}
              >
                
                  <p>
                    {booking?.packageDetails}
                  </p>
                <p>{booking?.buyer}</p>
                <p>{booking?.date}</p>
                {/* <button
                  onClick={() => {
                    handleCancel(booking._id);
                  }}
                  className="p-2 rounded bg-red-600 text-white hover:opacity-95"
                >
                  Cancel
                </button> */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MyBookings;
