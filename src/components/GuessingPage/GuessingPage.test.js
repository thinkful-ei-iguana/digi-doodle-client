import React from 'react'
import GuessingPage from './GuessingPage'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'


describe(`Guessing component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <GuessingPage />
            , div);
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders without crashing', () => {

        window.HTMLCanvasElement.prototype.getContext = () => { }
        const context = {
            game: {
                id: 'game uuid',
                current_drawer: 'test player',
                current_answer: 'test',
                status: 'waiting for players',
                winner: 'test winner'
            }
        }

        const guessPage = shallow(<GuessingPage />, { context })
        guessPage.setContext({ context })
        expect(guessPage).toMatchSnapshot();

    })

})