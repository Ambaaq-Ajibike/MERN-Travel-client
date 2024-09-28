import { FaMoneyBillWave, FaHome, FaPassport, FaPlane } from 'react-icons/fa';

const GoldExpertSection = () => {
  return (
    <div className="bg-gray-800 text-white py-12 px-4 md:px-16 flex justify-between items-center">
      {/* Containers Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3 mb-6">
        {/* Donation */}
        <div className="flex flex-col items-center bg-white text-gray-900 p-6 rounded-md shadow-lg">
          <FaMoneyBillWave className="text-yellow-500 text-3xl mb-2" />
          <p className="font-semibold">Donation from</p>
          <p className="text-lg font-bold">$100,000</p>
        </div>

        {/* Real Estate */}
        <div className="flex flex-col items-center bg-white text-gray-900 p-6 rounded-md shadow-lg">
          <FaHome className="text-yellow-500 text-3xl mb-2" />
          <p className="font-semibold">Real estate from</p>
          <p className="text-lg font-bold">$200,000</p>
        </div>

        {/* Time to Citizenship */}
        <div className="flex flex-col items-center bg-white text-gray-900 p-6 rounded-md shadow-lg">
          <FaPassport className="text-yellow-500 text-3xl mb-2" />
          <p className="font-semibold">Time to citizenship</p>
          <p className="text-lg font-bold">3-4 Months</p>
        </div>

        {/* Visa-Free Travel */}
        <div className="flex flex-col items-center bg-white text-gray-900 p-6 rounded-md shadow-lg">
          <FaPlane className="text-yellow-500 text-3xl mb-2" />
          <p className="font-semibold">Visa-free travel</p>
          <p className="text-lg font-bold">145 Countries</p>
        </div>
      </div>

      {/* Request a Consultation Button */}
      <button className="bg-yellow-500 text-white text-lg font-bold py-3 px-6 rounded-md hover:bg-yellow-600">
        Request a Consultation
      </button>
    </div>
  );
};

export default GoldExpertSection;
