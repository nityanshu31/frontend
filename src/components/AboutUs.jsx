import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  const images = [
    "https://img.freepik.com/premium-photo/emergency-response-team-works-night-ambulance-providing-emergency-care-sick_117406-9871.jpg",
    "https://img.freepik.com/premium-photo/firefighter-training-with-protective-wear-spraying-high-pressure-water-fire_39420-162.jpg",
    "https://img.freepik.com/free-photo/helping-hands-volunteer-support-community-service-graphic_53876-64955.jpg?t=st=1739906599~exp=1739910199~hmac=4b2ce20bbb2214e39df1be8a6ee55c8cd5cdb180a315373e27d47dcb0a47c52d&w=996",
    "https://img.freepik.com/premium-photo/architect-talking-through-walkie-talkie-while-standing-road_1048944-1883919.jpg",
    "https://img.freepik.com/premium-photo/firefighters-walk-through-mud-debris-after-natural-disaster-rescue-victims-background-wallpaper-ai-generated-image_1085517-3962.jpg?w=1060",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#ffebd1] p-10 mt-10">
      {/* Left Section - Text */}
      <div className="md:w-1/2 w-full px-5">
        <h2 className="text-5xl font-bold text-orange-400">About Us</h2>
        <p className="mt-4 text-2xl text-gray-700 leading-relaxed">
          Relief Bridge is dedicated to providing rapid emergency response and
          seamless coordination during crises. Our platform ensures that people
          in need receive immediate assistance while streamlining efforts across
          various rescue and aid organizations.
        </p>
        <p className="mt-4 text-2xl text-gray-700 leading-relaxed">
          With advanced real-time reporting, incident tracking, and resource
          allocation, we aim to create safer communities. Together, we can build
          a world where help is just a click away. 💙🚑
        </p>
      </div>

      {/* Right Section - Image Carousel */}
      <div className="md:w-1/2 w-full  px-5">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="w-full">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutUs;
