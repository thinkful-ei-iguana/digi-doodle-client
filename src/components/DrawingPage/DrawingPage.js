import React, { Component } from 'react'
import Canvas from '../../Utils/Canvas/Canvas'
import Colors from '../../Utils/Colors/Colors'
import ColorContext from '../../Context/ColorContext'
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


    render() {
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
            </div>
        )
    }
}
