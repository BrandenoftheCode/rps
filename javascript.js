let playerInput = prompt('Test your luck! Input Rock, Paper, or Scissors:', );
if (playerInput.toLowerCase() === 'rock' || playerInput.toLowerCase() === 'paper' || playerInput.toLowerCase() === 'scissors') {
    console.log(playerInput.toLowerCase());
}
 else {
    alert('You didnt enter your choice correctly!')
 } // Determines if player inputted their play correctly; returns error message if they didn't.

let computerChoiceArray = ['Rock', 'Paper', 'Scissors'];
let computerInput = computerChoiceArray[Math.floor(Math.random() *computerChoiceArray.length)]; // Determines play for computer.

console.log(computerInput);

function playRound(playerInput, computerInput) {
    if (playerInput === 'rock' && computerInput === 'Rock') {
       console.log('Its a tie! Play again :)');
    } else {
        console.log('you fucked up');
    }
}