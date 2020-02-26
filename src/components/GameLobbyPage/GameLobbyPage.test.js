import React from 'react'
import GameLobbyPage from './GameLobbyPage'
import { shallow } from 'enzyme'

jest.mock('js-cookie')

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