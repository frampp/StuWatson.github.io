var birdApp = birdApp || {};

birdApp.activeCell,
birdApp.timeouts = [],
birdApp.score = 0,
birdApp.speed = 10,
birdApp.survivalMode = true;

birdApp.incrementSpeed = function () {
	birdApp.speed++;
};

birdApp.survivalUpdate = function(cell) {
	birdApp.drawGameOver();
};

birdApp.update = function(cell) {
	if(!cell && birdApp.survivalMode){
		birdApp.survivalUpdate();
	} else if(!cell) {
		birdApp.newCell(true);
		birdApp.incrementSpeed();
	} else if(cell && birdApp.hitCheck(cell)){
		birdApp.incrementSpeed();
		birdApp.newCell();
	} else if (cell && birdApp.survivalMode) {
		birdApp.survivalUpdate(cell);
	} 
};

birdApp.start = function (_survivalMode) {
	birdApp.addEventListeners(birdApp.onTouch);
	birdApp.score = 0;
	birdApp.speed = 50;
	birdApp.newCell(true);
	if(!_survivalMode){
		console.log("Started Timer Mode")
		birdApp.speed = 50;
		birdApp.survivalMode = false;
		setTimeout(birdApp.drawGameOver, 60*1000)
	}
};

