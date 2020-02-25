import React from 'react'
import ReactDOM from 'react-dom'
import SignUpForm from './SignUpForm'
import Canvas from '../../Utils/Canvas/Canvas'
// import ErrorBoundary from '../ErrorBoundary/errorBoundary'
import { BrowserRouter } from 'react-router-dom'

describe(`SignupForm component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <SignUpForm />, div);

        ReactDOM.unmountComponentAtNode(div)
    })

    
})