import React from 'react';
import { SketchField, Tools } from 'react-sketch';

class Canvas extends React.Component {
    render() {
        return (
            <SketchField 
                width="50%"
                height="400px"
                tool={Tools.Pencil}
                lineColor='#3e3e3e'
                lineWidth={3}
                backgroundColor='white'
                undoSteps={5}
            />
        )
    }
}

export default Canvas;
