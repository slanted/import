(async ()=> {
	var two = await import('./two.js');
    console.log("In one. now async...");	
})();