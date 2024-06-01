import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import defaultProfileImg from "../../assets/images/profile.png";
import { visaList, ResidencyList, citizenList } from "../data";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePackageClick = (id) => {
    navigate(`/package/${id}`);
  };

  return (
    <header className="bg-white p-4 flex flex-col md:flex-row justify-between items-center relative">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link to="/">
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
        </Link>

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
              <li className="dropdown">
                <Link to="#">VISAS</Link>
                <div className="dropdown-content">
                  {visaList.map(item => (
                    <a key={item.id} onClick={() => handlePackageClick(item.id)}>
                      {item.packageName}
                    </a>
                  ))}
                </div>
              </li>
              <li className="dropdown">
                <Link to="#">RESIDENCY</Link>
                <div className="dropdown-content">
                  {ResidencyList.map(item => (
                    <a key={item.id} onClick={() => handlePackageClick(item.id)}>
                      {item.packageName}
                    </a>
                  ))}
                </div>
              </li>
              <li className="dropdown">
                <Link to="#">CITIZENSHIP</Link>
                <div className="dropdown-content">
                  {citizenList.map(item => (
                    <a key={item.id} onClick={() => handlePackageClick(item.id)}>
                      {item.packageName}
                    </a>
                  ))}
                </div>
              </li>
              <li className="hover:underline hover:scale-105 transition-all duration-150">
                <Link to={`/about`}>PROOF OF FUNDS</Link>
              </li>
              <li className="hover:underline hover:scale-105 transition-all duration-150">
                <Link to={`/about`}>OTHERS SERVICE</Link>
              </li>
            </ul>
            <ul className="flex flex-col items-center gap-4 text-black font-semibold list-none">
              <li className="bg-transparent  text-blue-700 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
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
        <ul className="flex flex-row items-center gap-4 text-black font-semibold list-none">
          <li className="dropdown">
            <Link to="#">VISAS</Link>
            <div className="dropdown-content">
              {visaList.map(item => (
                <a key={item.id} onClick={() => handlePackageClick(item.id)}>
                  {item.packageName}
                </a>
              ))}
            </div>
          </li>
          <li className="dropdown">
            <Link to="#">RESIDENCY</Link>
            <div className="dropdown-content">
              {ResidencyList.map(item => (
                <a key={item.id} onClick={() => handlePackageClick(item.id)}>
                  {item.packageName}
                </a>
              ))}
            </div>
          </li>
          <li className="dropdown">
            <Link to="#">CITIZENSHIP</Link>
            <div className="dropdown-content">
              {citizenList.map(item => (
                <a key={item.id} onClick={() => handlePackageClick(item.id)}>
                  {item.packageName}
                </a>
              ))}
            </div>
          </li>
          <li className="hover:underline hover:scale-105 transition-all duration-150">
            <Link to={`/about`}>PROOF OF FUNDS</Link>
          </li>
          <li className="hover:underline hover:scale-105 transition-all duration-150">
            <Link to={`/about`}>OTHERS SERVICE</Link>
          </li>
        </ul>
        <ul className="flex flex-row items-center gap-4 text-black font-semibold list-none">
          <li className="bg-transparent  text-blue-700 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
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
    </header>
  );
};

export default Header;
