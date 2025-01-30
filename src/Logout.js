// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from './config//config';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { getToken } from '../utils/auth';

function Logout({setIsAuthenticated}) {
  
  const navigate = useNavigate();
  
  useEffect(function(){
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  },[]);

  return (
    <div className="container">
      Logout
    </div>
  );
}

export default Logout;
