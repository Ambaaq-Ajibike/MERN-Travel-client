import Footer from "./components/Footer";
import { GenForm } from "./components/GenForm";
import { MdLocationOn } from "react-icons/md";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <div>
          <div className="flex flex-col justify-start items-center bg-white px-4 pb-0 mb-24">
    <div className="flex flex-col justify-center items-center md:w-2/5 m-10 mt-20">
    <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-center">
            At 200 Travels, we are dedicated to providing comprehensive support for all your travel needs. Whether you're applying for residency, citizenship, or a visa, we ensure a smooth and hassle-free experience.
          </p>
    </div>
    
      <div className=" p-8  flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Side: Contact Information */}
        <div className="lg:w-1/2 space-y-6">
          <div className="space-y-4">
            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="text-blue-500">             
            <MdLocationOn className="text-xl" />
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Location</p>
                <p className="text-gray-500">123 Main Street, Anytown USA</p>
              </div>
            </div>
            
            {/* Phone Numbers */}
            <div className="flex items-center space-x-4">
              <div className="text-blue-500">
              <FaPhone className="text-xl" />

              </div>
              <div>
                <p className="text-gray-700 font-semibold">Give us a call</p>
                <p className="text-gray-500">(555) 555-5555, +239-555-010B</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-blue-500">
              <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Email</p>
                <p className="text-gray-500">contact@200travels.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
      <GenForm/>
      </div>
    </div>
    <Footer/>
    </div>
  
  );
};

export default ContactForm;
