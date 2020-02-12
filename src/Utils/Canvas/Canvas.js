import React from 'react';
import { SketchField, Tools } from 'react-sketch';
import AppContext from '../../Context/AppContext'

class Canvas extends React.Component {
    static contextType = AppContext;
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
