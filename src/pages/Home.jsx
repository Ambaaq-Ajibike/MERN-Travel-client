import { useEffect, useState, useCallback, useRef } from "react";
import "./styles/Home.css";
import Footer from "./components/Footer";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PackageCard from "./PackageCard";
import { useNavigate } from "react-router";
import WhatsAppButton from "./components/WhatsApp";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { visas } from "../data/visas";
import { residencies } from "../data/residency";
import { citizenships } from "../data/citizenship";

const Home = () => {
  const navigate = useNavigate();
  const [visa, setVisa] = useState([]);
  const [residency, setResidency] = useState([]);
  const [citizenship, setCitizenship] = useState([]);
  const [search, setSearch] = useState("");

  // Use useRef to keep a reference to the fetched data
  const dataFetchedRef = useRef(false);

  const fetchData = useCallback(() => {
    const visaList = visas.map((x, index) => {
      return {
        id: index,
        name: x.name,
        url: `/search?visa=${index}`,
        image: `country%2F${x.name}`,
        packageTotalRatings: 5,
        packagePrice: 100000,
        moreContent:  `${x.types.length} Visa Types`
      };
    });
    const residencyList = residencies.map((x, index) => {
      return {
        id: index,
        name: x.name,
        url: `/residency/${index + 1}`,
        image: `country%2F${x.image}`,
        packageTotalRatings: 5,
        packagePrice: 100000,
        moreContent:  ``
      };
    });
    const citizenshipList = citizenships.map((x, index) => {
      return {
        id: index,
        name: x.title,
        url: `/citizenship/${index + 1}`,
        image: `country%2F${x.image}`,
        packageTotalRatings: 5,
        packagePrice: 100000,
        moreContent:  ``
      };
    });

    setVisa(visaList);
    setResidency(residencyList);
    setCitizenship(citizenshipList);
  }, []);

  useEffect(() => {
    // Only fetch data if it hasn't been fetched before
    if (!dataFetchedRef.current) {
      fetchData();
      dataFetchedRef.current = true;
    }
  }, [fetchData]);

  const slides = [
    "/images/hero-1.jpg",
    "/images/hero-2.png",
    "/images/hero-3.jpg"
  ];

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <>
      <div className="main w-full relative">
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
                <LazyLoadImage
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  effect="blur"
                  className="carousel-image"
                />
              </div>
            ))}
          </Carousel>

          <div className="top-part w-full gap-2 flex flex-col items-center text-center p-4 absolute top-0 left-0 right-0">
            <h1 className="w-full text-white text-3xl md:text-6xl font-bold mb-2">
              Find Next Place To Visit
            </h1>
            <h2 className="w-full text-white text-sm md:text-lg font-semibold">
              Discover amazing places at exclusive deals
            </h2>
            <div className="w-full flex flex-wrap justify-center items-center gap-4 mt-8 p-4 bg-opacity-40 bg-white rounded-lg">
              <div className="flex items-center bg-white rounded-lg border w-full md:w-auto px-4 py-2">
                <select onChange={handleSearchChange} className="outline-none w-full bg-transparent select-styles">
                  <option>Select</option>
                  <option>Visa</option>
                  <option>CITIZENSHIP</option>
                  <option>RESIDENCY</option>
                </select>
              </div>

              <div className="flex items-center bg-white rounded-lg border w-full md:w-auto px-4 py-2">
                <select className="outline-none w-full bg-transparent select-styles">
                  <option>Select Nationality</option>
                  <option>American</option>
                  <option>British</option>
                  <option>Canadian</option>
                  <option>Indian</option>
                </select>
              </div>

              <div className="flex items-center bg-white rounded-lg border w-full md:w-auto px-4 py-2">
                <select className="outline-none w-full bg-transparent select-styles">
                  <option>Select Living</option>
                  <option>New York</option>
                  <option>London</option>
                  <option>Toronto</option>
                  <option>Mumbai</option>
                </select>
              </div>

              <div className="flex items-center bg-white rounded-lg border w-full md:w-auto px-4 py-2">
                <input
                  type="date"
                  className="outline-none w-full bg-transparent select-styles"
                  defaultValue="2024-05-30"
                />
              </div>

              <button
                onClick={() => navigate(`/search?searchTerm=${search}`)}
                className="bg-orange-500 w-12 h-12 flex justify-center items-center text-white text-xl font-semibold rounded-full hover:scale-95"
              >
                Go
              </button>
            </div>
          </div>

          <div className="main-content p-4 sm:p-6 flex flex-col gap-5 justify-center items-center">
          
            {visa.length > 0 && (
              <section id="visa">
                <h1 className="text-3xl font-semibold self-start mb-4 ">Visa</h1>
                <div id="visas" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 custom-md:grid-cols-3 gap-4">
                  {visa.map((packageData, i) => (
                    <PackageCard className="bg-blue-500 p-4" key={i} packageData={packageData} />
                  ))}
                </div>
              </section>
            )}
            {residency.length > 0 && (
              <section id="residency">
                <h1 className="text-3xl font-semibold self-start mb-4">Residencies</h1>
                <div id="residencies" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 custom-md:grid-cols-3 gap-4">
                  {residency.map((packageData, i) => (
                    <PackageCard className="bg-blue-500 p-4" key={i} packageData={packageData} />
                  ))}
                </div>
              </section>
            )}
            {citizenship.length > 0 && (
              <section id="citizenship">
                <h1 className="text-3xl font-semibold self-start mb-4">Citizenship</h1>
                <div id="residencies" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 custom-md:grid-cols-3 gap-4">
                  {citizenship.map((packageData, i) => (
                    <PackageCard className="bg-blue-500 p-4" key={i} packageData={packageData} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton phoneNumber="" />
    </>
  );
};

export default Home;
