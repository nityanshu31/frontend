import React, { useState } from 'react';

const DisasterService = ({ onBack }) => {
    const [status, setStatus] = useState("Monitoring");
    const [incidentReport, setIncidentReport] = useState("");
    const [feedback, setFeedback] = useState("");
    const incidentHistory = ["Tornado warning", "Flood in Riverside", "Earthquake tremors reported"];

    const handleReportSubmit = () => {
        alert(`Disaster reported: ${incidentReport}`);
        setIncidentReport("");
    };

    const handleFeedbackSubmit = () => {
        alert(`Feedback: ${feedback}`);
        setFeedback("");
    };

    return (
        <div className="p-6 bg-gradient-to-b from-orange-300 to-orange-100 rounded-lg shadow-lg  mx-auto">
            <h1 className="text-3xl font-bold text-orange-500 mb-4">Disaster Service</h1>
            <p className="text-lg text-gray-700 mb-6">Stay updated with disaster alerts and report emergencies.</p>

            <div className="space-y-4">
                <button
                    className="w-full py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 transition-colors"
                    onClick={() => alert("Calling disaster management...")}
                >
                    Call Disaster Management
                </button>
                <button
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-colors"
                    onClick={() => alert("Emailing disaster management...")}
                >
                    Email Disaster Management
                </button>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Service Status: {status}</h3>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nearby Shelters</h3>
            <div className="bg-gray-200 h-60 text-center flex items-center justify-center rounded-lg text-gray-500">
                Map of nearby shelters
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Report a Disaster</h3>
            <textarea
                value={incidentReport}
                onChange={(e) => setIncidentReport(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
                placeholder="Describe the incident..."
            />
            <button
                className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition-colors"
                onClick={handleReportSubmit}
            >
                Submit Report
            </button>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Incident History</h3>
            <ul className="space-y-2">
                {incidentHistory.map((incident, index) => (
                    <li key={index} className="text-lg text-gray-700">{incident}</li>
                ))}
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Provide Feedback</h3>
            <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
                placeholder="Your feedback..."
            />
            <button
                className="w-full py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-colors"
                onClick={handleFeedbackSubmit}
            >
                Submit Feedback
            </button>

            <button
                className="mt-8 py-3 px-8 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-500 transition-colors"
                onClick={onBack}
            >
                Back
            </button>
        </div>
    );
};

export default DisasterService;
