const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

const getResult = (operation, req) => {
	const numerals = {
		firstNum: req.headers.firstnum,
		secondNum: req.headers.secondnum,
		result: function () {
			if (operation === 'add') {
				return this.firstNum + this.secondNum;
			} else if (operation === 'sub') {
				return '-';
			} else if (operation === 'mul') {
				return '*';
			} else if (operation === 'div') {
				return '/';
			} else {
				return 'error';
			}
		}
	};
	return numerals;
};

app.get('/', (req, res) => {
	res.json('Hello world');
});

app.get('/add', (req, res) => {
	res.json(getResult('add', req));
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
