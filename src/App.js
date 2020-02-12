import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import AppContext from './Context/AppContext'
import './App.css';
import GuessingPage from './GuessingPage/GuessingPage';
import DrawingPage from './DrawingPage/DrawingPage';
import GameLobbyPage from './GameLobbyPage/GameLobbyPage';

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
      <div className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/guess' component={GuessingPage} />
        <Route exact path='/draw' component={DrawingPage} />
        <Route exact path='/lobby' component={GameLobbyPage} />
      </div>
      </AppContext.Provider>
    );
  }
}

export default App;
