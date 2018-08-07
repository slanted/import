/**
 * Again I have to wrap this block in the immediately executing async function so I can use 'await import'
 * 
 * Here we just want to see if the html document contains our element, and if so, we load the element's implementation
 * I was worried that I would have to 'hydrate' the web component. But this works if the script executes after the dom element
 * is already on the page.
 */
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