import React, { Component } from 'react'
import Canvas from '../Utils/Canvas/Canvas'
import Colors from '../Utils/Colors/Colors'
import './DrawingPage.css'
import '../Utils/Canvas/Canvas.css'

export default class DrawingPage extends Component {
    constructor() {
    super()
    this.state = {
        color: '',
        eraser: 3,
    }
  }

changeColorRed = () => {
  this.setState({
      color: 'red',
      eraser: 3,
  })
}
changeColorBlue = () => {
  this.setState({
      color: 'blue',
      eraser: 3,
  })
}
changeColorGreen = () => {
  this.setState({
      color: 'green',
      eraser: 3,
  })
}
changeColorBlack = () => {
  this.setState({
      color: 'black',
      eraser: 3,
  })
}
changeColorYellow = () => {
  this.setState({
      color: 'yellow',
      eraser: 3,
  })
}
changeColorOrange = () => {
  this.setState({
      color: 'orange',
      eraser: 3,
  })
}
changeColorPurple = () => {
  this.setState({
      color: 'purple',
      eraser: 3,
  })
}
changeColorBrown = () => {
  this.setState({
      color: 'brown',
      eraser: 3,
  })
}
handleEraser = () => {
  this.setState({
      color: 'white',
      eraser: 20,
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
                <h1>You are Drawing!</h1>
                {/* Draw a {this.context.name etc} */}
                <h3>Draw a fish </h3>
                <div className="canvas-container">
                    <Canvas color={this.state.color} eraser={this.state.eraser}/>
                </div>
                <Colors
                    changeColorRed={this.changeColorRed}
                    changeColorBlue={this.changeColorBlue}
                    changeColorGreen={this.changeColorGreen}
                    changeColorBlack={this.changeColorBlack}
                    changeColorYellow={this.changeColorYellow}
                    changeColorOrange={this.changeColorOrange}
                    changeColorPurple={this.changeColorPurple}
                    changeColorBrown={this.changeColorBrown}
                    handleEraser={this.handleEraser}
                />
            </div>
        )
    }
}