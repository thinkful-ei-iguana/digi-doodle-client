import config from '../config';

const DigiDoodleApiService = {
    createUserName(username) {
        return fetch(`${config.API_ENDPOINT}/player`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ username })
        }).then(res =>
            !res.ok ?
                res.json().then(event => Promise.reject(event))
                : res.json()
        )
    },

    createNewGame() {
        return fetch(`${config.API_ENDPOINT}/game`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
        }).then(res =>
            !res.ok ? res.json().then(event => Promise.reject(event)) : res.json()
        );
    },

    insertPlayerInGame(gameId, playerId, username) {
        return fetch(`${config.API_ENDPOINT}/game/${gameId}/player`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                playerId: playerId,
                username: username
            })
        })
    },

    getWordPrompt() {
        return fetch(`${config.API_ENDPOINT}/prompt`)
            .then(res =>
                !res.ok ? res.json().then(event => Promise.reject(event)) : res.json()
            )
    },

    postGuess(gameId, playerId, guess) {
        return fetch(`${config.API_ENDPOINT}/game/guess`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                playerId: playerId,
                gameId: gameId,
                guess: guess

            })
        })
            .then(res => res.json())
            .then(res => res);
    }

}

export default DigiDoodleApiService