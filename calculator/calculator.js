let result = 0;

function add (...args) {
	result = 0;

	for (let i = 0; i <= args.length - 1; i++) {

		if(typeof args[i] == "number") {

			result += args[i];

		}

	}	

	return result;
}

function subtract (...args) {

	result = args[0];

	for (let i = 1; i <= args.length - 1; i++) {

		result -= args[i];

	}

	return result;
}

function sum (...args) {

	result = 0;

	for (let i = 0; i <= args.length - 1; i++) {
		
		if (typeof args[i] == "number") {
			
			result += args[i];

		} else if (Array.isArray(args[i])) {
			
			for (let x = 0; x <= args[i].length - 1; x++) {

				console.log("test" + args);
				

				if (typeof args[i][x] == "number") {
					console.log("nose" + args[i][x]);
					
					result += args[i][x];
				} 				
			}
			
		}
	}
	return result;
}

function multiply () {
	
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}