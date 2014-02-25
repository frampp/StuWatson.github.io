birdApp.birdReady = false,
birdApp.oldReady = false,
birdApp.birdImage = new Image(),
birdApp.oldImage = new Image();
birdApp.birdImage.src = "images/faby.jpg";
birdApp.oldImage.src = "images/bruised.jpg";

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

birdApp.birdImage.onload = function () {
	birdApp.birdReady = true;
};

birdApp.oldImage.onload = function () {
	birdApp.oldReady = true;
};