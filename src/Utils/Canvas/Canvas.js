import React from 'react';
import { SketchField, Tools } from 'react-sketch';
import socket from '../../services/socket-service';
import ColorContext from '../../Context/ColorContext';

class Canvas extends React.Component {

	static contextType = ColorContext;
	state = {
		width: 0
	}

	setWidth = () => {
		this.setState({width: window.innerWidth})
	}

	componentDidMount() {
		// get initial window width and set event listener
		this.setWidth();
		window.addEventListener('resize', this.setWidth);

		socket.on('clear canvas', () => {
			if (this._sketch && this._sketch.clear) {
				console.info('clear sketch');
				this._sketch.clear();
				this.context.setCanvas([]);
			}
		});

		socket.on('sketch return', async (data) => {
			if (!this.context.isDrawing) {
				console.log('isdrawing is', this.context.isDrawing);
				console.log('changing state');
				await this.context.setCanvas(data);
			}
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.setWidth);
	}

	handleSketchChange = () => {
		// code defensively to make sure objects exist
		if (this.context.isDrawing && this._sketch && this.context.canvasData) {
			let sketch = this._sketch.toJSON(); // convert drawn object to JSON
			if (sketch.objects && this.context.canvasData) {
				// detect if I have drawn something new
				// we need to do this hack because the canvas detects mouse movements as drawing.
				// we only want to send data to the server if we have drawn something new
				const firstDraw = !this.context.canvasData.objects;
				const newDraw = this.context.canvasData.objects && sketch.objects.length > this.context.canvasData.objects.length;
				if (firstDraw || newDraw) {
					console.log('sketch is', sketch.objects);
					socket.emit('sketch', sketch);
				}
			}
		}
	};

	render() {
		let width;
		let height;

		if (this.state.width < 700) {
			width = Math.floor(this.state.width * 0.9)
		} else {
			width = 630;
		}
		height = Math.floor(0.6 * width);

		return (
			<SketchField
				width={`${width}px`}
				height={`${height}px`}
				tool={Tools.Pencil}
				lineColor={this.context.color}
				lineWidth={this.context.eraser}
				backgroundColor="white"
				value={this.context.canvasData}
				onChange={this.handleSketchChange}
				ref={(c) => (this._sketch = c)}
			/>
		);
	}
}

export default Canvas;
