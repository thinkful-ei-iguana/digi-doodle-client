import React, { Component } from 'react'
import Canvas from '../../Utils/Canvas/Canvas'
import './GuessingPage.css'
import ColorContext from '../../Context/ColorContext'
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



    //event handler for submit button to validate answer

    render() {
        return (
            <div>
                <h1 className="guess-page-header">What are they drawing?</h1>
                <Canvas />
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



                <div className="guess-container">
                    <input className="guess-box" type="text" placeholder="Type Your Guess Here"></input>
                    {/* wanting a green checkmark instead of text for button to submit guess */}
                    <button className="submit-guess">Submit!</button>
                </div>
            </div>
        )
    }
}