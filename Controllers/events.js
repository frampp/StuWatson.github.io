birdApp.removeEventListeners = function() {
	birdApp.removeEventListener("touchstart", birdApp.continueTouch);
	birdApp.removeEventListener("click", birdApp.continueTouch);
	birdApp.removeEventListener("touchstart", birdApp.onTouch, false);
	birdApp.removeEventListener("click", birdApp.onTouch);
	birdApp.removeEventListener("touchstart", birdApp.menuTouch, false);
	birdApp.removeEventListener("click", birdApp.menuTouch);
};

birdApp.clearTimeouts = function() {
	for (i = 0; i<birdApp.timeouts.length; i++) {
		clearTimeout(birdApp.timeouts[i]);
	}
};

birdApp.timerUpdate = function () {	
	birdApp.clearTimeouts();
	birdApp.timeouts.push(setTimeout(birdApp.update, (100/birdApp.speed)*1000));
};

birdApp.addEventListeners = function (listener) {
	birdApp.removeEventListeners();
	birdApp.addEventListener("touchstart", listener, false);
	birdApp.addEventListener("click", listener);
};