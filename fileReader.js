const fs = require('fs');

fs.readFile('file.txt', 'utf8', (error, data) => {
	if(error) {
		throw new Error(error);
		
	}
	console.log(data);
    
	

});

fs.readFile('file.txt',  (error, data) => {
	if(error) {
		throw new Error(error);
		
	}
	console.log(decodeURIComponent(data));
    
	

});