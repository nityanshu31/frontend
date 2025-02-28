import React from 'react'
import { Link } from "react-router-dom";
const VideoServices = () => {
    return (

        <div className="w-full h-[800px] bg-orange-300 py-12 px-6 rounded-t-full "  >
            <div className="max-w-6xl mx-auto text-center mt-10">
                <h2 className="text-3xl font-bold text-gray-800">
                    Comprehensive Emergency Relief Services
                </h2>
                <p className="text-gray-600 mt-2">
                    Access real-time emergency coordination, rapid response assistance, and essential aid distribution<br></br> - All designed to support communities in crisis.
                </p>
            </div>

            <div className="mx-9 mt-20 flex">
                <div className="bg-white rounded-3xl w-80 mx-9 h-110 shadow-lg overflow-hidden transition-transform transform hover:scale-105 p-4">
                    <div className="w-full h-full flex justify-center items-center">
                        <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted>
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                        <Link to="/ask-for-help">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
                            Ask For Help →
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="bg-white rounded-3xl w-80 mx-9 h-110 shadow-lg overflow-hidden transition-transform transform hover:scale-105 p-4">
                    <div className="w-full h-full flex justify-center items-center">
                        <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted>
                            <source src="https://videos.pexels.com/video-files/3944018/3944018-sd_506_960_25fps.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Link to="/finance">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
                            Finance →
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="bg-white rounded-3xl w-80 mx-9 h-110 shadow-lg overflow-hidden transition-transform transform hover:scale-105 p-4">
                    <div className="w-full h-full flex justify-center items-center">
                        <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted>
                            <source src="https://videos.pexels.com/video-files/6646662/6646662-sd_360_640_24fps.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                        <Link to="/donation-page">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
                            Donate →
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="bg-white rounded-3xl w-80 mx-9 h-110 shadow-lg overflow-hidden transition-transform transform hover:scale-105 p-4">
                    <div className="w-full h-full flex justify-center items-center">
                        <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted>
                            <source src="https://videos.pexels.com/video-files/6520235/6520235-sd_360_640_24fps.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                        <Link to="/emergency-page">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
                            Emergency Services →
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default VideoServices
