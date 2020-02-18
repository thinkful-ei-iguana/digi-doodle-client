import React, { Component } from 'react'
import Canvas from '../../Utils/Canvas/Canvas'
import './GuessingPage.css'
import ColorContext from '../../Context/ColorContext'
import DigiDoodleApiService from '../../services/digi-doodle-api-service'
import '../../Utils/Canvas/Canvas.css'

export default class GuessingPage extends Component {
    static contextType = ColorContext;
    constructor(props) {
        super(props);
        this.state = {
            guess: '',
            username: '',
            players: [],
            score: 0
        }
    }

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

    //event handler for submit button to validate answer

    render() {
        return (
            <div className="disabled-canvas">
                <h1 className="guess-page-header">What are they drawing</h1>
                <Canvas />


                <div className="players-container">
                    <ul className="player-ul">
                        <li className="player-li1">
                            <span>Dannyboi : 7 </span>
                        </li>
                        <li className="player-li2">
                            <span>jonnyboi : 3 </span>
                        </li>
                        <li className="player-li3">
                            <span>sophie33 : 7 </span>
                        </li>
                        <li className="player-li4">
                            <span>franschwa : 5 </span>
                        </li>
                    </ul>

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