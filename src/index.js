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