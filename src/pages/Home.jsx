import  { useEffect, useState } from "react";
import "./styles/Home.css";
// import { FaCalendar, FaStar } from "react-icons/fa";
// import { FaRankingStar } from "react-icons/fa6";
// import { LuBadgePercent } from "react-icons/lu";
import {citizenList, visaList, residenceList} from './data'
import PackageCard from "./PackageCard";
import { useNavigate } from "react-router";
import {Carousel} from "../pages/components/Carousel";
const Home = () => {
  const navigate = useNavigate();
  const [visa, setvisa] = useState([]);
  const [residence, setresidence] = useState([]);
  const [citizenship, setcitizenship] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getvisa = async () => {
    try {
      
      setvisa(visaList);
      setLoading(false);
     
    } catch (error) {
      console.log(error);
    }
  };

  const getresidence = async () => {
    try {
      setresidence(residenceList);
    } catch (error) {
      console.log(error);
    }
  };

  const getcitizenship = async () => {
    try {
      setcitizenship(citizenList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getvisa();
    getresidence();
    getcitizenship();
  }, []);
 let slides = [
  {
  content: "Comprehensive visa support with 24/7 customer care.",
  btn: "Visa"
 },
  {
  content: "Guaranteed approval with our top-rated services.",
  btn: "Resident"
 },
  {
  content: "Reliable and trustworthy visa assistance at your fingertips.",
  btn: "Citizen"
 },
]
  return (
    <div className="main w-full">
      <div className="w-full flex flex-col">
        <div className="backaground_image w-full"></div>
        <div className="top-part w-full gap-2 flex flex-col">
          <h1 className="text-white text-6xl text-center font-bold mb-2">
          Find Next Place To Visit
          </h1>
          <h1 className="text-white text-sm text-center xsm:text-lg font-semibold">
          Discover amzaing places at exclusive deals
          </h1>
          <div className="w-full flex justify-center items-center gap-2 mt-8">
            <input
              type="text"
              className="rounded-lg outline-none w-[230px] sm:w-2/5 p-2 border border-black bg-opacity-40 bg-white text-white placeholder:text-white font-semibold"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              onClick={() => {
                navigate(`/search?searchTerm=${search}`);
              }}
              className="bg-white w-10 h-10 flex justify-center items-center text-xl font-semibold rounded-full hover:scale-95"
            >
              Go
              {/* <FaSearch className="" /> */}
            </button>
          </div>

          <div className="w-[90%] max-w-xl flex justify-center mt-10"> 
        
           <Carousel slides={slides}/>



          </div>
        </div>
        {/* main page */}
        <div className="main p-6 flex flex-col gap-5">
          {loading && <h1 className="text-center text-2xl">Loading...</h1>}
          {!loading &&
            visa.length === 0 &&
            residence.length === 0 &&
            citizenship.length === 0 && (
              <h1 className="text-center text-2xl">No Packages Yet!</h1>
            )}
          {/* Top Rated */}
          {!loading && visa.length > 0 && (
            <>
              <h1 className="text-2xl font-semibold">Visa</h1>
              <div className="grid grid-cols-4 gap-4">
                {visa.map((packageData, i) => {
                  return <PackageCard className='bg-blue-500 p-4' key={i} packageData={packageData} />;
                })}
              </div>
            </>
          )}
          {/* Top Rated */}
          {/* latest */}
          {!loading && residence.length > 0 && (
            <>
              <h1 className="text-2xl font-semibold">Residence</h1>
              <div className="grid grid-cols-4 gap-4">
                {residence.map((packageData, i) => {
                  return <PackageCard className='bg-blue-500 p-4' key={i} packageData={packageData} />;
                })}
              </div>
            </>
          )}
          {/* latest */}
          {/* offer */}
          {!loading && citizenship.length > 0 && (
            <>
              <div className="offers_img"></div>
              <h1 className="text-2xl font-semibold">CITIZENSHIP </h1>
              <div className="grid grid-cols-4 gap-4">
                {citizenship.map((packageData, i) => {
                  return <PackageCard className='bg-blue-500 p-4' key={i} packageData={packageData} />;
                })}
              </div>
            </>
          )}
          {/* offer */}
        </div>
      </div>
    </div>
  );
};

export default Home;
