const validateHeaders = (req, res) => {
	const firstNum = parseInt(req.headers.firstnum);
	const secondNum = parseInt(req.headers.secondnum);

	if (!firstNum || !secondNum) {
		res.status(400).end();
	}
};

module.exports = validateHeaders;
