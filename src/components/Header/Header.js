import React, { Component } from 'react'
import ColorContext from '../../Context/ColorContext'

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
            current_drawer: '',
        }
    }

    static contextType = ColorContext


    render() {
        let header;
        //winning mode
        if (this.context.status === 'standby' && this.context.winner !== null) {
            header = <h1>{this.context.winner}, You Win!</h1>
            //isDrawing: false for both parties
        }
        //standby before drawer comes up
        else if (this.context.status === 'standby' && this.context.winner === null) {
            header = <h1>{this.context.current_drawer}, you're up next to draw</h1>
            //isDrawing: false for both parties
        }
        //waiting mode
        else if (this.context.isDrawing === false && this.context.status === 'waiting for players') {
            header = <h1>Wait for more players to come in</h1>
        }
        else if (this.context.isDrawing === false && this.context.status === 'drawing') {
            header = <h1>What are they drawing?</h1>
        }
        else if (this.context.isDrawing === true && this.context.status === 'drawing') {
            header = <div><h1>{this.context.current_drawer}, Draw the prompt</h1>
                <h3 className="player-prompt">Draw {this.context.prompt}</h3></div>
        }
        else if (this.context.isDrawing === true && this.context.status === 'waiting for players') {
            header = <h1>Draw Something while you wait!</h1>
        }

        return (
            <div>
                {header}
            </div>
        )
    }
}
