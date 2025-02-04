// src/pages/RegisterPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config/config';
function RegisterPage({isAuthenticated}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  if (isAuthenticated) {
     // Store username for display
    //setIsAuthenticated(true);
    navigate('/profile');
  }
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const response = await axios.post(`${config.apiUrl}/register`, {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        alert('Registration successful! Please log in.');
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // Capture Laravel validation errors
        //console.log(error.response.data);
        const firstValue = Object.values(error.response.data.errors)[0];
        setError(firstValue);
      }
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mt-5">Register</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                id="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
            {error && <p className="text-danger mt-3">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
