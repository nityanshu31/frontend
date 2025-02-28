import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bgImage from '../assets/Logo.jpg';
import bgImagee from '../assets/regbackground.jpg';

const Register = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User/Volunteer');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const validatePhoneNumber = (phone) => /^\d{10}$/.test(phone);
  const validatePassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?&#]{8,}$/.test(password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !password) {
      setError('All fields are required.');
      return;
    }

    if (!validatePhoneNumber(phone)) {
      setError('Phone number must be exactly 10 digits.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    setIsLoading(true);
    setError('');

    const apiUrl = 'http://localhost:5000/api/auth/register';
    const userData = { name, phone, password, role };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      
      const result = await response.json();
      setIsLoading(false);

      if (response.ok) {
        navigate('/login');
      } else {
        setError(result.message || 'Registration failed.');
      }
    } catch (err) {
      setIsLoading(false);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div style={{ margin: 0, fontFamily: 'Arial, sans-serif', background: `url(${bgImagee}) no-repeat center center fixed`, backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', width: '1000px', height: '600px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#eff8ff' }}>
        <div style={{ width: '70%', background: `url(${bgImage}) no-repeat center center`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100%' }}></div>
        <div style={{ width: '60%', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '10px', textAlign: 'center' }}>Create Your Account</div>
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '20px', textAlign: 'center' }}>Join us and start your journey today!</div>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#333', display: 'block', marginBottom: '5px' }}>Enter Your Name</label>
              <input style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px' }} type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#333', display: 'block', marginBottom: '5px' }}>Enter Your Phone</label>
              <input style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px' }} type="text" placeholder="Enter Your Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#333', display: 'block', marginBottom: '5px' }}>Register as</label>
              <select style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px' }} value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="User/Volunteer">User/Volunteer</option>
                <option value="Organization">Organization</option>
              </select>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '14px', fontWeight: 'bold', color: '#333', display: 'block', marginBottom: '5px' }}>Enter Your Password</label>
              <input style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px' }} type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer' }} type="submit" disabled={isLoading}>{isLoading ? 'Registering...' : 'Register'}</button>
          </form>
          <div style={{ textAlign: 'center', fontSize: '14px', marginTop: '10px' }}>Already have an account? <Link to="/login" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Login</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
