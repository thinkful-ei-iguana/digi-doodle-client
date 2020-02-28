import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GameLobbyPage from './components/GameLobbyPage/GameLobbyPage';
import { ColorProvider } from './Context/ColorContext';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import './App.css';
import SignUpForm from './components/SignUpForm/SignUpForm';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary'


class App extends React.Component {

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
