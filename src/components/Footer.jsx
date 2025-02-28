import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import bgImage from '../assets/MainLogo.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-orange-300 to-orange-100 text-white px-10 py-10 md:py-16 flex flex-col md:flex-row justify-between items-center w-full">
      {/* Left Section */}
      <div className="flex flex-col items-start text-xl mx-3 gap-2 max-w-xs self-start">
        <img src={bgImage} alt="Ritten Logo" className="w-40" />
        <p className="text-gray-600 mb-1 flex items-center">📍 Parul University, Waghodia</p>
        <p className="text-gray-600 mb-1 flex items-center">✉️ contact@techcroods.com</p>
        <p className="text-gray-600 mb-3 flex items-center">📞 215-326-9369</p>
        <div className="flex space-x-4 text-xl text-blue-500">
          <FaFacebook className="cursor-pointer hover:text-blue-700" />
          <FaInstagram className="cursor-pointer text-pink-500 hover:text-pink-700" />
          <FaTwitter className="cursor-pointer text-blue-400 hover:text-blue-600" />
          <FaLinkedin className="cursor-pointer text-blue-600 hover:text-blue-800" />
          <FaWhatsapp className="cursor-pointer text-green-500 hover:text-green-700" />
        </div>
      </div>

      {/* Link Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-gray-800 mt-6 md:mt-0">
        <div>
          <h4 className="font-semibold text-lg text-orange-500 mb-3">Product</h4>
          <p className="hover:text-orange-500 cursor-pointer">Admissions</p>
          <p className="hover:text-orange-500 cursor-pointer">Charting</p>
          <p className="hover:text-orange-500 cursor-pointer">Billing</p>
          <p className="hover:text-orange-500 cursor-pointer">Outcomes</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg text-orange-500 mb-3">Company</h4>
          <p className="hover:text-orange-500 cursor-pointer">Features</p>
          <p className="hover:text-orange-500 cursor-pointer">Why Ritten</p>
          <p className="hover:text-orange-500 cursor-pointer">Blog</p>
          <p className="hover:text-orange-500 cursor-pointer">Testimonials</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg text-orange-500 mb-3">Support</h4>
          <Link to='/contactus'>

          <p className="hover:text-orange-500 cursor-pointer">Contact Us</p>
          </Link>
          <p className="hover:text-orange-500 cursor-pointer">Privacy Policy</p>
          <p className="hover:text-orange-500 cursor-pointer">Terms of Service</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
