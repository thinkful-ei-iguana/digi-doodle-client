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

        socket.on('results', (results) => {
            console.log("results of round: ", results);
            this.context.setRoundResults(results)
        })

        socket.on('send game', async (gameData) => {
            console.log('gamedata from server: ', gameData);
            gameData = gameData[0];
            let isDrawing = this.context.userId === gameData.current_drawer && gameData.status === "drawing"
            this.setState({ isDrawing: isDrawing })
            if (!this.context.isDrawing && isDrawing) {
                await this.context.swapDrawing()
            }
            await this.context.setGame(gameData);
        })

    }

    componentWillUnmount() {
        socket.close();
    }

    render() {
        return (
            <div>
                <div className="username-display">Hello {this.context.username}<span className="exclamation">!</span></div>
                <Header isDrawing={this.state.isDrawing} />
                {(!this.state.isDrawing) && <GuessingPage isDrawing={this.state.isDrawing} />}
                {(this.state.isDrawing) && <DrawingPage isDrawing={this.state.isDrawing} />}
            </div>
        )
    }
}