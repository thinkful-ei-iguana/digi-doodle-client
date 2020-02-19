import React from 'react'

const ColorContext = React.createContext({
    color: '',
    prompt: '',
    eraser: 3,
    changeColor: () => { },
    getPrompt: () => { },
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
    current_drawer: '',
    status: '',
    winner: '',
    disableAttr: '',
    toggleDisableCanvas: () => { }
})

export default ColorContext;

export class ColorProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black',
            eraser: 3,
            prompt: 'test',
            changeColor: () => { },
            getPrompt: () => { },
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
            isDrawing: false, // try: use the provided button to toggle between true or false
            current_drawer: 'Sophia',
            status: 'standby', //try: 'standby', 'waiting for players',
            winner: 'Jon', //try: null or 'Jon'
            disableAttr: 'disabled-canvas', //try: 'canvas-container' or 'disabled-canvas' to change className
        }
    }

    changeColor = (color, eraser = 3) => {
        this.setState({
            color: color,
            eraser: eraser,
        })
    }

    getPrompt = (prompt) => {
        this.setState({
            prompt: prompt
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

    toggleDisableCanvas = () => {
        this.setState({
            disableAttr: 'canvas-container'
        })
    }


    render() {
        const colorContent = {
            color: this.state.color,
            eraser: this.state.eraser,
            changeColor: this.changeColor,
            getPrompt: this.getPrompt,
            prompt: this.state.prompt,
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
            current_drawer: this.state.current_drawer,
            status: this.state.status,
            winner: this.state.winner,
            disableAttr: this.state.disableAttr,
            toggleDisableCanvas: this.toggleDisableCanvas
        }
        return (
            <ColorContext.Provider value={colorContent}>
                {this.props.children}
            </ColorContext.Provider>
        )
    }
}
