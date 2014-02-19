birdApp.birdReady = false;
birdApp.bgReady = false;
birdApp.oldReady = false;
birdApp.birdImage = new Image();
birdApp.bgImage = new Image();
birdApp.oldImage = new Image();
birdApp.birdImage.src = "images/faby.jpg";
birdApp.bgImage.src = "images/Sky_Blue.png";
birdApp.oldImage.src = "images/bruised.jpg";

birdApp.createCanvas = function() {

	birdApp.canvas = document.querySelector("canvas");
        birdApp.width = birdApp.canvas.width
        birdApp.height = birdApp.canvas.height
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
	a.href = "twitter://post?message=I%20just%20scored%20" + birdApp.score + "%20on%20Tappy%20Bird!%20See%20if%20you%20can%20beat%me!" ;
	a.style.marginTop = birdApp.height/2+"px";
	a.style.marginLeft = birdApp.width/3+"px";
	a.style.position = "relative";
	a.style.zIndex = 2;
	document.body.appendChild(a);
}

birdApp.removeTweetButton = function () {
	var button = document.querySelector('#tweet');
	button.parentNode.removeChild(button);
}

birdApp.drawMenu = function() {
	birdApp.clearTimeouts();
	birdApp.drawBg();
	birdApp.ctx.font="28px sans-serif"; 
	birdApp.ctx.fillText("Timer Mode", birdApp.width/4, birdApp.height/5);
	birdApp.ctx.fillText("Survival Mode", birdApp.width/4, 2*(birdApp.height/5));
	birdApp.removeEventListeners();
	document.querySelector('canvas').addEventListener("touchstart", birdApp.menuTouch, false);
	document.querySelector('canvas').addEventListener("click", birdApp.menuTouch);
};

birdApp.drawGameOver = function() {
	birdApp.drawBg();
	birdApp.ctx.font="28px sans-serif";
	birdApp.ctx.fillText("Game Over. Score: " + birdApp.score, birdApp.width/4, birdApp.height/5);
	birdApp.removeEventListeners();
	birdApp.clearTimeouts();
	birdApp.createTweetButton();
	birdApp.timeouts.push(setTimeout(function(){
	document.querySelector('canvas').addEventListener("touchstart", birdApp.continueTouch);
	document.querySelector('canvas').addEventListener("click", birdApp.continueTouch);		
	birdApp.ctx.fillText("Tap anywhere to continue", birdApp.width/4, 2*(birdApp.height/5));
	}, 1000));
}


birdApp.bgImage.onload = function () {
	birdApp.bgReady = true;
	birdApp.drawMenu();
};

birdApp.birdImage.onload = function () {
	birdApp.birdReady = true;
};

birdApp.oldImage.onload = function () {
	birdApp.oldReady = true;
}

birdApp.drawBird = function (cell, old) {
	var width = birdApp.width;
	var height = birdApp.height;
	birdApp.canvas.width = birdApp.canvas.width;
	console.log(old);
	console.log(cell);
	if(birdApp.birdReady && birdApp.bgReady) {
		birdApp.drawBg();
		if(old && birdApp.oldReady){
			console.log("Bird drawing")
			birdApp.ctx.drawImage(birdApp.oldImage, old.x+6, old.y+16);
		}
		birdApp.ctx.drawImage(birdApp.birdImage, cell.x+6, cell.y+16);
		birdApp.ctx.font="28px sans-serif";
		birdApp.ctx.fillText("Score"+birdApp.score, width/5, birdApp.height/6)
		birdApp.ctx.fill();
	}
};
