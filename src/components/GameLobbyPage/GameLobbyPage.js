import React, { Component } from 'react'
import DrawingPage from '../DrawingPage/DrawingPage'
import DigiDoodleApiService from '../../services/digi-doodle-api-service';
import ColorContext from '../../Context/ColorContext';
import './GameLobbyPage.css'

export default class GameLobbyPage extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    static contextType = ColorContext


    componentDidMount() {
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