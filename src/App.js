// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './pages/RegisterPage';
import PublicPage from './Profile';
import Logout from './Logout';
import NotFound from './NotFound';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  // Check if token is stored in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    //navigate('/login');
  };
  return (

    <Router>
      <div>
        <nav>
          <ul>
           {isAuthenticated ? (
              <>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<RegisterPage isAuthenticated={isAuthenticated}/>} />
          <Route path="/profile" element={<PublicPage isAuthenticated={isAuthenticated} />} />
          <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
