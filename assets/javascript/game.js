// Generate a random number at the beginning of each game. (probably 1-20)

// Make the gems clickable.

// Assign a random value to each gem. (probably 1-5)

// When a gem is clicked, push the value to the overall score and continue to do so with each click

// Create if statement for a "win" to reset the game and update the wins column.

// Create if statement for a "loss" to reset the game and update the losses column.




$(document).ready(function() {

//create a random goal number between 1-50 
var randomNumber = Math.floor(Math.random() * 50);
console.log(randomNumber);


// create variables for wins, losses, and total_score
var total_score = 0;

var wins = 0;

var losses = 0;



// create vaiables for each crystal and assign them a random value 
var button1 = Math.floor(Math.random() * 13);
console.log(button1)

var button2 = Math.floor(Math.random() * 13);
console.log(button2)

var button3 = Math.floor(Math.random() * 13);
console.log(button3)

var button4 = Math.floor(Math.random() * 13);
console.log(button4)


// var goal = "";

// create a reset function to be called in the case of a win or loss to reset values, random numbers, and the goal
var reset = function (){
    total_score = 0;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("game-score").innerHTML = total_score;
    randomNumber = Math.floor(Math.random() * 50);
    $("#goal").html(randomNumber);
    button1 = Math.floor(Math.random() * 13);
    button2 = Math.floor(Math.random() * 13);
    button3 = Math.floor(Math.random() * 13);
    button4 = Math.floor(Math.random() * 13);
}

// create an update function to be called in the case of a win or loss to update wins and losses.
// var update = function (){
//     if (total_score === randomNumber){
//         wins++;
//     }
//     else if (total_score > randomNumber){
//         losses++;
//     }
// }

// push random number to the empty "goal" span

$("#goal").html(randomNumber);






// add the gem value to total score.

$("#gem1").on("click", function() {

    total_score += button1;


    $("#game-score").html(total_score);

    checkCount();
   
})

$("#gem2").on("click", function() {

    total_score += button2;

    $("#game-score").html(total_score);

    checkCount();

 })

$("#gem3").on("click", function() {

    total_score += button3;

    $("#game-score").html(total_score);

    checkCount();
   
})

$("#gem4").on("click", function() {

    total_score += button4;
    
    $("#game-score").html(total_score);

    checkCount();    

 })





var checkCount = function() {
    if (total_score === randomNumber) {
        // wins++;
        // update();
        wins++;
        alert("Congratulations! You collected the EXACT value! Let's play again!");
        reset();
        
    } else if (total_score > randomNumber) {
        // losses++;
        // update();
        losses++;
        alert("Almost! Try again!");
        reset();

    }
};




});