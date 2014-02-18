var getCell = function (event) {
	if(0 < event.x && event.x < width/3 ){
		var xGrid = 0;
	} else if ( width/3 <=event.x && event.x < 2*(width/3)) {
		var xGrid = (width/3);
	} else if ( 2*(width/3) <=event.x && event.x < width) {
		var xGrid = 2*(width/3);
	}

	if( (height/5) <=event.y && event.y< 2*(height/5)) {
		var yGrid = height/5;
	} else if (2*(height/5)<=event.y && event.y < 3*(height/5)) {
		var yGrid = 2*(height/5);
	} else if (3*(height/5)<=event.y && event.y < 4*(height/5)) {
		var yGrid = 3*(height/5);
	}

	return {x: xGrid, y: yGrid};
};

var newCell = function (start) {
	clearTimeouts()
	console.log(start)
	if(!start){
		var old = activeCell;
	}
	console.log(old);
	var x = Math.random()*width;
	var y = (height/5)+Math.random()*(3*height/5);
	var cell = getCell({x:x, y:y});
	activeCell = cell;
	drawBird(cell, old);
	timerUpdate();
};

var hitCheck = function(cell) {
	if(cell.x == activeCell.x && cell.y == activeCell.y) {
		score++;
		console.log("Score: "+score);
		return true
	}
	return false;
};

var menuCheck = function() {
	if(event.pageX > width/4){
		if(event.pageY < 2*(height/5) && event.pageY > height/5){
			return(false);
		} else if (event.pageY < 3*(height/5) && event.pageY >= 2*(height/5)) {
			return(true);
		}
	}
}