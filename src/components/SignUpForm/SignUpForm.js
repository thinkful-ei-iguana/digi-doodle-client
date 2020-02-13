import React from 'react';
import Logo from '../../Pictures/digidoodle-logo.png';
import DigiDoodleApiService from '../../services/digi-doodle-api-service';
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
      playerId: [],
    };
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
        playerId: [...res]
      })
      console.log('state', this.state.playerId);
      console.log('res', res);
      console.log('fish');
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
      errorMessage = <h2>{this.state.error.error}!</h2>
    }
    if (greeting) {
      message = <h2>Hello, {username}!</h2>
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
            <br/>
            <button className="start-button" type="submit">Play Game!</button>
          </form>
        </div>


      </div>
    );
  }
}


export default SignUpForm;