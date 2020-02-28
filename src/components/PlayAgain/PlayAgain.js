import React from 'react';
import Cookies from 'js-cookie';
import './PlayAgain.css';

class PlayAgain extends React.Component {

    handleDeleteData = () => {
        Cookies.remove('digi-doodle-user', { path: `/` });
    }

    render() {
        return (
            <div className="play-again-container">
                <form aria-label="play-again-form" className="play-again-form">
                    <a href="/" role="button" aria-pressed="false" title="play again?" aria-label="play again?" className="play-again-button" onClick={this.handleDeleteData}>Play Again?</a>
                </form>
            </div>
        );
    }
}


export default PlayAgain;