import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Map from './pages/Map';
import Blog from './pages/Blog';
import Insurance from './pages/Insurance';
import UserHome from './pages/UserHome';
import OrgHome from './pages/OrgHome';
import IncidentReport from './pages/IncidentReport';
import EditProfile from './pages/EditProfile';
import Services from './components/Services';
import OrgHom from './pages/orggg';
import StaffandWorkforce from './components/DashboardComponents/Hospitality/StaffandWorkforce';
import Footer from './components/Footer';
import Test from './testcomponents/Test';
import AskForHelp from './pages/AskForHelp';
import Requests from './pages/VolunteerPages/Requests';
import VolunteerHome from './pages/VolunteerPages/VolunteerHome';
import Finance from './pages/Finance';
import VolunteerRegistration from './components/VolComp/VolunteerRegistration';
import EmergencyPage from './pages/EmergencyPage';
import DonationPage from './pages/DonationPage';
import ScrollToTop from './components/ScrollToTop';
import TrainingPortal from './pages/VolunteerPages/TrainingPortal';
import Updates from './pages/VolunteerPages/Updates';
import DisasterService from './pages/DisasterService';
import ContactUs from './pages/ContactUs';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Check for token and role on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    if (token && storedRole) {
      setIsLoggedIn(true);
      setRole(storedRole);
    }
  }, []);

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setRole(role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/'); // Redirect to the home page after logout
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} role={role} onLogout={handleLogout} />
        <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/map" element={<Map />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/organization" element={<OrgHome />} />
        <Route path='/report' element={<IncidentReport/>}/>
        <Route path='/editprofile' element={<EditProfile/>}/> 
        <Route path='/orgg' element={<OrgHom/>}/>
        <Route path='/staff' element={<StaffandWorkforce/>}/>
        <Route path='/ask-for-help' element={<AskForHelp/>}/>
        <Route path='/requests' element={<Requests/>}/>
        <Route path='/test' element={<Test/> }/>
        <Route path='/volunteer-home' element={<VolunteerHome/>}/>
        <Route path='/finance' element={<Finance/>}/>
        <Route path='/volreg' element={<VolunteerRegistration/>}/>
        <Route path='/emergency-page' element={<EmergencyPage/>}/>
        <Route path='/donation-page' element={<DonationPage/>}/>
        <Route path='/training' element={<TrainingPortal/>}/>
        <Route path='/updates' element={<Updates/>}/>
        <Route path='/disasterservice' element={<DisasterService/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        
       
      </Routes>
    
      
    </div>
  );
}

export default App;
