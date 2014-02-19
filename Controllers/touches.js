birdApp.onTouch = function(event) {
	event.preventDefault();
	touch = {x:event.pageX, y:event.pageY};
	var cell = birdApp.getCell(touch);
	birdApp.update(cell);
};

birdApp.menuTouch = function(event) {
	var touch = {x:event.pageX, y:event.pageY}
	birdApp.start(birdApp.menuCheck(touch));
};

birdApp.continueTouch = function(event) {
	birdApp.removeEventListeners();
	birdApp.removeTweetButton();
	birdApp.drawMenu();	
};