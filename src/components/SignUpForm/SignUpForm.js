import React from 'react';
import Logo from '../../Pictures/digidoodle-logo.png';
import DigiDoodleApiService from '../../services/digi-doodle-api-service';
import ColorContext from '../../Context/ColorContext'
import Cookies from 'js-cookie';
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
      let userName = this.state.username;

      let userID = await DigiDoodleApiService.createUserName(userName);

      userID = userID[0];
      await this.setPlayerId(userID);
      await this.context.setUserId(userID);

      let gameData = await DigiDoodleApiService.joinGame(this.state.playerId, userName);

      gameData = gameData[0];
      await this.setGameId(gameData);
      await this.context.setGameId(gameData);

      let cookieData = {
        username: userName,
        userID: userID,
        gameId: gameData
      }

      Cookies.set('digi-doodle-user', cookieData, { expires: 1 });

      this.props.history.push('/lobby');

    } catch (error) {
      this.setState({
        error: {
          error: error.error
        }
      });
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
              spellCheck="false"
              aria-label="enter username"
              aria-required
            />
            <br />
            <button aria-pressed="false" title="Play Game!" className="start-button" type="submit">Play Game!</button>
          </form>
        </div>
        <h2 className="welcome-header">Welcome to digi-doodle<span className="exclamation">!</span></h2>
        <div className="rules-container">
          <p className="intro-text">The rules of the game are simple:</p>
          <ul className="rules-ul">
            <li className="rules-li">• First enter your desired username to start playing<span className="exclamation">!</span></li>
            <li className="rules-li">• When it’s your turn, you will draw a picture based on the given word or phrase that you see. </li>
            <li className="rules-li">• When you're guessing what another player is drawing, you will type and submit your guess in the chat box below the canvas.</li>
            <li className="rules-li">• The drawer gets 2 points when a player makes a correct guess, and the guesser gets 1 point for each correct guess. The first player to score 15 points wins<span className="exclamation">!</span></li>
          </ul>
        </div>
      </div>
    );
  }
}


export default SignUpForm;