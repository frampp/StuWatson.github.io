var onTouch = function(event) {
	event.preventDefault();
	touch = {x:event.pageX, y:event.pageY};
	var cell = getCell(touch);
	update(cell);
};

var menuTouch = function(event) {
	console.log(event)
	removeTweetButton();
	start(menuCheck());
};

var continueTouch = function(event) {
	removeEventListeners();
	drawMenu();	
};