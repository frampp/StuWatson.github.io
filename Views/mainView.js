birdApp.bgReady = false,
birdApp.bgImage = new Image(),
birdApp.width = window.innerWidth,
birdApp.height = window.innerHeight;
birdApp.bgImage.src = "images/Sky_Blue.png";
birdApp.canvas = document.querySelector("canvas");
birdApp.canvas.width = birdApp.width;
birdApp.canvas.height = birdApp.height;
birdApp.ctx = birdApp.canvas.getContext("2d");

birdApp.drawBg = function() {
	birdApp.ctx.drawImage(birdApp.bgImage, 0, 0, birdApp.width, birdApp.height);
	birdApp.ctx.fill();
};

birdApp.removeHtml = function (array) {
	var html;
	for (var i = 0; i<array.length; i++){
		html = document.querySelector(array[i]);
		html.style.display = 'none';
	}
};

birdApp.bgImage.onload = function () {
	birdApp.bgReady = true;
	birdApp.drawMenu();
};
