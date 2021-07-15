// Declaring variables for each IDS
var counterPlaceHolder = document.getElementById("counter-placeholder");
var btnLowercount = document.getElementById("btn-LOWER COUNT");
var btnAddcount = document.getElementById("btn-ADD COUNT");


var number = 0;

// Function to change color of the number 
// If number is less than 0 color is red, if more than 0 color is green and if 0, color is white.

function changeColor(number){
    var color = "";
    // if(number < 0 ){
    //     color = "red";
    if (number > 0 ){
        color = "green";
    }else{
        color="white";
    }
    return color;
}

btnAddcount.addEventListener("click", function(){
    number++;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});

btnLowercount.addEventListener("click", function(){
    number--;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});