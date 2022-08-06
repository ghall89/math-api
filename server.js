const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

class Result {
	constructor(firstNum, secondNum, operation) {
		this.firstNum = parseInt(firstNum);
		this.secondNum = parseInt(secondNum);
	}

	get result() {
		return { ...this, result: this.calc() };
	}

	calc() {
		// if (operation === 'add') {
		return this.firstNum + this.secondNum;
		// } else if (operation === 'sub') {
		// 	return '-';
		// } else if (operation === 'mul') {
		// 	return '*';
		// } else if (operation === 'div') {
		// 	return '/';
		// } else {
		// 	return 'error';
		// }
	}
}

app.get('/', (req, res) => {
	res.json('Hello world');
});

app.get('/add', (req, res) => {
	const reply = new Result(req.headers.firstnum, req.headers.secondnum, 'add');
	res.json(reply.result);
});

app.get('/subtract', (req, res) => {
	res.json(getResult('sub', req));
});

app.get('/multiply', (req, res) => {
	res.json(getResult('mul', req));
});

app.get('/divide', (req, res) => {
	res.json(getResult('div', req));
});

app.get('*', (req, res) => {
	res.json('Invalid');
});

app.listen(PORT, () => {
	console.log(`Server is live on port ${PORT}`);
});
