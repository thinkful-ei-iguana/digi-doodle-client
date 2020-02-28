import React, { Component } from 'react'
import Canvas from '../../Utils/Canvas/Canvas'
import './GuessingPage.css'
import ColorContext from '../../Context/ColorContext'
import Cookies from 'js-cookie';
import socket from '../../services/socket-service'
import '../../Utils/Canvas/Canvas.css'
import { animateScroll } from "react-scroll";
import PlayAgain from '../PlayAgain/PlayAgain'

export default class GuessingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: '',
            username: '',
        }
    }

    static contextType = ColorContext;

    async componentDidMount() {

        let cookie = Cookies.get();
        if (cookie && cookie['digi-doodle-user']) {
            let data = JSON.parse(cookie['digi-doodle-user']);
            await this.setState({
                username: data.username
            });
        }

    }

    handleGuessSubmit = async (ev) => {
        try {
            ev.preventDefault();
            socket.emit('guess', { player: this.state.username, message: this.state.guess });

            await this.setState({
                guess: ''
            });
        } catch (error) {
            console.error(error)
        }
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


    render() {
        let disableAttr = this.props.isDrawing ? "canvas-container" : "disabled-canvas"

        let toggleDisplay;

        if (this.context.game && this.context.game.winner) {
            toggleDisplay = <PlayAgain />
        } else {
            toggleDisplay =
                <div>
                    <form className="guess-input" aria-label="guess input">
                        <label htmlFor="chat-input">Guess goes here: </label>
                        <input type="text" onChange={this.handleTextInput}
                            id="chat-input"
                            value={this.state.guess}
                            required
                            spellCheck="false"
                            maxLength="35"
                            aria-label="enter username"
                            aria-required
                        />
                        <button aria-pressed="false" title="submit guess" className="submit-guess" type="submit" id="chat-submit" onClick={this.handleGuessSubmit}>&#10004;</button>
                    </form>
                    <div className="chat-window">
                        <ul>

                            {this.context.messages && this.context.messages.map((message, index) => {
                                if (message.player === 'Lobby') {
                                    return (
                                        <li className="lobby-message" key={index}>{message.message}</li>
                                    )
                                } else {
                                    return (
                                        <li className="player-message" key={index}>{message.player}: {message.message}</li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                </div>
        }

        return (
            <div>
                <div className={disableAttr}>
                    <Canvas />
                </div>
                <div className="players-container">
                    <ul className="player-ul">
                        {this.context.players && this.context.players.map((player, index) => {
                            return (
                                <li className="player-li" key={index}>
                                    <span>{player.username}</span><br />
                                    <span className="score">{player.score}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {toggleDisplay}

                <p className="reminder-instructions">15 points to win</p>
            </div>
        )
    }
}