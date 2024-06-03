import  { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db} from "../firebase.js";

const EmailVerification = () => {
  const navigate = useNavigate();
const [code, setCode] = useState("");
const [codeError, setCodeError] = useState(null);
const [loading, setLoading] = useState(false);
const usersCollectionRef = collection(db, "appUsers");

useEffect(()=> localStorage.removeItem("persist:root"), []);
const getUser = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData, "userssss");
const user = filteredData.find(x => x.code == code);
      if(user){
        return true;
      }
      setCodeError("Invalid code");
    } catch (err) {
      console.error(err);
    }
    return false;
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const userCorrect = await getUser();
    if(userCorrect){
        setLoading(false)
        navigate('/login')
    }
    e.preventDefault();
    setLoading(false)
  }

  return (
    <section className="bg-cover bg-center bg-gray-50 dark:bg-gray-900" style={{ backgroundImage: "url('/images/tourist.jpg')" }}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-center mb-6">
   
          </div>

          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Verify your email
            </h1>

            <p className="text-sm font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white" style={{fontSize: "20px"}}>
             Check you mail for verification code
            </p>
            
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Verification Code</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={loading}
              >
                {loading ? "Loading..." : "Verify"}
              </button>
              {codeError && <p className="text-sm text-red-600">{codeError}</p>}
            
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailVerification;
