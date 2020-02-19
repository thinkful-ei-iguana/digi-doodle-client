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

        if (this.context.isDrawing === false && this.context.status === 'standby') {
            header = <h1>{this.context.current_drawer}, you're up next to draw</h1>
        }
        if (this.context.isDrawing === false && this.context.status === 'drawing') {
            header = <h1>What are they drawing?</h1>
        }
        else if (this.context.isDrawing === true && this.context.status === 'drawing') {
            header = <div></div>
        }
        return (
            <div>
                {header}
            </div>
        )
    }
}
