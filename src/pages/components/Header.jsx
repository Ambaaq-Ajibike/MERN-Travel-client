import { useState } from "react";
import {Link, scroller } from 'react-scroll'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import defaultProfileImg from "../../assets/images/profile.png";
import "../styles/Header.css"
import { FaUser } from 'react-icons/fa';
const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (section) => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      // Already on the landing page, just scroll to the section
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -70, // Adjust for your header height if needed
      });
    } else {
      // Navigate to the landing page first, then scroll to the section
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 100); // Give time for navigation to complete before scrolling
    }
  };
  return (
    <header className="bg-white p-4 flex flex-col md:flex-row justify-between items-center relative">
      <div className="flex justify-between items-center w-full md:w-auto">
        <RouterLink to="/">
          <h1
            className="text-2xl md:text-4xl font-bold relative"
            style={{
              color: "transparent",
              WebkitTextStroke: "0.7px",
              WebkitTextStrokeColor: "#000",
            }}
          >
            Come
            <span
              className="shadow-xl rounded-lg text-slate-700 text-lg md:text-2xl absolute left-1 top-[-10px] text-center"
              style={{
                WebkitTextStroke: "0",
              }}
            >
              Dream Tours
            </span>
          </h1>
        </RouterLink>

        <button className="md:hidden block text-black" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={() => setMenuOpen(false)}></div>
          <nav className="fixed top-0 left-0 w-full bg-white z-20 slide-down p-4 flex flex-col items-center gap-4">
            <button className="absolute top-4 right-4 text-black" onClick={() => setMenuOpen(false)}>
              ✖
            </button>
            <ul className="flex flex-col items-center gap-4 text-black font-semibold list-none">
              <li className="cursor-pointer" onClick={() => handleScrollToSection("visa")}>VISAS</li>
              <li className="cursor-pointer" onClick={() => handleScrollToSection("residency")}>RESIDENCY
              </li>
              <li className="cursor-pointer" onClick={() => handleScrollToSection("citizenship")}>CITIZENSHIP</li>
              <li  className="cursor-pointer" onClick={() => handleScrollToSection("/")}>PROOF OF FUNDS</li>
              <li className="cursor-pointer" onClick={() => handleScrollToSection("/")}>OTHERS SERVICE </li>
            </ul>
            <ul className="flex flex-col items-center gap-4 text-black font-semibold list-none">
              <li className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                {currentUser ? (
                  <Link to={`/profile/${currentUser.user_role === 1 ? "admin" : "user"}`}>
                    <img
                      src={currentUser.avatar || defaultProfileImg}
                      alt={currentUser.username}
                      className="border w-10 h-10 border-black rounded-full"
                    />
                  </Link>
                ) : (
                  <Link to={`/login`}>Sign In / Register</Link>
                )}
              </li>
            </ul>
          </nav>
        </>
      )}

      <nav className="hidden md:flex flex-row items-center gap-4">
        <ul className="flex flex-row items-center gap-4 text-black font-semibold list-none nav-font">
        <li className="cursor-pointer" onClick={() => handleScrollToSection("visa")}>VISAS</li>
              <li className="cursor-pointer" onClick={() => handleScrollToSection("residency")}>RESIDENCY
              </li>
              <li className="cursor-pointer" onClick={() => handleScrollToSection("citizenship")}>CITIZENSHIP</li>
              <li  className="cursor-pointer" onClick={() => handleScrollToSection("/")}>PROOF OF FUNDS</li>
              <li className="cursor-pointer" onClick={() => handleScrollToSection("/")}>OTHERS SERVICE </li>
        </ul>
        <ul className="flex flex-row items-center gap-4 text-black font-semibold list-none">
        {currentUser ? (
          <li className="bg-transparent  text-blue-700 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
          <Link to={`/profile/${localStorage.getItem("userRole") === "agent" ? "agent" : "user"}`}>
                <img
                  src={currentUser.avatar || defaultProfileImg}
                  alt={currentUser.username}
                  className="border w-10 h-10 border-black rounded-full"
                />
              </Link>
            </li>
            
            ) : (
              <li className="hover:underline hover:scale-105 transition-all duration-150">
              <Link className="user-login" to={`/login`}><FaUser/> Log In </Link>
            </li>
            
            )}
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
