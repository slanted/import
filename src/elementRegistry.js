
/**
 * Ok so here I am starting to load elements using the async await import calls.
 * 
 * Notice that I add each one to a promise array and then call 'Promise.all'.
 * 
 * This will load each element asynchronously at the same time.
 * 
 * Here we just want to see if the html document contains our element, and if so, we load the element's implementation
 * I was worried that I would have to 'hydrate' the web component, but this just works.
 * 
 * Also notice the window.onload for now. This is to ensure that we can put the script anywhere on the page and we dont
 * check for the existence of the web components until after the dom has been parsed. Unfortunately this will give a 
 * pop to the page.
 * 
 * 
 *  
 */

window.onload = () => {
	(async () => {
		var promises = [];
		if (document.querySelector('my-element')) {
			promises.push(import(/* webpackChunkName: "myelement" */ './element.js'));
		}
		if (document.querySelector('my-other-element')) {
			promises.push(import(/* webpackChunkName: "my-other-element" */ './element2.js'));
		}
		if (document.querySelector('my-third')) {
			promises.push(import(/* webpackChunkName: "mythird" */ './element3.js'));
		}
		await Promise.all([
			promises
		]);
	})();
}