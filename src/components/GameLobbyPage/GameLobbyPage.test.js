import React from 'react'
import GameLobbyPage from './GameLobbyPage'
import { shallow } from 'enzyme'
import Cookies from 'js-cookie';

let cookieData = {
    username: "test user",
    userID: "test id",
    gameId: "game id"
}

Cookies.set('digi-doodle-user', cookieData, { expires: 1 });

Object.defineProperty(window.document, 'cookie', {
    writable: true,
    value: 'digi-doodle-user'
});

beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => { });
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