import React from 'react'

class Colors extends React.Component {
    render() {
        return (
            <div className="color-buttons">
                <button onClick={()=>this.props.changeColor('black')} type="button" className="black"></button>
                <button onClick={()=>this.props.changeColor('brown')} type="button" className="brown"></button>
                <button onClick={()=>this.props.changeColor('red')} type="button" className="red"></button>
                <button onClick={()=>this.props.changeColor('yellow')} type="button" className="yellow"></button>
                <button onClick={()=>this.props.changeColor('orange')} type="button" className="orange"></button>
                <button onClick={()=>this.props.changeColor('purple')} type="button" className="purple"></button>
                <button onClick={()=>this.props.changeColor('blue')} type="button" className="blue"></button>
                <button onClick={()=>this.props.changeColor('green')} type="button" className="green"></button>
                <button onClick={()=>this.props.changeColor('white', 20)} type="button" className="eraser"></button>
            </div>
        )
    }
}

export default Colors;