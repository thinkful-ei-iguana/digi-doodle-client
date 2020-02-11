import React, { Component } from 'react'
import CanvasFreeDrawing from "canvas-free-drawing"
import './GuessingPage.css'

export default class GuessingPage extends Component {

    // cfd = new CanvasFreeDrawing({
    //     elementId: 'cfd',
    //     width: 500,
    //     height: 500,
    // });


    render() {
        return (
            <div>
                <h1>You are Drawing!</h1>
                <h3>Draw a fish </h3>
                <p>this is canvas</p>
                {/* <canvas id="cfd" className="canvas-container"></canvas> */}
            </div>
        )
    }
}