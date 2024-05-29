import  { useEffect, useState } from "react";
import "./styles/Home.css";
// import { FaCalendar, FaStar } from "react-icons/fa";
// import { FaRankingStar } from "react-icons/fa6";
// import { LuBadgePercent } from "react-icons/lu";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {citizenList, visaList, ResidencyList} from './data'
import PackageCard from "./PackageCard";
import { useNavigate } from "react-router";
// import {Carousel} from "../pages/components/Carousel";

const Home = () => {
  const navigate = useNavigate();
  const [visa, setvisa] = useState([]);
  const [Residency, setResidency] = useState([]);
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

  const getResidency = async () => {
    try {
      setResidency(ResidencyList);
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
    getResidency();
    getcitizenship();
  }, []);
  
  const slides = [
    "/src/assets/images/hero-1.jpg",
    "/src/assets/images/hero-2.png",
    "/src/assets/images/hero-3.jpg"
  ];
  return (
    <div className="main w-full">
    <div className="w-full flex flex-col">
      <Carousel
        className="w-full"
        showArrows={true}
        showThumbs={false}
        autoPlay
        infiniteLoop
      >
        {slides.map((slide, index) => (
          <div key={index} className="background_image" style={{ backgroundImage: `url(${slide})` }}>
            {/* Optionally, add any overlay text or content here */}
          </div>
        ))}
      </Carousel>

      <div className="top-part w-full gap-2 flex flex-col">
        <h1 className="text-white text-6xl text-center font-bold mb-2">
          Find Next Place To Visit
        </h1>
        <h1 className="text-white text-sm text-center xsm:text-lg font-semibold">
          Discover amazing places at exclusive deals
        </h1>
        <div className="w-full flex flex-wrap justify-center items-center gap-4 mt-8 p-4 bg-opacity-40 bg-white rounded-lg">
  <div className="flex items-center bg-white rounded-lg border w-full md:w-auto px-4 py-2">
    {/* <span className="material-icons text-gray-500 mr-2">location_on</span> */}
    <select  onChange={(e) => setSearch(e.target.value)} className="outline-none w-full bg-transparent select-styles">
      <option>VISA</option>
      <option>CITIZENSHIP</option>
      <option>RESIDENCY</option>
    </select>
  </div>

  <div className="flex items-center bg-white rounded-lg border w-full md:w-auto px-4 py-2">
    {/* <span className="material-icons text-gray-500 mr-2">public</span> */}
    <select className="outline-none w-full bg-transparent select-styles">
      <option>Select Nationality</option>
      <option>American</option>
      <option>British</option>
      <option>Canadian</option>
      <option>Indian</option>
    </select>
  </div>

  <div className="flex items-center bg-white rounded-lg border w-full md:w-auto px-4 py-2">
    {/* <span className="material-icons text-gray-500 mr-2">home</span> */}
    <select className="outline-none w-full bg-transparent select-styles">
      <option>Select Living</option>
      <option>New York</option>
      <option>London</option>
      <option>Toronto</option>
      <option>Mumbai</option>
    </select>
  </div>

  <div className="flex items-center bg-white rounded-lg border w-full md:w-auto px-4 py-2">
    {/* <span className="material-icons text-gray-500 mr-2">event</span> */}
    <input
      type="date"
      className="outline-none w-full bg-transparent select-styles"
      value="2024-05-30"
    />
  </div>

  <button
    onClick={() => navigate(`/search?searchTerm=${search}`)}
    className="bg-orange-500 w-12 h-12 flex justify-center items-center text-white text-xl font-semibold rounded-full hover:scale-95"
  >
    <span className="material-icons">Go</span>
  </button>
</div>

      </div>

      <div className="main p-6 flex flex-col gap-5" style={{    padding: "20px 61px"}}>
        {loading && <h1 className="text-center text-2xl">Loading...</h1>}
        {!loading && visa.length === 0 && Residency.length === 0 && citizenship.length === 0 && (
          <h1 className="text-center text-2xl">No Packages Yet!</h1>
        )}
        {!loading && visa.length > 0 && (
          <>
            <h1 className="text-2xl font-semibold">Visa</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 grid-cont">
              {visa.map((packageData, i) => (
                <PackageCard className="bg-blue-500 p-4" key={i} packageData={packageData} />
              ))}
            </div>
          </>
        )}
        {!loading && Residency.length > 0 && (
          <>
            <h1 className="text-2xl font-semibold">Residency</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 grid-cont">
              {Residency.map((packageData, i) => (
                <PackageCard className="bg-blue-500 p-4" key={i} packageData={packageData} />
              ))}
            </div>
          </>
        )}
        {!loading && citizenship.length > 0 && (
          <>
            <h1 className="text-2xl font-semibold">Citizenship</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 grid-cont">
              {citizenship.map((packageData, i) => (
                <PackageCard className="bg-blue-500 p-4" key={i} packageData={packageData} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  </div>
  );
};

export default Home;
