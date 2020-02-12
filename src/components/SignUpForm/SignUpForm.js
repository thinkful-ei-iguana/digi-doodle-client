import React from 'react';
import Logo from '../../Pictures/digidoodle-logo.png';
import DigiDoodleApiService from '../../services/digi-doodle-api-service';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      greeting: false,
      error: null
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
    event.preventDefault();
    this.setState({error: null})
    DigiDoodleApiService.createUserName(username).catch(error => {
      this.setState({
        error: error
      })
    })
  }



  render() {
    const greeting = this.state.greeting;
    const error = this.state.error;
    let errorMessage
    let message;

    if (greeting) {
      message = <h1>Hello, {this.state.username}!</h1>
    }

    if (error) {
      errorMessage = <h1>{this.state.error.error}</h1>

    }

    return (
      <div className="sign-up-page">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        {errorMessage}
        <div className="sign-up-form">
          <form>
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