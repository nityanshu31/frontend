import React, { useState } from 'react';
import { 
  AlertTriangle, 
  BarChart4, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut,
  Grid,
  Search,
  Bell,
  Clock,
  Ambulance,
  MapPin,
  Phone,
  Activity,
  Calendar,
  Menu,
  X,
  ChevronRight,
  AlertCircle,
  Zap,
  Wind,
  Thermometer
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area } from 'recharts';

const OrgHom = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Dummy data for charts
  const incidentData = [
    { name: 'Sun', new: 4, resolved: 3, amt: 10 },
    { name: 'Mon', new: 6, resolved: 4, amt: 10 },
    { name: 'Tue', new: 5, resolved: 6, amt: 10 },
    { name: 'Wed', new: 8, resolved: 5, amt: 10 },
    { name: 'Thu', new: 9, resolved: 7, amt: 10 },
    { name: 'Fri', new: 7, resolved: 8, amt: 10 },
    { name: 'Sat', new: 5, resolved: 6, amt: 10 },
  ];
  
  const responseTimeData = [
    { name: '12 AM', value: 5.2 },
    { name: '4 AM', value: 4.8 },
    { name: '8 AM', value: 4.5 },
    { name: '12 PM', value: 4.9 },
    { name: '4 PM', value: 5.1 },
    { name: '8 PM', value: 4.7 },
    { name: 'Now', value: 4.3 },
  ];
  
  // Navigation items
  const navItems = [
    { name: 'Dashboard', icon: <Grid size={20} /> },
    { name: 'Incidents', icon: <BarChart4 size={20} /> },
    { name: 'Responders', icon: <Users size={20} /> },
    { name: 'Alerts', icon: <MessageSquare size={20} /> },
    { name: 'Settings', icon: <Settings size={20} /> },
  ];
  

  
  return (
    <div className="flex h-screen bg-gray-100">
 
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transform md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:static z-40 w-64 bg-white h-full shadow-md flex flex-col`}>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-red-600">ER.</h1>
        </div>
        
        <nav className="flex-1 px-6 space-y-2">
          {navItems.map((item) => (
            <div 
              key={item.name}
              onClick={() => setActiveNav(item.name)}
              className={`flex items-center space-x-3 py-3 px-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                activeNav === item.name 
                  ? 'bg-red-100 text-red-600' 
                  : 'text-gray-600 hover:bg-red-50 hover:text-red-500'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
              {activeNav === item.name && <ChevronRight className="ml-auto" size={16} />}
            </div>
          ))}
        </nav>
        
        <div className="p-6">
          <div 
            className="flex items-center space-x-3 text-gray-600 hover:text-red-500 cursor-pointer"
            onClick={() => alert('Logout clicked')}
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 md:mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-800">Hello Commander!</h2>
              <p className="text-sm text-gray-500">Emergency Response Center - Active</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative flex-1 md:flex-none">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  className="w-full md:w-auto pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Search incidents..."
                />
              </div>
              
              <div className="relative">
                <Bell 
                  size={24} 
                  className="text-gray-600 cursor-pointer"
                  onClick={() => alert('Notifications clicked')}
                />
                <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
                  5
                </div>
              </div>
              
              <div 
                className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden cursor-pointer"
                onClick={() => alert('Profile clicked')}
              >
                <img src="/api/placeholder/40/40" alt="User avatar" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
            {/* Active Incidents Card */}
            <div className="md:col-span-1 lg:col-span-3 bg-red-500 rounded-xl p-4 text-white">
              <div className="mb-2">
                <h3 className="font-medium">Active Incidents</h3>
                <p className="text-xs opacity-80">Last updated: 5 min ago</p>
              </div>
              
              <div className="mb-2">
                <span className="text-xs bg-white bg-opacity-20 rounded px-1 py-0.5">+3 new</span>
              </div>
              
              <div className="text-6xl font-bold mb-2">12</div>
              <p className="text-sm">Requiring attention</p>
            </div>
            
            {/* Response Time Card */}
            <div className="md:col-span-1 lg:col-span-2 bg-white rounded-xl p-4">
              <h3 className="font-medium text-gray-600 mb-3">Avg. Response Time</h3>
              
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-3xl font-bold">4.3</span>
                  <span className="text-xs text-gray-500">minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-md font-semibold text-green-500">-0.5</span>
                  <span className="text-xs text-gray-500">vs last week</span>
                </div>
              </div>
              
              <div className="h-24 mt-3">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={responseTimeData}>
                    <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} dot={false} />
                    <XAxis dataKey="name" tick={{fontSize: 10}} />
                    <Tooltip 
                      formatter={(value) => [`${value} min`, 'Response Time']}
                      contentStyle={{fontSize: '12px'}}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Available Units Card */}
            <div className="md:col-span-1 lg:col-span-2 bg-white rounded-xl p-4">
              <h3 className="font-medium text-gray-600 mb-4">Available Units</h3>
              <div className="flex items-end space-x-1">
                <span className="text-3xl font-bold text-gray-800">23</span>
                <span className="text-xl text-gray-500">/42</span>
              </div>
              <div className="mt-2 text-sm text-yellow-500">
                <span className="font-medium">55%</span> availability
              </div>
              
              {/* Progress bar */}
              <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
                <div className="w-[55%] h-full bg-yellow-500 rounded-full"></div>
              </div>
              
              <div className="mt-3 flex justify-between text-xs text-gray-500">
                <div className="flex flex-col items-center">
                  <Ambulance size={16} className="text-red-600 mb-1" />
                  <span>12</span>
                </div>
                <div className="flex flex-col items-center">
                  <AlertTriangle size={16} className="text-orange-500 mb-1" />
                  <span>8</span>
                </div>
                <div className="flex flex-col items-center">
                  <Activity size={16} className="text-green-600 mb-1" />
                  <span>3</span>
                </div>
              </div>
            </div>
            
            {/* Critical Alerts Card */}
            <div className="md:col-span-1 lg:col-span-2 bg-white rounded-xl p-4">
              <h3 className="font-medium text-gray-600 mb-4">Critical Alerts</h3>
              <div className="text-2xl font-bold text-red-600 mb-2">3</div>
              
              <div className="space-y-2 mt-3">
                <div className="flex items-center space-x-2 text-sm">
                  <AlertCircle size={16} className="text-red-600" />
                  <span className="text-gray-700">Flash flood warning</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Wind size={16} className="text-orange-500" />
                  <span className="text-gray-700">High wind advisory</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Zap size={16} className="text-yellow-500" />
                  <span className="text-gray-700">Power outage: Downtown</span>
                </div>
              </div>
            </div>
            
            {/* Weather Conditions Card */}
            <div className="md:col-span-1 lg:col-span-2 bg-white rounded-xl p-4">
              <h3 className="font-medium text-gray-600 mb-4">Weather Conditions</h3>
              <div className="flex items-center space-x-3">
                <Thermometer size={28} className="text-orange-500" />
                <div className="text-2xl font-bold text-gray-800">72 °F</div>
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-2">
                <span>Clear skies</span>
                <span className="mx-2">•</span>
                <span>Wind: 5 mph</span>
              </div>
              
              <div className="mt-3 space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Humidity</span>
                  <span className="text-gray-700">45%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Visibility</span>
                  <span className="text-gray-700">10 miles</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Pressure</span>
                  <span className="text-gray-700">30.1 inHg</span>
                </div>
              </div>
            </div>
            
            {/* Today's Emergency Schedule */}
            <div className="md:col-span-2 lg:col-span-5 rounded-xl bg-white p-4">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Today's Emergencies</h3>
                <p className="text-sm text-gray-500">February 16, 2025</p>
              </div>
              
              <div className="flex mb-4 justify-between">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                  <div key={day} className="text-center">
                    <div className="text-sm text-gray-600 mb-1">{day}</div>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${index === 0 ? 'bg-red-500 text-white' : 'text-gray-800'}`}>
                      {index + 10}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="relative pl-6 space-y-3 max-h-80 overflow-y-auto">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                {/* Emergency 1 */}
                <div className="relative">
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-red-500 -ml-1.5"></div>
                  <div className="bg-red-500 text-white rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Traffic Accident - Major</h4>
                      <button 
                        className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded hover:bg-opacity-30 transition-colors"
                        onClick={() => alert('Dispatching units to traffic accident')}
                      >
                        Dispatch Units
                      </button>
                    </div>
                    <p className="text-sm mb-3">09:15 AM - Interstate 95, Mile 47</p>
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-red-700 flex items-center justify-center mr-2">
                        <Ambulance size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">3 units dispatched</p>
                        <p className="text-xs">ETA: 4 minutes</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Emergency 2 */}
                <div className="relative">
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-orange-500 -ml-1.5"></div>
                  <div className="bg-orange-500 text-white rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Building Fire - Commercial</h4>
                      <button 
                        className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded hover:bg-opacity-30 transition-colors"
                        onClick={() => alert('Dispatching units to building fire')}
                      >
                        Dispatch Units
                      </button>
                    </div>
                    <p className="text-sm mb-3">10:22 AM - 1250 Main St.</p>
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-orange-700 flex items-center justify-center mr-2">
                        <AlertTriangle size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">5 units dispatched</p>
                        <p className="text-xs">ETA: 2 minutes</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Emergency 3 */}
                <div className="relative">
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-yellow-500 -ml-1.5"></div>
                  <div className="bg-yellow-500 text-white rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Medical Emergency - Residential</h4>
                      <button 
                        className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded hover:bg-opacity-30 transition-colors"
                        onClick={() => alert('Dispatching units to medical emergency')}
                      >
                        Dispatch Units
                      </button>
                    </div>
                    <p className="text-sm mb-3">11:45 AM - 372 Oak Avenue</p>
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-yellow-700 flex items-center justify-center mr-2">
                        <Activity size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">1 unit dispatched</p>
                        <p className="text-xs">ETA: 7 minutes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Incident Statistics */}
            <div className="md:col-span-2 lg:col-span-7 bg-white rounded-xl p-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 sm:mb-0">Incident Statistics</h3>
                <div 
                  className="flex items-center space-x-1 bg-gray-100 rounded-md px-3 py-1 cursor-pointer"
                  onClick={() => alert('Change time period')}
                >
                  <span className="text-sm text-gray-600">Weekly</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center mb-4 space-x-0 space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center w-full sm:w-auto">
                  <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-sm text-gray-600">New Incidents</span>
                </div>
                <div className="flex items-center w-full sm:w-auto">
                  <div className="h-3 w-3 rounded-full bg-green-600 mr-2"></div>
                  <span className="text-sm text-gray-600">Resolved Incidents</span>
                </div>
              </div>
              
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={incidentData}
                    margin={{
                      top: 10,
                      right: 10,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ fontSize: '12px' }} />
                    <Area type="monotone" dataKey="new" stroke="#ef4444" fill="#fecaca" fillOpacity={0.5} />
                    <Area type="monotone" dataKey="resolved" stroke="#059669" fill="#a7f3d0" fillOpacity={0.5} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-500 mb-1">Total incidents</p>
                  <p className="text-xl font-bold">44</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-500 mb-1">Medical emergencies</p>
                  <p className="text-xl font-bold">18</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-500 mb-1">Fire incidents</p>
                  <p className="text-xl font-bold">12</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-500 mb-1">Traffic accidents</p>
                  <p className="text-xl font-bold">14</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgHom;