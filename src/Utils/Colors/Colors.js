import React from 'react'
import ColorContext from '../../Context/ColorContext'

class Colors extends React.Component {
    static contextType = ColorContext;
    render() {
        return (
          <>
            <h3 className="color-header">Color Palette</h3>
            <div className="color-buttons">
                <button aria-pressed="false" aria-label="black" onClick={()=>this.context.changeColor('black')} type="button" className="black"></button>
                <button aria-pressed="false" aria-label="brown" onClick={()=>this.context.changeColor('brown')} type="button" className="brown"></button>
                <button aria-pressed="false" aria-label="red" onClick={()=>this.context.changeColor('red')} type="button" className="red"></button>
                <button aria-pressed="false" aria-label="yellow" onClick={()=>this.context.changeColor('yellow')} type="button" className="yellow"></button>
                <button aria-pressed="false" aria-label="orange" onClick={()=>this.context.changeColor('orange')} type="button" className="orange"></button>
                <button aria-pressed="false" aria-label="purple" onClick={()=>this.context.changeColor('purple')} type="button" className="purple"></button>
                <button aria-pressed="false" aria-label="blue" onClick={()=>this.context.changeColor('blue')} type="button" className="blue"></button>
                <button aria-pressed="false" aria-label="green" onClick={()=>this.context.changeColor('green')} type="button" className="green"></button>
                <button aria-pressed="false" aria-label="white" onClick={()=>this.context.changeColor('white', 30)} type="button" className="eraser"></button>
            </div>
          </>
        )
      }
    }
export default Colors;