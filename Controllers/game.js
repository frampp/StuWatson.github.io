var birdApp = birdApp || {};

birdApp.activeCell;
birdApp.survivalMode;
birdApp.timeouts = [];
birdApp.score = 0;
birdApp.speed = 10;

birdApp.incrementSpeed = function () {
	birdApp.speed++;
};

birdApp.survivalUpdate = function(cell) {
	birdApp.gameOver();
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
		setTimeout(function(){birdApp.countdown(n)}, 1000);
	} else {
		birdApp.ctx.fillText("Go!", birdApp.width/2, birdApp.height/3);
		setTimeout(function(){
			birdApp.addEventListeners(birdApp.onTouch);
			birdApp.newCell(true)
		}, 750);
	}
};

birdApp.highScore = function () {
	var gameType = birdApp.survivalMode ? "survHighScore" : "timeHighScore";
	if(!localStorage[gameType] || parseInt(localStorage[gameType])<birdApp.score){
		localStorage.setItem(gameType, birdApp.score);
	}
	
};

birdApp.gameOver = function() {
	birdApp.highScore();
	birdApp.drawGameOver();
}

birdApp.start = function (mode) {
	birdApp.removeEventListeners();
	birdApp.score = 0;
	birdApp.speed = 50;
	birdApp.countdown(3);
	if(!mode.survival){
		birdApp.speed = 50;
		birdApp.survivalMode = false;
		setTimeout(birdApp.gameOver, 6075*10);
	} else {
		birdApp.survivalMode = true;
	}
};

