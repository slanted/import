/**
 * 
 * Ok what the crap is this?
 * 
 * Here I'm using the webpack's dynamic import functionality documented here: https://webpack.js.org/guides/code-splitting/#dynamic-imports
 * 
 * 
 * I've tried to label each bundle that gets created with the 'webpackChunkName' property
 * so it displays properly in your Network tab when loading in the browser
 * 
 * 
 * Forgive the one.js and jquery, it was just a test to see if code splitting and dynamic imports work.
 * 
 * 
 * So this is just an immediately executing anonymous async function.
 * 
 * A couple of notes:
 * 1. I still need to do a detection on the dom to see if an element was attached dynamically
 * 2. I'd love to figure out a way to not have to come in here when I'm creating a new element - thinking about this
 * 
 * 
 * 
 * 
 * 
 */
(async ()=> {
	/**
	 * Simple async await to show we can load a chunk separately
	 */
	var one = await import(/* webpackChunkName: "one" */ './one.js');

	/**
	 * And here is are loading all of jquery as another chunk
	 */
	var jquery = await import(/* webpackChunkName: "jquery" */ 'jquery');

	/**
	 * This will conditionally load in the elements
	 */
	await import(/* webpackChunkName: "elements" */ './elementRegistry.js');

	console.log("$:",jquery); 
})(); 