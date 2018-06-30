// Generate a random number at the beginning of each game. (probably 1-20)

// Make the gems clickable.

// Assign a random value to each gem. (probably 1-5)

// When a gem is clicked, push the value to the overall score and continue to do so with each click

// Create if statement for a "win" to reset the game and update the wins column.

// Create if statement for a "loss" to reset the game and update the losses column.

// maybe display:none for the gem values.


$(document).ready(function() {

var randomNumber = Math.floor(Math.random() * 20);

var gem_value = Math.floor(Math.random() * 20);

var total_score = [];

var wins = 0;

var losses = 0;

var reset = function (){
    document.getElementById("Wins").innerHTML = wins;
    document.getElementById("Losses").innerHTML = losses;
    document.getElementById("Score").innerHTML = total_score;
}

// onclick function for gems to be assigned random value
$("#gem1").on("click", function() {

    gem_value = Math.floor(Math.random() * 20)
}

$("#gem2").on("click", function() {

    gem_value = Math.floor(Math.random() * 20)
}

$("#gem3").on("click", function() {

    gem_value = Math.floor(Math.random() * 20)
}

$("#gem4").on("click", function() {

    gem_value = Math.floor(Math.random() * 20)
}











// onclick function for gem buttons to push to scoreboard
$(".to_scoreboard").on("click", function() {

    $("#gem_value").prepend("<br><hr>" + to_scoreboard);




}


// if - win scenario
if (total_score === randomNumber) {
    wins++
    alert("Congratulation! You collected the EXACT value! Let's play again!");
}




});