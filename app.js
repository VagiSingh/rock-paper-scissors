
const computerSelection= function getComputerChoice(){
const random = Math.random();

if(random>0 && random<=0.33){
  return "rock";
}
else if (random>0.33 &&random<=0.66){
   return "paper";
}
else{
    return "scissors";
}
};


const playerSelection = function getPlayerChoice(){
  const enteredValue = prompt("Enter your choice : Rock , Paper or Scissors.")
  const playerChoice= enteredValue.toLowerCase();
  return playerChoice;
} 
let computerPoint=0; let playerPoint=0;

function gameRound(computerChoice, playerChoice){
  if(computerChoice==playerChoice){
    alert("It was a Tie!");
    return;
  }
  else if (computerChoice=="rock" && playerChoice == "paper"){
    alert("You Won!🙌")
    playerPoint ++;
    return;
  }
  else if (computerChoice=="paper" && playerChoice == "scissors"){
    alert("You Won!🙌")
    playerPoint ++;
    return;
  }
  else if (computerChoice=="scissors" && playerChoice == "rock"){
    alert("You Won!🙌")
    playerPoint ++;
    return;
  }
  else if (computerChoice=="scissors" && playerChoice == "paper"){
    alert("You lost.😢")
    computerPoint ++;
    return;
  }
  else if (computerChoice=="rock" && playerChoice == "scissors"){
    alert("You lost.😢")
    computerPoint ++;
    return;
  }
  else if (computerChoice=="paper" && playerChoice == "rock"){
    alert("You lost.😢")
    computerPoint ++;
    return;
  }

}


function playGame(){
  while(playerPoint + computerPoint!=5){
    gameRound(computerSelection(),playerSelection());
  }
  if(playerPoint>computerPoint){
    alert("Congratulation!You Won!🎉 Computer's Score:"+computerPoint+" Your Score:"+playerPoint);
    return;
  }
  else{
    alert("Computer Won.Better luck next time. Computer's Score:"+computerPoint+" Your Score:"+playerPoint);
    return;
  }
}

playGame()