import React, { Component } from 'react'
import Canvas from '../../Utils/Canvas/Canvas'
import Colors from '../../Utils/Colors/Colors'
import ColorContext from '../../Context/ColorContext'
import DigiDoodleApiService from '../../services/digi-doodle-api-service'
import '../../Utils/Colors/Colors.css'
import './DrawingPage.css'
import '../../Utils/Canvas/Canvas.css'

export default class DrawingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: '',
            username: '',
            players: [],
            score: 0,
            socket: {}
        }
    }

    static contextType = ColorContext

    handleGuessSubmit = async (ev) => {
        ev.preventDefault();
        let guess = await DigiDoodleApiService.postGuess(this.context.gameId, this.context.userId, this.state.guess);
        console.log('guess response: ', guess);
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
        console.log('gameId: ', this.context.gameId)
        return (
            <div>
                <h1>{this.context.username}, it is your turn to draw!</h1>
                <h3>Draw {this.context.prompt}</h3>
                <div className="canvas-container">
                    <Canvas />
                </div>
                <Colors />
                <form className="guess-input" >
                    <label htmlFor="chat-input">Guess goes here</label>
                    <input type="text" onChange={this.handleTextInput} id="chat-input" value={this.state.guess} required></input>
                    <button type="submit" id="chat-submit" onClick={this.handleGuessSubmit}>Send</button>
                </form>
                <div className="players-container">
                    <ul className="player-ul">
                        {this.context.players.map((player, index) => {
                            return (
                                <li className="player-li" key={index}>
                                    <span>{player.username} | </span>
                                    <span>{player.score}</span>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>

        )
    }
}
