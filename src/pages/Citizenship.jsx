import React from 'react';
import { useParams } from 'react-router-dom';
import { citizenships } from '../data/citizenship';

const Citizenship = () => {
  const { id } = useParams();
  console.log(id, "iiiiiiiiid")
  const citizenship = citizenships[id - 1];

  // Helper function to recursively render nested objects or arrays
  const renderValue = (value) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      return (
        <ul className="list-disc list-inside ml-6">
          {Object.entries(value).map(([nestedKey, nestedValue], index) => (
            <li key={index}>
              <strong className="capitalize">{nestedKey.replace(/([A-Z])/g, ' $1').trim()}:</strong> {renderValue(nestedValue)}
            </li>
          ))}
        </ul>
      );
    } else if (Array.isArray(value)) {
      return (
        <ul className="list-disc list-inside ml-6">
          {value.map((item, index) => (
            <li key={index}>{renderValue(item)}</li>
          ))}
        </ul>
      );
    } else {
      return <span>{value}</span>;
    }
  };

  const renderSection = (title, data) => {
    if (!data) return null;
    
    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <ul className="list-disc list-inside">
          {Object.entries(data).map(([key, value], index) => {
            if (value === null) return null;
            return (
              <li key={index}>
                <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {renderValue(value)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-md overflow-hidden mb-8 relative">
      <div className="bg-white shadow-md rounded-md overflow-hidden mb-8 relative">
    <img
           src={`https://firebasestorage.googleapis.com/v0/b/gooutfilter.appspot.com/o/country%2F${citizenship.image}.jpg?alt=media&token=bfa49e65-3d50-4117-8f74-1965c38854b8`}
            alt={citizenship.title}
            className="w-full h-64 object-cover"
          />
      <div className="p-4">
      <div className="flex md:block justify-between">
        <div>
              <h2 className="text-xl font-semibold">{citizenship.title}</h2>
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
        <div className="p-4">         
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
            {renderSection('Key Facts', citizenship.keyFacts)}
            {renderSection('Benefits', citizenship.benefits)}
            {renderSection('Application Procedure', citizenship.applicationProcedure)}
            {renderSection('Investment Options', citizenship.investmentOptions)}
            {renderSection('Eligibility Criteria', citizenship.eligibilityCriteria)}
            {renderSection('Living Conditions', citizenship.livingConditions)}
            {renderSection('Legal Information', citizenship.legalInformation)}
            {renderSection('Comparison', citizenship.comparison)}
            {renderSection('Notable Citizens', citizenship.notableCitizens)}
            {renderSection('Visa Free Travel', citizenship.visaFreeTravel)}
            {renderSection('Investment Impact', citizenship.investmentImpact)}
            {renderSection('Historical Context', citizenship.historicalContext)}
            {renderSection('Why Choose', citizenship.whyChoose)}
            {renderSection('Fees', citizenship.fees)}
            {renderSection('Passport Overview', citizenship.passportOverview)}
            {renderSection('Seeking Expert Guidance', citizenship.seekingExpertGuidance)}
            {renderSection('Proof of Ownership', citizenship.proofOfOwnership)}
            {renderSection('Application Review', citizenship.applicationReview)}
            {renderSection('Initial Phase', citizenship.initialPhase)}
            {renderSection('Finalization', citizenship.finalization)}
            {renderSection('Investment Analysis', citizenship.investmentAnalysis)}
            {renderSection('Future Program', citizenship.futureProgram)}
            {renderSection('Due Diligence', citizenship.dueDiligence)}
            {renderSection('Global Benefits', citizenship.globalBenefits)}
            {renderSection('Program Overview', citizenship.programOverview)}
            {renderSection('Eligibility Requirements', citizenship.eligibilityRequirements)}
            {renderSection('Passport Strength', citizenship.passportStrength)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Citizenship;
