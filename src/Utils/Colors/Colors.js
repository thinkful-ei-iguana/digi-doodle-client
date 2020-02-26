import React from 'react'
import ColorContext from '../../Context/ColorContext'

class Colors extends React.Component {
    static contextType = ColorContext;
    render() {
        return (
            <div className="color-buttons">
                <button title="black" alt="black" onClick={()=>this.context.changeColor('black')} type="button" className="black"></button>
                <button title="brown" alt="brown" onClick={()=>this.context.changeColor('brown')} type="button" className="brown"></button>
                <button title="red" alt="red" onClick={()=>this.context.changeColor('red')} type="button" className="red"></button>
                <button title="yellow" alt="yellow" onClick={()=>this.context.changeColor('yellow')} type="button" className="yellow"></button>
                <button title="orange" alt="orange" onClick={()=>this.context.changeColor('orange')} type="button" className="orange"></button>
                <button title="purple" alt="purple" onClick={()=>this.context.changeColor('purple')} type="button" className="purple"></button>
                <button title="blue" alt="blue" onClick={()=>this.context.changeColor('blue')} type="button" className="blue"></button>
                <button title="green" alt="green" onClick={()=>this.context.changeColor('green')} type="button" className="green"></button>
                <button title="eraser" alt="eraser" onClick={()=>this.context.changeColor('white', 30)} type="button" className="eraser"></button>
            </div>
        )
    }
}

export default Colors;