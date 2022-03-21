/*	Author: Daniel Knoll & Josh Archer 
 *	Date:	 December 3, 2021
 *	Description: Script to attempt doing things to the not so great color factory website
 */
'use strict'

let button = document.querySelector("button");	
let colorBox = document.querySelectorAll("#colorBox");
let container = document.querySelector(".container");

button.onclick = function(event) 
{
    colorBox.forEach(el =>
	{
		el.style.backgroundColor = rgbRand();
	});
}

container.addEventListener('click', function saveColor(event)
{
    //store the square clicked on
    let square = event.target;
	
    //do something with the square...
	let table = document.querySelector("table");
	let tr = document.createElement("tr");
	let td1 = document.createElement("td");
	let td2 = document.createElement("td");
	
	if (table.childElementCount % 2 == 0)
	{
		td1.style.backgroundColor = "white";
	}
	else
	{
		td1.style.backgroundColor = "gray";
	}
	
	td1.append(square.style.backgroundColor);
	td2.style.backgroundColor = square.style.backgroundColor;
	tr.append(td1);
	tr.append(td2);
	table.appendChild(tr);
});

function rgbRand()
{
	return "rgb(" + randomNum() + ", " + randomNum() + ", " + randomNum() + ")";
}

function randomNum()
{
    return Math.floor(Math.random() * (255 - 0)) + 0;
}

