import React, { Component } from 'react'
import DrawingPage from '../DrawingPage/DrawingPage'
import DigiDoodleApiService from '../../services/digi-doodle-api-service';
import ColorContext from '../../Context/ColorContext';
import Cookies from 'js-cookie';
import socketIOClient from 'socket.io-client';
import './GameLobbyPage.css'

export default class GameLobbyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endpoint: ''            
        }
    }

    static contextType = ColorContext

    async componentDidMount() {
        let cookie = Cookies.get();
        let data = JSON.parse(cookie['digi-doodle-user']);
        console.log('BANG', data);

        // FOR SOCKET //
       
        await this.setState({
            endpoint: `localhost:8000/api/game/${data.gameId}`
        }) 
        
        const socket = socketIOClient(this.state.endpoint);

        socket.on('guess submitted', (res) => {
            console.log(res.json());
        })
        // END OF SOCKET SETUP //
        this.context.setGameId(data.gameId)
        this.context.setUserName(data.username)
        this.context.setUserId(data.userId)

        console.log('this is gameid', data.gameId);

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