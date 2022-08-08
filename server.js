const express = require('express');
const path = require('path');

const Result = require('./res/math');
const validateHeaders = require('./res/validateHeaders');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
	res.sendFile('README.md', {
		root: path.join(__dirname, './'),
	});
});

app.get('/add', (req, res) => {
	validateHeaders(req, res);
	const reply = new Result(req.headers.firstnum, req.headers.secondnum, '+');
	res.json(reply.result);
});

app.get('/subtract', (req, res) => {
	validateHeaders(req, res);
	const reply = new Result(req.headers.firstnum, req.headers.secondnum, '-');
	res.json(reply.result);
});

app.get('/multiply', (req, res) => {
	validateHeaders(req, res);
	const reply = new Result(req.headers.firstnum, req.headers.secondnum, '*');
	res.json(reply.result);
});

app.get('/divide', (req, res) => {
	validateHeaders(req, res);
	const reply = new Result(req.headers.firstnum, req.headers.secondnum, '/');
	res.json(reply.result);
});

app.get('/random', (req, res) => {
	validateHeaders(req, res);
	const reply = new Result(req.headers.firstnum, req.headers.secondnum, '?');
	res.json(reply.result);
});

app.get('*', (req, res) => {
	res.status(400).end();
});

app.listen(PORT, () => {
	console.log(`Server is live on port ${PORT}`);
});
