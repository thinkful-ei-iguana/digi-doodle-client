import React, { Component } from 'react'
import Canvas from '../../src/Utils/Canvas/Canvas'
import Colors from '../../src/Utils/Colors/Colors'
import ColorContext from '../../src/Context/ColorContext'
import socket from '../../src/services/socket-service'
import '../../src/Utils/Colors/Colors.css'
import '../../src/Utils/Canvas/Canvas.css'
import '../../src/components/DrawingPage/DrawingPage.css'

export default class StandbyView extends Component {
    static contextType = ColorContext
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
            }],
            current_drawer: 'Sophia'
        }
    }

    static contextType = ColorContext


    handleChatSubmit = async (ev) => {
        ev.preventDefault();

        socket.emit('guess', {player: this.context.username, message: this.state.guess});
        socket.on('chat response', (msg) => {
            this.setState({ 
                 messages: [...this.state.messages, msg]
             });
         })
         console.log(this.state.messages)

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
        return (
            <div>
            <h1>{this.state.current_drawer}, you're up next to draw!</h1>
            
                <h3 className="player-prompt">Draw {this.context.prompt}</h3>
                <div className="canvas-container">
                    <Canvas />
                </div>
                <Colors />               
               
                <div className="players-container">
                    <ul className="player-ul">
                        {this.context.players.map((player, index) => {
                            return (
                                <li className="player-li" key={index}>
                                    <span>{player.username} : {player.score} </span>
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
                     {this.state.messages.map((message, index) => {
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
