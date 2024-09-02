import { useParams } from "react-router";
import { residencies } from "../data/residency";

const Residency = () => {
    const params = useParams();
  const residency = residencies[params.id -1];
  return (
    <div className="container mx-auto p-4">
    <div className="bg-white shadow-md rounded-md overflow-hidden mb-8 relative">
    <img
            src={`https://firebasestorage.googleapis.com/v0/b/gooutfilter.appspot.com/o/country%2F${residency.image}.jpg?alt=media&token=bfa49e65-3d50-4117-8f74-1965c38854b8`}
            alt={residency.name}
            className="w-full h-64 object-cover"
          />
      <div className="p-4">
      <div className="flex md:block justify-between">
        <div>
              <h2 className="text-xl font-semibold">{residency.name}</h2>
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
      
        <p className="text-gray-700 mb-4">{residency.description}</p>

      </div>
    </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Key Takeaways</h2>
          <ul className="list-disc list-inside mb-6">
            {residency.keyTakeAways.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>{item.name}:</strong> {item.description}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-4">Requirements</h2>
          <ul className="list-disc list-inside mb-6">
            {residency.requirements.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>{item.name}:</strong> {item.description}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-4">Application Process</h2>
          <ul className="list-disc list-inside mb-6">
            {residency.process.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>{item.name}:</strong> {item.description}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-4">Investment Routes</h2>
          <ul className="list-disc list-inside mb-6">
            {residency.routes.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>{item.name}:</strong> {item.description}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside mb-6">
            {residency.benefits.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>{item.name}:</strong> {item.description}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-4">Renewal</h2>
          <ul className="list-disc list-inside mb-6">
            {residency.renewal.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>{item.name}:</strong> {item.description}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-4">Living in Montenegro</h2>
          <ul className="list-disc list-inside mb-6">
            {residency.living.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>{item.name}:</strong> {item.description}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-4">Considerations</h2>
          <ul className="list-disc list-inside mb-6">
            {residency.considerations.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>{item.name}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Residency;
