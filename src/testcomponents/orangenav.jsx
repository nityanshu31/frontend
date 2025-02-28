import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import bgImage from '../assets/MainLogo2.png'; // Import your logo

const Navbar = ({ isLoggedIn, role, onLogout }) => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const navigate = useNavigate();
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

  return (
    <div className="flex items-center justify-between bg-gradient-to-b from-[#fd7141] to-[#fea024] w-full h-16 px-4 shadow-md">
      {/* Logo on the left */}
      <Link to="/">
        <img src={bgImage} alt="Relief Bridge Logo" className="h-40 w-auto object-contain" />
      </Link>

      {/* Navigation Links */}
      <div className="flex-1 flex justify-center space-x-6">
        <button onClick={handleHomeNavigation} className="!text-[#ffffff] font-bold hover:text-gray-300 text-2xl">Home</button>
        <Link to="/map" className="!text-[#ffffff] hover:text-gray-300 font-bold text-2xl">Map</Link>
        <Link to="/blog" className="!text-[#ffffff] hover:text-gray-300 font-bold text-2xl">Blog</Link>
        <Link to="/insurance" className="!text-[#ffffff] hover:text-gray-300  font-bold text-2xl">Insurance</Link>
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
              className="flex items-center space-x-2 bg-[#259acb] hover:bg-[#72c2e4] rounded text-white px-4 py-2"
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

