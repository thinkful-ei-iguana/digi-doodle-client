import React, { Component } from 'react'
import DrawingPage from '../DrawingPage/DrawingPage'
import DigiDoodleApiService from '../../services/digi-doodle-api-service';
import TokenService from '../../services/TokenService'
import ColorContext from '../../Context/ColorContext';
import './GameLobbyPage.css'

export default class GameLobbyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static contextType = ColorContext


    componentDidMount() {
        if (TokenService.hasAuthToken()) {
            setTimeout(function () {
                TokenService.clearAuthToken();
            }, 1000 * 60 * 60 * 24);
        }
        DigiDoodleApiService.getWordPrompt()
            .then(res => {
                this.context.getPrompt(res.prompt)
            })
        DigiDoodleApiService.getAllPlayersInGame(this.context.gameId)
            .then(playersArray => {
                this.context.setPlayers(playersArray)
            })
    }
    render() {



        return (
            <div>
                <DrawingPage />
            </div>
        )
    }
}