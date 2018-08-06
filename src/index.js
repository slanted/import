(async ()=> {
	var two = await import('./two.js');
	var one = await import('./one.js');
	var jquery = await import('jquery');
	two.test();
	console.log("In index");
	console.log("$:",jquery);
})();

