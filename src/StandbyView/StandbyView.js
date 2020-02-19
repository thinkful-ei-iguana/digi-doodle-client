import React, { Component } from 'react'
import Canvas from '../../src/Utils/Canvas/Canvas'
import Colors from '../../src/Utils/Colors/Colors'
import ColorContext from '../../src/Context/ColorContext'
import socket from '../../src/services/socket-service'
import '../../src/Utils/Colors/Colors.css'
import '../../src/Utils/Canvas/Canvas.css'
import '../../src/components/DrawingPage/DrawingPage.css'

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
        return (
            <div>
            {(this.context.status === 'waiting for players') ? <h1>Waiting for players. Draw something while you wait...</h1> : null }

            {(this.context.status === 'standby') ? <h1>{this.context.current_drawer}, you're up next to draw!</h1> : null }

       {/*} {(this.context.status === 'drawing') ? <h1>{this.context.current_drawer} is drawing</h1> : null } */}


            </div>
        )
    }
}
