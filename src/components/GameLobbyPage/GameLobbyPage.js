import React, { Component } from 'react'
import DrawingPage from '../DrawingPage/DrawingPage'
import DigiDoodleApiService from '../../services/digi-doodle-api-service';
import ColorContext from '../../Context/ColorContext';
import Cookies from 'js-cookie';
import socket from '../../services/socket-service';
import './GameLobbyPage.css'

        
export default class GameLobbyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        return (
            <div>
                <DrawingPage />
            </div>
        )
    }
}