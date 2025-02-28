import React, { useState } from 'react';
import { Search, Bell } from 'lucide-react';
import Sidebar from '../components/DashboardComponents/Sidebar';
import Incidents from '../components/DashboardComponents/Hospitality/Analytics';
import Settings from '../components/DashboardComponents/Settings';
import Overview from '../components/DashboardComponents/Overview';
import StaffandWorkforce from '../components/DashboardComponents/Hospitality/StaffandWorkforce';
import Resources from '../components/DashboardComponents/Hospitality/Resources';
import RoomandGuest from '../components/DashboardComponents/Hospitality/RoomandGuest';
import Analytics from '../components/DashboardComponents/Hospitality/Analytics';
import InventoryManagement from '../components/DashboardComponents/Retail/InventoryManagement';
import OrderTrackinf from '../components/DashboardComponents/Retail/OrderTrackinf';
import TransactionMonitoring from '../components/DashboardComponents/Finance/TransactionMonitoring';
import LoanManagement from '../components/DashboardComponents/Finance/LoanManagement';
import DonationFund from '../components/DashboardComponents/Finance/DonationFund';
import Logistics from '../components/DashboardComponents/Retail/Logistics';
import IncidentsManagement from '../components/DashboardComponents/IncidentsManagement';


const OrgHome = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeNav) {
      case 'Overview':
        return <Overview />
      case 'Incidents':
        return <IncidentsManagement />;
      case 'Analytics':
        return <Settings />;
      case 'Room and Guests':
        return <RoomandGuest />;
      case 'Staff Management':
        return <StaffandWorkforce />;
      case 'Resource Allocation':
        return <Resources />;
      case 'Analytics & Reports':
        return <Analytics />;
      case 'Inventory & Stock Management':
        return <InventoryManagement />;
      case 'Order Tracking':
        return <OrderTrackinf />;
      case 'Transaction Monitor':
        return <TransactionMonitoring />;
      case 'Loan Management':
        return <LoanManagement />;
      case 'Donation Fund':
        return <DonationFund />;
      case 'Logistics':
        return <Logistics />;
      default:
        return <Overview/>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Import Sidebar Component */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 md:mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-800">{activeNav}</h2>
              <p className="text-sm text-gray-500">Emergency Response Center - Active</p>
            </div>
          </div>
          

          {/* Dynamic Content */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgHome;
