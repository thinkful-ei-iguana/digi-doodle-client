import React from 'react';
import { SketchField, Tools } from 'react-sketch';
import ColorContext from '../../Context/ColorContext'

class Canvas extends React.Component {
    static contextType = ColorContext;
    // socket;

    // componentDidMount(){
    //     SocketService.open((socket) => {
    //         this.socket = socket;
    //     })

    //     this.socket.listen((data) => {
    //         const message = 'sketch_' + this.props.gameNumber
    //         this.setState({
    //             canvasData: data[message]
    //         })
    //     })
    // }

    // componentWillUnmount() {
    //     SocketService.close();
    // }

    state = {
        canvasData: {}
    }

    handleSketchChange = () => {
        let sketch = this._sketch.toJSON()
        console.log('sketch is', sketch);
        // this.socket.emit('sketch', sketch)
    }

    render() {
        console.log(this.context.canvasData);
        return (
            <SketchField
                width="90%"
                height="400px"
                tool={Tools.Pencil}
                lineColor={this.context.color}
                lineWidth={this.context.eraser}
                backgroundColor='white'
                value={this.state.canvasData}
                onChange={this.handleSketchChange}
                ref={c => (this._sketch = c)}
            />
        )
    }
}

export default Canvas;
