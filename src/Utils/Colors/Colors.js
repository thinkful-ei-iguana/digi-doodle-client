import React from 'react'
import ColorContext from '../../Context/ColorContext'

class Colors extends React.Component {
    static contextType = ColorContext;
    render() {
        console.log(this.context)
        return (
            <div className="color-buttons">
                <button onClick={()=>this.context.changeColor('black')} type="button" className="black"></button>
                <button onClick={()=>this.context.changeColor('brown')} type="button" className="brown"></button>
                <button onClick={()=>this.context.changeColor('red')} type="button" className="red"></button>
                <button onClick={()=>this.context.changeColor('yellow')} type="button" className="yellow"></button>
                <button onClick={()=>this.context.changeColor('orange')} type="button" className="orange"></button>
                <button onClick={()=>this.context.changeColor('purple')} type="button" className="purple"></button>
                <button onClick={()=>this.context.changeColor('blue')} type="button" className="blue"></button>
                <button onClick={()=>this.context.changeColor('green')} type="button" className="green"></button>
                <button onClick={()=>this.context.changeColor('white', 30)} type="button" className="eraser"></button>
            </div>
        )
    }
}

export default Colors;