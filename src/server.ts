import http from 'node:http';
import { loadEnvFile } from 'node:process';
import path from 'path';

loadEnvFile(path.join(__dirname, '..', '.env'));

let connectedUsers: { [key: string]: boolean } = {};

export const startServer = () => {
	const server = http.createServer((req, res) => {
		if (req.method === 'GET' && req.url === '/') {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			const users = Object.keys(connectedUsers).map((user) => ({
				user,
				status: connectedUsers[user] ? 'connected' : 'disconnected'
			}));
			const response = {
				users,
				envVariable: process.env.TEST_ENV_VARIABLE
			};
			res.end(JSON.stringify(response));
		} else {
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.end('Not Found');
		}
	});

	server.listen(3000, () => {
		console.log('Server is listening on port 3000');
	});

	return server;
};

export const updateUserStatus = (userId: string, status: boolean) => {
	connectedUsers[userId] = status;
};
