import React, { Component } from 'react'
import Canvas from '../../Utils/Canvas/Canvas'
import './GuessingPage.css'
import ColorContext from '../../Context/ColorContext'
import DigiDoodleApiService from '../../services/digi-doodle-api-service'
import '../../Utils/Canvas/Canvas.css'

export default class GuessingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: '',
            username: '',
            players: [],
            score: 0
        }
    }

    static contextType = ColorContext;


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
            <div>
                <h1 className="guess-page-header">What are they drawing?</h1>
                <Canvas />

                <form className="guess-input" >
                    <label htmlFor="chat-input">Guess goes here</label>
                    <input type="text" onChange={this.handleTextInput} id="chat-input" value={this.state.guess} required></input>
                    <br></br>
                    <button classname="start-button" type="submit" id="chat-submit" onClick={this.handleGuessSubmit}>Send</button>
                </form>

                <div className="players-container">
                    <ul className="player-ul">
                        <li className="player-li">
                            <span>User1 : 10 </span>
                        </li>
                        <li className="player-li">
                            <span>User2 : 45 </span>
                        </li>
                        <li className="player-li">
                            <span>User3 : 45 </span>
                        </li>
                        <li className="player-li">
                            <span>User4 : 45 </span>
                        </li>
                    </ul>




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