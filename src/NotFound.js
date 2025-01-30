// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from './config//config';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { getToken } from '../utils/auth';

function NotFound({isAuthenticated}) {
  
  

  return (
    <div className="container">
      404 Not found
    </div>
  );
}

export default NotFound;
