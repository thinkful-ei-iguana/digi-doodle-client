import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import GameLobbyPage from './components/GameLobbyPage/GameLobbyPage';
import { ColorProvider } from './Context/ColorContext';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import './App.css';
import SignUpForm from './components/SignUpForm/SignUpForm';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary'


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
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </div>
        </ErrorBoundary>
      </ColorProvider>
    );
  }
}

export default App;
