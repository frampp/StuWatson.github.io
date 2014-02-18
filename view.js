var birdReady = false,
    bgReady = false,
    birdImage = new Image(),
    bgImage = new Image(),
	width = window.innerWidth,
    height = window.innerHeight;

birdImage.src = "images/faby.jpg";
bgImage.src = "images/Sky_Blue.png";

var canvas = document.createElement("canvas");
canvas.width = width;
canvas.height = height;
canvas.style.position = "absolute";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

var drawBg = function() {
	ctx.drawImage(bgImage, 0, 0, width, height);
	ctx.fill();
};

var createTweetButton = function() {
	var a = document.createElement('a');
	var linkText = document.createTextNode("Tweet This!");
	a.appendChild(linkText);
	a.title = "Tweet";
	a.href = "twitter://post?message=I%20just%20scored%20" + score + "%20on%20Tappy%20Bird!%20See%20if%20you%20can%20beat%me!" ;
	a.style.marginTop = height/2+"px";
	a.style.marginLeft = width/3+"px";
	a.style.position = "relative";
	a.style.zIndex = 2;
	document.body.appendChild(a);
}

var drawMenu = function() {
	clearTimeouts();
	drawBg();
	ctx.font="28px sans-serif"; 
	ctx.fillText("Timer Mode", width/4, height/5);
	ctx.fillText("Survival Mode", width/4, 2*(height/5));
	removeEventListeners();
	document.querySelector('canvas').addEventListener("touchstart", menuTouch, false);
	document.querySelector('canvas').addEventListener("click", menuTouch);
};

var drawGameOver = function() {
	drawBg();
	ctx.font="28px sans-serif";
	ctx.fillText("Game Over. Score: " + score, width/4, height/5);
	removeEventListeners();
	clearTimeouts();
	createTweetButton();
	timeouts.push(setTimeout(function(){
	document.querySelector('canvas').addEventListener("touchstart", continueTouch);
	document.querySelector('canvas').addEventListener("click", continueTouch);		
	ctx.fillText("Tap anywhere to continue", width/4, 2*(height/5));
	}, 1000));
}


bgImage.onload = function () {
	bgReady = true;
	drawMenu();
};

birdImage.onload = function () {
	birdReady = true;
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