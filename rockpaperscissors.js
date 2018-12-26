//Rock Paper Scissors.  This classic game is modeled in Javascript, as a codeacademy.com project. In order to play the game, the user has to call the playGame() function passing in the argument either, "rock","paper", or "scissors".

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  }
  else {
    console.log('Incorrect input. Please enter a valid choice.');
  }
}

function getComputerChoice() {
 compNum = Math.floor(Math.random()*3);
 switch(compNum) {
   case 0:
     return 'rock';
     break;
   case 1:
     return 'paper';
     break;
   case 2: 
     return 'scissors';
     break;
 }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game was a tie';
  }
  
 if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Paper covers rock.  Computer wins...';
    }
    else {
      return 'Rock crushes scissors. You win!';
         }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'Paper covers rock.  You win!';
    }
    else {
      return 'Scissors cuts paper. Computer wins...';
         }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Rock crushes scissors. Computer wins...'
    }
    else {
      return 'Scissors cuts paper.  You win!';
    }
  } 
}

function playGame(userInput) { //This functi
  
  let userChoice = getUserChoice(userInput);
  console.log('You chose: ' + userChoice + '\n');
  
  let computerChoice = getComputerChoice();
  console.log('The computer chose: ' + computerChoice + '\n');
  
  console.log(determineWinner(userChoice,computerChoice));
}

playGame('scissors');

