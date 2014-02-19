birdApp.onTouch = function(event) {
	event.preventDefault();
	touch = {x:event.pageX, y:event.pageY};
	var cell = birdApp.getCell(touch);
	console.log("Game Touched")
	alert("game touched")
	birdApp.update(cell);
};

birdApp.menuTouch = function(event) {
	console.log(event)
	var touch = {x:event.pageX, y:event.pageY}
	birdApp.start(birdApp.menuCheck(touch));
	console.log("Menu Touched");
};

birdApp.continueTouch = function(event) {
	birdApp.removeEventListeners();
	birdApp.removeTweetButton();
	birdApp.drawMenu();	
};