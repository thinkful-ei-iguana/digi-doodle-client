import React from 'react'
import ReactDOM from 'react-dom'
import DrawingPage from './DrawingPage'
import Canvas from '../../Utils/Canvas/Canvas'
import { mount, shallow, render } from 'enzyme'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

describe(`Drawing component`, () => {
    it('renders without crashing', () => {

        const context = {
            game: {
                id: 'game uuid',
                current_drawer: 'test player',
                current_answer: 'test',
                status: 'waiting for players',
                winner: 'test winner'
            }
        }

        const drawingPage = shallow(<DrawingPage />, { context })
        drawingPage.setContext({ context })
        expect(drawingPage).toMatchSnapshot();
    })
})