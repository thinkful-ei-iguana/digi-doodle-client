import React from 'react'
import ReactDOM from 'react-dom'
import GameLobbyPage from './GameLobbyPage'
// import ErrorBoundary from '../ErrorBoundary/errorBoundary'
import { BrowserRouter } from 'react-router-dom'

describe.skip(`GuessingPage Component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                {/* <ErrorBoundary> */}
                <GameLobbyPage />
                {/* </ErrorBoundary> */}
            </BrowserRouter>, div);

        ReactDOM.unmountComponentAtNode(div)
    })

})