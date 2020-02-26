import React from 'react'
import GameLobbyPage from './GameLobbyPage'
import { shallow } from 'enzyme'

Object.defineProperty(window.document, 'cookie', {
    writable: true,
    value: 'digi-doodle-user'
});

describe(`Gamelobby component`, () => {
    it('renders without crashing', () => {

        const context = {
            username: 'test username'
        }

        const state = {
            isDrawing: false
        }

        const gameLobby = shallow(<GameLobbyPage {...state} />, { context })
        gameLobby.setContext({ context })
        expect(gameLobby).toMatchSnapshot();
    })
})