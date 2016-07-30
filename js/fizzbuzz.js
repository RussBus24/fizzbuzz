var list = document.getElementById("list");
console.log(list);

	for(var i = 1; i <= 100; i++) {


	if (i % 3 === 0 && i % 5 === 0) {
		var n = document.createElement("li");
		n.textContent = "FizzBuzz!";
		list.appendChild(n);
		console.log("FizzBuzz!");
	}

	else if (i % 3 === 0) {
		var o = document.createElement("li");
		o.textContent = "Fizz!";
		list.appendChild(o);
		console.log("Fizz!");
	}

	else if (i % 5 === 0) {
		var p = document.createElement("li");
		p.textContent = "Buzz!";
		list.appendChild(p);
		console.log("Buzz!");
	}
	else {
		var e = document.createElement("li");
		e.textContent = i;
		list.appendChild(e);
		console.log(i);
	}

}

