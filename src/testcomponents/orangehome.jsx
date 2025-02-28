import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Services from "../components/Services";

const images = [
  "https://img.freepik.com/free-vector/modern-emergency-word-concept-with-flat-design_23-2147943315.jpg?t=st=1739646822~exp=1739650422~hmac=6b4916fd6d6e2c7cc43427e82732a910f5d33f404315e4ac18c6671517a65170&w=740",
  "https://img.freepik.com/free-vector/isometric-firefighter-set-isolated-round-compositions-with-editable-text-characters-firemen-work-vector-illustration_98292-8749.jpg?ga=GA1.1.179776100.1715390008&semt=ais_authors_boost",
  "https://img.freepik.com/free-vector/flat-design-fire-infographic_23-2149134598.jpg?ga=GA1.1.179776100.1715390008&semt=ais_authors_boost",
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
    <div className="min-h-screen bg-gradient-to-b from-[#3991ea] to-white">
      {/* Hero Section */}
      <div className="relative flex h-screen w-full bg-gradient-to-b from-[#ff9f29] to-white text-white p-10 flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <h1 className="text-6xl font-extrabold leading-tight">
            Relief Bridge
          </h1>
          <p className="mt-4 text-lg">
          Rapid Response,
            <br />
            Seamless Coordination,
            <br />
            Safer Communities 🚀🔴🔵
          

          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-orange-400 px-6 py-3 rounded-lg text-lg font-bold hover:bg-orange-200 transition-colors">
              Ask for Help
            </button>
            <Link to="/report">
            <button className="bg-orange-400 px-6 py-3 text-white rounded-lg text-lg font-bold hover:bg-orange-200 transition-colors">
              Report Incident
            </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative h-full flex items-center justify-center">
          <div className="absolute right-1 left-119 top-60 w-68 h-68 rounded-full bg-white overflow-hidden">
            <img
              src={images[0]}
              alt="Service 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-38 top-0 w-74 h-74 rounded-full bg-yellow-400 overflow-hidden">
            <img
              src={images[1]}
              alt="Service 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-70 bottom-9 w-100 h-100 rounded-full bg-green-400 overflow-hidden">
            <img
              src={images[2]}
              alt="Service 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Services */}
      <Services/>
      {/* About Us */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-10 mt-10">
        <div className="md:w-1/2 w-full px-5">
          <h2 className="text-5xl font-bold text-orange-400">About Us</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Relief Bridge is dedicated to providing rapid emergency response and
            seamless coordination during crises. Our platform ensures that
            people in need receive immediate assistance while streamlining
            efforts across various rescue and aid organizations.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            With advanced real-time reporting, incident tracking, and resource
            allocation, we aim to create safer communities. Together, we can
            build a world where help is just a click away. 💙🚑
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;












