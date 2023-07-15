console.log('Hello! Try to win me!');
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || 
      userInput === 'paper' ||
      userInput === 'scissors' ||
      userInput === 'cake') {
        return userInput;
      } else {
        console.log('Error! (1st if)');
      };
}

const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log('Error! 1st switch');
      break;
  };
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (userChoice === 'cake') {
    return 'You know the secret.. MasterUser WIN!'
  } else if (computerChoice === 'paper' && userChoice === 'rock') {
    return 'Paper beats rock! Computer win!';
  } else if (computerChoice === 'paper' && userChoice === 'scissors') {
    return 'Scissors beats paper! You\'re win!';
  } else if (computerChoice === 'rock' && userChoice === 'scissors') {
    return 'Rock beats scissors! Computer win!';
  } else if (computerChoice === 'rock' && userChoice === 'paper') {
    return 'Paper beats rock! You\'re win!';
  } else if (computerChoice === 'scissors' && userChoice === 'paper') {
    return 'Scissors beats paper! Computer win!';
  } else if (computerChoice === 'scissors' && userChoice === 'rock') {
    return 'Rock beats scissors! You\'re win!';
  } else {
    return 'Error! Final If.'
  }
}

function playGame (value) {
  let userChoice = getUserChoice(value);
  let computerChoice = getComputerChoice()
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame('rock') // Enter 'rock', 'paper' or 'scissord'?
