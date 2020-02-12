import React from 'react';
import { SketchField, Tools } from 'react-sketch';
import ColorContext from '../../Context/ColorContext'

class Canvas extends React.Component {
    static contextType = ColorContext;
    render() {
        return (
            <SketchField 
                width="50%"
                height="400px"
                tool={Tools.Pencil}
                lineColor={this.context.color}
                lineWidth={this.context.eraser}
                backgroundColor='white'
            />
        )
    }
}

export default Canvas;
