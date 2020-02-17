import React, { Component } from 'react'
import DrawingPage from '../DrawingPage/DrawingPage'
import DigiDoodleApiService from '../../services/digi-doodle-api-service';
import ColorContext from '../../Context/ColorContext';
import Cookies from 'js-cookie';
import io from 'socket.io-client';

import './GameLobbyPage.css'

export default class GameLobbyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    static contextType = ColorContext

    socket_connect = (room) => {
        return io(`localhost:8000`, {
            query: 'r_var='+room,
        });
    }
   
    async componentDidMount() {
        let cookie = Cookies.get();
        let data = JSON.parse(cookie['digi-doodle-user']);

        await this.context.setGameId(data.gameId)
        await this.context.setUserName(data.username)
        await this.context.setUserId(data.userId)



        await this.setState({
            socket: this.socket_connect(`${data.gameId}`)
        })

        this.state.socket.emit('chat message', 'hello room')

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