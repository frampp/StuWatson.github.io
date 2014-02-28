birdApp.createTweetButton = function() {
	var a = document.querySelector('#tweet');
	a.style.display = 'block';
	a.href = "twitter://post?message=I%20just%20scored%20" + birdApp.score + "%20on%20Smack%20A%20Bird!%20See%20if%20you%20can%20beat%20me!";
	a.style.top = (2*(birdApp.height/3))+"px";
	a.style.marginLeft = birdApp.width/4+"px";
	a.style.position = "relative";
	a.style.zIndex = 2;
};

birdApp.drawGameOver = function() {
	var textLeft = birdApp.width/9;
	birdApp.drawBg();
	birdApp.ctx.font=birdApp.height/30+"px sans-serif";
	birdApp.ctx.fillText("Game Over. Score: " + birdApp.score, textLeft, birdApp.height/5);
	birdApp.ctx.fillText("High Score: " + (birdApp.survivalMode ? localStorage.survHighScore : localStorage.timeHighScore), textLeft, 3*(birdApp.height/5));
	birdApp.removeEventListeners();
	birdApp.clearTimeouts();
	birdApp.createTweetButton();
	birdApp.timeouts.push(setTimeout(function(){
	birdApp.addEventListeners(birdApp.continueTouch, true);	
	birdApp.ctx.fillText("Tap anywhere to continue", textLeft, 2*(birdApp.height/5));
	}, 1000));
};