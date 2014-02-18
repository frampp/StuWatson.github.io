var removeEventListeners = function() {
	document.querySelector('canvas').removeEventListener("touchstart", continueTouch);
	document.querySelector('canvas').removeEventListener("click", continueTouch);
	document.querySelector('canvas').removeEventListener("touchstart", onTouch, false);
	document.querySelector('canvas').removeEventListener("click", onTouch);
	document.querySelector('canvas').removeEventListener("touchstart", menuTouch, false);
	document.querySelector('canvas').removeEventListener("click", menuTouch);
};

var clearTimeouts = function() {
	for (var i = 0; i<timeouts.length; i++) {
		clearTimeout(timeouts[i]);
	}
};

var timerUpdate = function () {	
	clearTimeouts();
	timeouts.push(setTimeout(update, (100/speed)*1000));
};

var addEventListeners = function (listener) {
	removeEventListeners();
	document.querySelector('canvas').addEventListener("touchstart", listener, false);
	document.querySelector('canvas').addEventListener("click", listener);
};