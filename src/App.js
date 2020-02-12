import React from 'react';
import { Route } from 'react-router-dom';
import { Tools } from 'react-sketch'
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
      color: '',
      eraser: 3,
    }
  }

changeColorRed = () => {
  this.setState({
      color: 'red',
      eraser: 3,
  })
}
changeColorBlue = () => {
  this.setState({
      color: 'blue',
      eraser: 3,
  })
}
changeColorGreen = () => {
  this.setState({
      color: 'green',
      eraser: 3,
  })
}
changeColorBlack = () => {
  this.setState({
    color: 'black',
    eraser: 3,
  })
}
changeColorPurple = () => {
  this.setState({
    color: 'purple',
    eraser: 3,
  })
}
changeColorOrange = () => {
  this.setState({
    color: 'orange',
    eraser: 3,
  })
}
changeColorYellow = () => {
  this.setState({
    color: 'gold',
    eraser: 3,
  })
}
changeColorBrown = () => {
  this.setState({
    color: 'brown',
    eraser: 3,
  })
}
handleEraser = () => {
  this.setState({
    color: 'white',
    eraser: 15,
  })
}

componentDidMount() {
  this.setState({
    color: 'black',
  })
}

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <Route exact path='/' component={LandingPage} />
          <Route path='/guess' component={GuessingPage} />
          <Route path='/draw' render={(routeProps) => {
            return <DrawingPage {...routeProps} 
              changeColorRed={this.changeColorRed} 
              changeColorBlue={this.changeColorBlue} 
              changeColorGreen={this.changeColorGreen}
              changeColorBlack={this.changeColorBlack}
              changeColorPurple={this.changeColorPurple}
              changeColorOrange={this.changeColorOrange}
              changeColorYellow={this.changeColorYellow}
              changeColorBrown={this.changeColorBrown}
              handleEraser={this.handleEraser}
            />
          }}/>
          <Route path='/lobby' component={GameLobbyPage} />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
