import React from 'react';
import ColorContext from '../../Context/ColorContext'
import socket from '../../services/socket-service'

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      time: null
    }
  }
  static contextType = ColorContext

  componentDidMount() {
    
    socket.on('timer', (time) => {
    //   if (time === 0) {
    //     this.setState({
    //       time: null
    //     });
    // } else 
    
      this.setState({
        time: time
      });

  })

  }

  render() {
    return(
      <div className="timer-container">
          {(this.state.time !== 0) && <h4> In {this.state.time}</h4>}
      </div>
    )
  }

}

export default Timer