import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'


const NotFound = () => (
  <div>
    <h1>Page Not Found...</h1>
    <center><Link className="return-home" style={{ textDecoration: 'none' }} to="/">Return to Home Page</Link></center>
  </div>
);
export default NotFound;