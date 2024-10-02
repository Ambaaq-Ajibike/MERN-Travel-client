import Footer from "./components/Footer";
import { GenForm } from "./components/GenForm";
import { IoIosDocument } from "react-icons/io";
import { GoLaw } from "react-icons/go";
import { MdWorkspaces } from "react-icons/md";
import { FaPen, FaPencil } from "react-icons/fa6";

const OtherServices = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-center bg-white px-4 pb-0 mb-24">
        <div className="flex flex-col justify-center items-center md:w-2/5 m-10 mt-20">
          <h2 className="text-5xl font-bold mb-4 text-gray-900 text-center">Other Services</h2>
          <p className="text-gray-600 text-center">
            At 200 Travel, we provide a wide array of services designed to assist you throughout your travel and relocation process.
          </p>
        </div>
        <div className="p-8 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Left Side: Services Information */}
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <IoIosDocument className="text-2xl text-gray-900" />
                <div>
                  <p className="text-gray-700 font-semibold text-xl">Document services</p>
                  <p className="text-gray-500 text-lg">Easy document preparation for a hassle-free travel experience.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <GoLaw className="text-xl text-gray-900" />
                <div>
                  <p className="text-gray-700 font-semibold text-xl">Appeal services</p>
                  <p className="text-gray-500 text-lg">Expert help with travel or visa application appeals.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MdWorkspaces className="text-xl text-gray-900" />
                <div>
                  <p className="text-gray-700 font-semibold text-xl">Job search assistance</p>
                  <p className="text-gray-500 text-lg">Personalized support to match you with the right job opportunities.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaPen className="text-xl text-gray-900" />
                <div>
                  <p className="text-gray-700 font-semibold text-xl">CV writing</p>
                  <p className="text-gray-500 text-lg">Craft a standout CV with our expert writing services.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaPencil className="text-xl text-gray-900" />
                <div>
                  <p className="text-gray-700 font-semibold text-xl">SOP writing</p>
                  <p className="text-gray-500 text-lg">Craft a standout Statement of Purpose with our help.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side: Contact Form */}
          <GenForm  />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OtherServices;
