import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)' }}>
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-80"></div>
      <section className="relative z-10 py-1 px-4 w-full max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-white font-bold text-3xl mb-4">Contact Us</h2>
          <p className="text-white">Relief Bridge is dedicated to providing emergency support and resources to those in crisis. Our platform connects individuals with crucial services such as shelter, medical aid, financial assistance, and volunteer opportunities. Join us in making a difference and building a stronger, more resilient community.</p>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <div className="h-16 w-16 bg-white text-center rounded-full flex items-center justify-center text-2xl">
                <i className="fas fa-home text-gray-700"></i>
              </div>
              <div className="ml-4">
                <h4 className="text-cyan-500 text-lg">Address</h4>
                <p className="text-white">Awadh residency nr. tarsali bypass, Tarsali, Vadodara, 390009</p>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <div className="h-16 w-16 bg-white text-center rounded-full flex items-center justify-center text-2xl">
                <i className="fas fa-phone text-gray-700"></i>
              </div>
              <div className="ml-4">
                <h4 className="text-cyan-500 text-lg">Phone</h4>
                <p className="text-white">6355077255</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-16 w-16 bg-white text-center rounded-full flex items-center justify-center text-2xl">
                <i className="fas fa-envelope text-gray-700"></i>
              </div>
              <div className="ml-4">
                <h4 className="text-cyan-500 text-lg">Email</h4>
                <p className="text-white">reliefbridge@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="font-bold text-2xl text-gray-700 mb-4">Send Message</h2>
            <form className="space-y-4">
              <div className="relative">
                <input type="text" required className="w-full p-2 border-b-2 border-gray-700 outline-none" placeholder="Full Name" />
              </div>
              <div className="relative">
                <input type="email" required className="w-full p-2 border-b-2 border-gray-700 outline-none" placeholder="Email" />
              </div>
              <div className="relative">
                <textarea required className="w-full p-2 border-b-2 border-gray-700 outline-none resize-none" placeholder="Type your Message..."></textarea>
              </div>
              <div>
                <input type="submit" value="Send" className="w-full bg-cyan-500 text-white py-2 px-4 cursor-pointer border border-cyan-500 transition hover:bg-white hover:text-cyan-500" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;