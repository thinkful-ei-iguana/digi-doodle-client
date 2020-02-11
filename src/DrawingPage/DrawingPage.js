import React, { Component } from 'react'
import Canvas from '../Utils/Canvas'
import './DrawingPage.css'
import '../Utils/Canvas.css'

export default class DrawingPage extends Component {
    render() {
        return (
            <div>
                <h1>You are Drawing!</h1>
                {/* Draw a {this.context.name etc} */}
                <h3>Draw a fish </h3>
                <div className="canvas-container">
                    <Canvas />
                </div>
                <div className="dummy-container">
                    <button type="button" className="dumbutton1"></button>
                    <button type="button" className="dumbutton2"></button>
                    <button type="button" className="dumbutton3"></button>
                  </div>
            </div>
        )
    }
}