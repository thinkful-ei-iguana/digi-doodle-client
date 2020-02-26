import React from 'react'; 
import DrawingPage from './DrawingPage'
import { Canvas } from './DrawingPage'
import ReactDOM from 'react-dom';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import { shallow, Enzyme } from 'enzyme';
import GuessingPage from '../GuessingPage/GuessingPage'
import SignUpForm from '../SignUpForm/SignUpForm'
import PlayAgain from '../PlayAgain/PlayAgain'
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
    ReactDOM.render(<BrowserRouter><DrawingPage/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})


describe ('SignUpForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignUpForm/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe ('PlayAgain component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlayAgain/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})


