import React, { Component } from 'react'
import DrawingPage from '../DrawingPage/DrawingPage'
import ColorContext from '../../Context/ColorContext'
import './GameLobbyPage.css'

export default class GameLobbyPage extends Component {
    static contextType = ColorContext;
    constructor() {
    super()
    this.state = {
        color: '',
        eraser: 3,
    }
  }

changeColor = (color, eraser = 3) => {
  this.setState({
      color: color,
      eraser: eraser,
  })
}

componentDidMount() {
  this.setState({
    color: 'black',
  })
}
    render() {
        return (
            <div>
                <DrawingPage changeColor={this.changeColor}/>
            </div>
        )
    }
}