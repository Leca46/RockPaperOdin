const getComputerChoice = () => {
    // Create an array of objects that the 'computer' uses
    const choices = ['rock', 'paper', 'scissors']

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * choices.length)

    // Use the random index to select a random element from the choices array
    const computerChoice = choices[randomIndex]

    // Return the computer's choice
    return computerChoice
}
console.log(getComputerChoice())

const playerSelection = prompt();
const computerSelection = getComputerChoice();

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win! Rock beats  scissors');
    }
    return `You played ${playerSelection} and the computer played ${computerSelection}.`;
}
console.log(playRound(playerSelection, computerSelection));

// const playGame = () => {
//     playRound()
//     playRound()
//     playRound()
//     playRound()
//     playRound()
// }