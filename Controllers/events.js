birdApp.removeEventListeners = function() {
	document.querySelector('canvas').removeEventListener("touchstart", birdApp.continueTouch);
	document.querySelector('canvas').removeEventListener("click", birdApp.continueTouch);
	document.querySelector('canvas').removeEventListener("touchstart", birdApp.onTouch, false);
	document.querySelector('canvas').removeEventListener("click", birdApp.onTouch);
	document.querySelector('canvas').removeEventListener("touchstart", birdApp.menuTouch, false);
	document.querySelector('canvas').removeEventListener("click", birdApp.menuTouch);
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
	document.querySelector('canvas').addEventListener("touchstart", listener, false);
	document.querySelector('canvas').addEventListener("click", listener);
};