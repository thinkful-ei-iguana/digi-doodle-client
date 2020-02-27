import React from 'react'
import GuessingPage from './GuessingPage'
import ReactDOM from 'react-dom'
// import ErrorBoundary from '../ErrorBoundary/errorBoundary'
import { mount, shallow } from 'enzyme'


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

    // it('renders text input with label', () => {
    //     const wrapper = mount(<GuessingPage />)
    //     const label = wrapper.find('label')
    //     const input = wrapper.find('input');
    //     expect(input).toHaveLength(1);
    //     expect(label).toHaveLength(1);
    //     expect(input.prop('type')).toEqual('text')
    // })
})