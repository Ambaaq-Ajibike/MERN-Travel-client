import { useState } from "react";
import UserSignup from "./components/UserSignUp";
import AgentSignup from "./components/AgentSignup";

const Signup = () => {
  const [activeTab, setActiveTab] = useState("user");

  return (
    <section className="bg-cover bg-center bg-gray-50 dark:bg-gray-900" style={{ backgroundImage: "url('/images/tourist.jpg')" }}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        
          
          
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="flex justify-start items-center mb-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mr-6">
              Register as
            </h1>
            <div className="flex items-center space-x-2">
              <button 
                className={`px-4 py-2 ${activeTab === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
                onClick={() => setActiveTab("user")}
              >
                User
              </button>
              <span className="text-gray-600 dark:text-gray-400">/</span>
              <button 
                className={`px-4 py-2 ${activeTab === "agent" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
                onClick={() => setActiveTab("agent")}
              >
                Agent
              </button>
            </div>
          </div>
         
            {activeTab === "user" ? <UserSignup /> : <AgentSignup />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
