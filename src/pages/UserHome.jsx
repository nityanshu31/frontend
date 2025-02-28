
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import VideoServices from "../components/VideoServices";
import Footer from "../components/Footer";

const carouselData = [
  {
    image: "https://img.freepik.com/free-photo/man-talking-mobile-phone-paramedics-examining-injured-boy-background_107420-63741.jpg?ga=GA1.1.179776100.1715390008&semt=ais_hybrid",
    text: [
      "• Rapid emergency response in action.",
      "• Paramedics providing urgent care.",
      "• Every second matters in saving lives.",
      "• Swift coordination ensures better outcomes."
    ]
  },
  {
    image: "https://img.freepik.com/premium-photo/two-people-highvisibility-jackets-heading-disaster-relief-zone_633842-19546.jpg?ga=GA1.1.179776100.1715390008&semt=ais_hybrid",
    text: [
      "• Relief teams heading into action.",
      "• Supporting disaster-affected areas.",
      "• Bringing aid and restoring hope.",
      "• Strengthening communities with rapid response."
    ]
  },
  {
    image: "https://media.istockphoto.com/id/513438643/photo/portrait-of-diverse-workers.jpg?s=612x612&w=0&k=20&c=g_xXKsO_entTS32l-E1MI-4R4H-dZQbPh_uyMJgMMJk=",
    text: [
      "• A united team for a greater cause.",
      "• Diversity drives innovation and impact.",
      "• Together, we make a difference.",
      "• Collaboration fuels effective disaster response."
    ]
  },
  {
    image: "https://img.freepik.com/free-photo/sorting-point-volunteers-facial-masks-working-with-donations-sorting_259150-57364.jpg?ga=GA1.1.179776100.1715390008&semt=ais_hybrid",
    text: [
      "• Volunteers sorting essential supplies.",
      "• Organized efforts for quick distribution.",
      "• Helping hands in times of crisis.",
      "• Every donation reaches those who need it most."
    ]
  },
  {
    image: "https://img.freepik.com/free-photo/sorting-center-young-volunteers-red-tshirts-distributing-donations-sorting-center_259150-57392.jpg?ga=GA1.1.179776100.1715390008&semt=ais_hybrid",
    text: [
      "• Community-driven relief efforts.",
      "• Donations reaching those in need.",
      "• Spreading kindness, one act at a time.",
      "• Empowering people to rebuild their lives."
    ]
  }
];


const UserHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (

    <div className="">



      <div className="relative w-full h-screen bg-gradient-to-b from-orange-300 to-orange-100 text-white overflow-hidden">
        <h1 className="text-5xl ml-10 my-20 md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Emergency Response <br /> <span className="">At Your Fingertips</span>
        </h1>
        <p className="mt-6 ml-10 text-lg md:text-xl max-w-md text-[#333333] leading-relaxed">
          Instantly report incidents, send <strong className="text-red-500">SOS alerts</strong>, and request aid.
          Stay informed and coordinate relief efforts seamlessly.
        </p>
              <div className="mt-6 mx-10 flex gap-4">
          <Link to="/ask-for-help">
            <button className="  bg-white px-6 py-3 rounded-lg text-orange-400 text-lg font-bold hover:bg-orange-200 transition-colors">
              Ask for Help
            </button>
            </Link>
            <Link to="/report">
            <button className="bg-white px-6 py-3 text-orange-400 rounded-lg text-lg font-bold hover:bg-orange-200 transition-colors">
              Report Incident
            </button>
            </Link>
          </div>

          <p className="mt-6 ml-10 text-lg md:text-xl max-w-md text-[#333333] leading-relaxed">
          Want to Help People ? 
        </p>
        <Link to="/volreg">
            <button className="mx-10 bg-white px-6 py-3 text-orange-400 rounded-lg text-lg font-bold hover:bg-orange-200 transition-colors">
              Register as Volunteer
            </button>
            </Link>

      </div>



      {/* Content Section */}9
      <div className="absolute bottom-20 right-0 w-250 h-85 flex">
        {/* Compensation Planning */}
        <div className="bg-[#5988bfed] p-10 w-1/3">

          <div className="mt-4">


            <div className="mt-3 text-yellow-200 text-lg">
              <p><strong>SOS Alert:</strong> Instantly send a distress signal.</p>
              <p><strong>Report Incidents:</strong> Submit emergency details quickly.</p>
              <p><strong>Resource Requests:</strong> Request urgent aid in real-time.</p>
              <p><strong>Live Updates:</strong> Get real-time emergency alerts.</p>

            </div>
          </div>

        </div>

        {/* Image and Quote Section with Auto Carousel */}
        <div className="w-2/3 flex relative">
          <div
            className="w-1/2 bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url(${carouselData[currentIndex].image})` }}
          ></div>

          <div className="w-1/2 bg-[#84addcb8] p-10 flex flex-col justify-center">
            {carouselData[currentIndex].text.map((point, index) => (
              <p key={index} className="text-black text-lg font-semibold mb-2">{point}</p>
            ))}
          </div>
        </div>

      </div>
      <VideoServices />
      <Footer />
    </div>

  );
}

export default UserHome;

