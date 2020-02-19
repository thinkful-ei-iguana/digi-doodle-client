import React from 'react';
import { SketchField, Tools } from 'react-sketch';
import socket from '../../services/socket-service'
import ColorContext from '../../Context/ColorContext'

class Canvas extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            canvasData: [],
            width: 0,
            height: 0,
        }
    }
    static contextType = ColorContext;
    // socket;

    componentDidMount(){
        window.addEventListener('resize', this.updateDimensions);
        this.handleWidth();
        socket.on('sketch return', async(data) => {
            if ((!this.context.isDrawing) && data.objects !== this.state.canvasData){
                console.log('changing state')
                await this.setState({
                    canvasData: data
                })
            }
        })
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    handleSketchChange = () => {
      if(this.context.isDrawing){
        let sketch = this._sketch.toJSON()
        console.log('sketch is', sketch.objects);
        if ((sketch.objects && this.state.canvasData) && sketch.objects !== this.state.canvasData){
            socket.emit('sketch', sketch);
        }
      };
    }

    handleWidth = () => {
        if (window.innerWidth <= 2000) {
            this.setState({
                width: 1000,
                height: 200
            })
        }
    }
   

    render() {

        let width = window.innerWidth;
        let height = window.innerHeight;
        return (
            <SketchField
                width={width}
                height={height}
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
