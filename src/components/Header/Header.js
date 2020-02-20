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
        let player = this.context.players.find(player => {
            return player.player_id === this.context.game.current_drawer
        })
        //winning mode
        if (this.context.game.status === 'standby' && this.context.game.winner !== null) {
            header = <h1>{this.context.game.winner}, You Win<span className="exclamation">!</span></h1>
            //isDrawing: false for both parties
        }
        //standby before drawer comes up
        else if (this.context.game.status === 'standby' && this.context.game.winner === null) {
            header = <h1>{player.username}, you're up next to draw</h1>
            //isDrawing: false for both parties
        }
        //waiting mode
        else if (this.props.isDrawing === false && this.context.game.status === 'waiting for players') {
            header = <h1>Wait for more players to come in</h1>
        }
        else if (this.props.isDrawing === false && this.context.game.status === 'drawing') {
            header = <h1>What are they drawing<span className="question">?</span></h1>
        }
        else if (this.props.isDrawing === true && this.context.game.status === 'drawing') {
            header = <div><h1>{player.username}, Draw {this.context.game.current_answer}</h1></div>
        }
        else if (this.props.isDrawing === true && this.context.game.status === 'waiting for players') {
            header = <h1>Draw Something while you wait<span className="exclamation">!</span></h1>
        }
        else {
            header = <h1>Wait for more players to come in</h1>
        }

        return (
            <div>
                {header}
            </div>
        )
    }
}
