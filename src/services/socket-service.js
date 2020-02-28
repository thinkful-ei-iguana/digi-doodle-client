import socketIOClient from 'socket.io-client';
import config from '../config'

let socket = socketIOClient(`${config.SOCKET_ENDPOINT}`);

export default socket;