import React, { useState } from 'react';
import { 
  Grid,
  Users,
  BarChart4,
  MessageSquare,
  Settings,
  LogOut,
  ChevronRight,
  AlertTriangle,
  MapPin,
  Package,
  MessageCircle,
  UserCog,
  Shield,
  Building,
  Banknote,
  FileText,
  Lock,
  Store,
  Truck,
  ClipboardList,
  UserCheck,
  AlertCircle,
  Home,
  Bell,
  Activity,
  HelpCircle
} from 'lucide-react';

const Sidebar = ({ sidebarOpen, activeNav, setActiveNav }) => {
  const [selectedSector, setSelectedSector] = useState('hospitality');

  // Common dashboard items that appear for all sectors
  const commonItems = [
    { name: 'Overview', icon: <Home size={20} />, description: 'System-wide dashboard' },
    { name: 'Incidents', icon: <Bell size={20} />, description: 'Current emergency alerts' },
    { name: 'Analytics', icon: <Activity size={20} />, description: 'Performance metrics' },
    
  ];

  // Sector options
  const sectors = [
    { id: 'hospitality', name: 'Hospitality Sector' },
    { id: 'financial', name: 'Financial Sector' },
    { id: 'retail', name: 'Retail Sector' }
  ];

  // Navigation items for each sector
  const sectorNavItems = {
    hospitality: [
      { name: 'Room and Guests', icon: <AlertTriangle size={20} />, description: 'Room and Guests' },
      { name: 'Staff Management', icon: <MapPin size={20} />, description: 'Staff Management' },
      { name: 'Resource Allocation', icon: <Package size={20} />, description: 'Monitor supplies and resources' },
      
      
    ],
    financial: [
      { name: 'Transaction Monitor', icon: <Shield size={20} />, description: 'Cybersecurity and fraud alerts' },
      { name: 'Loan Management', icon: <Building size={20} />, description: 'Branch and ATM operations' },
      
     
    ],
    retail: [
      { name: 'Inventory & Stock Management', icon: <Store size={20} />, description: 'Inventory management' },
   
      { name: 'Logistics', icon: <Package size={20} />, description: 'Emergency logistics' },
      
    ]
  };

  // Function to render a navigation item
  const renderNavItem = (item) => (
    <div 
      key={item.name}
      onClick={() => setActiveNav(item.name)}
      className={`flex flex-col py-3 px-4 rounded-lg cursor-pointer transition-colors duration-200 ${
        activeNav === item.name 
          ? 'bg-red-100 text-red-600' 
          : 'text-gray-600 hover:bg-red-50 hover:text-red-500'
      }`}
    >
      <div className="flex items-center space-x-3">
        {item.icon}
        <span className="font-medium">{item.name}</span>
        {activeNav === item.name && <ChevronRight className="ml-auto" size={16} />}
      </div>
      <p className="text-xs text-gray-500 mt-1 ml-8">
        {item.description}
      </p>
    </div>
  );

  return (
    <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transform md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:static z-40 w-64 bg-white h-full shadow-md flex flex-col`}>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-red-600">Relief Bridge</h1>
        
        {/* Sector Selection Dropdown */}
        <select
          value={selectedSector}
          onChange={(e) => {
            setSelectedSector(e.target.value);
            setActiveNav(sectorNavItems[e.target.value][0].name);
          }}
          className="mt-4 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          {sectors.map((sector) => (
            <option key={sector.id} value={sector.id}>
              {sector.name}
            </option>
          ))}
        </select>
      </div>
      
      <nav className="flex-1 px-6 space-y-2 overflow-y-auto">
        {/* Common Dashboard Section */}
        <div className="mb-6">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Dashboard
          </h2>
          {commonItems.map(renderNavItem)}
        </div>

        {/* Sector Specific Section */}
        <div>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Sector Tools
          </h2>
          {sectorNavItems[selectedSector].map(renderNavItem)}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;