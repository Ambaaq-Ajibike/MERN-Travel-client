import { useState } from "react";
import { useParams } from "react-router";
import GoldExpertSection from "./components/GoldExpertSection";
import { citizenships } from "../data/citizenship";

// Sample data structure based on your provided object


const Citizenship = () => {
  const params= useParams();
  const program = citizenships[params.id - 1];
  console.log(program)
  return (
    <div className="container mx-auto p-4">
         <div className="bg-white shadow-md rounded-md overflow-hidden mb-8 relative">
    <img
            src={`https://firebasestorage.googleapis.com/v0/b/gooutfilter.appspot.com/o/country%2F${program.image}.jpg?alt=media&token=bfa49e65-3d50-4117-8f74-1965c38854b8`}
            alt={program.title}
            className="w-full h-64 object-cover"
          />
      <div className="p-4">
      <div className="flex md:block justify-between">
        <div>
              <h2 className="text-xl font-semibold">{program.title}</h2>
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
      
        <p className="text-gray-700 mb-4">{program.description}</p>

      </div>
    </div>

      <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-2">Key Facts:</h4>
          <ul className="list-disc pl-5">
            <li><span className="font-semibold">Capital: </span>{program.keyFacts.capital}</li>
            <li><span className="font-semibold">Continent: </span>{program.keyFacts.continent}</li>
            <li><span className="font-semibold">Sea: </span>{program.keyFacts.sea}</li>
            <li><span className="font-semibold">Total Area: </span>{program.keyFacts.totalArea}</li>
            <li><span className="font-semibold">Currency: </span>{program.keyFacts.currency.join(", ")}</li>
            <li><span className="font-semibold">Visa-Free Countries: </span>{program.keyFacts.visaFreeCountries}</li>
            <li><span className="font-semibold">Population: </span>{program.keyFacts.population}</li>
            <li><span className="font-semibold">Language: </span>{program.keyFacts.language}</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Benefits:</h4>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-semibold">Ease of Travel: </span>
              {program.benefits.easeOfTravel.description}
            </li>
            <li>
              <span className="font-semibold">Tax Benefits: </span>
              {program.benefits.taxBenefits}
            </li>
            <li>
              <span className="font-semibold">Business Opportunities: </span>
              {program.benefits.businessOpportunities}
            </li>
            <li>
              <span className="font-semibold">Family Focused: </span>
              {program.benefits.familyFocused}
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Investment Options:</h4>
          <p><span className="font-semibold">Sustainable Growth Fund: </span> {program.investmentOptions.singleInvestor}</p>
          <p><span className="font-semibold">Real Estate Purchase: </span> {program.investmentOptions.realEstatePurchase.minimumInvestment}</p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Application Procedure:</h4>
          <ol className="list-decimal pl-5">
            {Object.values(program.applicationProcedure).map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <h4 className="text-lg font-semibold mt-4 mb-2">Agent Recommendation:</h4>
          <p>{program.agentRecommendation}</p>
        </div>
      </div>

      <GoldExpertSection />
    </div>
  );
};

export default Citizenship;
