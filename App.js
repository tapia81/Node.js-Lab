require('dotenv').config();

const firstName = process.env.FIRST_NAME;
const alias = process.env.ALIAS;
console.log(firstName, alias);

const addFunction = function(a, b) {
	console.log(a + b);
};

module.exports.addFunction = addFunction;
