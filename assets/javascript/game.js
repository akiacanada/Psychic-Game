// =========================================================
// THE OBJECTIVE OF THIS APPLICATION IS SUPPOSED TO?
// SELECT RANDOM LETTER
// User key input 
// Compare random generated letter with user input
// generated letter matches user input, user gets an add to wins
// when user wins they are alerted 
// =========================================================

var wins = document.getElementById("wins");
console.log(wins);
wins.innerHTML = 0;

var losses = document.querySelector("#losses");
console.log(losses);
losses.innerHTML = 0;

var guesses = document.getElementById("guesses");
console.log(guesses);
guesses.innerHTML = 10;

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerGuess = selectARandomLetter();

function selectARandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
console.log(computerGuess)


console.log(document);

document.addEventListener('keydown', function(event) {
    console.log(event);
    console.log(event.key);
    if (computerGuess == event.key) {
    	alert("Are you psycic?");
    	wins.innerHTML++;
    	computerGuess = selectARandomLetter();
    }

    else {
    	alert("You are no clairvoyant.");
    	if (guesses.innerHTML>0) {
    		guesses.innerHTML--;}
    	else{guesses.innerHTML = 10;}
    	
    }

    if (guesses.innerHTML == 0){

    	alert("better luck next, Madame Cleo");
    	losses.innerHTML++;
    }

});
