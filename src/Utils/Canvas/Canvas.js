import React from 'react';
import { SketchField, Tools } from 'react-sketch';
import socket from '../../services/socket-service'
import ColorContext from '../../Context/ColorContext'

class Canvas extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            canvasData: []
        }
    }
    static contextType = ColorContext;
    // socket;

    componentDidMount(){

        socket.on('sketch return', async(data) => {
            console.log(data.objects)
            console.log(this.state.canvasData);
            if ((!this.context.isDrawing) && data.objects !== this.state.canvasData){
                console.log('changing state')
                await this.setState({
                    canvasData: data
                })
            }
            // const message = 'sketch_' + this.context.gameId
            // this.setState({
            //     canvasData: data
            // })
        })
    }

    // componentWillUnmount() {
    //     SocketService.close();
    // }


    handleSketchChange = () => {
      if(this.context.isDrawing){
        let sketch = this._sketch.toJSON()
        console.log('sketch is', sketch.objects);
        if ((sketch.objects && this.state.canvasData) &&sketch.objects !== this.state.canvasData){
            socket.emit('sketch', sketch);
        }
      };
    }

   

    render() {
        return (
            <SketchField
                width="90%"
                height="400px"
                tool={Tools.Pencil}
                lineColor={this.context.color}
                lineWidth={this.context.eraser}
                backgroundColor='white'
                value={this.state.canvasData}
                forceValue={true}
                onChange={this.handleSketchChange}
                ref={c => (this._sketch = c)}
            />
        )
    }
}

export default Canvas;
