import { useState } from "react";
import Footer from "../components/Footer";
import EmergencyForm from "../components/EmergencyForm";
import Mapreq from "../components/VolComp/Mapreq";

const AskForHelp = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="max-w-8xl mx-auto p-6 bg-[#ffebd0] shadow-lg rounded-lg ">
        <div className="mt-1 p-6 bg-gray-200 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Live Map View</h3>
          <div className="w-full h-100 bg-gray-300 flex items-center justify-center rounded-md">
            <Mapreq/>
          </div>
        </div>
        
        <div className="flex justify-center mt-4">
          <button onClick={() => setShowForm(true)} className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition">
            Ask for Help
          </button>
        </div>

        <EmergencyForm isOpen={showForm} onClose={() => setShowForm(false)} />

        <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md border-l-4 border-red-600">
          <h3 className="text-xl font-semibold text-gray-700">Emergency Helpline Numbers</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li><strong>Police:</strong> 100</li>
            <li><strong>Fire Department:</strong> 101</li>
            <li><strong>Ambulance:</strong> 102</li>
            <li><strong>Disaster Management:</strong> 108</li>
            <li><strong>NGO Assistance:</strong> 1800</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AskForHelp;
