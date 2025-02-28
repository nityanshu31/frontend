import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const images = [

  "https://img.freepik.com/free-vector/charity-round-composition-with-set-isolated-emoji-style-donation-icons-decorative-symbols-with-silhouettes_98292-7768.jpg?uid=R185336931&ga=GA1.1.449678403.1738309910&semt=ais_hybrid",
  "https://img.freepik.com/free-vector/isometric-emergency-service-composition-with-outdoor-street-scenery-doctors-helping-victim-with-police-ambulance-cars-vector-illustration_1284-72990.jpg?uid=R185336931&ga=GA1.1.449678403.1738309910&semt=ais_hybrid",
  "https://img.freepik.com/free-vector/ecology-problems-as-water-air-pollution-bushfire-global-warming_107791-4426.jpg?uid=R185336931&ga=GA1.1.449678403.1738309910&semt=ais_hybrid",
  "https://img.freepik.com/free-vector/modern-emergency-word-concept-with-flat-design_23-2147939665.jpg?uid=R185336931&ga=GA1.1.449678403.1738309910&semt=ais_hybrid",  
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f7ff]">
      {/* Hero Section */}
      <div className="relative flex h-screen w-full bg-gradient-to-b from-[#A2C9F7] to-[#f0f7ff] text-[#259acb] p-10 flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <h1 className="text-8xl  font-extrabold leading-tight">
            Relief Bridge
          </h1>
          <p className="mt-4 text-4xl">
          Rapid Response,
            <br />
            Seamless Coordination,
            <br />
            Safer Communities 🚀🔴🔵
          

          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-[#259acb] px-6 py-3 rounded-lg text-white text-lg font-bold hover:bg-orange-200 transition-colors">
              Ask for Help
            </button>
            <Link to="/report">
            <button className="bg-[#259acb] px-6 py-3 text-white rounded-lg text-lg font-bold hover:bg-orange-200 transition-colors">
              Report Incident
            </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative h-full flex items-center justify-center">
          <div className="absolute right-0 left-125 top-72 w-76 h-76 rounded-full bg-white overflow-hidden">
            <img
              src={images[0]}
              alt="Service 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-53 top-7 w-74 h-74 rounded-full bg-yellow-400 overflow-hidden">
            <img
              src={images[1]}
              alt="Service 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-80 bottom-10 w-100 h-100 rounded-full bg-green-400 overflow-hidden">
            <img
              src={images[2]}
              alt="Service 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-135  top-10 w-72  h-72 rounded-full bg-yellow-400 overflow-hidden">
            <img
              src={images[3]}
              alt="Service 4"
              className="w-full h-75 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Services */}
      <Services/>
      {/* About Us */}
      <AboutUs/>
      <Footer/>
    </div>
  );
};

export default Home;












