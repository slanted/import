(async ()=> {
	var one = await import('./one.js');
	var jquery = await import('jquery');

	var el = document.querySelector('my-element');
	console.log("el:",el);
	if (el) {
		var element = await import('./element.js');
	}

	// var el2 = document.querySelector('my-other-element');
	// if (el2) {
	// 	var element2 = await import('./element2.js');
	// }
	console.log("In index");
	console.log("$:",jquery); })(); 