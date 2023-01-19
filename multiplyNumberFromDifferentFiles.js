/* eslint-disable no-unused-vars */

const fs = require('fs');
/**
 * 
 * @param {String} fileName 
 */
function readFile(fileName) {
	return new Promise((resolve, reject) => {
		fs.readFile(fileName, 'utf-8', (error, data) => {
			if(error || data.length == 0 || isNaN(parseInt(data))) {
				reject('Error');
			}
           
			resolve(parseInt(data));

		});
	});

}

let ans = 1;
readFile('file.txt')
	.then((firstNumber) => {
		ans *= firstNumber;
		return readFile('file2.txt');}
	).catch(_ => console.log(ans))
	.then(secondNumber => {
		ans *= secondNumber;
		return readFile('file3.txt');
	}).
	catch(_2 => console.log(ans))
	.then(thirdNumber => {
		ans *= thirdNumber;
		return;
	})
	.catch(_3 => console.log(ans));
