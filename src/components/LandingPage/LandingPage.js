import React from 'react';
import './LandingPage.css';
import Logo from '../../Pictures/digidoodle-logo.png';

//title display
//logo
// description
//start button

// handleSubmitUser = () => {
//   //handle submission of user
//   //make a database call to submit user
// }

class LandingPage extends React.Component {
  state = {}
  render() {
    return (
      <div className="landing-page">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="about-container">
          <p className="about-text">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
        </div>
        <button className="start-button">Draw</button>
      </div>
    );
  }
}

export default LandingPage;