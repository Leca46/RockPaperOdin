let playerScore = 0;
let computerScore = 0;

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

// const playerSelection = prompt();
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
// console.log(playRound(playerSelection, computerSelection));

const createButton = (text) => {
    const button = document.createElement('button');
    button.textContent = text;
    return button;
}

const btnRock = createButton('Rock');
const btnPaper = createButton('Paper');
const btnScissors = createButton('Scissors');

document.body.appendChild(btnRock);
document.body.appendChild(btnPaper);
document.body.appendChild(btnScissors);

btnRock.addEventListener('click', () => {
    const computerSelection = getcomputerSelection();
    const result =  playRound("rock", computerSelection);
    console.log(result)
    if (result.startsWith('You Win!')) {
        playerScore++;
    }
    if (result.startsWith('You Lose!')) {
        computerScore++
    }
    scoreBoard(playerScore, computerScore);
})


btnPaper.addEventListener('click', () => {
    const computerSelection = getcomputerSelection();
    const result =  playRound("paper", computerSelection);
    console.log(result)
    if (result.startsWith('You Win!')) {
        playerScore++;
    }
    if (result.startsWith('You Lose!')) {
        computerScore++
    }
    scoreBoard(playerScore, computerScore);
})


btnScissors.addEventListener('click', () => {
    const computerSelection = getcomputerSelection();
    const result =  playRound("scissors", computerSelection);
    console.log(result)
    if (result.startsWith('You Win!')) {
        playerScore++;
    }
    if (result.startsWith('You Lose!')) {
        computerScore++
    }
    scoreBoard(playerScore, computerScore);
})

const container = document.createElement('div');
document.body.appendChild(container);

container.appendChild(btnRock)
container.appendChild(btnPaper)
container.appendChild(btnScissors)

const scoreBoard = (playerScore, computerScore) => {
    const div = document.getElementById("score-board");
    if (!div) {
        const newDiv = document.createElement('div');
        newDiv.id = "score-board";
        container.appendChild(newDiv);

        const playerScoreSpan = document.createElement("span");
        playerScoreSpan.id = 'player-score';
        playerScoreSpan.textContent = `Player: ${playerScore}`;
        newDiv.appendChild(playerScoreSpan);

        const computerScoreSpan = document.createElement("span");
        computerScoreSpan.id = 'computer-score';
        computerScoreSpan.textContent = ` Computer: ${computerScore}`
        newDiv.appendChild(computerScoreSpan);
    } else {
        const playerScoreSpan = document.getElementById('player-score');
        playerScoreSpan.textContent = `Player: ${playerScore}`;

        const computerScoreSpan = document.getElementById('computer-score');
        computerScoreSpan.textContent = ` Computer: ${computerScore}`;
    }

    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore > computerScore? "Player" : "Computer";
        alert(`${winner} has won the game!`);
    }
}