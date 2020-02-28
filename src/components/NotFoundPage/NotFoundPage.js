import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'

const NotFoundPage = () => (
  <div className="not-found-container">
    <h1 className="not-found-header">Page Not Found...</h1>
    <center><Link className="return-home" style={{ textDecoration: 'none' }} to="/">Return to Home Page</Link></center>
  </div>
);
export default NotFoundPage;