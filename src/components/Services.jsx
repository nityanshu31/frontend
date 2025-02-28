import React from 'react';
import { 
  AlertCircle, 
  HeartPulse, 
  ShoppingCart, 
  Home, 
  GraduationCap, 
  Wallet 
} from 'lucide-react';

const Services = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "600px",
    backgroundColor: "#ffd6a7",
    padding: "20px",
    backgroundColor:"#ffebd1",
  };

  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    
    width: "1600px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    height: "600px",
  };

  const leftCardStyle = {
    flex: "1.5",
    background: "linear-gradient(rgba(0, 0, 0.1, 0.7), rgba(0, 0, 0.1, 0.7)),url('https://dighital.com/wp-content/uploads/2020/11/Emergency-Services-Icons_-Shop-2.png') no-repeat center/cover",
    color: "#fff",
    padding: "40px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: "300px",
    textAlign: "center",
  };

  const servicesWrapper = {
    flex: "2.5",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    width: "100%",
    height: "100%",
    overflowY: "auto",
    padding: "10px",
  };

  const serviceCardStyle = {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "250px",
  };

  const buttonStyle = {
    backgroundColor: "#ff8c00",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "5px",
    textAlign: "center",
    marginTop: "10px",
    cursor: "pointer",
    border: "none",
  };

  const services = [
    { 
      Icon: AlertCircle,
      title: "Emergency Aid",
      desc: "Providing immediate aid during emergencies."
    },
    {
      Icon: HeartPulse,
      title: "Medical Assistance",
      desc: "Offering medical support and healthcare services."
    },
    {
      Icon: ShoppingCart,
      title: "Food and Supplies",
      desc: "Distributing essential food and supplies to affected areas."
    },
    {
      Icon: Home,
      title: "Shelter Assistance",
      desc: "Providing safe shelter for displaced individuals."
    },
    {
      Icon: GraduationCap,
      title: "Educational Support",
      desc: "Helping affected children continue their education."
    },
    {
      Icon: Wallet,
      title: "Financial Assistance",
      desc: "Providing financial aid to those in need."
    }
  ];

  return (
    <div style={containerStyle}>
      <div style={cardContainerStyle}>
        <div style={leftCardStyle}>
          <h2 className='font-bold text-3xl p-3 'style={{ fontFamily: "Oswald, sans-serif" }}>Our Services</h2>
          <p className='font-medium text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button style={buttonStyle}>Explore All Our Services</button>
        </div>
        <div style={servicesWrapper}>
          {services.map((service, index) => (
            <div key={index} style={serviceCardStyle}>
              <service.Icon size={48} color="#ff8c00" strokeWidth={1.5} />
              <h3>{service.title}</h3>
              <p style={{ fontSize: "14px", marginBottom: "5px" }}>{service.desc}</p>
              <button style={buttonStyle}>Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;