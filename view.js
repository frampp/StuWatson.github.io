birdApp.birdReady = false,
birdApp.bgReady = false,
birdApp.oldReady = false,
birdApp.birdImage = new Image(),
birdApp.bgImage = new Image(),
birdApp.oldImage = new Image();
birdApp.width = window.innerWidth,
birdApp.height = window.innerHeight;
birdApp.birdImage.src = "images/faby.jpg";
birdApp.bgImage.src = "images/Sky_Blue.png";
birdApp.oldImage.src = "images/bruised.jpg";

birdApp.createCanvas = function() {

	var canvas = document.createElement("canvas");
	canvas.width = birdApp.width;
	canvas.height = birdApp.height;
	canvas.style.position = "absolute";
	birdApp.canvas = document.body.appendChild(canvas);
	birdApp.ctx = birdApp.canvas.getContext("2d");
};

birdApp.createCanvas();

birdApp.drawBg = function() {
	birdApp.ctx.drawImage(birdApp.bgImage, 0, 0, birdApp.width, birdApp.height);
	birdApp.ctx.fill();
};

birdApp.createTweetButton = function() {
	var a = document.createElement('a');
	var linkText = document.createTextNode("Tweet This!");
	a.appendChild(linkText);
	a.title = "Tweet";
	a.id="tweet"
	a.href = "twitter://post?message=I%20just%20scored%20" + birdApp.score + "%20on%20Smack%20A%20Bird!%20See%20if%20you%20can%20beat%20me!";
	a.style.top = (2*(birdApp.height/3))+"px";
	a.style.marginLeft = birdApp.width/4+"px";
	a.style.position = "relative";
	a.style.zIndex = 2;
	document.body.appendChild(a);
};

birdApp.removeTweetButton = function () {
	var button = document.querySelector('#tweet');
	button.parentNode.removeChild(button);
};

birdApp.drawMenu = function() {
	birdApp.clearTimeouts();
	birdApp.drawBg();
	birdApp.ctx.font="28px sans-serif";
	birdApp.ctx.fillText("Timer Mode", birdApp.width/4, birdApp.height/5);
	birdApp.ctx.fillText("Survival Mode", birdApp.width/4, 2*(birdApp.height/5));
	birdApp.removeEventListeners();
	birdApp.addEventListeners(birdApp.menuTouch);
	birdApp.ctx.font="20px sans-serif"; 
	birdApp.ctx.fillText("Survival Best\n"+ (localStorage.survHighScore ? localStorage.survHighScore : 0),
		birdApp.width/9,
		7*(birdApp.height/8));
	birdApp.ctx.fillText("Timer Best\n"+ (localStorage.timeHighScore ? localStorage.timeHighScore : 0),
		5*(birdApp.width/9), 
		7*(birdApp.height/8));
};



birdApp.drawGameOver = function() {
	birdApp.drawBg();
	birdApp.ctx.font="28px sans-serif";
	birdApp.ctx.fillText("Game Over. Score: " + birdApp.score, birdApp.width/4, birdApp.height/5);
	birdApp.ctx.fillText("High Score: " + (birdApp.survivalMode ? localStorage.survHighScore : localStorage.timeHighScore), birdApp.width/4, 3*(birdApp.height/5));
	birdApp.removeEventListeners();
	birdApp.clearTimeouts();
	birdApp.createTweetButton();
	birdApp.timeouts.push(setTimeout(function(){
	birdApp.addEventListeners(birdApp.continueTouch);	
	birdApp.ctx.fillText("Tap anywhere to continue", birdApp.width/4, 2*(birdApp.height/5));
	}, 1000));
};


birdApp.bgImage.onload = function () {
	birdApp.bgReady = true;
	birdApp.drawMenu();
};

birdApp.birdImage.onload = function () {
	birdApp.birdReady = true;
};

birdApp.oldImage.onload = function () {
	birdApp.oldReady = true;
};

birdApp.drawBird = function (cell, old) {
	var width = birdApp.width;
	var height = birdApp.height;
	birdApp.canvas.width = birdApp.canvas.width;
	if(birdApp.birdReady && birdApp.bgReady) {
		birdApp.drawBg();
		if(old && birdApp.oldReady){
			birdApp.ctx.drawImage(birdApp.oldImage, old.x+6, old.y+16);
		}
		birdApp.ctx.drawImage(birdApp.birdImage, cell.x+6, cell.y+16);
		birdApp.ctx.font="28px sans-serif";
		birdApp.ctx.fillText("Score"+birdApp.score, width/5, birdApp.height/6)
		birdApp.ctx.fill();
	}
};
