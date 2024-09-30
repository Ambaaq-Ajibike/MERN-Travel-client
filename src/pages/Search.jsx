import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PackageCard from "./PackageCard";
import { visas } from "../data/visas";
import { residencies } from "../data/residency";
import { citizenships } from "../data/citizenship";
const Search = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const urlParams = new URLSearchParams(location.search);
    const searchQuery = urlParams.toString();
    console.log({searchQuery})
    const queryType = searchQuery.split('=')[0];
    const query = searchQuery.split('=')[1];
  useEffect(() => {    
    if(queryType === "visa"){
      setPackages(visas[query].types.map((type, index) => {
        return {
          id: index,
          name: type.name,
        url: `/visa/${query}/${index}`,
        image: `visas%2F${type.name}`,
        packageTotalRatings: 5,
        moreContent:  `Processing Duration: ${type.processingDuration}`
      };
      }))
    }
    else if(queryType === "query"){
      if(query.toLowerCase() == "visa"){
        setPackages(visas.map((x, index) => ({
          id: index,
          name: x.name,
          url: `/search?visa=${index}`,
          image: `country%2F${x.name}`,
          packageTotalRatings: 5,
          packagePrice: 100000,
          discountedPrice: x.discountedPrice,
          moreContent: `${x.types.length} Visa Types`,
        })));
      }
      else if(query.toLowerCase() == "citizenship"){
        setPackages(citizenships.map((x, index) => ({
          id: index,
          name: x.title,
          url: `/citizenship/${index + 1}`,
          image: `country%2F${x.image}`,
          packageTotalRatings: 5,
          packagePrice: 100000,
          discountedPrice: x.discountedPrice,
          moreContent: ``,
        })));
      }
      else if(query.toLowerCase() == "residency"){
        setPackages(residencies.map((x, index) => ({
          id: index,
    name: x.name,
    url: `/residency/${index + 1}`,
    image: `country%2F${x.image}`,
    packageTotalRatings: 5,
    packagePrice: 100000,
    discountedPrice: x.discountedPrice,
    moreContent: ``,
        })));
      }
    }
  }, [queryType]);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
      </div>
      {/* ------------------------------------------------------------------------------- */}
      <div className="flex-1">
        <h1 className="text-xl font-semibold border-b p-3 text-slate-700 mt-5">
          VISAS
        </h1>
        <div className="w-full p-5 flex flex-wrap gap-2">
          {packages.length === 0 && (
            <p className="text-xl text-slate-700">No Packages Found!</p>
          )}
          {packages &&
            packages.map((packageData, i) => (
              <PackageCard key={i} packageData={packageData} />
            ))}
        </div>
        
      </div>
    </div>
  );
};

export default Search;
