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
        
    }
}



export default DigiDoodleApiService