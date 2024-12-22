import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import API from '../api/axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('access')
    if (token) {
        navigate('/dashboard')
    }
  }, [navigate])


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/token/', { username, password });
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
    //   alert('Login successful!');   // Alert popup saying logged in
      navigate('/dashboard')
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;