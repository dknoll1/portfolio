/*
    This file calculates the cost of theme park tickets when
    the user clicks the calculate button. 
    Author:	Josh Archer, Daniel Knoll 
    File:	tickets.js
    Date:	October 6, 2021
*/

let button = document.querySelector("button");
button.onclick = function(event) {
    //prevent the form from submitting
    event.preventDefault();

    //your code goes here...
	//declaring and assigning variables
	let adultPrice = document.getElementById("adultPrice");
	let childPrice = document.getElementById("childPrice");
	let adultQuantity = document.getElementById("adultQuantity");
	let childQuantity = document.getElementById("childQuantity");
	let sumOfProduct = document.getElementById("sumOfProduct");
	
	//getting what we really need out of the variables/inputs
	let adultPriceValue = adultPrice.value ? parseFloat(adultPrice.value) : 35;
	let childPriceValue = childPrice.value ? parseFloat(childPrice.value) : 25;
	let adultQuantityValue = parseInt(adultQuantity.value);
	let childQuantityValue = parseInt(childQuantity.value);
	
	/*
	search for toFixed(x) function for adding decimal when no cents are involved:
	https://www.codegrepper.com/code-examples/javascript/javascript+int+to+float+2+decimal
	*/
	let result = (adultPriceValue * adultQuantityValue + childPriceValue * childQuantityValue);
	sumOfProduct.innerHTML = `Total cost for tickets: $${result.toFixed(2)}`;
}