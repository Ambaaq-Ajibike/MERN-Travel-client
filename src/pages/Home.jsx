import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import "./styles/Home.css";
import Footer from "./components/Footer";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhatsAppButton from "./components/WhatsApp";
import { visas } from "../data/visas";
import { residencies } from "../data/residency";
import { citizenships } from "../data/citizenship";
import AppCarousel from "./components/AppCarousel";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const dataFetchedRef = useRef(false);

  // Cache visa, residency, and citizenship lists using useMemo
  const visaList = useMemo(() => visas.map((x, index) => ({
    id: index,
    name: x.name,
    url: `/search?visa=${index}`,
    image: `country%2F${x.name}`,
    packageTotalRatings: 5,
    packagePrice: 100000,
    discountedPrice: x.discountedPrice,
    moreContent: `${x.types.length} Visa Types`,
  })), [visas]);

  const residencyList = useMemo(() => residencies.map((x, index) => ({
    id: index,
    name: x.name,
    url: `/residency/${index + 1}`,
    image: `country%2F${x.image}`,
    packageTotalRatings: 5,
    packagePrice: 100000,
    discountedPrice: x.discountedPrice,
    moreContent: ``,
  })), [residencies]);

  const citizenshipList = useMemo(() => citizenships.map((x, index) => ({
    id: index,
    name: x.title,
    url: `/citizenship/${index + 1}`,
    image: `country%2F${x.image}`,
    packageTotalRatings: 5,
    packagePrice: 100000,
    discountedPrice: x.discountedPrice,
    moreContent: ``,
  })), [citizenships]);

  // Handle search change
  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const slides = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png"
  ];

  return (
    <>
      <div className="main w-full relative mb-24">
        <div className="w-full flex flex-col">
          <Carousel
              className="w-full"
              showArrows={true}
              showThumbs={false}
              autoPlay
              infiniteLoop
              transitionTime={1000}
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
            <h2 className="w-full text-white text-sm md:text-lg font-semibold">
              Discover amazing places at exclusive deals
            </h2>
            <div className="w-full flex flex-wrap justify-center items-center gap-4 mt-8 p-4 bg-opacity-40 ">
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
                <input
                  type="date"
                  className="outline-none w-full bg-transparent select-styles"
                  defaultValue="2024-05-30"
                />
              </div>
              <button className="bg-orange-500 w-12 h-12 flex justify-center items-center text-white text-xl font-semibold rounded-full hover:scale-95" onClick={() => navigate(`/search?query=${search}`)}>
                Go
              </button>
            </div>
          </div>

          <div className="main-content p-4 sm:p-6 flex flex-col gap-5 justify-center items-center mt-16">
            <section id="visa" className="my-12">
              <h1 className="text-3xl font-semibold self-start mb-4">
                Visa
              </h1>
              <AppCarousel visa={visaList} />
            </section>

            <section id="residency" className="my-12">
              <h1 className="text-3xl font-semibold self-start mb-4">
                Residency
              </h1>
              <AppCarousel visa={residencyList} />
            </section>

            <section id="citizenship" className="my-12">
              <h1 className="text-3xl font-semibold self-start mb-4">
                Citizenship
              </h1>
              <AppCarousel visa={citizenshipList} />
            </section>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton phoneNumber={`+2349127051235`} />
    </>
  );
};

export default Home;
