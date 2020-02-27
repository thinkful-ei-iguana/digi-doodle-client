import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './NotFoundPage.css'


const NotFoundPage = () => (
  <div>
    <h1>Page Not Found...</h1>

    <center><Link className="return-home" style={{ textDecoration: 'none' }} to="/">Return to Home Page</Link></center>

  </div>
);
export default NotFoundPage;