import React, { useState, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';

function DonationPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [donationType, setDonationType] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const cardRefs = useRef([]);

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the card is visible
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const handleDonationChange = (type) => {
    setDonationType(type);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!e.target.fullName.value) errors.fullName = 'Full Name is required';
    if (!e.target.email.value) errors.email = 'Email Address is required';
    if (!donationType) errors.donationType = 'Donation type is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      // Handle form submission logic here
      alert('Donation submitted successfully!');
      setShowPopup(false);
    }
  };

  // Inline styles
  const styles = {
    body: {
      fontFamily: '"Public Sans", "Noto Sans", sans-serif',
      backgroundColor: '#f8fafb',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'hidden',
      color: '#0e161b',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      padding: '12px 40px',
      width: '100%',
      backgroundColor: '#ffffff',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'background-color 0.3s ease',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    },
    logo: {
      width: '24px',
      height: '24px',
      transition: 'transform 0.3s ease',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      lineHeight: '1.25',
      letterSpacing: '-0.015em',
      background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',  // Centers vertically
      textAlign: 'center',  // Centers horizontally
      height: '100%',  // Ensures the container takes full height
      width: '100%',   // Ensures the container takes full width
    },
    
    mainContent: {
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '40px',
      paddingBottom: '40px',
      width: '100%',
    },
    contentContainer: {
      width: '100%',
      maxWidth: '1200px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 20px',
    },
    heading: {
      fontSize: '36px',
      fontWeight: 'bold',
      lineHeight: '1.25',
      textAlign: 'center',
      padding: '0 16px 12px',
      animation: 'fadeIn 1s ease-in-out',
      background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    paragraph: {
      fontSize: '18px',
      lineHeight: '1.5',
      textAlign: 'center',
      padding: '4px 16px 12px',
      maxWidth: '800px',
      animation: 'fadeIn 1.5s ease-in-out',
      color: '#4a5568',
    },
    donationAmount: {
      fontSize: '20px',
      fontWeight: 'bold',
      padding: '0 16px 8px',
      animation: 'fadeIn 2s ease-in-out',
      color: '#2d3748',
    },
    radioLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      borderRadius: '12px',
      border: '2px solid #e2e8f0',
      backgroundColor: '#ffffff',
      padding: '15px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '600px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
        transform: 'scale(1.02)',
      },
    },
    radioInput: {
      width: '20px',
      height: '20px',
      border: '2px solid #d1dde6',
      backgroundColor: 'transparent',
      color: 'transparent',
      cursor: 'pointer',
    },
    donateButton: {
      display: 'flex',
      minWidth: '84px',
      maxWidth: '480px',
      width: '100%',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px',
      height: '48px',
      padding: '0 20px',
      backgroundColor: '#6a11cb',
      background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
      color: '#ffffff',
      fontSize: '18px',
      fontWeight: 'bold',
      lineHeight: '1.5',
      letterSpacing: '0.015em',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 4px 6px rgba(106, 17, 203, 0.2)',
      '&:hover': {
        boxShadow: '0 6px 12px rgba(106, 17, 203, 0.3)',
        transform: 'scale(1.05)',
      },
    },
    impactSection: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      padding: '16px',
      width: '100%',
      maxWidth: '1200px',
    },
    impactCard: {
      minWidth: '200px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      padding: '24px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      animation: 'fadeIn 2.5s ease-in-out',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
        transform: 'scale(1.02)',
      },
    },
    footer: {
      display: 'flex',
      justifyContent: 'center',
      padding: '40px 20px',
      width: '100%',
      backgroundColor: '#ffffff',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)',
    },
    footerLinks: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '1200px',
    },
    footerLink: {
      color: '#4a5568',
      fontSize: '16px',
      fontWeight: 'normal',
      lineHeight: '1.5',
      minWidth: '160px',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: '#6a11cb',
      },
    },
    socialIcons: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
    },
    socialIcon: {
      width: '24px',
      height: '24px',
      color: '#4a5568',
      transition: 'transform 0.3s ease, color 0.3s ease',
      '&:hover': {
        color: '#6a11cb',
        transform: 'scale(1.2)',
      },
    },
    otherAmountInput: {
      width: '100%',
      maxWidth: '600px',
      height: '56px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      backgroundColor: '#ffffff',
      padding: '0 16px',
      fontSize: '16px',
      color: '#0e161b',
      marginTop: '16px',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      '&:focus': {
        borderColor: '#6a11cb',
        boxShadow: '0 0 0 3px rgba(106, 17, 203, 0.1)',
      },
    },
    photoSection: {
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '12px',
      padding: '80px',
      marginTop: '40px',
      textAlign: 'center',
      minHeight: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      animation: 'fadeIn 3s ease-in-out',
      width: '100%',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    photoHeading: {
      fontSize: '36px',
      fontWeight: 'bold',
      lineHeight: '1.25',
      marginBottom: '24px',
      color: '#ffffff',
      background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
      padding: '16px',
      width: '100%',
      maxWidth: '1200px',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      backgroundColor: '#ffffff',
      padding: '24px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      opacity: '0',
      transform: 'translateY(50px)',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
        transform: 'scale(1.02)',
      },
    },
    cardIcon: {
      width: '64px',
      height: '64px',
      margin: '0 auto',
    },
    popupOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1001,
    },
    popupContent: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      maxWidth: '480px',
      width: '100%',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    popupHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
    },
    popupTitle: {
      color: '#0e161b',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    closeButton: {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: '24px',
      color: '#0e161b',
    },
    popupForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    formInput: {
      width: '100%',
      height: '48px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      padding: '0 16px',
      fontSize: '16px',
      color: '#0e161b',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      '&:focus': {
        borderColor: '#6a11cb',
        boxShadow: '0 0 0 3px rgba(106, 17, 203, 0.1)',
      },
    },
    formButton: {
      width: '100%',
      height: '48px',
      borderRadius: '12px',
      backgroundColor: '#6a11cb',
      background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
      color: '#ffffff',
      fontSize: '16px',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 4px 6px rgba(106, 17, 203, 0.2)',
      '&:hover': {
        boxShadow: '0 6px 12px rgba(106, 17, 203, 0.3)',
        transform: 'scale(1.05)',
      },
    },
  };

  // Colorful SVG Icons
  const CreditCardIcon = () => (
    <svg style={styles.cardIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 12H6C4.89543 12 4 12.8954 4 14V34C4 35.1046 4.89543 36 6 36H42C43.1046 36 44 35.1046 44 34V14C44 12.8954 43.1046 12 42 12Z" fill="#4CAF50" />
      <path d="M4 20H44V24H4V20Z" fill="#FFC107" />
      <path d="M12 28H16V32H12V28Z" fill="#F44336" />
    </svg>
  );

  const PaypalLogoIcon = () => (
    <svg style={styles.cardIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z" fill="#2196F3" />
      <path d="M24 12C18.4772 12 14 16.4772 14 22C14 27.5228 18.4772 32 24 32C29.5228 32 34 27.5228 34 22C34 16.4772 29.5228 12 24 12Z" fill="#FFC107" />
    </svg>
  );

  const BankIcon = () => (
    <svg style={styles.cardIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L4 16V20H44V16L24 4Z" fill="#FF5722" />
      <path d="M4 28V40H44V28H4Z" fill="#FFC107" />
      <path d="M12 32H16V36H12V32Z" fill="#F44336" />
    </svg>
  );

  // Donation type icons
  const FoodIcon = () => (
    <svg style={styles.cardIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8V40H36V8H12Z" fill="#FFC107" />
      <path d="M18 16H30V32H18V16Z" fill="#FFFFFF" />
      <path d="M22 20H26V28H22V20Z" fill="#4CAF50" />
    </svg>
  );

  const ClothesIcon = () => (
    <svg style={styles.cardIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L12 12L8 24V40H40V24L36 12L24 4Z" fill="#2196F3" />
      <path d="M20 12H28V24H20V12Z" fill="#FFFFFF" />
    </svg>
  );

  const MedicalIcon = () => (
    <svg style={styles.cardIcon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12H36V36H12V12Z" fill="#F44336" />
      <path d="M20 20V28H28V20H20Z" fill="#FFFFFF" />
    </svg>
  );

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <Heart style={styles.logo} />
          <h2 style={styles.title}>Brighter Futures</h2>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.contentContainer}>
          <h2 style={styles.heading}>
            Help us in our mission to create a world where every child is safe, educated, and loved.
          </h2>
          <p style={styles.paragraph}>
            Your donation is tax-deductible to the fullest extent allowed by law. For U.S. tax purposes, our EIN is 47-2198954.
          </p>

          {/* Donation Type */}
          <h3 style={styles.donationAmount}>What would you like to donate?</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', width: '100%' }}>
            {[
              { type: 'Food', icon: <FoodIcon />, description: 'Provide nutritious meals for children in need' },
              { type: 'Clothes', icon: <ClothesIcon />, description: 'Donate warm clothing and essentials' },
              { type: 'Medical', icon: <MedicalIcon />, description: 'Support healthcare and medical supplies' }
            ].map((item, index) => (
              <label key={index} style={{
                ...styles.radioLabel,
                border: donationType === item.type ? '2px solid #6a11cb' : '2px solid #e2e8f0',
                backgroundColor: donationType === item.type ? '#f0ebff' : '#ffffff'
              }}>
                <input
                  type="radio"
                  name="donation"
                  style={styles.radioInput}
                  checked={donationType === item.type}
                  onChange={() => handleDonationChange(item.type)}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {item.icon}
                  <div>
                    <p style={{ color: '#0e161b', fontSize: '18px', fontWeight: '500' }}>
                      {item.type}
                    </p>
                    <p style={{ color: '#4a5568', fontSize: '14px' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </label>
            ))}
          </div>

          {/* Donate Button */}
          <div style={{ padding: '16px', width: '100%' }}>
            <button style={styles.donateButton} onClick={() => setShowPopup(true)}>Donate Now</button>
          </div>

          {/* More Ways to Give */}
          <h3 style={styles.donationAmount}>More ways to give</h3>
          <div style={styles.cardContainer}>
            {[
              { 
                icon: <CreditCardIcon />, 
                title: 'Credit card', 
                description: 'The easiest way to donate',
                link: 'https://www.visa.com/donate'
              },
              { 
                icon: <PaypalLogoIcon />, 
                title: 'PayPal', 
                description: 'The safer way to pay',
                link: 'https://www.paypal.com/donate'
              },
              { 
                icon: <BankIcon />, 
                title: 'Bank transfer', 
                description: 'The most direct way to give',
                link: 'https://www.bankofamerica.com/charitable'
              },
            ].map((item, index) => (
              <a 
                key={index} 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={styles.card}
                  ref={(el) => (cardRefs.current[index] = el)} // Assign ref to each card
                >
                  {item.icon}
                  <h2 style={{ color: '#0e161b', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>{item.title}</h2>
                  <p style={{ color: '#4a5568', fontSize: '16px', fontWeight: 'normal', textAlign: 'center' }}>{item.description}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Your Impact */}
          <h3 style={styles.donationAmount}>Your impact</h3>
          <div style={styles.impactSection}>
            {[
              { title: 'Children impacted', value: '5.8M' },
              { title: 'Countries supported', value: '190' },
              { title: 'Programs funded', value: '3.1K' },
            ].map((item, index) => (
              <div key={index} style={styles.impactCard}>
                <p style={{ color: '#4a5568', fontSize: '16px', fontWeight: '500' }}>{item.title}</p>
                <p style={{ color: '#0e161b', fontSize: '24px', fontWeight: 'bold' }}>{item.value}</p>
              </div>
            ))}
          </div>

          {/* Smiling Children Photo Section */}
          <div style={styles.photoSection}>
            <h1 style={styles.photoHeading}>Give hope to children in need</h1>
            <button style={styles.donateButton} onClick={() => setShowPopup(true)}>Donate Now</button>
          </div>
        </div>
      </main>

      {/* Popup Form */}
      {showPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupContent}>
            <div style={styles.popupHeader}>
              <h2 style={styles.popupTitle}>Donate Now</h2>
              <button style={styles.closeButton} onClick={() => setShowPopup(false)}>&times;</button>
            </div>
            <form style={styles.popupForm} onSubmit={handleFormSubmit}>
              <input type="text" name="fullName" placeholder="Full Name" style={styles.formInput} />
              {formErrors.fullName && <p style={{ color: 'red', fontSize: '14px' }}>{formErrors.fullName}</p>}
              
              <input type="email" name="email" placeholder="Email Address" style={styles.formInput} />
              {formErrors.email && <p style={{ color: 'red', fontSize: '14px' }}>{formErrors.email}</p>}
              
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Donation Type:</p>
                <p>{donationType || 'Please select a donation type'}</p>
                {formErrors.donationType && <p style={{ color: 'red', fontSize: '14px' }}>{formErrors.donationType}</p>}
              </div>
              
              <textarea 
                name="message" 
                placeholder="Your message (optional)" 
                style={{ ...styles.formInput, height: '100px', padding: '12px 16px', resize: 'vertical' }}
              ></textarea>
              
              <button type="submit" style={styles.formButton}>Submit Donation</button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={{ maxWidth: '1200px', width: '100%' }}>
          <div style={styles.footerLinks}>
            {['About', 'Careers', 'Press', 'Blog', 'Help', 'Policies', 'Diversity & Belonging'].map((link, index) => (
              <a key={index} href="#" style={styles.footerLink}>{link}</a>
            ))}
          </div>
          <div style={styles.socialIcons}>
            {['TwitterLogo', 'FacebookLogo', 'InstagramLogo'].map((icon, index) => (
              <a key={index} href="#">
                <svg style={styles.socialIcon} viewBox="0 0 256 256" fill="currentColor">
                  <path d={icon === 'TwitterLogo' ? "M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" : icon === 'FacebookLogo' ? "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" : "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"} />
                </svg>
              </a>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#4a5568', fontSize: '16px', fontWeight: 'normal', marginTop: '24px' }}>
            © 2025 Brighter Futures
          </p>
        </div>
      </footer>
    </div>
  );
}

export default DonationPage;