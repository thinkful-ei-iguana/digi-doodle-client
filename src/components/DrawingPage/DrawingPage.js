import React, { Component } from 'react'
import Canvas from '../../Utils/Canvas/Canvas'
import Colors from '../../Utils/Colors/Colors'
import ColorContext from '../../Context/ColorContext'
import socket from '../../services/socket-service'
import PlayAgain from '../PlayAgain/PlayAgain'
import '../../Utils/Colors/Colors.css'
import './DrawingPage.css'
import '../../Utils/Canvas/Canvas.css'

export default class DrawingPage extends Component {
    static contextType = ColorContext
    constructor(props) {
        super(props);
        this.state = {
            guess: '',
        }
    }

    static contextType = ColorContext


    handleChatSubmit = async (ev) => {
        ev.preventDefault();

        socket.emit('chat message', { player: this.context.username, message: this.state.guess });

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
        let disableAttr = this.props.isDrawing ? "canvas-container" : "disabled-canvas"
        let standbyMode = false;
        if (this.context.game && this.context.game.status) {
            standbyMode = this.context.game.status === 'standby'
        }
        disableAttr = disableAttr || standbyMode

        let toggleDisplay;

        if (this.context.game && this.context.game.winner) {
            toggleDisplay = <PlayAgain />
        } else {
            toggleDisplay =
                <div className="chat-window">
                    <ul>
                        {this.context.messages && this.context.messages.map((message, index) => {
                            return (
                                <li className="player-message" key={index}>{message.player}: {message.message}</li>
                            )
                        })}
                    </ul>
                </div>
        }

        return (
            <div>
                <div className={disableAttr}>
                    <Canvas />
                </div>
                <Colors />
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
