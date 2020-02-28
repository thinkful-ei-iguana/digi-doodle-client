import React from 'react';
import ColorContext from '../../Context/ColorContext'
import socket from '../../services/socket-service'

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      time: 0
    }
  }
  static contextType = ColorContext

  componentDidMount() {
    
    socket.on('timer', (time) => {
    
      this.setState({
        time: time
      });

  })

  }

  render() {
    return(
      <div className="timer-container">
          {(this.state.time !== 0) && <h4>{this.state.time}</h4>}
      </div>
    )
  }

}

export default Timer