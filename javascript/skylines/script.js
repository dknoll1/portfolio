/*
	Daniel Knoll
	10-20-2021
	script.js
	A script that attempts to draw Seattle's skyline in a canvas
*/
'use strict'

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

//draw sky, horizon and water
ctx.fillStyle = '#3399ff';
ctx.fillRect(0, 0, 1334, 644);
let skyline = 667;
ctx.fillStyle = 'black';
ctx.fillRect(0, 644, 1334, 23);
ctx.fillStyle = '#003366';
ctx.fillRect(0,skyline,1334,221);

//draw buildings
drawBuilding(111, 333, 125, skyline-333-23);
drawBuilding(258, 518, 125, 664-528);
drawBuilding(357, 406, 125, skyline-406-23);
drawBuilding(523, 417, 125, skyline-417-23);
drawBuilding(417, 320, 125, skyline-320-23);
drawBuilding(587, 565, 125, skyline-565);
drawBuilding(647, 336, 125, skyline-336-23);
drawBuilding(727, 372, 125, skyline-372-23);
drawBuilding(829, 392, 125, skyline-392-23);
drawBuilding(1031, 386, 125, skyline-386-23);

//write seattle in corner
drawSeattle();

function drawSeattle()
{
	//write Seattle in the top right corner
	ctx.shadowBlur = 0;
	ctx.font = "101px Garamond";
	ctx.fillStyle = 'white';
	ctx.fillText("Seattle", 1021, 90);
}
function drawBuilding(x, y, width, height)
{	//function to draw building and fill it with windows
	ctx.fillStyle = 'black';
	ctx.fillRect(x,y,width,height);
	
	let j = 22;
	//draw some windows on the new buildling
	for (j += y; j < (y + height - 44); j += 22)
	{
		let i = 22;
		for (i += x; i < (x + (width - 22)); i += 22)
		{
			drawWindow(i,j,16,16);
		}
	}
}
function drawWindow(a, b, c, d) 
{
	ctx.shadowColor = 'gray';
	ctx.shadowBlur = 15;
	ctx.fillStyle = 'white';
	ctx.fillRect(a, b, c, d);
	ctx.shadowBlue = 0;
	ctx.shadowColor = 'black';
}