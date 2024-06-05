import { startServer } from './server';
import { initializeWebSocket } from './websocket';

const server = startServer();
initializeWebSocket(server);
