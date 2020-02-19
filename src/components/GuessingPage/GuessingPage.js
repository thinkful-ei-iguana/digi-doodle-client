import React, { Component } from 'react'
import Canvas from '../../Utils/Canvas/Canvas'
import './GuessingPage.css'
import ColorContext from '../../Context/ColorContext'
import DigiDoodleApiService from '../../services/digi-doodle-api-service'
import Cookies from 'js-cookie';
import socket from '../../services/socket-service'
import '../../Utils/Canvas/Canvas.css'
import { animateScroll } from "react-scroll";

export default class GuessingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: '',
            username: '',
            players: [],
            score: 0,
            messages: [{
                player: 'Lobby',
                message: 'Welcome to the room!'
            }]
        }
    }

    static contextType = ColorContext;

    async componentWillMount() {
        let cookie = Cookies.get();
        let data = JSON.parse(cookie['digi-doodle-user']);
        await this.setState({
            username: data.username
        });

        await socket.on('chat response', (msg) => {
            this.setState({ 
                 messages: [...this.state.messages, msg]
             }, this.scrollToBottom);
         })
         console.log(this.state.messages)
    }

    handleGuessSubmit = async (ev) => {
        ev.preventDefault();
        let guess = await DigiDoodleApiService.postGuess(this.context.gameId, this.context.userId, this.state.guess);
        console.log('guess response from database: ', guess)

        socket.emit('guess', {player: this.state.username, message: this.state.guess});
        

        // console.log('guess response: ', guess);
        await this.setState({
            guess: ''
        });
    }

    handleTextInput = (ev) => {
        this.setState({
            guess: ev.target.value
        })
    }

    scrollToBottom() {
        animateScroll.scrollToBottom({
        containerId: "chatUl"
        });
    }



    //event handler for submit button to validate answer

    render() {
        return (
            <div>
                <h1 className="guess-page-header">What are they drawing<span className="question-mark">?</span></h1>
                <div className="disabled-canvas">
                    <Canvas />
                </div>
                


                <div className="players-container">
                    <ul className="player-ul">
                        {this.context.players.map((player, index) => {
                            return (
                                <li className="player-li" key={index}>
                                    <span>{player.username}</span><br/>
                                    <span className="score">{player.score}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                    <form className="guess-input" >
                        <label htmlFor="chat-input">Guess goes here: </label>
                        <input type="text" onChange={this.handleTextInput}
                            id="chat-input"
                            value={this.state.guess}
                            required
                            spellCheck="false"
                            maxLength="30"
                        />
                        <button className="submit-guess" type="submit" id="chat-submit" onClick={this.handleGuessSubmit}>&#10004;</button>
                    </form>

                <div className="chat-window">
                    <ul className="chat-ul" id="chatUl">
                     {this.state.messages.map((message, index) => {
                         return(
                            <li className="chat-li" key={index}>{message.player}: {message.message}</li>
                            )
                        })}   
                    </ul>
                </div>
            </div>
        )
    }
}