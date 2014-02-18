var onTouch = function(event) {
	event.preventDefault();
	touch = {x:event.pageX, y:event.pageY};
	var cell = getCell(touch);
	console.log("Game Touched")
	update(cell);
};

var menuTouch = function(event) {
	console.log(event)
	start(menuCheck());
	console.log("Menu Touched");
};

var continueTouch = function(event) {
	removeEventListeners();
	removeTweetButton();
	drawMenu();	
};