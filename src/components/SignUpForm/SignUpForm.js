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
      return this.setState({
        error: {
          error: 'Please choose a username between 4 and 10 characters'
        }
      })
      // return alert("Please choose a username between 4 and 10 characters.")
    }
    event.preventDefault();
    this.setState({
      error: {
        error: ''
      },
    })

    DigiDoodleApiService.createUserName(username).catch(res => {
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

    if (error) {
      error = <h1>{this.state.error.error}</h1>
    }

    return (
      <div className="sign-up-page">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="logo" />
        </div>

        <div className="sign-up-form">
          <form>
            {errorMessage}
            {message}
            <p>Enter your username:</p>
            <input
              type='text'
              onChange={(event) => this.handleChange(event)}
              required
            />
          </form>
        </div>

        <button className="start-button" onClick={this.handleSubmit} >Play Game!</button>
      </div>
    );
  }
}


export default SignUpForm;