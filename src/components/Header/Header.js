import React, { Component } from 'react'
import ColorContext from '../../Context/ColorContext'
import Timer from '../Timer/Timer';

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
            header = 
            <div className="header-box">
                <h1>{this.context.game.winner}, You Win!</h1>
            </div>
            //isDrawing: false for both parties
        }
        //standby before drawer comes up
        else if (this.context.game.status === 'standby' && this.context.game.winner === null) {
            header = 
            <div className="header-box">
                <h1>{player.username}, you're up next to draw</h1>
                <Timer />
            </div>
            //isDrawing: false for both parties
        }
        //waiting mode
        else if (this.props.isDrawing === false && this.context.game.status === 'waiting for players') {
            header = <h1>Wait for more players to come in</h1>
        }
        else if (this.props.isDrawing === false && this.context.game.status === 'drawing') {
            header = 
            <div className="header-box">
                <h1>What are they drawing?</h1>
                <Timer />
            </div>
        }
        else if (this.props.isDrawing === true && this.context.game.status === 'drawing') {

            header = 
            <div className="header-box">
                <h1>{player.username}, Draw the prompt</h1>
                <h3 className="player-prompt">Draw {this.context.game.current_answer}</h3>
                <Timer />
            </div>
        }
        else if (this.props.isDrawing === true && this.context.game.status === 'waiting for players') {
            header = 
            <h1>Draw Something while you wait!</h1>
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
