import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import './App.css';
// import DrawingPage from './DrawingPage/DrawingPage'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
    </div>
  );
}

export default App;
