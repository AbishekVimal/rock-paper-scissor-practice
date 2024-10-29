let score= JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
};

updateScoreElement();

//Game Functionality
function playGame(playerMove){
  const computerMove= pickComputerMove();
  let result='';
  //CASE-ROCK
  if(playerMove==='rock'){
      if(computerMove==='rock'){
      result='Tie';
      }
      else if(computerMove==='paper'){
        result='You Lose';
      }
      else if (computerMove === 'scissors'){
        result='You win';
      }
  }
  //CASE-PAPER
  else if(playerMove==='paper'){
    if(computerMove==='rock'){
      result='You win';
      }
      else if(computerMove==='paper'){
        result='Tie';
      }
      else if (computerMove === 'scissors'){
        result='You Lose';
      }
  }
  //CASE-SCISSORS
  else if(playerMove==='scissors'){
    if(computerMove==='rock'){
      result='You Lose';
      }
      else if(computerMove==='paper'){
        result='You win';
      }
      else if (computerMove === 'scissors'){
        result='Tie';
      }
  }

  if(result==='You win'){
    score.wins+=1;
  } else if(result==='You Lose'){
    score.losses+=1;
  } else if(result==='Tie'){
    score.ties+=1;
  }

  localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML=result;

  document.querySelector('.js-moves').innerHTML=`You
    <img src="Images/${playerMove}-emoji.png" class="move-icon" >
    <img src="Images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML =  `Wins:${score.wins}, Losses:${score. losses}, Ties: ${score.ties}` ;
}

//Generating Computer Move
function pickComputerMove(){
let computerMove='';
const randomNumber=Math.random();


if(randomNumber >=0 && randomNumber < 1/3){
  computerMove = 'rock';
}else if(randomNumber >= 1/3 && randomNumber < 2/3){
  computerMove = 'paper';
}else if(randomNumber >= 2/3 && randomNumber < 1){
  computerMove = 'scissors';
}

return computerMove;
}