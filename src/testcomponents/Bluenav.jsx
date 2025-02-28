import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import bgImage from '../assets/MainLogo.png'; // Import your logo

const Navbar = ({ isLoggedIn, role, onLogout }) => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route
  const dropdownRef = useRef(null);

  const handleHomeNavigation = () => {
    if (isLoggedIn) {
      navigate(role === "User/Volunteer" ? "/user-home" : role === "Organization" ? "/organization" : "/");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path ? "border-b-3 border-[#259acb]" : "";

  return (
    <div className="flex items-center justify-between bg-gradient-to-b from-[#e8f1f5] to-[#ffffff] w-full h-16 px-4 shadow-md">
      {/* Logo on the left */}
      <Link to="/">
        <img src={bgImage} alt="Relief Bridge Logo" className="h-35 w-auto object-contain" />
      </Link>

      {/* Navigation Links */}
      <div className="flex-1 flex justify-center space-x-6">
        <button 
          onClick={handleHomeNavigation} 
          className={`!text-[#259acb] font-bold hover:text-gray-300 text-xl ${isActive("/")}`}
        >
          Home
        </button>
        <Link to="/map" className={`!text-[#259acb] hover:text-gray-300 font-bold text-xl ${isActive("/map")}`}>
          Map
        </Link>
        <Link to="/blog" className={`!text-[#259acb] hover:text-gray-300 font-bold text-xl ${isActive("/blog")}`}>
          Blog
        </Link>
        <Link to="/insurance" className={`!text-[#259acb] hover:text-gray-300 font-bold text-xl ${isActive("/insurance")}`}>
          Insurance
        </Link>
      </div>

      {/* Profile / Login Section */}
      <div>
        {!isLoggedIn ? (
          <Link to="/login">
            <button className="bg-blue-600 hover:bg-blue-700 rounded text-white px-4 py-2">
              Login/SignUp
            </button>
          </Link>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowProfileOptions(!showProfileOptions)}
              className="flex items-center space-x-2 bg-[#259acb] hover:bg-[#73bfe0] rounded text-white px-4 py-2"
            >
              <FaUserCircle size={20} />
              <span>{role}</span>
            </button>

            {showProfileOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                <Link 
                  to="/editprofile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  onClick={() => setShowProfileOptions(false)}
                >
                  Edit Profile
                </Link>
                <button
                  onClick={() => { 
                    setShowProfileOptions(false);
                    onLogout();
                  }}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
