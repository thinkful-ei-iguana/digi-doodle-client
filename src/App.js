import React from 'react';
import { Route } from 'react-router-dom';
import GameLobbyPage from './components/GameLobbyPage/GameLobbyPage';
import { ColorProvider } from './Context/ColorContext'
import Cookies from 'js-cookie'
import './App.css';

import SignUpForm from './components/SignUpForm/SignUpForm';
import GuessingPage from './components/GuessingPage/GuessingPage';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userID: '',
      username: '',
      gameData: ''
    }
  }

  render() {
    return (
      <ColorProvider>
        <div className="App">
          <Route exact path='/' component={SignUpForm} />
          <Route path='/lobby' component={GameLobbyPage} />
          <Route path='/guess' component={GuessingPage} />
        </div>
      </ColorProvider>
    );
  }
}

export default App;
