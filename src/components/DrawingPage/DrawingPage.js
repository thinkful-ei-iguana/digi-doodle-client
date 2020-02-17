import React, { Component } from 'react'
import Canvas from '../../Utils/Canvas/Canvas'
import Colors from '../../Utils/Colors/Colors'
import ColorContext from '../../Context/ColorContext'
import DigiDoodleApiService from '../../services/digi-doodle-api-service'
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
            score: 0,
            messages: [{
                player: 'Lobby',
                message: 'Welcome to the room!'
            }]
        }
    }

    static contextType = ColorContext


    handleGuessSubmit = async (ev) => {
        ev.preventDefault();
        let guess = await DigiDoodleApiService.postGuess(this.context.gameId, this.context.userId, this.state.guess);

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
        console.log(this.state.messages)
        return (
            <div>
                <h1 className="player-header">{this.context.username}, it is your turn to draw!</h1>
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
