(async ()=> {
	var two = await import('./two.js');
	var one = await import('./one.js');
	var jquery = await import('jquery');
	var element = await import('./element.js');
	two.test();
	console.log("In index");
	console.log("$:",jquery);
})();

