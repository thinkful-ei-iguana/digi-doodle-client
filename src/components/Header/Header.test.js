import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

describe(`Header component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>, div);

        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the appropriate header', () => {
        const context = {
            game: {
                id: 'game uuid',
                current_drawer: null,
                current_answer: null,
                status: 'waiting for players',
                winner: null
            }
        }

        const props = {
            isDrawing: false
        }

        const header = renderer.create(<Header {...props} />, context).toJSON();
        expect(header).toMatchSnapshot();
    })

})