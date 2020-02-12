import React, { Component } from 'react'
import DrawingPage from '../DrawingPage/DrawingPage'
import ColorProvider from '../../Context/ColorContext'

import './GameLobbyPage.css'

export default class GameLobbyPage extends Component {
    render() {
        return (
            <ColorProvider>
                <div>
                    <DrawingPage />
                </div>
            </ColorProvider>
        )
    }
}