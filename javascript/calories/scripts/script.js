'use strict'

//this registers the button click events when the
//page loads
window.onload = function() 
{
    //register button events when the page loads
    document.getElementById("lbs-to-kgs").onclick = lbsToKgs;
    document.getElementById("workout-to-met").onclick = workoutToMet;
    document.getElementById("calc-calories").onclick = calculateCalories;
}

//convert lbs to kgs from the input fields in the
//page and send output to the console
function lbsToKgs()
{
    let lbs = checkMissing(document.getElementById("lbs").value, 'Pounds');
    if (lbs >= 0) {   
        let kgs = (lbs * 0.453592).toFixed(2);
        output(`${lbs} pound is ${kgs} kilograms.`);
        document.getElementById("kgs").value = `${kgs}`;
    }
    else 
    {
        return;
    }
}

//determine MET value for exercises in the dropdown
//list and send output to the console
function workoutToMet() 
{
    /*
    //https://ricardometring.com/getting-the-value-of-a-select-in-javascript
    //I needed to find a way to locate the text in each option (.text)
    let workout = parseInt(document.getElementById("workouts").value) + 0.00;
    let arr = document.getElementById("workouts").options;
    for (let i = 1; i < arr.length; i++) 
    {
        if (workout === parseInt(arr[i].value) + 0.00) 
        {
            output(`WO1: ${arr[i - 1].text} has a MET value of ${workout}.`); 
        }
    }
    //and from the same website learned an even easier way
    let workout2 = document.getElementById("workouts");
    output(`WO2: ${workout2.options[workout2.selectedIndex].text} has a MET value of ${workout2.options[workout2.selectedIndex].value}.`);
        */
    //what the assignment requests of us
    let workout3 = checkMissing(document.getElementById("workouts").value, 'MET');
    let text;

    switch(workout3)
    {
        case '2.80':
            text = 'Light effort situps';
            break;
        case '8.00':
            text = 'Vigorous push ups, sit ups, jumping jacks';
            break;
        case '2.50':
            text = 'Washing dishes';
            break;
        case '3.30':
            text = 'Vacuuming';
            break;
        case '3.50':
            text = 'Moderate Effort Cooking';
            break;
        case '2.00':
            text = 'Light Effort Cooking';
            break;
        case '1.75':
            text = 'Classical Guitar';
            break;
        case '4.00':
            text = 'Electric Bass (Standing)';
            break;
        case '1.50':
            text = 'Card Games (Sitting)';
            break;
        default:
            text = 'Doing some error you found';
    }
    output(`${text} has a MET value of ${workout3}`);
    document.getElementById("met").value = `${parseFloat(workout3).toFixed(2)}`;
}

//Calculates the calories burned per minute, given
//the inputs from the page and sends the output
//to the console
function calculateCalories() 
{
    let met = checkMissing(document.getElementById("met").value, 'MET');
    let kgs = checkMissing(document.getElementById("kgs").value, 'Weight in kgs');
    
    if (met >= 0 && kgs >= 0)
    {
        let cburned = ((met * 3.5 * kgs) / 200).toFixed(2);
        output(`MET ${met}, weight ${kgs} - burns ${cburned} calories per minute.`);
        document.getElementById("kgs").value = `${kgs}`;
    }
    else 
    {
        return;
    }
}


function checkMissing(field, name) 
{
    if (field === '') {
        output(`${name} field is empty!`);
        return -1;
    }
    field = parseFloat(field).toFixed(2);
    if (field >= 0 && field != NaN) {
        return field;
    } else if (field < 0) {
        output(`Are you a ghost?`);
		return field;
    } else if (!(field >= 0)) {
        output(`${name} value not found! A numeric value must be entered.`);
        return -1;
    } else {
        output(`Something went wrong that may be out of the scope of this assignment`);
        return -1;
    }
}

//this function takes the provided message and prints
//it to the console on the page
function output(message)
{
    let console = document.getElementById("console");
    console.innerHTML = message + "\n" + console.innerHTML;
}