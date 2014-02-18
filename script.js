var activeCell,
    timeout,
    score = 0,
    speed = 10,
    survivalMode = true,
    birdReady = false,
    bgReady = false,
    birdImage = new Image(),
    bgImage = new Image();
    
birdImage.src = "images/faby.jpg";
bgImage.src = "images/Sky_Blue.png";

var canvas = document.createElement("canvas");
canvas.width = 320;
canvas.height = 480;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");


var drawBg = function() {
	ctx.drawImage(bgImage, 0, 0, 320, 480);
	ctx.fill();
};

var drawMenu = function() {
	drawBg();
	ctx.font="28px sans-serif"; 
	ctx.fillText("Timer Mode", 40, 100);
	ctx.fillText("Survival Mode", 40, 200);
}

bgImage.onload = function () {
	bgReady = true;
	drawMenu();
};

birdImage.onload = function () {
	birdReady = true;
};

var getCell = function (event) {
	if(0<event.x && event.x <106) {
		var xGrid = 0;
	} else if (106<=event.x && event.x <212) {
		var xGrid = 106;
	} else if (212<=event.x && event.x <320) {
		var xGrid = 212;
	}

	if(100<=event.y && event.y<200) {
		var yGrid = 100;
	} else if (200<=event.y && event.y <300) {
		var yGrid = 200;
	} else if (300<=event.y && event.y <400) {
		var yGrid = 300;
	}

	return {x: xGrid, y: yGrid};
};
var drawBird = function (cell) {
	canvas.width = canvas.width;
	if(birdReady && bgReady) {
		drawBg();
		ctx.drawImage(birdImage, cell.x+6, cell.y+16);
		ctx.font="28px sans-serif";
		ctx.fillText("Score"+score, 30, 40)
		ctx.fill();
	}
};


var newCell = function () {
	clearTimeout(timeout)
	var x = Math.random()*320;
	var y = 100+Math.random()*300;
	var cell = getCell({x:x, y:y});
	activeCell = cell;
	drawBird(cell);
	timerUpdate();
};

var incrementSpeed = function () {
	speed++;
};

var hitCheck = function(cell) {
	if(cell.x == activeCell.x && cell.y == activeCell.y) {
		score++;
		console.log("Score: "+score);
		return true
	}
	return false;
};


var survivalUpdate = function() {
	console.log("Fucked")
	alert("Game over")
};

var timerUpdate = function () {
	timeout = setTimeout(update, (100/speed)*1000);
};

var update = function(cell) {
	if(!cell && survivalMode){
		survivalUpdate();
	} else if(!cell) {
		newCell();
		incrementSpeed();
	} else if(cell && hitCheck(cell)){
		incrementSpeed();
		newCell();
	} else if (cell && survivalMode) {
		survivalUpdate();
	} 
};

var addEventListeners = function () {
	document.querySelector('canvas').addEventListener("touchstart", onTouch, false);
	document.querySelector('canvas').addEventListener("click", onTouch);
}

var start = function (_survivalMode) {
	addEventListeners();
	speed = 2;
	newCell();
	if(!_survivalMode){
		console.log("Started Timer Mode")
		speed = 50;
		survivalMode = false;
		setTimeout(function(){alert("Game over... Score: "+score);}, 60*1000)
	}
	timerUpdate();
};

var onTouch = function(event) {
	event.preventDefault();
	var cell = getCell(event);
	update(cell);
};

var menuTouch = function(event) {
	console.log(event)
	if(event.x > 40 ){
		if(event.y < 130 && event.y > 100){
			start(false);
		} else if (event.y < 230 && event.y > 200) {
			start(true);
		}
	}
}

document.querySelector('canvas').addEventListener("touchstart", menuTouch, false);
document.querySelector('canvas').addEventListener("click", menuTouch);




