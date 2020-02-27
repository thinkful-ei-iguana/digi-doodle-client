import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GameLobbyPage from './components/GameLobbyPage/GameLobbyPage';
import { ColorProvider } from './Context/ColorContext';
import './App.css';
import SignUpForm from './components/SignUpForm/SignUpForm';
import ErrorBoundary from './components/ErrorBoundary'


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
        <ErrorBoundary>
          <div className="App">
            <Switch>
              <Route exact path='/' component={SignUpForm} />
              <Route path='/lobby' component={GameLobbyPage} />
            </Switch>
          </div>
        </ErrorBoundary>
      </ColorProvider>
    );
  }
}

export default App;
