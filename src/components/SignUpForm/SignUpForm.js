import React from 'react';
import Logo from '../../Pictures/digidoodle-logo.png';
import DigiDoodleApiService from '../../services/digi-doodle-api-service';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      greeting: false,
      error: ''
    };
  }


  handleChange = (event) => {
    this.setState({
      username: event.target.value,
      greeting: true,
      error: ''
    });
  }

  handleSubmit = (event) => {
    let username = this.state.username;
    event.preventDefault();
    DigiDoodleApiService.createUserName(username)
    .catch(error => {
      this.setState({
        error: error.error
      })
      console.log(this.state)
    })
  }



  // componentDidCatch(error, errorInfo) {
  //   this.setState({
  //     error: error,
  //     errorInfo: errorInfo
  //   })
  //   console.log('error:' , this.state.error);
  // }

  // validate = ({ username }) => {
  //   return {
  //     username: !username || username.trim().length === 0 
  //     ? "Username is required" 
  //     : false
  //   }
  // }


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