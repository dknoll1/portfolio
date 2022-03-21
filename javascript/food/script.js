/*
 * Author: Daniel Knoll / Josh Archer
 * Date: November 10, 2021
 * Description: a script to affect the index.html webpage using a dataset from data.js 
 */

'use strict'

//get access to our buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let index = 0;

//doing the quantity in the top left section
let numNeeded = document.getElementById("numElements");
numNeeded.innerHTML = `<p>This is a dataset about food and how much nutrients they have. There are ${dataArray.length} elements in the dataset.`;

//doing the averages and statistics for the rightside pannel starting with water average
let waterSum = 0;
for (let i = 0; i < dataArray.length; i++)
{
	waterSum += dataArray[i].Data.Water
}
let count = 0;
for (let i = 0; i < dataArray.length; i++)
{
	if (dataArray[i].Category.includes('Milk')) // needa make this 'contains' type function to include soy/almond type milks (google 'string contains javascript'-> saw it is 'includes()' on w3schools link)
	{
		count++;
	}
}

let protein = 0;
let mostProtein = 'hotdogs';
for (let i = 0; i < dataArray.length; i++)
{
	{
	if (dataArray[i].Data.Protein > protein)
		mostProtein = dataArray[i].Description;
	}
}

let sugar = 0;
let mostSugar = 0;
for (let i = 0; i < dataArray.length; i++)
{
	{
	if (dataArray[i].Data['Sugar Total'] > sugar)
		mostSugar = dataArray[i].Description;
	}
}

let asideStats = document.getElementById("data12");
asideStats.innerHTML = 	`<h3>Here are some interesting facts in my dataset!</h3><ul>` +
						`<li>The average amount of water in our food is <u>${waterSum / dataArray.length}</u> grams.</li>` +
						`<li>There are <u>${count}</u> types of milk in the dataset.</li>` +
						`<li>The most protein-rich food is <u>${mostProtein}</u></li>` + /*lol hopefully there's time to fix this later*/
						`<li>The most sugary food is <u>${mostSugar}</u></li></ul>`;/*ugh, it's always the hamburger sauce ?!?!?!*/

//display the index 0 foods data
display();

//responds to clicks of the "previous" button
previous.onclick = function(event) {
    if (index == 0)
	{
		index = dataArray.length - 1;
	}
	else
	{
		index--;
	}
	display();
}

//responds to clicks of the "next" button
next.onclick = function(event) {
	if (index === dataArray.length - 1)
	{
		index = 0;	
	}
	else
	{
		index++;
	}
    display();
}

//shows the current record in the array of records
//at the position within the index variable
function display()
// Category, Description, Nutrient Data Bank Number, Data, Fat, Major Minerals, Vitamins
{
	document.getElementById("data1").innerHTML = "Category: " + dataArray[index].Category;
	document.getElementById("data2").innerHTML = "Description: " + dataArray[index].Description;
	document.getElementById("data3").innerHTML = "Unique Number: " + dataArray[index]['Nutrient Data Bank Number'];
	document.getElementById("data4").innerHTML = "Carbohydrates: " + dataArray[index].Data.Carbohydrate;
	document.getElementById("data5").innerHTML = "Fiber: " + dataArray[index].Data.Fiber;
	document.getElementById("data6").innerHTML = "Protein: " + dataArray[index].Data.Protein;
	document.getElementById("data7").innerHTML = "Total Sugar: " + dataArray[index].Data['Sugar Total'];
	document.getElementById("data8").innerHTML = "Water: " + dataArray[index].Data.Water;
	document.getElementById("data9").innerHTML = "Monosaturated Fat: " + dataArray[index].Data.Fat['Monosaturated Fat'];
	document.getElementById("data10").innerHTML = "Polysaturated Fat: " + dataArray[index].Data.Fat['Polysaturated Fat'];
	document.getElementById("data11").innerHTML = "Saturated Fat: " + dataArray[index].Data.Fat	['Saturated Fat'];
	console.log("Position",index);
	console.log(dataArray[index]);
}
