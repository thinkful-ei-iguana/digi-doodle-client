import React from 'react'
import ReactDOM from 'react-dom'
import Timer from './Timer'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

describe(`Timer component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <Timer />
            </BrowserRouter>, div);

        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the appropriate time', () => {
        const state = {
            time: 0
        }

        const timer = renderer.create(<Timer {...state} />).toJSON();
        expect(timer).toMatchSnapshot();
    })

})