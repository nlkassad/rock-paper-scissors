function getUserChoice() {
  var userInput = prompt('What is your choice?');
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid entry');
  }
}

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 2);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'scissors';
    case 2:
      return 'paper';
 	}
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'User blew up the game';
  }
  if (userChoice === computerChoice) {
    return 'Tie game';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer is the winner';
    } else {
      return 'User is the winner';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer is the winner';
    } else {
      return 'User is the winner';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer is the winner';
    } else {
      return 'User is the winner';
    }
  }
}

function playGame() {
  var userChoice = getUserChoice();
  console.log(userChoice);
  var computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
