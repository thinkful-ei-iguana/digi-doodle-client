import React from 'react'; 
import DrawingPage from './DrawingPage'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


describe ('DrawingPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><DrawingPage/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})