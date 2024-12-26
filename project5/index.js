const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello, World! This is Project 5.\n');
});

server.listen(port, hostname, () => {
	console.log('Server running at hettp://${hostname} : ${port}/');
});
