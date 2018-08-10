
/**
 * Again I have to wrap this block in the immediately executing async function so I can use 'await import'
 * 
 * Here we just want to see if the html document contains our element, and if so, we load the element's implementation
 * I was worried that I would have to 'hydrate' the web component. But this works if the script executes after the dom element
 * is already on the page.
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