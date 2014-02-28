birdApp.drawMenu = function() {
	birdApp.clearTimeouts();
	birdApp.drawBg();
	birdApp.ctx.font=(birdApp.height/30)+"px sans-serif";
	birdApp.ctx.fillText("Timer Mode", birdApp.width/4, birdApp.height/5);
	birdApp.ctx.fillText("Survival Mode", birdApp.width/4, 2*(birdApp.height/5));
	birdApp.ctx.fillText("How To Play", birdApp.width/4, 3*(birdApp.height/5));
	birdApp.removeEventListeners();
	birdApp.addEventListeners(birdApp.menuTouch);
	birdApp.ctx.font=(birdApp.height/30)+"px sans-serif"; 
	birdApp.ctx.fillText("Survival Best\n"+ (localStorage.survHighScore ? localStorage.survHighScore : 0),
		birdApp.width/20,
		7*(birdApp.height/8));
	birdApp.ctx.fillText("Timer Best\n"+ (localStorage.timeHighScore ? localStorage.timeHighScore : 0),
		5*(birdApp.width/9), 
		7*(birdApp.height/8));
};