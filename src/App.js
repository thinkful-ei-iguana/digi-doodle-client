import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GameLobbyPage from './components/GameLobbyPage/GameLobbyPage';
import { ColorProvider } from './Context/ColorContext';
import PrivateRoute from '../src/Utils/PrivateRoute'
import PublicRoute from '../src/Utils/PublicOnlyRoute'
import './App.css';
import SignUpForm from './components/SignUpForm/SignUpForm';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userID: '',
      username: '',
      gameData: '',
    }
  }

  render() {
    return (
      <ColorProvider>
        <div className="App">
          <Switch>
            <PublicRoute exact path='/' component={SignUpForm} />
            <PrivateRoute path='/lobby' component={GameLobbyPage} />
          </Switch>
        </div>
      </ColorProvider>
    );
  }
}

export default App;
