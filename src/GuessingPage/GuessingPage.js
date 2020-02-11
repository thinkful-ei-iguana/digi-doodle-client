import React, { Component } from 'react'
import CanvasFreeDrawing from "canvas-free-drawing"
import './GuessingPage.css'

export default class GuessingPage extends Component {

    // cfd = new CanvasFreeDrawing({
    //     elementId: 'cfd',
    //     width: 500,
    //     height: 500,
    // });


    //event handler for submit button to validate answer

    render() {
        return (
            <div>
                <h1>What are they drawing?</h1>
                <p>this is canvas</p>
                <div>player 1</div>
                <div>player 2</div>
                <div>player 3</div>
                <div>player 4</div>
                <input type="text" placeholder="type your guess here"></input>
                <button>Go!</button>
                {/* <canvas id="cfd" className="canvas-container"></canvas> */}
            </div>
        )
    }
}