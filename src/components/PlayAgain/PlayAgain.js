import React from 'react';
import DigiDoodleApiService from '../../services/digi-doodle-api-service';
import ColorContext from '../../Context/ColorContext'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'
import './PlayAgain.css';

class PlayAgain extends React.Component {


    handleDeleteData = () => {
        Cookies.remove('digi-doodle-user', { path: `/` });
    }


    render() {

        return (
            <div className="play-again-container">
                <form className="play-again-form">
                    <a href="/" className="play-again-button" onClick={this.handleDeleteData}>Play Again?</a>
                </form>
            </div>
        );
    }
}


export default PlayAgain;