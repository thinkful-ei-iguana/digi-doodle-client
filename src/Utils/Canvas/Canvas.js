import React from 'react';
import { SketchField, Tools } from 'react-sketch';

class Canvas extends React.Component {
    render() {
        return (
            <SketchField 
                width="50%"
                height="400px"
                tool={Tools.Pencil}
                lineColor={this.props.color}
                lineWidth={this.props.eraser}
                backgroundColor='white'
            />
        )
    }
}

export default Canvas;
