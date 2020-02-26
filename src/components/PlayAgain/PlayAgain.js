import React from 'react';
import DigiDoodleApiService from '../../services/digi-doodle-api-service';
import ColorContext from '../../Context/ColorContext'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'



class PlayAgain extends React.Component {
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
            console.log('userId: ', userID);
            userID = userID[0];
            await this.setPlayerId(userID);
            await this.context.setUserId(userID);

            let gameData = await DigiDoodleApiService.joinGame(this.state.playerId, userName);
            console.log('gamedata response: ', gameData);
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