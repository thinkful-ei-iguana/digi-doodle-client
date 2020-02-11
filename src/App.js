import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import './App.css';
import GuessingPage from './GuessingPage/GuessingPage';
import DrawingPage from './DrawingPage/DrawingPage';
import GameLobbyPage from './GameLobbyPage/GameLobbyPage';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/guess' component={GuessingPage} />
      <Route exact path='/draw' component={DrawingPage} />
      <Route exact path='/lobby' component={GameLobbyPage} />
    </div>
  );
}

export default App;
