class Result {
	constructor(firstNum, secondNum, operator) {
		this.firstNum = parseInt(firstNum);
		this.operator = operator;
		this.secondNum = parseInt(secondNum);
	}

	get result() {
		return { ...this, result: this.calc() };
	}

	calc() {
		if (this.operator === '+') {
			return this.firstNum + this.secondNum;
		} else if (this.operator === '-') {
			return this.firstNum - this.secondNum;
		} else if (this.operator === '*') {
			return this.firstNum * this.secondNum;
		} else if (this.operator === '/') {
			return this.firstNum / this.secondNum;
		} else {
			return 'error';
		}
	}
}

module.exports = Result;
