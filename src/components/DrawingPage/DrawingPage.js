import React, { Component } from 'react'
import Canvas from '../../Utils/Canvas/Canvas'
import Colors from '../../Utils/Colors/Colors'
import ColorContext from '../../Context/ColorContext'
import socket from '../../services/socket-service'
import '../../Utils/Colors/Colors.css'
import './DrawingPage.css'
import '../../Utils/Canvas/Canvas.css'

export default class DrawingPage extends Component {
    static contextType = ColorContext
    constructor(props) {
        super(props);
        this.state = {
            guess: '',
            username: '',
            players: [],
            score: 0
        }
    }

    static contextType = ColorContext


    handleChatSubmit = async (ev) => {
        ev.preventDefault();

        socket.emit('chat message', { player: this.context.username, message: this.state.guess});

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


    render() {
        const disableAttr = this.props.isDrawing ? "canvas-container" : "disabled-canvas"
        return (
            <div>
                <div className={disableAttr}>
                    <Canvas />
                </div>
                <Colors />

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
                    <button className="submit-guess" type="submit" id="chat-submit" onClick={this.handleChatSubmit}>&#10004;</button>
                </form>

                <div className="chat-window">
                    <ul>
                     {this.context.messages.map((message, index) => {
                         return(
                            <li key={index}>{message.player}: {message.message}</li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        )
    }
}
