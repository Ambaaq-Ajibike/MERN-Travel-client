import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PackageCard from "./PackageCard";
import { visas } from "../data/visas";
const Search = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchQuery = urlParams.toString();
    const queryType = searchQuery.split('=')[0];
    const query = searchQuery.split('=')[1];
   console.log(searchQuery, "urlParams");
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
  }, []);
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
