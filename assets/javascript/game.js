// Generate a random number at the beginning of each game. (probably 1-20)

// Make the gems clickable.

// Assign a random value to each gem. (probably 1-5)

// When a gem is clicked, push the value to the overall score and continue to do so with each click

// Create if statement for a "win" to reset the game and update the wins column.

// Create if statement for a "loss" to reset the game and update the losses column.

// maybe display:none for the gem values.


$(document).ready(function() {

var randomNumber = Math.floor(Math.random() * 50);
console.log(randomNumber);

// var gem_value = Math.floor(Math.random() * 20);

var total_score = 0;

var wins = 0;

var losses = 0;

// total_score = game-score;

var button1 = Math.floor(Math.random() * 13);
console.log(button1)

var button2 = Math.floor(Math.random() * 13);
console.log(button2)

var button3 = Math.floor(Math.random() * 13);
console.log(button3)

var button4 = Math.floor(Math.random() * 13);
console.log(button4)


// var goal = "";

var reset = function (){
    document.getElementById("Wins").innerHTML = wins;
    document.getElementById("Losses").innerHTML = losses;
    document.getElementById("Score").innerHTML = total_score;
}

// push random number to the empty "goal" span

$("#goal").html(randomNumber);






// onclick function for gems to be assigned random value
// add the gem value to total score.

$("#gem1").on("click", function() {

    total_score += button1;


    $("#game-score").html(total_score)
    // gem_value = Math.floor(Math.random() * 20)
    // console.log(gem_value)
})

$("#gem2").on("click", function() {

    total_score += button2;

    $("#game-score").html(total_score)
//     gem_value = Math.floor(Math.random() * 20)
 })

$("#gem3").on("click", function() {

    total_score += button3;

    $("#game-score").html(total_score)
    // gem_value = Math.floor(Math.random() * 20)
})

$("#gem4").on("click", function() {

    total_score += button4;
    
    $("#game-score").html(total_score)

//     gem_value = Math.floor(Math.random() * 20)
 })





// onclick function for gem buttons to push to scoreboard


// $(".to_scoreboard").on("click", function() {

//     total_score.push(gem_value);


//     // $("#gem_value").prepend("<br><hr>" + game_score);

// }


// if - win scenario
if(game-score === randomNumber) {
    wins++;
    alert("Congratulation! You collected the EXACT value! Let's play again!");
    randomNumber = Math.floor(Math.random() * 50);
}

if(game-score > randomNumber) {
    losses++;
    alert("Almost! Try again!");
    randomNumber = Math.floor(Math.random() * 50);
}

reset();



});