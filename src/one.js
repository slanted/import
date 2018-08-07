(async ()=> {
	var two = await import(/* webpackChunkName: "two" */ './two.js');
    console.log("In one. now async...");	
})();