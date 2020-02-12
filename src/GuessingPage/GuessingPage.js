import React, { Component } from 'react'
import Canvas from '../Utils/Canvas/Canvas'
import './GuessingPage.css'
import '../Utils/Canvas/Canvas.css'

export default class GuessingPage extends Component {


    //event handler for submit button to validate answer

    render() {
        return (
            <div>
                <h1 className="guess-page-header">What are they drawing?</h1>
                <Canvas />
                <div className="users-container">
                    <div>player 1</div>
                    <div>player 2</div>
                    <div>player 3</div>
                    <div>player 4</div>
                </div>
                <div className="guess-container">
                    <input className="guess-box" type="text" placeholder="Type Your Guess Here"></input>
                    {/* wanting a green checkmark instead of text for button to submit guess */}
                    <button className="submit-guess">Submit!</button>
                </div>
            </div>
        )
    }
}