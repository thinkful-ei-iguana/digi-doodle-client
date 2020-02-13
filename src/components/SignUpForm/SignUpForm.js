import React from 'react';
import Logo from '../../Pictures/digidoodle-logo.png';
import DigiDoodleApiService from '../../services/digi-doodle-api-service';

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

  handleChange = (event) => {
    this.setState({
      username: event.target.value,
      greeting: true,
    });
  }

  handleSubmit = (event) => {
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
    console.log('fish');
    DigiDoodleApiService.createUserName(username)
      .then(res => {
        this.setState({
          playerId: res[0]
        })
      })
      .then(() => {
        DigiDoodleApiService.createNewGame()
          .then(res => {
            this.setState({
              gameId: res[0].id
            })
          })
      })
      .catch(res => {
        this.setState({
          error: {
            error: res.error
          }
        })
      })

  }

  render() {
    const username = this.state.username;
    const greeting = this.state.greeting;
    let error = this.state.error.error;
    let message;
    let errorMessage;

    if (error) {
      errorMessage = <h1>{this.state.error.error}!</h1>
    }
    if (greeting) {
      message = <h1>Hello, {username}!</h1>
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
            />
            <br></br>
            <button className="start-button" type="submit"  >Play Game!</button>
          </form>
        </div>


      </div>
    );
  }
}


export default SignUpForm;