birdApp.removeEventListeners = function() {
	birdApp.canvas.removeEventListener("touchstart", birdApp.continueTouch);
	birdApp.canvas.removeEventListener("click", birdApp.continueTouch);
	birdApp.canvas.removeEventListener("touchstart", birdApp.onTouch, false);
	birdApp.canvas.removeEventListener("click", birdApp.onTouch);
	birdApp.canvas.removeEventListener("touchstart", birdApp.menuTouch, false);
	birdApp.canvas.removeEventListener("click", birdApp.menuTouch);
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
	birdApp.canvas.addEventListener("touchstart", listener, false);
	birdApp.canvas.addEventListener("click", listener);
};