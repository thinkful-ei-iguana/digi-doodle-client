import React from 'react'; 
import DrawingPage from './DrawingPage'
import { Canvas } from './DrawingPage'
import ReactDOM from 'react-dom';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import { shallow, Enzyme } from 'enzyme';
import '../../setupTests'

describe ('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})


describe ('DrawingPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Canvas/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})


