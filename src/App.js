import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import GameLobbyPage from './components/GameLobbyPage/GameLobbyPage';
import {ColorProvider} from './Context/ColorContext'
import './App.css';
import GuessingPage from './GuessingPage/GuessingPage';
import DrawingPage from './DrawingPage/DrawingPage';
import GameLobbyPage from './GameLobbyPage/GameLobbyPage';
import SignUpForm from './components/SignUpForm/SignUpForm';


class App extends React.Component {
  render() {
    return (
       <ColorProvider>
          <div className="App">
            <Route exact path='/' component={LandingPage} />
            <Route path='/lobby' component={GameLobbyPage} />
          </div>
        </ColorProvider>
    );
  }
}

export default App;
