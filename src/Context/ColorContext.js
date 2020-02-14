import React from 'react'

const ColorContext = React.createContext({
    color: '',
    prompt: '',
    eraser: 3,
    changeColor: () => { },
    getPrompt: () => { },
    username: '',
    setUserName: () => {},
    setGameId: () => {},
    gameId: '',
    setUserId: () => {},
    userId: ''
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
            setUserName: () => {},
            setGameId: () => {},
            gameId: '',
            setUserId: () => {},
            userId: ''
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
            userId: this.state.userId
        }
        return (
            <ColorContext.Provider value={colorContent}>
                {this.props.children}
            </ColorContext.Provider>
        )
    }
}
