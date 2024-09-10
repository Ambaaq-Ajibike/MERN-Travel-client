import { useState } from "react";
import UserSignup from "./components/UserSignUp";
import AgentSignup from "./components/AgentSignup";

const Signup = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [fade, setFade] = useState(true);

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setFade(false);
      setTimeout(() => {
        setActiveTab(tab);
        setFade(true);
      }, 200); // Duration should match the fade-out transition
    }
  };

  return (
    <section className="bg-cover bg-center h-screen overflow-hidden bg-gray-50 dark:bg-gray-900" style={{ backgroundImage: "url('/images/tourist.jpg')" }}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex mt-6 justify-between border-b border-gray-300 dark:border-gray-600">
              <button
                className={`w-1/2 py-2 text-xl font-bold cursor-pointer transition-colors duration-300 ${
                  activeTab === "user"
                    ? "border-b-4 border-blue-500 text-blue-500"
                    : "text-gray-500 dark:text-gray-400 hover:text-blue-500"
                }`}
                onClick={() => handleTabChange("user")}
              >
                Register as User
              </button>
              <button
                className={`w-1/2 py-2 text-xl font-bold cursor-pointer transition-colors duration-300 ${
                  activeTab === "agent"
                    ? "border-b-4 border-blue-500 text-blue-500"
                    : "text-gray-500 dark:text-gray-400 hover:text-blue-500"
                }`}
                onClick={() => handleTabChange("agent")}
              >
                Register as Agent
              </button>
            </div>

            <div
              className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
            >
              {activeTab === "user" ? <UserSignup /> : <AgentSignup />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
