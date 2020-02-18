import React, { Component } from 'react'
import DrawingPage from '../DrawingPage/DrawingPage'
import GuessingPage from '../GuessingPage/GuessingPage'
import DigiDoodleApiService from '../../services/digi-doodle-api-service';
import ColorContext from '../../Context/ColorContext';
import Cookies from 'js-cookie';
import socket from '../../services/socket-service';
import './GameLobbyPage.css'

        
export default class GameLobbyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawing: false
        }
    }

    static contextType = ColorContext

    async componentDidMount() {
        let cookie = Cookies.get();
        let data = JSON.parse(cookie['digi-doodle-user']);

        await this.context.setGameId(data.gameId)
        await this.context.setUserName(data.username)
        await this.context.setUserId(data.userId)

        socket.emit('sendRoom', `${data.gameId}`);
        socket.on('chat message', msg => {
            console.log('from server: ', msg);
        })
        socket.on('announcement', (announcement) => {
            this.setState({
                correct: true
            })
        })
        console.log(socket);

        DigiDoodleApiService.getWordPrompt()
            .then(res => {
                this.context.getPrompt(res.prompt)
            })
        DigiDoodleApiService.getAllPlayersInGame(data.gameId)
            .then(playersArray => {
                this.context.setPlayers(playersArray)
            })
    }

    swapIsDrawing = () => {
        this.setState({
            isDrawing: !this.state.isDrawing
        })
    }

    render() {

        return (
            <div>
                {!this.state.isDrawing && <GuessingPage />}
                {this.state.isDrawing && <DrawingPage />}
                <button onClick={this.swapIsDrawing}>Swap Drawing/Guessing Views</button>
            </div>
        )
    }
}