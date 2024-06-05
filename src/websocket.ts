import { Server as HttpServer } from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { updateUserStatus } from './server';

export const initializeWebSocket = (server: HttpServer) => {
	const wss = new WebSocketServer({ server });

	wss.on('connection', (ws: WebSocket) => {
		const userId = `user-${Math.floor(Math.random() * 1000)}`;
		updateUserStatus(userId, true);

		ws.on('close', () => {
			updateUserStatus(userId, false);
		});

		ws.on('message', (message: string) => {
			console.log(`Received message from ${userId}: ${message}`);
		});
	});
};
