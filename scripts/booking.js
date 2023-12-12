/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let calculatedCost = document.getElementById("calculated-cost");
let daysSelected = 0;
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let weekday = [monday, tuesday, wednesday, thursday, friday];
let clearButton = document.getElementById("clear-button");
let dailyRate = 35;
let fullDay = document.getElementById("full");
let halfDay = document.getElementById("half");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function updateDaysSelected (day) {
    if (day.classList.contains("clicked")) {
        daysSelected = daysSelected;
    } else {
        day.classList.add("clicked");
        daysSelected += 1;
        recalculate();
    }
}

monday.addEventListener("click", function() {updateDaysSelected(monday);});
tuesday.addEventListener("click", function() {updateDaysSelected(tuesday);});
wednesday.addEventListener("click", function() {updateDaysSelected(wednesday);});
thursday.addEventListener("click", function() {updateDaysSelected(thursday);});
friday.addEventListener("click", function() {updateDaysSelected(friday);});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearClass(day) {
    if (day.classList.contains("clicked")) {
        day.classList.remove("clicked");
    } 
}

function clear() {
    weekday.forEach(clearClass); 
    daysSelected = 0; 
    calculatedCost.innerHTML = 0; 
}

clearButton.addEventListener("click", clear);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function changeToHalf() {
    dailyRate = 20;
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
    recalculate();
}

halfDay.addEventListener("click", changeToHalf);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function changeToFull() {
    dailyRate = 35;
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");
    recalculate();
}

fullDay.addEventListener("click", changeToFull);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
    calculatedCost.innerHTML = dailyRate * daysSelected;
}
