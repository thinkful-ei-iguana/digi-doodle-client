const jsCookie = jest.genMockFromModule("js-cookie");

jsCookie.set()
module.exports = {
    "digi-doodle-user": {
        username: 'test user',
        userID: 'test id',
        gameId: 'game id'
    }
}