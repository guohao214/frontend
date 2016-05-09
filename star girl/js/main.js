var can,
	ctx,
	w,
	h;


function init()
{
	can = document.getElementById('canvas');
	ctx = can.getContext("2d");

	w = can.width;
	h = can.height;

	gameLoop();
}

document.body.onload = init;

function gameLoop()
{
	drawBackground();
}

function drawBackground()
{
	ctx.fillStyle = '#393550';
	ctx.fillRect(0,0,w,h);
}