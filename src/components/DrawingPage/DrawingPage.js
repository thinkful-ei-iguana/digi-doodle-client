import React, { Component } from 'react'
import Canvas from '../../Utils/Canvas/Canvas'
import AppContext from '../../Context/AppContext'
import Colors from '../../Utils/Colors/Colors'
import '../../Utils/Colors/Colors.css'
import './DrawingPage.css'
import '../../Utils/Canvas/Canvas.css'

export default class DrawingPage extends Component {
    static contextType = AppContext;
    render() {
        return (
            <div>
                <h1>You are Drawing!</h1>
                {/* Draw a {this.context.name etc} */}
                <h3>Draw a fish </h3>
                <div className="canvas-container">
                    <Canvas />
                    <Colors 
                        changeColorRed={this.props.changeColorRed} 
                        changeColorBlue={this.props.changeColorBlue} 
                        changeColorGreen={this.props.changeColorGreen}
                        changeColorBlack={this.props.changeColorBlack}
                        changeColorPurple={this.props.changeColorPurple}
                        changeColorOrange={this.props.changeColorOrange}
                        changeColorYellow={this.props.changeColorYellow}
                        changeColorBrown={this.props.changeColorBrown} 
                        handleEraser={this.props.handleEraser}
                    />
                </div>
            </div>
        )
    }
}