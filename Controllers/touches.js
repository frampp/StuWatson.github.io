birdApp.onTouch = function(event) {
	event.preventDefault();
	touch = {x:event.pageX, y:event.pageY};
	var cell = birdApp.getCell(touch);
	birdApp.update(cell);
};

birdApp.menuTouch = function(event) {
	var touch = {x:event.pageX, y:event.pageY}
	var menuPress = birdApp.menuCheck(touch);
	if(menuPress){
		if(menuPress.howToPlay){
			birdApp.drawHowToPlay();
		} else {
			birdApp.start(menuPress);
		}
	}
};

birdApp.continueTouch = function(event, tweet) {
	birdApp.removeEventListeners();
	if(tweet){
		birdApp.removeTweetButton();
	}
	birdApp.drawMenu();	
};

