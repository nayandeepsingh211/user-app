// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from './config//config';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { getToken } from '../utils/auth';

function Profile({isAuthenticated}) {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  if (!isAuthenticated) {
     // Store username for display
    //setIsAuthenticated(true);
    navigate('/');
  }
  useEffect(() => {
    // Fetch user data
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login if no token exists
      return;
    }

    axios.get(`${config.apiUrl}/profile`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })  // Example API call
      .then((response) => {
        setUser(response.data);  // Set the user data
        //console.log(response.data);
        if(response.data.message)
        {
          localStorage.removeItem('token');
          navigate('/');

        }
        
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  },[]);
  //console.log('data',user);
  return (
    <div className="container">
      {isAuthenticated ? (
        <div className="text-center mt-5">
          <h2>Welcome,{user?user.name:''} !</h2>
          <p>You are successfully logged in.</p>
        </div>
      ) : (
        <div className="text-center mt-5">
          <h2>Please log in to view this page.</h2>
        </div>
      )}
    </div>
  );
}

export default Profile;
