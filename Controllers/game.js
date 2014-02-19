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

birdApp.countdown = function(n) {
	birdApp.drawBg();
	birdApp.ctx.font="28px sans-serif"; 
	if(n !=0) {
		birdApp.ctx.fillText(n, birdApp.width/2, birdApp.height/3);
		n--;
		setTimeout(function(){birdApp.drawCountdown(n)}, 1000);
	} else {
		birdApp.ctx.fillText("Go!", birdApp.width/2, birdApp.height/3);
		setTimeout(function(){
			birdApp.addEventListeners(birdApp.onTouch);
			birdApp.newCell(true)
		}, 750);
	}
};

birdApp.start = function (_survivalMode) {
	birdApp.removeEventListeners();
	birdApp.score = 0;
	birdApp.speed = 50;
	birdApp.countdown(3);
	if(!_survivalMode){
		console.log("Started Timer Mode")
		birdApp.speed = 50;
		birdApp.survivalMode = false;
		setTimeout(birdApp.drawGameOver, 6075*10)
	}
};

