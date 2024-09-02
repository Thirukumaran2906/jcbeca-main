import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UploadForm from './UploadForm';
import ViewPapersAdmin from './ViewPapersAdmin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showViewPaperAdmin, setShowViewPaperAdmin] = useState(false);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = localStorage.getItem('jcbecatoken');
    if (token) {
      try {
        const response = await axios.get('https://jcbeca.com/api/auth/check', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data.valid) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Session check failed:', error);
      }
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('https://jcbeca.com/api/auth/login', { email, password })
      .then(response => {
        const { token } = response.data;
        localStorage.setItem('jcbecatoken', token);
        setIsLoggedIn(true);
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  };

  return (
    <div style={{ position: 'relative', padding: '20px' }}>
      <button 
        onClick={() => setShowViewPaperAdmin(!showViewPaperAdmin)} 
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'darkred',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer'
        }}
      >
        {showViewPaperAdmin ? 'Hide Paper Admin' : 'View Paper Admin'}
      </button>
      {isLoggedIn ? (
        showViewPaperAdmin ? <ViewPapersAdmin /> : <UploadForm />
      ) : (
        <div style={{ marginTop: '50px', color :'black' }}>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                required
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                required
              />
            </div>
            <button 
              type="submit" 
              style={{
                backgroundColor: 'darkred',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
