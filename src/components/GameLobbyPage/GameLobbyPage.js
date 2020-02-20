import React, { Component } from 'react'
import DrawingPage from '../DrawingPage/DrawingPage'
import GuessingPage from '../GuessingPage/GuessingPage'
import ColorContext from '../../Context/ColorContext';
import Cookies from 'js-cookie';
import socket from '../../services/socket-service';
import Header from '../Header/Header';
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
        await this.context.setUserId(data.userID)

        socket.emit('sendRoom', { gameId: data.gameId, userId: data.userID, username: data.username });
        socket.emit('start check', 'players in room');
        socket.emit('get game', 'gimme that sweet, sweet game');

        socket.on('chat message', msg => {
            console.log('from server: ', msg);
        })

        socket.on('send players', (playerData) => {
            this.context.setPlayers(playerData);
        })

        socket.on('chat response', (msg) => {
            this.context.setMessages(msg);
         })

        socket.on('send game', async (gameData) => {
            console.log('gamedata from server: ', gameData);
            gameData = gameData[0];
            await this.context.setGame(gameData);
        })

        socket.on('timer', (time) => {
            this.context.updateTimer(time);
        })

        socket.on('announcement', (announcement) => {
            //something here to let everyone know there was a correct guess made.
        })

    }

    componentWillUnmount(){
        socket.close();
    }

    render() {

        return (
            <div>
                <Header />
                {(this.context.userId !== this.context.game.current_drawer) && <GuessingPage />}
                {(this.context.userId === this.context.game.current_drawer) && <DrawingPage />}
            </div>
        )
    }
}