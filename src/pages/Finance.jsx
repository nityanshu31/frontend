import React from "react";

const Finance = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-b from-orange-300 to-orange-100 min-h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        
        <h1 className="text-4xl font-bold text-gray-900">
        Reliable Financial Support for Emergencies <em className="text-gray-700"></em>
        </h1>
        <p className="text-gray-600 text-lg">
        Our secure and advanced financial solutions ensure safe and efficient fund transfers, enabling seamless access to financial aid, emergency loans, and crowdfunding support during crises.
        </p>
        <button className="bg-orange-400 text-white px-6 py-3 rounded-lg text-lg">
          Get demo account
        </button>
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2 overflow-hidden">
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="user"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="user"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt="user"
            />
          </div>
          <p className="text-gray-600 text-lg">⭐ 4.8 from 500+ reviews</p>
        </div>
      </div>

      {/* Right Section */}
      <div className=" grid grid-cols-2 gap-4 mt-0 mr-15 md:mt-0">
        <div 
          className="rounded-4xl p-6 shadow-lg shadow-orange-300 flex flex-col items-center text-white bg-cover bg-center h-80 w-80"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3959485/pexels-photo-3959485.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
        >
          <p className="text-lg font-semibold"> Emergency Financial Aid Options</p>
        </div>
        <div 
          className="rounded-full p-6 shadow-lg shadow-orange-400 flex flex-col items-center text-white bg-cover bg-center h-80 w-60"
          style={{ backgroundImage: "url('https://www.indiafilings.com/learn/wp-content/uploads/2024/01/Section-8-Microfinance-Company.jpg')" }}
        >
          <p className="text-lg font-semibold"> Loan Assistance & Micro-Loans</p>
        </div>
        <div 
          className="rounded-full p-6 shadow-lg shadow-orange-400 flex flex-col items-center text-white bg-cover bg-center h-80 w-60"
          style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/family-financial-support-public-assistance-concept-image-illustrates-highlighting-importance-various-349511822.jpg')" }}
        >
          <p className="text-lg font-semibold"> Crowdfunding & Community Support</p>
        </div>
        <div 
          className="rounded-4xl p-6 shadow-lg shadow-orange-400 flex flex-col items-center text-white bg-cover bg-center h-80 w-80"
          style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOz4waSubh1p_IhIK1A1cEr7tqIjo_w8AsnEmTXQiJYNvjXeU-1KFt3m_WnPb4RLtttE&usqp=CAU')" }}
        >
          <p className="text-lg font-semibold"> Financial Support Contacts & Helpline</p>
        </div>
      </div>
    </div>
  );
};

export default Finance;