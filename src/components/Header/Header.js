import React, { Component } from 'react'
import ColorContext from '../../Context/ColorContext'
import Timer from '../Timer/Timer';
import './Header.css'

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

        // results mode
        if (this.context.game.status === 'standby' && this.context.roundResults) {
            header = <h1>{this.context.roundResults}</h1>;
        }

        //winning mode
        else if (this.context.game.status === 'standby' && this.context.game.winner !== null) {
                header = <h1>{this.context.game.winner}, You Win!</h1>
            if (this.context.game.status === 'standby' && this.context.game.winner !== null) {
                header = 
                <div className="header-box">
                    <h1>{this.context.game.winner}, You Win!</h1>
                </div>
                //isDrawing: false for both parties
            }
        }
        
        //standby before drawer comes up
        else if (this.context.game.status === 'standby' && this.context.game.winner === null && this.context.roundResults === null) {
            header = 
            <div className="header-box">
                <h1>{player.username}, you're up next to draw</h1>
                <Timer />
            </div>
            header = <h1>{this.context.game.winner}, You Win<span className="exclamation">!</span></h1>       
        }
    

        // waiting mode
        else if (this.props.isDrawing === false && this.context.game.status === 'waiting for players') {
            header = 
            <div className="header-box">
                <h1>Wait for more players to come in</h1>
            </div>
        }

        // guessing mode
        else if (this.props.isDrawing === false && this.context.game.status === 'drawing') {
            header = 
            <div className="header-box">
                <h1>What are they drawing?</h1>
                <Timer />
            </div>
        }

        // drawing mode
        else if (this.props.isDrawing === true && this.context.game.status === 'drawing') {

            header = 
            <div className="header-box">
                <div className="player-prompt">
                    <h1>{player.username}, Draw <span className="prompt">{this.context.game.current_answer}</span></h1>
                </div>
                <Timer />
            </div>
        }

        // waiting mode 2
        else if (this.props.isDrawing === true && this.context.game.status === 'waiting for players') {
            header = 
            <div className="header-box">
                <h1>Draw Something while you wait!</h1>
            </div>
        }

        else {
            header = <h1>Something went wrong with the game data.</h1>
        }
        

        return (
            <div>
                {header}
            </div>
        )
    
    }
}
