import React from 'react';
import Logo from '../../Pictures/digidoodle-logo.png';
import DigiDoodleApiService from '../../services/digi-doodle-api-service';
import ColorContext from '../../Context/ColorContext'
import './SignUpForm.css'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      greeting: false,
      error: {
        error: ''
      },
      playerId: '',
      gameId: ''
    }
  }

  static contextType = ColorContext;

  handleChange = (event) => {
    this.setState({
      username: event.target.value,
      greeting: true,
    });
  }

  handleSubmit = async (event) => {
    let username = this.state.username;
    

    if (username.length < 4 || username.length > 10) {
      event.preventDefault();
      return this.setState({
        error: {
          error: 'Please choose a username between 4 and 10 characters'
        }
      })
    }
    event.preventDefault();

    try {
      await this.context.setUserName(this.state.username);
      let userID = await DigiDoodleApiService.createUserName(username);
      userID = userID[0];
      await this.setPlayerId(userID);
      await this.context.setUserId(userID);

      let gameData = await DigiDoodleApiService.createNewGame();
      gameData = gameData[0].id;
      await this.setGameId(gameData);
      await this.context.setGameId(gameData);

      await DigiDoodleApiService.insertPlayerInGame(this.state.gameId, this.state.playerId, this.state.username);
      this.props.history.push('/lobby');
    } catch (error) {
      console.log('error', error)
      this.setState({
        error: {
          error: error.error
        }
      })
    }
  }

  setPlayerId(uuid) {
    this.setState({
      playerId: uuid
    })
  }

  setGameId(uuid) {
    this.setState({
      gameId: uuid
    })
  }

  render() {
    console.log(this.context);
    const username = this.state.username;
    const greeting = this.state.greeting;
    let error = this.state.error.error;
    let message;
    let errorMessage;

    if (error) {
      errorMessage = <h2 className="error">{this.state.error.error}!</h2>
    }
    if (greeting) {
      message = <h2 className="greeting">Hello, {username}!</h2>
    }

    return (
      <div className="sign-up-page">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="sign-up-form-container" onSubmit={this.handleSubmit}>
          <form className="sign-up-form">
            {errorMessage}
            {message}
            <p>Enter your username:</p>
            <input
              type='text'
              onChange={(event) => this.handleChange(event)}
              required
              maxLength="15"
            />
            <br />
            <button className="start-button" type="submit">Play Game!</button>
          </form>
        </div>


      </div>
    );
  }
}


export default SignUpForm;