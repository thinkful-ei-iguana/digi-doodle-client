import React from 'react'

const ColorContext = React.createContext({
    color: '',
    prompt: '',
    eraser: 3,
    changeColor: () => { },
    getPrompt: () => { },
    username: '',
    setUserName: () => {}
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
            setUserName: () => {}
        }
    }

    changeColor = (color, eraser = 3) => {
        this.setState({
            color: color,
            eraser: eraser,
        })
    }

    getPrompt = (res) => {
        this.setState({
            prompt: res.prompt
        })
    }
    
    setUserName = (username) => {
        this.setState({
            username: username
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
            setUserName: this.setUserName
        }
        return (
            <ColorContext.Provider value={colorContent}>
                {this.props.children}
            </ColorContext.Provider>
        )
    }
}
