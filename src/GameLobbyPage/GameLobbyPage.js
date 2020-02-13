import React, { Component } from 'react'
import DrawingPage from '../DrawingPage/DrawingPage'
import ColorContext from '../../Context/ColorContext'

import './GameLobbyPage.css'

export default class GameLobbyPage extends Component {
    render() {
        return (
                <ColorContext.Consumer>
                    <div>
                        <DrawingPage/>
                    </div>
                </ColorContext.Consumer>
        )
    }
}