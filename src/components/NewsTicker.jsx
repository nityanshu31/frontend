import React, { useState, useEffect } from "react";

const newsHeadlines = [
  "🌊 Flood Alert: Severe rainfall predicted, evacuate to safe zones!",
  "🚨 Emergency Aid: Relief camps set up, register for assistance now!",
  "💰 Financial Help: Govt announces ₹5000 relief per flood-affected family.",
  "🏥 Medical Camps: Free health checkups for flood victims this week.",
  "🤝 Volunteers Needed: Join disaster response teams, sign up today!",
  "🚗 Travel Advisory: Highways closed due to landslides and heavy flooding.",
];

const NewsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // Start animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsHeadlines.length);
        setAnimate(false); // Reset animation
      }, 1000); // Time for slide-out animation
    }, 4000); // Change news every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-red-500  text-white py-3 overflow-hidden">
      <div className="absolute left-0 top-1.5 bg-yellow-500 text-black font-bold px-4 py-2 uppercase">
        Breaking News
      </div>
      <div
        className={`w-full text-lg font-semibold text-center transition-transform duration-1000 ease-in-out ${
          animate ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        {newsHeadlines[currentIndex]}
      </div>
    </div>
  );
};

export default NewsTicker;