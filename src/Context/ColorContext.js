import React from 'react'

const ColorContext = React.createContext({
    color: '',
    eraser: 3,
    changeColor: () => {},
})

export default ColorContext;

export class ColorProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            color: '',
            eraser: 3,
            changeColor: () => {},
        }
    }

    changeColor = (color, eraser = 3) => {
        this.setState({
            color: color,
            eraser: eraser,
        })
    }

    render() {
        const colorContent = {
            color: this.state.color,
            eraser: this.state.eraser,
            changeColor: this.ChangeColor
        }
        return (
            <ColorContext.Provider value={colorContent}>
                {this.props.children}
            </ColorContext.Provider>
        )
    }
}
