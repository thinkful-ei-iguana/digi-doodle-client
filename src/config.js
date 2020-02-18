export default {
    API_ENDPOINT:
        process.env.REACT_APP_API_ENDPOINT || 
        "https://digi-doodle-tester.herokuapp.com/api",
    TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY,
    SOCKET_ENDPOINT: "https://digi-doodle-tester.herokuapp.com"
};
