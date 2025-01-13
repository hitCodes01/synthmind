import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();
  
  console.log('ProtectedRoute token:', token); 

  if (!token) {
    console.log('No token found, redirecting to /signin');
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  try {
   
    const decodedToken = jwtDecode(token);
    console.log('Decoded token:', decodedToken);

    
    const currentTime = Date.now() / 1000; 
    if (decodedToken.exp < currentTime) {
      console.log('Token has expired');
      localStorage.removeItem("token"); 
      return <Navigate to="/signin" replace state={{ from: location }} />;
    }

  } catch (error) {
    console.error('Error decoding token or invalid token:', error);
    localStorage.removeItem("token"); 
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  
  return children;
}

export default ProtectedRoute;
