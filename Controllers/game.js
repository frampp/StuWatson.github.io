var activeCell,
    timeouts = [],
    score = 0,
    speed = 10,
    survivalMode = true;

var incrementSpeed = function () {
	speed++;
};

var survivalUpdate = function(cell) {
	drawGameOver();
};

var update = function(cell) {
	if(!cell && survivalMode){
		survivalUpdate();
	} else if(!cell) {
		newCell(true);
		incrementSpeed();
	} else if(cell && hitCheck(cell)){
		incrementSpeed();
		newCell();
	} else if (cell && survivalMode) {
		survivalUpdate(cell);
	} 
};

var start = function (_survivalMode) {
	addEventListeners(onTouch);
	score = 0;
	speed = 50;
	newCell(true);
	if(!_survivalMode){
		console.log("Started Timer Mode")
		speed = 50;
		survivalMode = false;
		setTimeout(drawGameOver, 60*1000)
	}
};

