import React from 'react'
import ReactDOM from 'react-dom'
import GameLobbyPage from './GameLobbyPage'
// import ErrorBoundary from '../ErrorBoundary/errorBoundary'
import { BrowserRouter } from 'react-router-dom'

describe.skip(`GameLobbyPage Component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');


        const wrapper = shallow(<GameLobbyPage />).toJSON();
        expect(wrapper).toBeDefined();
    })

})