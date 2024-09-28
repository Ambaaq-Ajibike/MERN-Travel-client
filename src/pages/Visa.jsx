import { useState, useEffect } from "react";
import { visas } from "../data/visas";
import { useParams } from "react-router";
import GoldExpertSection from "./components/GoldExpertSection";
const Visa = () => {
  const params = useParams();
  console.log(params);
 const visa = visas[params.visaId];
 const type = visa.types[params.typeId];
  return (
    <div className="container mx-auto p-4">
    <div className="bg-white shadow-md rounded-md overflow-hidden mb-8 relative">
    <img
           src={`https://firebasestorage.googleapis.com/v0/b/gooutfilter.appspot.com/o/visas%2F${type.name}.jpg?alt=media&token=bfa49e65-3d50-4117-8f74-1965c38854b8`}
            alt={type.name}
            className="w-full h-64 object-cover"
          />
      <div className="p-4">
      <div className="flex md:block justify-between">
        <div>
              <h2 className="text-xl font-semibold">{visa.name} {type.name}</h2>
              <div className="flex items-center mt-2">
                <div className="text-yellow-500 flex">
                  {/* Replace with your star icon logic or use an icon library */}
                  <span>⭐⭐⭐⭐⭐</span> 
                </div>

              </div>
        </div>            
        <div className="bg-white p-2 flex justify-between items-center md:absolute md:bottom-24 md:right-4 shadow-md rounded-md">
          <div className="text-right">
            <span className="text-gray-600">From USD</span>
            <span className="text-2xl font-semibold">1000.00</span>
            <button className="block mt-2 px-4 py-2 bg-orange-500 text-white rounded-md">BOOK NOW</button>
          </div>
          
        </div>
        
      </div>
      
      </div>
    </div>
      <div className="bg-white rounded-lg shadow-lg   mb-8  overflow-hidden">
      <div className="p-6">
        <p className="mb-2">
          <span className="font-semibold">Validity: </span>
          {type.validity}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Can Dependent Come?: </span>
          {type.canDependentCome}
        </p>

        <h4 className="text-lg font-semibold mb-2">Documents Required:</h4>
        <ul className="list-disc pl-5">
          {type.documentsRequired.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
      </div>
        
      </div>
      <GoldExpertSection />
    </div>


  );
};

export default Visa;
