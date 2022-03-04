const buttons = document.querySelectorAll('.btn');
const reset = document.querySelector('.reset-btn');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.comp-score');
const result =  document.querySelector('.final-result');
const choices = ['rock','paper','scissors'];
const roundResult = document.querySelector('.round-result');
const playerPickDisplay = document.querySelector('.player-selected')
const computerPickDisplay = document.querySelector('.comp-selected')
let playerScore = 0;
let computerScore = 0;




//Gets random selection for computer
function computerPlay() {
    return choices[Math.floor(Math.random () * choices.length)];
}


//Plays a round of rps
function playRound(playerSelection,computerSelection) {

    
if (playerSelection === computerSelection) {
    roundResult.textContent = 'It\'s a Tie!';
}
if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerWin();

  }
  if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    computerWin();
  }

  // adds to player score with some text function
function playerWin() {
    playerScore++;
    playerScoreDisplay.textContent=(`Player: ${playerScore}`);
    roundResult.textContent = 'Player Wins The Round!';
 
}
// adds to computer score with some text function

function computerWin () {
    computerScore++;
    computerScoreDisplay.textContent=(`Computer: ${computerScore}`);
    roundResult.textContent = 'Computer Wins The Round!';
   
}

  if (playerScore === 5) {
     result.textContent = 'Player Wins The Game!!';
     gameOver();
     
     

  }
  if (computerScore === 5 ) {
      result.textContent = 'Computer Wins The Game!!';
       gameOver();
      
      
  }

}




// loops through the button class 
//targets the value on the buttons
//calls play round function 
//displays the computer and player selections
buttons.forEach((button) => {
    button.addEventListener('click',function (e) {
        let playerSelection = e.target.value;
        let computerSelection = computerPlay();
        playerPickDisplay.textContent = playerSelection;
        computerPickDisplay.textContent = computerSelection;
        playRound(playerSelection,computerSelection);
       
    })
   
})
//resets the game
reset.addEventListener('click', function () {
    resetGame();
    gameBtnEnabled();

})

//disables buttons when score reaches 5
function gameOver() {
     gameBtnDisabled();
        
     }

//enables game buttons for each of the buttons
function gameBtnEnabled ()  {
    for(let button of buttons) {
        button.disabled = false;
    }
}
//disables game buttons for each of the buttons
function gameBtnDisabled () {
    for(let button of buttons) {
        button.disabled = true;
    }
}


//resets the game scores and content displayed
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerPickDisplay.textContent = '';
    computerPickDisplay.textContent = '';
    playerScoreDisplay.textContent='Player:';
    computerScoreDisplay.textContent='Computer:';
    roundResult.textContent = '';
    roundResult.textContent = '';
    result.textContent = '';

}





 





    

   

    
    







 
