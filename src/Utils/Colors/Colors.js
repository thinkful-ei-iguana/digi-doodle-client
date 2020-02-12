import React from 'react'

class Colors extends React.Component {
    render() {
        return (
            <div className="color-buttons">
                <button onClick={this.props.changeColorBlack} type="button" className="black"></button>
                <button onClick={this.props.changeColorBrown} type="button" className="brown"></button>
                <button onClick={this.props.changeColorRed} type="button" className="red"></button>
                <button onClick={this.props.changeColorYellow} type="button" className="yellow"></button>
                <button onClick={this.props.changeColorOrange} type="button" className="orange"></button>
                <button onClick={this.props.changeColorPurple} type="button" className="purple"></button>
                <button onClick={this.props.changeColorBlue} type="button" className="blue"></button>
                <button onClick={this.props.changeColorGreen} type="button" className="green"></button>
                <button onClick={this.props.handleEraser} type="button" className="eraser"></button>
            </div>
        )
    }
}

export default Colors;