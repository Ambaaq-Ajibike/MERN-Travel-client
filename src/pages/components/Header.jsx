// import  from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import defaultProfileImg from "../../assets/images/profile.png";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div className="bg-slate-400 p-4 flex justify-between items-center">



        <ul className="flex flex-wrap items-center  justify-between gap-10 text-white font-semibold list-none">
        
      <h1
          className="h-min text-4xl font-bold relative"
          style={{
            color: "transparent",
            WebkitTextStroke: "0.7px",
            WebkitTextStrokeColor: "#fff",
          }}
        >
          Come
          <span
            className="shadow-xl rounded-lg text-slate-700 text-2xl absolute left-1 top-[-10px] text-center"
            style={{
              WebkitTextStroke: "0",
            }}
          >
            Dream Tours
          </span>
        </h1>

          <li className="hover:underline hover:scale-105 transition-all duration-150">
            <Link to={`/search?searchTerm=${'visa'}`}>VISAS </Link>
          </li>
          <li className="hover:underline hover:scale-105 transition-all duration-150">
            <Link to={`/search?searchTerm=${'residence'}`}>RESIDENCY </Link>
          </li>
          <li className="hover:underline hover:scale-105 transition-all duration-150">
            <Link to={`/search?searchTerm=${'citizen'}`}>CITIZENSHIP </Link>
          </li>
         
          <li className="hover:underline hover:scale-105 transition-all duration-150">
            <Link to={`/about`}>PROOF OF FUNDS </Link>
          </li>
         
          <li className="hover:underline hover:scale-105 transition-all duration-150">
            <Link to={`/about`}>OTHERS SERVICE  </Link>
          </li>
         
        </ul>
      



        <ul className="flex flex-wrap items-center justify-between gap-10 text-white font-semibold list-none">
          <li className="hover:underline hover:scale-105 transition-all duration-150">
            <Link to={`/`}>Home</Link>
          </li>
         
          <li className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            {currentUser ? (
              <Link
                to={`/profile/${
                  currentUser.user_role === 1 ? "admin" : "user"
                }`}
              >
                <img
                  src={currentUser.avatar || defaultProfileImg}
                  alt={currentUser.username}
                  className="border w-10 h-10 border-black rounded-[50%]"
                />
              </Link>
            ) : (
              <Link to={`/login`}>Sign In / Register</Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
