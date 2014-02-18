var activeCell,
    timeout,
    score = 0,
    speed = 10,
    survivalMode = true,
    birdReady = false,
    bgReady = false,
    birdImage = new Image(),
    bgImage = new Image();
    width = screen.width;
    height = screen.height;
    
birdImage.src = "images/faby.jpg";
bgImage.src = "images/Sky_Blue.png";

var canvas = document.createElement("canvas");
canvas.width = width;
canvas.height = height;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");


var drawBg = function() {
	ctx.drawImage(bgImage, 0, 0, width, height);
	ctx.fill();
};

var drawMenu = function() {
	drawBg();
	ctx.font="28px sans-serif"; 
	ctx.fillText("Timer Mode", width/4, height/5);
	ctx.fillText("Survival Mode", width/4, 2*(height/5));
}

bgImage.onload = function () {
	bgReady = true;
	drawMenu();
};

birdImage.onload = function () {
	birdReady = true;
};

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
var drawBird = function (cell) {
	canvas.width = canvas.width;
	if(birdReady && bgReady) {
		drawBg();
		ctx.drawImage(birdImage, cell.x+6, cell.y+16);
		ctx.font="28px sans-serif";
		ctx.fillText("Score"+score, width/5, height/6)
		ctx.fill();
	}
};


var newCell = function () {
	clearTimeout(timeout)
	var x = Math.random()*width;
	var y = (height/5)+Math.random()*(3*height/5);
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


var survivalUpdate = function(cell) {
	console.log("Fucked")
	alert("Game over @ "+cell.x + " " + cell.y)
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
		survivalUpdate(cell);
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
	alert("Clicked at: x: "+event.pageX + " y: " + event.pageY)
	touch = {x:event.pageX, y:event.pageY}
	var cell = getCell(touch);
	update(cell);
};

var menuTouch = function(event) {
	console.log(event)
	if(event.pageX > width/4){
		if(event.pageY < 1.5*(height/5) && event.pageY > height/5){
			start(false);
		} else if (event.pageY < 2.5*(height/5) && event.pageY > 2*(height/5)) {
			start(true);
		}
	}
}

document.querySelector('canvas').addEventListener("touchstart", menuTouch, false);
document.querySelector('canvas').addEventListener("click", menuTouch);
window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});




