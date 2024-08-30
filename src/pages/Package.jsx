import { useState, useEffect } from "react";
import { visas } from "../data/visas";
const DigitalNomadVisa = () => {
  const [visaInfo, setVisaInfo] = useState( {
    name: "",
    validity: "",
    canDependentCome: "",
    processingDuration: "",
    documentsRequired: [
    ]
},);

  useEffect(() => {
    const url = window.location.href.split('?');
    const visa = url[1].split('=')[1];
    const index = url[2].split('=')[1];
   console.log(visa, index, "urlParams");
   const res = visas[visa].types[index];
    setVisaInfo(res)
    console.log(res);
  }, []);




  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden md:mx-60">
      <div className="relative">
        <img
          src={`https://firebasestorage.googleapis.com/v0/b/gooutfilter.appspot.com/o/visas%2F${visaInfo.name}.jpg?alt=media&token=bfa49e65-3d50-4117-8f74-1965c38854b8`}// Replace with actual image path
          alt="Visa Cover"
          className="w-full h-52 md:h-96 object-cover"
          
        />
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white w-full">
          <h3 className="text-xl font-semibold">{visaInfo.name}</h3>
          <p className="text-lg">Processing Time: {visaInfo.processingDuration}</p>
        </div>
      </div>

      <div className="p-4">
        <p className="mb-2">
          <span className="font-semibold">Validity: </span>
          {visaInfo.validity}
        </p>
        <p className="mb-4">
          <span className="font-semibold">Can Dependent Come?: </span>
          {visaInfo.canDependentCome}
        </p>

        <h4 className="text-lg font-semibold mb-2">Documents Required:</h4>
        <ul className="list-disc pl-5">
          {visaInfo.documentsRequired.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-100 p-4 text-center">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">Book Now</button>
      </div>
    </div>
  );
};

export default DigitalNomadVisa;
