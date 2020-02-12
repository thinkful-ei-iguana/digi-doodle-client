import React from 'react';
import Logo from '../../Pictures/digidoodle-logo.png';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      greeting: false
    };
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value,
      greeting: true
    });
    //this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //POST request to /player
    alert("You are submitting " + this.state.username);
  }


  render() {
    const greeting = this.state.greeting;
    let message;

    if (greeting) {
      message = <h1>Hello, {this.state.username}!</h1>
    }

    return (
      <div className="sign-up-page">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="sign-up-form">
          <form>
            {message}
            <p>Enter your username:</p>
            <input
              type='text'
              onChange={(event) => this.handleChange(event)}
            />
          </form>
        </div>

        <button className="start-button" onClick={this.handleSubmit} >Play Game!</button>
      </div>
    );
  }
}



export default SignUpForm;