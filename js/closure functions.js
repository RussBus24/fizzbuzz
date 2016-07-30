function one() {
	var a = 25;
	console.log('Inside of function one, value of a: ' + a);

	function two() {
		var b = 78;
		console.log('Inside of function two, value of b: ' + b);
		console.log('Inside of function two, value of a:' + a);
	}

	return two;
}

console.log('Call the one function');
var f = one();
console.log('About to run the two functions returned by one');
f();
