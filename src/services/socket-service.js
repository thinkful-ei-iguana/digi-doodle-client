import socketIOClient from 'socket.io-client';
import config from '../config'

let socket = socketIOClient(`${config.SOCKET_ENDPOINT}`);

// Fix for UnhandledPromiseRejectionWarning: TypeError: Cannot read property '_cookieJar' of null
socket.on('connect', () => { })

export default socket;