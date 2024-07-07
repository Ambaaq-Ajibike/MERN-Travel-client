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
          <div className="flex mt-6 justify-between">
              <button 
                className="inline-block align-baseline font-bold text-xl hover:text-[white]-800 cursor-pointer"
                onClick={() => setActiveTab("user")}
             style={{"color": "blue"}}
              >
                Register as User
              </button>
              <button 
                className="inline-block align-baseline font-bold text-xl hover:text-[white]-800 cursor-pointer"
                onClick={() => setActiveTab("agent")}
                style={{"color": "blue"}}
              >
                Register as Agent
              </button>
            </div>
         
            {activeTab === "user" ? <UserSignup /> : <AgentSignup />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
