import React, { Component } from 'react'
import DrawingPage from '../DrawingPage/DrawingPage'
import GuessingPage from '../GuessingPage/GuessingPage'
import DigiDoodleApiService from '../../services/digi-doodle-api-service';
import ColorContext from '../../Context/ColorContext';
import Cookies from 'js-cookie'
import './GameLobbyPage.css'

export default class GameLobbyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawing: false
        }
    }

    static contextType = ColorContext

    componentDidMount() {
        let cookie = Cookies.get();
        let data = JSON.parse(cookie['digi-doodle-user']);

        this.context.setGameId(data.gameId)
        this.context.setUserName(data.username)
        this.context.setUserId(data.userId)

        DigiDoodleApiService.getWordPrompt()
            .then(res => {
                this.context.getPrompt(res.prompt)
            })
        DigiDoodleApiService.getAllPlayersInGame(data.gameId)
            .then(playersArray => {
                this.context.setPlayers(playersArray)
            })
    }
    render() {

        return (
            <div>
                {!this.state.isDrawing && <GuessingPage />}
                {this.state.isDrawing && <DrawingPage />}
            </div>
        )
    }
}