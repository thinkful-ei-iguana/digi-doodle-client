import React, { Component } from 'react'
import Canvas from '../Utils/Canvas'
import './GuessingPage.css'
import '../Utils/Canvas.css'

export default class GuessingPage extends Component {


    //event handler for submit button to validate answer

    render() {
        return (
            <div>
                <h1>What are they drawing?</h1>
                <Canvas />
                    <div>player 1</div>
                    <div>player 2</div>
                    <div>player 3</div>
                    <div>player 4</div>
                <input type="text" placeholder="Type Your Guess Here"></input>
                {/* wanting a green checkmark instead of text for button to submit guess */}
                <button>Submit!</button>
            </div>
        )
    }
}