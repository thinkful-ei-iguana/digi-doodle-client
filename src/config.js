export default {
    API_ENDPOINT:
        process.env.REACT_APP_API_ENDPOINT ||
        "https://digi-doodle.herokuapp.com/api",
    // "http://localhost:8000/api",
    TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY,
    SOCKET_ENDPOINT: "https://digi-doodle.herokuapp.com"

};
