import React, { Component } from 'react'
import Canvas from '../../Utils/Canvas/Canvas'
import Colors from '../../Utils/Colors/Colors'
import '../../Utils/Colors/Colors.css'
import './DrawingPage.css'
import '../../Utils/Canvas/Canvas.css'

export default class DrawingPage extends Component {
    render() {
        return (
            <div>
                <h1>You are Drawing!</h1>
                {/* Draw a {this.context.name etc} */}
                <h3>Draw a fish </h3>
                <div className="canvas-container">
                    <Canvas />
                    <Colors />
                </div>
            </div>
        )
    }
}