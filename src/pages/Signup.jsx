import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import SendEmail from "../email/SendEmail.jsx";

const Signup = () => {
const [loading, setLoading] = useState(false);
const [passwordError, setPasswordError] = useState(null);  
const [codeError, setCodeError] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    userId: "",
    code: ""
  });
  
  function validatePassword(password) {
    const hasUppercase = password.toLowerCase() !== password;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&]/.test(password);
    const hasMinimumLength = password.length >= 5;
    if(!hasUppercase){
      return "Password must have upper case";
    }
    if(!hasNumber){
      return "Password must contain at least one digit";
    }
    if(!hasSpecialChar){
      return "Password must contain at least one special character";
    }
    if(!hasMinimumLength){
      return "Password length must not be less than 5";
    }
    return '';
  }
  
  const handleChange = (e) => {
    if(e.target.id == "password"){
     const passwordMessage =  validatePassword(e.target.value);
      setPasswordError(passwordMessage)
    }
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const userCollectionRef = collection(db, "appUsers");
  function generateRandomNumber(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
      const digit = Math.floor(Math.random() * 10);
      result += digit.toString();
    }
    return parseInt(result, 10);
  }
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      let verficationCode = generateRandomNumber(5);
      formData.code = verficationCode;
     
      const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      if (res?.user) {
        formData.userId = auth?.currentUser?.uid;
        delete formData.password;
        await addDoc(userCollectionRef, formData);
        SendEmail(formData.email,  formData.username,  verficationCode);
        setLoading(false)
        navigate("/verifyemail");
      } else {
        setCodeError("Error while logging in");
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      setCodeError(error.message)
    }
    setLoading(false);
  };

  return (
    <section className="bg-cover bg-center bg-gray-50 dark:bg-gray-900" style={{ backgroundImage: "url('/images/tourist.jpg')" }}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-center mb-6">

          </div>

          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
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
                  minLength={5}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
                {(passwordError) && <p className="text-sm text-red-600">{passwordError}</p>}
              </div>
              <div>
                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                <textarea
                  maxLength={200}
                  name="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={loading}
              >
              {loading ? "Loading..." : "Sign up"}
              </button>
              {codeError && <p className="text-sm text-red-600">{codeError}</p>}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Have an account? <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
