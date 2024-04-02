const getcomputerSelection = () => {
    // Create an array of objects that the 'computer' uses
    const choices = ['rock', 'paper', 'scissors']

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * choices.length)

    // Use the random index to select a random element from the choices array
    const computerSelection = choices[randomIndex]

    // Return the computer's choice
    return computerSelection
}
console.log(getcomputerSelection())

const playerSelection = prompt();
const computerSelection = getcomputerSelection();

const playRound = (playerSelection, computerSelection) => {
    if ((playerSelection === computerSelection) && (computerSelection === playerSelection)) {
        console.log("It's a tie!");
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return "You Win! Scissors beats paper!";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        return "You Lose! Rock beats scissors!";
    } 
    else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return "You Lose! Paper beats rock!";
    } 
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return "You Win! Rock beats scissors!";
    } 
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return "You Win! Paper beats rock!";
    } 
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        return "You Lose! Scissors beats paper!";
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