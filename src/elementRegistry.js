(async ()=> {
	/**
	 * Here we check the dom to see if we find 'my-element', and conditionally load
	 * the element's chunk
	 */
	var el = document.querySelector('my-element');
	console.log("el:",el);
	if (el) {
		var element = await import(/* webpackChunkName: "myelement" */ './element.js');
	}

	/**
	 * Here is the check for element 2
	 */
	var el2 = document.querySelector('my-other-element');
	if (el2) {
		var element2 = await import(/* webpackChunkName: "myotherelement" */ './element2.js');
    }
})(); 