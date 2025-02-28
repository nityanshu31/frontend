import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"; // Make sure to import from react-router-dom

const EmergencyPage = () => {
  return (
    <div>
      <div className="relative text-center bg-gray-100 py-12 rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="flex justify-center items-center mb-6">
          <img
            src="https://images.pexels.com/photos/942560/pexels-photo-942560.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Ambulance"
            className="w-400 h-120 rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">
            Getting You Out Of Hurdle Is Our Responsibility.
          </h1>
          <p className="text-lg italic text-gray-600 mt-2">
            “You do not need to call us, we will find you.”
          </p>
        </div>

        {/* Full-Height Semi-Circle Background (Starts After Quote) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[650px] w-[100%] h-[80%] bg-orange-300 rounded-t-full opacity-50"></div>

        {/* Cards Section */}
        <div className="relative max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {[
            { title: "Ambulance Services", video: "https://media.istockphoto.com/id/2193125098/video/ambulance-on-an-emergency-run.mp4?s=mp4-640x640-is&k=20&c=mXpa-3Q69JkwCy-7-g1VtAhVky74JdLHsFBilbF_wHA=" },
            { title: "Fire & Rescue", video: "https://videos.pexels.com/video-files/6741632/6741632-sd_640_360_30fps.mp4" },
            { title: "Medical Assistance", video: "https://videos.pexels.com/video-files/7658934/7658934-sd_640_360_25fps.mp4" },
            { title: "Disaster Relief", video: "https://media.istockphoto.com/id/1961237184/video/braving-the-waters-rescuers-navigate-flooded-streets-in-populated-area.mp4?s=mp4-640x640-is&k=20&c=iHi2Y7kxyWrTVB9w6GALvwdLnhc8AOEtkgLquqTPQrI=" },
            { title: "Police Support", video: "https://videos.pexels.com/video-files/4623603/4623603-sd_640_360_24fps.mp4" },
            { title: "Emergency Helpline", video: "https://videos.pexels.com/video-files/7698466/7698466-sd_960_506_25fps.mp4" }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center h-80 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold text-gray-700">{service.title}</h3>
              <p className="text-md text-gray-600 mt-2">
                Providing essential {service.title.toLowerCase()} to those in need.
              </p>
              <video className="w-full h-48 rounded-lg" autoPlay loop muted>
                <source src={service.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Link for Disaster Relief */}
              {service.title === "Disaster Relief" && (
                <Link
                  to="/disasterservice"
                  className="text-blue-500 hover:underline mt-4 block"
                >
                  Learn More
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmergencyPage;
