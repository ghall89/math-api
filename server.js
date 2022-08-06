const express = require('express');
const Result = require('./res/math');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
	res.json('Hello world');
});

app.get('/add', (req, res) => {
	const reply = new Result(req.headers.firstnum, req.headers.secondnum, '+');
	res.json(reply.result);
});

app.get('/subtract', (req, res) => {
	const reply = new Result(req.headers.firstnum, req.headers.secondnum, '-');
	res.json(reply.result);
});

app.get('/multiply', (req, res) => {
	const reply = new Result(req.headers.firstnum, req.headers.secondnum, '*');
	res.json(reply.result);
});

app.get('/divide', (req, res) => {
	const reply = new Result(req.headers.firstnum, req.headers.secondnum, '/');
	res.json(reply.result);
});

app.get('*', (req, res) => {
	res.status(400).end();
});

app.listen(PORT, () => {
	console.log(`Server is live on port ${PORT}`);
});
