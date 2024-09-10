import  { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase.js";
import { getDocs, query, where, collection, updateDoc, doc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../redux/user/userSlice.js";
const Login = () => {
  
const usersCollectionRef = collection(db, "appUsers");
const agentsCollectionRef = collection(db, "appAgent");
  const { stateLoading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
const [codeError, setCodeError] = useState(null);
const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
 let getUser = async () =>{
  const q = query(usersCollectionRef, where("userId", "==", auth?.currentUser?.uid));

      const querySnapshot = await getDocs(q);
      const filteredData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
  
      // Since we expect only one document, find the user (or handle if not found)
      const user = filteredData[0];
      return user;
 }


 let getAgent = async () =>{
  const q = query(agentsCollectionRef, where("userId", "==", auth?.currentUser?.uid));

      const querySnapshot = await getDocs(q);
      const filteredData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
  
      // Since we expect only one document, find the user (or handle if not found)
      const user = filteredData[0];
      return user;
 }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      dispatch(loginStart());
      const res = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      localStorage.setItem("isUserLoggedIn", true);
      if (res?.user) {
        dispatch(loginSuccess("Login success"));
        setLoading(false)
        if(await getAgent() !== undefined){
          localStorage.setItem("userRole", "agent");
          navigate("/profile/agent");
          return;
        }
        localStorage.setItem("userRole", "user");
        navigate("/profile/user");
      } else {
        dispatch(loginFailure("Message"));
        setLoading(false)
        setCodeError("Error, Pls try again")
      }
    } catch (error) {
      setLoading(false)
      dispatch(loginFailure(error.message));
      setCodeError(error.message);
    }
  };

  return (
    <section className="bg-cover bg-center  h-screen overflow-hidden bg-gray-50 dark:bg-gray-900" style={{ backgroundImage: "url('/images/tourist.jpg')" }}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-center mb-6">
   
          </div>

          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  minLength={5}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={loading}
              >
                {loading ? "Loading..." : "Sign in"}
              </button>
              {codeError && <p className="text-sm text-red-600">{codeError}</p>}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <Link to="/signup" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
