import React from 'react'
import ReactDOM from 'react-dom'
import PlayAgain from './PlayAgain'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import { mount } from 'enzyme'

describe(`PlayAgain component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <PlayAgain />
            </BrowserRouter>, div);

        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders PlayAgain button', () => {
        const playAgain = renderer.create(<PlayAgain />).toJSON();
        expect(playAgain).toMatchSnapshot();
    })

    it('renders submits onClick', () => {
        const wrapper = mount(
            <PlayAgain />
        );
        expect(wrapper.find('[href="/"]').length).toBe(1);
    })


})