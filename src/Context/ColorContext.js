import React from 'react'

const ColorContext = React.createContext({
    color: '',
    eraser: 3,
    changeColor: () => { },
    username: '',
    setUserName: () => { },
    setGameId: () => { },
    gameId: '',
    setUserId: () => { },
    userId: '',
    setPlayers: () => { },
    players: [],
    canvasData: {},
    swapDrawing: () => { },
    isDrawing: false,
    game: {},
    setGame: () => { },
    setMessages: () => { },
    messages: [],
    setCanvas: () => { },
    time: null,
    updateTimer: () => { },
    checkDrawing: () => { },
    toggleDisableCanvas: () => { },
    disableAttr: '',
})

export default ColorContext;

export class ColorProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black',
            eraser: 3,
            changeColor: () => { },
            username: '',
            setUserName: () => { },
            setGameId: () => { },
            gameId: '',
            setUserId: () => { },
            userId: '',
            setPlayers: () => { },
            players: [],
            canvasData: {},
            swapDrawing: () => { },
            isDrawing: false,
            setGame: () => { },
            game: {},
            setMessages: () => { },
            messages: [{
                player: 'Lobby',
                message: 'Welcome to the room!'
            }],
            setCanvas: () => { },
            time: null,
            updateTimer: () => { }
        }
    }

    changeColor = (color, eraser = 3) => {
        this.setState({
            color: color,
            eraser: eraser,
        })
    }

    setPlayers = (res) => {
        this.setState({
            players: res
        })
    }

    setUserName = (username) => {
        this.setState({
            username: username
        })
    }

    setGameId = (gameId) => {
        this.setState({
            gameId: gameId
        })
    }

    setUserId = (userId) => {
        this.setState({
            userId: userId
        })
    }

    swapDrawing = () => {
        this.setState({
            isDrawing: !this.state.isDrawing
        })
    }

    setGame = (gameData) => {
        this.setState({
            game: gameData
        })
    }

    toggleDisableCanvas = () => {
        this.setState({
            disableAttr: 'canvas-container'
        })
    }

    setMessages = (message) => {
        this.setState({
            messages: [...this.state.messages, message]
        })
    }
    
    setCanvas = (data) => {
        this.setState({
            canvasData: data
        })
    }

    updateTimer = (time) => {
        this.setState({
            time: time
        })
    }



    render() {
        const colorContent = {
            color: this.state.color,
            eraser: this.state.eraser,
            changeColor: this.changeColor,
            username: this.state.username,
            setUserName: this.setUserName,
            setGameId: this.setGameId,
            gameId: this.state.gameId,
            setUserId: this.setUserId,
            userId: this.state.userId,
            setPlayers: this.setPlayers,
            players: this.state.players,
            score: this.state.score,
            canvasData: this.state.canvasData,
            swapDrawing: this.swapDrawing,
            isDrawing: this.state.isDrawing,
            game: this.state.game,
            setGame: this.setGame,
            setMessages: this.setMessages,
            messages: this.state.messages,
            setCanvas: this.setCanvas,
            time: this.state.time,
            updateTimer: this.updateTimer,
            toggleDisableCanvas: this.toggleDisableCanvas,
            disableAttr: this.state.disableAttr
        }
        
        return (
            <ColorContext.Provider value={colorContent}>
                {this.props.children}
            </ColorContext.Provider>
        )
    }
}
