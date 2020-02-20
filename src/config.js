export default {
    API_ENDPOINT:
        process.env.REACT_APP_API_ENDPOINT || 
        // "https://digi-doodle-tester.herokuapp.com/api",
        "http://localhost:8000/api",
    TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY,
    SOCKET_ENDPOINT: "http://localhost:8000"
    // "https://digi-doodle-tester.herokuapp.com"
    
};
