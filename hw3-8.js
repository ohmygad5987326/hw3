function A(callback) {
	console.log('Hello!');
	var data = {
		name: 'DTD NTUE'
	};

	A(data);
}

greet(data => {
	console.log('The callback was invoked!');
	console.log(e);//error
});

greet(data => {
	console.log('A different callback was invoked!');
	console.log(data.name);
});
