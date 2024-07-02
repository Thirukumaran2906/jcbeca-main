import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Login.module.css'; 
import UploadForm from './UploadForm';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await localStorage.getItem('token');
    if (token) {
      try {
<<<<<<< HEAD
        const response = await axios.get('http://3.93.68.228:8080/api/auth/check', {
=======
        const response = await axios.get('https:3.93.68.228:8080/api/auth/check', {
>>>>>>> 0245300b072ca384b01c818d1d063daad482bc21
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
    axios.post('http://3.93.68.228:8080/api/auth/login', { email, password })
      .then(response => {
        const { token } = response.data;
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  };

  return (
    <div className={styles.Logincontainer}>
      {isLoggedIn ? (
        <UploadForm />
      ) : (
        <div className={styles.loginBox}>
          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
              />
            </div>
            <button type="submit" className={styles.button}>Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
