import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/Logo.jpg'; 
import bgImagee from '../assets/regbackground.jpg'; 

const styles = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    background: `url(${bgImagee}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  container: {
    display: 'flex',
    width: '900px',
    height: '450px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#eff8ff',
  },
  sideImage: {
    width: '70%',
    background: `url(${bgImage}) no-repeat center center`,
    backgroundSize: 'contain',  // Ensures the whole image fits within the container
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents repetition
    height: '100%', // Ensures the container has enough height to display the image
  },
  formContainer: {
    width: '60%',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  formHeader: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
  },
  formDescription: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  formActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    fontSize: '14px',
    color: '#007bff',
    textDecoration: 'none',
  },
  formButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  signupText: {
    textAlign: 'center',
    fontSize: '14px',
    marginTop: '10px',
  },
  signupLink: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: '10px',
  },
};

const Login = ({ onLogin }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const apiUrl = 'http://localhost:5000/api/auth/login';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, password }),
      });

      const result = await response.json();
      console.log("API Response:", result);

      setIsLoading(false);

      if (response.ok) {
        const { role, token } = result;
        console.log("User role from API:", role);

        if (!role) {
          setError("User role is missing from response.");
          return;
        }

        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        onLogin(role);

        if (role === "User/Volunteer") {
          navigate('/user-home');
        } else if (role === "Organization") {
          navigate('/organization');
        } else {
          setError('User role not recognized: ' + role);
        }
      } else {
        setError(result.message || 'Login failed.');
      }
    } catch (err) {
      setIsLoading(false);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.sideImage}></div>
        <div style={styles.formContainer}>
          <h2 style={styles.formHeader}>Login</h2>
          <p style={styles.formDescription}>Welcome back! Please enter your credentials to log in.</p>

          {error && <p style={styles.errorText}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Phone:</label>
              <input
                type="tel"
                style={styles.input}
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Password:</label>
              <input
                type="password"
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div style={styles.formActions}>
              <a href="/forgot-password" style={styles.link}>Forgot Password?</a>
              <button type="submit" style={styles.formButton} disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>

          <p style={styles.signupText}>
            Don't have an account? <a href="/register" style={styles.signupLink}>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
