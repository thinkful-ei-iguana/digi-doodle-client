import React from 'react'

class Colors extends React.Component {
    render(props) {
        return (
            <div className="color-buttons">
                <button onClick={(props)=>this.props.changeColorBlack} type="button" className="black"></button>
                <button onClick={(props)=>this.props.changeColorBrown} type="button" className="brown"></button>
                <button onClick={(props)=>this.props.changeColorRed} type="button" className="red"></button>
                <button onClick={(props)=>this.props.changeColorYellow} type="button" className="yellow"></button>
                <button onClick={(props)=>this.props.changeColorOrange} type="button" className="orange"></button>
                <button onClick={(props)=>this.props.changeColorPurple} type="button" className="purple"></button>
                <button onClick={(props)=>this.props.changeColorBlue} type="button" className="blue"></button>
                <button onClick={(props)=>this.props.changeColorGreen} type="button" className="green"></button>
                <button onClick={(props)=>this.props.handleEraser} type="button" className="eraser"></button>
            </div>
        )
    }
}

export default Colors;