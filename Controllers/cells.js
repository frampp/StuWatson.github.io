birdApp.getCell = function (event) {
	var xGrid;
	var yGrid;
	var width = birdApp.width;
	var height = birdApp.height;
	if(0 < event.x && event.x < width/3 ){
		xGrid = 0;
	} else if ( width/3 <=event.x && event.x < 2*(width/3)) {
		xGrid = (width/3);
	} else if ( 2*(width/3) <=event.x && event.x < width) {
		xGrid = 2*(width/3);
	}

	if( (height/5) <=event.y && event.y< 2*(height/5)) {
		yGrid = height/5;
	} else if (2*(height/5)<=event.y && event.y < 3*(height/5)) {
		yGrid = 2*(height/5);
	} else if (3*(height/5)<=event.y && event.y < 4*(height/5)) {
		yGrid = 3*(height/5);
	}
	return {x: xGrid, y: yGrid};
};

birdApp.randomise = function () {
	var x = Math.random()*width;
	var y = (height/5)+Math.random()*(3*height/5);
	var cell = birdApp.getCell({x:x, y:y});
	return cell
};

birdApp.newCell = function (start) {
	var width = birdApp.width;
	var height = birdApp.height;
	birdApp.clearTimeouts()
	var cell = birdApp.randomise();
	if(!start){
		var old = birdApp.activeCell;
		if(cell.x == birdApp.activeCell.x && cell.y == birdApp.activeCell.y){
			var cell = birdApp.randomise();
		}
	}
	birdApp.activeCell = cell;
	birdApp.drawBird(cell, old);
	birdApp.timerUpdate();
};

birdApp.hitCheck = function(cell) {
	if(cell.x == birdApp.activeCell.x && cell.y == birdApp.activeCell.y) {
		birdApp.score++;
		return true
	}
	return false;
};

birdApp.menuCheck = function(event) {
	var width = birdApp.width;
	var height = birdApp.height;
	if(event.x > width/4){
		if(event.y < 2*(height/5) && event.y > height/5){
			return(false);
		} else if (event.y < 3*(height/5) && event.y >= 2*(height/5)) {
			return(true);
		}
	}
}