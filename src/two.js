export function test() {
	console.log("In test!!!");
}
(async ()=> {
	var mark = await import('./mark.html');
	console.log("In two");
})();